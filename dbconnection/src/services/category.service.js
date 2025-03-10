const db = require("../helpers/db.helper");
const { Op } = require("sequelize");

module.exports = {
  create,
  fetchAll,
  findOne,
  deleteCategory,
  update,
};
async function create(params) {  //parameters
  if (
    await db.Category.findOne({  //check if it's have same name
      where: { category_name: params.category_name },
    })
  ) {
    return "Category " + params.category_name + " is already exists";
  }
  const category = new db.Category(params);  // create new object

  await category.save();  // category saved successfully
  return category;
}
async function fetchAll() {
  return await db.Category.findAll();   //list out or fetch all categories in object formate      same as select * from table_name
}
async function findOne(id, callback) {
  getCategory(id)
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}
async function update(id, params) {
  const category = await getCategory(id);
  const nameChanged =
    params.category_name && params.category_name !== category.category_name;   //if parameter is laready in param we can say if object value is changed or not
  if (
    nameChanged &&
    (await db.Category.findOne({
      where: { category_name: params.category_name },
    }))
  ) {
    return "Category with name " + params.category_name + " is already exists";
  }
  Object.assign(category, params);   //assign values in category
  await category.save();
  return category;
}
async function deleteCategory(id) {
  const category = await getCategory(id);

  if (category.category_status) {
    category.category_status = false;
  } else {
    category.category_status = true;
  }
  await category.save();
  return category;
}
async function getCategory(id) {
  const category = await db.Category.findByPk(id);  //pk = primary key of category
  if (!category) return "Category not found";
  return category;
}

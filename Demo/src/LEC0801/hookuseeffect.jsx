// 1.useEffect is for managing side effects in functional components.
// 2. Dependencies array ([]) controls when the effect runs:
// 3. []: Runs once after the initial render.
// 4. [var1, var2]: Runs whenever var1 or var2 changes.
// 5. Omission of []: Runs on every render.
// 6. For your use case (fetching data), you should include [] to avoid repeated API calls.



import * as React from "react";
 function fetchuserData (){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve({x:"RKu Student",y:1});
        },5000);
    });
 }

 function ApiSimulation(){
    const [name ,setName] = React.useState("Loading......");
    const [id ,setId] = React.useState("Loading,");
    React.useEffect(() =>{
        fetchuserData().then((abc)=>{
            setName(abc.x);
            setId(abc.y);
        });
    });

    return(
        <div>
            User:{name}
            <br/>
            Id: {id}
        </div>
    );
 }

 export default ApiSimulation;
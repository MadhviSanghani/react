import React from "react";
import image1 from "../../public/d kiba.jpg";
import image2 from "../../public/d naruto.jpg";
import image3 from "../../public/d shinigami.jpg";

function Card() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={image1} className="card-img-top" alt="..." width={300} height={500}></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src={image2} className="card-img-top" alt="..." width={300} height={500}></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src={image3} className="card-img-top" alt="..." width={300} height={500}></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

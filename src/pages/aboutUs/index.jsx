import * as React from 'react';
import './about.css';
export default function AboutUs() {


    return(<>
<div className="container-fluid bg-primary mb-5" >  
        <div className="d-flex flex-column align-items-center justify-content-center" style={{marginTop:'0px', minHeight: "400px" ,backgroundColor:'#79b7c0'}}>
        <h3 className="display-3 font-weight-bold text-white" style={{marginTop:'0px',fontFamily: '"Handlee", cursive'}}>About Us</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0"><a className="text-white" style={{fontFamily:'"Handlee", cursive'}}>Home</a></p>
          <p className="m-0 px-2">/</p>
          <p className="m-0" style={{fontFamily:'"Handlee", cursive'}}>About Us</p>
        </div>
      </div>
</div>
<div className="container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
          {/* //  <img className="img-fluid rounded mb-5 mb-lg-0" src="img/about-1.jpg" alt=""> */}
          </div>
          <div className="col-lg-7">
            <p className="section-title pr-5">
              <span className="pr-2">Learn About Us</span>
            </p>
            <h1 className="mb-4">Best School For Learning English</h1>
            <p>
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
            <div className="row pt-2 pb-4">
              <div className="col-6 col-md-4">
                {/* <img class="img-fluid rounded" src="img/about-2.jpg" alt=""> */}
              </div>
              <div className="col-6 col-md-8">
                <ul className="list-inline m-0">
                  <li className="py-2 border-top border-bottom">
                    <i className="fa fa-check text-primary mr-3"></i>Labore eos amet
                    dolor amet diam
                  </li>
                  <li className="py-2 border-bottom">
                    <i className="fa fa-check text-primary mr-3"></i>Etsea et sit
                    dolor amet ipsum
                  </li>
                  <li className="py-2 border-bottom">
                    <i className="fa fa-check text-primary mr-3"></i>Diam dolor diam
                    elitripsum vero.
                  </li>
                </ul>
              </div>
            </div>
            <a  className="btn btn-primary mt-2 py-2 px-4">Learn More</a>
          </div>
        </div>
      </div>
    </div>
        </>
    );
};

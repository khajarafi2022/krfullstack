import React from 'react';
import { Link } from 'react-router-dom';
import laptop from "../images/2022trailers.png";

const Electronics = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 ps-5">
            <div className="feature-section mt-5">
              <h1 className='display-3 fs-1'>2022 Movie Trailers</h1>
              <h3 className='display-1 fs-4'>Watch all the 2022 movies tarilers here <br/>Our Video, Your Happiness</h3>
              <Link to="/Electronics1" className="btn btn-warning mt-4 ps-5 pe-5" as="a" href="/Login" target="_blank">Watch Now &rarr;</Link>
            </div>
          </div>
          <div className="col-md-6">
          <img className='pe-5 w-100 rounded' src={laptop} alt="2022trailers" style={{ borderRadius: '10px' }} />   
          </div>
        </div>
      </div>
    </>
  )
}

export default Electronics;

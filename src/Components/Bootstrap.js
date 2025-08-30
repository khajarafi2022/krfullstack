import React from 'react';

const Bootstrap = () => {
    return (
        <>
            <div className="container primevideo1">
                <h1 className='display-3 fs-1 mt-4'>Bootstrap</h1>
                <hr />
                <div className="row mt-5">
                    <div className="col-md-6">
                    <iframe id="video1" className="rounded-video" width="600" height="300"
                            src="https://archive.org/embed/1.-introduction-of-bootstrap"
                            title="Sita Ramam"
                            allowFullScreen
                        ></iframe>
                        <p className="movie-title">Introduction of Bootstrap</p>
                    </div>
                    <div className="col-md-6">
                    <iframe id="video1" className="rounded-video" width="600" height="300"
src="https://archive.org/embed/2.-typography-and-tables"
                            title="Sita Ramam"
                            allowFullScreen
                        ></iframe>
                        <p className="movie-title">Typography & Tables</p>
                    </div>

                    <div className="col-md-6">
                    <iframe id="video1" className="rounded-video" width="600" height="300"
src="https://archive.org/embed/3.-list-forms-and-buttons"
                            title="Sita Ramam"
                            allowFullScreen
                        ></iframe>
<p className="movie-title">List,Forms & Buttons</p>
                    </div>
<div className="col-md-6">
                    <iframe id="video1" className="rounded-video" width="600" height="300"
src="https://archive.org/embed/4.-navbar-card-modal-and-carousel"
                            title="Sita Ramam"
                            allowFullScreen
                        ></iframe>
<p className="movie-title">Navbar,Card,Modal & Carousel</p>
                    </div>
                                   
                </div>
            </div>
        </>
    )
};

export default Bootstrap;

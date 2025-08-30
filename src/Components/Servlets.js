import React, { useState } from 'react';

const Servlets = () => {
    return (
        <>
            <div className="container primevideo1">
                <h1 className='display-3 fs-1 mt-4'>Servlets</h1>
                <hr />
                <div className="row mt-5">
                    <div className="col-md-6">
                    <iframe id="video1" className="rounded-video" width="600" height="300"
                            src="https://archive.org/embed/1.-what-is-webapplication"
                            title="Sita Ramam"
                            allowFullScreen
                        ></iframe>
                        <p className="movie-title">About WebApplication</p>
                    </div>
                    <div className="col-md-6">
                    <iframe id="video1" className="rounded-video" width="600" height="300"
src="https://archive.org/embed/2.-introduction-of-servlets"
                            title="Sita Ramam"
                            allowFullScreen
                        ></iframe>
                        <p className="movie-title">Introduction of Servlets</p>
                    </div>

                    <div className="col-md-6">
                    <iframe id="video1" className="rounded-video" width="600" height="300"
src="https://archive.org/embed/3.-webapplication-with-servlets"
                            title="Sita Ramam"
                            allowFullScreen
                        ></iframe>
<p className="movie-title">WebApplication with Servlets</p>
                    </div>
<div className="col-md-6">
                    <iframe id="video1" className="rounded-video" width="600" height="300"
src="https://archive.org/embed/4.-html-to-servlet-coomunication"
                            title="Sita Ramam"
                            allowFullScreen
                        ></iframe>
<p className="movie-title">Html to Servlet Communication</p>
                    </div>

                    <div className="col-md-6">
                    <iframe id="video1" className="rounded-video" width="600" height="300"
src="https://archive.org/embed/5.-servlet-chaining"
                            title="Sita Ramam"
                            allowFullScreen
                        ></iframe>
<p className="movie-title">Servlet Chaining</p>
                    </div>

                                   
                </div>
            </div>
        </>
    )
};

export default Servlets;

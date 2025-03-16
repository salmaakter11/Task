import React from 'react'

const Banner = () => {
    return (
        <>
            <section className="page-banner bg-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <h1 className="banner-text">
                                Prescription Treatments For Your{" "}
                                <span className="text-warning">Health Goals</span>
                            </h1>
                            <button className="btn btn-primary  mt-3">Find My Treatment</button>
                        </div>
                        <div className="col-xl-6">
                            <img src="assets/image/bg-info.png" className="img-fluid" alt="img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
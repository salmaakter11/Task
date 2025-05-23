
import React from 'react'

const Convenient = () => {
    return (
        <>
            <section
                className="page-banner bg-banner"
                style={{ backgroundImage: "url(assets/image/bg2.JPG)" }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div>
                                <h1>100% Online,</h1>
                                <h1>100% Convenient</h1>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div>
                                <ul>
                                    <li> Chat with a provider 24/7</li>
                                    <li>Fast, discreet shipping</li>
                                    <li>Clinically proven ingredients and FDA-approved treatments.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Convenient

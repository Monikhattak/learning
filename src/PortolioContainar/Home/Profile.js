import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
    return (
        <div className='profil-contaniner'>
            <div className=' profile-parent'>
                <div className='profile-details' l>
                    <div className='colz'>
                        <a href='#'>
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href='#'>
                            <i className="fa fa-google-plus-square"></i>
                        </a>
                        <a href='#'>
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href='#'>
                            <i className="fa fa-twitter"></i>
                        </a>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {""}
                            Hello,I'M <span className="highlighted-text">Muhammad Mujtaba</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <spen className="primary-text">
                            <h1>
                                {""}
                                <Typical
                                    loop={Infinity}
                                    steps={
                                        [" ",
                                            1000,
                                            "REACT JS ",
                                            1000,
                                            " UX AND UI",
                                            1000,
                                            "FRONT DEVELOPER ",
                                            1000,
                                            "JAVASCRIPT ",
                                            1000,
                                        ]}
                                />

                            </h1>
                            <span className="profile-role-tagline">
                                I AM FRONT END DEVELOPER
                            </span>
                        </spen>
                    </div>
                    <div className="profile-options">
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{""}
                        </button>
                        <a href='Muhammad Mujtaba resumee.pdf ' download='Mujtaba Resume'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

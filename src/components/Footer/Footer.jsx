import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120} />

                <span className="secondaryText">
                    Our vision is to present you <br />
                    the best place to live.
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText">145 New York, NY 4571, USA</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
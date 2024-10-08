import React from "react";

export default function Nav() {
    return <>
            <div className="col-3">
                <div className="list-group">
                    <a href="home.html" className="list-group-item list-group-item-action">
                        Home
                    </a>
                    <a href="about.html" className="list-group-item list-group-item-action">
                        About Us
                    </a>
                    <a href="contact.html" className="list-group-item list-group-item-action">
                        Contact Us
                    </a>
                </div>
                <p className="small text-danger text-center mt-3 text-warning">
                    Coffee: the magic potion that turns morning mayhem into midday clarity.
                </p>
            </div>

    </>
  }
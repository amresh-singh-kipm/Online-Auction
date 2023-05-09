/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";

function ContactUs() {
  return (
    <div id="ContactusSection">
      <div className="container">
        <div className="Breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>&#8594;
            <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="Contactus-Page">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12">
              <h4>Get In Touch</h4>
              <div className="Auth-form-content">
                <form>
                  <div className="mb-3">
                    <label for="Full Name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label for="productDescription" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="productDescription"
                      rows="10"
                      cols="30"
                      placeholder="Enter product description"
                      required
                    />
                  </div>
                  <div className="d-grid mb-3 submitbtn">
                    <button type="submit" className="btn">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <ul className="list-unstyled">
                  <li className="Heading">
                    <h6>Address</h6>
                  </li>
                  <li className="Heading-Content">
                    <span>
                      KIPM Technical Campus BL 1 & 2 Sector-9 GIDA, Gorakhpur,
                      Uttar Pradesh, India, Pin - 273209
                    </span>
                  </li>
                  <li className="Heading">
                    <h6>Phone</h6>
                  </li>
                  <li className="Heading-Content">
                    <span>+91-8009902933-40</span>
                    <span>+91-9151005261-70</span>
                  </li>
                  <li className="Heading">
                    <h6>Email Address</h6>
                  </li>
                  <li className="Heading-Content">
                    <span>directorengg@kipm.edu.in</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="MapSection">
          <h4 className="text-center">Get Direction</h4>
          <iframe
            className="gmap_iframe"
            frameborder="0"
            scrolling="no"
            height="500"
            width="100%"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=kipm college&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
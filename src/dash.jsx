import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  

const HelpTeam = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="./assets/images/logo-1.jfif" alt="Fusion Media Elite" width="50" height="35" />
            <span style={{ color: '#08b3ca' }}>Fusion</span> Media Elite
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            style={{ border: 'none', background: '#000', outline: 'none', boxShadow: 'none' }}
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="index.html">
                  Homepage
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li><a className="dropdown-item" href="webdevelopment.html">Website Development</a></li>
                  <li><a className="dropdown-item" href="videoediting.html">Video Editing</a></li>
                  <li><a className="dropdown-item" href="animation.html">2D & 3D Ads</a></li>
                  <li><a className="dropdown-item" href="graphic.html">Graphic Designs</a></li>
                  <li><a className="dropdown-item" href="social.html">Social Media Management</a></li>
                  <li><a className="dropdown-item" href="digital.html">Digital Marketing</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact us
                </a>
              </li>
            </ul>
            <a href="#Started" className="btn btn-primary rounded-pill get-started-btn dnone head-btn" style={{ textDecoration: 'none' }}>
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero d-flex justify-content-center align-items-center">
        <div className="text-center text-white fade-in-slide">
          <h2>Help & <span style={{ color: '#08b3ca' }}> Team</span></h2>
          <h1 className="mb-4">
            Support, <span style={{ color: '#08b3ca' }}>Collaboration, </span>Success
          </h1>
          <p className="lead mb-5">
            At Fusion Media Elite, we turn your ideas into stunning visuals with precision and creativity.
          </p>
          <a href="#Started" className="btn btn-primary btn-lg me-3 rounded-pill head-btn" style={{ textDecoration: 'none' }}>
            Get Started
          </a>
          <a href="#" className="btn btn-outline-light btn-lg rounded-pill head-btn" style={{ textDecoration: 'none' }}>
            Learn More
          </a>
        </div>
      </section>
      <hr style={{ color: '#08b3ca' }} />

      {/* Main Section */}
      <div className="main py-5 d-flex" style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
        <img src="./assets/images/development.jpg" style={{ width: '300px' }} alt="Under-development" />
        <i className="fa-solid fa-laptop-code"></i>
        <h2 style={{ textAlign: 'center' }}>This page is coming soon! Exciting updates in progress...</h2>
      </div>

      {/* Footer */}
      <hr style={{ color: '#08b3ca' }} className="mt-5" />
      <footer className="footer text-white py-4" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span>
                <img src="./assets/images/logo-1.jfif" style={{ width: '50px', marginLeft: '-10px' }} alt="Error" />
              </span>
              <h5 className="text-uppercase mb-4">
                <span style={{ color: '#08b3ca' }}>Fusion</span> <span style={{ color: 'white' }}>media elite</span>
              </h5>
              <p>
                Transforming Ideas into Digital Excellence. Elevate your online presence with our innovative solutions and strategic digital services.
              </p>
              <div className="social-icons">
                <a href="mailto:fusionmediaelite@gmail.com" className="text-white me-2" style={{ textDecoration: 'none' }}>
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="https://www.instagram.com/fusionmediaelite?igsh=MXpxd2FyajNjcnBp" className="text-white me-2">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://x.com/fusionmediaelit?t=iRye1thsfJIyrme0Uzv7kw&s=09" className="text-white me-2" style={{ textDecoration: 'none' }}>
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/fusion-media-elite-production-b7029a32a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white me-2" style={{ textDecoration: 'none' }}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <h5 className="text-uppercase mb-4">Services</h5>
                  <ul className="list-unstyled">
                    <li><a href="webdevelopment.html" style={{ textDecoration: 'none', color: '#474747' }}>Website Development</a></li>
                    <li><a href="videoediting.html" style={{ textDecoration: 'none', color: '#474747' }}>Video Editing</a></li>
                    <li><a href="animation.html" style={{ textDecoration: 'none', color: '#474747' }}>2D & 3D Ads</a></li>
                    <li><a href="graphic.html" style={{ textDecoration: 'none', color: '#474747' }}>Graphic Designs</a></li>
                    <li><a href="social.html" style={{ textDecoration: 'none', color: '#474747' }}>Social Media Management</a></li>
                    <li><a href="digital.html" style={{ textDecoration: 'none', color: '#474747' }}>Digital Marketing</a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h5 className="text-uppercase mb-4">Support</h5>
                  <ul className="list-unstyled">
                    <li><a href="help-faq&term.html#help" style={{ textDecoration: 'none', color: '#474747' }}>Help Center</a></li>
                    <li><a href="help-faq&term.html#faq" style={{ textDecoration: 'none', color: '#474747' }}>FAQ</a></li>
                    <li><a href="contact.html" style={{ textDecoration: 'none', color: '#474747' }}>Contact us</a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h5 className="text-uppercase mb-4">Company</h5>
                  <ul className="list-unstyled">
                    <li><a href="about.html" style={{ textDecoration: 'none', color: '#474747' }}>About Us</a></li>
                    <li><a href="help-faq&term.html#term" style={{ textDecoration: 'none', color: '#474747' }}>Terms of Service</a></li>
                    <li><a href="help-faq&term.html#privacy" style={{ textDecoration: 'none', color: '#474747' }}>Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <small>© 2024 Fusion Media Elite Production House</small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HelpTeam;

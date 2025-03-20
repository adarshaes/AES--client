import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

       
      </section>

      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Company Info */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Adarsha English School
              </h6>
              <p>
              Adarsha E-School in Kanepokhari-7, Morang, offers quality education with technology-driven learning, a child-friendly environment, and life skill development. 🚀
              </p>
            </div>

            {/* Products */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Facility</h6>
              <p><a href="#!" className="text-reset">Computer Science</a></p>
              <p><a href="#!" className="text-reset">Sports</a></p>
              <p><a href="#!" className="text-reset">Friendly Environment</a></p>
              <p><a href="#!" className="text-reset">CCTV surveillance</a></p>
            </div>

            {/* Useful Links */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Why Adarsha is best?</h6>
              <p><a href="#!" className="text-reset">Experienced Teachers</a></p>
              <p><a href="#!" className="text-reset">Extracurricular Programs</a></p>
              <p><a href="#!" className="text-reset">Transport Facility</a></p>
              <p><a href="#!" className="text-reset">Affordable Learning</a></p>
            </div>

            {/* Contact */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i>Kanepokhari-7, Bargacchi</p>
              <p><i className="fas fa-envelope me-3"></i> adarsha2040@gmail.com</p>
              <p><i className="fas fa-phone me-3"></i> +01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> +01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © {new Date().getFullYear()} Copyright:
        <a className="text-reset fw-bold" href="/"> Adarsha English School</a>
        <p>Developer: Sahil Jogi</p>
        <p>Assistant dev: Heaven Bhandari</p>
      </div>
    </footer>
  );
};

export default Footer;

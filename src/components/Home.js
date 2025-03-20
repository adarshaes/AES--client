import React, { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";
// import { Collapse } from "react-bootstrap";
import "mdb-ui-kit/css/mdb.min.css"; // Import MDB UI Kit styles
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { ReactTyped } from "react-typed";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Service from './Service';
import WhyUs from './WhyChooseUs';
import OurTeam from "./OurTeam";

// #00204a
import { Collapse } from 'reactstrap';  // Importing Collapse from reactstrap

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("auth"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth"); // Remove token
    setIsAuthenticated(false); // Update state
    navigate("/log"); // Redirect to login
  };

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("auth"));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      {/* Container wrapper */}
      <div className="container">
        {/* Navbar brand */}
        <a className="navbar-brand me-2" href="/">
          <img
            src="./+.jpg"
            height="30px"
            alt="Logo"
            loading="lazy"
            style={{ marginTop: "-1px" }}
          />
        </a>

        {/* Toggle button for the offcanvas menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <i className="fas fa-ellipsis-h"></i> {/* Three dot icon */}
        </button>

        {/* Offcanvas menu */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            {/* Navbar links */}
            <ul className="navbar-nav me-auto mb-4 mb-lg-0">
              <li className="nav-item">
                <Link
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                  to="section1"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                  to="section2"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                  to="section3"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                  to="section4"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Why Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                  to="section5"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Our Teams
                </Link>
              </li>
            </ul>

            {/* Right buttons */}
            <div className="d-flex align-items-center">
              {isAuthenticated ? (
                <button onClick={handleLogout} type="button" className="btn btn-danger me-3">
                  Logout
                </button>
              ) : (
                <>
                  <button onClick={() => navigate("/log")} type="button" className="btn btn-link px-3 me-2">
                    Login
                  </button>
                  <button onClick={() => navigate("/reg")} type="button" className="btn btn-primary me-3">
                    Sign up for free
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Container wrapper */}
    </nav>
  );
};


const Home = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Element name="section1" className="section" id="section1">
        <Container className="py-5">
          <Row className="align-items-center">
            {/* Writing Text with Animated Effect */}
            <Col md={6} className="text-center position-relative">
              <div
                className="p-4 text-white fw-bold position-relative shadow-lg rounded"
                style={{
                  background: "linear-gradient(135deg, #4A90E2, #9013FE)",
                  clipPath:
                    "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
                  display: "inline-block",
                }}
              >
                <h1
                  className="display-4 text-uppercase"
                  style={{
                    fontWeight: "800",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  <ReactTyped
                    strings={["Adarsha English School"]}
                    typeSpeed={150}
                    backSpeed={70}
                    loop
                  />
                </h1>
              </div>
            </Col>

            {/* Image with Parallelogram Shape */}
            <Col md={6} className="text-center">
              <div className="position-relative">
                <img
                  src="C:\Users\Dell\Desktop\AES\client\src\images\us.JPG"
                  alt="School"
                  className="img-fluid rounded shadow"
                  style={{
                    clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
                    border: "5px solid #4A90E2",
                  }}
                />
              </div>
              <p
                className="mt-3 fw-medium text-dark"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  fontFamily: "Lora, serif",
                }}
              >
                Adarsha English School is a center of excellence, fostering
                innovation and leadership. We combine modern teaching
                methodologies with traditional values to create an engaging
                learning experience. Our mission is to empower students with
                critical thinking, creativity, and global perspectives.
              </p>
            </Col>
          </Row>

          {/* Vision & Goal */}
          <Row className="mt-5">
            <Col
              style={{ backgroundColor: "rgba(245, 245, 245, 0.8)" }}
              md={6}
              className="text-center p-4 bg-grey rounded-start shadow-lg"
            >
              <h2 className="fw-bold text-primary mb-4">Vision & Goals</h2>
              <ul
                className="list-unstyled text-start"
                style={{ fontSize: "17px", fontFamily: "Lora, serif" }}
              >
                <li className="mb-2">
                  📌 Providing high-quality, student-centered education.
                </li>
                <li className="mb-2">
                  📌 Incorporating technology-driven learning methods.
                </li>
                <li className="mb-2">
                  📌 Enhancing critical thinking and problem-solving skills.
                </li>
                <li className="mb-2">
                  📌 Encouraging creativity, leadership, and teamwork.
                </li>
                <li className="mb-2">
                  📌 Fostering a strong moral and ethical foundation.
                </li>
                <li className="mb-2">
                  📌 Preparing students for global opportunities and challenges.
                </li>
                <li className="mb-2">
                  📌 Ensuring holistic development with sports, arts, and
                  culture.
                </li>
                <li className="mb-2">
                  📌 Strengthening community engagement and social
                  responsibility.
                </li>
                <li>
                  📌 Implementing AI-based personalized learning approaches.
                </li>
              </ul>
            </Col>

            {/* Image with Polygon Shape + Achievements */}
            <Col md={6} className="text-center">
              <img
                src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/474977427_1001788998636069_4168514795092841665_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hNlQL9gTdooQ7kNvgFFu9VV&_nc_oc=AdgSJ5JuQsIxi2npQZOQ9hVGUsVx_ojLfPRuWoqghSDVcUuO95UmrRurd4oWzlcj7yhZB2FEZlvMhpEQXgcsbnmx&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=ALxT7JVLS7S3aXWwmgGXfNd&oh=00_AYDZUJJNpszAXC26Fclo5yQKgoDVU6Agz7RStRYZVtcXeQ&oe=67C7A64A"
                alt="Achievements"
                className="img-fluid rounded shadow"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%)",
                  border: "5px solid #9013FE",
                }}
              />
              <h3 className="mt-3 fw-bold text-dark">Achievements</h3>
              <ul
                className="list-unstyled mt-2 text-start"
                style={{ fontSize: "17px", fontFamily: "Lora, serif" }}
              >
                <li>🏆 National-level academic excellence awards.</li>
                <li>🏆 Winner of inter-school science & tech competitions.</li>
                <li>🏆 Top rankings in regional sports tournaments.</li>
                <li>
                  🏆 Recognized for excellence in arts & cultural programs.
                </li>
                <li>
                  🏆 Outstanding achievements in national mathematics olympiads.
                </li>
                <li>
                  🏆 Multiple-time winners in environmental sustainability
                  projects.
                </li>
                <li>
                  🏆 Ranked among the top 5 institutions for student innovation
                  in STEM.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Element>

      <Element name="section2" className="section" id="section2">
      <section id="section2" style={{ padding: "50px 0", background: "#f8f9fa" }}>
      <Container>
        <h2 style={{ textAlign: "center", marginBottom: "30px", fontWeight: "bold", textTransform: "uppercase" }}>
          About Us
        </h2>
        <Row>
          {/* Principal's Message */}
          <Col md={6}>
            <Card style={{ padding: "20px", borderRadius: "15px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <Card.Body>
                <h4 style={{ color: "#d9534f", fontWeight: "bold" }}>Message from the Principal</h4>
                <p style={{ fontSize: "18px", fontFamily: "Lora, serif" }}>
                Welcome to Adarsha E-School, where every day is an
                      opportunity to learn and grow! Our school is dedicated to
                      creative and technology-driven teaching methods. Keeping
                      up with modern educational needs, we prioritize Computer
                      Education, conduct additional learning sessions, regular
                      assessments, and provide motivation through rewards and
                      recognitions. Our goal is to empower students to
                      independently solve real-life problems using their
                      knowledge and skills. With our commitment to "Education
                      for All," we strive to make quality education accessible
                      and affordable for every student.
                </p>
                <p style={{ fontWeight: "bold" }}>- Agam B.Limbu</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Photo Gallery */}
          <Col md={6}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px" }}>
              {/* Row 1 */}
              <div style={{ transform: "skew(-20deg)", overflow: "hidden", width: "180px", height: "200px", borderRadius: "10px" }}>
                <img src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/474977427_1001788998636069_4168514795092841665_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hNlQL9gTdooQ7kNvgFFu9VV&_nc_oc=AdgSJ5JuQsIxi2npQZOQ9hVGUsVx_ojLfPRuWoqghSDVcUuO95UmrRurd4oWzlcj7yhZB2FEZlvMhpEQXgcsbnmx&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=ALxT7JVLS7S3aXWwmgGXfNd&oh=00_AYDZUJJNpszAXC26Fclo5yQKgoDVU6Agz7RStRYZVtcXeQ&oe=67C7A64A" alt="Gallery" style={{ width: "100%", height: "100%" }} />
              </div>
              <div style={{ width: "200px", height: "200px", borderRadius: "10px" }}>
                <img src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/481692581_1026728802808755_7015122239752536789_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=60dzRmr9EdsQ7kNvgHtDsjz&_nc_oc=AdkEpLbTeyn1zE2jPb6Z57O-R9xLnmtk0lV1W3aPwjeiOjQoYJWrIoYRZ9nMeJfkgK0jGlRnsskHPt0FbcxPqxug&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=NLB1E4jGiJQ_cHfeYl_m8Q&oh=00_AYEkupx7OcOBCjjRSHT_hWDPNmXJwiz4uY4wSeZ0Xgs0kA&oe=67E1CAF2" alt="Gallery" style={{ width: "100%", height: "100%" }} />
              </div>

              {/* Row 2 */}
              <div style={{ width: "200px", height: "200px", borderRadius: "10px" }}>
                <img src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/476230280_1010752037739765_79341723736086631_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=BLuFhF56iIAQ7kNvgF6xSm6&_nc_oc=AdnieAGWtadGdPo2-cXdFka5NtfDmxRl3QgozGYjFoHMxY_g03nta-WPZ1o8xCh8S99sNcrikgOgy0OuXNzpSbqd&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=3A3zk6LLSVIr_W3r9j3TSA&oh=00_AYGDuuiiN-mmYWj6VcTtu5TyHbxVQQjWmA3MUlCCs4Gfmg&oe=67E1A1BC" alt="Gallery" style={{ width: "100%", height: "100%" }} />
              </div>
              <div style={{ transform: "skew(-20deg)", overflow: "hidden", width: "200px", height: "200px", borderRadius: "10px" }}>
                <img src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/475769913_1007424064739229_5998510776254074082_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ySkbczvYdlwQ7kNvgEKGFhD&_nc_oc=AdmRD9Ygg2JyS75W3_BA15r4b5wLqEOes3fwSPqCOra0sOop8jXLrLH2WwQQRxW56NuO3IFBg-5-zwSoYqKQXyV3&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=SWkrJzBIabDNY-_p4eeEtg&oh=00_AYFbuM7-a8C_Tn0cL0MSrZ0cn6O2lZzJNhdrSa63heU1RQ&oe=67E1B701" alt="Gallery" style={{ width: "100%", height: "100%" }} />
              </div>

              {/* Row 3 */}
              <div style={{ transform: "skew(-20deg)", overflow: "hidden", width: "200px", height: "200px", borderRadius: "10px" }}>
                <img src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/476098587_1007424741405828_7305528189870244688_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_k82E4X8FisQ7kNvgFglG4i&_nc_oc=AdkZfF3Gjsa00R38RIr0vcLDcpHGkZylnzdTL7o2c2jHWXQ6Ru-g4273gXcC8HJpkN2lQrEdaF-HaM_E_574hagX&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=CLp5PUr3e01an4VmsoH1Cg&oh=00_AYFBoloWQorF8pcpyE7oFvw1c6zFvaZs-4uMJFFyBYRy0g&oe=67E1BBB0" alt="Gallery" style={{ width: "100%", height: "100%" }} />
              </div>
              <div style={{ width: "200px", height: "200px", borderRadius: "10px" }}>
                <img src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/475767346_1006710981477204_3483413369221135303_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ChMoKViXTsoQ7kNvgEW47XJ&_nc_oc=AdloMpzEBT85zMkdNUWbAnzFKK_slNYXTqBYwfH3AIiUe1LwaRHOvw1V8KRu3v0GgOofhSQIoGPYLlzNi-Ji79kg&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=gtblncxAkKmt1FwOKnK4qw&oh=00_AYFjca7WysmhchV7DM1zrcBU9oyBCuv4z4-AgsSNbLD0kw&oe=67E19CD5" alt="Gallery" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
      </Element>

      <Element name="section3" className="section" id="section3">
       <Service/>
      </Element>

      <Element name="section4" className="section" id="section4">
        <WhyUs/>
      </Element>

      <Element name="section5" className="section" id="section5">
        <OurTeam/>
      </Element>

      <Footer />
    </div>
  );
};

export default Home;

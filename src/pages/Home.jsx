import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <>
      <div className="box">
        <p className="text-wrapper">Welcome To Our Arrow Reach Digital</p>
        <p className="button-more">
          <a href="/" className="more">
            {" "}
            More{" "}
          </a>
        </p>
      </div>

      <Container fluid>
        <Row>
          <Col lg={6} md={12} className="frame">
            <div className="overlap">
              <div className="overlap-group">
                <div className="get">GET TO KNOW US</div>
                <p className="text-wrapper-1">
                  The best digital marketing solutions
                </p>
                <p className="para">
                  Web designing in a powerful way of just not only a profession,
                  but also a passion for our Company. We tend to believe that
                  the smart look of any website is the first impression.
                </p>
                <p className="text-wrapper-2">
                  <i className="bi bi-check-circle-fill tik"></i> Sed molestie
                  dictum natoque integer semper
                </p>
                <p className="text-wrapper-2">
                  <i className="bi bi-check-circle-fill tik"></i> Sed molestie
                  dictum natoque integer semper
                </p>
                <p className="text-wrapper-2">
                  <i className="bi bi-check-circle-fill tik"></i> Sed molestie
                  dictum natoque integer semper
                </p>

                <p>
                  <a className="text-wrapper-5" href="/">
                    Explore Now
                  </a>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} className="frame">
            <div>
              <img
                className="rectangle"
                alt="Rectangle"
                src="../../Img/bg1-600x800.jpg"
              />
            </div>
            <div className="image">
              <img
                className="rectangle-1"
                alt="Rectangle"
                src="../../Img/digital-business-marketing-social-media-post-template_80983-869.jpg.avif"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="over">
        <div className="our">OUR SERVICES</div>
        <p className="Explore">
          Explore what services<br></br> we’re offering
        </p>
      </div>

      <div className="service">
        <Row>
          <Col md={4} className="photo">
            <p className="head">
              Digital<br></br> marketing
            </p>
            <img className="service-img" src="../../Img/images.jpeg" alt="" />
            <p className="digital">
              {" "}
              <i class="bi bi-globe2 net"></i> Digital agency
            </p>
          </Col>

          <Col md={4} className="photo">
            <p className="head">
              Digital<br></br> marketing
            </p>
            <img className="service-img" src="../../Img/images.jpeg" alt="" />
            <p className="digital">
              {" "}
              <i class="bi bi-globe2 net"></i> Digital agency
            </p>
          </Col>

          <Col md={4} className="photo">
            <p className="head">
              Digital<br></br> marketing
            </p>
            <img className="service-img" src="../../Img/images.jpeg" alt="" />
            <p className="digital">
              {" "}
              <i class="bi bi-globe2 net"></i> Digital agency
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;

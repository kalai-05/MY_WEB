import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <>
      <div
        className="box"
        style={{
          top: "0",
          width: "100%",
          position: "relative",
          textAlign: "center",
          backgroundImage: `url("../../Img/digital-marketing-strategy.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            content: "",
            position: "absolute",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "1",
          }}
        ></div>
        <p
          className="text-wrapper "
          style={{
            color: "#f2e2cb",
            paddingTop: "20%",
            fontSize: "50px",
            position: "relative",
            zIndex: 2,
          }}
        >
          Welcome To Our Arrow Reach Digital
        </p>
        <p
          className="button-more "
          style={{
            fontSize: "30px",
            marginTop: "20px",
            paddingBottom: "18%",
            position: "relative",
            zIndex: 2,
          }}
        >
          <a
            href="/"
            className="more "
            style={{
              color: "#000",
              backgroundColor: "#ecba6e",
              padding: "10px",
              textDecoration: "none",
              backgroundSize: "cover",
              borderRadius: "4px",
            }}
          >
            More
          </a>
        </p>
      </div>

      <Container fluid>
        <Row>
          <Col
            lg={6}
            md={12}
            className="frame"
            style={{
              backgroundColor: "hsla(0, 0%, 0%, 0.949)",
              paddingTop: "60px",
            }}
          >
            <div className="overlap">
              <div className="overlap-group">
                <div
                  className="get"
                  style={{
                    color: "#e79417",
                    fontFamily: "Poppins-SemiBold, Helvetica",
                    fontSize: "25px",
                    fontWeight: 600,
                    marginLeft: "50px",
                  }}
                >
                  GET TO KNOW US
                </div>
                <p
                  className="text-wrapper-1"
                  style={{
                    color: "#ffffff",
                    fontFamily: "Poppins-SemiBold, Helvetica",
                    fontSize: "50px",
                    fontWeight: 600,
                    marginLeft: "50px",
                    marginBottom: "50px",
                  }}
                >
                  The best digital marketing solutions
                </p>
                <p
                  className="para"
                  style={{
                    color: "whitesmoke",
                    fontFamily: "Poppins-Regular, Helvetica",
                    fontSize: "30px",
                    fontWeight: 200,
                    marginBottom: "50px",
                    marginLeft: "50px",
                  }}
                >
                  Web designing in a powerful way of just not only a profession,
                  but also a passion for our Company. We tend to believe that
                  the smart look of any website is the first impression.
                </p>
                <p
                  className="text-wrapper-2"
                  style={{
                    color: "#ffffff",
                    fontFamily: "Poppins-Regular, Helvetica",
                    fontSize: "20px",
                    fontWeight: 400,
                    marginLeft: "50px",
                    marginBottom: "50px",
                  }}
                >
                  <i
                    className="bi bi-check-circle-fill tik"
                    style={{ color: "#e79417" }}
                  ></i>{" "}
                  Sed molestie dictum natoque integer semper
                </p>
                <p
                  className="text-wrapper-2"
                  style={{
                    color: "#ffffff",
                    fontFamily: "Poppins-Regular, Helvetica",
                    fontSize: "20px",
                    fontWeight: 400,
                    marginLeft: "50px",
                    marginBottom: "50px",
                  }}
                >
                  <i
                    className="bi bi-check-circle-fill tik"
                    style={{ color: "#e79417" }}
                  ></i>{" "}
                  Sed molestie dictum natoque integer semper
                </p>
                <p
                  className="text-wrapper-2"
                  style={{
                    color: "#ffffff",
                    fontFamily: "Poppins-Regular, Helvetica",
                    fontSize: "20px",
                    fontWeight: 400,
                    marginLeft: "50px",
                    marginBottom: "50px",
                  }}
                >
                  <i
                    className="bi bi-check-circle-fill tik"
                    style={{ color: "#e79417" }}
                  ></i>{" "}
                  Sed molestie dictum natoque integer semper
                </p>

                <p>
                  <a
                    className="text-wrapper-5"
                    style={{
                      backgroundColor: "#ecba6e",
                      borderRadius: "3px",
                      width: "170px",
                      color: "#000000",
                      fontFamily: "Poppins-Regular, Helvetica",
                      fontSize: "25px",
                      fontWeight: 400,
                      marginLeft: "50px",
                      padding: "10px",
                      textDecoration: "none",
                      backgroundSize: "cover",
                    }}
                    href="/"
                  >
                    Explore Now
                  </a>
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            md={12}
            className="frame"
            style={{
              backgroundColor: "hsla(0, 0%, 0%, 0.949)",
              paddingTop: "60px",
              paddingBottom: "20px",
            }}
          >
            <div>
              <img
                className="rectangle"
                style={{
                  height: "auto",
                  position: "relative",
                  left: "15%",
                  width: "70%",
                  marginTop: "-20px",
                  borderTopRightRadius: "50%",
                  borderTopLeftRadius: "50%",
                }}
                alt="Rectangle"
                src="../../Img/bg1-600x800.jpg"
              />
            </div>
            <div className="image" style={{ position: "relative" }}>
              <img
                className="rectangle-1"
                style={{
                  borderRadius: "70%",
                  width: "25%",
                  height: "auto",
                  zIndex: 2,
                  marginTop: "-110px",
                  marginBottom: "30px",
                }}
                alt="Rectangle"
                src="../../Img/digital-business-marketing-social-media-post-template_80983-869.jpg.avif"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <div
        className="over"
        style={{
          backgroundColor: "#000000cc",
          height: "auto",
          position: "relative",
          width: "100%",
          color: "#ffffff",
          fontFamily: "Poppins-Medium, Helvetica",
          fontSize: "60px",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        <div
          className="our"
          style={{
            paddingTop: "100px",
            color: "#e79417",
            fontFamily: "Poppins-SemiBold, Helvetica",
            fontSize: "25px",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          OUR SERVICES
        </div>
        <p className="Explore">
          Explore what services<br></br> we’re offering
        </p>
      </div>

      <div
        className="service"
        style={{ backgroundColor: "#000000cc", paddingBottom: "80px" }}
      >
        <Row>
          <Col md={4} className="photo">
            <p
              className="head"
              style={{
                paddingTop: "90px",
                color: "#e79417",
                fontFamily: "Poppins-SemiBold, Helvetica",
                fontSize: "25px",
                zIndex: 1,
                position: "absolute",
                fontWeight: 600,
                textAlign: "left",
                marginLeft: "20%",
              }}
            >
              Digital<br></br> marketing
            </p>
            <img
              className="service-img"
              style={{
                paddingTop: "50px ",
                width: "75%",
                height: "auto ",
                position: "relative",
                textAlign: "center",
                marginLeft: "15%",
              }}
              src="../../Img/images.jpeg"
              alt=""
            />
            <p
              className="digital"
              style={{
                textAlign: "left",
                color: "#ffffff",
                backgroundColor: "#000",
                fontSize: "25px",
                width: "60%",
                marginTop: "-50px",
                padding: "4px",
                marginLeft: "20%",
                position: "relative",
              }}
            >
              {" "}
              <i
                class="bi bi-globe2 net"
                style={{ backgroundColor: "#e79417", padding: "4px" }}
              ></i>{" "}
              Digital agency
            </p>
          </Col>

          <Col md={4} className="photo">
            <p
              className="head"
              style={{
                paddingTop: "90px",
                color: "#e79417",
                fontFamily: "Poppins-SemiBold, Helvetica",
                fontSize: "25px",
                zIndex: 1,
                position: "absolute",
                fontWeight: 600,
                textAlign: "left",
                marginLeft: "20%",
              }}
            >
              Digital<br></br> marketing
            </p>
            <img
              className="service-img"
              style={{
                paddingTop: "50px",
                width: "75%",
                height: "auto",
                position: "relative",
                textAlign: "center",
                marginLeft: "15%",
              }}
              src="../../Img/images.jpeg"
              alt=""
            />
            <p
              className="digital"
              style={{
                textAlign: "left",
                color: "#ffffff",
                backgroundColor: "#000",
                fontSize: "25px",
                width: "60%",
                marginTop: "-50px",
                padding: "4px",
                marginLeft: "20%",
                position: "relative",
              }}
            >
              {" "}
              <i
                class="bi bi-globe2 net"
                style={{ backgroundColor: "#e79417", padding: "4px" }}
              ></i>{" "}
              Digital agency
            </p>
          </Col>

          <Col md={4} className="photo">
            <p
              className="head"
              style={{
                paddingTop: "90px",
                color: "#e79417",
                fontFamily: "Poppins-SemiBold, Helvetica",
                fontSize: "25px",
                zIndex: 1,
                position: "absolute",
                fontWeight: 600,
                textAlign: "left",
                marginLeft: "20%",
              }}
            >
              Digital<br></br> marketing
            </p>
            <img
              className="service-img"
              style={{
                paddingTop: "50px",
                width: "75%",
                height: "auto ",
                position: "relative",
                textAlign: "center",
                marginLeft: "15%",
              }}
              src="../../Img/images.jpeg"
              alt=""
            />
            <p
              className="digital"
              style={{
                textAlign: "left",
                color: "#ffffff",
                backgroundColor: "#000",
                fontSize: "25px !important",
                width: "60%",
                marginTop: "-50px",
                padding: "4px !important",
                marginLeft: "20%",
                position: "relative",
              }}
            >
              {" "}
              <i
                class="bi bi-globe2 net"
                style={{ backgroundColor: "#e79417", padding: "4px" }}
              ></i>{" "}
              Digital agency
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;

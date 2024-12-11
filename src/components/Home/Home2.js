import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span>{" "}
                            MYSELF
                        </h1>
                        <p className="home-about-body">
                            I fell in love with programming and have learned a
                            lot so far 😍
                            <br />
                            <br />I am fluent in technologies like
                            <i>
                                <b className="purple">
                                    {" "}
                                    HTML, CSS, TailwindCSS, Bootstrap,
                                    JavaScript,
                                    <b className="text-white"> and </b>
                                    Next.js.{" "}
                                </b>
                            </i>
                            <br />
                            <br />
                            My field of interest lies in building new web
                            technologies and products. &nbsp;
                            <i>
                                {/* <b className="purple">
                                    Web Technologies and Products{" "}
                                </b>{" "}
                                and also in areas related to{" "}
                                <b className="purple">Blockchain.</b> */}
                            </i>
                            <br />
                            <br />I also enjoy developing products using modern"{" "}
                            <b className="purple">JavaScript libraries</b> and
                            <i>
                                <b className="purple"> frameworks</b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> React.js and Next.js</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to{" "}
                            <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/otabekfronted"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            {/* <li className="social-icons">
                                <a
                                    href="https://twitter.com/Soumyajit4419"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li> */}
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/otabek-madaminov-341134298/?locale=en_US"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://t.me/OtabekMadaminov_2002"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <FaTelegramPlane />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;

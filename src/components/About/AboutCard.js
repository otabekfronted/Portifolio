import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am{" "}
                        <span className="purple">Otabek Madaminov </span>
                        from{" "}
                        <span className="purple"> Andijan, Uzbekistan.</span>
                        <br />
                        I currently work as a frontend developer.
                        <br />
                        <strong>
                            Najot Ta'lim ( January 2024 - November 2024 )
                            :&nbsp;
                        </strong>
                        Successfully completed an intensive course where I
                        learned the fundamentals of programming and mastered
                        several modern technologies. During the program, I also
                        gained hands-on experience working on project-based
                        assignments.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to
                        do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Writing Tech Blogs
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Innovate and strive to create"{" "}
                    </p>
                    <footer className="blockquote-footer">
                        Otabek Madaminov
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;

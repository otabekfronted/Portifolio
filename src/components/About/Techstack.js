import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit, DiJavascript1, DiReact } from "react-icons/di";
import {
    SiNextdotjs,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiTailwindcss,
    SiRedux,
    SiTypescript,
    SiJsonwebtokens,
    SiAppian,
    SiDaisyui,
    SiMaterialdesign,
    SiAntdesign,
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiBootstrap />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTailwindcss />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJsonwebtokens />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAppian />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAntdesign className="icon antdesign-icon" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMaterialdesign className="icon materialui-icon" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDaisyui className="icon daisyui-icon" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit className="icon git-icon" />
            </Col>
        </Row>
    );
}

export default Techstack;

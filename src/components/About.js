import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import aboutmeImg from "../assets/img/aboutme-img.png";

export const Aboutme = () => {

    return (
        <section className="about" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <h1>Hi, I'm Olivia Orme </h1>
                    <h4>Fullstack Web Developer</h4>
                    <p>Hey, my name is Olivia I'm excited to have you here checking out my portfolio to get an idea of what I can create for you. <br></br>Little bit about me? I have been in business for 10 years (in a completely different industry!) so I know first hand the importance of getting your web development needs met, in a timeley (and of course in an enjoyable way!). <br></br> I know and understand the impact having a quality website and professional app can have on your business.</p>
                    <Link to="oliviaportfolio/contact">
                        <button >Let’s Chat <ArrowRightCircle size={25} /></button>
                    </Link>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={aboutmeImg} alt="Header Img"></img>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
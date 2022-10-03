import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import aboutmeImg from "../assets/img/aboutme-img.png";

export const Aboutme = () => {

    return (
        <section className="banner" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <h1>Hi, I'm Olivia </h1>
                    <p>Hey, my name is Olivia I'm excited to have you here checking out my portfolio to get an idea of what I can create for you. Little bit about me? I have been in business for 10 years (in a completely different industry!) so I know first hand the importance of getting your web development needs met and in a timeley (and enjoyable! way. I also know the impact having a quality website and professional app can have on your business.</p>
                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={aboutmeImg} alt="Header Img"></img>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
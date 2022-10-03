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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare congue pharetra. Curabitur non leo ut quam tincidunt maximus. Etiam id diam at velit ornare vehicula eu nec augue. Nunc id faucibus sem, ac mollis nulla. Sed luctus viverra pulvinar.</p>
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
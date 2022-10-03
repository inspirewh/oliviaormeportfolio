import { Col, Container, Row, TabContainer, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png"


export const PortfolioComp = () => {
    
    const projects = [
        {
            title: "Joke Generator Application",
            description: "For when you want a laugh after a long day; This random joke generator was created to have a little laugh and brighten your day! The Joke and gif generator built with HTML, CSS, Materialize and Javascript.",
            imgUrl: projImg1,
        },
        {
            title: "6 Week Challenge Fitness Application",
            description: "6 Week Fitness challenge application. Follow thr training program to complete the video workouts. At the end of each week complete a fitness test to asses your progress. View all your progress to date to track your progress.",
            imgUrl: projImg1,
        },
        {
            title: "6 Week Challenge Fitness Application",
            description: "6 Week Fitness challenge application. Follow thr training program to complete the video workouts. At the end of each week complete a fitness test to asses your progress. View all your progress to date to track your progress.",
            imgUrl: projImg1,
        },
        {
            title: "6 Week Challenge Fitness Application",
            description: "6 Week Fitness challenge application. Follow thr training program to complete the video workouts. At the end of each week complete a fitness test to asses your progress. View all your progress to date to track your progress.",
            imgUrl: projImg1,
        }
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Portfolio</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare congue pharetra. Curabitur non leo ut quam tincidunt maximus. Etiam id diam at velit ornare vehicula eu nec augue. Nunc id faucibus sem, ac mollis nulla. Sed luctus viverra pulvinar.</p>
                    <TabContainer id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Option 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Option 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Option 3</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                projects.map((project, index)=>{
                                    return (
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                    )
                                })
                                }
                            </Row>

                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Tab.Pane>
                    </Tab.Content>
                    </TabContainer>
                    </Col>
                </Row>
            </Container>


        </section>

    )
}
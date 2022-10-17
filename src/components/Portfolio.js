import { Col, Container, Row, } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import jokeImg from "../assets/img/jokethumbnail.png";
import fitnessImg from "../assets/img/fitness-app.png";


export const PortfolioComp = () => {
    
    const projects = [
        {
            title: "Joke Generator Application",
            description: "For when you want a laugh after a long day; This random joke generator was created to have a little laugh and brighten your day! The Joke and gif generator built with HTML, CSS, Materialize and Javascript.",
            imgUrl: jokeImg,
            buttonUrl: 'https://marissakrantz.github.io/joke-generator/'
        },
        {
            title: "6 Week Challenge Fitness Application",
            description: "6 Week Fitness challenge application. Follow thr training program to complete the video workouts. At the end of each week complete a fitness test to asses your progress. View all your progress to date to track your progress.",
            imgUrl: fitnessImg,
            buttonUrl: 'https://safe-sea-18422.herokuapp.com/',
        },
        {
            title: "6 Week Challenge Fitness Application",
            description: "6 Week Fitness challenge application. Follow thr training program to complete the video workouts. At the end of each week complete a fitness test to asses your progress. View all your progress to date to track your progress.",
            imgUrl: fitnessImg,
            buttonUrl: 'https://safe-sea-18422.herokuapp.com/'
        },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Portfolio</h2>
                    <p>Check out some of my latest work.</p>
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
                    </Col>
                </Row>
            </Container>


        </section>

    )
}
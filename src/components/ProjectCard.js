import { Col } from "react-bootstrap"

export const ProjectCard = ({title, description, imgUrl, buttonUrl}) => {
    return (
        <Col sm={6} md={4} >
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div>
                    <a className="portfoliourl" href={buttonUrl} target="_blank">View this project live </a>
                    </div>
                </div>
            </div>
        </Col>
    )
}
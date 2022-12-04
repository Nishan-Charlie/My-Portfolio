import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "NGS Analysing Tool Kit",
      description: "An Online platform for researchers to analyse and find the Biomarkers for Alzimers disease. Using Machine learning techniques.",
      imgUrl: projImg1,
    },
    {
      title: "Smart home",
      description: "Secure mobile application to control and monitor home appliances using sensors and micro-controllers.",
      imgUrl: projImg2,
    },
    {
      title: "Grocery Management System",
      description: "Web application to manage the grocery details of a supermarket in a database",
      imgUrl: projImg3,
    },
    {
      title: "8-bit processor",
      description: "Developed an 8-bit single-cycle CPU to support a custom ISA with an ALU, an 8x8 register file, control logic, and a memory sub-system with caching techniques.",
      imgUrl: projImg1,
    },
    {
      title: "Tool to generate and display fractals",
      description: "A tool to create mandelbrot or Julia fractals using Java OOP concepts. Multi-threading and Synchronization techniques were used.",
      imgUrl: projImg2,
    },
    {
      title: "QR code Generator",
      description: "A QR code-generating application using ASCII characters without any external C libraries.",
      imgUrl: projImg3,
    },
    {
      title: "Chat Application",
      description: "Real-Time Chat application where users can register, login, and join a group to chat",
      imgUrl: projImg1,
    },
    {
      title: "Morse Code Receiver and Transmitter",
      description: "A real-time morse code generator using python and Arduino microcontroller. LED, Buzzer used for the Transmitter, and LDR used as the Receiver.",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are all my projects some of them are academic projects and some of them are my personal projects. All the github links are attched to it so, you can visit and give a feedback</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { dataportfolio, meta } from "../../content_option";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

export const ProjectDetails = () => {
  const { projectId } = useParams();
  
  // Find the project by ID
  const project = dataportfolio.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <HelmetProvider>
        <Container className="About-header">
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">Project Not Found</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <p>Sorry, the project you're looking for doesn't exist.</p>
              <Link to="/portfolio">
                <Button variant="outline-primary">
                  <FaArrowLeft className="me-2" />
                  Back to Portfolio
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{project.title} | {meta.title}</title>
          <meta name="description" content={project.description} />
        </Helmet>
        
        {/* Back Button */}
        <Row className="mb-4 mt-3">
          <Col>
            <Link to="/portfolio" className="back-link">
              <FaArrowLeft className="me-2" />
              Back to Portfolio
            </Link>
          </Col>
        </Row>

        {/* Project Header */}
        <Row className="mb-5">
          <Col lg="8">
            <h1 className="display-4 mb-4">{project.title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            <p className="lead">{project.description}</p>
          </Col>
        </Row>

        {/* Project Image */}
        <Row className="mb-5">
          <Col lg="12">
            <div className="project-image-container">
              <img 
                src={project.img} 
                alt={project.title} 
                className="project-image"
              />
            </div>
          </Col>
        </Row>

        {/* Project Details */}
        <Row className="mb-5">
          <Col lg="8">
            {/* Technologies */}
            <div className="mb-4">
              <h3>Technologies Used</h3>
              <div className="technologies-container">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} bg="primary" className="me-2 mb-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Challenge */}
            <div className="mb-4">
              <h3>The Challenge</h3>
              <p>{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="mb-4">
              <h3>How I Tackled It</h3>
              <p>{project.solution}</p>
            </div>

            {/* Features */}
            <div className="mb-4">
              <h3>Key Features</h3>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Project Links */}
          <Col lg="4">
            <div className="project-links-card">
              <h4>Project Links</h4>
              <div className="d-grid gap-3">
                {project.isDeployed && (
                  <a 
                    href={project.deployedLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaExternalLinkAlt className="me-2" />
                    View Live Project
                  </a>
                )}
                <button 
                  onClick={project.isPublicRepo ? () => window.open(project.githubLink, '_blank') : undefined}
                  disabled={!project.isPublicRepo}
                  className={`btn ${project.isPublicRepo ? 'btn-outline-dark' : 'btn-outline-secondary'}`}
                  style={{
                    cursor: project.isPublicRepo ? 'pointer' : 'not-allowed',
                    opacity: project.isPublicRepo ? 1 : 0.6
                  }}
                >
                  <FaGithub className="me-2" />
                  View on GitHub
                </button>
                {!project.isPublicRepo && (
                  <small className="text-muted d-block mt-2">
                    * This repository is private and not publicly accessible
                  </small>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const {
              title,
              info,
              info2,
              url,
              repo,
              img,
              tech1,
              tech2,
              tech3,
              tech4,
              altech1,
              altech2,
              altech3,
              id,
            } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>{info || ''}</p>
                        <p className="mb-4">
                          {info2 || ''} <b>Tech Stack</b>
                        </p>
                        <h1>
                          <big>
                            {tech1 && (
                              <span className="glyph-sample">
                                <i className={`icon-${tech1}`} />
                                &nbsp;&nbsp;
                              </span>
                            )}
                            {tech2 && (
                              <span className="glyph-sample">
                                <i className={`icon-${tech2}`} />
                                &nbsp;&nbsp;
                              </span>
                            )}
                            {tech3 && (
                              <span className="glyph-sample">
                                <i className={`icon-${tech3}`} />
                                &nbsp;&nbsp;
                              </span>
                            )}
                            {tech4 && (
                              <span className="glyph-sample">
                                <i className={`icon-${tech4}`} />
                                &nbsp;&nbsp;
                              </span>
                            )}
                            {altech1 && (
                              <span className="glyph-sample">
                                <i className={`${altech1}`} />
                                &nbsp;&nbsp;
                              </span>
                            )}
                            {altech2 && (
                              <span className="glyph-sample">
                                <i className={`${altech2}`} />
                                &nbsp;&nbsp;
                              </span>
                            )}
                            {altech3 && (
                              <span className="glyph-sample">
                                <i className={`${altech3}`} />
                              </span>
                            )}
                          </big>
                        </h1>
                      </div>
                      {url && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={url}
                        >
                          See Live
                        </a>
                      )}

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={repo || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;

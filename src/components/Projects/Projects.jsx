import "./Projects.scss";
import "../../index.scss";

import { useState } from "react";
import { projects } from "../../data/projects";
import { icons } from "../../data/icons";
import Modal from "../Modal/Modal";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState("");
  return (
    <section className="projects_ctn elm_ct">
      {projects.map((project, index) => (
        <article className="project" key={index}>
          {project.openClassromm ? (
            <img
              className="openclassroom"
              alt="logoopenclassroom"
              src={icons.openclassroom.logo}
            />
          ) : null}
          <div className="project_img_ctn">
            <img alt={`image projet ${project.name}`} src={project.image} />
          </div>
          <h2 className="elm_ct">{project.name}</h2>
          <div className="tools_ctn elm_ct">
            {project.tools.map((tool, index_tool) => (
              <div className="tool_ctn" key={index_tool}>
                <img alt="tool" src={tool} />
              </div>
            ))}
          </div>
          <div className="project_menu elm_ct">
            <div
              className="btn elm_ct"
              onClick={() => {
                setShowModal(true);
                setContent(project.description);
              }}
            >
              Détails
            </div>
            {project.site != "" ? (
              <a
                className="project_btn elm_ct"
                target="_blank"
                href={project.site}
              >
                site web
              </a>
            ) : null}
            <a className="btn elm_ct" target="_blank" href={project.github}>
              Github
            </a>
          </div>
        </article>
      ))}
      {showModal ? (
        <Modal content={content} setShowModal={setShowModal} />
      ) : null}
    </section>
  );
}

export default Projects;

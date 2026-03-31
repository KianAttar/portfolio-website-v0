import Image from "next/image";
import { Project } from "@/types";
import { useTheme } from "@/components/context/ThemeContext";

const ProjectCard = ({ project }: { project: Project }) => {
  const { isDarkTheme } = useTheme();
  return (
    <>
      <Image
        src={`/img/${project.imageName}-${isDarkTheme ? "dark" : "light"}.svg`}
        alt={`${project.title} image`}
        className="projects__img"
        height={256}
        width={256}
      />
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="projects__subtitle">{project.category}</span>
          <span className="projects__subtitle">{project.date}</span>
        </div>
        <h1 className="projects__title">{project.title}</h1>
        <div style={{ display: "flex", gap: "1.2rem" }}>
          {project.website && (
            <a
              href={project.website}
              className="projects__button"
              target="_blank"
            >
              Launch <i className="ri-arrow-right-up-line"></i>
            </a>
          )}
          {project.api && (
            <a
              href={project.api ?? "#"}
              className="projects__button"
              target="_blank"
            >
              API <i className="ri-arrow-right-up-line"></i>
            </a>
          )}
          <a
            href={project.github ?? "#"}
            className="projects__button"
            target="_blank"
          >
            Github <i className="ri-arrow-right-up-line"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

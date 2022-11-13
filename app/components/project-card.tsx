import { ElementType } from "react";

type ProjectCardPicture = {
  src: string;
  alt: string;
};

type Props = {
  component?: ElementType;
  description: string;
  name: string;
  picture: ProjectCardPicture;
  projectUrl: string;
  githubUrl: string;
};

export const ProjectCard = ({
  component: Component = "div",
  description,
  name,
  picture,
  projectUrl,
  githubUrl,
}: Props) => {
  return (
    <Component>
      <img alt={picture.alt} src={picture.src} />

      <h3>{name}</h3>

      <p>{description}</p>

      <a href={projectUrl}>View project</a>
      <a href={githubUrl}>View source</a>
    </Component>
  );
};

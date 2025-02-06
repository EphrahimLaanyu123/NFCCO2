import Card from './Card'; // Adjust the import path as needed
import { projects } from './data'; // Adjust the path as needed

const Services = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <Card
          key={index}
          i={index}
          title={project.title}
          description={project.description}
          src={project.src}
          url={project.link}
          color={project.color}
          progress={[0, 1]}  // Make sure progress is an array
          range={[0, 1]}     // Make sure range is an array
          targetScale={1.2}   // Optional: specify scale if necessary
        />
      ))}
    </div>
  );
};

export default Card;

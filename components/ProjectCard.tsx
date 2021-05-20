import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { iProject } from "../type";


const ProjectCard: FunctionComponent<{

  project:iProject;

}> = ({
  project:{
    name, 
    image_path, 
    category, 
    deployed_url, 
    github_url, 
    description, 
    key_techs,
  }
}) => {

  const [showDetail, setShowDetail] = useState(false)

  return (
    <div>
      
      <img src={image_path} alt={name} className="cursor-pointer" onClick={() =>setShowDetail(true)} />
    <p className="my-2 text-center">{name}</p>

    {showDetail && (

    <div className="grid md:cols-2">
    <div>
       <img src={image_path} alt={name} />
       <div>
         <a href={github_url}>
           <AiFillGithub /> <span>Github</span>
         </a>
         <a href={deployed_url}>
           <AiFillProject /> <span>Project</span>
         </a>
       </div>
      </div>

    <div>
      <h2>{name}</h2>
      <h3>{description}</h3>
      <div>
        {key_techs.map((tech) => (
          <span key={tech}>{tech}</span>
      ))}
      </div>
    </div>

    <button onClick={()=>setShowDetail(false)}>
      <MdClose size={30}/>
    </button>
    </div>
    )}
  </div>

  )
}

export default ProjectCard
import { Category } from "../types"
import { FunctionComponent} from "react"

export const NavItem:FunctionComponent<{
  value:Category | "all";
  handlerFilterCategory:Function
  active:string
  }> = ({value, handlerFilterCategory, active }) => {

    let className = "capitalize cursor-pointer hover:text-purple"

    if(active === value) {
      className += " text-purple"
    }

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  )
}

const ProjectsNavbar: FunctionComponent<{handlerFilterCategory:Function, active:string}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none font-bold">
      <NavItem value = "all" {...props}/>
      <NavItem value = "React" {...props}/>
      <NavItem value = "jQuery" {...props}/>
      <NavItem value = "Phaser" {...props}/>
      <NavItem value = "Node.js" {...props}/>
      <NavItem value = "Ruby" {...props}/>
      <NavItem value = "TypeScript" {...props}/>

    </div>
  )
}

export default ProjectsNavbar



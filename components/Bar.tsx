import { FunctionComponent } from "react"
import { iSkill } from "../type"

const Bar:FunctionComponent <{
  data:iSkill
}> = ({data:{Icon, level, name}}) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
      style={{width: level}}>
        
        <Icon className="mr-3"/>
        {name}
      </div>
    </div>
  )
}

export default Bar
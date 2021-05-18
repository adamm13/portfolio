import { FunctionComponent } from "react"
import { iSkill } from "../type"

const Bar:FunctionComponent <{
  data:iSkill
}> = ({data:{Icon, level, name}}) => {
  return (
    <div>
      {name}
    </div>
  )
}

export default Bar
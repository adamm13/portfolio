import {IconType} from 'react-icons'

export interface iService {
  title: string,
  about: string,
  Icon: IconType
}

export interface iSkill {
  name: string,
  level: string,
  Icon: IconType
}

export interface iProject{
  name:string,
  description:string,
  image_path:string,
  deployed_url:string,
  github_url:string,
  category:Category[],
  key_techs:string[];
}

export type Category = 'react' | "node" | "express" | "django" | "mongo";
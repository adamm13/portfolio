import { FunctionComponent } from "react";
import {IconType} from 'react-icons'

export interface iService {
  Icon: IconType;
  title: string;
  about: string;
}

export interface iSkill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface iProject{
  id:number,
  name:string,
  description:string,
  image_path:string,
  deployed_url:string,
  github_url:string,
  category:Category[],
  key_techs:string[];
}

export type Category =
  | "React"
  | "jQuery"
  | "Express"
  | "Phaser"
  | "Node.js"
  | "TypeScript"
  | "Ruby";

export interface ContentExperience {
    title: string
    second_title: string
    jobs: Job[]
    projects: Project[]
  }
  
  export interface Job {
    title: string
    company: string
    location: string
    date: string
    description: string
    skills: Skill[]
  }
  
  export interface Skill {
    title: string
    icon: string
  }
  
  export interface Project {
    title: string
    company: string
    location: string
    date: string
    description: string
    skills: Skill2[]
  }
  
  export interface Skill2 {
    title: string
    icon: string
  }

  export interface Certificate {
    title: string
    institution: string
    link: string
  }

  export type Technology = {
    name: string
    iconDark: string
  }
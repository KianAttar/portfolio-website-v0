export type Skill = {
  imageName: string;
  name: string;
  tags: string[];
};

export type SkillSet = {
  title: string,
  iconName: string,
  skills: Skill[];
};

export type Project = {
  id: number;
  title: string;
  category: string;
  imageName: string;
  github: string;
  website: string;
  api?: string;
  date: string;
};

export type Testimonial = {
  id: number;
  from: string;
  role: string;
  text:string;
}

export type PortfolioData = {
  skillSets: SkillSet[];
  projects: Project[];
  testimonials: Testimonial[];
};


export type NavItemProps = {
  id: string;
  title: string;
  iconClassName: string;
  isActive: boolean;
}

export type SkillProps = {
  name: string;
  imageName: string;
}

export type SkillSetProps = {
  title: string;
  iconName: string;
  skills: Skill[];
  filters: string[];
}


export type SkillFilterTag = {
  label: string;
  value: string;
}

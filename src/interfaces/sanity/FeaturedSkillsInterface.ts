interface SkillInterface {
  id: string;
  _key: string;
  skill: string;
  _type: string;
}

export interface FeaturedSkillsInterface {
  id: string | null;
  skills: SkillInterface[];
}

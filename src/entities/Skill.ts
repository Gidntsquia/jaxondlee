export type SkillName =
  | "python"
  | "typescript"
  | "react"
  | "aws"
  | "soldering"
  | "spanish"
  | "javascript"
  | "csharp"
  | "research"
  | "kotlin";

export default interface Skill {
  category?: "software" | "hardware" | "language" | "academia";
  type?: string;
  title: string;
  slug: SkillName;
  proficiency?: "learning" | "proficient";
}

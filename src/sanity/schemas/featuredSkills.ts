const featuredSkills = {
  name: "featured_skills",
  title: "Featured Skills",
  type: "document",
  fields: [
    {
      name: "skills_title",
      title: "Title",
      type: "string",
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          name: "skill",
          title: "Skill",
          type: "object",
          fields: [
            { name: "id", title: "ID", type: "string" },
            { name: "skill", title: "Skill", type: "string" },
          ],
        },
      ],
    },
  ],
};

export default featuredSkills;

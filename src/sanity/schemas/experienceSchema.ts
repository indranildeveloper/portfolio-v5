const experienceSchema = {
  name: "experience",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "work_place",
      title: "Work Place",
      type: "string",
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "work_place",
      },
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "timeline",
      title: "Timeline",
      type: "string",
    },
    {
      name: "achievements",
      title: "Achievements",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default experienceSchema;

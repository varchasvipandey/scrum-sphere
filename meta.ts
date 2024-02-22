import type { Metadata } from "next";

export const title = "Scrum Sphere";

export const siteMeta: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: "Manage, collaborate & analyse sprints with AI powered scrum management tools",
  keywords: "scrum, sprint manager, oraganisation tool, task management, ai tool",
};

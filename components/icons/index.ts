import { Settings, CreditCard, Circle, Layout, GitGraph } from "lucide-react";

const icons = {
  settings: Settings,
  billing: CreditCard,
  circle: Circle,
  board: Layout,
  analytics: GitGraph,
};

type Icon = keyof typeof icons;

export const getIcon = (iconName: Icon) => icons[iconName];

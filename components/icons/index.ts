import { Settings, CreditCard, Circle, Layout, GitGraph, Menu, Plus } from "lucide-react";

const icons = {
  settings: Settings,
  billing: CreditCard,
  circle: Circle,
  board: Layout,
  analytics: GitGraph,
  menu: Menu,
  add: Plus,
};

type Icon = keyof typeof icons;

export const getIcon = (iconName: Icon) => icons[iconName];

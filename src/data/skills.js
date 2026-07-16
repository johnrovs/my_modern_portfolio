import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiMariadb,
  SiGit,
  SiGithub,
  SiPostman,
  SiApachemaven,
  SiIntellijidea,
  SiApache,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { FaServer } from "react-icons/fa";

export const skillCategories = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: DiJava, level: 80, color: "#f89820" },
      { name: "JavaScript", icon: SiJavascript, level: 75, color: "#f7df1e" },
      { name: "HTML5", icon: SiHtml5, level: 95, color: "#e34f26" },
      { name: "CSS3", icon: SiCss, level: 90, color: "#2965f1" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, level: 70, color: "#61dafb" },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: 60,
        color: "#38bdf8",
      },
      { name: "Bootstrap", icon: SiBootstrap, level: 85, color: "#7952b3" },
      { name: "JavaScript", icon: SiJavascript, level: 80, color: "#f7df1e" },
      { name: "jQuery", icon: SiJquery, level: 70, color: "#0769ad" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Spring", icon: SiSpring, level: 88, color: "#6db33f" },
      { name: "Hibernate", icon: SiHibernate, level: 82, color: "#59666c" },
      { name: "REST API", icon: FaServer, level: 80, color: "#06b6d4" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: SiMysql, level: 80, color: "#4479a1" },
      { name: "MariaDB", icon: SiMariadb, level: 80, color: "#003545" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, level: 60, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, level: 70, color: "#ffffff" },
      { name: "Postman", icon: SiPostman, level: 85, color: "#ff6c37" },
      {
        name: "Spring Tool Suite",
        icon: SiSpring,
        level: 82,
        color: "#6db33f",
      },
      { name: "SVN", icon: SiApache, level: 85, color: "#ff6c37" },
      { name: "VS Code", icon: VscVscode, level: 70, color: "#007acc" },
      {
        name: "IntelliJ IDEA",
        icon: SiIntellijidea,
        level: 50,
        color: "#000000",
      },
    ],
  },
];

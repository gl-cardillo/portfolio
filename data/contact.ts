import type { IconType } from "react-icons";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

export const EMAIL = "giovanniluca.cardillo@gmail.com";

export const links: {
  icon: IconType;
  label: string;
  value: string;
  href: string;
}[] = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "in/luca-cardillo",
    href: "https://www.linkedin.com/in/luca-cardillo-528229162",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "gl-cardillo",
    href: "https://github.com/gl-cardillo",
  },
  {
    icon: FaFileDownload,
    label: "CV",
    value: "Download PDF",
    href: "/cv.pdf",
  },
];

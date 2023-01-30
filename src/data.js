import { FaHome, FaUser, FaFolder, FaCalendar, FaFile } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const size = 24;

export const socialLinks = [
  {
    icon: <FaFacebook size={size} />,
    url: "https://www.facebook.com",
  },
  {
    icon: <FaTwitter size={size} />,
    url: "https://www.twitter.com/",
  },
  {
    icon: <FaLinkedin size={size} />,
    url: "https://www.linkedin.com/",
  },
];

export const links = [
  {
    text: "Home",
    icon: <FaHome size={size}></FaHome>,
  },
  {
    text: "Team",
    icon: <FaUser size={size}></FaUser>,
  },
  {
    text: "Projects",
    icon: <FaFolder size={size}></FaFolder>,
  },
  {
    text: "Calender",
    icon: <FaCalendar size={24}></FaCalendar>,
  },
  { text: "Documents", icon: <FaFile size={size}></FaFile> },
];

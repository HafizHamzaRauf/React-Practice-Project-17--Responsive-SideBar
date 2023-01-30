import CloseButton from "./Icons/CloseButton";
import classes from "./SideBar.module.css";
import { links, socialLinks } from "../data";

export default function SideBar({ onClick, className }) {
  const navList = links.map(({ icon, text }) => (
    <li className={classes["nav-item"]}>
      <a>{icon}</a>
      <p className={classes.anchor}>{text}</p>
    </li>
  ));
  const socialNavLinks = socialLinks.map(({ url, icon }) => (
    <li>
      <a href={url}>{icon}</a>
    </li>
  ));

  return (
    <nav className={`${classes.nav} ${className}`}>
      <div className={classes["nav--heading-container"]}>
        <h1>React Practice</h1>
        <CloseButton onClick={onClick}></CloseButton>
      </div>
      <ul className={classes["nav-list"]}>{navList}</ul>
      <ul className={classes["social-links"]}>{socialNavLinks}</ul>
    </nav>
  );
}

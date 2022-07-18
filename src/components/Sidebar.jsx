import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jfif";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Battisti" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a
        href="https://www.linkedin.com/in/jos%C3%A9-domingos-c-n-donge-2197221b8/"
        className="btn"
      >
        Ver currículo
      </a>
    </aside>
  );
};

export default Sidebar;

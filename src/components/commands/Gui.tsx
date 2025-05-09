import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";
import portfolioData from "../../../portfolioData.json"; // Import the JSON file

const Gui: React.FC = () => {
  const { history, rerender } = useContext(termContext);
  const gui  = portfolioData.contact.uiportfilio;

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "gui") {
    window.open(gui, "_blank");
  }

  return <span></span>;
};

export default Gui;

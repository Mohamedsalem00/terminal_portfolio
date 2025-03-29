import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";
import portfolioData from "../../../portfolioData.json"; // Import the JSON file

const Email: React.FC = () => {
  const { history, rerender } = useContext(termContext);
  const email  = portfolioData.contact.email; // Destructure the email from the imported JSON
  
  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
    window.open("mailto:" + {email}, "_self");
  }

  return (
    <Wrapper>
      <span data-testid="email">
        {`Email: ${email}`}
      </span>
    </Wrapper>
  );
};

export default Email;

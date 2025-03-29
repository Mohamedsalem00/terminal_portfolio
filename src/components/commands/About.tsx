import { useState } from "react";
import { AboutWrapper, HighlightAlt, HighlightSpan } from "../styles/About.styled";
import portfolioData from "../../../portfolioData.json"; // Import the JSON file

const About: React.FC = () => {
  // Directly use the static data from the imported JSON
  const [bio] = useState(portfolioData.bio);

  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>{bio.name}</HighlightSpan>!
      </p>
      <p>
        I am <HighlightAlt>{bio.title}</HighlightAlt>.
      </p>
      <p>{bio.description}</p>
    </AboutWrapper>
  );
};

export default About;

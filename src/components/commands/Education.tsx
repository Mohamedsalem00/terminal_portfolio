import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";
import portfolioData from "../../../portfolioData.json"; // Import the JSON file

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {portfolioData.education.map(({ institution, degree, period }) => (
        <EduList key={institution}>
          <div className="title">{degree} - {institution}</div>
          <div className="desc">{period}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

export default Education;

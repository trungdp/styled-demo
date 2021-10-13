import "./App.css";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) => (props.primary ? "teal" : "white")};
  color: ${(props) => (props.primary ? "white" : "teal")};

  font-size: 2em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid teal;
  border-radius: 3px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${StyledButton} {
    filter: grayscale(0.8);
  }
`;

const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled((props) => <Link size="large" {...props} />)`
  color: teal;

  text-decoration: teal;
  border: 1px solid teal;

  font-size: ${(props) => (props.size === "large" ? "2rem" : "1rem")};
  padding: ${(props) =>
    props.size === "large" ? "1rem 4rem" : "0.25rem 2rem"};
`;

function App() {
  return (
    <Container className="App">
      <Link>This is link</Link>
      <br />
      <StyledLink>This is StyledLink</StyledLink>
      <br />
      <StyledLink size="large">This is Large Link</StyledLink>
    </Container>
  );
}

export default App;

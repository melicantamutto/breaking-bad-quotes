import styled from "styled-components";
import Quote from "./components/Quote";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    fetchApi();
  }, []);

  const [quote, setQuote] = useState({});

  const fetchApi = async () => {
    const resp = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const obj = await resp.json();
    setQuote(obj[0]);
  };
  return (
    <div>
      <Container>
        <Quote quote={quote} />
        <Button onClick={fetchApi}>Obtener Frase</Button>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;
const Button = styled.div`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 1px solid black;
  transition: background-size 0.8s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

export default App;

import players from "./data";
import Players from "./components/players";

import styled from "styled-components";

function App() {
  console.log(players);
  return (
    <Container>
      <Header>
        <h1>DEADPOOL</h1>
      </Header>
      <Players players={players} />
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
`;
const Header = styled.header`
  background-color: #282c34;
  min-height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  width: 100%;
`;
export default App;

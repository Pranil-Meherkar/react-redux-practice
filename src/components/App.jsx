import "../App.css";
import { useSelector } from "react-redux";

//import EnemyContainer from "./EnemyContainer";
import EnemyContainerHooks from "./EnemyContainerHooks";
import TeammateContainer from "./TeammateContainer";
import NewEnemyContainer from "./NewEnenmyContainer";
import UserComponent from "./UserComponent";

function App() {
  const numOfTeammates = useSelector((state) => state.teammate.numOfTeammates);
  return (
    <div className="App">
      {numOfTeammates ? (
        <>
          <h1>Hello</h1>
          <EnemyContainerHooks />
          <TeammateContainer />
          <NewEnemyContainer />
          <UserComponent />
        </>
      ) : (
        <h1>Game Over</h1>
      )}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { connect } from "react-redux";
import { defeatEnemy } from "./../redux/enemies/enemyActions";

function NewEnemyContainer(props) {
  const [count, setCount] = useState(1);
  return (
    <>
      <h3>Number of Enemies : {props.numOfEnemies}</h3>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={() => props.defeatEnemy(count)}>
        Defeat {count} Enemy
      </button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfEnemies: state.enemy.numOfEnemies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    defeatEnemy: (number) => dispatch(defeatEnemy(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEnemyContainer);

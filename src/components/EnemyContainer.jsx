import React from "react";
import { connect } from "react-redux";
import { defeatEnemy } from "./../redux/enemies/enemyActions";

function EnemyContainer(props) {
  return (
    <>
      <h3>Number of Enemies : {props.numOfEnemies}</h3>
      <button onClick={props.defeatEnemy}>Defeat Enemy</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfEnemies: state.numOfEnemies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    defeatEnemy: () => dispatch(defeatEnemy()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EnemyContainer);

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { defeatEnemy } from "./../redux/enemies/enemyActions";

function EnemyContainerHooks() {
  const numOfEnemies = useSelector((state) => state.enemy.numOfEnemies);
  const dispatch = useDispatch();
  return (
    <>
      <h3>Number of Enemies : {numOfEnemies}</h3>
      <button onClick={() => dispatch(defeatEnemy())}>Defeat Enemy</button>
    </>
  );
}

export default EnemyContainerHooks;

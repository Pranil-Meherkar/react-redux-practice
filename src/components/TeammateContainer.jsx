import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { teammateLost } from "./../redux/teammates/teammateActions";

function TeammateContainer() {
  const numOfTeammates = useSelector((state) => state.teammate.numOfTeammates);
  const dispatch = useDispatch();
  return (
    <>
      <h3>Number of Teammates : {numOfTeammates}</h3>
      <button onClick={() => dispatch(teammateLost())}>Lost Teammate</button>
    </>
  );
}

export default TeammateContainer;

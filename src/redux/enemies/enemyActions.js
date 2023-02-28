import { DEFEAT_ENEMY } from "./enemyTypes";

export const defeatEnemy = (number = 1) => {
  return {
    type: DEFEAT_ENEMY,
    payload: number,
  };
};

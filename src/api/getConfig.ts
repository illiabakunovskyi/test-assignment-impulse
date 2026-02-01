import configData from "../config.json";

import type { GameConfigResponseData } from "./types";

const RESPONSE_DELAY = 1000;

export const getConfig = (): Promise<GameConfigResponseData> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(configData), RESPONSE_DELAY);
  });
};

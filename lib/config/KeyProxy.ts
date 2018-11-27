import { ProdKey } from "./ProdKey";
import { DevKey } from "./DevKey";
import { Keys } from "./Keys";

export function getKeys(): Keys {
  switch (process.env.NODE_ENV) {
    case "production":
      return new ProdKey();
    default:
      return new DevKey();
  }
}

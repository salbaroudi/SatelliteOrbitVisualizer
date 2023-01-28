import { TOGGLE_ORBITS } from "./types";

export const toggleOn = () => {
    return { type:TOGGLE_ORBITS, visibleOrbits: true};
  }

export const toggleOff = () => {
    return { type:TOGGLE_ORBITS, visibleOrbits: false};
  }



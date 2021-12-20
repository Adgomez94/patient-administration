import {useState} from "react";

export const useToggle = ( initialState = false ) => {
  const  [ state, setState ] = useState(initialState)

  const toggle = ( isTrue:boolean ):void => setState(isTrue)

  return [ state, toggle ] as const
};

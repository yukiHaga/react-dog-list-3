import { ReactNode, useReducer, createContext, Dispatch } from "react";
import dogReducer, {
  DogState,
  initialDogState,
  DogAction,
} from "../reducers/dogReducer";

export type Value = {
  dogState: DogState;
  dispatch?: Dispatch<DogAction>;
};

export const Context = createContext<Value | null>(null);

type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {
  const [dogState, dispatch] = useReducer(dogReducer, initialDogState);

  const value = {
    dogState,
    dispatch,
  };
  return <Context.Provider {...{ value }}>{children}</Context.Provider>;
};

export default Provider;

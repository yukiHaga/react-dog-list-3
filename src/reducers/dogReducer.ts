import { REQUEST_STATE, RESPONSE_STATE } from "../constants/index";

export type DogState = {
  responseState: keyof typeof RESPONSE_STATE;
  errors?: string;
  images?: string[];
};

export const initialDogState: DogState = {
  responseState: "INITIAL",
  errors: "",
  images: [],
};

export type DogAction = {
  type: keyof typeof REQUEST_STATE;
  payload?: DogState["images"];
  errors?: DogState["errors"];
};

type DogReducer = (state: DogState, action: DogAction) => DogState;

const dogReducer: DogReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_STATE.REQUEST:
      return {
        ...state,
        responseState: RESPONSE_STATE.LOADING,
      };
    case REQUEST_STATE.REQUEST_SUCCESS:
      return {
        ...state,
        responseState: RESPONSE_STATE.OK,
        images: action.payload,
      };
    case REQUEST_STATE.REQUEST_FAILURE:
      return {
        ...state,
        responseState: RESPONSE_STATE.FAILURE,
        errors: action.errors,
      };
    default:
      throw new Error();
  }
};

export default dogReducer;

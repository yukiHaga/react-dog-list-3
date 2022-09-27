import {
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrorsImpl,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import fetchDogImages from "../apis/fetchDogImages";
import { useContext, Dispatch, useEffect } from "react";
import { Context } from "../context/Provider";
import { Value } from "../context/Provider";
import { REQUEST_STATE } from "../constants/index";
import { DogState } from "../reducers/dogReducer";

type IFormInputs = {
  name: string;
};

export type UseDog = {
  handleSubmit: UseFormHandleSubmit<IFormInputs>;
  onSubmit: ({ name }: IFormInputs) => void;
  register: UseFormRegister<IFormInputs>;
  errors: FieldErrorsImpl<{
    name: string;
  }>;
  dogState: DogState;
};

export default function useDog(): UseDog {
  const schema = yup.object({
    name: yup
      .string()
      .required("犬の名前を英語で入力してください")
      .matches(/^[a-z]+$/, "半角英字の小文字で入力してください"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const { dogState, dispatch } = useContext(Context) as Value;

  const onSubmit = ({ name }: IFormInputs) => {
    // @ts-ignore
    dispatch({ type: REQUEST_STATE.REQUEST });
    fetchDogImages(name)
      .then((data) => {
        // @ts-ignore
        dispatch({
          type: REQUEST_STATE.REQUEST_SUCCESS,
          payload: data.message,
        });
      })
      .catch((e) => {
        // @ts-ignore
        dispatch({
          type: REQUEST_STATE.REQUEST_FAILURE,
          errors: e.message,
        });
      });
  };

  useEffect(() => {
    // @ts-ignore
    dispatch({ type: REQUEST_STATE.REQUEST });
    fetchDogImages()
      .then((data) => {
        // @ts-ignore
        dispatch({
          type: REQUEST_STATE.REQUEST_SUCCESS,
          payload: data.message,
        });
      })
      .catch((e) => {
        // @ts-ignore
        dispatch({
          type: REQUEST_STATE.REQUEST_FAILURE,
          errors: e.message,
        });
      });
  }, [dispatch]);

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    dogState,
  };
}

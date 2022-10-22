import { ChangeEvent, FormEvent, useState } from "react";
import { InputText } from "../../components/atoms";
import { Link } from "react-router-dom";

interface ISignUp {
  email: string;
  password: string;
  confirmPassword: string;
}

const initSignUpFields: ISignUp = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [signUp, setSignUp] = useState<ISignUp>(initSignUpFields);

  const onEmailInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSignUp((state) => {
      return {
        ...state,
        email: value,
      };
    });
  };

  const onPasswordInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSignUp((state) => {
      return {
        ...state,
        password: value,
      };
    });
  };

  const onConfirmPasswordInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSignUp((state) => {
      return {
        ...state,
        confirmPassword: value,
      };
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Todo send user to server

    setSignUp(initSignUpFields);
  };

  return (
    <form className="mt-5 flex w-full flex-col justify-between p-[10px]" onSubmit={onSubmit}>
      <div className="mb-6 ">
        <InputText label="Email" onChange={onEmailInputHandler} />
        <InputText label="Password" onChange={onPasswordInputHandler} />
        <InputText label="Confirm Password" onChange={onConfirmPasswordInputHandler} />
      </div>
      <button
        className=" focus:shadow-outline mb-6 w-full rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
        type="submit"
      >
        Register
      </button>
      <Link
        className="inline-block text-center align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
        to="/auth/sign-in"
      >
        Already have an account?
      </Link>
    </form>
  );
};

export default SignUp;

import { useRef, useState, RefObject, ChangeEvent, FormEvent } from "react";
import { InputText } from "../../components/ui/input-text/input-text";
import { Link } from "react-router-dom";

interface ISignIn {
  email: string;
  password: string;
}

const initSignInFields: ISignIn = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [signIn, setSignIn] = useState<ISignIn>(initSignInFields);

  const onEmailInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSignIn((state) => {
      return {
        ...state,
        email: value,
      };
    });
  };

  const onPasswordInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSignIn((state) => {
      return {
        ...state,
        password: value,
      };
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Todo send user to server

    setSignIn(initSignInFields);
  };

  return (
    <form
      className="mt-5 flex w-full flex-col justify-between p-[10px]"
      onSubmit={onSubmit}
    >
      <div className="mb-6">
        <InputText
          label="Email"
          value={signIn.email}
          onChange={onEmailInputHandler}
        />
        <InputText
          label="Password"
          value={signIn.password}
          onChange={onPasswordInputHandler}
        />
      </div>
      <button
        className=" focus:shadow-outline mb-6 w-full rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
        type="submit"
      >
        Enter
      </button>
      <Link
        className="inline-block text-center align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
        to="/authentication/sign-up"
      >
        Dont have an account?
      </Link>
    </form>
  );
};

export default SignIn;

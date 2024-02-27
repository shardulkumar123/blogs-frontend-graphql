"use client";

import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorValidationMessage from "@/components/ErrorMessage";
import { UserLogin } from "@/services/mutations";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { LOGIN_VALIDATION } from "@/validations/loginValidation";
import { PlaceholderData } from "@/constants/placeholders";
import { ILoginFormData } from "@/interfaces";

const Login = () => {
  const [createLoginToken, { data }] = useMutation(UserLogin);

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.createLoginToken);
    }
  }, [data]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: yupResolver(LOGIN_VALIDATION),
  });

  const onSubmit = async (payload: ILoginFormData) => {
    const { email, password } = payload;
    try {
      const res = await createLoginToken({
        variables: {
          email,
          password,
        },
      });
      if (res) reset();
    } catch (error) {
      error;
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-400 flex flex-cols justify-center items-center">
      <div className="border-2 h-80 w-1/3 flex flex-col justify-center items-center gap-6 rounded-xl">
        <div className="text-4xl">Login</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full items-center"
        >
          <div className="w-2/3">
            <TextInput
              name="email"
              placeholder={PlaceholderData.email}
              control={control}
            />
            <ErrorValidationMessage errorMessage={errors?.email?.message} />
          </div>
          <div className="w-2/3">
            <TextInput
              type="password"
              name="password"
              placeholder={PlaceholderData.password}
              control={control}
            />
            <ErrorValidationMessage errorMessage={errors?.password?.message} />
          </div>
          <Button name="login" label="Submit" type="submit" />
        </form>
        <span className="hover:text-slate-500 cursor-pointer">
          create a new account ?
        </span>
      </div>
    </div>
  );
};

export default Login;

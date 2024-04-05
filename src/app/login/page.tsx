"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
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
import { toast } from "react-toastify";
import { useAuth } from "@/context/auth";
import { useLoader } from "@/context/loader";

const Login = () => {
  const { setLoggedIn } = useAuth();
  const { setLoader } = useLoader();
  const [createLoginToken, { data, loading }] = useMutation(UserLogin);
  console.log("loading", loading);
  const router = useRouter();

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.createLoginToken);
    }
  }, [data]);

  useEffect(() => {
    if (loading) setLoader(true);
    else setLoader(false);
  }, [loading, setLoader]);

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
      if (res) {
        reset();
        router.push("/");
        setLoggedIn(true);
        toast.success(`Welcome back ${email}!`);
      }
    } catch (error) {
      error;
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-400 flex flex-cols justify-center items-center">
      <div className="border-2 h-[calc(100vh - 20px)] w-1/3 p-4 flex flex-col justify-center items-center gap-6 rounded-xl">
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
        <span
          className="hover:text-slate-500 cursor-pointer"
          onClick={() => router.push("/registration")}
        >
          create a new account ?
        </span>
      </div>
    </div>
  );
};

export default Login;

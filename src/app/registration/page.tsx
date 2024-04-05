"use client";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorValidationMessage from "@/components/ErrorMessage";
import { UserSignUp } from "@/services/mutations";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { SIGNUP_VALIDATION } from "@/validations/loginValidation";
import { PlaceholderData } from "@/constants/placeholders";
import { ISignUpFormData } from "@/interfaces";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useLoader } from "@/context/loader";

const Registration = () => {
  const { setLoader } = useLoader();
  const [createUser, { loading }] = useMutation(UserSignUp);
  const router = useRouter();

  useEffect(() => {
    if (loading) setLoader(true);
    else setLoader(false);
  }, [loading, setLoader]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignUpFormData>({
    resolver: yupResolver(SIGNUP_VALIDATION),
  });

  const onSubmit = async (payload: ISignUpFormData) => {
    const { firstName, lastName, email, password } = payload;
    try {
      const res = await createUser({
        variables: {
          firstName,
          lastName,
          email,
          password,
        },
      });
      if (res) {
        reset();
        router.push("/login");
        setLoader(false);
        toast.success("Account created successfully!");
      }
    } catch (error: any) {
      toast.error("Account not created!", error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-400 flex flex-cols justify-center items-center">
      <div className="border-2 w-1/3 h-[calc(100vh - 20px)] py-4 flex flex-col justify-center items-center gap-6 rounded-xl">
        <div className="text-4xl">Sign Up</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full items-center"
        >
          <div className="w-2/3">
            <TextInput
              name="firstName"
              placeholder={PlaceholderData.firstName}
              control={control}
            />
            <ErrorValidationMessage errorMessage={errors?.firstName?.message} />
          </div>
          <div className="w-2/3">
            <TextInput
              name="lastName"
              placeholder={PlaceholderData.lastName}
              control={control}
            />
            <ErrorValidationMessage errorMessage={errors?.lastName?.message} />
          </div>
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
          onClick={() => router.push("/login")}
        >
          Already have an account?
        </span>
      </div>
    </div>
  );
};

export default Registration;

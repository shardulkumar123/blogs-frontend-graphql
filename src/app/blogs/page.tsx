"use client";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Card from "@/components/card";
import { Get_User_Post_Blogs } from "@/services/queries";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { CreatePost } from "@/services/mutations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextArea from "@/components/TextArea";
import ErrorValidationMessage from "@/components/ErrorMessage";
import { Post_Validation } from "@/validations";
import { IPostFormData } from "@/interfaces";
import { useLoader } from "@/context/loader";

const Blogs = () => {
  const { setLoader } = useLoader();
  const { data, loading } = useQuery(Get_User_Post_Blogs);
  const [createPost] = useMutation(CreatePost);

  useEffect(() => {
    if (loading) setLoader(true);
    else setLoader(false);
  }, [loading, setLoader]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IPostFormData>({
    resolver: yupResolver(Post_Validation),
  });

  const onSubmit = async (payload: IPostFormData) => {
    const { title, body } = payload;
    try {
      const res = await createPost({
        variables: {
          title,
          body,
        },
        refetchQueries: [{ query: Get_User_Post_Blogs }],
      });
      if (res) {
        setLoader(false);
        reset();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-2 mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:w-1/2 w-full p-5 flex flex-col gap-2"
      >
        <TextInput placeholder="title" control={control} name="title" />
        <ErrorValidationMessage errorMessage={errors?.title?.message} />
        <TextArea
          placeholder="write your post..."
          rows={8}
          control={control}
          name="body"
        />
        <ErrorValidationMessage errorMessage={errors?.body?.message} />
        <Button name="post" label="Post" type="submit" />
      </form>
      <div className="w-full justify-center items-center mt-5">
        {data?.getPostByUser.length ? (
          <div className="w-full flex p-5 gap-8 flex-wrap sm:justify-start justify-center">
            {data?.getPostByUser.map((item: any) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.body}
                slug={`blogs/${item.id}`}
              />
            ))}
          </div>
        ) : (
          <div className="w-full h-[calc(100vh - 20px)] flex justify-center items-center my-20 ">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white ">
              No
              <span className="text-blue-600"> Blogs</span>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;

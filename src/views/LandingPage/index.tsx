"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Card from "@/components/card";
import { Get_All_Blogs } from "@/services/queries";
import { useLoader } from "@/context/loader";

const LandingBlogs = () => {
  const { setLoader } = useLoader();
  const { data, refetch, loading } = useQuery(Get_All_Blogs);

  useEffect(() => {
    if (loading) setLoader(true);
    else setLoader(false);
  }, [loading, setLoader]);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000);

    return () => clearInterval(interval);
  }, [refetch]);

  return (
    <div className="w-full justify-center items-center mt-5">
      {data?.getAllPosts.length ? (
        <div className="w-full flex p-5 gap-8 flex-wrap sm:justify-start justify-center">
          {data?.getAllPosts.map((item: any) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.body}
              slug={`blogs/${item.id}`}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-[calc(100vh - 20px)] flex justify-center items-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
            No
            <span className=" text-blue-500"> Blogs</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default LandingBlogs;

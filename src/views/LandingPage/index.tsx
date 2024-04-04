"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Card from "@/components/card";
import { Get_All_Blogs } from "@/services/queries";

const LandingBlogs = () => {
  const { data, refetch } = useQuery(Get_All_Blogs);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000);

    return () => clearInterval(interval);
  }, [refetch]);

  return (
    <div className="w-full justify-center items-center">
      {data?.getAllPosts.length ? (
        <div className="w-full grid grid-cols-4 gap-4 justify-items-center items-center">
          {data?.getAllPosts.slice(0, 10).map((item: any) => (
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
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            No
            <span className="text-blue-600 dark:text-blue-500"> Blogs</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default LandingBlogs;

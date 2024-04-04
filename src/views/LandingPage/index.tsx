"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Card from "@/components/card";
import { Get_All_Blogs } from "@/services/queries";

const LandingBlogs = () => {
  const { data } = useQuery(Get_All_Blogs);
  console.log("data", data);

  return (
    <div className="w-full grid grid-cols-4 gap-4 justify-items-center items-center">
      {data?.getAllPosts.length ? (
        data?.getAllPosts.map((item: any) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.body}
            slug={`blogs/${item.id}`}
          />
        ))
      ) : (
        <div className="text-center">
          <h2>No Data</h2>
        </div>
      )}
    </div>
  );
};

export default LandingBlogs;

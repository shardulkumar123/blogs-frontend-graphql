"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import Card from "@/components/card";
import { Get_User_Post_Blogs } from "@/services/queries";

const Blogs = () => {
  const { data } = useQuery(Get_User_Post_Blogs);

  return (
    <div className="w-full grid grid-cols-4 gap-4 justify-items-center items-center">
      {data?.getPostByUser.length ? (
        data?.getPostByUser.map((item: any) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.body}
            slug={`blogs${item.id}`}
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

export default Blogs;

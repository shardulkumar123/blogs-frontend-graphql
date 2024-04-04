"use client";
import { Get_Blog } from "@/services/queries";
import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";

const BlogDetails = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const { data } = useQuery(Get_Blog, {
    variables: { id: slug },
  });

  return (
    <div className="p-5">
      <div className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          {data?.getPostById?.title}
        </span>
      </div>
      <div className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
        {data?.getPostById?.body}
      </div>
    </div>
  );
};

export default BlogDetails;

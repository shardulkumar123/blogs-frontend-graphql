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
    <div>
      <h1>{data?.getPostById?.title}</h1>
      <p>{data?.getPostById?.body}</p>
    </div>
  );
};

export default BlogDetails;

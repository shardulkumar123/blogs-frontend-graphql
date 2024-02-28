import React from "react";

const BlogDetails = ({ params }: { params: { slug: string } }) => {
  console.log("slug", params);
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
};

export default BlogDetails;

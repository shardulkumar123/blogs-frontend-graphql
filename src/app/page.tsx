import LandingBlogs from "@/views/LandingPage";

export default function Home() {
  return (
    <div className="w-full flex flex-col my-20 px-20">
      <div className="w-full text-center">All Latest Blogs</div>
      <LandingBlogs />
    </div>
  );
}

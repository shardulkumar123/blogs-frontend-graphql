import LandingBlogs from "@/views/LandingPage";

export default function Home() {
  return (
    <div className="w-full flex flex-col my-10 px-20 items-center">
      <div className="text-4xl font-extrabold mb-10 dark:text-white">
        All Latest Blogs
      </div>
      <LandingBlogs />
    </div>
  );
}

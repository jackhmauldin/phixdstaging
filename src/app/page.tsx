// components
import { Footer } from "@/components";

// sections
import Hero from "./hero";
import LatestBlogPosts from "./latest-blog-posts";
import Logo from "@/components/logo";

export default function Campaign() {
  return (
    <>
      <Logo />
      <Hero />
      <LatestBlogPosts />
      <Footer />
    </>
  );
}

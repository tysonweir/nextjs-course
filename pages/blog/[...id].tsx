import { useRouter } from "next/router";

//This is a catch all route, so it will match /blog/a, /blog/b, /blog/c, etc.
function BlogPostPAGE() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPostPAGE;

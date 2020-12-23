import React from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  // Catch-all routes

  // Useful when you have a bunch of pages with nearly identical layout, but
  // they all need their own URL. E.g., documentation pages.

  // `params` is an array with all the matching routes.
  // notes/1/2/3/4 ---> params = [1, 2, 3, 4]
  const { params } = router.query;
  //console.log(params); // localhost:3000/notes/a/b/c/d ---> ["a", "b", "c", "d"]

  /* If you want to include the parent path in your catch-all route, you can use
  an optional catch-all route.

  docs/[[...params]].jsx

  Just add another set of [ ] over your catch-all, and now /docs will be matched
  with all of its children. Value of parent path would be an empty object.
  */
  return <h1>Note </h1>;
};

export default Page;

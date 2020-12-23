import React from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  // Note: in a function component, the whole function is the render() method.
  const router = useRouter();
  // router.query is an object with any associated params. The param name on the
  // query object is the same name as the param name in the file for that page.

  // router.query.id ---> [id].jsx

  // Destructure to grab a particular param
  const { id } = router.query;
  return <h1>Note {id}</h1>;
};

export default Page;

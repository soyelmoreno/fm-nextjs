/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
//import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NavButton from '../../src/components/NavButton';

const MyPage = () => {
  // Note: in a function component, the whole function is the render() method.
  const router = useRouter();
  // router.query is an object with any associated params. The param name on the
  // query object is the same name as the param name in the file for that page.

  // router.query.id ---> [id].jsx

  // Destructure to grab a particular param
  const { id } = router.query;

  const anotherId = 2;

  return (
    <div>
      <h1>Note {id}</h1>
      <p>
        {/* Need the slash to make this link relative to root. If you did
        href="notes", you would get /notes/notes because this file is within
        the notes directory. */}
        <Link href="/notes">
          <a>Notes index page</a>
        </Link>
      </p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>

      {/* Can route programmatically, for example, if user clicks some button,
      or some other event fires */}
      <button onClick={(e) => router.push('/')}>Go Home</button>

      {/* Tons of other methods on `router`, like 10, e.g. refresh(), replace().
      Mimics HTML5 History API. push() acts like Link, takes two arguments:
      `path` and `as`*/}
      <button onClick={(e) => router.push('/user/[id]', `/user/${anotherId}`)}>
        Dashboard
      </button>
      {/* Again, you need the slash to make this link relative to root. If you
        did router.push('user/[id]'), you would get /notes/user/2 because this
        file is within the notes directory. */}

      {/* Bring in a custom component with an associated CSS module */}
      <NavButton
        onClick={(e) => router.push('/')}
        label="Pink! Go Home"></NavButton>
    </div>
  );
};

const ScottsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>Note: {id} </h1>
    </div>
  );
};

const useMyPage = false;
export default useMyPage ? MyPage : ScottsPage;

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
// import React from 'react'; // Nope, use jsx compiler from theme-ui instead
import Link from 'next/link';

// cannot do this in this file. NextJS will not let you.
// import '../src/styles.css';
// *can* do this because it's a CSS module:
import homepage from '../src/styles.module.css';

// <Link> is smart, can autowrap text content in an <a> tag. But recommended to
// do it explicitly.

const MyPage = () => (
  <div className={`${homepage.bgGreen} ${homepage.redText}`}>
    <h1>Index page</h1>
    {/* Don't need `as` prop for static routes */}
    <Link href="/notes">
      <a className={homepage.wildLink}>Notes</a>
    </Link>
  </div>
);

const ScottsPage = () => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: 'containers.page',
        display: 'flex',
        alignItems: 'center',
        height: '100%'
      }}>
      <h1 sx={{ fontSize: 8, my: 0 }}>
        This is a really dope note taking app.
      </h1>
    </div>
  </div>
);

// When true, we'll use my page with my basic custom styles. When false, use
// Scott Moss's page from the course.
const useMyPage = false;
export default useMyPage ? MyPage : ScottsPage;

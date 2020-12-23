import React from 'react';
import Link from 'next/link';
// cannot do this in this file. NextJS will not let you.
// import '../src/styles.css';
// *can* do this because it's a CSS module:

import homepage from '../src/styles.module.css';

// <Link> is smart, can autowrap text content in an <a> tag. But recommended to
// do it explicitly.

const Page = () => (
  <div className={`${homepage.bgGreen} ${homepage.redText}`}>
    <h1>Index page</h1>
    {/* Don't need `as` prop for static routes */}
    <Link href="/notes">
      <a className={homepage.wildLink}>Notes</a>
    </Link>
  </div>
);

export default Page;

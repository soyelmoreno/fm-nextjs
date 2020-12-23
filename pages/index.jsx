import React from 'react';
import Link from 'next/link';

// <Link> is smart, can autowrap text content in an <a> tag. But recommended to
// do it explicitly.

const Page = () => (
  <div>
    <h1>Index page</h1>
    {/* Don't need `as` prop for static routes */}
    <Link href="/notes">
      <a>Notes</a>
    </Link>
  </div>
);

export default Page;

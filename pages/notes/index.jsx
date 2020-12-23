import React from 'react';
import Link from 'next/link';

const user = { id: '23' };

const notes = new Array(15)
  .fill(1)
  .map((item, i) => ({ id: i, title: `Note ${i}` }));

const Page = () => (
  <div>
    <h1>Notes Index page</h1>
    {/* href doesn't take an actual URL. It takes the path to the page. The `as`
    attribute does take an actual URL. You only need `as` for a dynamic route.
    Here, we use a dynamic route, but we're hard-coding the id */}
    <p>
      <Link href="/notes/[id]" as={`/notes/1`}>
        <a>Note 1</a>
      </Link>
    </p>

    {/* Other examples */}
    <p>
      {/* In this dynamic route, we're passing in the id from a variable */}
      <Link href="/user/[id].js" as={`/user/${user.id}`}>
        <a>user</a>
      </Link>
    </p>

    {/* Map an array of links */}
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Link href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Page;

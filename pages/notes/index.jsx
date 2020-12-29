/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
//import React from 'react';
import Link from 'next/link';

const user = { id: '23' };

const notes = new Array(15)
  .fill(1)
  .map((item, i) => ({ id: i, title: `Link to view note ${i}` }));

const MyPage = () => (
  <div>
    <h1>Notes Index page</h1>
    {/* href doesn't take an actual URL. It takes the path to the page. The `as`
    attribute does take an actual URL. You only need `as` for a dynamic route.
    Here, we use a dynamic route, but we're hard-coding the id */}
    <p>
      <Link href="/notes/[id]" as={`/notes/1`} passHref>
        <a>Note 1</a>
      </Link>
    </p>

    {/* Other examples */}
    <p>
      {/* In this dynamic route, we're passing in the id from a variable */}
      <Link href="/user/[id].js" as={`/user/${user.id}`} passHref>
        <a>user</a>
      </Link>
    </p>

    {/* Map an array of links */}
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Link href="/notes/[id]" as={`/notes/${note.id}`} passHref>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const ScottsPage = () => (
  <div sx={{ variant: 'containers.page' }}>
    <h1>My Notes</h1>

    <div
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
      {notes.map((note) => (
        <div sx={{ width: '33%', p: 2 }} key={note.id}>
          <Link href="/notes/[id]" as={`/notes/${note.id}`} passHref>
            <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
              <div sx={{ variant: 'containers.card' }}>
                <strong>{note.title}</strong>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const useMyPage = false;
export default useMyPage ? MyPage : ScottsPage;

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

const ScottsPage = ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: 'containers.page',
        display: 'flex',
        alignItems: 'center',
        height: '100%'
      }}>
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
    </div>
  </div>
);

// When true, we'll use my page with my basic custom styles. When false, use
// Scott Moss's page from the course.
const useMyPage = false;
export default useMyPage ? MyPage : ScottsPage;

// const IndexPage = () => {// jsx }
// export default IndexPage

/**
 * getStaticProps() goes in the same file as the exported component. But it will
 * only ever run in a NodeJS environment. NextJS will strip it from this file
 * before bundling thgis file for the browser. So, it only helps you obtain
 * something to pass as props at build time.
 */
/*
export async function getStaticProps(context) {
  // Here, do whatever you want to get some data to pass as props to your
  // default exported component. Content from a CMS? Make a call to your CMS,
  // get the info, inject it as props. Or make a fetch call, connect to a
  // database, access the file system, crawl a website, etc.
  return {
    props: {} // <--- this will become props for IndexPage component
  };
  // Note: context object contains params, which is important. In the future it
  // will contain other stuff, too. In a static file, there are no params. And
  // on the server, you won't have access to the params because they haven't
  // happened yet, i.e., there is no browser, and a user has not yet tried to
  // navigate to a URL. So, how do the params get here? getStaticPaths.
}
*/

// Don't need any async here
export function getStaticProps(context) {
  // Simulate getting data from a CMS
  return {
    props: {
      content: {
        title: 'This is my really nice app'
      }
    }
  };
}

/**
 * Now, if we do have a dynamic URL, and we do need the value of params in order
 * to fetch the content for our page inside of getStaticProps, then we'll use
 * getStaticPaths. Similar to getStaticProps, but its responsibility is to fetch
 * all the generated paths for all your unique URLs. Say, a blog, or docs web
 * site. We want to generate all the documentation pages or blog pages ahead of
 * time so that it will be a static site. So, we need to generate them at build
 * time. So how do we know where they are? Need to do a fetch call, or look in a
 * directory with markdown files, or access some JSON file somewhere, to get a
 * list of paths.
 */
/*
export async function getStaticPaths() {
  // Get all the static paths for your posts from an API or file system
  const results = await fetch('/api/posts');
  const posts = await results.json();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  // Must return an object with `paths` property whose value is an array of path
  // objects

  // paths = {}
  // [
  //   {params: {slug: 'get-started-with-node'}},
  //   {params: {slug: 'top-frameworks'}}
  // ]

  return { paths };
  // Once you have this, now {params} is available to getStaticProps()! if you
  // use getStaticPaths, then you have to use getStaticProps. Otherwise, there's
  // no reason to use getStaticPaths. Use them together. But only need
  // getStaticPaths if it is a dynamic URL.
}
*/

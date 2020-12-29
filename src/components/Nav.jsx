/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';

// - We need the jsx pragma at the top to tell the compiler to use the jsx
//   library that we pull out of 'theme-ui'.
// - That's gonna allow us to use the `sx` property in our elements below. sx is
//   similar to inline styles...but it doesn't compile down to inline styles,
//   instead the output is CSS that gets added to the <head> of our HTML
//   document. And it's gonna be scoped just like CSS modules.
// - Then it's gonna add scoped CSS class names to all the elements in the
//   document.
// - Can use shortcuts like 'bg' for background, 'pl' for padding-left.
// - Can also refer to theme variables such as 'primary'.
// - Can use the `css={{}}` prop to use pure CSS, with no theme.
// - Can pull out bunches of rules below and define a new variant in your theme,
//   and then just refer to that variant below.

// Note: If you're using emotion's JSX pragma feature (at jsx jsx), you must use
// passHref on <Link> even if you use an <a> tag directly.
// https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag

const Nav = () => (
  <header
    sx={{
      height: '60px',
      width: '100vw',
      bg: 'primary',
      borderBottom: '1px solid',
      borderColor: 'primary'
    }}>
    <nav
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        variant: 'containers.page',
        height: '100%'
      }}>
      <Link href="/" passHref>
        <a sx={{ fontWeight: 'bold', fontSize: 4, cursor: 'pointer' }}>
          Note App
        </a>
      </Link>

      <Link href="/notes" passHref>
        <a sx={{ color: 'text', fontSize: 3, cursor: 'pointer' }}>notes</a>
      </Link>

      <a
        sx={{
          color: 'text',
          fontSize: 3,
          cursor: 'pointer'
        }}
        href={process.env.HELP_APP_URL}>
        Help
      </a>
    </nav>
  </header>
);

export default Nav;

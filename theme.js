import { roboto } from '@theme-ui/presets';

// Theme object. There's a specific set of properties that should be on here. Go
// look at the spec: https://theme-ui.com/theme-spec

// Can start with an OOTB theme, and then add custom options. Each 'thing' or
// 'component' below (e.g. card, page) is called a "variant". Can add them to
// any component that you want inside your React app. Think of it like:
// ".containers-cars" is a CSS class.

// Can refer to pre-defined values, (e.g. "muted")
const theme = {
  ...roboto,
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto'
    }
  },
  styles: {
    ...roboto.styles
  }
};

// `styles` is for global styles. Will allow us to style things that are global,
// like markdown or mdx...this would apply roboto styles to that.

/*
console.log(JSON.stringify(theme)); // ---> outputs this stuff:

const themeOutput = {
  "space":[0,4,8,16,32,64,128,256,512],
  "fonts":{
    "body":"Roboto, system-ui, sans-serif",
    "heading":"Roboto, system-ui, sans-serif",
    "monospace":"\"Roboto Mono\", monospace"
  },
  "fontSizes":[12,14,16,20,24,32,48,64,96],
  "fontWeights":{"body":400,"heading":600,"bold":600},
  "lineHeights":{"body":1.5,"heading":1.125},
  "colors":{"text":"#202124","background":"#fff","primary":"#1a73e8","secondary":"#9c27b0","muted":"#f1f3f4"},
  "styles":{
    "root":{"fontFamily":"body","lineHeight":"body","fontWeight":"body"},
    "h1":{"color":"text","fontFamily":"heading","lineHeight":"heading","fontWeight":"heading","fontSize":5},
    "h2":{"color":"text","fontFamily":"heading","lineHeight":"heading","fontWeight":"heading","fontSize":4},
    "h3":{"color":"text","fontFamily":"heading","lineHeight":"heading","fontWeight":"heading","fontSize":3},
    "h4":{"color":"text","fontFamily":"heading","lineHeight":"heading","fontWeight":"heading","fontSize":2},
    "h5":{"color":"text","fontFamily":"heading","lineHeight":"heading","fontWeight":"heading","fontSize":1},
    "h6":{"color":"text","fontFamily":"heading","lineHeight":"heading","fontWeight":"heading","fontSize":0},
    "p":{"color":"text","fontFamily":"body","fontWeight":"body","lineHeight":"body"},"a":{"color":"primary"},
    "pre":{"fontFamily":"monospace","overflowX":"auto","code":{"color":"inherit"}},
    "code":{"fontFamily":"monospace","fontSize":"inherit"},
    "table":{"width":"100%","borderCollapse":"separate","borderSpacing":0},
    "th":{"textAlign":"left","borderBottomStyle":"solid"},
    "td":{"textAlign":"left","borderBottomStyle":"solid"},
    "img":{"maxWidth":"100%"}
  },
  "containers":{
    "card":{"boxShadow":"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)","border":"1px solid","borderColor":"muted","borderRadius":"4px","p":2},
    "page":{"width":"100%","maxWidth":"960px","m":0,"mx":"auto"}
  }
};
*/

export default theme;

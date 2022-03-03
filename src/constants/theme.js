import React from 'react'
import { createGlobalStyle } from 'styled-components'

const light = {
  navbar: "#fff",
  white: "#fff",
  background: "#f2f2f2",
  green: "#59bb65",
  red: "#e64a33",
  darkGray: "#777",
  gray: "#ccc",
  lightGray: "#eee",
  text: "#222",
  heading: "#222",
  muted: "#6c757d",
}

const dark = {
  navbar: "#111",
  white: "#111",
  background: "#222",
  green: "#59bb65",
  red: "#e64a33",
  darkGray: "#bbb",
  gray: "#999",
  lightGray: "#555",
  text: "#fff",
  heading: "#fff",
  muted: "#999",
}

const theme = (mode) => ({
  colors: mode === 'dark' ? dark : light,
  sizes: {
    card: {
      radius: 20,
    },
    button: {
      radius: 10,
    },
  }
})

export const ThemeContext = React.createContext({});

export const GlobalStyle = createGlobalStyle`
  @media (min-width: 992px) {
    .container, .container-lg, .container-md, .container-sm {
      max-width: 800px;
    }
  }

  @media (min-width: 1200px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 900px;
    }
  }

  * {
    transition: 0.3s all;
  }

  body {
    background-color: ${p => p.theme.colors.background};
    padding-bottom: 100px;
  }

  .text-muted {
    color: ${p => p.theme.colors.muted} !important;
  } 
`


export default theme;
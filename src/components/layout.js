/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header.jsx"
import { ThemeDark } from "../Themes/ThemeDark.js"
import { ThemeLight } from "../Themes/ThemeWhite.js"
import '../styles/style.scss';
import { ThemeContext } from "./contexts/ThemeContext.js"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [theme, setTheme] = useState(ThemeDark)

  function changeTheme() {
    if(theme === ThemeLight) {
      setTheme(ThemeDark)
    }
    else if(theme === ThemeDark) {
      setTheme(ThemeLight)
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Header changeTheme={changeTheme} siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
    </ThemeContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
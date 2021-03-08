import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const LogosSkills = ({nameImage}) => {
  const data = useStaticQuery(graphql`
    query {
      bootstrap: file(relativePath: { eq: "bootstrap.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      css: file(relativePath: { eq: "css.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gatsby: file(relativePath: { eq: "gatsby.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      html: file(relativePath: { eq: "html.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      illustrator: file(relativePath: { eq: "illustrator.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      js: file(relativePath: { eq: "js.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mysql: file(relativePath: { eq: "mysql.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photoshop: file(relativePath: { eq: "photoshop.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      php: file(relativePath: { eq: "php.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plus: file(relativePath: { eq: "plus.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      profile: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      react: file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sass: file(relativePath: { eq: "sass.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      symfony: file(relativePath: { eq: "symfony.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
    }
  `)

  switch (nameImage) {
    case 'bootstrap':
      return <Img fluid={data.bootstrap.childImageSharp.fluid} />;
    case 'css':
      return <Img fluid={data.css.childImageSharp.fluid} />;
    case 'gatsby':
      return <Img fluid={data.gatsby.childImageSharp.fluid} />;
    case 'html':
      return <Img fluid={data.html.childImageSharp.fluid} />;
    case 'illustrator':
      return <Img fluid={data.illustrator.childImageSharp.fluid} />;
    case 'js':
      return <Img fluid={data.js.childImageSharp.fluid} />;
    case 'mysql':
      return <Img fluid={data.mysql.childImageSharp.fluid} />;
    case 'photoshop':
      return <Img fluid={data.photoshop.childImageSharp.fluid} />;
    case 'php':
      return <Img fluid={data.php.childImageSharp.fluid} />;
    case 'profile':
      return <Img fluid={data.profile.childImageSharp.fluid} />;
    case 'react':
      return <Img fluid={data.react.childImageSharp.fluid} />;
    case 'sass':
      return <Img fluid={data.sass.childImageSharp.fluid} />;
    case 'symfony':
      return <Img fluid={data.symfony.childImageSharp.fluid} />;
    default:
      break;
  }
}

export default LogosSkills

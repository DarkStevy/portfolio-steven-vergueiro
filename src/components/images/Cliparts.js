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

const Cliparts = ({nameImage}) => {
  const data = useStaticQuery(graphql`
    query {
      clipartSimracesetup: file(relativePath: { eq: "clipartSimracesetup.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  switch (nameImage) {
      case 'clipartSimracesetup':
        return <Img fluid={data.clipartSimracesetup.childImageSharp.fluid} />;
      default:
        return <Img />
  }
}

export default Cliparts

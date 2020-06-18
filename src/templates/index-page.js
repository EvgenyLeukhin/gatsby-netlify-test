import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'


export const IndexPageTemplate = ({
  // top
  topBlockimage, topBlocksubheading, topBlocktitle,


}) => (
  <div className="kartina-mira__index">
    <section
      className="top-block full-width-image"
      style={{
        backgroundImage: `url(${
          !!topBlockimage.childImageSharp ? topBlockimage.childImageSharp.fluid.src : topBlockimage
        })`
      }}
    >
      <div className="top-block__titles">
        <h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
          {topBlocksubheading}
        </h3>

        <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
          {topBlocktitle}
        </h1>
      </div>

      <a className="top-block__details" href="#">Подробнее</a>
    </section>

    <section className="promo-block">
      <h1>Promo block</h1>

    </section>

 
  </div>
)

IndexPageTemplate.propTypes = {
  // top
  topBlockimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  topBlocksubheading: PropTypes.string,
  topBlocktitle: PropTypes.string,

}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { 
    // top
    topBlockimage, 
    topBlocksubheading, 
    topBlocktitle,

    // promo

  } = frontmatter;

  return (
    <Layout>
      <IndexPageTemplate
        // top
        topBlockimage={topBlockimage} 
        topBlocksubheading={topBlocksubheading} 
        topBlocktitle={topBlocktitle}

        // promo
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        topBlockimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        topBlocksubheading
        topBlocktitle
      }
    }
  }
`

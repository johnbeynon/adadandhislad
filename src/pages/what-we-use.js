import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const WhatWeUse = ({ data: { whatweuse } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={whatweuse.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{whatweuse.title}</h1>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: whatweuse.contentNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default WhatWeUse

export const query = graphql`
  query WhatWeUseQuery {
    whatweuse: datoCmsWhatWeUsePage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      contentNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

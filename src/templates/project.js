import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import Helmet from 'react-helmet'

export const ProjectTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const ProjectContent = contentComponent || Content
  return (
    <section className="section">
      {helmet ? helmet : ''}
      <div className="container content">
        <h1 className="has-text-weight-bold is-size-2">{title}</h1>
        <div className="columns">
          <div className="column">
            <p>{description}</p>
            <ProjectContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <ProjectTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`Project | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
    />
  )
}

export const projectQuery = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`

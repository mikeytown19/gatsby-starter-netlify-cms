import React from 'react'
import Hex from '../components/Hex'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'

export const ProjectPageTemplate = ({
  image,
  title,
  description,
  intro,
  main,
  testimonials,
}) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="content">
          <h1 className="has-text-weight-bold is-size-2">{title}</h1>
        </div>
        <div className="content">
          <Hex gridItems={intro.goodies} />
        </div>
      </div>
    </section>
  )
}

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <ProjectPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      testimonials={frontmatter.testimonials}
    />
  )
}

export const projectPageQuery = graphql`
  query ProjectPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
        image
        description
        intro {
          goodies {
            image
            path
          }
          heading
          description
        }
      }
    }
  }
`

import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Script from 'react-load-script'
import Group from '../components/Group';

export const HomePageTemplate = ({
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
          <Group gridItems={intro.goodies} />
        </div>
      </div>
    </section>
  )
}

export default class IndexPage extends Component {
  constructor(props) {
    super(props);

  }
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
    window.netlifyIdentity.init()
  }

  render() {
    const { frontmatter } = this.props.data.markdownRemark;
    console.log(frontmatter)
    return (
      <section className="section">
       <div className="container content">
        <div className="columns">
          <div className="column">
            <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
              Some of my Latest Work
            </h2>
            <HomePageTemplate
              image={frontmatter.image}
              title={frontmatter.title}
              description={frontmatter.description}
              intro={frontmatter.intro}
            />
            {/* <p>{description}</p> */}
          </div>
        </div>
      </div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <div className="container" />
      </section>
    )
  }
}


export const homePageQuery = graphql`
query HomePage {
  markdownRemark(frontmatter: { path: { eq: "/projects" } }) {
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

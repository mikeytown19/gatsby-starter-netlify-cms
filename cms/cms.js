import React from 'react'
import CMS from 'netlify-cms'

import Projects from 'site/components/Projects'
import Testimonials from 'site/components/Testimonials'
import Pricing from 'site/components/Pricing'

import { AboutPageTemplate } from 'site/templates/about-page'
import { ProjectPageTemplate } from 'site/templates/projects-page'
import { BlogPostTemplate } from 'site/templates/blog-post'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

const ProjectPagePreview = ({ entry, widgetFor, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'goodies'])
  const goodies = entryBlurbs ? entryBlurbs.toJS() : []

  // const entryTestimonials = entry.getIn(['data', 'testimonials'])
  // const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  // const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  // const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <ProjectPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      // heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ goodies }}
      main={{
        heading: entry.getIn(['data', 'main', 'heading']),
        description: entry.getIn(['data', 'main', 'description']),
        image1: {
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main', 'image1', 'alt']),
        },
        image2: {
          image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
          alt: entry.getIn(['data', 'main', 'image2', 'alt']),
        },
        image3: {
          image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
          alt: entry.getIn(['data', 'main', 'image3', 'alt']),
        },
      }}
      // fullImage={entry.getIn(['data', 'full_image'])}
      // testimonials={testimonials}
      // pricing={{
      //   heading: entry.getIn(['data', 'pricing', 'heading']),
      //   description: entry.getIn(['data', 'pricing', 'description']),
      //   plans: pricingPlans,
      // }}
    />
  )
}

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('bio', AboutPagePreview)
CMS.registerPreviewTemplate('projects', ProjectPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

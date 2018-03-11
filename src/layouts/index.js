import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import mail from '../img/mail.svg'
import twitter from '../img/twitter.svg'
import linkedin from '../img/linkedin.svg'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import './all.sass'

const Navbar = () => (
  <nav className="navbar is-transparent is-fixed-top has-shadow">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img
              src={logo}
              alt="tcasey"
              style={{ width: '88px', maxHeight: '3rem' }}
            />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/bio">
          bio
        </Link>
        <Link className="navbar-item" to="/projects">
          projects
        </Link>
        <Link className="navbar-item" to="/blog">
          blog
        </Link>
      </div>
    </div>
  </nav>
)

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="columns flex-center">
        <a className="column" href="mailto:hello@tcasey.me">
          <figure className="flex-center">
            <img src={mail} alt="email" style={{ width: '32px' }} />
          </figure>
        </a>
        <a className="column" href="https://twitter.com/_tcasey_">
          <figure className="flex-center">
            <img src={twitter} alt="twitter" style={{ width: '32px' }} />
          </figure>
        </a>
        <a className="column" href="https://www.linkedin.com/in/trevorkc">
          <figure className="flex-center">
            <img src={linkedin} alt="linkedIn" style={{ width: '32px' }} />
          </figure>
        </a>
        <a className="column" href="https://github.com/tcasey">
          <figure className="flex-center">
            <img src={github} alt="github" style={{ width: '32px' }} />
          </figure>
        </a>
      </div>
    </div>
  </footer>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Trevor Casey | JavaScript Developer" />
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

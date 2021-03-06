import React from 'react'
import Link from 'gatsby-link'

const ProjectGrid = ({ gridItems }) => (
  <ul className="hex-grid">
    {gridItems.map(item => (
      <li className="hex">
        {/* individual hexagon 'items' */}
        <div className="hex-in">
          <Link to={item.path}>
            <div className="hex-content">
              <img src={item.image} />
            </div>
          </Link>
        </div>
      </li>
    ))}
  </ul>
)

export default ProjectGrid

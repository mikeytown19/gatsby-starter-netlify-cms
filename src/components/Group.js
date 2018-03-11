import React from 'react'
import Link from 'gatsby-link'

const Group = ({ gridItems }) => (
  <ul className="hex-grid">
    {gridItems
      .filter((i, index) => (index < 3))
      .map(item => (
      <li className="hex" key={item.path}>
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

export default Group

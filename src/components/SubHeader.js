import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

const sectionstyle={
  padding: "5%",
  position: "relative",
  left: "31%",
}

const SubHeader = (props) => {
  
  return (
    <section className="section" style={sectionstyle}>
      <ul className="filters">

        {Object.keys(FILTER_TITLES).map(filter =>
          <li key={filter}>
            <FilterLink filter={filter}>
              {FILTER_TITLES[filter]}
            </FilterLink>
          </li>
        )}
      </ul>
     
    </section>
  )
}

SubHeader.propTypes = {
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
}

export default SubHeader

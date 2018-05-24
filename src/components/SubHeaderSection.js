import React from 'react'
import PropTypes from 'prop-types'
import SubHeader from './SubHeader'
// import VisibleTodoList from '../containers/VisibleTodoList'

const SubHeaderSection = ({ todosCount, completedCount, actions }) =>
  (
    <section className="main">
      {
        !!todosCount &&
         <SubHeader
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={actions.clearCompleted}
        />
      }
    </section>
  )

SubHeaderSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

export default SubHeaderSection;
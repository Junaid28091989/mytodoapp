import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import MainSection from './MainSection'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const setup = propOverrides => {
  const props = Object.assign({
    todosCount: 2,
    completedCount: 1,
    actions: {
      editTodo: jest.fn(),
      deleteTodo: jest.fn(),
      completeTodo: jest.fn(),
      completeAllTodos: jest.fn(),
      clearCompleted: jest.fn()
    }
  }, propOverrides)

  const renderer = createRenderer()
  renderer.render(<MainSection {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('MainSection', () => {
    it('should render container', () => {
      const { output } = setup()
      expect(output.type).toBe('section')
      expect(output.props.className).toBe('main')
    })

    

    describe('footer', () => {
      it('should render', () => {
        const { output } = setup()
        const [ , footer ] = output.props.children
        expect(footer.type).toBe(Footer)
        expect(footer.props.completedCount).toBe(1)
        expect(footer.props.activeCount).toBe(1)
      })

    })

    describe('visible todo list', () => {
      it('should render', () => {
        const { output } = setup()
        const [visibleTodoList ] = output.props.children
        expect(visibleTodoList.type).toBe(VisibleTodoList)
      })
    })

    describe('toggle all input and footer', () => {
      it('should not render if there are no todos', () => {
        const { output } = setup({
          todosCount: 0,
          completedCount: 0
        })
        const renderedChildren = output.props.children
        .filter((item) => item !== false)
        expect(renderedChildren.length).toBe(1)
        expect(renderedChildren[0].type).toBe(VisibleTodoList)
      })
    })
  })
})

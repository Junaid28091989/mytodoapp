import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {btnstyle} from'../style/styles'


export default class TodoTextInput extends Component {
  
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
      text: this.props.text || ''
    };

  constructor(props){
    super(props);
    // console.log("myprops", this.props);
    this.handleSubmititem=this.handleSubmititem.bind(this);
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleSubmititem(){
    const text = this.state.text.trim()
    //console.log("hello------",this.props,"-------", this.state.text);
    this.props.onSave(text)
    if (this.props.newTodo) {
        this.setState({ text: '' })
    }
  } 

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    
    //console.log("this.props.placeholder --=", this.state.text,"=--> ", this.props.placeholder, );

    return (
      <section>
      <input
        style={{width:"70%"}}
        className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        />

        <input
         type="submit"
         style={btnstyle}
         onClick={this.handleSubmititem}
          />
      </section>  
    )
  }
}

import React, { Component } from 'react';

class CreateThought extends Component {
  constructor( props ){
    super( props )
    this.state = {
      title: '',
      body: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name] : value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createThought(this.state)
    this.setState({ title: '', body: '' })
  }
  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <input 
          onChange={ this.handleChange } 
          placeholder='title' 
          name='title' 
          value={ this.state.title }/>
        <input 
          onChange={ this.handleChange } 
          placeholder='body' 
          name='body' 
          value={ this.state.body }/>
        <button>enter</button>
      </form>
    );
  }
}

export default CreateThought

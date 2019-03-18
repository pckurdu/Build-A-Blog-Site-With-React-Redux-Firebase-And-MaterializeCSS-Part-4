import React, { Component } from 'react'
//connect
import { connect } from 'react-redux'
//action
import { createProject } from '../../store/actions/projectActions'

class CreateProject extends Component {
  //We keep the title and contetn fields of the project.
  state = {
    title: '',
    content: ''
  }

  //will be triggered when the inputs change.
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
}
//It will work when the form is submitted.
handleSubmit = (e) => {
  e.preventDefault();
  //console.log(this.state);
  //state transferred in action.
  this.props.createProject(this.state);
}
 
  render() {
    return (
      <div className="container">
        <form className="white"  onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

//We create a function by accessing the action.
const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)

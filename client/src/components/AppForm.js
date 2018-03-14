import React from 'react';
import { connect } from 'react-redux';
import { addApp } from '../actions/apps';
import { Form } from 'semantic-ui-react';

class AppForm extends React.Component {
  initialState = {
    name: '',
    description: '',
    category: '',
    price: '',
    version: '',
    author: '',
  }

  state = {...initialState}

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const app = {...this.state}
    const { dispatch, closeForm } = this.props;
    dispatch(addApp(app))
    closeForm();
  }

  render() {
    const { name, description, category, version, price, author } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          required
          value={name}
          onChange={this.handleChange}
          label="Name"
        />
        <Form.Input
          name="description"
          value={description}
          onChange={this.handleChange}
          label="Description"
        />
        <Form.Input
          name="category"
          value={category}
          onChange={this.handleChange}
          label="Category"
        />
        <Form.Input
          name="version"
          value={version}
          onChange={this.handleChange}
          label="Version"
        />
        <Form.Input
          name="price"
          value={price}
          type="number"
          min="0"
          onChange={this.handleChange}
          label="Price"
        />
        <Form.Input
          name="author"
          value={author}
          onChange={this.handleChange}
          label="Author"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(AppForm);

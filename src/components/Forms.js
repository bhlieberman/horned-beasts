import React from 'react';
import Form from 'react-bootstrap/Form';

export class SearchForm extends React.Component {
    render() {
      return (
        <Form
          onChange={(e) => {
            e.preventDefault();
            this.props.fuzzySearch(e.target.value);
          }}
        >
          <Form.Control type="text" placeholder="Search" />
          <Form.Text className="text-muted"></Form.Text>
        </Form>
      );
    }
  }

export class Dropdown extends React.Component {
    render() {
        return(<Form>
            <Form.Control type="select" placeholder="Number of horns" />
        </Form>)
    }
}
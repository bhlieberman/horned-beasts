import React from "react";
import Form from "react-bootstrap/Form";

export class SearchForm extends React.Component {
  render() {
    return (
      <Form
        onChange={(e) => {
          e.preventDefault();
          this.props.fuzzySearch(e.target.value);
        }}
      >
        <Form.Control type="text" placeholder="Name" />
        <Form.Text className="text-muted"></Form.Text>
      </Form>
    );
  }
}

export class Dropdown extends React.Component {
  render() {
    return (
      <Form>
        <Form.Select onChange={(e) => {
          let num = parseInt(e.target.value);
          this.props.filterByHorns(num);
        }}>
          <option>Number of horns</option>
          <option>1</option>
          <option>2</option>
          <option>2+</option>
        </Form.Select>
      </Form>
    );
  }
}

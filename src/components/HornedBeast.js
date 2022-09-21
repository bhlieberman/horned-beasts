import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: "",
    };
  }
  render() {
    return (
      <Card bg="light" text="dark" style={{ width: "18rem" }} className="container mx-auto my-5">
        <Card.Img src={this.props.imageUrl} className="p-2"></Card.Img>
        <Card.Body>
        <Card.Title className="h5 text-primary">{this.props.title}</Card.Title>
        <Card.Text className="text-muted fst-italic">{this.props.description}</Card.Text>
        <Button
          onClick={() =>{
            this.props.select();
            this.setState((prevState) => ({
              likes: prevState.likes.concat("❤️"),
              selected: !prevState.selected
            }));
            console.log(this.state.selected)}
          }
        >
          Click to like
        </Button>
        <Card.Text>{this.state.likes}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;

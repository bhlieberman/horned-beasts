import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: "",
      description: this.props.description,
      src: this.props.imageUrl
    };
  }
  handleClick() {
    this.props.setShowModal(this.props.id);
  }
  render() {
    return (
      <Card
        bg="light"
        text="dark"
        style={{ width: "18rem" }}
        className="container mx-auto my-5"
        onClick={() => this.handleClick()}
      >
        <Card.Img src={this.state.src} className="p-2"></Card.Img>
        <Card.Body>
          <Card.Title className="h5 text-primary">
            {this.props.title}
          </Card.Title>
          <Card.Text className="text-muted fst-italic">
            {this.state.description}
          </Card.Text>
          <Button
            onClick={() => {
              this.setState((prevState) => ({
                likes: prevState.likes.concat("❤️"),
              }));
            }}
          >
            Click to like
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;

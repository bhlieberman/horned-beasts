import React from "react";
import HornedBeast from "./HornedBeast.js";
import animals from './animals.json';

class Main extends React.Component {
  render() {
    return (
      <>
      {animals.animals.map((animal, index) => {
        return <HornedBeast
            title={animal.title}
            imageUrl={animal.image_url}
            description={animal.description}
            key={index}
          />
      })}
      </>
    );
  }
}

export default Main;

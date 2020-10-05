import React from "react";

class ImageCard extends React.Component {
  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img alt={description} src={urls.regular} key={this.props.id} />
      </div>
    );
  }
}

export default ImageCard;

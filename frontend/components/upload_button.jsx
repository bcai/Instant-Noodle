var React = require('react');

module.exports = React.createClass({
  upload: function(event){
    event.preventDefault();

    cloudinary.openUploadWidget(
      window.cloudinary_options, 
      function(error, images){
        if (error == null) {
          this.props.addImage(images[0].url);
        }
    }.bind(this));
  },

  render: function() {
    return (
      <button onClick={this.upload}>Upload Image</button>
    );
  }

});
var React = require('react');

module.exports = React.createClass({
  upload: function(event){
    event.preventDefault();

    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images){
        if (error == null) {
          var fullUrl = images[0].thumbnail_url;
          this.props.addImage(fullUrl);
        }
    }.bind(this));
  },

  render: function() {
    return (
      <button onClick={this.upload}>Upload Image</button>
    );
  }

});
var React = require('react');

module.exports = React.createClass({
  upload: function(event){
    event.preventDefault();

    cloudinary.openUploadWidget(
      window.cloudinary_options, 
      function(error, images){
        if (error == null) {
          var fullUrl = images[0].secure_url;
          var urlPath = ("f_auto/" + images[0].public_id + "." + images[0].format);
          fullUrl = fullUrl.replace(images[0].path, urlPath);
          debugger
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
var React = require('react');

var Progress = React.createClass({
  render: function() {
    return (
      <div className="progress">
        <div style={{width: this.props.progress + '%'}} className="progress-bar progress-bar active" id='progress' role="progressbar" aria-valuenow="-1" aria-valuemin="0" aria-valuemax="100" ></div>
      </div>
    );
  }
});

module.exports = Progress;
var React = require('react/addons');

var Answer = React.createClass({
  answer: function(answer) {
    this.refs.answer.getDOMNode().blur();
  	this.props.answerQuestion(answer.toString());
  },

  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'btn': true,
      'btn-default': true,
      'answers': true,
      'btn-success': this.props.isChosen
    });

    return (
      <input type='button' className={classes}
        value={this.props.answer} ref='answer'
      	onClick={this.answer.bind(null, this.props.num)}/>
    );
  }
});

module.exports = Answer;
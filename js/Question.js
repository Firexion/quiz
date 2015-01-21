var React = require('react');
var Answer = require('./Answer.js');

var Question = React.createClass({
  answer: function(answer) {
  	this.props.answerQuestion(answer);
  },

  render: function() {
    var self = this;
    var answerNodes = [0, 1, 2, 3].map(function (num) {
      return (
        <Answer 
          num={num}
          answer={self.props.question.choices[num]} 
          isChosen={self.props.highlight === num.toString()}
          answerQuestion={self.answer}/>
      );
    });

    return (
      <div className="question">
        <h3 id='question'>{this.props.question.question}</h3>
        <form className="questionForm">
	         {answerNodes}
      	</form>
      </div>
    );
  }
});

module.exports = Question;
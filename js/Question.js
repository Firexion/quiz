var React = require('react');

var Question = React.createClass({
  answer: function(answer) {
  	this.props.answerQuestion(answer);
  },

  render: function() {
    return (
      <div className="question">
        <h3 id='question'>{this.props.question.question}</h3>
        <form className="questionForm">
	      <input type='button' className='btn btn-default answers' id='answer-0' 
	      	value={this.props.question.choices[0]} onClick={this.answer.bind(null, '0')}/>
	      <input type='button' className='btn btn-default answers' id='answer-1' 
	      	value={this.props.question.choices[1]} onClick={this.answer.bind(null, '1')}/>
	      <input type='button' className='btn btn-default answers' id='answer-2' 
	      	value={this.props.question.choices[2]} onClick={this.answer.bind(null, '2')}/>
	      <input type='button' className='btn btn-default answers' id='answer-3' 
	      	value={this.props.question.choices[3]} onClick={this.answer.bind(null, '3')}/>
      	</form>
      </div>
    );
  }
});

module.exports = Question;
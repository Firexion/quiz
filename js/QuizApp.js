var React = require('react');
var Question = require('./Question.js');
var Progress = require('./Progress.js');

    
var QuizApp = React.createClass({
  getInitialState: function(questions) {
    return {
      finished: false,
      progress: 0,
      numCorrect: 0,
      answers: [],
      displayPrevious: 'none',
      questionNum: 0,
      questions: [
      {
        question: "Who is Prime Minister of the United Kingdom?", 
        choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
        correctAnswer:"0"
      },
      {
        question: "What is the name of Atticus's hound?", 
        choices: ["Meara", "Kai", "Oberron", "Morrigan"], 
        correctAnswer:"2"
      },
      {
        question: "What is the name of Dresden's dog?", 
        choices: ["Harry", "Kai", "Oberron", "Mouse"], 
        correctAnswer:"3"
      },
      {
        question: "What is the name of Atticus's mentor?", 
        choices: ["Meara", "Owen", "Oberron", "Morrigan"], 
        correctAnswer:"1"
      }]
    };
  },

  answerQuestion: function(answer) {

    var progress = (this.state.questionNum + 1) / this.state.questions.length * 100;
    var answers = this.state.answers;
    var numCorrect = this.state.numCorrect;    
    var questionNum = this.state.questionNum + 1;
    var finished = this.state.finished;

    answers[this.state.questionNum] = answer;

    if (answer === this.state.questions[this.state.questionNum].correctAnswer) {
      numCorrect++;
    }

    if (questionNum === this.state.questions.length) {
      finished = true;
    } 

    this.setState({
      finished: finished,
      progress: progress, 
      numCorrect: numCorrect, 
      answers: answers, 
      displayPrevious: '', 
      questionNum: questionNum
    });
  },

  previous: function() {
    var progress = (this.state.questionNum - 1) / this.state.questions.length * 100;
    var numCorrect = this.state.numCorrect;    
    var questionNum = this.state.questionNum - 1;
    var displayPrevious = this.state.displayPrevious;

    // rollback numCorrect if the answer was correct
    if (this.state.answers[questionNum] === this.state.questions[questionNum].correctAnswer) {
      numCorrect--;
    }

    // if returning to first question, remove Previous button
    if (questionNum === 0) {
      displayPrevious = 'none';
    } else {
      this.refs.back.getDOMNode().blur();
    }

    this.setState({
      progress: progress,
      numCorrect: numCorrect,
      questionNum: questionNum,
      displayPrevious: displayPrevious
    });
  },

  render: function() {

    if (this.state.finished) {
      return (
        <div className="QuizApp">
          <h1 id='question-title'>Results</h1>
          <Progress progress={this.state.progress}/>
          <h3>Score: {this.state.numCorrect / this.state.questions.length * 100}%</h3>
        </div>
      );
    } else {
      return (
        <div className="QuizApp">
          <h1 id='question-title'>Question {this.state.questionNum + 1}</h1>
          <Progress progress={this.state.progress}/>
          <Question 
            highlight={this.state.answers[this.state.questionNum]}
            question={this.state.questions[this.state.questionNum]}
            answerQuestion={this.answerQuestion}/>
          <button 
            style={{display: this.state.displayPrevious}}
            type='button'
            className='btn btn-warning'
            id='back'
            ref='back'
            onClick={this.previous}>
            Return to Previous Question
          </button>
        </div>
      );
    }
    
  }
});
  

React.render(
  <QuizApp />,
  document.getElementById('content')
);
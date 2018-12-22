import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Answer extends React.Component {
  render() {
    return (
      <div className="answer-wrapper">
        <input
          type="radio"
          name="answer"
          id={this.props.answerId}
          className="answer"
          answer={this.props.answer}
        />
        <label id={this.props.answerId} for={this.props.answerId}>
          {this.props.answer}
        </label>
      </div>
    );
  }
}

export default Answer;

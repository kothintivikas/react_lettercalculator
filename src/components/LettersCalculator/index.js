// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {word: ''}

  LetterCount = each => {
    this.setState({word: each.target.value})
  }

  render() {
    const {word} = this.state

    return (
      <div className="app-container">
        <div className="list-container">
          <h1 className="heading">
            Calculate the <br /> Letters you <br /> enter
          </h1>
          <label htmlFor="letter" className="label">
            Enter the phrase:
          </label>
          <input
            type="search"
            placeholder="Enter the phrase"
            className="search-input"
            onChange={this.LetterCount}
            id="letter"
          />
          <p className="wordCounter">No.of letters: {word.length}</p>
        </div>
        <div className="word-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

// Write your code here
import {Component} from 'react'

import './index.css'

const heads = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tails = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, tossResults: heads}

  onChangeButton = () => {
    const {headsCount, tailsCount} = this.state

    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = headsCount
    let latestTailsCount = tailsCount

    if (tossResult === 0) {
      tossImage = heads
      latestHeadCount += 1
    } else {
      tossImage = tails
      latestTailsCount += 1
    }
    this.setState({
      tossResults: tossImage,
      headsCount: latestHeadCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {headsCount, tailsCount, tossResults} = this.state

    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResults} alt="toss result" className="image" />
          <button
            type="button"
            className="toss-coin-btn"
            onClick={this.onChangeButton}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total">Total:{headsCount + tailsCount}</p>
            <p className="heads">Heads:{headsCount}</p>
            <p className="tails">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: true}

  onClickButton = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  changeText = () => {
    const {isLightMode} = this.state

    return isLightMode ? 'Light Mode' : 'Dark Mode'
  }

  changeColor = () => {
    const {isLightMode} = this.state

    return isLightMode ? 'light-mode' : 'dark-mode'
  }

  render() {
    const buttonText = this.changeText()

    const cardClass = this.changeColor()

    return (
      <div className="bg-container">
        <div className={cardClass}>
          <h1 className="heading">Click to Change Mode</h1>
          <button onClick={this.onClickButton} type="button" className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

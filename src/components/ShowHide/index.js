import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {fName: false, lName: false}

  first = () => {
    this.setState(prevState => ({fName: !prevState.fName}))
  }

  last = () => {
    this.setState(prevState => ({lName: !prevState.lName}))
  }

  render() {
    const {fName, lName} = this.state

    return (
      <div className="c1">
        <h1 className="h1">Show/Hide</h1>
        <div className="c2">
          <div>
            <button type="button" onClick={this.first} className="b1">
              Show/Hide Firstname
            </button>
            {fName && (
              <div className="c3">
                <p>Joe</p>
              </div>
            )}
          </div>
          <div>
            <button type="button" onClick={this.last} className="b1">
              Show/Hide Lastname
            </button>
            {lName && (
              <div className="c3">
                <p>Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide

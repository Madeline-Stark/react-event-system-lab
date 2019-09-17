// Code EyesOnMe Component Here
import React, {Component} from 'react'

export default class EyesOnMe extends Component {

handleFocus = () => {
  console.log('Good!')
  //clicking on button triggers this
}

handleBlur = () => {
  console.log('Hey! Eyes on me!')
  //clicking anywhere else triggers this
}
  render() {
    return (
      <button
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      />
    )
  }
}

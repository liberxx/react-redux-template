import React, { PropTypes, Component } from 'react'

export default class Page extends Component {

  onAddBtnClick() {
    let inputValue = this.textInput.value;
    inputValue != '' ?
    this.props.addText([...this.props.text,
                        inputValue]) : alert('empty string not allowed');
    inputValue = '';
  }

  render() {
    return <div className='page'>
      <input className='input' type="text" ref={(input) => { this.textInput = input; }} />
      <p>
        <button className='btn' onClick={::this.onAddBtnClick}>ADD</button>
      </p>
      <ul>
        {this.props.text.map((element, index) =>
          <li key={index}>{element}</li>
        )}
      </ul>
    </div>
  }
}

Page.propTypes = {
  addText: PropTypes.func.isRequired
}

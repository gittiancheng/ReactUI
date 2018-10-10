import React, { Component } from 'react';
import PropTypes from 'prop-types';

//template data
const template =
[
    {
    button: true,
    show: true,
    className: 'alert alert-info',
    icon: 'fa fa-info-circle',
    message: 'your message here!',
    type: 'info'
  },
    {
    button: true,
    show: true,
    className: 'alert alert-info',
    icon: 'fa fa-info-circle',
    message: 'This is an information box!',
    type: 'info'
  },
    {
    button: true,
    show: true,
    className: 'alert alert-danger',
    icon: 'fa fa-window-close',
    message: 'DANGER GO BACK NOW!',
    type: 'danger'
  },
    {
    button: true,
    show: true,
    className: 'alert alert-warning',
    icon: 'fa fa-warning',
    message: 'beware there might be trouble ahead!',
    type: 'warning'
  },
    {
    button: false,
    show: true,
    className: 'alert alert-success',
    icon: 'fa fa-check-square',
    message: 'success you are clear to go!',
    type: 'success'
  }
  ];

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: this.props.button,
      show: this.props.show,
      className: this.props.className,
      icon: this.props.icon,
      message: this.props.message,
      type: this.props.type,
    };

    this.showMessage = this.showMessage.bind(this);
    this.toggleMessage = this.toggleMessage.bind(this);
    this.onClick = this.clicked.bind(this);
  }

  showMessage(e) {
    ++num;
    if (num >= template.length) { num = 0; }
    console.log(num);
    console.log(template[num]);
    let stateToSet = template[num];
    this.setState(stateToSet);
  }

  toggleMessage(e) {
    console.log('hide button!');
    let stateToSet = {show : !this.state.show};
    this.setState(stateToSet);
  }

  clicked(e) {
    console.log('clicked me!');
    let stateToSet = { show: !this.state.show };
    this.setState(stateToSet);
  }

  render() {
    return (
      <div >
        {this.state.show === true &&
          <div
              onClick={this.onClick}
              className={this.state.className}>
            <i className={this.state.icon} /> <strong> {this.state.type}!</strong> {this.state.message}
          </div>}
        {this.state.button === true &&
          <button onClick={this.showMessage}>show next message</button>}
        {this.state.button === true &&
         <button onClick={this.toggleMessage}>{this.state.show === true ? 'hide' : 'show'}</button>
        }
      </div>
    );
  }
}

//default props
MessageBox.propTypes = {
  button: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.string,
  message: PropTypes.string,
  show: PropTypes.bool,
  type: PropTypes.string
};

//random template loader
let num = Math.floor(Math.random() * 4.99);
let loadTemplate = template[num];
console.log(loadTemplate);

//MessageBox.defaultProps = { loadTemplate };
MessageBox.defaultProps = {
  button: loadTemplate.button,
  show: loadTemplate.show,
  className: loadTemplate.className,
  icon: loadTemplate.icon,
  message: loadTemplate.message,
  type: loadTemplate.type
};
console.log(MessageBox.defaultProps);

export default MessageBox;

import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react'

class Formulier extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secret: this.props.secret || '',
      email: {
        show: this.props.showEmail === false ? false : true,
        required: this.props.requiredEmail || true,
        value: '',
      },
      header: {
        headTitle: this.props.headTitle || 'Algemene gegevens',
        discription: this.props.discription ||
          "Vul uw gegevens in. Deze gegevens gebruikt de gemeente uitsluited voor de meting van de belevingskwaliteit. Uw gegevens worden niet aan derden versterkt",
      },
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleSubmit(event) {
    //this.setState({ email: { value: 'revealed' }});
    alert('A name was submitted: ' + this.state.email.value);
    event.preventDefault();
  }

  handleChange(event) {
    //make a copy of the object
    let newState = Object.assign({}, this.state.email);
    newState.value = event.target.value;
    
    this.setState({ email: newState });
  }

 
  render() {
    return (
      <section className="animated fadeIn container-registratie">
        <header>
          <h2>{this.state.header.headTitle}</h2>
          <p>{this.state.header.discription}</p>
          <p>{this.state.secret}</p>
        </header>
        <form onSubmit={this.handleSubmit}>
          {this.state.email.show === true && <div>
            <label>Email {this.state.email.required === true && <span>*</span>}</label>
            <input
              placeholder=" uw email adres"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              name="name" />
          </div>
          }
          <div>
            <label>Geslacht * </label>
            <select>
              <option value="">---</option>
              <option value="man">man</option>
              <option value="vrouw">vrouw</option>
              <option value="staat er niet tussen">staat er niet tussen</option>
            </select>
            <div>
              <label>Leeftijdscategorie * </label>
              <select defaultValue="">
                <option value="">---</option>
                <option value="0">12 to 29</option>
                <option value="1">30 tot 65</option>
                <option value="2">65+</option>
              </select>
            </div>
            <div>
              <label>Postcode * </label>
              <input
                type="text"
                name="postcode"
                placeholder=" postcode  1234AB"
              />
            </div>
            <div>
              <label>Straat * </label>
              <input
                placeholder=" straatnaam"
                type="text"
                name="straat" />
            </div>
            <div>
              <label className="label-anoniem">anoniem </label>
              <AppSwitch
                className={'mx-1'}
                variant={'3d'}
                color={'primary'}
                checked size={'lg'}
                checked={false}
              />
            </div>
          </div>
          <div className="button-container">
            <input
              type="submit"
              value="opslaan"
              className="buttonCSS"
            />      
          </div>
        </form>
      </section>
    );
  }
}

export default Formulier;
{/* <button>opslaan</button> */}

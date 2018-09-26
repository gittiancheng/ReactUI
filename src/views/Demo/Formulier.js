import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react'

class Formulier extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      secret: this.props.secret || '',
      email: {
        show: this.props.showEmail===false ? false : true ,
        required: this.props.requiredEmail || true,
      },
      header: {
        headTitle: this.props.headTitle || 'Algemene gegevens',
        discription: this.props.discription ||
          "Vul uw gegevens in. Deze gegevens gebruikt de gemeente uitsluited voor de meting van de belevingskwaliteit. Uw gegevens worden niet aan derden versterkt",
      },    
    };
  }

  render() {
    return (
      <section className="animated fadeIn container-registratie">
        <header>
          <h2>{this.state.header.headTitle}</h2>
          <p>{this.state.header.discription}</p>
          <p>{this.state.secret}</p>
        </header>
        <div>
          {this.state.email.show === true && <div>
            <label>Email * </label>
            <input
              placeholder=" uw email adres"
              type="text"
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
            <button>opslaan</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Formulier;

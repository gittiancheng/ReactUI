import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react';
import  Formulier   from './Formulier';

class Gegevens extends Component {
  render() {
    return (
      <div>
        <Formulier />
        <Formulier
          secret="hallo, zonder waarde zie je deze niet"
          headTitle="Hallo World"
          discription="Dit is hetzelfde component met andere waardes door nieuwe waardes aan props toe te kennen."
          howEmail={true}
         
        />
        <Formulier
          secret="-hidden email?-"
          headTitle="Nog een keer anders"
          discription="een, twee, drie, zovaak je wilt! components zijn zo handig!"
          showEmail={false}
        />
      </div>
    );
  }
}

export default Gegevens;
 // title: 'hello',
 // discription: 'hello',  

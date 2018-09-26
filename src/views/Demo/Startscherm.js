import React, { Component } from 'react';
import BackgroundImage from './bg-demo.jpg';

const styles = {
  home: {
    backgroundImage: `url(${BackgroundImage})`
  }
}

class Startscherm extends Component {
  render() {
    return (
      <section
        className="backgroundImage"
        style={styles.home}
      >   
        <div className="containers">
          <header>
            <h2>Belevingsonderzoek DEMO</h2>
              <h3>Draag bij aan de verbetering van uw leefomgeving</h3>
                    </header>
            <footer>
              <div className="textForButtonsMenu"></div>
              <a className="button scrolly horizontalScrollerMain doemee">Doe mee!</a>

            </footer>
                </div>
            </section>
      )
  }

}
export default Startscherm;

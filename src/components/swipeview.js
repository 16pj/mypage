import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
  slide4: {
    background: '#FF0000',
  },
};

export default class SwipeView extends React.Component {
  render() {
    return (
      <SwipeableViews>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          Hat1: Coder
        <br /><br />
          <a href="https://github.com/16pj" target="_blank" rel="noreferrer">Github Playground</a>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          Hat2: Decoder
        <br /><br />
          <a href="https://www.linkedin.com/in/robinpj" target="_blank" rel="noreferrer">Linkedin Profile</a>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          Hat3: Learner
        <br /><br />
          <a href="http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8241091&isnumber=8241062" target="_blank" rel="noreferrer">IEEE Paper</a>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide4)}>
          Hat4: Doer
        <br /><br />
          <a href="https://www.youracclaim.com/badges/1dbdfb09-bb95-463e-b2cc-191ee3d1a412/linked_in_profile" target="_blank" rel="noreferrer">Ericsson Recognition</a>
        </div>
      </SwipeableViews>
    )
  }
}
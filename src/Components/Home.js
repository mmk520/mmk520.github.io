import React, { Component } from 'react';

import Particles from 'react-particles-js';

import '../Styles/Home.css';

export default class Home extends Component {
 
  render() {
    return (
      <div className="homeEle" onClick={this.speedUpTyper}>
        <Particles
          className="particleCanv"
          params={{
            particles: {
              number: {
                value: 250,
                density: {
                  enable: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3
                }
              },
              line_linked: {
                enable: false
              },
              move: {
                random: true,
                speed: 2,
                direction: 'top',
                out_mode: 'out'
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                },
                onclick: {
                  enable: false,
                  mode: 'repulse'
                }
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.1
                }
              }
            }
          }}
        />

        <div className="flexContainer">
         
         
        </div>
      </div>
    );
  }
}

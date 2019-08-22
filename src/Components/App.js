import React from 'react';
import Home from './Home';
import Page from './Page';
import '../Styles/App.css';

export default class App extends React.Component {
 
  render() {
    return (
      <div>
        <div className="app animated fadeIn delay-0s">
          {/* The classnames are to aid with selection through DOM and navbar*/}
          <Page className="home" height="100vh" id="home">
            <Home />
          </Page>
          </div>
      </div>
    );
  }
}

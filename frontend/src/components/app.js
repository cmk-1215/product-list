import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search-bar';
// import WeatherList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
      <div className="col-md-8 offset-md-2">
        <SearchBar />
        {/* <WeatherList /> */}
      </div>
    );
  }
}   
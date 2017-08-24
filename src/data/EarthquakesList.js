import React, { Component } from 'react';
import moment from 'moment';
import earthquakes from '../data/earthquakes.js';

class EarthquakeList extends Component {
  render() {
    let quake = earthquakes.features.map((earthquake) => {
    return (<div className="col-sm-6" key={earthquakes.id}>
  <div className="card" >
    <div className="card-block">
      <h4 className="card-title">{earthquakes.id.properties}</h4>
      <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquakes.mag}</h6>
      <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquakes.features.properties.time).format('llll')}</h6>
      <p className="card-text">Coordinates: {earthquakes.features.geometry.coordinates}</p>

      <a href={earthquakes.features.properties.url} className="card-link">USGS Event Link</a>

    </div>
  </div>
</div>
)
})

  return(
         <div className="quakes">
          <div className="row">
            {quake}
          </div>
         </div>
       );

}
}
export default EarthquakeList;

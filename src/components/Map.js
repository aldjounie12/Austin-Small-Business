import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import api_key  from '../config'



const Pointer = () => {
  
  return(

<div style={{display:'flex', alignItems:'center', justifyContent:'center', width: '20px', height:'20px', borderRadius:'100%', background:'green'}}>
<div style={{width: '5px',height:'5px', borderRadius:'100%', background: 'black' }}></div>
</div>
)
    }

class Map extends Component {
  static defaultProps = {
    center: {
      lat:30.267153,
      lng:-97.743057
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '400px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: api_key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
      <Pointer
        lat= {30.267153}
        lng= {-97.743057}
      />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;
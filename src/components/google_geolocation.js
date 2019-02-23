import React, { Component } from 'react';
import GoogleMap from './google_map'
import axios from 'axios';
import {loadScript} from './google_loaders'



const API_KEY =  require('./api_key').API_KEY

let GEOCODER

export default class GoogleGeolocation extends Component {
  constructor(){
    super()
    this.state = {
      current_pos: {}
    }
  }

  componentDidMount(){
    // loadScript(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}`)
    //   .then(this.initMap)
  }

  //use navigator.geolocation.getCurrentPosition((pos) => {position.coords.latitude and position.coords.longitude}
  // to get the user's position instead
  initMap = () => {
    this.GEOCODER = new google.maps.Geocoder;

    axios.post("https://www.googleapis.com/geolocation/v1/geolocate?key="+API_KEY,{})
      .then(this.guess_address)
    //update_latlng_on_focusout()
  }

  guess_address = (response) => {
    // if($('#site_address').val() !== ''){
    //   return
    // }
    this.GEOCODER.geocode({'location': response['location']}, function(results, status) {
      if (status === 'OK') {
        if (results[0]) {
          console.log(results[0]['formatted_address'])

          // $('#site_address').val(results[0]['formatted_address'])
          // set_latlng()
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

  // function update_latlng_on_focusout(){
  //   $('#site_address').focusout(function(){
  //     set_latlng()
  //   })
  // }

  // function set_latlng(){
  //   if($('#site_address').val === ''){
  //     return
  //   }
  //   GEOCODER.geocode( { 'address': $('#site_address').val()}, function(results, status) {
  //     if (status == 'OK') {
  //       $('#site_lat').val(results[0]['geometry']['location']['lat']())
  //       $('#site_long').val(results[0]['geometry']['location']['lng']())
  //     } else {
  //       alert('Geocode was not successful for the following reason: ' + status);
  //     }
  //   });
  // }


  render() {
    return (
      <GoogleMap current_pos={this.state.current_pos} />
    );
  }
}

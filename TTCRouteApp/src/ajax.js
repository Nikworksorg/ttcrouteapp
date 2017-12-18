import axios from 'axios';
var DOMParser = require('xmldom').DOMParser;
const API = 'http://webservices.nextbus.com'
const AGENCY = 'ttc';
//testRouteEndPointString = http://webservices.nextbus.com/service/publicXMLFeed?command=routeList&a=ttc
//testDirectEndPointString = http://webservices.nextbus.com/service/publicXMLFeed?command=routeConfig&a=ttc&r=5

export default{
  async fetchRoutes(){
    axios.get(API + '/service/publicXMLFeed?command=routeList&a='+ AGENCY)
    .then(function (response) {
      console.log('Fetch Routes');
      var xmlData = response.data;
      console.log(xmlData);
      var domParser = new DOMParser().parseFromString(xmlData, 'text/xml');
      var routes = domParser.getElementsByTagName('route');
      return routes;
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  async fetchDirections(route){
    axios.get(API + '/service/publicXMLFeed?command=routeConfig&a=' + AGENCY  + '&r=' + route)
    .then(function (response) {
      console.log('Fetch Directions');
      var xmlData = response.data;
      console.log(xmlData);
      var domParser = new DOMParser().parseFromString(xmlData, 'text/xml');
      var directions = domParser.getElementsByTagName('route');
      return directions;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};

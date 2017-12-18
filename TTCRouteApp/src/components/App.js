import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import ajax from '../ajax';


class App extends React.Component{
  async componentDidMount(){
    const routes = await ajax.fetchRoutes();
    console.log('Routes' + routes);

    const directions = await ajax.fetchDirections("5");
    console.log('Directions' + directions);
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.header}>TTC Route App</Text>
      </View>
    );
  }
}  


const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  header:{
    fontSize: 40,
  },
});
export default App;

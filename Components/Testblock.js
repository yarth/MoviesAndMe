import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

class Testblock extends React.Component {
  render() {
      return (
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
          <View style={{ height: 50, width: 50, backgroundColor: 'blue' }}></View>
          <View style={{ height: 50, width: 50, backgroundColor: 'white' }}></View>
          <View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
        </View>
      )
   }
 }
export default Testblock;

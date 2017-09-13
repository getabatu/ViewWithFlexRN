import React, {Component} from 'react';
import {View, Text, AppRegistry, StyleSheet, ScrollView} from 'react-native';
  
export default class AnisNajib extends Component{
  render(){
    
    var payments = [];

    for(let i = 0; i < 10; i++){
        payments.push(
            <View style={styles.contentContainer}>
              <View style={styles.smallBox}>
              </View>
              <Text>Hello say React Native</Text>
            </View>
        )
    }

    return(
      <View style={styles.container}>
       <View style={styles.small}>
        <Text>Title</Text>
       </View>
       
       <View style={styles.smaller}>
        <ScrollView contentContainerStyle={styles.content}>
          { payments }
        </ScrollView>
       </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'skyblue',
  },

  small:{
    flex:0.5,
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'#006064',
  },

  smaller:{
    flex:10,
    flexDirection:'column-reverse',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#4DB6AC',
    paddingBottom:5
  },
  
  contentContainer:{
    flex:1,
    width:350,
    height:100,
    backgroundColor:'#B2DFDB',
    marginBottom:5,
    flexDirection:'row',
    padding:5,
    borderRadius:5
  },
  content: {
    paddingVertical: 20,
  },
  smallBox:{
    width:100,
    height:90,
    backgroundColor:'#43A047',
    marginRight:5
  }
});

AppRegistry.registerComponent('AnisNajib', ()=> AnisNajib);
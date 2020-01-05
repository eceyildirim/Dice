/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import RNSShakeEvent from 'react-native-shake-event';
import LinearGradient from 'react-native-linear-gradient';
import Spinner from 'react-native-loading-spinner-overlay';

class App extends Component{
  constructor(){
   
      super();
   
      this.state={
        visible: false,
        uri1:require("./src/img/r1.png"),
        uri2:require("./src/img/r1.png"),
      };
      this.onPress = this.RotateDice.bind(this);
    }

    RotateDice = () =>
    {
      var RandomNumber1 = Math.floor(Math.random() * 6) + 1 ;
      var RandomNumber2 = Math.floor(Math.random() * 6) + 1 ;

      this.setState(()=>({
        visible:true
      }))

      //Dice 1
      RandomNumber1=RandomNumber1.toString();

      this.setState(()=>({
        visible:false
      }))

      if(RandomNumber1==='1')
      {
        this.setState(()=>({
          uri1:require('./src/img/r1.png')
        }))
      }
      if(RandomNumber1==='2')
      {
        this.setState(()=>({
          uri1:require('./src/img/r2.png')
        }))
      }
      if(RandomNumber1==='3')
      {
        this.setState(()=>({
          uri1:require('./src/img/r3.png')
        }))
      }
      if(RandomNumber1==='4')
      {
        this.setState(()=>({
          uri1:require('./src/img/r4.png')
        }))
      }
      if(RandomNumber1==='5')
      {
        this.setState(()=>({
          uri1:require('./src/img/r5.png')
        }))
      }
      if(RandomNumber1==='6')
      {
        this.setState(()=>({
          uri1:require('./src/img/r6.png')
        }))
      }
      //Dice 2
      RandomNumber2=RandomNumber2.toString();

      this.setState(()=>({
        visible:false
      }))
      if(RandomNumber2==='1')
      {
        this.setState(()=>({
          uri2:require('./src/img/r1.png')
        }))
      }
      if(RandomNumber2==='2')
      {
        this.setState(()=>({
          uri2:require('./src/img/r2.png')
        }))
      }
      if(RandomNumber2==='3')
      {
        this.setState(()=>({
          uri2:require('./src/img/r3.png')
        }))
      }
      if(RandomNumber2==='4')
      {
        this.setState(()=>({
          uri2:require('./src/img/r4.png')
        }))
      }
      if(RandomNumber2==='5')
      {
        this.setState(()=>({
          uri2:require('./src/img/r5.png')
        }))
      }
      if(RandomNumber2==='6')
      {
        this.setState(()=>({
          uri2:require('./src/img/r6.png')
        }))
      }
    }

  componentWillMount() {
    RNSShakeEvent.addEventListener('shake', () => {
      // console.log('Device Shake!');
      this.onPress();
    });
  }

  onPress() {
    this.RotateDice;
  }
  
  componentWillUnmount() {
    RNSShakeEvent.removeEventListener('shake');
  }
  render()
  {
    return(
      <LinearGradient colors={['#E8CBC0', '#636FA4']} style={styles.MainContainer} >
        <Spinner visible={this.state.visible} color={"#E71C23"} size={"large"} animation={"fade"}
          textContent={"Rotating Dice"} textStyle={{color:"black"}}>
        </Spinner>
        <TouchableOpacity onPress={this.onPress}>
          <Image style={{width: 100, height: 100, marginLeft:150, marginTop:50}} source={this.state.uri1}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress}>
          <Image style={{width: 100, height: 100, marginRight:150, marginBottom:50}} source={this.state.uri2}/>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
};
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;

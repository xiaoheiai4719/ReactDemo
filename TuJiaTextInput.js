import React, { Component } from 'react';
import { View, Text ,TextInput,TouchableHighlight,StyleSheet,Image} from 'react-native';

export default class TuJiaTextInput extends Component {
  //重写Init 设置state 根据state 进行 UI变换
  constructor(props) {
    super(props);
    this.state = { currentNumber:this.props.currentNumber};
  }
  addPress = () => {
    this.setState({
        currentNumber:++this.state.currentNumber
    });
  };
  reducePress = () => {
    this.setState({
        currentNumber:--this.state.currentNumber
    });
  };
  render() {
    return (
      <View  style={styles.container}>
        <Text style={styles.title}>{this.props.name}</Text>
        <TouchableHighlight onPress={this.addPress} style={styles.btnSize}>
        <Image style={styles.canUseBtn}  source={require('./img/reduce_button.png')}/>
        </TouchableHighlight>
        <Text style={styles.unitSize}>{this.state.currentNumber}{this.props.unit}</Text>
        <TouchableHighlight style={styles.btnSize} onPress={this.reducePress}>
        <Image style={styles.canUseBtn}  source={require('./img/add_button.png')}/>
        </TouchableHighlight>
        <View></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container:{
    height:50,
    flexDirection:'row',
    borderBottomWidth:0.5,
    borderColor:'#444444',
  },
  title:{
    position :'relative',
    left:10,//
    alignSelf:'center',
    fontSize:20,
  },
  btnSize:{
    width:50,
    height:50,
    justifyContent:'center',
    alignItems: 'center',
  },
  canUseBtn:{
   // alignSelf:'center',

 },
 unitSize:{
    fontSize:15,
    alignSelf:'center',
  },

  canNotUseBtn:{


  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
});
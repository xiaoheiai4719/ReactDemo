import React, { Component } from 'react';
import { AppRegistry, Text,View,StyleSheet,ActivityIndicator,TextInput,TouchableHighlight} from 'react-native';
import TuJiaTextInput from './TuJiaTextInput';

class ReactDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {isChange:true};
  }
    textOnPress = () => {
      this.setState({
        isChange:!this.state.isChange
      });
    };

  render() {

  let display = this.state.isChange ? 'HAHAHAHAHAHAHAHA' : 'Tap Here For Custom Highlight!';
  return (
      <View style={styles.container}>
    	<ActivityIndicator style={[styles.centering, styles.gray]} color="white" size="large"/>
    	<View style={styles.first}/>
		  <View style={styles.Second}/>
		  <View style={styles.Third}/>
       <TouchableHighlight style={styles.wrapper}
       onPress={this.textOnPress}>
       <Text>{display}</Text>
       </TouchableHighlight>
       <TuJiaTextInput name='这是一个测试的例子' unit='套' currentNumber='789'></TuJiaTextInput>
       </View>
    );
  }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start',
},
  first:{
	   width: 50,
   	height: 50,
  	backgroundColor:'#444444',

  },
  Second:{
   width: 50, 
   height: 50,
  	backgroundColor:'#333333',
  },
  Third:{
  	width: 50, 
  	height: 50,
  	backgroundColor:'#666666',
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














// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('ReactDemo', () => ReactDemo);
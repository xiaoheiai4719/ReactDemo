import React, { Component } from 'react';
import { AppRegistry, Text,View } from 'react-native';

class ReactDemo extends Component {
  render() {
    return (
    	<View></View>
    );
  }
}

// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('ReactDemo', () => ReactDemo);
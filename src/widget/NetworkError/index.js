import React, { Component } from 'react'
import { View } from 'react-native'

import Icon from '../Icon';

export default class index extends Component {
  render() {
    return (
      <View style={{ alignSelf:'center' }}>
        <Icon name='wifi' size={180} />
      </View>
    )
  }
}
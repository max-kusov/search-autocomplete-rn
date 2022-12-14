import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ItemSearch = ({ name, domain, logo, onPressed }) => {
  return (
    <TouchableOpacity style={{
      paddingHorizontal: 10,
      paddingVertical: 8,
      flexDirection: 'row',
      alignItems: 'center'
    }}
      onPress={() => onPressed(name)}
    >
      <Image source={{ uri: logo }}
        style={{
          width: 25,
          height: 25
        }} />
      <View style={{
        marginLeft: 10
      }}>
        <Text style={{
          fontSize: 14,
          lineHeight: 16
        }}>{name}</Text>
        <Text style={{
          fontSize: 12,
          lineHeight: 14,
          color: '#9F9F9F'
        }}>{domain}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemSearch
import React from 'react'
import { View, Text, TextInput } from 'react-native';
import axios from 'axios'
import ItemSearch from '../ItemSearch/ItemSearch';


const Search = () => {
  const [value, setValue] = React.useState('')
  const [arr, setArr] = React.useState([])

  React.useEffect(() => {
    const apiUrl = `https://autocomplete.clearbit.com/v1/companies/suggest?query=${value}`
    value.length > 0
      ? axios.get(apiUrl).then(res => setArr(res.data))
      : setArr([])
  }, [value])

  const onPressed = (name) => {
    setValue(name)
  }

  return (
    <View style={{
      width: '80%',
      position: 'absolute',
      top: 70
    }}>
      <Text>Компания</Text>
      <TextInput
        type="text"
        value={value}
        onChangeText={setValue}
        style={{
          width: '100%',
          borderRadius: 7,
          paddingHorizontal: 14,
          paddingVertical: 6,
          borderWidth: 1,
          borderColor: '#E5E5E5',
          marginTop: 8
        }} />
      <View style={{
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 4
      }}>
        {arr && arr.map((list, i) =>
          <ItemSearch key={i} {...list} onPressed={onPressed} />
        )
        }
      </View>
    </View >
  )
}

export default Search
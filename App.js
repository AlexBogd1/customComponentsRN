import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomSwitch from "./components/CustomSwitch";

export default function App() {
  const [value, setValue] = useState('');
  const onChangeValue = (val) => {
    setValue(val);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>{ value }</Text>
      </View>
      <CustomSwitch
          itemStyle = {styles.itemStyle}
      switches={['first', 'second', 'third']}
          value={value}
          onChangeValue={onChangeValue}
          activeColor={'white'}
          sideColor ={'#d9dae0'}
          activeTextColor={'black'}
          fontStyles = {styles.fontStyle}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hiddenText: {
    height: 120,
  },
  itemStyle : {
    width: 90,
    borderRadius: 10,
  },
  fontStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black'
  }
});

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomSwitch from "./components/CustomSwitch";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const onChangeValue = () => {
    setIsActive(val => !val);
  };

  return (
    <View style={styles.container}>
      <View style={styles.hiddenText}>
        {isActive &&
        <View>
          <Text> Hello </Text>
        </View>}
      </View>
      <CustomSwitch
          style = {{width: 140,height: 40, borderRadius: 30}}
          value={isActive}
          onChangeValue={onChangeValue}
          activeColor={'#4785b7'}
          sideColor ={'#9199c1'}
          activeText={'manual upload'}
          inactiveText={'shares'}
          fontStyles = {{fontSize: 9, fontWeight: 'bold', color: 'white'}}
          disabled={false}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hiddenText: {
    height: 120,
  },
});

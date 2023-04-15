import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import {CurrencyByRs} from './data';
import CurrencyButton from './components/CurrencyButton';

const Index = () => {
  const [value, setvalue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const btnPressed = (targetValue: Currency) => {
    if (!value) {
      return Snackbar.show({
        text: 'enter value to convert',
        backgroundColor: '#542',
        textColor: '#000000',
      });
    }

    const inputAmt = parseFloat(value);
    if (!isNaN(inputAmt)) {
      const convertedValue = inputAmt * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'not valid number to convert',
        backgroundColor: '#542',
        textColor: '#000000',
      });
    }
  };

  return (
    <View>
      <TextInput
        maxLength={12}
        value={value}
        clearButtonMode="always"
        onChangeText={setvalue}
        keyboardType="number-pad"
        placeholder="enter amount to convert"
      />
      {resultValue && <Text>{resultValue}</Text>}
      <View>
        <FlatList
          numColumns={3}
          data={CurrencyByRs}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable
              style={targetCurrency === item.name && style.bg}
              onPress={() => btnPressed(item)}>
              <CurrencyButton {...item} />
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  bg: {
    backgroundColor: '#487',
  },
});

export default Index;

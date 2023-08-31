import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Appbar } from 'react-native-paper';

const App = () => {
  const [tempC, setTempC] = useState('');
  const [tempF, setTempF] = useState('');
  const [speedKmh, setSpeedKmh] = useState('');
  const [speedMph, setSpeedMph] = useState('');
  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');
  const [inputWord, setInputWord] = useState('');
  const [reversedWord, setReversedWord] = useState('');

  const convertTemperature = () => {
    const celsius = parseFloat(tempC);
    const fahrenheit = (celsius * 9) / 5 + 32;
    setTempF(fahrenheit.toFixed(4));
  };

  const convertSpeed = () => {
    const kmh = parseFloat(speedKmh);
    const mph = kmh / 1.609344;
    setSpeedMph(mph.toFixed(4));
  };

  const convertDecimalToBinary = () => {
    const dec = parseInt(decimal);
    setBinary(dec.toString(2));
  };

  const reverseWord = () => {
    setReversedWord(inputWord.split('').reverse().join(''));
  };

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Conversor App" />
      </Appbar.Header>
      <View>
        <TextInput
          placeholder="Temperatura ºC"
          value={tempC}
          onChangeText={(text) => setTempC(text)}
        />
        <Button title="Converter" onPress={convertTemperature} />
        <Text>Temperatura ºF: {tempF}</Text>
      </View>
      {/* Implemente as outras conversões de forma semelhante */}
      <View>
        <TextInput
          placeholder="Palavra"
          value={inputWord}
          onChangeText={(text) => setInputWord(text)}
        />
        <Button title="Inverter" onPress={reverseWord} />
        <Text>Palavra invertida: {reversedWord}</Text>
      </View>
    </View>
  );
};

export default App;

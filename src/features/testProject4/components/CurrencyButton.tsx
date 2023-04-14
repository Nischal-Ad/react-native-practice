import {View, Text} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

type CurrencyBtnProps = PropsWithChildren<{name: string; country: string}>;

const CurrencyButton = (props: CurrencyBtnProps): JSX.Element => {
  return (
    <View>
      <Text>{props.country}</Text>
      <Text>{props.name}</Text>
    </View>
  );
};

export default CurrencyButton;

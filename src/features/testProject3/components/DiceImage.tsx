import {View, ImageSourcePropType, Image} from 'react-native';
import type {PropsWithChildren} from 'react';
import React from 'react';
import {styles} from '../index';

type DiceProps = PropsWithChildren<{
  imgUrl: ImageSourcePropType;
}>;

const DiceImage: React.FC<DiceProps> = ({imgUrl}) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imgUrl} />
    </View>
  );
};

export default DiceImage;

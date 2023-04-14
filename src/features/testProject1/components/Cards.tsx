import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Cards() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../../../assets/img/test.jpg')}
        />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.heading}>here goes heading</Text>
        <Text style={styles.desc}>here goes desc</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
  },
  image: {
    height: 500,
    marginHorizontal: 20,
    // resizeMode: 'contain',
    objectFit: 'fill',
    width: 400,
  },
  text_container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  desc: {
    color: 'black',
    fontSize: 18,
    paddingVertical: 10,
  },
});

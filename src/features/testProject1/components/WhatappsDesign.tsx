import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function WhatappsDesign() {
  const data: {name: string; img: string; desc: string}[] = [
    {
      name: 'nischal',
      desc: 'this is desc',
      img: 'here gies image',
    },
    {
      name: 'nischal',
      desc: 'this is desc',
      img: 'here gies image',
    },
    {
      name: 'nischal',
      desc: 'this is desc',
      img: 'here gies image',
    },
    {
      name: 'nischal',
      desc: 'this is desc',
      img: 'here gies image',
    },
    {
      name: 'nischal',
      desc: 'this is desc',
      img: 'here gies image',
    },
  ];
  return (
    <View style={styles.body}>
      {data.map((a, i) => {
        return (
          <View key={i} style={styles.container}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2023/03/18/16/26/ha-giang-7860907_640.jpg',
              }}
            />
            <View>
              <Text style={styles.name}>{a.name}</Text>
              <Text style={styles.desc}>{a.desc}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    marginHorizontal: 10,
  },

  container: {
    backgroundColor: '#462',
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 100,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    marginBottom: 3,
    fontSize: 30,
    fontWeight: 'bold',
  },
  desc: {
    marginBottom: 10,
    fontSize: 15,
    color: 'gray',
  },
});

import React from 'react';
import Cards from './components/Cards';
import {StyleSheet, Text} from 'react-native';
import ActionCard from './components/ActionCard';
import WhatappsDesign from './components/WhatappsDesign';

export default function index() {
  return (
    <>
      <Text style={styles.heading}>Cards</Text>
      <Cards />
      <Text style={styles.heading}>Action Cards</Text>
      <ActionCard />
      <Text style={styles.heading}>Whatapps Chat Design</Text>
      <WhatappsDesign />
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React from 'react';

// components
import TestProject1 from './src/features/testProject1';
import TestProject2 from './src/features/testProject2';
import TestProject3 from './src/features/testProject3';
import TestProject4 from './src/features/testProject4/View';
import TestProject5 from './src/features/testProject5';

const DATA = [
  <TestProject1 />,
  <TestProject2 />,
  <TestProject3 />,
  <TestProject4 />,
  <TestProject5 />,
];

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={({item}) => <>{item}</>} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

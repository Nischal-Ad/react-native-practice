import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

//components
import TestProject1 from './src/features/testProject1';
import TestProject2 from './src/features/testProject2';
import TestProject3 from './src/features/testProject3';
import TestProject4 from './src/features/testProject4/View';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView keyboardShouldPersistTaps="never">
        <TestProject1 />
        <TestProject2 />
        <TestProject3 />
        <TestProject4 />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

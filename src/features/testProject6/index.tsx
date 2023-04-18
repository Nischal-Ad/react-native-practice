import {View, StyleSheet, ActivityIndicator, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import {setupPlayer, addTrack} from './components/musicPlater';
import Main from './components/ui/Main';

const ViewMain = () => {
  const [isready, setIsready] = useState(false);

  const setup = async () => {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack();
    }

    setIsready(isSetup);
  };

  useEffect(() => {
    setup();
  }, []);

  if (!isready) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Main />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ViewMain;

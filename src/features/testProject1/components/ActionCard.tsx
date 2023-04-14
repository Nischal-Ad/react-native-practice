import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openSite: any = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../../../assets/img/test.jpg')}
        />
      </View>
      <View style={styles.text_container}>
        <TouchableOpacity
          onPress={() =>
            openSite(
              'https://www.youtube.com/watch?v=eL5qYJ7y68k&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=15',
            )
          }>
          <Text style={styles.heading}>Open Youtube</Text>
        </TouchableOpacity>
        <Text style={styles.desc}>
          click here and you'll redirected to facebook
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 4,
    marginHorizontal: 5,
    backgroundColor: 'white',
  },
  image: {
    height: 500,
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

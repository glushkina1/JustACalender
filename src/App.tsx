import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Tabs from './Tabs';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;

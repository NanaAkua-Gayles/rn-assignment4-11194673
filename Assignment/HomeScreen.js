import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PopularJobs from './PopularJobs';

const HomeScreen = () => {

  return (
    <View style={styles.container}>
    <PopularJobs/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
});

export default HomeScreen;

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CommunityScreen = () => {
    return (
      <View style={styles.container}>
        <Text>CommunityScreen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
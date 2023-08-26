import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex justify-center items-center">
      <Text>Halaman Home</Text>
      <Button
        title="Ke Halaman About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

export default HomeScreen;

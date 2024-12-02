import React from 'react';
import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router'

export default function Product() {

    const { id } = useLocalSearchParams();
    console.log("🚀 ~ Product ~ id:", id)

  return (
    <View>
        <Text>ID = {id}</Text>
    </View>
  );
}
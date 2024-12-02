import { Link, router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function app() {
  return (
    <View style={styles.container}>
        <Text>OI APP</Text>
        <TouchableOpacity 
            onPress={() => router.navigate('profile')}>
            <Text>NAVEGAR PARA PERFIL</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={() => router.navigate('product/555')}>
            <Text>NAVEGAR PARA PRODUTO</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={() => router.navigate('dashboard')}>
            <Text>NAVEGAR PARA DASHBOARD</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
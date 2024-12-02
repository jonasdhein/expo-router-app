import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
    return (
        <>
            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#FFF'
                    },
                    headerTintColor: '#1A237E'
                }}>
                <Stack.Screen name="index" options={{ title: "Home" }} />
                <Stack.Screen name="profile" options={{ title: "Perfil" }} />
                <Stack.Screen name="product/[id]" options={{ title: "Produto" }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
            <StatusBar style='auto'/>
        </>
    )
}
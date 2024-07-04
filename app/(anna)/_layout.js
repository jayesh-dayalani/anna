import { Stack } from "expo-router";
import { Provider } from "react-redux";
import MyStore from "../../redux/MyStore";

export default function Layout() {
    return (
        <Provider store={MyStore}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="home" />
                <Stack.Screen name="register" />
                <Stack.Screen name="login" />
                <Stack.Screen name="userhome" />
                <Stack.Screen name="adminhome" />
            </Stack>
        </Provider>
    )
}
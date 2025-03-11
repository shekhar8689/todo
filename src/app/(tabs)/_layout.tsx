import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#007AFF'}}>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: 'Todo',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />, // ✅ Perfect for Todo
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    headerShown: false,
                    title: 'Positive',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="smile-o" color={color} />, // ✅ Represents positivity
                }}
            />
            <Tabs.Screen
                name="info"
                options={{
                    headerShown: false,
                    title: 'Facts',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="lightbulb-o" color={color} />, // ✅ Perfect for new facts
                }}
            />
        </Tabs>
    );
}

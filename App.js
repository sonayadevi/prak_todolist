import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Icon, Text } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { AboutScreen, TaskCompletedScreen, TaskScreen } from "./screens";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// tes push wkwwkwkwkwkwwkwk
const BottomNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => { let iconName;
    if (route.name === "Task") { iconName = "tasks";
    } else if (route.name === "Completed") { iconName = "clipboard-check";
    } else if (route.name === "About") { iconName = "exclamation-circle";
    }
    return (
    <Icon
    as={FontAwesome5} name={iconName}
    size={size}
    color={focused ? "primary.600" : color}
    />
    );
    },
    tabBarIconStyle: { marginTop: 10 },
    tabBarLabel: ({ children, color, focused }) => { return (
    <Text color={focused ? "primary.600" : color} mb={2}>
    {children}
    </Text>
    );
    },
    tabBarStyle: { height: 70,
    borderTopWidth: 0,
    },
    })}
    >
    <Tab.Screen
    name="Task"
    component={TaskScreen}
    options={{ title: "All Task", unmountOnBlur: true }}
    />
    <Tab.Screen
    name="Completed"
    component={TaskCompletedScreen}
    options={{ unmountOnBlur: true }}
    />
    <Tab.Screen
    name="About"
    component={AboutScreen}
    options={{ unmountOnBlur: true }}
    />
    </Tab.Navigator>
    );
    };
    
    const App = () => { return (
      <NativeBaseProvider>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
      name="BottomNavigator"
      component={BottomNavigator}
      options={{ headerShown: false }}
      />
      </Stack.Navigator>
      </NavigationContainer>
      </NativeBaseProvider>
      );
      };
      

      

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

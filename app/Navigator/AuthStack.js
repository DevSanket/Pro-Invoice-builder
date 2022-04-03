import { createStackNavigator } from "@react-navigation/stack";
import Register from "../Screen/Register";


const Stack = createStackNavigator();

export default AuthStack = () => {
   return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
   )
}
import { createStackNavigator } from "@react-navigation/stack";
import CreateBill from "../Screen/CreateBill";
import HomeScreen from "../Screen/HomeScreen";



const Stack = createStackNavigator();

export default AuthStack = () => {
   return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateBill" component={CreateBill} />
    </Stack.Navigator>
   )
}
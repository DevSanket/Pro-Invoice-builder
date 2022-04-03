import { useContext } from "react";
import AuthContext from './context';
import authStorage from './storage';

export default useAuth = () => {
    const {userData,setUserData} = useContext(AuthContext);

    

    const logOut = () =>  {
        setUserData(null);
        authStorage.removeData();
    }

    const logIn = async (user) => {
        setUserData(user);
        authStorage.storeData(user);
    }

    return {userData,setUserData,logOut,logIn};

}
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigation';
import AuthProvider from './src/store/auth/AuthContext';


const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
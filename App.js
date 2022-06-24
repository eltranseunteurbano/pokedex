import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigation';


const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
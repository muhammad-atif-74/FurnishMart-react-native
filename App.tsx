import './global.css';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import AppNavigator from 'navigation/AppNavigator';


export default function App() {

  return (
    <>
      <AlertNotificationRoot>
        <AppNavigator />
      </AlertNotificationRoot>
    </>
  );
}

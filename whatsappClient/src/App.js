// import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messanger from './Components/Messanger';
import AccountAccess from './context/AccountDetails';
function App() {
  const demoId ="865847044391-l0m3g7cielu64gd0m3r9bpgmt6f6acbd.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={demoId}>
      <AccountAccess>
      <Messanger/>
      </AccountAccess>
    </GoogleOAuthProvider>
  );
}

export default App;

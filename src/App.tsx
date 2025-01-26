
import './App.css';
import Parent from './Components/Parent';
import UserContextProvider from './Context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
        <Parent/>
    </UserContextProvider>
  );
}

export default App;

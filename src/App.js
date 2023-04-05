import { createContext } from 'react';
import './App.css';
import ComponentC from './Components/ComponentC';

export const UserContext = createContext()
export const ChannelContext = createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Marvel'}>
        <ChannelContext.Provider value={'Universe'}>
             <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
      {/* /parent to child prop passes */}
    </div>
  );
}

export default App;

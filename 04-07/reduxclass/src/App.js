
import { Provider } from 'react-redux';
import Buttons from './Buttons';
import Counter from './Counter';
import { configureStore } from '@reduxjs/toolkit'
import reducers from './counterSlice';

const store = configureStore({reducer: reducers})

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <br />
        <Buttons />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
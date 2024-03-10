import { Provider, useDispatch, useSelector } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import RtkQuery from '../components/screens/RtkQuery';
import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from '../features/api/apislice';

// Reducer
const reducer = (state = 0, action: any) => {
    switch (action.type) {
        case 'Increase':
            return state + 1;
        case 'Decrease':
            return state - 1;
        default:
            return state;
    }
};

// Create the Redux store
const store = configureStore({
    reducer: {
      // Add the generated reducer as a slice to your store
      [pokemonApi.reducerPath]: pokemonApi.reducer,
      ['counter']: reducer
    },
    // Adding the api middleware to the store
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(pokemonApi.middleware)
  });

// Component
// Component
const ReduxLearning = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state: any) => state.counter); // Select the 'counter' slice of the state

    return (
        <>
            <div>Redux_learning</div>
            <div>
                <button onClick={() => dispatch({ type: 'Increase' })}>Increase</button>
                <button onClick={() => dispatch({ type: 'Decrease' })}>Decrease</button>
                <div>{counter}</div>
            </div>
        </>
    );
};


const ReduxApp = () => {
    return (
        <Provider store={store}>
            <ReduxLearning />
            <RtkQuery />
        </Provider>
    );
};

export default ReduxApp;

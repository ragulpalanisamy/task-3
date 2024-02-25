import { Provider, useDispatch, useSelector } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

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
const store = createStore(reducer);

// Component
const ReduxLearning = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state: any) => state);

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
        </Provider>
    );
};

export default ReduxApp;

import { useSelector, useDispatch } from "react-redux";
const CounterPage = () => {

    const {count} = useSelector(state => state);
    const dispatch = useDispatch();

    const createCounter = (countType) => {
        dispatch({
            type: countType
        })
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => createCounter('INCREMENT')}>+1</button>
            <button onClick={() => count > 0 && createCounter('DECREMENT')}>-1</button>
            <button onClick={() => createCounter('INCREMENT_BY_10')}>+10</button>
            <button onClick={() => count > 0 && createCounter('DECREMENT_BY_10')}>-10</button>
            <button onClick={() => createCounter('RESET')}>reset</button>
        </div>
    );
}

export default CounterPage;
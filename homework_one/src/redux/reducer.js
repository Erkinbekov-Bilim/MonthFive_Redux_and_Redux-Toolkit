
const initialState = {
    count: 0
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT': return {count: state.count + 1}
        case 'DECREMENT': return {count: state.count - 1}
        case 'INCREMENT_BY_10': return {count: state.count + 10}
        case 'DECREMENT_BY_10': return {count: state.count - 10}
        case 'RESET': return {count: 0}
        default: return state
    }
}

export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'ABC':
            throw new Error('La acción ABC no está implementada');
        default:
            return initialState;
    }
}
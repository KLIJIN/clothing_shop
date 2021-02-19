


const initialState = { currentUser: "OLOLO" }

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SET_CURRENT_USER":
            console.log("SET_CURRENT_USER", action.type, action.payload)
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;

    }

}


export default userReducer;
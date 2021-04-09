
import shopData from "../../collections"


const initialState = {
    sections: shopData,
};


const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default shopReducer;
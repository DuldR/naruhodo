import {RECEIVE_ONE_KANJI, RECEIVE_KANJIS } from './../actions/kanji_actions'

const kanjiReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_KANJIS:
            return action.kanjis
        case RECEIVE_ONE_KANJI:
            // Havent implemented single kanji get yet
            let newObject = Object.values(action.kanji)
            return Object.assign({}, state)
        default:
            return state;
    }
}

export default kanjiReducer
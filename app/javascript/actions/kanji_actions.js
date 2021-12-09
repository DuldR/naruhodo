import * as APIUtil from '../util/util_kanjis'

export const RECEIVE_KANJIS = "RECEIVE_KANJIS"
export const RECEIVE_ONE_KANJI = "RECEIVE_ONE_KANJI"


export const receiveKanjis = (kanjis) => {
    return {
        type: RECEIVE_KANJIS,
        kanjis
    }
}

export const receiveOneKanji = (kanji) => {
    return {
        type: RECEIVE_ONE_KANJI,
        kanji
    }
}

export const fetchKanjis = () => (dispatch) => {
    return APIUtil.getKanjis().then(kanjis => {
        console.log(kanjis)
        dispatch(receiveKanjis(kanjis))
    })
}


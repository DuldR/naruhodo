export const getKanjis = () => {
    return $.ajax({
        method: "GET",
        url: '/api/kanjis/'
    })
}

export const getOneKanji = (kanjiId) => {
    return $.ajax({
        method: "GET",
        url: `/api/kanjis/${kanjiId}`
    })
}
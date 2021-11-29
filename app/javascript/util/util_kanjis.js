export const getKanjis = () => {
    return $.ajax({
        method: "GET",
        url: '/api/kanjis/'
    })
}
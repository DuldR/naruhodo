
export const getKanjis = () => {
    return $for.ajax({
        method: "GET",
        url: '/api/kanjis/'
    })
}
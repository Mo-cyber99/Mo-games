export const fetchReviews = (query, sort_by, order) => {
    let queryStr = `https://backend-games-api.herokuapp.com/api/reviews`;
    if (query) {
        queryStr += `?category=${query}`
    }
    if (sort_by) {queryStr += `?sort_by=${sort_by}`};
	if (order) {queryStr += `?order=${order}`};
    return fetch(queryStr).then((res) => {
        return res.json()
    })
}

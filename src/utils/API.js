export const fetchCategories = () => {
    return fetch('https://backend-games-api.herokuapp.com/api/categories').then((res) => {
        return res.json()
    })
}

export const fetchReviews = (query) => {
    let queryStr = `https://backend-games-api.herokuapp.com/api/reviews`;
    if (query) {
        queryStr += `?category=${query}`
    }
    return fetch(queryStr).then((res) => {
        return res.json()
    })
}

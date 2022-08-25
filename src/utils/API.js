const axios = require('axios')
const gamesApi = axios.create({
    baseURL: 'https://backend-games-api.herokuapp.com/api',
    headers: {
        "Content-type": "application/json"
    }
})
export const fetchCategories = () => {
    return gamesApi.get('/categories').then(({ data }) => {
			return data;
		})
		.catch((err) => {
			console.log(err);
		});
}

export const fetchReviews = (category) => {
    let queryStr = `/reviews`;
	if (category) queryStr += `?category=${category}`;
	return gamesApi.get(queryStr).then(({ data }) => {
			return data;
		})
		.catch((err) => {
			console.log(err);
		});
}

export const fetchReviewsByCategories = (category) => {
    return gamesApi.get(`/reviews?category=${category}`).then(({ data }) => {
      return data;
    })
    .catch((err) => {
        console.log(err);
    });
  };

export const fetchReviewsByID = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}`).then(({ data }) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
    });
}

export const updateVotes = (review_id, inc_votes) => {
    return gamesApi.patch(`/reviews/${review_id}`, { inc_votes }).then(({ data }) => {
      return data;
    })
    .catch((err) => {
        console.log(err);
    });
  };
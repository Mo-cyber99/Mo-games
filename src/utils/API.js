const axios = require("axios");
const gamesApi = axios.create({
  baseURL: "https://mo-games-backend.onrender.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
export const fetchCategories = () => {
  return gamesApi
    .get("/categories")
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchReviews = (category, sort_by, order, limit, p) => {
  let queryStr = `/reviews`;
  if (category) queryStr += `?category=${category}`;
  if (sort_by) queryStr += `?sort_by=${sort_by}`;
  if (order) queryStr += `&order=${order}`;
  if (limit === 0) limit = 10;
  if (limit) queryStr += `&limit=${limit}`;
  if(p) queryStr += `&p=${p}`;
  return gamesApi
    .get(queryStr)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchReviewsByCategories = (category) => {
  return gamesApi
    .get(`/reviews?category=${category}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchReviewsByID = (review_id) => {
  return gamesApi
    .get(`/reviews/${review_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateVotes = (review_id, inc_votes) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes })
    .then(({ data }) => {
      return data;
    });
};

export const fetchCommentsByID = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const fetchUsers = () => {
  return gamesApi.get(`/users`).then(({ data }) => {
    return data;
  });
};

export const createUsers = (username, name, avatar_url) => {
  return gamesApi.post(`/users`, {username, name, avatar_url})
};

export const postComments = (review_id, body) => {
  return gamesApi.post(`/reviews/${review_id}/comments`, body).then(({ data }) => {
      return data;
    })
  };

export const deleteCommentByID = (comment_id) => {
  return gamesApi.delete(`/comments/${comment_id}`).catch((err) => {
    console.log(err);
  })
};

export const postReviews = (owner, title, review_body, designer, category) => {
  return gamesApi.post('/reviews').then(({ data }) => {
    return data;
  })
};
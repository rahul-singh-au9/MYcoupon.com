// import axios from "axios";

// const API = axios.create({baseURL: "http://localhost:3001/"});

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }

//   return req;
// });

// // FETCH ALL POSTS
// export const fetchPosts = () => API.get("/posts");


// // LIKE A POST
// export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

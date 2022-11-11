import axios from "axios";
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response=await github.get(`/search/users?${params}`)
  return response.data.items
};
const github = axios.create({
  baseURL: 'https://api.github.com/',
  headers:{Authorization: "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"}
})
//get user and repos
export const getUserAndRepos =async (login)=>{
  const [user,repos]=await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ])
  return {user:user.data ,repos:repos.data}
}

// export const getUser = async (login) => {
//   // setLoading();
//   const response = await fetch(`https://api.github.com/users/${login}`, {
//     headers: {
//       Authorization: "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",
//     },
//   });
//   const data = await response.json();
//   console.log(data);
//   return data
// }; 
// export const getUserRepos = async (login) => {
//   // setLoading();

//   const params = new URLSearchParams({
//     sort: "created",
//     per_page: 10,
//   });

//   const response = await fetch(
//     `https://api.github.com/users/${login}/repos?${params}`,
//     {
//       headers: {
//         Authorization: "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",
//       },
//     }
//   );

//   const data = await response.json();

//   return data
// };

import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([])
  // const [loading, setLoading] = useState(true)
  const initialState={
    users: [],
    user:{},
    repos: [],
    loading:false,
  }
  const [state,dispatch]=useReducer(githubReducer,initialState)

  // get initial users(testing purpose)
  // const fetchUsers = async () => {
  //   setLoading();
  //   const response = await fetch('https://api.github.com/users')

  //   const data = await response.json()
  //   console.log(data);
  //   dispatch({
  //     type:'GET_USERS',
  //     payload: data,
  //   })
  // }


  


// const setLoading=()=>dispatch({
//   type:'SET_lOADING',
// }
// )

// const handleClear=()=>dispatch({
//   type:'CLEAR_CALLED',
// })
  return (
    <GithubContext.Provider
      value={{
        // users:state.users,
        // loading:state.loading,
        // user:state.user,
        // repos:state.repos,
        ...state,
        dispatch,
        // getUserRepos,
        // searchUsers,
        // getUser,
        // setLoading,
        // handleClear,
        // fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
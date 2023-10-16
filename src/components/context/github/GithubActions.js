import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: ""
    }
})
// Testing purposes
export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })
    const res = await github.get(`/search/users?${params}`)
    return res.data.items
}


// Get user and repos
export const getUserAndRepos = async (login) => {
    // In order to make two requests in a function we need to make use of promise.All, passing an array of requestts
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])
    return { user: user.data, repos: repos.data }
}
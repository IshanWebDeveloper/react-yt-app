import axios from "axios"


const KEY = 'AIzaSyDfFV6BpjRwGFY0wBKgiP2UsVGOXeeH7wY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
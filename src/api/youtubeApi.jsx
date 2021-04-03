import axios from 'axios'
const KEY = 'AIzaSyCghlBYPCNibVNuBgeTF5H2r4-brQM0UUc'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})
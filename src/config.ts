export default {
    API_KEY: process.env.API_KEY || 'AIzaSyBG6Wu_B9TP-hB_ftu-_Z0CHv_rztbIHQY',
    getCategoryUrl: 'https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&id=1&hl=ru_RU&key=',
    getVideoListUrl: 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=UA&maxResults=50&key=',
    // videoId=VPsux3ntnqg&
    getTopCommentUrl: 'https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=4&order=relevance&key=',
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6389')
    }
}

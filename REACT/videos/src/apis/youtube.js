import axios from "axios";

const KEY = "AIzaSyDBtz-se4MHcK2VmeGQRPd2sJZYgV9EUdI";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
    }
});
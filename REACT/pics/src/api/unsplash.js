import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID fautpWXPonrgcCo75HN_ltXW33ANZ2SC0UycblIC8j4"
    }
});
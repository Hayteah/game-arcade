import axios from "axios"

export default axios.create(
    {
        baseURL:"https://api.rawg.io/api",
        params:{
            key: "596f2949c8874426a94826e952f4f7d3"
        }
    }
)
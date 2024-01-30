import axios from "axios"

export default axios.create(
    {
        baseURL:"https://api.rawg.io/api",
        params:{
            key: "869f60a6db5c4c34893009ca8cf39408"
        }
    }
)
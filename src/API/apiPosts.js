import axios from "axios"

export default class apiPosts{
    static async getALL() {
        try{
            const respons = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return respons.data
        }catch (e){
console.log(e);
        }

    }
}
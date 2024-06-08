import axios from "../../../src/API/axios";

export default class TopicAPI {
    static async get(id) {
        try {

            const res = await axios.get(`/topic/${id}`);

            return res.data.result;
        } catch (e) {
            return false;
        }

    }

    static async search(query) {
        try {
            const res = await axios.get(`/topic/search?q=${query}`);

            return res.data.result;
        } catch(e) {    
            return false;
        }
    }

    static async upload(name, json) {
        try {
            const res = await axios.post("/topic/upload", {
                name, json
            })

            return res.data.result;
        } catch(e) {
            return false;
        }
    }
}
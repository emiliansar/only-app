import axios from 'axios'

class PresService {
    async get() {
        try {
            const { data } = await axios.get('http://localhost:3000/presentation');

            return data;
        } catch (error) {
            throw error;
        }
    }
}

export const presService = new PresService()
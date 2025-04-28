import axios from 'axios';

class StockService{
    constructor() {
        this.apiClient =axios.create({
            baseURL: 'https://sheetdb.io/api/v1/11qn1azpsmff8'
        });
    }


async fetchData(sheetName) {
 try {
    const response =await this.apiClient.get(`?sheet=${sheetName}`);
    return response.data;
 }catch (error) {
    console.error('Error fetching data:', error);
    return [];
 }
}
}

export const stockService = new StockService();
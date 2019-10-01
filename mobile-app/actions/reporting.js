import axios from 'axios';
import { Platform } from 'react-native';

let url;

if (Platform.OS !== 'ios') {
  url = 'http://10.0.3.2:3000/api';
} else {
  url = 'http://localhost:3000/api';
}

axios.defaults.baseURL = url;

class Reporting {
  constructor(){
    this.path = `/api`;
  }
  
  async readAllReports(){
  try{
  const { data } = await axios.get(`${this.path}/readAll`); 
  }
  catch(e){
  throw e;
  }
  }
  async readReports(args){
  try {
      const res = await axios.post(`${this.path}/read`, { ...args });
      return res;
    } catch (e) {
      throw e;
    }
  }
  async createReport(args) {
    try {
      const res = await axios.post(`${this.path}/new`, { ...args });
      return res;
    } catch (e) {
      throw e;
    }
  }
  
}

export {
Reporting,
};


import axios from 'axios';

export const createData = (title, location, description, callback) => async () =>{
    try{
        const res = await axios.post('/create', {title,location,description});
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const readAllData = (callback) => async () =>{
    try{
        const res = await axios.get(`/readAll`);
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const readData = (location, callback) => async () =>{
    try{
        const res = await axios.get(`/read/${location}`);
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const updateData = (reportId,title,location,description,callback) => async () =>{
    try{
        const res = await axios.put(`/update/${reportId}`, {title,location,description});
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const deleteData = ({reportId}, callback) => async () =>{
    try{
        const res = await axios.delete(`/delete/${reportId}`);
        callback();
    }
    catch(err){
        console.log(err);
    }
};

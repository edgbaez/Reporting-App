import axios from 'axios';

export const createData = ({userId}, callback) => async (dispatch) =>{
    try{
        const res = await axios.post(`/create/${userId}`);
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const readAllData = (callback) => async (dispatch) =>{
    try{
        const res = await axios.get(`/readAll`);
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const readData = ({userId},callback) => async (dispatch) =>{
    try{
        const res = await axios.get(`/read/${userId}`);
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const updateData = ({userId},callback) => async (dispatch) =>{
    try{
        const res = await axios.put(`/update/${userId}`);
        //dispatch({ type: FETCH_USER, payload: res.data });
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const deleteData = ({userId}, callback) => async (dispatch) =>{
    try{
        const res = await axios.delete(`/delete/${userId}`);
        callback();
    }
    catch(err){
        console.log(err);
    }
};
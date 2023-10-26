import axios from 'axios';
import { GETDATA, LOADING, ERROR } from './actionTypes';


export const getData=(obj)=>(dispatch)=>{
    let {name, category, difficulty, limit}= obj;

    difficulty= difficulty.toLowerCase();

    if(category==="General Knowledge"){
        dispatch({type:LOADING})

        axios(`https://opentdb.com/api.php?amount=${limit}&category=9&difficulty=${difficulty}&type=multiple`)
        .then((res)=>{
            let dataSet={
                name,
                data:res.data.results
            }

            dispatch({type:GETDATA, payload:dataSet})
        })
        .catch((err)=>dispatch({type:ERROR}))
    }else if(category==="Sports"){
        dispatch({type:LOADING})

        axios(`https://opentdb.com/api.php?amount=${limit}&category=21&difficulty=${difficulty}&type=multiple`)
        .then((res)=>{
            let dataSet={
                name,
                data:res.data.results
            }

            dispatch({type:GETDATA, payload:dataSet})
        })
        .catch((err)=>dispatch({type:ERROR}))
    }else if(category==="Geography"){
        dispatch({type:LOADING})

        axios(`https://opentdb.com/api.php?amount=${limit}&category=22&difficulty=${difficulty}&type=multiple`)
        .then((res)=>{
            let dataSet={
                name,
                data:res.data.results
            }

            dispatch({type:GETDATA, payload:dataSet})
        })
        .catch((err)=>dispatch({type:ERROR}))
    }
}

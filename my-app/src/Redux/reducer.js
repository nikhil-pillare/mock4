import { GETDATA, ERROR, LOADING } from "./actionTypes";

const initialState={
    isLoading:false,
    isError:false,
    allData:[],
    data:[]
}

export const reducer=(state=initialState, action)=>{
       switch (action.type) {
        case LOADING:{
            return {...state, isLoading:true}
        }
        case ERROR:{
            return {...state, isLoading:false, isError:true}
        }
        case GETDATA:{
            return{
                ...state, isLoading:false, allData:[...state.allData, action.payload], data:action.payload.data
            }
        }
            
           
       
        default:
            {
                return{
                    ...state
                }
            }
       }
}
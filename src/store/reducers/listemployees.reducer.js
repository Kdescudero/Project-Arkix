import { LIST_EMPLOYEES, FAILURE, LOADING } from '../actions/listemployees.actions'

const initialState = {
   loading  : false,
   failure  : false,
   data     : []
};

export default (state = initialState, action)=>{
   switch(action.type){

      case  LIST_EMPLOYEES : {
         return {
            ...state,
            data : action.payload
         }
      }

      case  LOADING : {
         return {
            ...state,
            loading  :  action.payload,
         }
      }

      case  FAILURE : {
         return {
            ...state,
            failure  :  action.payload
         }
      }

      default : {
         return state
      }
   }
}

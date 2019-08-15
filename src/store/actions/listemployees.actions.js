import axios from 'axios';

export const LIST_EMPLOYEES = 'LIST_EMPLOYEES';
export const FAILURE = "FAILURE";
export const LOADING = "LOADING";

export const loading = (payload) =>({
   type : LOADING,
   payload
});

export const failure = ( payload ) =>({
   type : FAILURE,
   payload
});

export const getEmployees=()=> async (dispatch)=>{
   const url = "http://dummy.restapiexample.com/api/v1/employees";
   dispatch(loading(true));
   try {
      const response = await axios.get(url);
      if(response.status){
         dispatch(loading(false));
         dispatch({ type : LIST_EMPLOYEES, payload : response.data });
      }
   }catch (error) {
      dispatch(failure(error.message))
   }
};

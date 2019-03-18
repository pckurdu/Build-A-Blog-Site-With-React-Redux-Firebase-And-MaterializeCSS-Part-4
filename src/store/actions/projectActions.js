//We create action called createProject
export const createProject=(project)=>{
    return (dispatch,getState)=>{
        //asynchronous operation with dispatch.
        dispatch({type:'CREATE_PROJECT',project});
    }
}
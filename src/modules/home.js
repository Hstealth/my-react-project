//actions:表示应用中的各类动作或操作
export const  CHANGE_FOOTER = 'home/CHANGE_FOOTER'

//reducers
//更新state
const initialState = {
    footer: 0
}

export default (state = initialState,action) =>{
    switch(action.type){
        case CHANGE_FOOTER:
            return{
                ...state,
                footer: action.data
            };
        
        default:
            return state
    }
}

//mapDispatchToProps
//action创建函数,返回一个动作
//dispatch给store
export const changeFooter = (data) =>{
    return dispatch => {
        dispatch({
            type:CHANGE_FOOTER,
            data: data
        })
    }
}
//actions
export const MOVIE_DETAILS = 'details/MOVIE_DETAILS'

//reducers
const initialState = {
    detailsData: {
        "image":"",
        "id": "",
        "year":"",
        "genres":[],
        "title":"",
        "original_title":"",
        "countries":[],
        "casts":[],
        "directors":[],
        "mobile_url":"",
        "summary":""
    }

}

export default (state = initialState,action) => {
    switch(action.type){
        case MOVIE_DETAILS:
            return{
                ...state,
                detailsData:{
                    "image" : action.data.images.small,
                    "id" : action.data.id,
                    "year":action.data.year,
                    "genres":action.data.genres,
                    "title":action.data.title,
                    "original_title":action.data.original_title,
                    "countries":action.data.countries,
                    "casts":action.data.casts,
                    "directors":action.data.directors,
                    "mobile_url":action.data.mobile_url,
                    "summary":action.data.summary
                }
            }

        default:
            return state
    }
}


//mapDispatchToProps
export const getDetails = (data) =>{
    return dispatch => {
        dispatch({
            type:MOVIE_DETAILS,
            data:data
        })
    }
}
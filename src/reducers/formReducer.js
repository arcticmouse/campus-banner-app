import update from 'immutability-helper';
import {
    SET_NAME,
    SET_EMAIL,
    SET_DEPARTMENT,
    SET_ALT_NAME,
    SET_ALT_EMAIL,
    SET_ERROR,
    SET_RECAPTCHA, 
    POST_FORM_SUCCESS,
    POST_FORM_FAILURE  
} from './../actions/formAction';
  
const initialState = {
    name: undefined,
    email: undefined,
    department: undefined,
    alt_name: undefined,
    alt_email: undefined,
    items: [],
    start: undefined,
    end: undefined,
    error: undefined,
    success: undefined,
    response: undefined,
    recaptcha: undefined
};

export default function formReducer(state = initialState, action) {
    //console.log(action.type)
    switch(action.type){
        case SET_NAME:
            return update(state, {name: {$set:action.name}})

        case SET_EMAIL:
            return update(state, {email: {$set:action.email}})

        case SET_DEPARTMENT:
            return update(state, {department: {$set:action.dept}})   
            
        case SET_ALT_NAME:
            return update(state, {alt_name: {$set:action.alt_name}})

        case SET_ALT_EMAIL:
            return update(state, {alt_email: {$set:action.alt_email}})            

        case SET_ERROR:
            return update(state, {error: {$set:action.error}})   
            
        case SET_RECAPTCHA:
            return update(state, {recaptcha: {$set:action.recaptcha}}) 
            
        case POST_FORM_SUCCESS:
            return update(state, {success: {$set:true}})

        case POST_FORM_FAILURE:
            return update(state, {error: {$set:true}})

    default:
        // ALWAYS have a default case in a reducer
        return state;
    }
}
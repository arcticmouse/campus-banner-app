import 'isomorphic-fetch'

export const SET_NAME = "SET_NAME"

export const setName = name => ({
    type: SET_NAME,
    name
})

export const SET_EMAIL = "SET_EMAIL"

export const setEmail = email => ({
    type: SET_EMAIL,
    email
})

export const SET_DEPARTMENT = "SET_DEPARTMENT"

export const setDepartment = dept => ({
    type: SET_DEPARTMENT,
    dept
})

export const SET_ALT_NAME = "SET_ALT_NAME"

export const setAltName = alt_name => ({
    type: SET_ALT_NAME,
    alt_name
})

export const SET_ALT_EMAIL = "SET_ALT_EMAIL"

export const setAltEmail = alt_email => ({
    type: SET_ALT_EMAIL,
    alt_email
})

export const SET_ERROR = "SET_ERROR"

export const setError = error => ({
    type: SET_ERROR,
    error
})

export const SET_RECAPTCHA = "SET_RECAPTCHA"

export const setRecaptcha = recaptcha => ({
    type: SET_RECAPTCHA,
    recaptcha
})



//https://javascript.info/promise-chaining
function sendToBack(data) {
    let url = 'https://publicaffairs.berkeley.edu/campus-banners/filled.php'

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then(resp => { 
        
    })
    .catch(error => console.log(error))
}

export function postForm(rsvp) {
    return dispatch => {
        return sendToBack(rsvp, null)
        .then(resp => {
            dispatch(postFormSuccess(resp))
        })
        .catch(error => dispatch(postFormFailure(error)))
    }
}

export const POST_FORM_SUCCESS = "POST_FORM_SUCCESS"
export const POST_FORM_FAILURE = "POST_FORM_FAILURE"

export const postFormSuccess = response => ({
    type: POST_FORM_SUCCESS,
    payload: response
})

export const postFormFailure = error => ({
    type: POST_FORM_FAILURE,
    payload: error
})
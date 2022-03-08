This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run locally

Install packages (listed in package.json):

npm install --save-dev esm immutability-helper moment moment-range node-sass prop-types react react-datepicker react-dom react-google-maps react-google-recaptcha react-redux react-scripts react-thunk recompose redux redux-thunk superagent


run "npm start" 


open localhost:3000 in your browser


to make changes:

dl the repo, make the changes.

(php files in /public directory)

run "npm run build"

c/p /build directory contents into server



## TO DO

PHPMailer is using v5.2.25 to be compatible with php5.3, which the webfarm runs. update this ASAP when possible!

cant use http_response_code in filled.php, it is for php5.4+ and webfarm uses php5.3

cant use google calendar api on webfarm bc it is for php5.4+. using a google apps script that runs hourly to parse emails into events. would be best to switch to using the server to do this asap



## Notes

form data is sent to spa account campusbanners

marker info on google spreadsheet on spa account 

Uses pfdf php library to create pdf for download

![Map of software]
(https://publicaffairs.berkeley.edu/campus-banners/campusbannersapp.jpg)

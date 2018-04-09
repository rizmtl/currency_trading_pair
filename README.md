## Currency Trading Application
This application consists of a back-end Api server & a front-end react.js client. It simulates a simple trade for crypto currency.

Application behaviour:
- User account is pre-funded with $156.12 USD. 
- User can trade with any amount in USD to a maximum of available balance
- Market price of Bitcoin is fetched via public API
- Quote is returned based on Bitcoin price & USD amount entered by user
- Trade button will execute trade for Bitcoin

## Configuration
All packages and dependencies must be installed for both client & api server before they can be run.
Below are steps to configure both components

# Application Dependencies
* nodejs
* npm 
* create-react-app

## Client
### Developement Environment
* Navigate to client directory
* Install npm packages `npm install`
* Start application `npm start`

Dev environment will host application on port 3000. Api call however are proxied over port 3001.

### Production Build
* Navigate to client directory
* Install npm packages `npm install`
* Create build `npm run build`

This will create build pacakges that are served by the Api server

## Api Server
Steps to configure Api server:
* On root directory install npm packages `npm install`
* Start api server `npm start`

Api sever will start and listen on port 3001

**Note:**
*Build files are provided in this repo. After api server is started, they can be accessed at* `http://localhost:3001/`
# Craig's Donors: Social Networking for Charities and Their Generous Supporters

## Install Node.js
First install nvm (Node Version Manager) by running
```wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash```
from your terminal. If you are using windows, this command will only work from git-bash, not Powershell or anything else. If you do not have git-bash, see [nvm installation instructions](https://github.com/nvm-sh/nvm#install--update-script).
Then do `node --version` to confirm that you are running Node. As of this writing the latest recommended stable version is v12.18.2 LTS (i.e. Long Term Support).
Next install yarn package manager to assist with frontend/React dependencies: `npm install --global yarn`.

## Install dependencies:
From craigs-donors directory, do
```
npm install     # installs backend/server dependencies    
cd client       # change directory into ./craigs-donors/client
yarn            # installs frontend/client dependencies
```

This app consists of two concurrent servers: React.js runs one on 3000, and Express.js runs one on 5000.

## To launch Express.js server:
```npm run server```
```curl -i localhost:3000/hello```

## To launch React.js frontend server:
```npm run client```

## To run both concurrently for full app features:
```npm run dev```

## To build and package the app for deployment:
```npm run heroku-postbuild```
TODO configure for Netlify, not Heroku?

## To test DynamoDB endpoint with Node.js script:
Open `test/testGetItem.js` then **edit the `params` variable as necessary for your particular dynamodb configuration, i.e. tables, primary keys, etc.**
Finally, 
```node test/testGetItem.js```
should return JSON.

See `scripts` in `package.json` for details on these launch scripts.

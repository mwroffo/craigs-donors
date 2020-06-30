# craigs-donors

## test Express.js endpoint:
```npm run server```
```curl -i localhost:3000/hello```

## launch React frontend:
```npm run client```

## full dev run:
```npm run dev```

## Test Node/dynamodb link:
Open `test/testGetItem.js` then **edit the `params` variable as necessary for your particular dynamodb configuration, i.e. tables, primary keys, etc.**
Finally, 
```node test/testGetItem.js```
should return JSON.

See `scripts` in `package.json` for details on these launch scripts.
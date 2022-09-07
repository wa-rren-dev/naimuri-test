# Naimuri Github API task

Thank you for the opportunity to complete this task. I enjoyed working on it and look foward to discussing what's here.

## To run locally

For expediency, I haven't prepared a 'build' process so please run the solution in dev mode via the following steps:

- `npm i`
- `npm start`

`postinstall` should install the dependencies in `/server`. App should open in browser 
locally at port `3000`. CRA can take a moment to get going.

## Structure

`create-react-app` for the client with an `express` backend just for the purpose of caching Github's responses (I was exceeding the anonymous API calls during while developing and didn't want to start putting API tokens in env files etc!). With more time I would have more cleanly separated the client and server directories.

## Testing

- `npm test` will run some basic tests on the client


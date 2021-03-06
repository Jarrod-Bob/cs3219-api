# cs3219-api

## Task B1 Instructions

In order to setup and run task B1, you would need to do the following:

1. Download node.js
2. Clone this repo via the command `git clone repo-name`
3. Open the directory at its root folder
4. Install npm packages via `npm install`
5. run `npm start` to get the application up
6. For Localhost: You may then use Postman to start firing to `http://localhost:8080/api/*`
7. For live site: You may send your Postman requests to `https://lvfpfvi207.execute-api.ap-southeast-1.amazonaws.com/dev/`

## Task B2 Instructions

In order to do your testing and view automated CI testing, you would need to do the following:

1. If you have already done steps 1-4 of Task B1, you may skip this step.
2. run the command `npm run test` to see the test run on mocha/chai.

For Travis CI automated testing:

1. Push the cloned repository to GitHub
2. Login to [Travis CI](https://travis-ci.com/)
3. Then, make a change that will not break the application and push it to the repository. For ease, you may just add or remove small parts of this README file.
4. Notice how the testing runs via TravisCI.

## Task B3 Instructions

You may access the api link for Task B3 here https://lvfpfvi207.execute-api.ap-southeast-1.amazonaws.com/dev/

In order to see how the AWS Lambda deployment works, you can set up your serverless account according to the instructions and also ensure that you have AWS IAM roles setup accordingly.

Then you just have to push this and it will automatically trigger the npm run deploy from travis which in turn runs serverless deploy which will deploy it to AWS Lambda.

## Task B4 Instructions

The repository and instructions for Task B4 are in [another repository](https://github.com/Jarrod-Bob/cs3219-app) for ease of compiling and deploying to live sites.

class Jestastic {
  constructor(globalConfig, options) {
    this._gloablConfig = globalConfig;
    this._options = options;
  }

  // See types: https://github.com/facebook/jest/blob/master/types/TestRunner.js
  // Methods should return Promises

  onRunStart(results, options) {
    console.log("onRunStart");
    // console.log("results");
    // console.log(results);
    // console.log("options");
    // console.log(options);
  }

  onTestStart(test) {
    // console.log("onTestStart");
    // console.log(test);
  }

  onTestResult(test, testResult, aggregatedResult) {
    // console.log("onTestResult");
    // console.log(testResult.testResults);
  }

  onRunComplete(contexts, results) {
    console.log("onRunComplete");
    // console.log(results);
    console.log(results.testResults[0].testResults);
  }

  getLastError() {}
}

module.exports = Jestastic;

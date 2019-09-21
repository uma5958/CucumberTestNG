$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login to application",
  "description": "",
  "id": "test-login-to-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-login-to-application;test-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open browser and navigate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-login-to-application;test-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "test-login-to-application;test-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin",
        "manager"
      ],
      "line": 11,
      "id": "test-login-to-application;test-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-login-to-application;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open browser and navigate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters valid \"admin\" and \"manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.open_browser_and_navigate_to_url()"
});
formatter.result({
  "duration": 12468005400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 19
    },
    {
      "val": "manager",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.user_enters_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 2365373000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 56321500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 859925800,
  "status": "passed"
});
});
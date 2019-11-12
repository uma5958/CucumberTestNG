$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DDTusingDataTables.feature");
formatter.feature({
  "line": 1,
  "name": "Data driven testing with Data tables",
  "description": "",
  "id": "data-driven-testing-with-data-tables",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login using data tables",
  "description": "",
  "id": "data-driven-testing-with-data-tables;login-using-data-tables",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open browser and navigate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters valid username and password",
  "rows": [
    {
      "cells": [
        "admin",
        "manager"
      ],
      "line": 6
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DDTusingDataTables.open_browser_and_navigate_to_url()"
});
formatter.result({
  "duration": 15470328400,
  "status": "passed"
});
formatter.match({
  "location": "DDTusingDataTables.user_enters_valid_username_and_password(DataTable)"
});
formatter.result({
  "duration": 4197047300,
  "status": "passed"
});
formatter.match({
  "location": "DDTusingDataTables.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 960732000,
  "status": "passed"
});
formatter.match({
  "location": "DDTusingDataTables.close_the_browser()"
});
formatter.result({
  "duration": 1094950000,
  "status": "passed"
});
});
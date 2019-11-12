Feature: Data driven testing with Data tables

  Scenario: Login using data tables
    Given Open browser and navigate to url
    When User enters valid username and password
      | admin | manager |
    Then User should be able to login
    Then Close the browser

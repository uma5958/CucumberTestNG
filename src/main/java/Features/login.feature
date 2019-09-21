Feature: Test login to application 

Scenario Outline: Test login with valid credentials 
	Given Open browser and navigate to url 
	When User enters valid "<username>" and "<password>" 
	Then User should be able to login 
	Then Close the browser
	
	Examples: 
		|username|password|
		| admin  | manager|
 
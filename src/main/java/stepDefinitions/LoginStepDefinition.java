package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.Reporter;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	/*WebDriver driver;
	
	@Given("^Open browser and navigate to url$")
	public void open_browser_and_navigate_to_url() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://localhost/login.do");
		driver.manage().window().maximize();
	}

	@When("^User enters valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_valid_username_and_password(String un, String pw) throws Throwable {
		driver.findElement(By.xpath("//input[contains(@id,'username')]")).sendKeys(un);
	    driver.findElement(By.xpath("//input[contains(@name,'pwd')]")).sendKeys(pw);
	    driver.findElement(By.xpath("//div[text()='Login ']")).click();
	    Thread.sleep(2000);
	}

	@Then("^User should be able to login$")
	public void user_should_be_able_to_login() throws Throwable {
		boolean logout = driver.findElement(By.xpath("//a[@href='/logout.do'][contains(.,'Logout')]")).isDisplayed();
		Assert.assertTrue(logout, "Login in unsuccessful");
		Reporter.log("Login successful", true);
	}
	
	@Then("^Close the browser$")
	public void close_the_browser() throws Throwable {
	    driver.quit();
	}*/
}

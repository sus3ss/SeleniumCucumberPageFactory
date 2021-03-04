package steps;

import java.util.List;

import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.actions.CarSearchPageActions;
import pages.actions.CarsGuideHomePageActions;
import utils.SeleniumDriver;


public class UsedSearchCarsSteps  {
	CarsGuideHomePageActions carsGuideHomePageActions=new CarsGuideHomePageActions();
	CarSearchPageActions carSearchPageActions =new CarSearchPageActions ();
	@When("^Click on submenulink$")
	public void Click_on_submenulink(List<String> list) throws Throwable {
		String submenulink=list.get(2);
		System.out.println("SubMenu selected is "+submenulink);
		carsGuideHomePageActions.clickOnUsedSearchCarsMenu();;
	   
	}
	@And("^select carmodel$")
	public void select_carmodel(List<String> list) throws Throwable {
		String carmodel=list.get(7);
		System.out.println("Selected car model is "+carmodel);
		carSearchPageActions.selectCarModel(carmodel);
	}
	@Then("^I should see list of searched used cars$")
	public void I_should_see_list_of_searched_used_cars(){
		System.out.println("Used cars list found");
	}
	
	@Then("^And the page title should be \"([^\"]*)\"$")
	public void and_the_page_title_should_be(String usedcarpagetitle ) throws Throwable {
		String actualusedcarpagetitle=SeleniumDriver.getDriver().getTitle();
		System.out.println(usedcarpagetitle);
		System.out.println(actualusedcarpagetitle);
		Assert.assertEquals(actualusedcarpagetitle,usedcarpagetitle);
	
	}
}

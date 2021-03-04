package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.CarSearchPageLocators;
import utils.SeleniumDriver;

public class CarSearchPageActions {
	CarSearchPageLocators carSearchPageLocators=null;
	
     public CarSearchPageActions() {
    	 this.carSearchPageLocators=new CarSearchPageLocators();
    	 PageFactory.initElements(SeleniumDriver.getDriver(), carSearchPageLocators);
     }
     
     public void selectCarMake(String carBrand) {
     Select selectCarMaker=new Select(carSearchPageLocators.carsMakeDropDown);
     selectCarMaker.selectByVisibleText(carBrand);
   		 
     } 		
     public void selectCarModel(String carModel) {
         Select selectCarModel=new Select(carSearchPageLocators.carsModelDropDown);
         selectCarModel.selectByVisibleText(carModel);
     }
     
     public void selectLocation(String location) {
         Select selectLocation=new Select(carSearchPageLocators.carsLocationlDropDown);
         selectLocation.selectByVisibleText(location);
     }
     public void selectCarPrice(String carPrice) {
         Select selectCarPrice=new Select(carSearchPageLocators.carspriceDropDown);
         selectCarPrice.selectByVisibleText(carPrice);
     }
     public void clickOnFindMyNextCarButton() {
    	 carSearchPageLocators.findMyNextCarButton.click();
     }
}

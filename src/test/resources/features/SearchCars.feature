@Search-Cars
Feature: Acceptance testing to validate search cars functionality is working
     In order to validate that
     the search cars page is working fine
     we will do the acceptance testing
 
@Search-Cars-Positive
Scenario: Validate search cars page
Given I am on the Home Page "https://www.carsguide.com.au" of CarsGuide website
When I move to the menu
    | Menu          |
    | Cars for sale |   
    | Sell My Car   |
    And Click on "Search Cars" link
    And select carbrand as "BMW" from AnyMake dropdown
    And select carmodel as "1 Series" from SelectModel dropdown
    And select location as "NT - All" from SelectLocation dropdown
    And Select price as "$1,000" from price dropdown
    And click on Find_My_Next_Car button
Then I should see list of searched cars
And the page title should be "Bmw 2 Series Under 1000 for Sale NT | carsguide"    
	
    
    

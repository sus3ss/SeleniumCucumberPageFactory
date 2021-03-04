@Used-Search-Cars 
Feature: Acceptance testing to validate used search cars functionality is working 
	In order to validate that
     the Used search cars page is working fine
     we will do the acceptance testing
     
@Used-Search-Cars-Positive 
Scenario: Validate used search cars page 
	Given I am on the Home Page "https://www.carsguide.com.au" of CarsGuide website 
	When I move to the menu 
		| Menu          |
		| Cars for sale |   
		| Sell My Car   |
	
	And Click on submenulink 
	   |submenulink    |
	   |Search Cars    |
	   |Used           |
	   |New            | 
	    
	And select carbrand as "Audi" from AnyMake dropdown 
	And select carmodel 
	   |carModel|
	   |A1      |
	   |A3      |
	   |A4      |
	   |A5      |
	   |A6      |
	   |A7      |
	   |A8      |
	And select location as "NSW - Sydney" from SelectLocation dropdown 
	And Select price as "$2,500" from price dropdown 
	And click on Find_My_Next_Car button
	Then I should see list of searched used cars
	And And the page title should be "Used Audi A8 Under 2500 for Sale Sydney NSW | carsguide"
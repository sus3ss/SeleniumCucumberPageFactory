$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchCars.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate search cars functionality is working",
  "description": "   In order to validate that\r\n   the search cars page is working fine\r\n   we will do the acceptance testing",
  "id": "acceptance-testing-to-validate-search-cars-functionality-is-working",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 2593264900,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Validate search cars page",
  "description": "",
  "id": "acceptance-testing-to-validate-search-cars-functionality-is-working;validate-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the Home Page \"https://www.carsguide.com.au\" of CarsGuide website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 11
    },
    {
      "cells": [
        "Cars for sale"
      ],
      "line": 12
    },
    {
      "cells": [
        "Sell My Car"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Click on \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select carbrand as \"BMW\" from AnyMake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select carmodel as \"1 Series\" from SelectModel dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select location as \"NT - All\" from SelectLocation dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select price as \"$1,000\" from price dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Find_My_Next_Car button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see list of searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "the page title should be \"Bmw 1 Series Under 1000 for Sale NT | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_Page_of_CarsGuide_website(String)"
});
formatter.result({
  "duration": 18905854100,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 194632500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 10
    }
  ],
  "location": "SearchCarsSteps.click_on_link(String)"
});
formatter.result({
  "duration": 465580400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carbrand_as_from_AnyMake_dropdown(String)"
});
formatter.result({
  "duration": 12048891800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carmodel_as_from_SelectModel_dropdown(String)"
});
formatter.result({
  "duration": 186218500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - All",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_location_as_from_SelectLocation_dropdown(String)"
});
formatter.result({
  "duration": 173545000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,000",
      "offset": 17
    }
  ],
  "location": "SearchCarsSteps.select_price_as_from_price_dropdown(String)"
});
formatter.result({
  "duration": 182905800,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "duration": 8801341000,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_should_see_list_of_searched_cars()"
});
formatter.result({
  "duration": 108200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series Under 1000 for Sale NT | carsguide",
      "offset": 26
    }
  ],
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 12753600,
  "status": "passed"
});
formatter.after({
  "duration": 167100,
  "status": "passed"
});
formatter.uri("UsedCarsSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate used search cars functionality is working",
  "description": "In order to validate that\r\n   the Used search cars page is working fine\r\n   we will do the acceptance testing",
  "id": "acceptance-testing-to-validate-used-search-cars-functionality-is-working",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Used-Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 93200,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Validate used search cars page",
  "description": "",
  "id": "acceptance-testing-to-validate-used-search-cars-functionality-is-working;validate-used-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Used-Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the Home Page \"https://www.carsguide.com.au\" of CarsGuide website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 11
    },
    {
      "cells": [
        "Cars for sale"
      ],
      "line": 12
    },
    {
      "cells": [
        "Sell My Car"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Click on submenulink",
  "rows": [
    {
      "cells": [
        "submenulink"
      ],
      "line": 16
    },
    {
      "cells": [
        "Search Cars"
      ],
      "line": 17
    },
    {
      "cells": [
        "Used"
      ],
      "line": 18
    },
    {
      "cells": [
        "New"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select carbrand as \"Audi\" from AnyMake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select carmodel",
  "rows": [
    {
      "cells": [
        "carModel"
      ],
      "line": 23
    },
    {
      "cells": [
        "A1"
      ],
      "line": 24
    },
    {
      "cells": [
        "A3"
      ],
      "line": 25
    },
    {
      "cells": [
        "A4"
      ],
      "line": 26
    },
    {
      "cells": [
        "A5"
      ],
      "line": 27
    },
    {
      "cells": [
        "A6"
      ],
      "line": 28
    },
    {
      "cells": [
        "A7"
      ],
      "line": 29
    },
    {
      "cells": [
        "A8"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "select location as \"NSW - Sydney\" from SelectLocation dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Select price as \"$2,500\" from price dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "click on Find_My_Next_Car button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see list of searched used cars",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "And the page title should be \"Used Audi A8 Under 2500 for Sale Sydney NSW | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_Page_of_CarsGuide_website(String)"
});
formatter.result({
  "duration": 13736945700,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 216651000,
  "status": "passed"
});
formatter.match({
  "location": "UsedSearchCarsSteps.Click_on_submenulink(String\u003e)"
});
formatter.result({
  "duration": 21223284600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carbrand_as_from_AnyMake_dropdown(String)"
});
formatter.result({
  "duration": 258509000,
  "status": "passed"
});
formatter.match({
  "location": "UsedSearchCarsSteps.select_carmodel(String\u003e)"
});
formatter.result({
  "duration": 199728900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_location_as_from_SelectLocation_dropdown(String)"
});
formatter.result({
  "duration": 148024900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,500",
      "offset": 17
    }
  ],
  "location": "SearchCarsSteps.select_price_as_from_price_dropdown(String)"
});
formatter.result({
  "duration": 165513400,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "duration": 17685786100,
  "status": "passed"
});
formatter.match({
  "location": "UsedSearchCarsSteps.I_should_see_list_of_searched_used_cars()"
});
formatter.result({
  "duration": 122900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Audi A8 Under 2500 for Sale Sydney NSW | carsguide",
      "offset": 30
    }
  ],
  "location": "UsedSearchCarsSteps.and_the_page_title_should_be(String)"
});
formatter.result({
  "duration": 52989900,
  "status": "passed"
});
formatter.after({
  "duration": 219300,
  "status": "passed"
});
});
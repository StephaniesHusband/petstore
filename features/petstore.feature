Feature: Pet Store Pricing
   As a customer
   I want to be told the price of animals
   So that I can make purchasing decisions

   Scenario Outline: Bulk Pet Searches
      Given a <pet> costs <price>
      When I enter <pet> and search for price
      Then the result should be <price> dollars

   Examples:
      | pet  | price |
      | Dog  | 23    |
      | Cat  | 13    |
      | Fish | 20    |

   Scenario Outline: Discount Rate
      Given a customer has <percent> <discountType> off
      And a <pet> costs <price>
      When I enter <pet> and search for price
      Then the result should be <discountedPrice> dollars

   Examples:
      | pet  | percent | price | discountType | discountedPrice |
      | Cat  | 10      | 35    | percent      | 31.50           |
      | Fish | 2       | 5     | dollars      | 3               |

  Scenario: Pet shop orders
     Given a Tiger costs 100 dollars
     And a Gerbil costs 2 dollars
     When I order 1 Tiger
     And I order 4 Gerbil
     Then the result should be 108 dollars

  Scenario: Animal Tax
     Given the tax on animals is 10 percent
     And a Gerbil costs 1 dollar
     When I enter Gerbil and search for price
     Then the result should be 1.10 dollars

  Scenario: Age Appropriate
     Given a Tiger is Dangerous
     And a Tiger costs 100 dollars
     And you have to be 21 years old to buy a Dangerous animal
     And the customer is 12 years old
     When I order 1 Tiger
     Then the result should be "You Are Too Young"

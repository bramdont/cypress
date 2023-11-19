Feature: End to end Ecommerce validation

    This feature will do application regression for an Ecommerce application


    Scenario: Ecommerce product delivery
    Given I open Ecommerce page
    When I add items to cart
    And Validate the total prices
    Then select the country submit and verify Thankyou

    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
    Then validate the form behavior
    And select the Shop Page
    
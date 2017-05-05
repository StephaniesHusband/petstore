var {defineSupportCode} = require("cucumber");

defineSupportCode(function({Given, When, Then}) {
   Given(/^a (.*) costs (.*)/, function(pet, cost) {
      return this.petCosts(pet, cost);
   });

   When(/^I enter (.*) and search for price$/, function(pet) {
      return this.iEnterPetAndSearchForPrice(pet);
   });

   When(/^I order (.*) (.*)$/, function(count, pet) {
      return this.whenIorder(count, pet);
   });

   Then(/^the result should be (.*) dollars/, function(cost) {
      return this.theResultShouldBe(cost);
   });

   Given(/^a customer has (.*) (.*) off$/, function(amount, type) {
      return this.setDiscount(amount, type);
   });

   Given(/^the tax on animals is (.*) percent$/, function(tax) {
      return "pending";
   });

   Given(/^a (.*) is (.*)$/, function(pet, clazz) {
      return "pending";
   });

   Given(/^you have to be (.*) years old to buy a (.*) animal$/, function() {
      return "pending";
   });

   Given(/^the customer is (.*) years old$/, function() {
      return "pending";
   });

   Then("the result should be {stringInDoubleQuotes}", function(string) {
      return "pending";
   });
});

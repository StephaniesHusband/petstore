var {defineSupportCode} = require("cucumber");

defineSupportCode(function({Given, When, Then}) {
   When(/^I enter (.*) and search for price$/, function(pet) {
      return this.iEnterPetAndSearchForPrice(pet);
   });

   When(/^I order (.*) (.*)$/, function(count, pet) {
      return this.whenIorder(count, pet);
   });

   Given(/^a (.*) costs (.*)/, function(pet, cost) {
      return this.petCosts(pet, cost);
   });

   Given(/^a customer has (.*) (.*) off$/, function(amount, type) {
      return this.setDiscount(amount, type);
   });

   Given(/^the tax on animals is (.*) percent$/, function(tax) {
      return this.setTax(tax);
   });

   Given(/^a (.*) is (.*)$/, function(pet, characteristic) {
      return this.setPetCharacteristic(pet, characteristic);
   });

   Given(/^you have to be (.*) years old to buy a (.*) animal$/, function(age, characteristic) {
      return this.setCharacteristicAge(characteristic, age);
   });

   Given(/^the customer is (.*) years old$/, function(age) {
      return this.setCustomerAge(age);
   });

   Then(/^the result should be "?([^"]*)"?/, function(result) {
      return this.theResultShouldBe(result);
   });
});

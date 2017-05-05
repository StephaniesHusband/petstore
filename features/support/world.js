var {assert} = require("chai");
var {defineSupportCode} = require("cucumber");
var PetstorePricing = require("../../js/petstorepricing");
var PetstorePricingSteps = function() {};

var psp = new PetstorePricing();

PetstorePricingSteps.prototype.petCosts = function(pet, cost) {
   psp.setPetCost(pet, cost);
};

PetstorePricingSteps.prototype.iEnterPetAndSearchForPrice = function(pet) {
   return psp.addToOrder(1, pet);
};

PetstorePricingSteps.prototype.theResultShouldBe = function(cost) {
   assert.equal(cost, psp.getTotalCost());
};

PetstorePricingSteps.prototype.whenIorder = function(count, pet) {
   return psp.addToOrder(parseInt(count), pet);
};

PetstorePricingSteps.prototype.reset = function() {
   return psp.reset();
};

PetstorePricingSteps.prototype.setDiscount = function(amount, type) {
   return psp.setDiscount(amount, type);
};

//--------------
defineSupportCode(function({setWorldConstructor}) {
   setWorldConstructor(PetstorePricingSteps)
})

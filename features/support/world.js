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

PetstorePricingSteps.prototype.theResultShouldBe = function(result) {
   var total = psp.getOrderResult();

   if (isNaN(total)) {
      assert.equal(result, total);
   }
   else {
      result = parseFloat(result);
      assert.equal(result, total);
   }
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

PetstorePricingSteps.prototype.setTax = function(tax) {
   return psp.setTax(tax);
};

PetstorePricingSteps.prototype.setPetCharacteristic = function(pet, characteristic) {
   return psp.setPetCharacteristic(pet, characteristic);
};

PetstorePricingSteps.prototype.setCharacteristicAge = function(characteristic, age) {
   return psp.setCharacteristicAge(characteristic, age);
};

PetstorePricingSteps.prototype.setCustomerAge = function(age) {
   return psp.setCustomerAge(age);
};

//--------------
defineSupportCode(function({setWorldConstructor}) {
   setWorldConstructor(PetstorePricingSteps)
})

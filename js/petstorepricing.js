module.exports = PetstorePricing;

function PetstorePricing() {};

PetstorePricing.prototype.petCosts = {}; 
PetstorePricing.prototype.petOrder = [];
PetstorePricing.prototype.orderDiscount = {};

PetstorePricing.prototype.setPetCost = function(pet, cost) {
   this.petCosts[pet] = parseFloat(cost);
};

PetstorePricing.prototype.getPetCost = function(pet) {
   return this.petCosts[pet];
};

PetstorePricing.prototype.setTax = function(tax) {
   return this.taxRate = parseFloat(tax);
};

PetstorePricing.prototype.setDiscount = function(amount, type) {
   this.orderDiscount = {
      amount: parseFloat(amount),
      type: type
   };
};
PetstorePricing.prototype.getDiscount = function(amount, type) {
   return this.orderDiscount.amount + " " + this.orderDiscount.type;
};

PetstorePricing.prototype.addToOrder = function(count, pet) {
   while (count--) {
      this.petOrder.push(this.getPetCost(pet));
   }
};

// Return the total cost of order with discount applied (if any)
PetstorePricing.prototype.getTotalCost = function() {
   var total = this.petOrder.reduce((a, b) => a + b, 0);

   if (this.orderDiscount) {
      if (this.orderDiscount.type === "percent") {
         total = total - (total * (this.orderDiscount.amount/100));
      }
      else if (this.orderDiscount.type === "dollars") {
         total = total - this.orderDiscount.amount;
      }
   }

   if (this.taxRate) {
      total = total + (total * (this.taxRate/100));
   }

   return total;
};

PetstorePricing.prototype.reset = function() {
   this.petOrder = [];
   this.orderDiscount = {};
};

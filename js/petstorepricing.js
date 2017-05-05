module.exports = PetstorePricing;

function PetstorePricing() {};

PetstorePricing.prototype.petTable = {};             // { Pet -> { cost, characteristics:[] } }
PetstorePricing.prototype.characteristicTable = {};  // { Dangerous -> {minimumAge} }
PetstorePricing.prototype.customer = undefined;      // { age, order:[] }
PetstorePricing.prototype.orderDiscount = {};        // { amount, type }

PetstorePricing.prototype.addPet = function(pet) {
   if (!(pet in this.petTable)) {
      this.petTable[pet] = {
         cost: -1,
         characteristics: []
      };
   }
};

PetstorePricing.prototype.addCharacteristic = function(characteristic) {
   if (!(characteristic in this.characteristicTable)) {
      this.characteristicTable[characteristic] = {
         minimumAge: 0 
      };
   }
};

PetstorePricing.prototype.setPetCost = function(pet, cost) {
   this.addPet(pet);

   this.petTable[pet].cost = parseFloat(cost);
};

PetstorePricing.prototype.setPetCharacteristic = function(pet, characteristic) {
   this.addPet(pet);

   this.petTable[pet].characteristics.push(characteristic);
};

PetstorePricing.prototype.getPetCost = function(pet) {
   if (pet in this.petTable) {
      return this.petTable[pet].cost;
   }
};

PetstorePricing.prototype.getPetCharacteristics = function(pet) {
   if (pet in this.petTable) {
      return this.petTable[pet].characteristics;
   }

   return [];
};

PetstorePricing.prototype.setCharacteristicAge = function(characteristic, age) {
   this.addCharacteristic(characteristic);

   this.characteristicTable[characteristic].minimumAge = parseInt(age);
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
   this.verifyCustomer();

   this.customer.order.push({
      numPets: parseInt(count),
      typePet: pet
   });
};

PetstorePricing.prototype.verifyCustomer = function(age) {
   if (!this.customer) {
      this.customer = {
         age: 0,
         order: []
      };
   }
};

PetstorePricing.prototype.setCustomerAge = function(age) {
   this.verifyCustomer();

   this.customer.age = parseInt(age);
};

// Return the total cost of order with discount applied (if any)
PetstorePricing.prototype.getOrderResult = function() {
   var me = this;
   var total;
   var tooYoung;

   // if age given, we must check the minimumAge requirement on all their pets ordered
   if (this.customer.age) {
      tooYoung = this.customer.order.some(ordr => {
         return this.petTable[ordr.typePet].characteristics.some(chr => {
            return this.customer.age < this.characteristicTable[chr].minimumAge;
         });
      });
   }

   if (!tooYoung) {
      total = this.customer.order
         .map(row => this.getPetCost(row.typePet)*row.numPets)
         .reduce((a, b) => a + b, 0);

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
   }
   else {
      total = "You Are Too Young";
   }

   return total;
};

PetstorePricing.prototype.reset = function() {
   this.customer = undefined;
   this.orderDiscount = {};
};

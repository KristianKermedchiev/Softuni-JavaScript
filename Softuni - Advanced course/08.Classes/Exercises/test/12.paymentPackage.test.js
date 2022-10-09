let { assert } = require("chai");
let PaymentPackage = require("../12.paymentPackage");

describe("tests for PaymentPackage", () => {
  describe("created instance", () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage("Kris", 10);
    });
    it("should return correct name", () => {
      assert.equal(paymentPackage._name, "Kris", "name is correct");
    });

    it("should return correct value", () => {
      assert.equal(paymentPackage._value, 10, "value is correct");
    });

    it("should return correct VAT", () => {
      assert.equal(paymentPackage._VAT, 20, "default value is set correctly");
      assert.equal(
        typeof paymentPackage._VAT,
        "number",
        "vat is correcrt type"
      );
    });

    it("should return correct Active status", () => {
      assert.equal(
        paymentPackage._active,
        true,
        "active status must have initial value of true"
      );
      assert.equal(
        typeof paymentPackage._active,
        "boolean",
        "must be true/false"
      );
    });
  });
  describe("tests for getters", () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage("Kris", 10);
    });
    it("instance should return correct name", () => {
      assert.equal(paymentPackage.name, "Kris");
    });
    it("should return correct value", () => {
      assert.equal(paymentPackage.value, 10);
    });
    it("tests vat value", () => {
      assert.equal(paymentPackage.VAT, 20);
    });
    it("tests active", () => {
      assert.equal(paymentPackage.active, true);
    });
  });
  describe("tests for setters", () => {
    it("set incorrect name", () => {
      assert.throws(() => {
        new PaymentPackage(10, 10);
      }, "Name must be a non-empty string");
    });
    it("set empty name", () => {
      assert.throws(() => {
        new PaymentPackage("", 10);
      }, "Name must be a non-empty string");
    });
    it("set correct name", () => {
      let paymentPackage = new PaymentPackage("Kris", 10);
      assert.equal(paymentPackage.name, "Kris");
      paymentPackage.name = "Gosho";
      assert.equal(paymentPackage.name, "Gosho");
    });
    it("set incorrect value type", () => {
      assert.throws(() => {
        new PaymentPackage("Kris", "10");
      }, "Value must be a non-negative number");
    });
    it("set negative value", () => {
      assert.throws(() => {
        new PaymentPackage("Kris", -10);
      }, "Value must be a non-negative number");
    });
    it("set correct value", () => {
      let paymentPackage = new PaymentPackage("Kris", 10);
      assert.equal(paymentPackage.value, 10);
      paymentPackage.value = 50;
      assert.equal(paymentPackage.value, 50);
      paymentPackage.value = 0;
      assert.equal(paymentPackage.value, 0);
    });

    it("set incorrect VAT type", () => {
      let paymentPackage = new PaymentPackage("Kris", 10);
      assert.throws(() => {
        paymentPackage.VAT = "Gosho";
      }, "VAT must be a non-negative number");
    });
    it("set negative value", () => {
      let paymentPackage = new PaymentPackage("Kris", 10);
      assert.throws(() => {
        paymentPackage.VAT = -10;
      }, "VAT must be a non-negative number");
    });
    it("set correct value", () => {
      let paymentPackage = new PaymentPackage("Kris", 10);
      assert.equal(paymentPackage.VAT, 20);
      paymentPackage.VAT = 100;
      assert.equal(paymentPackage.VAT, 100);
    });

    it("set incorrect Active type", () => {
      let paymentPackage = new PaymentPackage("Kris", 10);
      assert.throws(() => {
        paymentPackage.active = "Gosho";
      }, "Active status must be a boolean");
    });
    it("set correct value", () => {
      let paymentPackage = new PaymentPackage("Kris", 10);
      assert.equal(paymentPackage.active, true);
      paymentPackage.active = false;
      assert.equal(paymentPackage.active, false);
    });

    describe("toString tests", () => {
      let paymentPackage;
      beforeEach(() => {
        paymentPackage = new PaymentPackage("Kris", 10);
      });
      it('tests active state', () => {
        const output = [
            `Package: Kris`,
            `- Value (excl. VAT): 10`,
            `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
        ].join('\n');
        assert.equal(paymentPackage.toString(), output)
      });
      it('tests not-active state', () => {
        const output = [
            `Package: Kris (inactive)`,
            `- Value (excl. VAT): 10`,
            `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
        ].join('\n');
        paymentPackage.active = false;
        assert.equal(paymentPackage.toString(), output)
      });

    });
  });
});
const { expect } = require('@wdio/globals')

const CheckoutPage = require("../pageobjects/checkout.page")

describe("Chekout", async () => {
    it("User successful checkout the produk", async () => {
        await new CheckoutPage().open()

        await new CheckoutPage().checkoutAct()

        await expect($('.header-amount')).toHaveTextContaining("Rp20.000")
    })
})
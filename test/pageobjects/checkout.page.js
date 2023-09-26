const Page = require("./page")

class CheckoutPage extends Page {

    get buyButton() {
        return $('.btn.buy')
    }

    get customerNameModal() {
        return $("data-reactid=['.0.0.1.0.3.0.0.0.1.0']")
    }

    get customerEmailModal() {
        return $("data-reactid=['.0.0.1.0.3.0.0.1.1.0']")
    }

    get customerPhoneModal() {
        return $("data-reactid=['.0.0.1.0.3.0.0.2.1.0']")
    }

    get checkoutButton() {
        return $("data-reactid=['.0.0.1.1.0']")
    }

    async checkoutAct() {
        await this.buyButton.click()
        await this.customerNameModal.setValue("Test 123")
        await this.customerEmailModal.setValue("test@test.com")
        await this.customerPhoneModal.setValue("12345678")
        
        await this.checkoutButton().click()
    }

    open() {
        return super.open()
    }
}

module.exports = CheckoutPage
import {Customer} from "./customer";

export function getCreditLimit() {
    return 50000;
}

export default class CreditCustomer extends Customer {

    constructor(name, mobile, credit) {
        super(name, mobile);
        this.credit = credit;
    }

    getBalance(payment) {
        return this.credit - payment;
    }
}

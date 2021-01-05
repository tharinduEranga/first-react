import {Customer} from "./customer";

export function getCreditLimit() {
    return 50000;
}

export default class CreditCustomer extends Customer {
    credit = 21000;

    getBalance(payment) {
        return this.credit - payment;
    }
}

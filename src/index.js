// import React from 'react';
// import ReactDOM from 'react-dom';
//
// const element = <h1>Hello Java</h1>;
// console.log(element);
//
// ReactDOM.render(element, document.getElementById('root'));
import CreditCustomer, {getCreditLimit} from "./customer-service/credit-customer";

const jobs = [
    "SE", "BA", "QA", "PM", "SA", "DE", "HR", "TL"
]

const filteredJobs = jobs.filter(job => job.indexOf("E") === 1);
const liJobs = jobs.map(function (job) {
    return `<li>${job}</li>`;
})

const country = {
    city: 'Galle',
    province: 'Colombo',
    state: 'Southern'
}
const {city: ct} = country;

const firsArr = [1, 2, 3];
const secondArr = [4, 5, 6];
const combined = [...firsArr, 23, ...secondArr];

const student = {name: 'Tharindu'};
const employee = {mobile: '0774935895'};
const person = {...student, ...employee, age: 23};

console.log(new CreditCustomer().getBalance(2000));
console.log(getCreditLimit());
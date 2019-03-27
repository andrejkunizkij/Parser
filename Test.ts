import { validator } from './valid';
import 'mocha';
import { assert } from 'chai';
const csv_arr: Array<Object> = [
    {
        "ID": 1200,
        "Name": "Anton",
        "Surname": "Ivanov",
        "Mail": "anton4755@mail.ru",
        "Date of registration": "01/03/2008",
        "Phone": "375 29 1340978"
    },
    {
        "ID": 1300,
        "Name": "Radik",
        "Surname": "Petrow",
        "Mail": "alexa17@mail.ru",
        "Date of registration": "20/10/2002",
        "Phone": "375 29 1340978"
    },
    {
        "ID": 1400,
        "Name": "Pasha",
        "Surname": "Link",
        "Mail": "sometext@mail.ru",
        "Date of registration": "17/11/2007",
        "Phone": "375 29 1220918"
    },
    {
        "ID": 3500,
        "Name": "Maha",
        "Surname": "Ivanova",
        "Mail": "text@mail.ru",
        "Date of registration": "11/03/2004",
        "Phone": "375 29 3456798"
    },
    {
        "ID": 1500,
        "Name": "Vlad",
        "Surname": "End",
        "Mail": "vlad4755@mail.ru",
        "Date of registration": "01/02/2002",
        "Phone": "375 29 6579809"
    },
    {
        "ID": 3200,
        "Name": "Katja",
        "Surname": "Ivanova",
        "Mail": "semen5@mail.ru",
        "Date of registration": "05/05/2009",
        "Phone": "375 29 5679832"
    }
];

describe('Validator testing', () =>{
    it('Should return array', () => {
        assert.equal(validator(csv_arr), [csv_arr[0]]);
    });
});
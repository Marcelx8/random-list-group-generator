console.log(':: Random List Group Generator ::');
// console.log();

let person = {
    name: 'Piet',
    surname: 'Takkie'
};

let people = [{
        name: 'Marcel',
        surname: 'Steenkamp'
    },
    {
        name: 'Fred',
        surname: 'du Plessis'
    },
    {
        name: 'Martea',
        surname: 'Roos'
    },
    {
        name: 'Michela',
        surname: 'Webster'
    },
    {
        name: 'Karin',
        surname: 'Uys'
    },
    {
        name: 'Piet',
        surname: 'Takkie'
    }
];

for (let index = 0; index < people.length; index++) {

    let listItem = document.createElement('li');
    listItem.setAttribute('class', 'list-item');

    let listWrapper = document.querySelector('.list-wrapper');
    listItemContent = document.createTextNode(`${people[index].name} ${people[index].surname}`);

    listItem.appendChild(listItemContent);
    listWrapper.appendChild(listItem);
}
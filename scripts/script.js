const BABYSITTERS = [
    {
        id: 1,
        name: 'Zohn',
        age: 20,
        img: 'assets/babysitter.png',
        location: 'New York',
    },
    {
        id: 2,
        name: 'Jane',
        age: 25,
        img: 'assets/babysitter.png',
        location: 'New York',
    },
    {
        id: 3,
        name: 'Jack',
        age: 30,
        img: 'assets/babysitter.png',
        location: 'New York',
    },
    {
        id: 4,
        name: 'Jill',
        age: 35,
        img: 'assets/babysitter.png',
        location: 'New York',
    }
]

function showSortedByAge() {
    const SORTED_DATA = BABYSITTERS.sort((a, b) => {
        return b.age - a.age;
    })
    renderBabysitters(SORTED_DATA)
}

function sortedByName() {
    const SORTED_DATA = BABYSITTERS.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        } 
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    })
    renderBabysitters(SORTED_DATA);
}

function renderBabysitters(card) {
    let html = '';
    card.forEach((babysitter) => {
        html += `
            <div id="${babysitter.id}" class="babysitter__list_card">
                <img src='${babysitter.img}'>
                <h2>${babysitter.name}</h2>
                <h2>${babysitter.age}</h2>
                <p>${babysitter.location}</p>
            </div>`

        const BABYSITTER = document.querySelector('.babysitter__list');
        BABYSITTER.innerHTML = html;
    })
}

document.addEventListener('DOMContentLoaded', () => {
    renderBabysitters(BABYSITTERS);
  });
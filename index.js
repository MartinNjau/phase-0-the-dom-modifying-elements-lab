document.getElementById('main');
main.remove();

const newHeader=document.createElement('h1');

    newHeader.id = 'victory';
    newHeader.textContent = ('Martin is the champion');

document.body.appendChild(newHeader);

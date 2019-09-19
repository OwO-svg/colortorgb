let button = document.querySelector('.button');

button.addEventListener('click', () => {
    let input = document.querySelector('.input').value;
    let result = document.querySelector('.rgb');

    if (input === 'white') {
        result.textContent ='#FFFFFF | rgb(255, 255, 255)';
    }
    if (input === 'black') {
        result.textContent = '#000000 | rgb(0, 0, 0)'
    }
    if (input == 'lightblue') {
        result.textContent = '#87CEEB | rgb(52, 80, 92)'
    }
    if (input === 'blue') {
        result.textContent = '#0000FF | rgb(0, 0, 255)'
    }
    if (input == 'darkblue') {
        result.textContent = '#00008b'
    }
    if (input === 'red') {
        result.textContent = '#FF0000 | rgb(255, 0, 0)'
    }
    if (input === 'lightred') {
        result.textContent = '#FF6347 | rgb(255, 99, 71)'
    }
    if (input === 'darkred') {
        result.textContent = '#B22222 | rgb(178, 34, 34)'
    }
    if (input === 'yellow') {
        result.textContent = '#FFFF00 | rgb(255, 255, 0)'
    }
    if (input === 'lightyellow') {
        result.textContent = '#FFFF99 | rgb(255, 255, 134)'
    }
    if (input === 'darkyellow') {
        result.textContent = '#CCCC00 | rgb(204, 204, 0)'
    }
    if (input === 'brown') {
        result.textContent = '#A52A2A | rgb(165, 42, 42)'
    }
    if (input === 'lightbrown') {
        result.textContent = '#B5651D | rgb(181, 101, 29)'
    }
    if (input === 'darkbrown') {
        result.textContent = '#654321 | rgb(101, 67, 33'
    }
    if (input === 'purple') {
        result.textContent = '#800080 | rgb(128, 0 128)'
    }
    if (input === 'lightpurple') {
        result.textContent = '#FF00FF | rgb(255, 0, 255'
    }
    if (input === 'darkpurple') {
        result.textContent = '#4B0082 | rgb(75, 0, 130)'
    }
    if (input === 'green') {
        result.textContent = '#00FF00 | rgb(0, 255, 0)'
    }
    if (input === 'lightgreen') {
        result.textContent = '#7CFC00 | rgb(124, 252, 0)'
    }
    if (input === 'darkgreen') {
        result.textContent = '#006400 | rgb(0, 100, 0)'
    }
    if (input === 'orange') {
        result.textContent = '#FFA500 | rgb(255, 127, 80)'
    }
    if (input === 'darkorange') {
        result.textContent = '#FF8C00 | rgb(255, 140, 0)'
    }
});
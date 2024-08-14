const container = document.querySelector('.container')
let counter = 2;
for(let i=2;i<=9;++i) {
    const figure = document.createElement('figure');
    const figcaption = document.createElement('figcaption');
    const newImage = document.createElement('img')
    newImage.setAttribute('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000${i}.png`)
    newImage.onerror = function() {
        newImage.style.display = 'none'
    }
    figcaption.innerText = counter++;
    figure.append(newImage,figcaption)
    container.appendChild(figure);
}
for(let i=10;i<=99;++i) {
    const figure = document.createElement('figure');
    const figcaption = document.createElement('figcaption');
    const newImage = document.createElement('img')
    newImage.setAttribute('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100${i}.png`)
    newImage.onerror = function() {
        newImage.style.display = 'none'
    }
    figcaption.innerText = counter++;
    figure.append(newImage,figcaption)
    container.appendChild(figure);
}
for(let i=101;i<=250;++i) {
    const figure = document.createElement('figure');
    const figcaption = document.createElement('figcaption');
    const newImage = document.createElement('img')
    newImage.setAttribute('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10${i}.png`)
    newImage.onerror = function() {
        newImage.style.display = 'none'
    }
    figcaption.innerText = counter++;
    figure.append(newImage,figcaption)
    container.appendChild(figure);
}

// const del = document.querySelector('figure:first-child')
// del.remove()


const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
    cats.push('Ralph')
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const newCats = [...cats, 'Broom']
    return newCats
}
// function appendCat(name) {
//     return [...cats, name]
// }

function prependCat(name){
    const newCats = ['Arnold', ...cats]
    return newCats
}
// function prependCat(name) {
//     return [name, ...cats]
// }

function removeLastCat(){
    const newCats = cats.slice(0, 2)
    return newCats
}
// function removeLastCat() {
//     return cats.slice.(1)
// }

function removeFirstCat(){
    const newCats = cats.slice(1)
    return newCats
}
// function removeLastCat() {
//     return cats.slice(0, cats.length -1)
// }
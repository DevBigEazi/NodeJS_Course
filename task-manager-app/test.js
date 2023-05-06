
const upperFirstWord = (par) => {
    const [firstWord, ...others] = par.split(' ');
    return [firstWord.toUpperCase(), ...others].join(' ')
}

console.log(upperFirstWord('Ade goes to school'))

const fn = (par1, par2) => {
    return par2(par1)
}

console.log(fn('Ade is a boy', upperFirstWord))


// const js = (arr) => {
//     let arr1 = [arr]
//     return console.log(arr1 / arr.length)
// }



// js('2', '3', '4', '5', '8')
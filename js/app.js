// - chiedere all'utente il suo nome
//   - dichiarare una variabile
let userName
//   - assegnare alla variabile il valore restituito da un prompt
userName = prompt('Ciao, qual è il tuo nome?')
console.log(userName)
// - chiedere all'utente il suo cognome
//   - dichiarare una variabile
let userSurname
//   - assegnare alla variabile il valore restituito da un prompt
userSurname = prompt('Qual è il tuo cognome?')
console.log(userSurname)
// - chiedere all'utente il suo colore preferito
//   - dichiarare una variabile
let color 
//   - assegnare alla variabile il valore restituito da un prompt
color = prompt('Qual è il tuo colore preferito?')
console.log(color)
// - inizializzare una variabile con il numero 21
const number = 21
// bonus
// let randNum = Math.floor(Math.random() * 100)
console.log(number)
// - concatenare il nome, il cognome, il colore preferito e il numero
//   - dichiarare una variabile password dove concateniamo le stringhe
const password = userName + userSurname + color + number
console.log(password)
// - stampare la password sulla pagina
//   - inserire nell'html un tag h1 con id = 'password'
//   - recuperare con js l'elemento del DOM con id = 'message'
const passwordDomElement = document.getElementById('password')
//   - modificare l'innerHTML dell'h1 con il valore della variabile password 
passwordDomElement.innerHTML = password
const button1 = document.querySelector('#AddButton')
const button2 = document.querySelector('#SubtractButton')
const text = document.querySelector('#textName')
console.log(text)
button1.addEventListener('click', () => {
    text.value++
})
button2.addEventListener('click',() => {
    text.value -= 1
})

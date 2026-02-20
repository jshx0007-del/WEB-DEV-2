async function sendData() {
    let response = await fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'BMW Pencil',
    description: "Hey there!",
    images: ["https://imgs.search.brave.com/h_LgG9E14kkNkyAZ-Y128Roa8zN6ZDUjsq1PlJ88pQc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzkv/MjEzLzkzNi9zbWFs/bC9haS1nZW5lcmF0/ZWQtYWJzdHJhY3Qt/d2F0ZXItYnViYmxl/cy1jb2xvcmZ1bC1i/YWNrZ3JvdW5kLWRl/c2lnbi1pbWFnZXMt/cGhvdG8uanBn"]
  }),
});
let data = await response.json()
console.log(data);
// .then(res => res.json())
// .then(console.log);
    
}
sendData() 

async function sendQuotes() {
    let res = await fetch('https://dummyjson.com/quotes/random')
    let data = await res.json()
    console.log(data);
    
}
sendQuotes()


async function addToDo() {
    let res = await fetch('https://dummyjson.com/todos/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    todo: 'Use DummyJSON in the project',
    completed: false,
    userId: 5,
  })
})
    let data = await res.json()
    console.log(data);
}
addToDo()
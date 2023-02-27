

function Book() {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const values = document.querySelectorAll("#read, #author, #pages, #title");
    const book = new Book();
    values.forEach(value => {
        if(value.id != "read"){
            book[value.id] = value.value;
        }else if(value.checked){
            book[value.id] = "<input type='checkbox' id='read' name='read' value='true' checked>";
        }else{
            book[value.id] = "<input type='checkbox' id='read' name='read' value='true'>";
        }
 
    });
    myLibrary.push(book);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    console.log(book.read);
    refresh();
}

const refresh = () =>{
    const table = document.querySelector("table");
    table.innerHTML = `
    <tr>
        <th>title</th>
        <th>pages</th>
        <th>author</th>
        <th>read</th>
        <th>remove</th>
    </tr>`
    myLibrary.forEach(book => {
        const row = document.createElement("tr");
        for (const key in book) {
            const cell = document.createElement("td");
            cell.innerHTML = book[key];
            row.appendChild(cell);
        }
        const cell = document.createElement("td");
        cell.innerHTML = `<button class="remove" onclick="removeBook(${myLibrary.indexOf(book)})">remove</button>`;
        row.appendChild(cell);
        table.appendChild(row);
        console.log(book);
        
    });
}
const removeBook = (index) =>{
    myLibrary.splice(index, 1);
    refresh();
}
let myLibrary = localStorage.getItem("myLibrary") ? JSON.parse(localStorage.getItem("myLibrary")) : [];
console.log(myLibrary);


const BookClub = [{
        id: 1,
        name: "The Complete Adventures of Feluda",
        author: "Satyajit Ray",
        lender: "Aritra",
        borrower: "Anirban",
        action: ""
    },

    {
        id: 2,
        name: "Byomkesh Bakshi Stories",
        author: "Sharadindu Bandyopadhyay",
        lender: "Aritra",
        borrower: "",
        action: ""
    },

    {
        id: 3,
        name: "Gitanjali",
        author: "Rabindranath Tagore",
        lender: "Trinath",
        borrower: "Aritra",
        action: ""
    },

    {
        id: 4,
        name: "Ananda Math",
        author: "Bankim Chandra Chatterjee",
        lender: "Sagnik",
        borrower: "",
        action: ""
    },

    {
        id: 5,
        name: "Chander Pahar",
        author: "Bibhutibhushan Bandyopadhyay",
        lender: "Sagnik",
        borrower: "",
        action: ""
    },

    {
        id: 6,
        name: "Pather Dabi",
        author: "Sarat Chandra Chattopadhyay",
        lender: "Anirban",
        borrower: "Sagnik",
        action: ""
    }
]

const table = document.getElementById("info-table");
for (var i = 0; i < BookClub.length; i++) {
    var row = table.insertRow()
    var id = row.insertCell(0)
    var namenew = row.insertCell(1)
    var author = row.insertCell(2)
    var lender = row.insertCell(3)
    var borrower = row.insertCell(4)
    var action = row.insertCell(5)
    id.innerHTML = BookClub[i].id
    namenew.innerHTML = BookClub[i].name
    author.innerHTML = BookClub[i].author
    lender.innerHTML = BookClub[i].lender
    borrower.innerHTML = BookClub[i].borrower
    action.innerHTML = ""
}

var user = ''

function addrow(user) {
    NewRow = table.insertRow(BookClub.length + 1);
    NewRow.innerHTML =
        `<tr>
  <td></td>
  <td>
  <input type="text" id="titlenew" placeholder="Title" required></input>
  </td>
  <td>
  <input type="text" id="authornew" placeholder="Author" required></input>
  </td>
  <td>${user}</td>
  <td></td>
  <td>
  <button type="button" onclick="insertNewUser(user)">Add</button>
  </td>
  </tr>`

    for (let i = 1; i < table.rows.length; i++) {
        let row = table.rows[i]

        if (BookClub[i - 1].lender !== user && BookClub[i - 1].borrower === "") {
            row.cells[5].innerHTML = `<button onclick="borrowBook(${i})">Borrow</button>`
        } else if (BookClub[i - 1].lender !== user && BookClub[i - 1].borrower === user) {
            row.cells[5].innerHTML = `<button onclick="returnBook(${i})">Return</button>`
        }

    }

}

function insertNewUser(userlogged) {
    var titlenew = document.getElementById("titlenew");
    var authornew = document.getElementById("authornew");

    if (authornew.value == '' || titlenew.value == '') {
        alert("Enter All The Details");
        return;
    } else {

        BookClub.push({
            id: BookClub.length,
            name: titlenew.value,
            author: authornew.value,
            lender: userlogged,
            borrower: "",
            action: ""
        })
    }
    var row = table.insertRow(BookClub.length)
    var id = row.insertCell(0)
    id.innerHTML = BookClub.length
    var namenew = row.insertCell(1)
    namenew.innerHTML = titlenew.value
    var author = row.insertCell(2)
    author.innerHTML = authornew.value
    var lender = row.insertCell(3)
    lender.innerHTML = userlogged
    var borrower = row.insertCell(4)
    borrower.innerHTML = ""
    var action = row.insertCell(5)
}

function borrowBook(rowNumber) {
    let row = table.rows[rowNumber]

    row.cells[5].innerHTML =
        `<button onclick="returnBook(${rowNumber})">Return</button>`
    row.cells[4].innerHTML = user

    BookClub[rowNumber - 1].borrower = user
}

function returnBook(rowNumber) {

    let row = table.rows[rowNumber]

    row.cells[5].innerHTML =
        `<button onclick="borrowBook(${rowNumber})">Borrow</button>`
    row.cells[4].innerHTML = ""


    BookClub[rowNumber - 1].borrower = ""
}

var check = 0
const users = ["Sagnik", "Anirban", "Aritra", "Trinath"];
const loginfield = document.getElementById("logged-user");

function changeLoggedInUser() {
    const username = loginfield.value
    let message = document.getElementById("logged-in-user-name")
    if (users.includes(username)) {
        if (check === 1) {
            for (let i = 1; i < table.rows.length - 1; i++) {
                row = table.rows[i]
                row.cells[5].innerHTML = ""
            }
            table.deleteRow(table.rows.length - 1)

        }
        message.innerHTML = "Logged in user: " + username;
        user = username
        check = 1
        addrow(user)
    } else if (!users.includes(username) && username !== "") {
        message.innerHTML = "No User Logged In"
        check = 0
        document.getElementById("logged-user").value = "";

        for (let i = 1; i < table.rows.length - 1; i++) {
            row = table.rows[i]
            row.cells[5].innerHTML = ""
            NewRow.innerHTML = '';

        }

    } else {}
}
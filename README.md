# Simple_BookClub
We have a simple BookClub database that is maintaining a list of books, who has lent the book, and who has borrowed the book. 
We can also add new book entries, borrow and return books.
The final completed database should have the following functionalities:

If you pass a user name and the user is present in the list - that user will be logged in and their name should appear above the table
If you pass a user name and the user is not present in the list - no user will be logged in and no name should appear on the field
If you pass a blank string - no user will be logged in
# Add book functionality -
We should have the ability to add new entries in this table
This functionality will only be shown when a user is logged in
To add a row, enter the name and author of the book and hit the add button in the last column
The name of the lender should be logged in user’s and the borrower should be empty
After adding a book, another row should appear with a blank book and author and add button.
# Return action
This button appears on rows where the logged in user is the borrower as “Return”
When no user is logged in, this button does not appear
When clicked, the borrower’s name is removed from the field and it becomes blank, and button changes from "Return" to "Borrow"
# Borrow action
This button appears on rows where the borrower is blank
When no user is logged in, this button does not appear
When clicked, the borrower column has the logged in user’s name and the “Borrow” button changed to “Return”

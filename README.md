# html-table-sort

[Extension for Google Chrome™](https://chrome.google.com/webstore/detail/html-table-auto-sort/bpgbkjehkeffmmjfmdlmjjlffgkdcljp).

Once added to your browser, clicking on a table column header &lt;th> will reorder the rows of an HTML table in ascending or descending order.

## New in version 1.5

- Chrome local storage is used to store the state of the extension. Clicking on the icon enables/disables it.
- Changed the sorting algorithm to a stable sort, so that you can sort on multiple columns. If you want to sort by surname and name, you first click on the Name column, getting a list sorted by name; then you click on the Surname column, getting a list sorted by surname, but where the people with the same surname are still sorted by name.
- For this to work, the ascending/descending order is now stored separately for each column in the page.

# Contributing

Please fork this project and help me make it better! Uses the MIT license.

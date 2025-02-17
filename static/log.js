function filterLogs() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim();
    const rows = document.querySelectorAll('#logTableBody tr');
    let hasVisibleRow = false;

    rows.forEach(row => {
        const cells = row.getElementsByTagName('td');
        let rowText = '';

        // Concatenate the text content of all cells in the row
        for (let i = 0; i < cells.length; i++) {
            rowText += cells[i].textContent.toLowerCase().trim() + ' ';
        }

        // Check if the concatenated text includes the input value
        if (rowText.includes(input)) {
            row.style.display = ""; // Show row
            hasVisibleRow = true;
        } else {
            row.style.display = "none"; // Hide row
        }
    });

    // Show or hide the no results message
    const noResultsMessage = document.getElementById('noResultsMessage');
    noResultsMessage.style.display = hasVisibleRow ? 'none' : 'block';
}
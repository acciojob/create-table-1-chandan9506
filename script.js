function insert_Row() {
    //Write your code here
	 const firstRow = document.getElementById("sampleTable").rows[0];
    
    // If there is an existing first row, clear its content
    if (firstRow) {
        firstRow.cells[0].textContent = ""; // Clear content of the first cell
        firstRow.cells[1].textContent = ""; // Clear content of the second cell
    }
	const sampleTable = document.getElementById("sampleTable");
	const newRow = document.createElement("tr");
	newRow.innerHTML = `
        <td>New Cell1</td>
        <td>New Cell2</td>
      `;
	sampleTable.prepend(newRow, sampleTable.rows[0]);
  
}

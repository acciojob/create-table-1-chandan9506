function insert_Row() {
    //Write your code here
	 const firstRow = document.getElementById("sampleTable").rows[0];
    
    // If there is an existing first row, clear its content
    
	const sampleTable = document.getElementById("sampleTable");
	const newRow = document.createElement("tr");
	newRow.innerHTML = `
        <td>New Cell1</td>
        <td>New Cell2</td>
      `;
	sampleTable.prepend(newRow, sampleTable.rows[0]);
  
}

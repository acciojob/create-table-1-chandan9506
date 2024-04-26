function insert_Row() {
    //Write your code here
	const sampleTable = document.getElementById("sampleTable");
	const newRow = document.createElement("tr");
	newRow.innerHTML = `
        <td>New Cell1</td>
        <td>New Cell2</td>
      `;
	sampleTable.prepend(newRow, sampleTable.rows[0]);
  
}

// Add this script to handle the form submission and update the table
function submitSurvey() {
  // Get values from the form
  var surveyTitle = document.getElementById('survey-title').value;
  var startDate = document.getElementById('start-date').value;
  var endDate = document.getElementById('end-date').value;

  // Create a new row in the table
  var table = document.getElementById('survey-table');
  var newRow = table.insertRow(table.rows.length);

  // Insert data into the new row
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);

  cell1.innerHTML =
    '<img src="img/dawn.jpg" alt="설문 이미지" style="max-width: 100px; max-height: 100px;">';
  cell2.innerHTML = surveyTitle;
  cell3.innerHTML = startDate + ' ~ ' + endDate;
  // Add other data as needed
  cell4.innerHTML = 'John Doe';
  cell5.innerHTML =
    '<button class="edit-button" onclick="editSurvey()">수정</button>';
  cell6.innerHTML =
    '<button class="delete-button" onclick="deleteSurvey()">삭제</button>';
}

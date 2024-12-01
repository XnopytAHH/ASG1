var form = document.getElementById('idForm');
var idInput = document.getElementById('studid');
form.addEventListener('submit', function (event) {
  var idValue = idInput.value.trim();
  
  // Check if the ID is numeric and within the required length
  if (!(idValue.length == 9)) {
    event.preventDefault(); // Stop form submission
    alert("Please input a valid student ID");
    }
  else {
    var acad=document.getElementById('acad').value;
    if (acad=="none") {
      event.preventDefault(); // Stop form submission
      alert("Please select an academic school");
    }
    else {
      var year=document.getElementById('year').value;
      if (year=="none") {
        event.preventDefault(); // Stop form submission
        alert("Please select a year");
      }
      else {
        form.remove()
        var joined=document.getElementById("hidden");
        joined.style.display="flex";
        }
    }
    
  }
});
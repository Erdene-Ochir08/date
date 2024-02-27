function handleKeyPress(event) {
  if (event.keyCode === 13) {
    var input = document.getElementById("input").value.toLowerCase();
    var response = document.getElementById("response");
    var date = document.getElementById("date");
    var time = document.getElementById("time");
    var warning = document.getElementById("warning");
    var pic = document.getElementById("pic");
    var type = document.getElementById("type");
    var loc=document.getElementById("location");
    warning.style.color="red";

    if (input === "date") {
      response.textContent = "Would you like to go on a date? (Yes/No)";
      pic.src="erm-fingers.gif";
      type.innerText="";
    } else if (response.textContent === "Would you like to go on a date? (Yes/No)") {
      if (input === "yes") {
        response.textContent = "Great! Please choose a date and time:";
        date.style.display = "inline";
        time.style.display = "inline";
        pic.src="oh-yay.gif";
        warning.innerText = "Do not forget to screenshot and send me your choice. :) \n\n We will meet at Mukshidonna first.";
        loc.style.display="block";
        // loc.setAttribute("href", "https://maps.app.goo.gl/h3ZTTCABeTuMGUDA8");
      } else if (input === "no") {
        response.textContent = "Maybe next time!";
      } else {
        response.textContent = "Please enter 'Yes' or 'No'.";
      }
    } else if (response.textContent === "Great! Please choose a date and time/:") {
      // Here you can handle the logic for sending an email with the selected date and time
      response.textContent = "Date and time selected. Confirmation sent!";
      date.style.display = "none";
      time.style.display = "none";
    }
    document.getElementById("input").value = "";
  }
}

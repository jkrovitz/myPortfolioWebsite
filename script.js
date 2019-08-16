function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function openGitHubAsnPlanner(event) {
  window.open('https://github.com/jkrovitz/assignmentPlanner', '_blank');
}

function openCapstoneDescription(event) {
  window.open('mac-capstone.html');
}

function openGitHubHotelMessenger(event) {
  window.open('https://github.com/jkrovitz/HotelMessageSite', '_blank');
}

function openGitHubCrystalProj(event) {
  window.open('https://github.com/jkrovitz/jeemwilu', '_blank');
}

function openCrystalDemo(event) {
  window.open('https://jkrovitz.github.io/jeemwilu/', '_blank');
}

function openAllMapsPDF(event) {
  window.open('maps-i-made.pdf', '_blank');
}

$('#githubAsnPlannerGitHubLink').on('touchstart click', function(){ window.open('https://github.com/jkrovitz/assignmentPlanner', '_blank') });

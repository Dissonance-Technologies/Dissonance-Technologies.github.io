// Menu dropdown functions
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

// Close dropdowns when clicking outside
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown1 = document.getElementById("myDropdown");
    var myDropdown2 = document.getElementById("myDropdown2");
    var myDropdown3 = document.getElementById("myDropdown3");
    
    if (myDropdown1 && myDropdown1.classList.contains('show')) {
      myDropdown1.classList.remove('show');
    }
    if (myDropdown2 && myDropdown2.classList.contains('show')) {
      myDropdown2.classList.remove('show');
    }
    if (myDropdown3 && myDropdown3.classList.contains('show')) {
      myDropdown3.classList.remove('show');
    }
  }
}; 
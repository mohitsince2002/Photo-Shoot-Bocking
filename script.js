 function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
  }

  function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
  }

  // Auto open after 10 seconds
  window.onload = function () {
    setTimeout(openLogin, 10000); // 10000ms = 10 sec
  }

  // Close when clicking outside
  window.onclick = function(e) {
    const modal = document.getElementById("loginModal");
    if (e.target == modal) {
      closeLogin();
    }
  }


 
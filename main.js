function addUser(){
    p1 = document.getElementById("p1_user").value;
    p2 = document.getElementById("p2_user").value;
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
    window.location = "quiz_game_page.html";
}
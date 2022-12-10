function send(){
    number1 = document.getElementById("number-1").value;
    number2 = document.getElementById("number-2").value;
    answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " " + "x" + " " + number2 + "<h4>";
    input_box = "<br>Answer: <input type='text' id='input-check-box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number-1").value = " ";
    document.getElementById("number-2").value = " ";
}
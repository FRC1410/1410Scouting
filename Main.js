// let output = document.getElementById("qrcode");
// let qrcode = new QRCode(output, "bruh");
let number = 0;
HighGoalBtn = document.getElementById("yo");
HighGoalBtn.onclick = function () {number++;HighGoalBtn.innerText = number.toString();}

let rqst = new XMLHttpRequest();
let url = "http://localhost:3000";
let type = "POST"
let SendBtn = document.getElementById("send");
let data = {
    Scout_Number: "8",
    Team_Number: "1410",
    Auto_Low_Goal_Scored: "1",
    Auto_Low_Goal_Missed: "2",
    Auto_Mid_Goal_Scored: "3",
    Auto_Mid_Goal_Missed: "4",
    Auto_High_Goal_Scored: "5",
    Auto_High_Goal_Missed: "6",
    Auto_Power_Shot_Target: "3",
    Auto_Wobble_Correct_Zone: "Yes",

    Teleop_Low_Goal_Scored: "1",
    Teleop_Low_Goal_Missed: "2",
    Teleop_Mid_Goal_Scored: "3",
    Teleop_Mid_Goal_Missed: "4",
    Teleop_High_Goal_Scored: "5",
    Teleop_High_Goal_Missed: "6",

    Endgame_Low_Goal_Scored: "1",
    Endgame_Low_Goal_Missed: "2",
    Endgame_Mid_Goal_Scored: "3",
    Endgame_Mid_Goal_Missed: "4",
    Endgame_High_Goal_Scored: "5",
    Endgame_High_Goal_Missed: "6",
    Endgame_Power_Shot_Target: "3",
    Endgame_Wobble_Start_Line: "Yes",
    Endgame_Wobble_Drop_Zone: "No",
    Endgame_Wobble_Rings : "3",

    Penalty_Major: "2",
    Penalty_Minor: "0",
}

rqst.open(type, url, true);
rqst.setRequestHeader("Content-Type", "application/json");
SendBtn.onclick = function () {rqst.send(JSON.stringify(data));}
// let output = document.getElementById("qrcode");
// let qrcode = new QRCode(output, "bruh");
let AHGS = 0, AHGM = 0, ALGS = 0, ALGM = 0, AMGS = 0, AMGM = 0, TLGM = 0, TLGS = 0, TMGM = 0, TMGS = 0, THGM = 0, THGS = 0, ELGM = 0, ELGS = 0, EMGM = 0, EMGS = 0, EHGM = 0, EHGS = 0, APS = 0, EPS = 0, PMA = 0, PMI = 0;



function openTab(evt, tabName) {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
   // evt.currentTarget.className += " active";
}

ELGMBtn = document.getElementById("ELGM");
ELGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {ELGM--;} else {ELGM++;}ELGMBtn.innerText = ELGM.toString();}
ELGSBtn = document.getElementById("ELGS");
ELGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {ELGS--;} else {ELGS++;}ELGSBtn.innerText = ELGS.toString();}
EMGSBtn = document.getElementById("EMGS");
EMGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {EMGS--;} else {EMGS++;}EMGSBtn.innerText = EMGS.toString();}
EMGMBtn = document.getElementById("EMGM");
EMGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {EMGM--;} else {EMGM++;}EMGMBtn.innerText = EMGM.toString();}
EHGSBtn = document.getElementById("EHGS");
EHGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {EHGS--;} else {EHGS++;}EHGSBtn.innerText = EHGS.toString();}
EHGMBtn = document.getElementById("EHGM");
EHGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {EHGM--;} else {EHGM++;}EHGMBtn.innerText = EHGM.toString();}
TLGSBtn = document.getElementById("TLGS");
TLGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {TLGS--;} else {TLGS++;}TLGSBtn.innerText = TLGS.toString();}
TLGMBtn = document.getElementById("TLGM");
TLGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {TLGM--;} else {TLGM++;}TLGMBtn.innerText = TLGM.toString();}
TMGSBtn = document.getElementById("TMGS");
TMGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {TMGS--;} else {TMGS++;}TMGSBtn.innerText = TMGS.toString();}
TMGMBtn = document.getElementById("TMGM");
TMGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {TMGM--;} else {TMGM++;}TMGMBtn.innerText = TMGM.toString();}
THGSBtn = document.getElementById("THGS");
THGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {THGS--;} else {THGS++;}THGSBtn.innerText = THGS.toString();}
THGMBtn = document.getElementById("THGM");
THGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {THGM--;} else {THGM++;}THGMBtn.innerText = THGM.toString();}
ALGSBtn = document.getElementById("ALGS");
ALGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {ALGS--;} else {ALGS++;}ALGSBtn.innerText = ALGS.toString();}
ALGMBtn = document.getElementById("ALGM");
ALGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {ALGM--;} else {ALGM++;}ALGMBtn.innerText = ALGM.toString();}
AMGSBtn = document.getElementById("AMGS");
AMGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {AMGS--;} else {AMGS++;}AMGSBtn.innerText = AMGS.toString();}
AMGMBtn = document.getElementById("AMGM");
AMGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {AMGM--;} else {AMGM++;}AMGMBtn.innerText = AMGM.toString();}
AHGSBtn = document.getElementById("AHGS");
AHGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {AHGS--;} else {AHGS++;}AHGSBtn.innerText = AHGS.toString();}
AHGMBtn = document.getElementById("AHGM");
AHGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {AHGM--;} else {AHGM++;}AHGMBtn.innerText = AHGM.toString();}

APSBtn = document.getElementById("APS");
APSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {APS--;} else {APS++;}APSBtn.innerText = APS.toString();}
EPSBtn = document.getElementById("EPS");
EPSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {EPS--;} else {EPS++;}EPSBtn.innerText = EPS.toString();}

PMABtn = document.getElementById("PMA");
PMABtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {PMA--;} else {PMA++;}PMABtn.innerText = PMA.toString();}
PMIBtn = document.getElementById("PMI");
PMIBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {PMI--;} else {PMI++;}PMIBtn.innerText = PMI.toString();}

let rqst = new XMLHttpRequest();
let url = "http://localhost:3000";
let type = "POST"
let SendBtn = document.getElementById("send");

SendBtn.onclick = function () {
    rqst.open(type, url, true);
    rqst.setRequestHeader("Content-Type", "application/json");
    rqst.send(JSON.stringify({
        Scout_Number: document.getElementById("SN").value.toString(),
        Team_Number: document.getElementById("TN").value.toString(),
        Auto_Low_Goal_Scored: ALGS.toString(),
        Auto_Low_Goal_Missed: ALGM.toString(),
        Auto_Mid_Goal_Scored: AMGS.toString(),
        Auto_Mid_Goal_Missed: AMGM.toString(),
        Auto_High_Goal_Scored: AHGS.toString(),
        Auto_High_Goal_Missed: AHGM.toString(),
        Auto_Power_Shot_Target: APS.toString(),
        Auto_Wobble_Correct_Zone: document.getElementById("AWCZ").value.toString(),

        Teleop_Low_Goal_Scored: TLGS.toString(),
        Teleop_Low_Goal_Missed: TLGM.toString(),
        Teleop_Mid_Goal_Scored: TMGS.toString(),
        Teleop_Mid_Goal_Missed: TMGM.toString(),
        Teleop_High_Goal_Scored: THGS.toString(),
        Teleop_High_Goal_Missed: THGM.toString(),

        Endgame_Low_Goal_Scored: ELGS.toString(),
        Endgame_Low_Goal_Missed: ELGM.toString(),
        Endgame_Mid_Goal_Scored: EMGS.toString(),
        Endgame_Mid_Goal_Missed: EMGM.toString(),
        Endgame_High_Goal_Scored: EHGS.toString(),
        Endgame_High_Goal_Missed: EHGM.toString(),
        Endgame_Power_Shot_Target: EPS.toString(),
        Endgame_Wobble_Start_Line: document.getElementById("EWSL").value.toString(),
        Endgame_Wobble_Drop_Zone: document.getElementById("EWDZ").value.toString(),
        Endgame_Wobble_Rings : document.getElementById("EWR").value.toString(),

        Penalty_Major: PMA.toString(),
        Penalty_Minor: PMI.toString(),
    }));
}
//put url here:
let url = 'https://948a-8-20-123-121.ngrok.io';











let AL = false, AL1S = 0, AL2S = 0, ASM = 0, TL1S = 0, TL2S = 0, TSM = 0, RC = false, PC = false, DF = false, Bal = false;
const close = document.getElementById("close");
const closeQR = document.getElementById("closeQR");
const modal = document.getElementById("modal");
const modalQR = document.getElementById("modalQR");
const SendBtn = document.getElementById("send");
const QRBtn = document.getElementById("qr");


let rqst = new XMLHttpRequest();
let type = "POST"
let qr;

(function() {
    qr = new QRious({
        element: document.getElementById('qr-code'),
        size: 200,
    });
})();

function generateQRCode() {
    qr.set({
        foreground: 'black',
        size: 200,
        value: JSON.stringify({
            Scout_Number: document.getElementById("SN").value.toString(),
            Team_Number: document.getElementById("TN").value.toString(),
            Alliance_Station: document.getElementById("AS").value.toString(),

            Auto_Line: AL.toString(),
            Auto_Level1_Scored: AL1S.toString(),
            Auto_Level2_Scored: AL2S.toString(),
            Auto_Shots_Missed: ASM.toString(),

            Teleop_Level1_Scored: TL1S.toString(),
            Teleop_Level2_Scored: TL2S.toString(),
            Teleop_Shots_Missed: TSM.toString(),
            Rotation_Control: RC.toString(),
            Position_Control: PC.toString(),
            Dead_On_Field: DF.toString(),

            Endgame_Position: document.getElementById("Climb").value.toString(),
            Balanced: Bal.toString(),
        })
    });
}

function openTab(evt, tabName) {
    let i, tabContent, tabLink;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLink = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
}

function resetVar() {
    AL = false, AL1S = 0, AL2S = 0, ASM = 0, TL1S = 0, TL2S = 0, TSM = 0, RC = false, PC = false, DF = false, Bal = false;

    ALMain.innerText = 'Rotation Control: Failure';

    AL1SMain.innerText = 'Level 1 Cells Scored: ' + AL1S.toString();
    AL2SMain.innerText = 'Level 2 Cells Scored: ' + AL2S.toString();
    ASMMain.innerText = 'Shots Missed: ' + ASM.toString();

    TL1SMain.innerText = 'Level 1 Cells Scored: ' + TL1S.toString();
    TL2SMain.innerText = 'Level 2 Cells Scored: ' + TL2S.toString();
    TSMMain.innerText = 'Shots Missed: ' + TSM.toString();

    RCMain.innerText = 'Rotation Control: Didnt Attempt';
    PCMain.innerText = 'Position Control: Didnt Attempt';
    DFMain.innerText = 'Dead on Field (Greater than 15 seconds): False';
    BalMain.innerText = 'Balanced: Failure';

    document.getElementById("TN").selectedIndex = 0;
    document.getElementById("AS").selectedIndex = 0;
    document.getElementById("Climb").selectedIndex = 0;

}
//dealing with all the minus buttons
AL1SMinus = document.getElementById("Auto L1 Scored Minus"); AL1SMinus.onmousedown = function () {AL1S--; AL1SMain.innerText = 'Level 1 Cells Scored: ' + AL1S.toString();}
AL2SMinus = document.getElementById("Auto L2 Scored Minus"); AL2SMinus.onmousedown = function () {AL2S--; AL2SMain.innerText = 'Level 2 Cells Scored: ' + AL2S.toString();}
ASMMinus = document.getElementById("Auto Shots Missed Minus"); ASMMinus.onmousedown = function () {ASM--; ASMMain.innerText = 'Shots Missed: ' + ASM.toString();}

TL1SMinus = document.getElementById("Teleop L1 Scored Minus"); TL1SMinus.onmousedown = function () {TL1S--; TL1SMain.innerText = 'Level 1 Cells Scored: ' + TL1S.toString();}
TL2SMinus = document.getElementById("Teleop L2 Scored Minus"); TL2SMinus.onmousedown = function () {TL2S--; TL2SMain.innerText = 'Level 2 Cells Scored: ' + TL2S.toString();}
TSMMinus = document.getElementById("Teleop Shots Missed Minus"); TSMMinus.onmousedown = function () {TSM--; TSMMain.innerText = 'Shots Missed: ' + TSM.toString();}

//add functionality to the buttons
ALMain = document.getElementById("Auto Line");
ALMain.onmousedown = function () {AL = !AL; if (AL) {ALMain.innerText = 'Auto Line: Success';} else {ALMain.innerText = 'Auto Line: Failure';}}

AL1SMain = document.getElementById("Auto L1 Scored");
AL1SMain.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {AL1S--;} else {AL1S++;}AL1SMain.innerText = 'Level 1 Cells Scored: ' + AL1S.toString();}
AL2SMain = document.getElementById("Auto L2 Scored");
AL2SMain.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {AL2S--;} else {AL2S++;}AL2SMain.innerText = 'Level 2 Cells Scored: ' + AL2S.toString();}
ASMMain = document.getElementById("Auto Shots Missed");
ASMMain.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {ASM--;} else {ASM++;}ASMMain.innerText = 'Shots Missed: ' + ASM.toString();}

TL1SMain = document.getElementById("Teleop L1 Scored");
TL1SMain.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {TL1S--;} else {TL1S++;}TL1SMain.innerText = 'Level 1 Cells Scored: ' + TL1S.toString();}
TL2SMain = document.getElementById("Teleop L2 Scored");
TL2SMain.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {TL2S--;} else {TL2S++;}TL2SMain.innerText = 'Level 2 Cells Scored: ' + TL2S.toString();}
TSMMain = document.getElementById("Teleop Shots Missed");
TSMMain.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {TSM--;} else {TSM++;}TSMMain.innerText = 'Shots Missed: ' + TSM.toString();}

RCMain = document.getElementById("Rotation");
RCMain.onmousedown = function () {RC = !RC; if (RC) {RCMain.innerText = 'Rotation Control: Attempted';} else {RCMain.innerText = 'Rotation Control: Didnt Attempt';}}
PCMain = document.getElementById("Position");
PCMain.onmousedown = function () {PC = !PC; if (PC) {PCMain.innerText = 'Position Control: Attempted';} else {PCMain.innerText = 'Position Control: Didnt Attempt';}}
DFMain = document.getElementById("Dead on Field");
DFMain.onmousedown = function () {DF = !DF; if (DF) {DFMain.innerText = 'Dead on Field (Greater than 15 seconds): True';} else {DFMain.innerText = 'Dead on Field (Greater than 15 seconds): False';}}

BalMain = document.getElementById("Balanced");
BalMain.onmousedown = function () {Bal = !Bal; if (Bal) {BalMain.innerText = 'Balanced: Success';} else {BalMain.innerText = 'Balanced: Failure';}}

SendBtn.onclick = function () {
    rqst.open(type, url, true);
    rqst.setRequestHeader("Content-Type", "application/json");
    rqst.send(JSON.stringify({
        Scout_Number: document.getElementById("SN").value.toString(),
        Team_Number: document.getElementById("TN").value.toString(),
        Alliance_Station: document.getElementById("AS").value.toString(),

        Auto_Line: AL.toString(),
        Auto_Level1_Scored: AL1S.toString(),
        Auto_Level2_Scored: AL2S.toString(),
        Auto_Shots_Missed: ASM.toString(),

        Teleop_Level1_Scored: TL1S.toString(),
        Teleop_Level2_Scored: TL2S.toString(),
        Teleop_Shots_Missed: TSM.toString(),
        Rotation_Control: RC.toString(),
        Position_Control: PC.toString(),
        Dead_On_Field: DF.toString(),

        Endgame_Position: document.getElementById("Climb").value.toString(),
        Balanced: Bal.toString(),

    }));
    resetVar();
    modal.style.display = "block";
}

QRBtn.onclick = function () {
    generateQRCode();
    resetVar();
    modalQR.style.display = "block";
}

close.onclick = function () {modal.style.display = "none";}

closeQR.onclick = function () {modalQR.style.display = "none";}

window.onclick = function(event) {
    if (event.target === modal || event.target === modalQR) {
        modal.style.display = "none";
        modalQR.style.display = "none";
    }
}

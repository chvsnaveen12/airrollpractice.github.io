window.onload = init;
function init() {
    const lq = document.getElementById("lq");
    const lw = document.getElementById("lw");
    const le = document.getElementById("le");
    const la = document.getElementById("la");
    const ls = document.getElementById("ls");
    const ld = document.getElementById("ld");
    const ht1 = document.getElementById("ht1");
    const ht2 = document.getElementById("ht2");
    var rand;
    var prev;
    var inp;
    var input;
    var start = false;
    var airroll;
    var aru;
    var arb;

    document.onkeydown = function (e) {
        inp = e.key;
        if (start == false) {
            if (inp == "q" || inp == "Q") {
                start = true;
                lq.style.backgroundColor = "rgb(0, 150, 177)";
                ht1.style.color = "rgb(36,36,36)";
                ht2.style.color = "rgb(36,36,36)";
                aru = "0";
                arb = "3";
                airroll = "left";
                ganja();
            }
            if (inp == "e" || inp == "E") {
                start = true;
                le.style.backgroundColor = "rgb(0, 150, 177)";
                ht1.style.color = "rgb(36,36,36)";
                ht2.style.color = "rgb(36,36,36)";
                aru = "2";
                arb = "5";
                airroll = "right";
                ganja();
            }
        }
        if (start == true) {
            if (inp == "q" || inp == "Q") {
                input = 0;
            }
            if (inp == "w" || inp == "W") {
                input = 1;
            }
            if (inp == "e" || inp == "E") {
                input = 2;
            }
            if (inp == "a" || inp == "A") {
                input = 3;
            }
            if (inp == "s" || inp == "S") {
                input = 4;
            }
            if (inp == "d" || inp == "D") {
                input = 5;
            }
            if (input == rand) {
                ganja();
            }
        }
    };
    function ganja() {
        if (airroll == "right") {
            lq.style.backgroundColor = "rgb(51, 51, 51)";
        }
        lw.style.backgroundColor = "rgb(51, 51, 51)";
        if (airroll == "left") {
            le.style.backgroundColor = "rgb(51, 51, 51)";
        }
        la.style.backgroundColor = "rgb(51, 51, 51)";
        ls.style.backgroundColor = "rgb(51, 51, 51)";
        ld.style.backgroundColor = "rgb(51, 51, 51)";
        rand = Math.floor(Math.random() * 6);
        while (rand == prev || rand == aru || rand == arb) {
            rand = Math.floor(Math.random() * 6);
        }

        if (rand === 0) {
            lq.style.backgroundColor = "rgb(230, 0, 0)";
        }
        if (rand === 1) {
            lw.style.backgroundColor = "rgb(230, 0, 0)";
        }
        if (rand === 2) {
            le.style.backgroundColor = "rgb(230, 0, 0)";
        }
        if (rand === 3) {
            la.style.backgroundColor = "rgb(230, 0, 0)";
        }
        if (rand === 4) {
            ls.style.backgroundColor = "rgb(230, 0, 0)";
        }
        if (rand === 5) {
            ld.style.backgroundColor = "rgb(230, 0, 0)";
        }
        prev = rand;
    }
}

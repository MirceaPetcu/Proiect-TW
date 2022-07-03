function randInt(a, b) {
    return Math.trunc(a + (b - a) * Math.random());
}
var culori = ["blue", "green", "black", "purple", "aqua"];

function schimba_stil(x) {
    var submeniu = x.target.querySelectorAll(".submeniu li a");
    for (let s of submeniu) {
        nr = randInt(0, 2);
        s.style.fontWeight = (nr % 2 == 0 ? "bold" : "normal");
        s.style.fontSize = randInt(20, 32) + "px";
        s.style.color = culori[randInt(0, culori.length)];
    }
}

window.onload = function() {
    var submeniup = document.getElementById("ac");
    submeniup.onmouseover = schimba_stil(event);


    var lista = document.getElementById("lista");

    document.getElementById("lista").ondblclick = function() {
        var liuri = lista.getElementsByTagName("li");
        var lv = Array.from(liuri);
        lv.reverse();
        for (let i = 0; i < lv.length; i++) {
            if (i == 1) {
                lv[i].remove();
            } else {
                lv[i].innerHTML = lv[i].innerHTML.toUpperCase();
                lista.appendChild(lv[i]);
            }
        }
    }


    var imagini = document.getElementsByClassName("imagini");
    for (let img of imagini) {
        img.classList.add("margini");
    }
    var s1 = document.getElementById("s1");
    var pgfs = s1.getElementsByTagName("p");
    for (let p of pgfs) {
        p.classList.add("verde");
    }
    var p = document.createElement("p");
    var d = new Date;
    p.innerHTML = "Suntem in anul: ";
    p.innerHTML += d.getFullYear();
    p.classList.add("verde");
    s1.insertBefore(p, s1.children[1]);



    document.getElementById("btn2").onclick = function() {
        var x = document.getElementById("fname").value.toLowerCase();
        var y = document.getElementById("supl").value.toLowerCase();
        if (x == y) {
            alert("avem " + x.toUpperCase() + "!!!");
        } else {
            alert("nu avem " + x.toUpperCase() + "!!!");
        }

    }



    window.onkeydown = function(e) {
        if (e.altKey && e.key == 'a') {
            var sectiune = document.getElementById("container");
            var text = document.createElement("p");
            text.id = "text_nou";
            var d = new Date;
            if (d.getSeconds() % 3 == 0) {
                text.innerHTML = "Produsul lunii este PROTEINA!";
            } else if (d.getSeconds() % 3 == 1) {
                text.innerHTML = "Produsul lunii este CREATINA!";
            } else if (d.getSeconds() % 3 == 2) {
                text.innerHTML = "Produsul lunii este CITRULINA!";
            }
            sectiune.parentElement.insertBefore(text, sectiune);
            setTimeout(function() {
                let p = document.getElementById("text_nou");
                if (p) {
                    p.remove();
                }
            }, 3000);
        } else {
            if (e.key == 'i') {
                setInterval(function() {
                    let para = document.getElementsByClassName("oferte")[0];
                    let compStyles = window.getComputedStyle(para);
                    para.textContent = 'Font-size-ul este de ' +
                        compStyles.getPropertyValue('font-size') +
                        ',\niar culoarea textului este ' +
                        compStyles.getPropertyValue('color') +
                        '.';

                }, 4000);
            }
        }

    }





}
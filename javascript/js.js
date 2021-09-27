
   
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var e = document.getElementById("e");
var f = document.getElementById("f");
function click_a(){
    if(a.classList[1] == "tr-6"){
    a.classList.remove("tr-6");
    a.classList.add("tr-1");
b.classList.remove("tr-1");
b.classList.add("tr-2");
c.classList.remove("tr-2");
c.classList.add("tr-3");
d.classList.remove("tr-3");
d.classList.add("tr-4");
e.classList.remove("tr-4");
e.classList.add("tr-5");
f.classList.remove("tr-5");
f.classList.add("tr-6");
    }
    else{
        if(a.classList[1] == "tr-2"){
        a.classList.remove("tr-2");
    a.classList.add("tr-1");
b.classList.remove("tr-3");
b.classList.add("tr-2");
c.classList.remove("tr-4");
c.classList.add("tr-3");
d.classList.remove("tr-5");
d.classList.add("tr-4");
e.classList.remove("tr-6");
e.classList.add("tr-5");
f.classList.remove("tr-1");
f.classList.add("tr-6");
        }
    }
}
function click_b(){
    if(b.classList[1] == "tr-2"){
    a.classList.remove("tr-1");
    a.classList.add("tr-6");
b.classList.remove("tr-2");
b.classList.add("tr-1");
c.classList.remove("tr-3");
c.classList.add("tr-2");
d.classList.remove("tr-4");
d.classList.add("tr-3");
e.classList.remove("tr-5");
e.classList.add("tr-4");
f.classList.remove("tr-6");
f.classList.add("tr-5");
    }
    else{
        if(b.classList[1] == "tr-6"){
        a.classList.remove("tr-5");
        a.classList.add("tr-6");
    b.classList.remove("tr-6");
    b.classList.add("tr-1");
    c.classList.remove("tr-1");
    c.classList.add("tr-2");
    d.classList.remove("tr-2");
    d.classList.add("tr-3");
    e.classList.remove("tr-3");
    e.classList.add("tr-4");
    f.classList.remove("tr-4");
    f.classList.add("tr-5");
        }
    }
}
function click_c(){
    if(c.classList[1] == "tr-2"){
    a.classList.remove("tr-6");
    a.classList.add("tr-5");
b.classList.remove("tr-1");
b.classList.add("tr-6");
c.classList.remove("tr-2");
c.classList.add("tr-1");
d.classList.remove("tr-3");
d.classList.add("tr-2");
e.classList.remove("tr-4");
e.classList.add("tr-3");
f.classList.remove("tr-5");
f.classList.add("tr-4");
    }else{
        if(c.classList[1] == "tr-6"){
        a.classList.remove("tr-4");
        a.classList.add("tr-5");
    b.classList.remove("tr-5");
    b.classList.add("tr-6");
    c.classList.remove("tr-6");
    c.classList.add("tr-1");
    d.classList.remove("tr-1");
    d.classList.add("tr-2");
    e.classList.remove("tr-2");
    e.classList.add("tr-3");
    f.classList.remove("tr-3");
    f.classList.add("tr-4");
        }
    }
}
function click_d(){
    if(d.classList[1] == "tr-2"){
    a.classList.remove("tr-5");
    a.classList.add("tr-4");
b.classList.remove("tr-6");
b.classList.add("tr-5");
c.classList.remove("tr-1");
c.classList.add("tr-6");
d.classList.remove("tr-2");
d.classList.add("tr-1");
e.classList.remove("tr-3");
e.classList.add("tr-2");
f.classList.remove("tr-4");
f.classList.add("tr-3");
    }
    else{
        if(d.classList[1] == "tr-6"){
        a.classList.remove("tr-3");
        a.classList.add("tr-4");
    b.classList.remove("tr-4");
    b.classList.add("tr-5");
    c.classList.remove("tr-5");
    c.classList.add("tr-6");
    d.classList.remove("tr-6");
    d.classList.add("tr-1");
    e.classList.remove("tr-1");
    e.classList.add("tr-2");
    f.classList.remove("tr-2");
    f.classList.add("tr-3");
        }
    }
}
function click_e(){
    if(e.classList[1] == "tr-2"){
    a.classList.remove("tr-4");
    a.classList.add("tr-3");
b.classList.remove("tr-5");
b.classList.add("tr-4");
c.classList.remove("tr-6");
c.classList.add("tr-5");
d.classList.remove("tr-1");
d.classList.add("tr-6");
e.classList.remove("tr-2");
e.classList.add("tr-1");
f.classList.remove("tr-3");
f.classList.add("tr-2");
    }
    else{
        if(e.classList[1] == "tr-6"){
        a.classList.remove("tr-2");
        a.classList.add("tr-3");
    b.classList.remove("tr-3");
    b.classList.add("tr-4");
    c.classList.remove("tr-4");
    c.classList.add("tr-5");
    d.classList.remove("tr-5");
    d.classList.add("tr-6");
    e.classList.remove("tr-6");
    e.classList.add("tr-1");
    f.classList.remove("tr-1");
    f.classList.add("tr-2");   
        }
    }
}
function click_f(){
    if(f.classList[1] == "tr-2"){
    a.classList.remove("tr-3");
    a.classList.add("tr-2");
b.classList.remove("tr-4");
b.classList.add("tr-3");
c.classList.remove("tr-5");
c.classList.add("tr-4");
d.classList.remove("tr-6");
d.classList.add("tr-5");
e.classList.remove("tr-1");
e.classList.add("tr-6");
f.classList.remove("tr-2");
f.classList.add("tr-1");
    }
    else{
        if(f.classList[1] == "tr-6"){
        a.classList.remove("tr-1");
        a.classList.add("tr-2");
    b.classList.remove("tr-2");
    b.classList.add("tr-3");
    c.classList.remove("tr-3");
    c.classList.add("tr-4");
    d.classList.remove("tr-4");
    d.classList.add("tr-5");
    e.classList.remove("tr-5");
    e.classList.add("tr-6");
    f.classList.remove("tr-6");
    f.classList.add("tr-1");
        }
    }
}

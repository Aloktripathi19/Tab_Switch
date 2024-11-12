function fun(ch) {
    if (ch == '1') {
        document.getElementById("min1").style.display = "block"
        document.getElementById("min2").style.display = "none"
        document.getElementById("min3").style.display = "none"
        document.getElementById("img1").style.display = "block"
        document.getElementById("img2").style.display = "none"
        document.getElementById("img3").style.display = "none"
        document.getElementsByTagName("button")[0].style.background="white"
        document.getElementsByTagName("button")[1].style.background="skyblue"
        document.getElementsByTagName("button")[2].style.background="skyblue"
    }
    else if (ch == '2') {
        document.getElementById("min1").style.display = "none"
        document.getElementById("min2").style.display = "block"
        document.getElementById("min3").style.display = "none"
        document.getElementById("img1").style.display = "none"
        document.getElementById("img2").style.display = "block"
        document.getElementById("img3").style.display = "none"
        document.getElementsByTagName("button")[0].style.background="skyblue"
        document.getElementsByTagName("button")[1].style.background="white"
        document.getElementsByTagName("button")[2].style.background="skyblue"
        
    }
    else {
       
        document.getElementById("min1").style.display = "none"
        document.getElementById("min2").style.display = "none"
        document.getElementById("min3").style.display = "block"
        document.getElementById("img1").style.display = "none"
        document.getElementById("img2").style.display = "none"
        document.getElementById("img3").style.display = "block"
        document.getElementsByTagName("button")[0].style.background="skyblue"
        document.getElementsByTagName("button")[1].style.background="skyblue"
        document.getElementsByTagName("button")[2].style.background="white"
        
    }
}
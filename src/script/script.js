window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector("header").style.fontSize = "14px";
        document.getElementById("image").style.width = "50px";
        document.getElementById("image").style.height = "50px";
    } else {
        document.querySelector("header").style.fontSize = "20px";
        document.getElementById("image").style.width = "100px";
        document.getElementById("image").style.height = "100px";
    }
};
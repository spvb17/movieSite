let switchMode = document.getElementById("themeButton")
switchMode.onclick = function()
{
    let theme = document.getElementById("changer")
    let themcss = document.getElementById("csschanger")
    let themeicon = document.getElementById("themeImages")
    let hometheme = document.getElementById("home-changer")
    let seriestheme = document.getElementById("serieschanger")
     if(hometheme.getAttribute("href")=="css/home.css")
    {
        hometheme.href="css/homedark.css"
        themcss.href="css/darkslider.css"
        themeicon.src="img/20221001_220021.png"
    }
    else
    {
        hometheme.href="css/home.css"
        themcss.href = "css/lightslider.css"
        themeicon.src= "img/15751.png"
    }
}
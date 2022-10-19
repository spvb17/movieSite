let switchMode = document.getElementById("themeButton")

switchMode.onclick = function()
{
    let theme = document.getElementById("serieschanger")
    let themeicon = document.getElementById("themeImages")
    let themcss = document.getElementById("csschanger")
    if(theme.getAttribute("href") == "css/serieslightmode.css"  
     && themeicon.getAttribute("src")=="img/15751.png")
    {
        theme.href = "css/seriesdarkmode.css"
        themcss.href="css/darkslider.css"
        themeicon.src="img/20221001_220021.png"

    }
    else
    {
        theme.href  = "css/serieslightmode.css"
        themcss.href="css/lightlider.css"
        themeicon.src= "img/15751.png"
    }
}

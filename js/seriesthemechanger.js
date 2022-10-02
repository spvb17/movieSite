let switchMode = document.getElementById("themeButton")

switchMode.onclick = function()
{
    let theme = document.getElementById("changer")
    let themeicon = document.getElementById("themeImages")
    if(theme.getAttribute("href") == "css/serieslightmode.css"  
     && themeicon.getAttribute("src")=="img/15751.png")
    {
        theme.href = "css/seriesdarkmode.css"
        themeicon.src="img/20221001_220021.png"
    }
    else
    {
        theme.href  = "css/serieslightmode.css"
        themeicon.src= "img/15751.png"
    }
}
let switchMode = document.getElementById("themeButton")

switchMode.onclick = function()
{
    let theme = document.getElementById("changer")
    let themcss = document.getElementById("csschanger")
    let themeicon = document.getElementById("themeImages")
    if(theme.getAttribute("href") == "css/draft.css" && themcss.getAttribute("href")=="css/lightslider.css" && themeicon.getAttribute("src")=="img/15751.png")
    {
        theme.href = "css/darkmode.css"
        themcss.href="css/darkslider.css"
        themeicon.src="img/20221001_220021.png"
    }
    else
    {
        theme.href  = "css/draft.css"
        themcss.href = "css/lightslider.css"
        themeicon.src= "img/15751.png"
    }
}
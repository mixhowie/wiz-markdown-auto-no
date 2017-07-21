function WizOnOutlineButtonClickedx(){
    var pluginPath = objApp.GetPluginPathByScriptFileName("WizOutlinex.js");
    var bookmarksListHtmlFileName = pluginPath + "Outlinex.htm";
    //
    var rect = objWindow.GetToolButtonRect("document", "OutlineButtonx");
    var arr = rect.split(',');
    objWindow.ShowSelectorWindow(bookmarksListHtmlFileName, (parseInt(arr[0]) + parseInt(arr[2])) / 2, arr[3], 300, 500, "");
}
function WizInitOutlineButtonx(){
    var pluginPath = objApp.GetPluginPathByScriptFileName("WizOutlinex.js");
    var languangeFileName = pluginPath + "plugin.ini";
    var buttonText = objApp.LoadStringFromFile(languangeFileName, "strOutline");
    objWindow.AddToolButton("document", "OutlineButtonx", buttonText, pluginPath + "outlinex.ico", "WizOnOutlineButtonClickedx");
}

function addNo(){
    var arr = document.all;

    var jsonarray = [];

    alert(arr);
    for(var i = 0; i < arr.length; i++){
        var elem = arr[i];
        var tagName = elem.tagName.toLowerCase();
        if(tagName != "h1"
            && tagName != "h2"
            && tagName != "h3"
            && tagName != "h4"
            && tagName != "h5"
            && tagName != "h6")
            continue;

        var nodes = elem.getElementsByTagName("DIV");
        if(0 < nodes.length)
            continue;

        var elemtext = elem.textContent;
        if(elemtext.replace(/(^\s*)|(\s*$)h1<br>/g, "") == 0)
            continue;

        var jsonelem = {
            "tagName": tagName,
            "offsetTop": elem.offsetTop,
            "text": elemtext
        };
        jsonarray.push(jsonelem);
    }
    var json = JSON.stringify(jsonarray);
    alert(json);
}

function docNo(){
    var pluginPath = objApp.GetPluginPathByScriptFileName("docNo.js");
    var languangeFileName = pluginPath + "plugin.ini";
    var buttonText = objApp.LoadStringFromFile(languangeFileName, "strAddDocNo");
    objWindow.AddToolButton("document", "DocNoButton", buttonText, pluginPath + "outlinex.ico", "addNo");
}

docNo();

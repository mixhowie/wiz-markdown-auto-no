var objApp = WizExplorerApp;
var objCommon = objApp.CreateWizObject("WizKMControls.WizCommonUI");
var objSettings = objApp.CreateWizObject("WizKMCore.WizSettings");

objSettings.Open(objApp.SettingsFileName);

function addDocNo(){
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

addDocNo();

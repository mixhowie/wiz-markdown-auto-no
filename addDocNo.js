var objApp = WizExplorerApp;
var objCommon = objApp.CreateWizObject("WizKMControls.WizCommonUI");
var objSettings = objApp.CreateWizObject("WizKMCore.WizSettings");

objSettings.Open(objApp.SettingsFileName);

function parseDom(arg) {
    var objE = document.createElement("div");
    objE.innerHTML = arg;
    return objE.childNodes;
}

function addDocNo() {

    var html = objApp.Window.CurrentDocument.GetHtml();

    var htmlList = parseDom(html);

    var headerInfo = {
        "h1": 0,
        'h2': 0,
        'h3': 0,
        'h4': 0,
        'h5': 0,
        'h6': 0
    };

    var codeStrat = 0;
    var finalStr = [];
    for (var i = 0; i < htmlList.length; i++) {
        finalStr.push('');
        var elem = htmlList[i];
        var tagName = elem.tagName;

        if (tagName != undefined && tagName.toLowerCase() != 'div') {
            continue
        }

        finalStr[i] = '<div>' + elem.textContent + '</div>';

        var text = elem.textContent;

        if (text.match('^`*')[0] != "") {
            if (codeStrat == 0) {
                codeStrat = 1;
            } else {
                codeStrat = 0;
            }
        }

        if (codeStrat == 1) {
            continue
        }

        var sharpStr = text.match('^#*')[0];
        if (sharpStr == '') {
            continue
        }

        var finalText = text.split(sharpStr).slice(1).join('');

        // H1
        if (sharpStr.length == 1) {
            headerInfo['h1'] += 1;
            headerInfo['h2'] = 0;
            headerInfo['h3'] = 0;
            headerInfo['h4'] = 0;
            headerInfo['h5'] = 0;
            headerInfo['h6'] = 0;
        }

        // H2
        if (sharpStr.length == 2) {
            headerInfo['h2'] += 1;
            headerInfo['h3'] = 0;
            headerInfo['h4'] = 0;
            headerInfo['h5'] = 0;
            headerInfo['h6'] = 0;
        }

        // H3
        if (sharpStr.length == 3) {
            headerInfo['h3'] += 1;
            headerInfo['h4'] = 0;
            headerInfo['h5'] = 0;
            headerInfo['h6'] = 0;
        }

        // H4
        if (sharpStr.length == 4) {
            headerInfo['h4'] += 1;
            headerInfo['h5'] = 0;
            headerInfo['h6'] = 0;
        }

        // H5
        if (sharpStr.length == 5) {
            headerInfo['h5'] += 1;
            headerInfo['h6'] = 0;
        }

        // H6
        if (sharpStr.length == 6) {
            headerInfo['h6'] += 1;
        }

        var number = '';
        for (var h in headerInfo) {
            if (headerInfo[h] == 0) {
                continue
            }
            number += headerInfo[h] + '.';
        }

        finalStr[i] = '<div>' + sharpStr + ' ' + number + finalText + '</div>';
    }
    objApp.Window.CurrentDocument.SetHtml(finalStr.join(''));
}

addDocNo();

var objApp = WizExplorerApp;
var objCommon = objApp.CreateWizObject("WizKMControls.WizCommonUI");
var objSettings = objApp.CreateWizObject("WizKMCore.WizSettings");

objSettings.Open(objApp.SettingsFileName);

function addDocNo(){
    var arr = document.body;

    var headerInfo = {
        "h1": 0,
        'h2': 0,
        'h3': 0,
        'h4': 0,
        'h5': 0,
        'h6': 0
    };
    alert(arr.length);
    for(var i = 0; i < arr.length; i++){
        var elem = arr[i];
        var tagName = elem.tagName.toLowerCase();
        alert(1);
        alert(tagName);
        if(tagName != "h1"
            && tagName != "h2"
            && tagName != "h3"
            && tagName != "h4"
            && tagName != "h5"
            && tagName != "h6")
            continue;

        alert(2);
        // H1
        if(tagName == 'h1'){
            headerInfo['h1'] += 1;
            headerInfo['h2'] = 0;
            headerInfo['h3'] = 0;
            headerInfo['h4'] = 0;
            headerInfo['h5'] = 0;
            headerInfo['h6'] = 0;
        }

        alert(3);
        // H2
        if(tagName == 'h2'){
            headerInfo['h2'] += 1;
            headerInfo['h3'] = 0;
            headerInfo['h4'] = 0;
            headerInfo['h5'] = 0;
            headerInfo['h6'] = 0;
        }

        alert(4);
        // H3
        if(tagName == 'h3'){
            headerInfo['h3'] += 1;
            headerInfo['h4'] = 0;
            headerInfo['h5'] = 0;
            headerInfo['h6'] = 0;
        }

        alert(5);
        // H4
        if(tagName == 'h4'){
            headerInfo['h4'] += 1;
            headerInfo['h5'] = 0;
            headerInfo['h6'] = 0;
        }

        alert(6);
        // H5
        if(tagName == 'h5'){
            headerInfo['h5'] += 1;
            headerInfo['h6'] = 0;
        }

        alert(7);
        // H6
        if(tagName == 'h6'){
            headerInfo['h6'] += 1;
        }

        alert(8);
        var elemtext = elem.textContent;

        alert(9);
        var number = '';
        // for(var h in headerInfo){
        //     number += headerInfo[h] + '.';
        // }
        //
        // alert(number + elemtext);

    }
    alert(10);
}

addDocNo();

function getListPatterns(response) {
    //listPattern = JSON.parse(response.data.message.text);

    for (const [key, value] of Object.entries(response.data.message)) {
        value;

        var newField =
            '<div onclick="pastePattern('+ value.id +', \''+ value.titleName +'\')" class="field-row1">'+ value.id +
            '|'+ value.title +
             '<input type="hidden" id="text_pattern_'+ value.id +'" value="'+ encodeURIComponent(value.text)  +'">'+
             '<button type="button" onclick="deletePattern('+ value.id +')">Удалить</button></div></div>';
        $("#pattern-list").append(newField);
    }
}

function pastePattern(id, title) {
    pattern = $("#text_pattern_" + id)[0].value;

    pattern = decodeURIComponent(pattern);
    patternList = JSON.parse(pattern);

    pattern;

    $(".field-row").remove();

    $("#endpoint-name-value")[0].value = patternList.actionApi;
    $("#endpoint-save-name")[0].value = title;

    for (const [key, value] of Object.entries(patternList)) {
        var newField =
            '<div class="field-row"><input type="text" name="parametr" value="' +
            key +
            '">|<textarea type="text" name="valuem">'+ value +'</textarea> <button type="button" class="remove-field">Удалить</button></div><hr>';
        $("#fields-container").append(newField);
    }
}

function deletePattern(id)
{
    parametrs = {
        actionApi: "testerAPI/deletePattern",
        id: id,
    };
    sendText(parametrs);
}

function getApiPattern() {
    list = {};

    $(".field-row").each(function (index, element) {
        parametrEl = element.querySelector('[name="parametr"]');
        valueEl = element.querySelector('[name="valuem"]');

        list[parametrEl.value] = valueEl.value;
    });

    list["actionApi"] = $("#endpoint-name-value")[0].value;
    $("#sendTextarea").val(JSON.stringify(list));

    return list;
}

async function getPatternList() {
    parametrs = {
        actionApi: "testerAPI/getPatterns",
    };
    sendText(parametrs);
}

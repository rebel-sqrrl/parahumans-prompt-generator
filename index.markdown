---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
---
<form id="pick-chars">
<div style="text-align: center">
    <b><label for="num-chars">Number of characters:</label></b>
    <input type="number" id="num-chars" value=2 min="0">
    <br />
    <br />
    <input type="submit" value="Generate pairing">
    <br />
    <p id="output" style="min-height: 4rem">
    </p>
</div>
<table style="display: table">
    <tr>
    <th width="50%">Age options</th>
    <th>Other options</th>
    </tr>
    <tr>
    <td>
    <b>Include characters who are:</b>
    <br />
    <input type="checkbox" id="char-1-14"> <label for="char-1-14">14 and under</label>,
    <br />
    <input type="checkbox" id="char-1-16" value="16"> <label for="char-1-16">15–17</label>,
    <br />
    <input type="checkbox" id="char-1-18" value="18"> <label for="char-1-18">18 and older</label>
    <br />
    <b>as of:</b>
    <br />
    <input type="radio" name="year" id="2011" value="0" checked> <label for="2011">Worm (2011)</label>
    <br />
    <input type="radio" name="year" id="2013" value="2"> <label for="2013">Gold Morning (2013)</label>
    <br />
    <input type="radio" name="year" id="2015" value="4"> <label for="2015">Ward (2015)</label>  
    <br />
    <label for="same-group">All characters from the same age group?</label> <input type="checkbox" id="same-group">
    </td>
    <td>
    <label for="allow-incest">Allow incest pairings?</label> <input type="checkbox" id="allow-incest">
    <br />
    <label for="enable-prompts">Include prompt?</label> <input type="checkbox" id="enable-prompts">
    <br />
    <label for="nsfw-prompts">Include NSFW prompts?</label> <input type="checkbox" id="nsfw-prompts">
    <br />
    <label for="show-cape-names">Show cape names?</label> <input type="checkbox" id="show-cape-names" onchange="reformatNames()">
    </td>
    </tr>
</table>
</form>

<script src="./script.js" type="module"></script>
<script>
    const characters = {{ site.data.characters | jsonify }};
    const prompts = {{ site.data.prompts | jsonify }};
    var pickedChars = [];
    function reformatNames() {
        if (pickedChars.length > 0) {
            var output = document.getElementById("output");
            var sections = output.innerHTML.split("<br>");
            var prompt = "";
            if (sections.length > 1) { prompt = "<br>" + sections[1]; }
            var showCapeNames = document.getElementById("show-cape-names").checked;
            output.innerHTML = formatNames(pickedChars, showCapeNames) + prompt;
        }
    }
    document.getElementById("pick-chars").addEventListener("submit", function (e) {
        e.preventDefault();
        var ageGroup14 = document.getElementById("char-1-14").checked;
        var ageGroup16 = document.getElementById("char-1-16").checked;
        var ageGroup18 = document.getElementById("char-1-18").checked;
        var yearValues = document.getElementsByName("year");
        var year = 0;
        for (var i = 0, length = yearValues.length; i < length; i++) {
            if (yearValues[i].checked) {
                year = Number(yearValues[i].value);
                break;
            }
        }
        var numChars = document.getElementById("num-chars").value;
        var sameGroup = document.getElementById("same-group").checked;
        var allowIncest = document.getElementById("allow-incest").checked;
        var enablePrompts = document.getElementById("enable-prompts").checked;
        var nsfwPrompts = document.getElementById("nsfw-prompts").checked;
        var showCapeNames = document.getElementById("show-cape-names").checked;
        pickedChars = [];
        if (numChars > 0) {
            var allowedAges = getAllowedAgeGroups(ageGroup14, ageGroup16, ageGroup18);
            var filteredChars = characters.filter(char => allowedAges.includes(getAgeCategory(char.age + year)));
            if (filteredChars.length > 0) {
                var firstChar = getRandomEntry(filteredChars);
                pickedChars.push(firstChar);
                if (sameGroup) {
                    var filteredChars = characters.filter(char => getAgeCategory(char.age + year) === getAgeCategory(firstChar.age + year));
                }
                for (var i = 0; i < numChars - 1; i++) {
                    pickedChars.push(getCharacter(pickedChars, filteredChars, allowIncest));
                }
                document.getElementById("output").innerHTML = formatNames(pickedChars, showCapeNames) + getPrompt(enablePrompts, nsfwPrompts, allowIncest, prompts);
            } else {
                document.getElementById("output").innerHTML = "No characters matching filters"
            }
        } else {
            document.getElementById("output").innerHTML = "Enter a number of characters greater than 0"
        }
});
</script>
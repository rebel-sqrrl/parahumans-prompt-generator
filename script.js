window.getAgeCategory = (age) => {
    if (age <= 14) { return 14; }
    if (age >= 18) { return 18; }
    return 16;
}

function getFamily(character) {
    var family = character.family;
    if (family.length === 0) {
        return null;
    } else {
        return family;
    }
}

window.getRandomEntry = (array) => { return array[Math.floor(Math.random() * array.length)];}

window.getCharacter = (pickedChars, filteredChars, allowIncest) => {
    if (allowIncest) {
        return getRandomEntry(filteredChars);
    } else {
        var pickedFamilies = new Set(pickedChars.map(char => getFamily(char)));
        while (true) {
            var character = getRandomEntry(filteredChars);
            var family = getFamily(character);
            if (family === null || !pickedFamilies.has(family)) {
                return character;
            }
        }
    }
}

window.getAllowedAgeGroups = (ageGroup14, ageGroup16, ageGroup18) => {
    var allowedAges = [];
    if (ageGroup14) { allowedAges.push(14); }
    if (ageGroup16) { allowedAges.push(16); }
    if (ageGroup18) { allowedAges.push(18); }
    return allowedAges;
}

window.getPrompt = (enablePrompts, nsfwPrompts, allowIncest, prompts) => {
    if (!enablePrompts) { return ""; }
    var promptList = prompts;
    if (!nsfwPrompts) {
        promptList = promptList.filter(prompt => !prompt.nsfw);
    }
    if (!allowIncest) {
        promptList = promptList.filter(prompt => !prompt.incest);
    }
    return "<br />Prompt: " + getRandomEntry(promptList).name;
}

function formatName(character, showCapeNames) {
    if (character.name.length === 0) {
        return character.cape_name[0];
    } else if (character.cape_name.length === 0 || !showCapeNames) {
        return character.name;
    } else {
        return character.name + " (" + getRandomEntry(character.cape_name) + ")";
    }
}

window.formatNames = (characters, showCapeNames) => {
    return characters.map(character => formatName(character, showCapeNames)).join("/");
}
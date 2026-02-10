// 18 = 18 or older
// Ages are as of 2011
var characters = [
    { name: "Taylor (Skitter)", age: 16 },
    { name: "Taylor (Weaver)", age: 16 },
    { name: "Taylor (Khepri)", age: 16 },
    { name: "Lisa (Tattletale)", age: 17 },
    { name: "Rachel (Bitch)", age: 17 },
    { name: "Brian (Grue)", age: 17 },
    { name: "Alec (Regent)", age: 15 },
    { name: "Alec (Hijack)", age: 15 },
    { name: "Aisha (Imp)", age: 13 },
    { name: "Lily (Flechette)", age: 17 },
    { name: "Lily (Foil)", age: 17 },
    { name: "Sabah (Parian)", age: 18 },
    { name: "Barker", age: 18 },
    { name: "Biter", age: 18 },
    { name: "Aiden (Chicken Little)", age: 5 },
    { name: "Snuff", age: 18 },

    { name: "Dennis (Clockblocker)", age: 16 },
    { name: "Sophia (Shadow Stalker)", age: 15 },
    { name: "Missy (Vista)", age: 13 },
    { name: "Carlos (Aegis)", age: 17 },
    { name: "Chris (Kid Win)", age: 14 },
    { name: "Dean (Gallant)", age: 17 },
    { name: "Weld", age: 17 },
    { name: "Crucible", age: 15 },
    { name: "Toggle", age: 12 },

    { name: "Colin (Armsmaster)", age: 18 },
    { name: "Colin (Defiant)", age: 18 },
    { name: "Hanah (Miss Militia)", age: 18 },
    { name: "Robin (Velocity)", age: 18 },
    { name: "Ethan (Assault)", age: 18 },
    { name: "Battery", age: 18 },
    { name: "Rory (Triumph)", age: 18 },

    { name: "Emily Piggot", age: 18 },
    { name: "Thomas (Coil)", age: 18 },

    { name: "Dragon", age: 18 },
    { name: "Narwhal", age: 18 },

    { name: "Adam (Skidmark)", age: 18 },
    { name: "Sherell (Squealer)", age: 18 },
    { name: "Mush", age: 18 },
    { name: "Trainwreck", age: 18 },
    { name: "Whirlygig", age: 18 },

    { name: "Faultline", age: 18 },
    { name: "Emily (Spitfire)", age: 15 },
    { name: "Newter", age: 16 },
    { name: "Gregor (the Snail)", age: 18 },
    { name: "Elle (Labyrinth)", age: 18 },
    { name: "Shamrock", age: 18 },

    { name: "Dinah Alcott", age: 12 },

    { name: "Carol (Brandish)", age: 18 },
    { name: "Mark (Flashbang)", age: 18 },
    { name: "Neil (Manpower)", age: 18 },
    { name: "Sarah (Lady Photon)", age: 18 },
    { name: "Eric (Shielder)", age: 14 },
    { name: "Victoria (Glory Girl)", age: 17 },
    { name: "Victoria (Antares)", age: 17 },
    { name: "Amy (Panacea)", age: 17 },
    { name: "Amy (Red Queen)", age: 17 },
    { name: "Crystal (Lazerdream)", age: 18 },
    { name: "Mike (Lightstar)", age: 18 },
    { name: "Jess (Fleur)", age: 18 },

    { name: "Francis Krouse (Trickster)", age: 18 },
    { name: "Cody (Perdition)", age: 18 },
    { name: "Jess (Genesis)", age: 18 },
    { name: "Marissa (Sundancer)", age: 18 },
    { name: "Luke (Ballistic)", age: 18 },
    { name: "Oliver", age: 18 },
    { name: "Noelle (Echidna)", age: 18 },

    { name: "Uber", age: 18 },
    { name: "Leet", age: 18 },
    { name: "Circus", age: 18 },

    { name: "Accord", age: 18 },
    { name: "Jeanne (Citrine)", age: 18 },
    { name: "Othello", age: 18 },
    { name: "Lizardtail", age: 18 },
    { name: "Ligeia", age: 18 },
    { name: "Jacklight", age: 18 },
    { name: "Codex", age: 18 },

    { name: "Doctor Mother", age: 18 },
    { name: "Rebecca (Alexandria)", age: 18 },
    { name: "Keith (Legend)", age: 18 },
    { name: "David (Eidolon)", age: 18 },
    { name: "Kurt (Harbinger)", age: 18 },
    { name: "Kurt (Number Man)", age: 18 },
    { name: "Kurt (Clone)", age: 10 },
    { name: "William Manton", age: 18 },
    { name: "Siberian", age: 18 },
    { name: "Doormaker", age: 18 },
    { name: "Clairvoyant", age: 18 },
    { name: "The Slug", age: 18 },
    { name: "Custodian", age: 18 },
    { name: "Fortuna (Contessa)", age: 18 },

    { name: "Ashley (Damsel of Distress I)", age: 18 },
    { name: "Ashley (Damsel of Distress II)", age: 18 },
    { name: "Ashley (Swansong)", age: 18 },
    { name: "Ashley (Clone)", age: 18 },
    { name: "Chris Elman (Lab Rat)", age: 18 },
    { name: "Chris Elman (Cryptid)", age: 9 },
    { name: "Sveta (Garrotte)", age: 18 },
    { name: "Sveta (Tress)", age: 18 },
    { name: "Kenzie (Optics)", age: 7 },
    { name: "Kenzie (Lookout)", age: 7 },
    { name: "Tristan (Capricorn Red)", age: 13 },
    { name: "Byron (Capricorn Blue)", age: 13 },
    { name: "Rain (Precipice)", age: 12 },

    { name: "Roman Vasil", age: 8 },
    { name: "Juliette (Catena)", age: 9 },
    { name: "Chastity Vasil", age: 13 },
    { name: "Darlene (Syndicate)", age: 6 },
    { name: "Candy (Decadent)", age: 7 },
    { name: "Aroa Vasil", age: 9 },
    { name: "Samuel Vasil", age: 12 },
    { name: "Florence Vasil", age: 5 },
    { name: "Valentina Vasil", age: 17 },
    { name: "Cherie (Cherish)", age: 18 },
    { name: "Nicholas Vasil", age: 18 },
    { name: "Guillaume Vasil", age: 18 },

    { name: "Danny Hebert", age: 18 },
    { name: "Annette Hebert", age: 18 },
    { name: "June Livsey", age: 18 },
    { name: "Fred Livsey", age: 18 },

    { name: "May (March)", age: 16 },
    { name: "Homer", age: 18 },

    { name: "Tori Heflin", age: 18 },
    { name: "Bianca (Goddess)", age: 18 },
    { name: "Megan", age: 18 },
    { name: "Jace", age: 18 },
    { name: "Bill (Blood Priest)", age: 18 },
    { name: "Ysmine", age: 18 },

    { name: "Jack (Slash)", age: 18 },
    { name: "Ned (Crawler)", age: 18 },
    { name: "Alan (Mannequin)", age: 18 },
    { name: "Shatterbird", age: 18 },
    { name: "Mimi (Burnscar)", age: 18 },
    { name: "Riley (Bonesaw)", age: 12 },
    { name: "Hatchetface", age: 18 },
    { name: "Murder Rat", age: 18 },
    { name: "Pagoda", age: 18 },
    { name: "Night Hag", age: 18 },
    { name: "Psychosoma", age: 18 },
    { name: "Skinslip", age: 18 },
    { name: "Nyx", age: 18 },
    { name: "Bradley (Breed)", age: 18 },
    { name: "Chuckles", age: 18 },
    { name: "Winter", age: 18 },
    { name: "Crimson", age: 18 },

    { name: "Chevalier", age: 18 },
    { name: "Dovetail", age: 18 },
    { name: "Adamant", age: 18 },
    { name: "Ursa Aurora", age: 18 },
    { name: "Prism", age: 18 },
    { name: "Jouster", age: 17 },

    { name: "Halo", age: 18 },
    { name: "Rosary", age: 18 },
    { name: "Nate (Reconciliation)", age: 13 },

    { name: "Lord of Loss", age: 18 },
    { name: "Nursery", age: 18 },
];

// Stolen from the Gaylor generator
var prompts = [
    { name: "First kiss", nsfw: false },
    { name: "Power-enforced blood drinking/vampirism", nsfw: false },
    { name: "Death fic", nsfw: false },
    { name: "Mind control", nsfw: false },
    { name: "Split in half/into multiple identities Fenton Ghost Catcher Style ", nsfw: false },
    { name: "Willing sacrifice", nsfw: false },
    { name: "Body sharing", nsfw: false },
    { name: "Twenty-four hours to live", nsfw: false },
    { name: "Exhibitionism", nsfw: true },
    { name: "Unhappy ending", nsfw: false },
    { name: "Sex pollen", nsfw: true },
    { name: "Hurt/Comfort", nsfw: false },
    { name: "Pet play", nsfw: true },
    { name: "Survive an Endbringer", nsfw: false },
    { name: "Somehow not dead/alive again/sudden resurrection", nsfw: false },
    { name: "Fingering", nsfw: true },
    { name: "Soulmate timers", nsfw: false },
    { name: "Codependent", nsfw: false },
    { name: "Fuck you/Fuck me yourself coward!!!", nsfw: true },
    { name: "Handcuffed together/Trapped in a small space", nsfw: false },
    { name: "Tentacle porn", nsfw: true },
    { name: "Crossover", nsfw: false },
    { name: "Power Rangers", nsfw: false },
    { name: "Against all odds", nsfw: false },
    { name: "Bodyswap", nsfw: false },
    { name: "Beach episode", nsfw: false },
    { name: "Alt trigger", nsfw: false },
    { name: "Master-brainwashing", nsfw: false },
    { name: "Enemies to friends to lovers", nsfw: false },
    { name: "Trans character", nsfw: false },
    { name: "Wuxia AU", nsfw: false },
    { name: "Denial", nsfw: true },
    { name: "You saved my life; now it's yours", nsfw: false },
    { name: "Bodyguard trope", nsfw: false },
    { name: "Florist shop AU", nsfw: false },
    { name: "Ziz bomb romance", nsfw: false },
    { name: "Bondage", nsfw: true },
    { name: "Sharing a bed", nsfw: true },
    { name: "Tentacle porn", nsfw: true },
    { name: "Sex toys", nsfw: true },
    { name: "Somnophilia", nsfw: true },
    { name: "Anal", nsfw: true },
    { name: "Guild member", nsfw: false },
    { name: "Traitor", nsfw: false },
    { name: "Incest", nsfw: true },
    { name: "Titanifaction", nsfw: false },
    { name: "Band AU", nsfw: false },
    { name: "New stepsibling(s)", nsfw: true },
    { name: "Ward era", nsfw: false },
    { name: "Vial cape/s", nsfw: false },
    { name: "Canon compliant", nsfw: false },
    { name: "Pre-canon", nsfw: false },
    { name: "EdenVerse", nsfw: false },
    { name: "They Lost AU", nsfw: false },
    { name: "Steampunk AU", nsfw: false },
    { name: "Moonshot AU", nsfw: false },
    { name: "Pokemon Trainer AU", nsfw: false },
    { name: "Forcefem", nsfw: true },
    { name: "Alt Endbringer / Alt Endbringer fight", nsfw: false },
    { name: "Forcemasc", nsfw: true },
    { name: "Mirrorverse", nsfw: false },
    { name: "Characters as Pokémon AU", nsfw: false },
    { name: "Willing Feminization", nsfw: true },
    { name: "PHO fic", nsfw: false },
    { name: "C53ed character(s) ", nsfw: false },
    { name: "Willing Masculinization", nsfw: true },
    { name: "Hero/Villain relationship", nsfw: false },
    { name: "Sudden pet adoption", nsfw: false },
    { name: "Stepsiblings", nsfw: true },
    { name: "Cauldron member(s) ", nsfw: false },
    { name: "Parahumans war", nsfw: false },
    { name: "Just a dream", nsfw: false },
    { name: "Birdcaged AU", nsfw: false },
];
var incestPrompts = [
    "Incest",
    "Stepsiblings",
    "New stepsibling(s)"
];

function getAgeCategory(age) {
    if (age <= 14) { return 14; }
    if (age >= 18) { return 18; }
    return 16;
}

var heberts = ["Taylor", "Danny", "Annette"];
var livseys = ["Lisa", "June", "Fred"];
var laborns = ["Brian", "Aisha"];
var vasils = ["Alec", "Darlene", "Cherie", "Roman", "Juliette", "Chastity", "Aroa", "Florence", "Samuel", "Candy", "Valentina", "Nicholas", "Guillaume"];
var dallonPelhams = ["Carol", "Mark", "Victoria", "Amy", "Neil", "Sarah", "Eric", "Crystal", "Mike", "Jess"];
var veras = ["Tristan", "Byron"];

function getFamily(characterName) {
    var firstName = characterName.split(" ")[0];
    if (heberts.includes(firstName)) {
        return "Hebert";
    } else if (livseys.includes(firstName)) {
        return "Livsey";
    } else if (laborns.includes(firstName)) {
        return "Laborn";
    } else if (vasils.includes(firstName)) {
        return "Vasil";
    } else if (dallonPelhams.includes(firstName)) {
        return "Dallon-Pelham";
    } else if (veras.includes(firstName)) {
        return "Vera";
    } else {
        return null;
    }
}

function getRandomEntry(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getCharacter(pickedChars, filteredChars, allowIncest) {
    if (allowIncest) {
        return getRandomEntry(filteredChars);
    } else {
        var pickedFamilies = new Set(pickedChars.map(charName => getFamily(charName)));
        while (true) {
            var character = getRandomEntry(filteredChars);
            var family = getFamily(character.name);
            if (family === null || !pickedFamilies.has(family)) {
                return character;
            }
        }
    }
}

function getAllowedAgeGroups(ageGroup14, ageGroup16, ageGroup18) {
    var allowedAges = [];
    if (ageGroup14) { allowedAges.push(14); }
    if (ageGroup16) { allowedAges.push(16); }
    if (ageGroup18) { allowedAges.push(18); }
    return allowedAges;
}

function getPrompt(enablePrompts, nsfwPrompts, allowIncest) {
    if (!enablePrompts) { return ""; }
    var promptList = prompts;
    if (!nsfwPrompts) {
        promptList = promptList.filter(prompt => !prompt.nsfw);
    }
    if (!allowIncest) {
        promptList = promptList.filter(prompt => !incestPrompts.includes(prompt.name));
    }
    return "<br />Prompt: " + getRandomEntry(promptList).name;
}

function formatNames(names, showCapeNames) {
    if (showCapeNames) {
        return names.join("/");
    } else {
        return names.map(name => name.split(" (")[0]).join("/");
    }
}

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
            pickedChars.push(firstChar.name);
            if (sameGroup) {
                var filteredChars = characters.filter(char => getAgeCategory(char.age + year) === getAgeCategory(firstChar.age + year));
            }
            for (var i = 0; i < numChars - 1; i++) {
                pickedChars.push(getCharacter(pickedChars, filteredChars, allowIncest).name);
            }

            document.getElementById("output").innerHTML = formatNames(pickedChars, showCapeNames) + getPrompt(enablePrompts, nsfwPrompts, allowIncest);
        } else {
            document.getElementById("output").innerHTML = "No characters matching filters"
        }
    } else {
        document.getElementById("output").innerHTML = "Enter a number of characters greater than 0"
    }
});
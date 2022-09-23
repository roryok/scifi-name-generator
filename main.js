var fs = require("fs");
var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

Array.prototype.random = function (x) {
    let n = rnd(0,this.length);
    return this[n];
};
Array.prototype.contains = function (x) {
    return this.indexOf(x) > -1;
};
String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

function rnd(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}

console.clear();
const consonants = "bcdfghjklmnpqrstvwxyz";
const nonlatinconsonants = "çņšȚțșśńźСмирнвИКуклЛНМтВьйГгБćĐđčžñ-ıŞÇ";
const vowels = "aeiou";
const nonlatinvowels = "üøäéèáÓēūīļāîóąłÁõúо́азецПпбдёсЗíöÖ";

function mutatename(name, i = -1 /* i = letterIndex */){
    name = name.toLowerCase();

    for(var j = 0; j < rnd(1,3); j++){
        // pick a random letter in this name, detect whether a vowel or consonant, and shift italics
        if (i == -1) i = rnd(0, name.length);
        
        if (consonants.match(name[i]))
            return (name.replace(name[i],consonants[Math.floor(Math.random()*consonants.length)])).capitalize()
        
        else if (vowels.match(name[i]))
            return (name.replace(name[i],vowels[Math.floor(Math.random()*vowels.length)])).capitalize()    
    } 
}

// generate a random male and female name

for (var i = 0; i < 5; i++) {
    let maleFirstName = mutatename(data.male.random());
    let maleSurname = mutatename(data.surnames.random());
    console.log(`Male: ${maleFirstName} ${maleSurname}`);
}

for (var i = 0; i < 5; i++) {
    let femaleFirstName = mutatename(data.female.random());
    let femaleSurname = mutatename(data.surnames.random());
	console.log(`Female: ${femaleFirstName} ${femaleSurname}`);
}

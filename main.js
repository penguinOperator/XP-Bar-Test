let quotes = [
    "Code never lies, only comments sometimes do.",
    "The best debugger is your brain — so use it.",
    "There’s no other place like 127.0.0.1.",
    "Git commit — always because you have to.",
    "When in doubt of it, console.log it.",
    "Semicolons are optional. Your job isn’t.",
    "Frontend is pain. Backend is suffering.",
    "JavaScript: The good parts… and the weird parts.",
    "You miss 100% of the shots you don’t test.",
    "CSS is just dark magic with curly braces.",
    "The browser is your canvas. And also your enemy.",
    "Coding is 10% writing, 90% cursing at your screen.",
    "Stack Overflow: Therapist for developers.",
    "npm install hope --save --auto --pls",
    "Works on my machine = not my problem.",
    "Refactor until it’s beautiful. Or breaks.",
    "HTML is not a programming language. Cope.",
    "Bnard saw your div nesting. He’s ashamed.",
    "Naming things is hard. So is dleting code.",
    "Software is like entropy: it always increases."
]

let subtleColors = [
    "#ffdbdb",
    "#fffcdb",
    "#ffebdb",
    "#f5ffdb",
    "#e1ffdb",
    "#dbfff4",
    "#dbf5ff",
    "#dbe0ff",
    "#f3dbff",
    "#ffdbfb",
    "#ffb6b6",
    "#2f2f2f",
]

let btn = document.querySelector('.punch-btn');
let quotebox = document.querySelector('#quoteBox');
let xp = document.querySelector('#xpProgression');
let header = document.querySelector('.header1');
let xpPoints = 0;

btn.addEventListener('click', function() {
    let quoteIndex = Math.floor(Math.random() * quotes.length);
    quotebox.innerText = quotes[quoteIndex];

    let subtuleColorsIndex = Math.floor(Math.random() * subtleColors.length);
    header.style.color = subtleColors[subtuleColorsIndex];

    if (xpPoints >= 555) {
        xp.style.width = "555px";
        btn.remove();
        quotebox.remove();
        header.innerText = "You did it!";
        header.style.color = "white";
        console.log("Enough");
    }

    xpPoints += 5;
    xp.style.width = xpPoints + "px";
    console.log("Current XP:", xpPoints);
})
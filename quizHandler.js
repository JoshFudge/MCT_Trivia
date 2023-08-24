"use strict";

const $ = selector => document.querySelector(selector);

// Dictionary of all 20 qustions and their possible answers and actual answer
var answerBank = {

    0 : ["What is the weakest armor in Terraria?",
        "Wood Armor",
        "Shadow Armor",
        "Gold Armor",
        "Copper Armor",
        'D'],

    1 : ["In what Terraria biome, do you have to be to fight the Eater of Worlds?",
        "Corruption",
        "Forest",
        "Hell",
        "Meteor",
        'A'],

    2 : ["In Terraria, What is the second ingredient in a Hellstone bar, aside from Hellstone ore?",
        "Iron Ore",
        "Obsidian",
        "Vile Mushroom",
        "Stone Block",
        'B'],

    3 : ["What is the name of the Terraria boss with the most HP?",
        "Eater of Worlds",
        "Skeletron", 
        "Wall of Flesh",
        "Ender Dragon",
        'C'],

    4 : ["What Terraria potion makes you immune to lava?",
        "Gills Potion",
        "Wrath Potion",
        "Iron Skin Potion",
        "Obsidian Skin Potion",
        'D'],

    5 : ["What is the strongest pickaxe in Terraria?",
        "Gold Pickaxe",
        "Nightmare Pickaxe",
        "Molten Pickaxe",
        "Silver Pickaxe",
        'C'],

    6 : ["What is the sequence of Terraria pre-hardmode bosses",
        "King Slime, Eye of Cthulhu, Eater of World",
        "Moon Lord, King Slime, Brain of Cthulhu",
        "Queen Bee, Empress of Light, Destroyer",
        "Skeletron Prime, The Twins, Plantrea",
        'A'],

    7 : ["What is the strongest spear in Terraria?",
        "Dark Lance",
        "Ghastly Glaive",
        "Daybreak",
        "Chlorophyte Partisan",
        'C'],

    8 : ["What Terraria monster drops the Tattered Cloth item?",
        "Tim",
        "Goblin Scout",
        "Jungle Slime",
        "Undead Miner",
        'B'],

    9 : ["How many flail-type weapons are there in Terraria?",
        "4",
        "12",
        "7",
        "15",
        'D'],


///////////////////////// MINECRAFT QUESTIONS////////////////////////////////



    10 : ["What is the strongest material in Minecraft used to craft Armor/Tools?",
        "Diamond",
        "Gold",
        "Iron",
        "Netherite",
        'D'],

    11 : ["In what Minecraft biome, can you find above ground abandoned mineshafts?",
        "Badlands",
        "Giant Taiga",
        "Shattered Savannah",
        "Warm Ocean",
        'A'],

    12 : ["In Minecraft, What is the second ingredient in a Jukebox Block, aside from wooden planks?",
        "Iron Ingot",
        "Redstone Dust",
        "Music Disc",
        "Diamond",
        'D'],

    
    13 : ["What Minecraft enchantment allows players to deal more damage to undead monsters?",
        "Sharpness",
        "Smite",
        "Piercing",
        "Power",
        'B'],

    14 : ["What potion makes you jump higher in Minecraft?",
        "Potion of Leaping",
        "Potion of Jumping",
        "Potion of Rabbits Leg",
        "Potion of Leg Strength",
        'A'],

    15 : ["What type of pickaxe mines stone the fastest in Minecraft?",
        "Gold",
        "Netherite",
        "Diamond",
        "Stone",
        'A'],

    16 : ["How far will water flow on an even plot of land in Minecraft?",
        "5 Blocks",
        "Infinitely",
        "7 Blocks",
        "10 Blocks",
        'C'],                                                   

    17 : ["Which of the following is NOT a version of minecraft currently available to play?",
        "Minecraft PS Vita Edition",
        "Minecraft Wii Edition",
        "Minecraft Education Edition",
        "Minecraft New 3DS Edition",
        'B'],

    18 : ["What Minecraft mob drops leather when killed?",
        "Sheep",
        "Pig",
        "Zombie",
        "Cow",
        'D'],

    19 : ["Which of the following is not a realm currently in Minecraft (As of 1.19)?",
        "Nether",
        "The End",
        "Aether",
        "Overworld",
        'C']
}
// List of all the images that go with their respective question
var imgBank = [

        "images/armor1.png",
        "images/forest2.png",
        "images/hellstone3.png",
        "images/enderDragon4.gif",
        "images/alchemyTable5.gif",
        "images/reaverShark6.png",
        "images/destroyer7.png",
        "images/darkLance8.png",
        "images/tim9.png",
        "images/dripplerCrippler10.png",
        "images/Q1_Ores.png",
        "images/Q2_Mineshaft.png",
        "images/Q3_Jukebox.png",
        "images/Q4_EnchantmentBook.png",
        "images/Q5_JumpPotion.png",
        "images/Q6_Pickaxe.png",
        "images/Q7_Water.png",
        "images/Q8_MinecraftVersion.png",
        "images/Q9_Leather.png",
        "images/Q10_Realms.png"
]
// Function to create a list of 20 random numbers between 0-19
function randomQuesitonIdList(){
    let qList = [];
    
    // Loop through 20 times
    for(let j = 0; j < 10;){
        let num =  Math.floor(Math.random() * 19) + 1;
        // check for any duplicate questions
        if(!qList.includes(num)){
            // If not a duplicate, add it to the list
            qList.push(num);
            // increment the counter
            j++;
        }
    }
    return qList;
}

// Function to set the text/img of the question header,
// options, and supporting image to the current questions repective data.
function questionTextHandler(questionId){

    $("#question").textContent = answerBank[questionId][0];
            
    $("#option1").nextElementSibling.textContent = answerBank[questionId][1];
    $("#option2").nextElementSibling.textContent = answerBank[questionId][2];
    $("#option3").nextElementSibling.textContent = answerBank[questionId][3];
    $("#option4").nextElementSibling.textContent = answerBank[questionId][4];
    $("#questionIMG").src = imgBank[questionId];
}

// Initialize the score, create the lit of random questions,
// and the users selection
let score = 0;
let randomList = randomQuesitonIdList();
let option;

// arrow function t check whether the user selected the correct option
const checkAnswer = (num) =>{
    let testNum = randomList[num];
    // if user selected A, set option to A
    if($('#option1').checked == true){
        option = 'A';
    }
        // if user selected B, set option to B
    else if($('#option2').checked == true){
        option = 'B';
    }
        // if user selected C, set option to C
    else if($('#option3').checked == true){
        option = 'C';
    }
        // if user selected D, set option to D
    else if($('#option4').checked == true){
        option = 'D';
    }
    // Ifthe user selected the correct option, Add 1 to their score
    if(option == answerBank[testNum][5]){
        score ++;
    }
    return score;
}

function socials(){
    $("#option1").nextElementSibling.textContent = "Josh's Linkedin";
    $("#option2").nextElementSibling.textContent = "Josh's Github";
    $("#option3").nextElementSibling.textContent = "Jared's Linkedin";
    $("#option4").nextElementSibling.textContent = "Jared's Github";
}

function jaredGithubClick(){
    window.open("https://github.com/JaredPittman");
}
function joshGithubClick(){
    window.open("https://github.com/JoshFudge");
}
function jaredLinkedinClick(){
    window.open("https://www.linkedin.com/in/jared-pittman-810a34203/");
}
function joshLinkedinClick(){
    window.open("https://www.linkedin.com/in/joshua-fudge-1343b6223/");
}


// When the page loads...
document.addEventListener("DOMContentLoaded", () =>{
    // Initialize counter i to 1
    let i = 1;
    // Display the first question
    questionTextHandler(randomList[0]); 

    // Click handler for the submit button
    $("#submit").addEventListener ("click", ()=>{

    // Check to see if the submit button was clicked
    // without an option being selected
    if($('#option1').checked == false && 
    $('#option2').checked == false && 
    $('#option3').checked == false && 
    $('#option4').checked == false){
        // If so, display an appropriate error message
    $("#warning").textContent = "Please Select 1 of 4 options!";
    } 
    else{
        // If a option is selected...
        // Set the warning back to empty
        $("#warning").textContent = " ";
        // Play the option selected audio
        document.getElementById("selectionAudio").play();
            // if the counter is less than or equal to 10..
            if(i <= 10){         
                // first,check to see if the users answer is correct
                checkAnswer(i-1);
                    // then, if the counter is still less than 10
                    if(i < 10){
                        // Set the appropriate information
                        questionTextHandler(randomList[i]); 
                    }else{
                        // If the last question has been completed..
                        // Play the results audio
                        document.getElementById("webpageAudio").play();
                        
                        // Display the trophy Image
                        $("#questionIMG").src = "Trophy_Image.png";     
                        // set the header to a thank you message
                        $("h1").textContent = "Thank you for completing our quiz! Click on the text to view our Socials!";
                        // Set the question to a message displaying the users score
                        $("#question").textContent = "You scored "+ score + "/10!!";

                        // Display the Social links in the form
                        socials();

                        // Set click handlers for each text/Link
                        $("#option1").nextElementSibling.addEventListener("click", joshLinkedinClick);
                        $("#option2").nextElementSibling.addEventListener("click", joshGithubClick);
                        $("#option3").nextElementSibling.addEventListener("click", jaredLinkedinClick)
                        $("#option4").nextElementSibling.addEventListener("click", jaredGithubClick);
                        
                        // Set the Submit buttons display to non to hide it
                        document.getElementById("submit").style.display = "none";

                        // Hide the radio button and set the text to purple  for each option
                        document.getElementById("option1").style.display = "none";
                        document.getElementById("span1").style.color = "purple";

                        document.getElementById("option2").style.display = "none";
                        document.getElementById("span2").style.color = "purple";

                        document.getElementById("option3").style.display = "none";
                        document.getElementById("span3").style.color = "purple";

                        document.getElementById("option4").style.display = "none";
                        document.getElementById("span4").style.color = "purple";
                        }
                    }
                    // reset the radio button so that it becomes unchecked at the next question
                $('input[name="questionOption"]:checked').checked = false;
                // Increment the counter
                i++;
            }
    });
})






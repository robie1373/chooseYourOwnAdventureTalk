define(function() {
 return function createSlides() {
    var structMap = {};
    var slide000 = {};
    var slide001 = {};
    var slide002 = {};
    var slide003 = {};
    var slide004 = {};
    var slide005 = {};

    slide000["sid"] = "000";
    slide000["hint"] = "The Singularity"
    slide000["children"]={};
    slide000["children"]["fist"]=1;
    slide000["slideData"]={};
    slide000["slideData"]["title"]="Your Program will begin soon."
    slide000["slideData"]["subtitle"]="Please stand by."

    slide001["sid"] = "001";
    slide001["hint"]="Back to the beginning";
    slide001["children"]={};
    slide001["children"]["fist"]=2;
    slide001["children"]["hand"]=3;
    slide001["slideData"]={};
    slide001["slideData"]["title"]="Pinecones";
    slide001["slideData"]["subtitle"]="Natures Pokey Ball";

    slide002["sid"] = "002";
    slide002["hint"]="Tell me about Nature!";
    slide002["children"]={};
    slide002["children"]["fist"]=1;
    slide002["children"]["peace"]=4;
    slide002["children"]["hand"]=5;
    slide002["slideData"]={};
    slide002["slideData"]["title"]="Nature";
    slide002["slideData"]["singleText"]="Nature is full of funky stuff. Some of it is good to eat, some of it is fun to throw.<br>Some good to eat things are:<br>* Carrots<br>* Milk<br>* Honey";

    slide003["sid"] = "003";
    slide003["hint"]="Wha? Pokey balls?";
    slide003["children"]={};
    // slide003["children"]["fist"]=006;
    slide003["children"]["hand"]=1;
    slide003["slideData"]={};
    slide003["slideData"]["title"]="Pokey Balls";
    slide003["slideData"]["columnText"]=[];
    slide003["slideData"]["columnText"][0]="Pokey balls (Weapons).<br>* Mace<br>* Flail<br>* Orange with nails in it."
    slide003["slideData"]["columnText"][1]="Pokey balls (Food).<br>* Dragon fruit.<br>* Durian.<br>* Orange with cloves in it."

    slide004["sid"] = "004";
    slide004["hint"]="Good to eat you say?";
    slide004["children"]={};
    slide004["children"]["fist"]=1;
    slide004["slideData"]={};
    slide004["slideData"]["title"]="Things that are good to eat";
    slide004["slideData"]["singleText"]="* Carrots - Orange things are not always oranges.<br>* Milk - Cows way of saying Thanks for not eating me.<br>* Honey - Delicious but disturbing.";

    slide005["sid"] = "005";
    slide005["hint"]="I wanna throw stuff.";
    slide005["children"]={};
    slide005["children"]["fist"]=1;
    slide005["slideData"]={};
    slide005["slideData"]["title"]="Not just for monkeys anymore";
    slide005["slideData"]["singleText"]="Do you want to fling poo? Sure, we all do.<br>Just remember to wash your hands. Cleanliness is next to Dogliness.";


    structMap["show"]={};
    structMap["show"]["slides"]={};
    structMap["show"]["slides"][0]=slide000;
    structMap["show"]["slides"][1]=slide001;
    structMap["show"]["slides"][2]=slide002;
    structMap["show"]["slides"][3]=slide003;
    structMap["show"]["slides"][4]=slide004;
    structMap["show"]["slides"][5]=slide005;
    return structMap
  }




});
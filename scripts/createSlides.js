define(function() {
 return function createSlides() {
    var structMap = {};
    var slide001 = {};
    var slide002 = {};
    var slide003 = {};
    var slide005 = {};
    var slide008 = {};

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
    slide002["children"]["peace"]=5;
    slide002["children"]["hand"]=8;
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

    slide005["sid"] = "005";
    slide005["hint"]="Good to eat you say?";
    slide005["children"]={};
    slide005["children"]["fist"]=1;
    slide005["slideData"]={};
    slide005["slideData"]["title"]="Things that are good to eat";
    slide005["slideData"]["singleText"]="* Carrots - Orange things are not always oranges.<br>* Milk - Cows way of saying Thanks for not eating me.<br>* Honey - Delicious but disturbing.";

    slide008["sid"] = "008";
    slide008["hint"]="I wanna throw stuff.";
    slide008["children"]={};
    slide008["children"]["fist"]=1;
    slide008["slideData"]={};
    slide008["slideData"]["title"]="Not just for monkeys anymore";
    slide008["slideData"]["singleText"]="Do you want to fling poo? Sure, we all do.<br>Just remember to wash your hands. Cleanliness is next to Dogliness.";


    structMap["show"]={};
    structMap["show"]["slides"]={};
    structMap["show"]["slides"][1]=slide001;
    structMap["show"]["slides"][2]=slide002;
    structMap["show"]["slides"][3]=slide003;
    structMap["show"]["slides"][5]=slide003;
    structMap["show"]["slides"][8]=slide003;
    return structMap
  }




});
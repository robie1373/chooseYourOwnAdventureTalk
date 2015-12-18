define(function() {
 return function createSlides() {
    var structMap = {};
    var slide0 = {};
    var slide1 = {};
    var slide2 = {};
    var slide3 = {};
    var slide4 = {};
    var slide5 = {};

    slide0["sid"] = "0";
    slide0["hint"] = "The Singularity"
    slide0["children"]={};
    slide0["children"]["fist"]=1;
    slide0["slideData"]={};
    slide0["slideData"]["title"]=encodeURIComponent("Your Program will begin soon.");
    slide0["slideData"]["subtitle"]=encodeURIComponent("Please stand by.");

    slide1["sid"] = "1";
    slide1["hint"]=encodeURIComponent("To the beginning");
    slide1["children"]={};
    slide1["children"]["fist"]=2;
    slide1["children"]["hand"]=3;
    slide1["slideData"]={};
    slide1["slideData"]["title"]=encodeURIComponent("Pinecones");
    slide1["slideData"]["subtitle"]=encodeURIComponent("Nature's Pokey Ball");

    slide2["sid"] = "2";
    slide2["hint"]=encodeURIComponent("Tell me about Nature!");
    slide2["children"]={};
    slide2["children"]["fist"]=1;
    slide2["children"]["peace"]=4;
    slide2["children"]["hand"]=5;
    slide2["slideData"]={};
    slide2["slideData"]["title"]=encodeURIComponent("Nature");
    slide2["slideData"]["singleText"]=("Nature's full of funky stuff. Some of it is good to eat, some of it is fun to throw.\nSome good to eat things are:\n* Carrots\n* Milk\n* Honey");

    slide3["sid"] = "3";
    slide3["hint"]=encodeURIComponent("Wha? Pokey balls?");
    slide3["children"]={};
    // slide3["children"]["fist"]=006;
    slide3["children"]["hand"]=1;
    slide3["slideData"]={};
    slide3["slideData"]["title"]=encodeURIComponent("Pokey Balls");
    slide3["slideData"]["columnText"]=[];
    slide3["slideData"]["columnText"][0]=encodeURIComponent("Pokey balls (Weapons).<br>* Mace<br>* Flail<br>* Orange with nails in it.");
    slide3["slideData"]["columnText"][1]=encodeURIComponent("Pokey balls (Food).<br>* Dragon fruit.<br>* Durian.<br>* Orange with cloves in it.");

    slide4["sid"] = "4";
    slide4["hint"]=encodeURIComponent("Good to eat you say?");
    slide4["children"]={};
    slide4["children"]["fist"]=1;
    slide4["slideData"]={};
    slide4["slideData"]["title"]=encodeURIComponent("Things that are good to eat");
    slide4["slideData"]["singleText"]=("* Carrots - Orange things are not always oranges.<br>* Milk - Cows way of saying Thanks for not eating me.<br>* Honey - Delicious but disturbing.");

    slide5["sid"] = "5";
    slide5["hint"]=encodeURIComponent("I wanna throw stuff.");
    slide5["children"]={};
    slide5["children"]["fist"]=1;
    slide5["slideData"]={};
    slide5["slideData"]["title"]=encodeURIComponent("Not just for monkeys anymore");
    slide5["slideData"]["singleText"]=("Do you want to fling poo? Sure, we all do.<br>Just remember to wash your hands. Cleanliness is next to Dogliness.");


    structMap["show"]={};
    structMap["show"]["slides"]={};
    structMap["show"]["slides"][0]=slide0;
    structMap["show"]["slides"][1]=slide1;
    structMap["show"]["slides"][2]=slide2;
    structMap["show"]["slides"][3]=slide3;
    structMap["show"]["slides"][4]=slide4;
    structMap["show"]["slides"][5]=slide5;
    return structMap
  }




});
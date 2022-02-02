var chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];


function addTransformer(val){
    let ele=document.createElement("div");
    ele.className="character "+val.afl;
    let image, vColor;

    if(val.afl==="autobot"){
        image="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    }
    else{
        image="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
    }
    switch(val.vehicle){
        case "truck":
            vColor="blue";
        break;
        case "tank":
            vColor="green";
        break;
        case "car":
            vColor="gold";
        break;
        default:
            vColor="white";
        break;
    }
    ele.innerHTML="<img src='"+image+"' alt='"+val.afl+"'>";
    ele.innerHTML+="<div>Name: "+val.name+"</div>";
    ele.innerHTML+="<div>Class: "+val.class.toUpperCase()+"</div>";
    ele.innerHTML+="<div>Vehicle: <span style='color:"+vColor+"'>"+val.vehicle+"</span></div>";
    document.body.appendChild(ele);
}

for(let i=0;i<chrs.length;i++){
    addTransformer(chrs[i]);
}
var header = document.getElementById("header");

header.style="background:#777; border: 1px solid #eaea10;";

var title = document.createElement("h1");
title.textContent="Random Tip Generator";

header.appendChild(title);

var description = document.createElement("p");
description.innerHTML = "This Is A Description";

header.appendChild(description);

var quoteArea=document.createElement("div");
quoteArea.setAttribute("id","quoteArea");

var dataTips=[];
dataTips=[
  {tip:"you can turn right on a red light"},
  {tip:"start speeding up before you merge onto the freeway"},
  {tip:"xbox is better than playstation"}, 
  {tip:"dont become a weeb "}, 
  {tip:"darth vader is lukes father"}
    ];
    
console.log(dataTips.length);
console.log("skdljfsdkj");
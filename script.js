$(document).ready(()=>{$("li>img").on("click",e=>{let a=$(e.currentTarget).attr("alt"),r=function(){let e;switch(Math.floor(Math.random()*Math.floor(3))){case 0:e="rock";break;case 1:e="paper";break;case 2:e="scissor"}return e}(),t=function(e,a){switch(e){case a:return"tied";case"rock":return"scissor"===a?"win":"lost";case"scissor":return"paper"===a?"win":"lost";case"paper":return"rock"===a?"win":"lost"}}(a,r);$("#result").replaceWith("<div id='result'><h2>RESULT</h2><br><div id='resultFinal'><br><p>Your choice:</p><p>Computer's choice:</p><p>Score:</p></div></div>"),$("#battleAnimation").fadeIn(1e3).show(1),$("#battleText").delay(300).show(1).delay(300).hide(1).delay(300).show(1).delay(300).hide(1).delay(300).show(1).delay(300).hide(1).delay(300).show(1).delay(300).hide(1),$("#battleAnimation").delay(2e3).fadeOut(500),$("#result").delay(4e3).show(1),$("#resultFinal>p:eq(0)").after("<p class='score'>"+a+"</p>"),$("#resultFinal>p:eq(2)").after("<p class='score'>"+r+"</p>"),$("#resultFinal>p:eq(4)").after("<p class='score "+t+"'>"+t+"</p>")})});
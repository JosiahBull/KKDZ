document.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelector(".game-board");let e=[];function r(){const n=Math.floor(Math.random()*e.length);0==e[n].innerHTML?e[n].innerHTML=Math.random()>.5?4:2:r()}function t(){e.forEach((n=>n.innerHTML="")),r(),r()}document.addEventListener("keyup",(function(n){37===n.keyCode?(function(){for(let n=0;n<36;n+=6){let r=e[n].innerHTML,t=e[n+1].innerHTML,i=e[n+2].innerHTML,L=e[n+3].innerHTML,M=e[n+4].innerHTML,H=e[n+5].innerHTML,T=[parseInt(r),parseInt(t),parseInt(i),parseInt(L),parseInt(M),parseInt(H)];T=T.filter((n=>n));let a=6-T.length,l=T.concat(Array(a).fill(0));e[n].innerHTML=l[0],e[n+1].innerHTML=l[1],e[n+2].innerHTML=l[2],e[n+3].innerHTML=l[3],e[n+4].innerHTML=l[4],e[n+5].innerHTML=l[5]}}(),r(),r()):38===n.keyCode?(function(){for(let n=0;n<6;n++){let r=e[n].innerHTML,t=e[n+6].innerHTML,i=e[n+12].innerHTML,L=e[n+18].innerHTML,M=e[n+24].innerHTML,H=e[n+30].innerHTML,T=[parseInt(r),parseInt(t),parseInt(i),parseInt(L),parseInt(M),parseInt(H)];T=T.filter((n=>n));let a=6-T.length,l=T.concat(Array(a).fill(0));e[n].innerHTML=l[0],e[n+6].innerHTML=l[1],e[n+12].innerHTML=l[2],e[n+18].innerHTML=l[3],e[n+24].innerHTML=l[4],e[n+30].innerHTML=l[5]}}(),r(),r()):39===n.keyCode?(function(){for(let n=0;n<36;n+=6){let r=e[n].innerHTML,t=e[n+1].innerHTML,i=e[n+2].innerHTML,L=e[n+3].innerHTML,M=e[n+4].innerHTML,H=e[n+5].innerHTML,T=[parseInt(r),parseInt(t),parseInt(i),parseInt(L),parseInt(M),parseInt(H)];T=T.filter((n=>n));let a=6-T.length,l=Array(a).fill(0).concat(T);e[n].innerHTML=l[0],e[n+1].innerHTML=l[1],e[n+2].innerHTML=l[2],e[n+3].innerHTML=l[3],e[n+4].innerHTML=l[4],e[n+5].innerHTML=l[5]}}(),r(),r()):40===n.keyCode?(function(){for(let n=0;n<6;n++){let r=e[n].innerHTML,t=e[n+6].innerHTML,i=e[n+12].innerHTML,L=e[n+18].innerHTML,M=e[n+24].innerHTML,H=e[n+30].innerHTML,T=[parseInt(r),parseInt(t),parseInt(i),parseInt(L),parseInt(M),parseInt(H)];T=T.filter((n=>n));let a=6-T.length,l=Array(a).fill(0).concat(T);e[n].innerHTML=l[0],e[n+6].innerHTML=l[1],e[n+12].innerHTML=l[2],e[n+18].innerHTML=l[3],e[n+24].innerHTML=l[4],e[n+30].innerHTML=l[5]}}(),r(),r()):16===n.keyCode&&t()})),document.getElementById("new-btn").onclick=t,function(){for(let r=0;r<36;r++){let t=document.createElement("div");t.classList.add("cell"),t.setAttribute("data-index",r),e.innerHTML=0,n.appendChild(t),e.push(t)}r(),r()}()}));
//# sourceMappingURL=index.055baa22.js.map

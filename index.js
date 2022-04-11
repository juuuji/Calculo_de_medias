function calculoMedia(){
  p1= parseFloat(document.getElementById("b1p").value);
  p2= parseFloat(document.getElementById("b2p").value);
  p3= parseFloat(document.getElementById("b3p").value);
  p4= parseFloat(document.getElementById("b4p").value);

  mp = document.getElementById("mediaAnual1");
  var mediaP = (p1+p2+p3+p4)/4 ;
  mp.innerHTML= mediaP;
  
  m1= parseFloat(document.getElementById("b1m").value);
  m2= parseFloat(document.getElementById("b2m").value);
  m3= parseFloat(document.getElementById("b3m").value);
  m4= parseFloat(document.getElementById("b4m").value);

  mm = document.getElementById("mediaAnual2");
  var mediaM = (m1+m2+m3+m4)/4 ;
  mm.innerHTML= mediaM;

  h1= parseFloat(document.getElementById("b1h").value);
  h2= parseFloat(document.getElementById("b2h").value);
  h3= parseFloat(document.getElementById("b3h").value);
  h4= parseFloat(document.getElementById("b4h").value);

  mh = document.getElementById("mediaAnual3");
  var mediaH = (h1+h2+h3+h4)/4 ;
  mh.innerHTML= mediaH;

  g1= parseFloat(document.getElementById("b1g").value);
  g2= parseFloat(document.getElementById("b2g").value);
  g3= parseFloat(document.getElementById("b3g").value);
  g4= parseFloat(document.getElementById("b4g").value);

  mg = document.getElementById("mediaAnual4");
  var mediaG = (g1+g2+g3+g4)/4;
  mg.innerHTML= mediaG;

  i1= parseFloat(document.getElementById("b1i").value);
  i2= parseFloat(document.getElementById("b2i").value);
  i3= parseFloat(document.getElementById("b3i").value);
  i4= parseFloat(document.getElementById("b4i").value);

  mi = document.getElementById("mediaAnual5");
  var mediaI = (i1+i2+i3+i4)/4 ;
  mi.innerHTML= mediaI;
  
  if(mediaP >= 4){
      mp.className= "notaAzul";
  }else{
      mp.className= "notaVermelha";
  }
  if(mediaM >= 4){
      mm.className= "notaAzul";
  }else{
      mm.className= "notaVermelha";
  }
  if(mediaH >= 4){
      mh.className= "notaAzul";
  }else{
      mh.className= "notaVermelha";
  }
  if(mediaG >= 4){
      mg.className= "notaAzul";
  }else{
      mg.className= "notaVermelha";
  }
  if(mediaI >= 4){
      mi.className= "notaAzul";
  }else{
      mi.className= "notaVermelha";
  }

  exame();
}

function exame(){
  p1= parseFloat(document.getElementById("b1p").value);
  p2= parseFloat(document.getElementById("b2p").value);
  p3= parseFloat(document.getElementById("b3p").value);
  p4= parseFloat(document.getElementById("b4p").value);
  var mediaP = (p1+p2+p3+p4)/4 ;
  
  m1= parseFloat(document.getElementById("b1m").value);
  m2= parseFloat(document.getElementById("b2m").value);
  m3= parseFloat(document.getElementById("b3m").value);
  m4= parseFloat(document.getElementById("b4m").value);
  var mediaM = (m1+m2+m3+m4)/4 ;

  h1= parseFloat(document.getElementById("b1h").value);
  h2= parseFloat(document.getElementById("b2h").value);
  h3= parseFloat(document.getElementById("b3h").value);
  h4= parseFloat(document.getElementById("b4h").value);
  var mediaH = (h1+h2+h3+h4)/4 ;

  g1= parseFloat(document.getElementById("b1g").value);
  g2= parseFloat(document.getElementById("b2g").value);
  g3= parseFloat(document.getElementById("b3g").value);
  g4= parseFloat(document.getElementById("b4g").value);
  var mediaG = (g1+g2+g3+g4)/4;

  i1= parseFloat(document.getElementById("b1i").value);
  i2= parseFloat(document.getElementById("b2i").value);
  i3= parseFloat(document.getElementById("b3i").value);
  i4= parseFloat(document.getElementById("b4i").value);
  var mediaI = (i1+i2+i3+i4)/4 ;

  ep = document.getElementById("exame1");
  em = document.getElementById("exame2");
  eh = document.getElementById("exame3");
  eg = document.getElementById("exame4");
  ei = document.getElementById("exame5");

  if(mediaP < 5){
      ep.innerHTML= "Sim";
      ep.className= "notaVermelha";
  }
  else{
      ep.innerHTML= "Não";
      ep.className= "notaAzul";
  }
  if(mediaM < 5){
      em.innerHTML= "Sim";
      em.className= "notaVermelha";
  }
  else{
      em.innerHTML= "Não";
      em.className= "notaAzul";
  }
  if(mediaH < 5){
      eh.innerHTML= "Sim";
      eh.className= "notaVermelha";
  }else{
      eh.innerHTML= "Não";
      eh.className= "notaAzul";
  }
  if(mediaG < 5){
      eg.innerHTML= "Sim";
      eg.className= "notaVermelha";
  }else{
      eg.innerHTML= "Não";
      eg.className= "notaAzul";
  }
  if(mediaI < 5){
      ei.innerHTML= "Sim";
      ei.className= "notaVermelha";
  }else{
      ei.innerHTML= "Não";
      ei.className= "notaAzul";
  }

}

function finaliza(){

  rP= parseFloat(document.getElementById("notaExame1").value);
  rM= parseFloat(document.getElementById("notaExame2").value);
  rH= parseFloat(document.getElementById("notaExame3").value);
  rG= parseFloat(document.getElementById("notaExame4").value);
  rI= parseFloat(document.getElementById("notaExame5").value);

  p1= parseFloat(document.getElementById("b1p").value);
  p2= parseFloat(document.getElementById("b2p").value);
  p3= parseFloat(document.getElementById("b3p").value);
  p4= parseFloat(document.getElementById("b4p").value);

  mp = document.getElementById("fim1");
  var finalP = (p1+p2+p3+p4+rP)/2 ;
  mp.innerHTML= finalP;
  
  m1= parseFloat(document.getElementById("b1m").value);
  m2= parseFloat(document.getElementById("b2m").value);
  m3= parseFloat(document.getElementById("b3m").value);
  m4= parseFloat(document.getElementById("b4m").value);

  mm = document.getElementById("fim2");
  var finalM = (m1+m2+m3+m4+rM)/2 ;
  mm.innerHTML= finalM;

  h1= parseFloat(document.getElementById("b1h").value);
  h2= parseFloat(document.getElementById("b2h").value);
  h3= parseFloat(document.getElementById("b3h").value);
  h4= parseFloat(document.getElementById("b4h").value);

  mh = document.getElementById("fim3");
  var finalH = (h1+h2+h3+h4+rH)/2 ;
  mh.innerHTML= finalH;

  g1= parseFloat(document.getElementById("b1g").value);
  g2= parseFloat(document.getElementById("b2g").value);
  g3= parseFloat(document.getElementById("b3g").value);
  g4= parseFloat(document.getElementById("b4g").value);

  mg = document.getElementById("fim4");
  var finalG = (g1+g2+g3+g4+rG)/2 ;
  mg.innerHTML= finalG;

  i1= parseFloat(document.getElementById("b1i").value);
  i2= parseFloat(document.getElementById("b2i").value);
  i3= parseFloat(document.getElementById("b3i").value);
  i4= parseFloat(document.getElementById("b4i").value);

  mi = document.getElementById("fim5");
  var finalI = (i1+i2+i3+i4+rI)/2 ;
  mi.innerHTML= finalI;

  if(finalP < 4.0){
      mp.innerHTML = "Reprovado";
      mp.className ="notaVermelha";

  }else if(finalP >= 4 && finalP <7){
      mp.innerHTML = "Exame";

  }else{
      mp.innerHTML = "Aprovado";
      mp.className = "notaAzul";
  }

  if(finalM < 4.0){
      mm.innerHTML = "Reprovado";
      mm.className ="notaVermelha";

  }else if(finalM >= 4 && finalM <7){
      mm.innerHTML = "Exame";

  }else{
      mm.innerHTML = "Aprovado";
      mm.className = "notaAzul";
  }

  if(finalH < 4.0){
      mh.innerHTML = "Reprovado";
      mh.className ="notaVermelha";

  }else if(finalH >= 4 && finalH <7){
      mh.innerHTML = "Exame";

  }else{
      mh.innerHTML = "Aprovado";
      mh.className = "notaAzul";
  }

  if(finalG < 4.0){
      mg.innerHTML = "Reprovado";
      mg.className ="notaVermelha";

  }else if(finalG >= 4 && finalG <7){
      mg.innerHTML = "Exame";

  }else{
      mg.innerHTML = "Aprovado";
      mg.className = "notaAzul";
  }

  if(finalI < 4.0){
      mi.innerHTML = "Reprovado";
      mi.className ="notaVermelha";

  }else if(finalI >= 4 && finalI <7){
      mi.innerHTML = "Exame";

  }else{
      mi.innerHTML = "Aprovado";
      mi.className = "notaAzul";
  }

  mediaAnual();
}

function mudarcor(e){
  if(e.value>=4.0){
      e.className="notaAzul";
  }
  else{
      e.className="notaVermelha";
  }
}
function abrirmodal(){
  const modal=  document.getElementById("modal-contato").style.display="flex";

  document.getElementById("fecharcntt").onclick=function(){
  document.getElementById("modal-contato").style.display="none";
  }
}

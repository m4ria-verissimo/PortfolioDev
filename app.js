
emailjs.init("5EfHEhw_veKyUtXjX");

function abrirmodal(){
  const modal=  document.getElementById("modal-contato").style.display="flex";

  document.getElementById("fecharcntt").onclick=function(){
  document.getElementById("modal-contato").style.display="none";
  }
}
function enviar(){
   
   const nome=  document.getElementById("nome").value;
   const email = document.getElementById("email").value;
   const msg = document.getElementById("msg").value;
   
   emailjs.send("service_bblmnym" , "template_4vycrt4" ,{
    nome: nome, 
    email: email ,
    mensagem: msg 
    })
    .then(()=> {
        modal.style.display= "flex";
        form.reset();

    });
        document.getElementById("fecharmodal").onclick=function(){
            document.getElementById("modal-sucesso").style.display="none";
        }

    const form = document.getElementById("form");

      if(!form.checkValidity()){
        form.reportValidity();
        return;
      }
      const modal = document.getElementById("modal-sucesso");
   

}
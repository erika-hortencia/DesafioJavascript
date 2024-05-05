//criando os objetos dos elementos de texto do form

var nome = document.querySelector("#inputName");
var nomeHelp = document.querySelector("#inputNameHelp");
var ano = document.querySelector("#inputYear");
var anoHelp = document.querySelector("#inputYearHelp");
var email = document.querySelector("#inputEmail");
var emailHelp = document.querySelector("#inputEmailHelp");
var password = document.querySelector("#inputPassword");
var passwordHelp = document.querySelector("#inputPasswordHelp");


/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco do campo inputName mude, será chamada a função validarNome*/
nome.addEventListener('focusout', validarNome);

/*declaração tradicional de função validarNome(e)
'e' é o objeto do tipo evento que contém, alpem de outras propriedades, o objeto que iniciou o evento,
neste caso o objeto 'nome'
*/

function validarNome(e){ 
    //declaração da expressão regular para definir o formato de um nome válido
    const regexNome = /^[a-zA-Z]{7,}$/;
    
    console.log(e); //impressão em console do objeto evento e
    console.log(e.target.value); //impressão em console do valor do objeto 'nome' que originou o evento   

    if(e.target.value.trim().match(regexNome)==null){
        //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputNameHelp
        nomeHelp.textContent = "Formato de nome inválido"; 
        nomeHelp.style.color="red";
    }
    else{
        nomeHelp.textContent = "";
    }       
}

/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco seja mudado, será chamada a função validarNome*/

//declaração de função de forma anônima usando uma expressão de função de seta =>

ano.addEventListener('focusout', () => {
    //declaração da expressão regular para definir o formato de um ano válido
    const regexAno = /^[0-9]{4}$/;
    //tirar (trim) espaços em branco antes e depois da string
    const anoTrimado = ano.value.trim();
    console.log(ano.value);

    if(anoTrimado.match(regexAno)==null){
        //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
        anoHelp.textContent = "Formato de ano inválido";
        anoHelp.style.color="red";
    }
    else{
        //objeto Date
        var date = new Date();
        //obtem o ano atual
        console.log(date.getFullYear()); 
        
        if( parseInt(anoTrimado) > parseInt(date.getFullYear()) - 2){
             //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
            anoHelp.textContent = `Ano inválido. O ano não pode ser maior que ${date.getFullYear()- 2}.`;
            anoHelp.style.color="red";
        }
        else if( parseInt(anoTrimado) < parseInt(date.getFullYear())-124 ){
             //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
            anoHelp.textContent = `Ano inválido. O ano não pode ser menor que ${date.getFullYear()-124}.`;
            anoHelp.style.color="red";
        }
        else{
            anoHelp.textContent="";
        }        
        
    }
})

email.addEventListener('focusout', () => {
    const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(br|com|net|org)$/;
    console.log(email.value);
    const emailTrimado = email.value.trim();
    if(emailTrimado.match(regexEmail)==null){
        emailHelp.textContent = "Formato de e-mail inválido";
        emailHelp.style.color = "red";
    }else{
        emailHelp.textContent = "";
    }

})

password.addEventListener('focusout', () => {

    const regexPassword = /^(?=.*[@#%&!+])(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/;
    const regexWeakPassword = /^(?=.*[@#%&!+])(?=.*\d).{1,7}$/;
    const regexModeratePassword = /^(?=.*[@#%&!+])(?=.*\d)(?=.*[A-Z]).{9,}$/;
    const regexStrongPassword = /^(?=(?:.*[@#%&!+]){2,})(?=(?:.*\d){2,})(?=(?:.*[A-Z]){2,}).{13,}$/;
    const regexNomeSenha = new RegExp(nome.value, "i");
    const senha = password.value;
    const comprimento = senha.length;

    console.log(password.value);
    console.log(comprimento);

    if(password.value.match(regexPassword)==null){
        passwordHelp.textContent = "Senha inválida.";
        passwordHelp.style.color = "red";

        const meterValue = 0;
        const valor = document.getElementById("passStrengthMeter");
        valor.value = meterValue;
    }else{
        if(regexNomeSenha.test(senha.toLowerCase())){
            passwordHelp.textContent = "Senha inválida.";
            passwordHelp.style.color = "red";

            const meterValue = 0;
            const valor = document.getElementById("passStrengthMeter");
            valor.value = meterValue;
        }else if (senha.includes(ano.value)){
            passwordHelp.textContent = "Senha inválida.";
            passwordHelp.style.color = "red";

            const meterValue = 0;
            const valor = document.getElementById("passStrengthMeter");
            valor.value = meterValue;
        }else{
            if(regexStrongPassword.test(password.value)){
                passwordHelp.textContent = "Senha forte";
                passwordHelp.style.color = "green";

                const meterValue = 30;
                const valor = document.getElementById("passStrengthMeter");
                valor.value = meterValue;
            }
            else if(regexModeratePassword.test(password.value)){
                passwordHelp.textContent = "Senha moderada";
                passwordHelp.style.color = "orange";

                const meterValue = 15;
                const valor = document.getElementById("passStrengthMeter");
                valor.value = meterValue;
            }
            else if(regexWeakPassword.test(password.value)){
                passwordHelp.textContent = "Senha fraca";
                passwordHelp.style.color = "red";

                const meterValue = 10;
                const valor = document.getElementById("passStrengthMeter");
                valor.value = meterValue;
            }

            
        }
    }

})


;


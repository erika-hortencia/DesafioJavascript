# DesafioJavascript
Código desenvolvido para a disciplina SSC0961 - Desenvolvimento Web e Mobile ministrada no Instituto de Ciências Matemáticas e de Computação - ICMC, da Universidade de São Paulo. <br>

Trata-se de uma página de cadastro de usuário onde foi implementado um código em javascript para realizar as seguintes validações: <br>

- Validação do nome do usuário:
    - Deve conter apenas letras
    - Deve ter comprimento maior que 6 caracteres
- Validação do ano de nascimento:
    - Deve estar entre 1900 e 2022
- Validação de email
    - Deve conter letras e números, seguidos de "@", seguido de caracteres, seguido de "." e finalizando em br|com|net|org
- Validação de senha:
    - Deve conter entre 6 e 20 caracteres
    - Deve ter a ocorrência de:
        - Caractere especial (@,#,%,&,!,+)
        - Número
        - Letra
    - Não deve conter o nome ou ano de nascimento do usuário

Caso a senha não satisfaça algum desses critérios, é retornada e mensagem "Senha inválida". <br>

Para as senhas válidas, é feita a sua classificação em "fraca", "moderada" ou "forte", seguindo os critérios a seguir: <br>

- Para senha **fraca**: comprimento menor que 8 caracteres, contendo pelo menos um caractere especial e um número;

- Para senha **moderada**: comprimento maior que 8 caracteres, contendo pelo menos um caractere especial, um número e uma letra maiúscula;

- Para senha **forte**: comprimento maior que 12 caracteres, contendo mais de um caracter especial, mais de um número e mais de uma letra maiúscula.







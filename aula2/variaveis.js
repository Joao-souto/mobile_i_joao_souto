var numero = 2; //  Pode ser alterada e acessada em qualquer bloco

let texto = "Hello"; //  Pode ser alterada e só existe dentro do bloco qual foi criado, porém, pode ser acessado se criado em escopo geral

const oQueEisso = "?"; // Não pode se alterar o valor e pode se acessar em qualquer bloco

console.log("Tipo var: ",numero);

numero = 13;

console.log(texto + " o número agora é " + numero);
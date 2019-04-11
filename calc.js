/**
*Aula 5:  Calculadora Flex
*@David Analista TI
*/

var etanol, gasolina;
function calcular(){
	etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
	gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));	
	if(etanol < 0.7 * gasolina){

		//Dom manipulando o Objeto da imagens
		document.getElementById("status").src="imagens/etanol.png";


	}else{
		//falso
		document.getElementById("status").src="imagens/gasolina.png";

	}
}

function resetar(){
	document.getElementById("status").src="imagens/neutro.png";

}
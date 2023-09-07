function calcular(){
    var Text = document.getElementById('textarea').value;
    var result = Text.split(" ").length;
     
    document.getElementById('resultado').innerHTML = "você tem: " + result + " palavras";
}
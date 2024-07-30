

let filme;
let idade= 9;
let campoidade;
let campoacao;
let camporomance;
let campocomedia;

function setup(){
  createCanvas(600,400);
  createElement ('h2', 'Recomendador de filmes')
  createSpan('idade')
  campoidade = createInput();
  createElement('h3', 'selecione somente um gênero de filme')
  campoacao = createCheckbox('Ação')
  camporomance = createCheckbox ('Romance')
  campocomedia = createCheckbox ('Comédia')
}
function draw(){
  background(0);
  textSize(40);
  textAlign(CENTER, CENTER);
  fill ('white');

  let idade = campoidade.value();
  let acao = campoacao.checked();
  let romance = camporomance.checked();
  let comedia = campocomedia.checked();
  
  filme = geraRecomendacao(idade, acao, romance, comedia);
  
  text(filme, width/2, height/2);


}

function geraRecomendacao (idade, acao, romance, comedia){
   if(idade >= 18){
     if(acao){
       return 'Bastardos Inglórios';
     }else if (romance){
       return '50 Tons de Cinza';
     }else if (comedia){
       return 'Todo Mundo em Pânico';
     }else {
       return 'Bastardos Inglórios';
     }
     }else if(idade >= 14){
       if(acao){
         return 'Maze Runner';
       }else if (romance){
         return 'Depois do Universo';
       }else if (comedia){
         return 'Ela é demais'
       }else {
         return 'Maze Runner';
       }
     }else{
       if(acao){
         return 'Karatê Kid';
       }else if (romance){
         return 'Diário de uma Princesa';
       }else if(comedia){
         return 'Alvin e os Esquilos'
       }else{
         return 'Karate Kid';
       }
     }
   }

                           
                           
                

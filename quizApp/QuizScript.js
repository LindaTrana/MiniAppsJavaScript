const quizData=[
    {
        questions:"La edad de Santos?",
    
        a:"27",
        b:"10",
        c:"5",
        d:"10",
        correcta:"c"

    },
    {
        questions:"Mejor lenguaje de progracion?",
        a:"JavaScript",
        b:"C#",
        c:"Python",
        d:"Java",
        correcta:"c"
    },
    {
        questions:"Presidente de Nicaragua?",
        a:"Daniel Ortega",
        b:"Cesar Zamora",
        c:"Agusto Sandito",
        d:"Miguel Larreynaga",
        correcta:"a"
    },
    {
        questions:"Comida chatarra mas rica?",
        a:"Pizza",
        b:"Hamburguesas",
        c:"Burritos",
        d:"Pollo Rostizado",
        correcta:"b"
    },
    {
        questions:"Postre mas rico?",
        a:"Dulce de Leche",
        b:"Tres Leches",
        c:"Pastel de chocolate",
        d:"Pastel de Manzana",
        correcta:"b"
    }

]


const quiz=document.getElementById("quiz")
const respuestasEl=document.querySelectorAll('.respLabel')
const preguntasH=document.getElementById("preguntasH")
const a_text=document.getElementById('a_txt');
const b_text=document.getElementById('b_txt');
const c_text=document.getElementById('c_txt');
const d_text=document.getElementById('d_txt');
const submitBotton= document.getElementById('submit')


let actualQuiz=0;
let marca=0;



function loadQuiz(){
    deseleccionarRespuesta();

const actualQuizData=quizData[actualQuiz];

preguntasH.innerText=actualQuizData.questions;

a_text.innerText=actualQuizData.a;
b_text.innerText=actualQuizData.b;
c_text.innerText=actualQuizData.c;
d_text.innerText=actualQuizData.d;


}

loadQuiz();

function seleccion(){
    let resp=undefined;
    respuestasEl.forEach((respuestasEl)=>{
        if(respuestasEl.checked){
            resp=respuestasEl.id;
            console.log(resp)
        }
    })

    return resp

}

function deseleccionarRespuesta(){
respuestasEl.forEach((respuestasEl)=>{
    respuestasEl.checked=false;
})
}

submitBotton.addEventListener("click", () => {
    const respuestaB=seleccion()
    console.log(seleccion)
    if(respuestaB){
        if(respuestaB===quizData[actualQuiz].correcta){
            marca++;
        }
    }
    actualQuiz ++;
    if(actualQuiz < quizData.length){
        loadQuiz();
    }else{
        quiz.innerHTML=`<h2> Tus respuestas correctas
         ${marca}/${quizData.length} preguntas
        </h2>`
    }
})


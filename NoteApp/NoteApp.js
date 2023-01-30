const agregarBtn=document.getElementById("agregar")
const Notas=JSON.parse(localStorage.getItem('notas'))

if(Notas){
    Notas.forEach(n=>{
        agregarNuevaNota(n)
    })
}

agregarBtn.addEventListener('click',()=>{
    agregarNuevaNota();
})

function agregarNuevaNota(text = ""){
    const nota=document.createElement('div')
    nota.classList.add("nota")

    nota.innerHTML=
    `
    <div class="notas">
        <div class="herramientas">
            <button class="editar"><i class="fa fa-pen-to-square"></i></button>
            <button class="eliminar"><i class="fa fa-trash"></i></button>
        </div>

        <div class="principal ${text ? "": "hidden"}">

        </div>
        <textarea class="${text ? "hidden": "" }" name="" id="" cols="30" rows="10"></textarea>  
    
    </div>
    
    `;

    // <textarea  > </textarea>
    
    const editarBtn= nota.querySelector(".editar")
    const eliminarBtn= nota.querySelector(".eliminar")
    const principal= nota.querySelector(".principal")
    const txtArea= nota.querySelector("textarea")
    console.log(txtArea)
    console.log(editarBtn)
    txtArea.value = text;
    principal.innerHTML=  text //marked(text)

    editarBtn.addEventListener('click', ()=>{
        principal.classList.toggle("hidden");
        txtArea.classList.toggle("hidden")
    })

    eliminarBtn.addEventListener('click', ()=>{
        nota.remove()
        updateLS();
    })
    

    txtArea.addEventListener('input',(e)=>{
        const{value}=e.target;
        principal.innerHTML=  value //marked(value)
        updateLS();
    })

    document.body.appendChild(nota)
}
function updateLS(){
    const notastxt=document.querySelectorAll("textarea")

    const notasU=[]
    notastxt.forEach(n=>{
    notasU.push(n.value)

    });
    localStorage.setItem('notas', JSON.stringify(notasU));
}


const btnmusic = document.querySelector('.music')
const musicinput = document.querySelector('.musicinput')
const nameinput = document.querySelector('.nameinput')
const list = document.querySelector('.playlist')
const plus = document.querySelector('.plus')


class PLaytList{
    constructor(name, link){
        this.name=name
        this.link=link
    }
}
btnmusic.addEventListener('click', ()=>{
    musicinput.style.display='block'
    nameinput.style.display='block'
    plus.style.display='block'
})

musicinput.addEventListener('change', (e)=>{
    musicinput.value=e.target.value
})
nameinput.addEventListener('change', (e)=>{
    nameinput.value=e.target.value
})

plus.addEventListener('click', ()=>{
    let music=new PLaytList(nameinput.value, musicinput.value)
    nameinput.value=''
    musicinput.value=''
    let li=document.createElement('li')
    let spanName=document.createElement('span')
    if(music.name!='' && music.link!=''){
       spanName.innerHTML=music.name 
       let a=document.createElement('a')
        a.innerHTML=music.link
        a.href=music.link
        li.appendChild(spanName)
        li.appendChild(a)
        list.appendChild(li)
    }
    
})



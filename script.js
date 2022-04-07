const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const step = document.getElementById('step');

const circles = document.querySelectorAll('.circle');

let current_Active  = 0

const calm_sound = new Audio('soothing.mp3');

playing=false;

function sound(){ 
    calm_sound.play();
    calm_sound.volume=0.1;
    calm_sound.loop =true;
}
next.addEventListener('click',()=>{
    current_Active++;

    if(current_Active>circles.length){
        current_Active=circles.length
    }
 
    update()
    if(playing==false){
        sound()
        playing =true;
    }
})

prev.addEventListener('click',()=>{
    current_Active--;

    if(current_Active==0){
        current_Active=0
    }
    update()
})

function update(){
    circles.forEach((circle,idx)=>{
        if(idx<current_Active){
            circle.classList.add('active')

        }
        else{
            circle.classList.remove('active');
        }
    })
 
    const actives = document.querySelectorAll('.active')

    progress.style.width=((actives.length-1)/(circles.length-1))*100+'%'

    if(current_Active==1){
        prev.disabled=true
    }
    else if(current_Active== circles.length){
        next.disabled=true
    }
    else{
        prev.disabled=false;
        next.disabled=false;
    }

    s = getStep(current_Active);
    step.innerHTML=s;

}

function getStep(x){
    if(x==1){
        return "Place and keep the tip of your tongue against the ridge of tissue behind your upper front teeth for the duration of the exercise."
    }
    if(x==2){
        return "Completely exhale through your mouth, making a 'whoosh' sound."
    }
    if(x==3){
        return "Close your mouth and inhale quietly through your nose to a mental count of four."
    }
    if(x==4){
        return "Hold your breath for a count of seven."
    }

    if(x==5){
        return "Exhale completely through your mouth, making a whoosh sound to a count of eight."
    }
}
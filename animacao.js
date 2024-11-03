const myObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
            console.log("ok")
        }
        else{
            entry.target.classList.remove("show")
        }
    })
})

const icons = document.querySelectorAll(".icon")
icons.forEach((icon)=>{myObserver.observe(icon)})


const skillsContainer = document.getElementById("habilidades1");
const progressBars = document.querySelectorAll(".progress");

// Função para aplicar as larguras das barras conforme o data-width
function setProgress() {
  progressBars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
}

// Função para resetar as larguras para 0
function resetProgress() {
  progressBars.forEach(bar => {
    bar.style.width = "0";
  });
}

// Configura o IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setProgress();
    } else {
      resetProgress();
    }
  });
}, { threshold: 0.5 }); // threshold determina quanto da seção deve estar visível (50%)

observer.observe(skillsContainer);


const chk = document.getElementById('chk')

chk.addEventListener('change' , () => {
  document.body.classList.toggle('dark')
  // document.header.classList.add('dark')
})
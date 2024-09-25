function changeHeaderText()
{
    const texts=["Tech Enthusiast.","Full Stack Developer.","Web Designer.","Cybersecurity Enthusiast.","Gamer."];
    const typingSpeed=100;
    const erasingSpeed=50;
    const pauseTime=1500;
    const textElement=document.querySelector(".changing-text");

    let textIndex=0;
    let charIndex=0;
    let erase=false;

    function typeText()
    {
        const currentText=texts[textIndex];

        if(!erase && charIndex<currentText.length)
        {
            textElement.textContent+=currentText[charIndex];
            charIndex++;
            setTimeout(typeText,typingSpeed);
        }
        else if(erase && charIndex>0)
        {
            textElement.textContent=currentText.substring(0,charIndex-1);
            charIndex--;
            setTimeout(typeText,erasingSpeed);
        }
        else
        {
            erase=!erase;
            if(!erase)
            {
                textIndex=(textIndex+1)%texts.length;
            }
            setTimeout(typeText,pauseTime);
        }
    }

    typeText();
}

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        //const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
        darkModeToggle.querySelector('i').classList.toggle('fa-sun');
        darkModeToggle.querySelector('i').classList.toggle('fa-moon');
        darkModeToggle.querySelector('i').classList.toggle('light-mode'); 
    });
});

changeHeaderText();

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const progress = progressBar.dataset.progress;
                
                progressBar.style.setProperty('--progress', `${progress}%`);
                progressBar.classList.add('animated');
            } else {
                const progressBar = entry.target.querySelector('.progress-bar');
                progressBar.classList.remove('animated');
            }
        });
    });

    const techStack = document.querySelectorAll('#techstack .tech');
    techStack.forEach(tech => {
        observer.observe(tech);
    });
});

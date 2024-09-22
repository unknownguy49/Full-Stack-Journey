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

changeHeaderText();
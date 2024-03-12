document.addEventListener('DOMContentLoaded', function() {
    function randomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeBackgroundColor() {
        console.log('Header clicked');
        document.body.style.backgroundColor = randomColor(); // Apply random color to the body
    }

    document.querySelector('header').addEventListener('click', changeBackgroundColor);



    let secretNum = '1337';
    let enteredCode = '';
    
    document.addEventListener('keydown', (e) => {
        enteredCode += e.key;
        enteredCode = enteredCode.substr(-secretNum.length);
    
        if (enteredCode === secretNum) {
            console.log('1337 entered by user')
            showModal();
        }
    });
    
    function showModal() {
        const modal = document.getElementById('newModal');
        const modalBackground = document.getElementById('modalBackground');
    
        modal.style.display = "block";
        modalBackground.style.display = "block";
    
        // Additionally, display the modal content
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.display = "block";
    
        window.onclick = function (event) {
            if (event.target == modalBackground) {
                modal.style.display = "none";
                modalBackground.style.display = "none";
                modalContent.style.display = "none"; // Hide modal content when modal is closed
            }
        }
    }

});

document.addEventListener('DOMContentLoaded', () => {
    fetch('about-me.json')
      .then(response => response.json())
      .then(data => {
        visaCV(data);
      })
      .catch(error => console.error('Fel vid inläsning av CV:', error));
  });
  
  function visaCV(cv) {
    const utbildningElement = document.getElementById('utbildningar');
    cv.utbildningar.forEach(utbildning => {
      const utbildningItem = document.createElement('ul');
      utbildningItem.textContent = `${utbildning.school} - ${utbildning.field} - ${utbildning.dates}`;
      utbildningElement.appendChild(utbildningItem);
    });
  
    const arbetsplatsElement = document.getElementById('arbetsplatser');
    cv.arbetsplatser.forEach(arbetsplats => {
      const arbetsplatsItem = document.createElement('ul');
      arbetsplatsItem.textContent = `${arbetsplats.position} - ${arbetsplats.company} - ${arbetsplats.dates}`;
      arbetsplatsElement.appendChild(arbetsplatsItem);
});
}



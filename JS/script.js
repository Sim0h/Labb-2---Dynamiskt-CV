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
    
        window.onclick = function (event) {
            if (event.target == modalBackground) {
                modal.style.display = "none";
                modalBackground.style.display = "none";
            }
        }
    }

});

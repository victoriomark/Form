

// function for Validation
const Validation = () => {
    const AllInputs = document.querySelectorAll('input');
    const container = document.querySelector(".container");

    AllInputs.forEach((e) => {
        e.addEventListener('keyup', () => {

            if (e.value.length <= 3) {
                e.style.border = 'solid red'
            }
            else {
                e.style.border = 'solid green'
                container.classList.remove('Active_Animation');
            }
        })
        // check if input is Empty
        const Send = document.querySelector('#Send');
        Send.addEventListener('click',() => {
           if(e.value === ""){
            container.classList.add('Active_Animation');
            e.style.border = 'solid red'
           }
           else{
            alert('Success')
             container.classList.remove('Active_Animation');
           }
           
        })
    })
  


}

Validation()
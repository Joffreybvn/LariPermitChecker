
let checkPermit = (event) => {
    event.preventDefault();

    window.location.href = "./db/" + key.value ;
};

let permitForm = document.getElementById('permitForm');
permitForm.addEventListener('submit', checkPermit);

let key = document.getElementById('key');
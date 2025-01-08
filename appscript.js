const scriptURL = "https://script.google.com/macros/s/AKfycbw9zVRG-078hoMObWS30Wre0j7U67eRW61lpWL7Te2M6NCvnhUBE78aCucar1rVZL3h/exec" 

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thank You, your message has been submitted!"))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error!', error))
})
document.getElementById('contactform').addEventListener('submit', function(event) {
    const name = document.getElementById('name').Value.trim();
    const reason = document.getElementById('reason').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !reason || !email) {
        alert('por favor, complete todos los campos.');
        event.preventDefault();
    } else {
        alert('formulario enviado correctamente.');
    }     
});









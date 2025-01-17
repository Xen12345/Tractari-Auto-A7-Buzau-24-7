// Script pentru trimiterea formularului
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Afișează un mesaj de succes (într-un caz real, datele ar trebui trimise pe un server)
  alert(`Mulțumim, ${name}! Mesajul dvs. a fost trimis cu succes.`);

  // Resetarea formularului
  document.getElementById('contact-form').reset();
});

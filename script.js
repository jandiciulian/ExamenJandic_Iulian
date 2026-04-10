document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nume = document.getElementById('nume').value.trim();
    const email = document.getElementById('email').value.trim();
    const mesaj = document.getElementById('mesaj').value.trim();
    const errorDiv = document.getElementById('errorMsg');

    if (nume === "" || email === "" || mesaj === "") {
        errorDiv.textContent = "Toate câmpurile sunt obligatorii!";
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        errorDiv.textContent = "Introduceți un email valid!";
        return;
    }
    errorDiv.textContent = "";
    alert("Formular trimis cu succes!");
});
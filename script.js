const form = document.querySelector(".reg-form");

form.addEventListener("submit", function (e) {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const conPassword = document.getElementById("conPassword").value;

    if (!username || !email || !password || !conPassword) {
        alert("Semua field wajib diisi!");
        e.preventDefault();
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Format email tidak valid!");
        e.preventDefault();
        return;
    }

    if (password.length < 6) {
        alert("Password harus minimal 6 karakter!");
        e.preventDefault();
        return;
    }

    if (password !== conPassword) {
        alert("Password dan Confirm Password tidak sama!");
        e.preventDefault();
        return;
    }

    alert("Registrasi berhasil!");
});


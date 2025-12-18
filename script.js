function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username !== "" && password === "soshum") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboardPage").style.display = "block";
    } else {
        document.getElementById("errorMsg").innerText = "Nama harus diisi & password 'soshum' 😥";
    }
}

function logout() {
    document.getElementById("dashboardPage").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";

    // Reset form
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("perasaan").selectedIndex = 0;
    document.getElementById("cerita").value = "";
    document.getElementById("harapan").value = "";
    document.getElementById("successMsg").innerText = "";
}

function kirim() {
    const cerita = document.getElementById("cerita").value.trim();
    const harapan = document.getElementById("harapan").value.trim();

    if(cerita === "" || harapan === "") {
        alert("Tolong isi semua kolom ya 😊");
        return;
    }

    alert("💖 Terima kasih sudah berbagi! Kamu nggak sendirian 🌈\nTetap semangat ya!");
    document.getElementById("successMsg").innerText = "💌 Cerita berhasil dikirim. Semangat selalu! 🌟";

    // Reset form setelah submit
    document.getElementById("perasaan").selectedIndex = 0;
    document.getElementById("cerita").value = "";
    document.getElementById("harapan").value = "";
}

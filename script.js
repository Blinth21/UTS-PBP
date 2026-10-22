const tombolBuka = document.getElementById("tombolBuka");
const formRsvp = document.getElementById("formRsvp");

tombolBuka.addEventListener("click", function () {
    document.getElementById("undangan").scrollIntoView({ behavior: "smooth" });
});

formRsvp.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const telepon = document.getElementById("telepon").value;
    const kehadiran = document.getElementById("kehadiran").value;
    const jumlah = document.getElementById("jumlah").value;
    const pesan = document.getElementById("pesan").value;

    alert(
        "Terima kasih, " + nama + "!\n" +
        "WhatsApp: " + telepon + "\n" +
        "Konfirmasi: " + kehadiran + "\n" +
        "Jumlah tamu: " + jumlah + "\n" +
        "Pesan: " + (pesan || "-")
    );
    formRsvp.reset();
});

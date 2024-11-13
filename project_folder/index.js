// Variabel global untuk menyimpan peran yang dipilih
let role = "";

// Fungsi untuk menampilkan login mahasiswa atau dosen
function showStudentLogin() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("formTitle").innerText = "Login Mahasiswa";
  document.getElementById("username").placeholder =
    "No. Registrasi (S22123456)";
  document.getElementById("username").value = "";
  animateLoginForm();
}

function showLecturerLogin() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("formTitle").innerText = "Login Dosen";
  document.getElementById("username").placeholder = "Email Address";
  document.getElementById("username").value = "";
  animateLoginForm();
}

// Fungsi untuk memilih peran dan menampilkan form login yang sesuai
function selectRole(selectedRole) {
  role = selectedRole; // Simpan peran yang dipilih ('dosen' atau 'mahasiswa')

  // Tampilkan form login dengan judul dan placeholder yang sesuai
  document.getElementById("login-form").style.display = "block";
  const formTitle = document.getElementById("formTitle");
  const usernameField = document.getElementById("username");

  if (role === "dosen") {
    formTitle.innerText = "Login Dosen";
    usernameField.placeholder = "Email Address";
  } else if (role === "mahasiswa") {
    formTitle.innerText = "Login Mahasiswa";
    usernameField.placeholder = "No. Registrasi (S22123456)";
  }

  // Reset nilai input
  usernameField.value = "";
  document.getElementById("password").value = "";
  animateLoginForm();
}

// Fungsi untuk login
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validasi login sederhana berdasarkan role yang dipilih
  if (username && password) {
    // Langsung arahkan ke halaman sesuai peran tanpa memeriksa username dan password
    if (role === "dosen") {
      alert(`Login sebagai dosen berhasil!`);
      window.location.href = "home_dosen.html";
    } else if (role === "mahasiswa") {
      alert(`Login sebagai mahasiswa berhasil!`);
      window.location.href = "home_mahasiswa.html";
    }
  } else {
    alert("Silakan isi username dan password.");
  }
}

// Fungsi untuk animasi form login
function animateLoginForm() {
  const form = document.getElementById("login-form");
  form.style.transform = "translateY(0)";
  form.style.opacity = "1";
}

// Fungsi untuk logout
function logout() {
  window.location.href = "login.html";
}

// Fungsi untuk navigasi ke halaman lain
function navigateTo(page) {
  window.location.href = page;
}

// Animasi untuk kotak login
window.onload = function () {
  const container = document.querySelector(".container");
  container.style.transform = "translateY(0)";
  container.style.opacity = "1";

  // Tambahkan event listener untuk tombol login
  document.getElementById("login-button").addEventListener("click", login);
};

// Fungsi untuk menampilkan alert saat form disubmit
function handleFormSubmit(event, message) {
  event.preventDefault();
  alert(message);
}

// Fungsi untuk menampilkan foto anggota kelompok
function displayGroupMembers() {
  const members = [
    {
      name: "Ketua Kelompok",
      img: "https://via.placeholder.com/150",
      description: "Deskripsi Ketua Kelompok",
    },
    {
      name: "Anggota 1",
      img: "https://via.placeholder.com/150",
      description: "Deskripsi Anggota 1",
    },
    {
      name: "Anggota 2",
      img: "https://via.placeholder.com/150",
      description: "Deskripsi Anggota 2",
    },
    {
      name: "Anggota 3",
      img: "https://via.placeholder.com/150 ",
      description: "Deskripsi Anggota 3",
    },
    {
      name: "Anggota 4",
      img: "https://via.placeholder.com/150",
      description: "Deskripsi Anggota 4",
    },
  ];

  const groupContainer = document.getElementById("group-members");
  members.forEach((member) => {
    const memberDiv = document.createElement("div");
    memberDiv.className = "member";
    memberDiv.innerHTML = `
            <img src="${member.img}" alt="${member.name}">
            <p>${member.name}</p>
            <p>${member.description}</p>
        `;
    groupContainer.appendChild(memberDiv);
  });
}

// Panggil fungsi untuk menampilkan anggota kelompok saat halaman about dimuat
if (document.title.includes("Tentang Kami")) {
  window.onload = displayGroupMembers;
}

// Fungsi untuk efek tulisan berjalan
function startMarquee() {
  const marquee = document.querySelector(".marquee");
  let text = marquee.innerHTML;
  marquee.innerHTML = text + text; // Duplikat teks untuk efek berjalan
  let position = marquee.offsetWidth; // Mulai dari lebar marquee

  function animate() {
    position -= 1; // Gerakkan ke kiri
    if (position <= -text.length) {
      position = marquee.offsetWidth; // Reset posisi ke awal
    }
    marquee.style.transform = `translateX(${position}px)`; // Ganti dengan backticks
    requestAnimationFrame(animate);
  }
  animate();
}

// Panggil fungsi marquee saat halaman dimuat
window.onload = function () {
  startMarquee();
  const container = document.querySelector(".container");
  container.style.transform = "translateY(0)";
  container.style.opacity = "1";

  // Tambahkan event listener untuk tombol login
  document.getElementById("login-button").addEventListener("click", login);
};

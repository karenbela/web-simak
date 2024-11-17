// Fungsi untuk efek tulisan berjalan (marquee)
function startMarquee() {
  const marquee = document.querySelector(".marquee");
  let text = marquee.innerHTML;
  marquee.innerHTML = text + text; // Duplikat teks untuk efek berjalan
  let position = marquee.offsetWidth; // Mulai dari lebar marquee

  function animate() {
    position -= 1; // Gerakkan teks ke kiri
    if (position <= -text.length) {
      position = marquee.offsetWidth; // Reset posisi ke awal
    }
    marquee.style.transform = `translateX(${position}px)`; // Perbarui posisi
    requestAnimationFrame(animate); // Memanggil fungsi animate lagi
  }
  animate(); // Mulai animasi
}

// Fungsi untuk animasi kontainer login
function animateLoginContainer() {
  const container = document.querySelector(".container");
  container.style.transform = "translateY(0)";
  container.style.opacity = "1";
}

// Fungsi logout
function logout() {
  localStorage.removeItem('role'); // Hapus data login dari localStorage
  alert('Anda berhasil logout!');
  window.location.href = 'login.html'; // Arahkan kembali ke halaman login
}

// Fungsi untuk menavigasi ke halaman lain
function navigateTo(url) {
  window.location.href = url;
}

// Fungsi untuk login
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Lakukan validasi sesuai dengan peran
  if (username && password) {
    // Simpan status login di localStorage
    localStorage.setItem('role', role);
    
    // Arahkan ke halaman sesuai peran
    if (role === 'dosen') {
      alert(`Login sebagai dosen berhasil!`);
      window.location.href = 'home_dosen.html';
    } else if (role === 'mahasiswa') {
      alert(`Login sebagai mahasiswa berhasil!`);
      window.location.href = 'home_mahasiswa.html';
    }
  } else {
    alert('Silakan isi username dan password.');
  }
}

// Menampilkan anggota kelompok pada halaman Tentang Kami
function displayGroupMembers() {
  const members = [
    { name: "John Doe", role: "Developer" },
    { name: "Jane Smith", role: "Designer" },
    // Tambahkan anggota lainnya sesuai kebutuhan
  ];
  
  const memberList = document.querySelector(".group-members");
  members.forEach(member => {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("member");
    memberDiv.innerHTML = `<h4>${member.name}</h4><p>${member.role}</p>`;
    memberList.appendChild(memberDiv);
  });
}

// Menambahkan event listener saat halaman dimuat
window.onload = function () {
  // Fungsi marquee berjalan
  startMarquee();

  // Animasi untuk kotak login
  animateLoginContainer();

  // Menambahkan event listener untuk tombol login
  const loginButton = document.getElementById("login-button");
  if (loginButton) {
    loginButton.addEventListener("click", login);
  }

  // Menampilkan anggota kelompok (hanya untuk halaman 'Tentang Kami')
  if (document .title.includes("Tentang Kami")) {
    displayGroupMembers();
  }
};
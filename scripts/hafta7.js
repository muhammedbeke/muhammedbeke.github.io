// ── TEMA DEĞİŞTİRME ──
const themeBtn = document.getElementById("themeToggleBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeBtn.textContent = "Açık Temaya Geç";
    themeBtn.classList.replace("btn-outline-secondary", "btn-outline-light");
  } else {
    themeBtn.textContent = "Koyu Temaya Geç";
    themeBtn.classList.replace("btn-outline-light", "btn-outline-secondary");
  }
});

// ── FORM ÖZET OLUŞTURMA ──
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const alertBox = document.getElementById("alertBox");
const sonucAlani = document.getElementById("sonucAlani");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const adSoyad    = document.getElementById("adSoyad").value.trim();
  const eposta     = document.getElementById("eposta").value.trim();
  const bolum      = document.getElementById("bolum").value.trim();
  const sinif      = document.getElementById("sinif").value;
  const oturum     = document.getElementById("oturum").value;
  const katilimTuru = document.getElementById("katilimTuru").value;
  const mesaj      = document.getElementById("mesaj").value.trim();
  const kvkk       = document.getElementById("kvkk").checked;

  // Boş alan kontrolü
  const bos = [];
  if (!adSoyad)      bos.push("Ad Soyad");
  if (!eposta)       bos.push("E-posta");
  if (!bolum)        bos.push("Bölüm");
  if (!sinif)        bos.push("Sınıf");
  if (!oturum)       bos.push("Katılmak İstediğiniz Oturum");
  if (!katilimTuru)  bos.push("Katılım Türü");
  if (!kvkk)         bos.push("KVKK onayı");

  if (bos.length > 0) {
    alertBox.classList.remove("d-none");
    alertBox.textContent = "Lütfen şu alanları doldurun: " + bos.join(", ");
    sonucAlani.className = "alert alert-info text-center";
    sonucAlani.innerHTML = "Henüz başvuru özeti oluşturulmadı. Formu doldurduktan sonra sonuç burada görünecek.";
    return;
  }

  alertBox.classList.add("d-none");

  // Özet kartı
  sonucAlani.className = "card shadow border-success";
  sonucAlani.innerHTML = `
    <div class="card-header bg-success text-white fw-bold">
      ✅ Başvuru Özeti
    </div>
    <div class="card-body">
      <div class="row g-2">
        <div class="col-sm-6">
          <span class="text-muted small">Ad Soyad</span>
          <p class="fw-bold mb-1">${adSoyad}</p>
        </div>
        <div class="col-sm-6">
          <span class="text-muted small">E-posta</span>
          <p class="fw-bold mb-1">${eposta}</p>
        </div>
        <div class="col-sm-6">
          <span class="text-muted small">Bölüm</span>
          <p class="fw-bold mb-1">${bolum}</p>
        </div>
        <div class="col-sm-6">
          <span class="text-muted small">Sınıf</span>
          <p class="fw-bold mb-1">${sinif}</p>
        </div>
        <div class="col-sm-6">
          <span class="text-muted small">Oturum</span>
          <p class="fw-bold mb-1">${oturum}</p>
        </div>
        <div class="col-sm-6">
          <span class="text-muted small">Katılım Türü</span>
          <p class="fw-bold mb-1">${katilimTuru}</p>
        </div>
        ${mesaj ? `
        <div class="col-12">
          <span class="text-muted small">Mesaj</span>
          <p class="mb-1">${mesaj}</p>
        </div>` : ""}
      </div>
    </div>
    <div class="card-footer text-muted small">
      Başvurunuz alındı. Etkinlik tarihinde görüşmek üzere!
    </div>
  `;

  sonucAlani.scrollIntoView({ behavior: "smooth" });
});

// ── FORMU TEMİZLE ──
resetBtn.addEventListener("click", function () {
  document.getElementById("adSoyad").value    = "";
  document.getElementById("eposta").value     = "";
  document.getElementById("bolum").value      = "";
  document.getElementById("sinif").value      = "";
  document.getElementById("oturum").value     = "";
  document.getElementById("katilimTuru").value = "";
  document.getElementById("mesaj").value      = "";
  document.getElementById("kvkk").checked     = false;

  alertBox.classList.add("d-none");
  sonucAlani.className = "alert alert-info text-center";
  sonucAlani.innerHTML = "Henüz başvuru özeti oluşturulmadı. Formu doldurduktan sonra sonuç burada görünecek.";
});

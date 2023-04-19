AOS.init();
const html = document.querySelector("html");
const menu = document.getElementById("menu");
const body = document.querySelector('body');
const selengkapnya = document.getElementById('selengkapnya');
const menu_icon = document.querySelector('.menu-icon');

selengkapnya.addEventListener('click', function() {
    document.body.scrollTop = 10;
});


$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.container-nav').addClass('active');
            $('.menu-icon').attr('src', 'assets/image/hamburger.png');
        } else {
            $('.container-nav').removeClass('active');
            $('.menu-icon').attr('src', 'assets/image/hamburger_white.png');
        }
    });
});

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            openpopup();
        }
    });
});

function closemenu() {
    menu.style.top = "-100vh",
    body.style.overflow = "auto";
    body.style.overflowX = "hidden";
  }
  
  function openmenu() {
    menu.style.top = "0",
    body.style.overflow = "hidden";
  }

  menu.addEventListener("click", function (){
    document.html.classList.toggle()
  })

  document.getElementById('video1').addEventListener('mouseover', function() {
    document.getElementById('video1').setAttribute('controls', '');
  });
  
  document.getElementById('video1').addEventListener('mouseout', function() {
    document.getElementById('video1').removeAttribute('controls', '');
  });

  document.getElementById('video2').addEventListener('mouseover', function() {
    document.getElementById('video2').setAttribute('controls', '');
  });
  
  document.getElementById('video2').addEventListener('mouseout', function() {
    document.getElementById('video2').removeAttribute('controls', '');
  });

  function topFunction() {
    document.documentElement.scrollTop = 580;
  }

  function closepopup() {
      document.getElementById('pop-up').style.display = "none";
  }

  function openpopup() {
    document.getElementById('pop-up').style.bottom = "0";
  }

  const player = document.getElementById('player')
  
  if (player.paused) {
    document.getElementById('tombolPause').style.display = "none";
    document.getElementById('tombolPlay').style.display = "block";
    document.getElementById('tombolPlay').addEventListener('click', function() {
      player.play();
      document.getElementById('tombolPause').style.display = "block";
      document.getElementById('tombolPlay').style.display = "none";
    })
    document.getElementById('tombolPause').addEventListener('click', function() {
      player.pause();
      document.getElementById('tombolPause').style.display = "none";
      document.getElementById('tombolPlay').style.display = "block";
    })
  }

  const overlay = document.querySelector('.overlay');

  setTimeout(function() {
    overlay.style.top = "-100%";
    body.style.overflow = "hidden";
  }, 2000);


  const textUmi = document.getElementById('textCharacterUmi');
  const textAzka = document.getElementById('textCharacterAzka');
  const containerUmi = document.getElementById('containerCharacterUmi');
  const containerAzka = document.getElementById('containerCharacterAzka');
  const umi = document.getElementById('characterUmi');
  const azka = document.getElementById('characterAzka');
  const backUmi = document.getElementById('backUmi');
  const backAzka = document.getElementById('backAzka');
  const confirmAzka = document.getElementById('confirmAzka');
  const confirmUmi = document.getElementById('confirmUmi');

  containerUmi.addEventListener('click', function() {
    umi.style.transition = '1s';
    umi.style.transform = 'translateX(100%)';
    textUmi.style.left = '10%';
    azka.style.transition = '1s';
    azka.style.transform = 'translateX(200%)';
    document.getElementById('ubahStroke').innerText = 'Ingin memilih RANAA?';
    document.getElementById('ubahBiasa').innerText = 'Ingin memilih RANAA?';
  }, true);

  backUmi.addEventListener('mouseover', function() {
    textUmi.style.left = '-100%';
    umi.style.transform = 'translateX(0)';
    azka.style.transition = '1s';
    azka.style.transform = 'translateX(0)';
    document.getElementById('ubahStroke').innerText = 'Pilih Karakter';
    document.getElementById('ubahBiasa').innerText = 'Pilih Karakter';
  });

  containerAzka.addEventListener('click', function() {
    azka.style.transition = '1s';
    azka.style.transform = 'translateX(-100%)';
    textAzka.style.right = '10%';
    umi.style.transition = '1s';
    umi.style.transform = 'translateX(-200%)';
    document.getElementById('ubahStroke').innerText = 'Ingin memilih RAIHAN?';
    document.getElementById('ubahBiasa').innerText = 'Ingin memilih RAIHAN?';
  }, true);

  backAzka.addEventListener('mouseover', function() {
    textAzka.style.right = '-100%';
    azka.style.transform = 'translateX(0)'
    umi.style.transition = '1s';
    umi.style.transform = 'translateX(0)';
    document.getElementById('ubahStroke').innerText = 'Pilih Karakter';
    document.getElementById('ubahBiasa').innerText = 'Pilih Karakter';
  });

  confirmUmi.addEventListener('click', function() {
    backUmi.style.display = 'none';
    document.getElementById('ubahStroke').innerText = 'Kamu Memilih RANAA!';
    document.getElementById('ubahBiasa').innerText = 'Kamu Memilih RANAA!';
    this.innerText = 'Anda Telah Memilih Karakter Ini';
    this.style.backgroundColor = 'rgb(184, 25, 25)';
    this.style.border = '1px solid white';
    this.style.color = 'white';
  });

  confirmAzka.addEventListener('click', function() {
    backAzka.style.display = 'none';
    document.getElementById('ubahStroke').innerText = 'Kamu Memilih RAIHAN!';
    document.getElementById('ubahBiasa').innerText = 'Kamu Memilih RAIHAN!';
    this.innerText = 'Anda Telah Memilih Karakter Ini';
    this.style.backgroundColor = 'rgb(184, 25, 25)';
    this.style.border = '1px solid white';
    this.style.color = 'white';
  });

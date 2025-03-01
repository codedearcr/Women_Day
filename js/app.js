$(window).on("load", function () {
  let name = $(".enteredName");
  let askedName;
  
  do {
    askedName = prompt("Vui lòng nhập tên của Hương.");
    
    if (askedName === null || askedName.trim() === "") {
      alert("Tên khum được để trống. Nhập lại đi Hương.");
    } else if (askedName.length > 12) {
      alert("Tên khum được quá 12 ký tự. Tớ bảo rồi màa.");
    }
  } while (!askedName || askedName.length > 12);
  
  name.text(askedName);
  $(".preloader").removeClass("revomed");
  
  $(".preloader").addClass("revomed");
  $(".card").addClass("animated");

  TweenLite.set("#petals", { perspective: 700 });
  TweenLite.set("img", { xPercent: "-50%", yPercent: "-50%" });

  const total = 120;
  const warp = document.getElementById("petals"),
    w = window.innerWidth,
    h = window.innerHeight;

  for (let i = 0; i < total; i++) {
    const Div = document.createElement("div");
    TweenLite.set(Div, {
      attr: { class: "dot" },
      x: R(0, w),
      y: R(-160, -120),
      z: R(-200, 200),
    });
    warp.appendChild(Div);
    animm(Div);
  }

  function animm(elm) {
    TweenMax.to(elm, R(10, 25), {
      y: h + 90,
      ease: Linear.easeNone,
      repeat: -1,
      delay: -15,
    });
    TweenMax.to(elm, R(6, 12), {
      x: "+=110",
      rotationZ: R(0, 180),
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut,
    });
    TweenMax.to(elm, R(2, 8), {
      rotationX: R(0, 360),
      rotationY: R(0, 360),
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut,
      delay: -5,
    });
  }

  function R(min, max) {
    return min + Math.random() * (max - min);
  }

  const typed = new Typed("#text", {
    strings: [
      "Chúc mừng Ngày Quốc tế Phụ nữ! Tớ hy vọng Hương sẽ trải qua ngày đặc biệt này với thật là nhiều niềm vui. Tớ xin được chúc Hương và những người phụ nữ trong gia đình những điều tốt đẹp nhất. <br> <b>Chúc Hương luôn luôn xinh đẹp. Hôm nay là ngày của Hương. Chúc mừng Ngày quốc tế phụ nữ một lần nữa!</b>",
    ],
    startDelay: 4500,
    typeSpeed: 92,
    loop: false,
    showCursor: false,
    preStringTyped: function () {
      const title = document.getElementById("title");
      title.style.opacity = 1;
    },
    onComplete: function () {
      const author = document.getElementById("author");
      author.style.opacity = 1;
    },
  });

  if (window.matchMedia("(max-width: 990px)").matches) {
    setTimeout(function () {
      $(".bouquet-img").css("transform", "translate(200px, 140%)");
      $(".card").attr("style", "opacity: 0.5 !important;");
    }, 50000);

    $(".bouquet-img").on("click mouseleave", function () {
      $(this).css("transform", "translate(200px, 260%)");
      $(".card").attr("style", "opacity: 0.8 !important;");
    });
  } else {
    setTimeout(function () {
      $(".bouquet-img").css("transform", "translate(220px, 100%)");
      $(".card").attr("style", "opacity: 0.5 !important;");
    }, 45000);

    $(".bouquet-img").on("click mouseleave", function () {
      $(this).css("transform", "translate(200px, 220%)");
      $(".card").attr("style", "opacity: 0.8 !important;");
    });
  }
});

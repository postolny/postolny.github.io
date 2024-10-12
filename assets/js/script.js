$(function() {
  var esattoIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#03C03C" d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415z"/><path fill="#03C03C" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/></svg>';
  var sbagliatoIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#FE2A41" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"/><path fill="#FE2A41" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/></svg>';
  var scriviQc = '<span>Scrivi qualcosa!</span>';
  var esattoMsg = '<span>Esatto!</span>';
  var sbagliatoMsg = '<span>Sbagliato!';
  var rispostaGiustaMsg = '<span>Sbagliato! La risposta giusta è</span>';
  $("nav ul li a:not(:only-child)").click(function(e) {
    $(this).siblings(".nav-dropdown").toggle();
    $(".nav-dropdown").not($(this).siblings()).hide();
    e.stopPropagation();
  });

  $("html").click(function() {
    $(".nav-dropdown").hide();
  });

  $("#nav-toggle").click(function() {
    $("nav ul").slideToggle();
  });

  $("#nav-toggle").on("click", function() {
    this.classList.toggle("active");
  });

  var lettere = {
    "#a": "a",
    "#b": "bi",
    "#c": "ci",
    "#d": "di",
    "#e": "e",
    "#f": "effe",
    "#g": "gi",
    "#h": "acca",
    "#i": "i",
    "#j": "i_lunga",
    "#k": "cappa",
    "#l": "elle",
    "#m": "emme",
    "#n": "enne",
    "#o": "o",
    "#p": "pi",
    "#q": "cu",
    "#r": "erre",
    "#s": "esse",
    "#t": "ti",
    "#u": "u",
    "#v": "vu",
    "#w": "doppia_vu",
    "#x": "ics",
    "#y": "ipsilon",
    "#z": "zeta",
    "#а": "а_",
    "#б": "б_",
    "#в": "в_",
    "#г": "г_",
    "#д": "д_",
    "#е": "е_",
    "#ё": "ё_",
    "#ж": "ж_",
    "#з": "з_",
    "#и": "и_",
    "#й": "й_",
    "#к": "к_",
    "#л": "л_",
    "#м": "м_",
    "#н": "н_",
    "#о": "о_",
    "#п": "п_",
    "#р": "р_",
    "#с": "с_",
    "#т": "т_",
    "#у": "у_",
    "#ф": "ф_",
    "#х": "х_",
    "#ц": "ц_",
    "#ч": "ч_",
    "#ш": "ш_",
    "#щ": "щ_",
    "#ъ": "ъ_",
    "#ы": "ы_",
    "#ь": "ь_",
    "#э": "э_",
    "#ю": "ю_",
    "#я": "я_",
  };
  $(".categories a").click(function() {
    var lettereIndex = $(this).attr("href");
    var snd = new Audio("/audio/" + lettere[lettereIndex] + ".mp3");
    snd.play();
    $("html, body")
      .delay(700)
      .animate({
          scrollTop: $($.attr(this, "href")).offset().top,
        },
        "fast"
      );
    return false;
  });

  $(".tags a, .toc a").on("click", function() {
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      "fast"
    );
    return false;
  });

  $('.post a:not([href^="#"])').on("click", function(e) { 
    e.preventDefault();
    e.stopPropagation();

    var href = $(this).attr("href");
    window.open(href, "_blank", "noopener,noreferrer");
  });

  $("#search").keyup(function() {
    var value = this.value.toLowerCase().trim();
    $(".search")
      .find("tr")
      .each(function(index) {
        var id = $(this).find("td").first().text().toLowerCase().trim();
        $(this).toggle(id.indexOf(value) !== -1);
      });
  });

  $("#search-all").on("keyup", function() {
    var s = $(this).val().toLowerCase();
    $(".search-all tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(s) > -1);
    });
  });

  $("audio").on("play", function() {
    var id = $(this).attr("id");

    $("audio")
      .not(this)
      .each(function(index, audio) {
        audio.pause();
        audio.currentTime = 0;
      });
  });

  $("video").on("play", function() {
    var id = $(this).attr("id");

    $("video")
      .not(this)
      .each(function(index, video) {
        video.pause();
        video.currentTime = 0;
        var src = $(this).attr("src");
        $(this).attr("src", src);
      });
  });

  $("video").on("ended", function() {
    $("video").currentTime = 0;
    var src = $(this).attr("src");
    $(this).attr("src", src);
  });

  var myArray = [
    { q1: "21", an: "ventuno" },
    { q1: "28", an: "ventotto" },
    { q1: "31", an: "trentuno" },
    { q1: "38", an: "trentotto" },
    { q1: "41", an: "quarantuno" },
    { q1: "48", an: "quarantotto" },
    { q1: "17°", an: "diciassettesimo" },
    { q1: "500", an: "cinquecento" },
    { q1: "21.000", an: "ventunmila" },
    { q1: "19°", an: "diciannovesimo" },
    { q1: "34", an: "trentaquattro" },
    { q1: "14532", an: "quattordicimilacinquecentotrentadue" },
    { q1: "1969", an: "millenovecentosessantanove" },
    { q1: "0", an: "zero" },
    { q1: "1.000.000", an: "un milione" },
    { q1: "2.000.000.000", an: "due miliardi" },
    { q1: "26°", an: "ventiseiesimo" },
    { q1: "36°", an: "trentaseiesimo" },
    { q1: "46°", an: "quarantaseiesimo" },
    { q1: "18", an: "diciotto" },
    { q1: "20", an: "venti" },
    { q1: "30", an: "trenta" },
    { q1: "XIV", an: "quattordicesimo" },
    { q1: "XXI", an: "ventunesimo" },
    { q1: "due volte", an: "doppio" },
    { q1: "tre volte", an: "triplo" },
    { q1: "quattro volte", an: "quadruplo" },
    { q1: "cinque volte", an: "quintuplo" },
    { q1: "2019", an: "duemiladiciannove" },
    { q1: "1", an: "uno" },
    { q1: "1°", an: "primo" },
    { q1: "2", an: "due" },
    { q1: "2°", an: "secondo" },
    { q1: "3", an: "tre" },
    { q1: "3°", an: "terzo" },
    { q1: "4", an: "quattro" },
    { q1: "4°", an: "quarto" },
    { q1: "5", an: "cinque" },
    { q1: "5°", an: "quinto" },
    { q1: "6", an: "sei" },
    { q1: "6°", an: "sesto" },
    { q1: "7", an: "sette" },
    { q1: "7°", an: "settimo" },
    { q1: "8", an: "otto" },
    { q1: "8°", an: "ottavo" },
    { q1: "9", an: "nove" },
    { q1: "9°", an: "nono" },
    { q1: "10", an: "dieci" },
    { q1: "10°", an: "decimo" },
    { q1: "11", an: "undici" },
    { q1: "11°", an: "undicesimo" },
    { q1: "12", an: "dodici" },
    { q1: "12°", an: "dodicesimo" },
    { q1: "13", an: "tredici" },
    { q1: "13°", an: "tredicesimo" },
    { q1: "14", an: "quattordici" },
    { q1: "14°", an: "quattordicesimo" },
    { q1: "15", an: "quindici" },
    { q1: "15°", an: "quindicesimo" },
    { q1: "16", an: "sedici" },
    { q1: "16°", an: "sedicesimo" },
    { q1: "17", an: "diciassette" },
    { q1: "17°", an: "diciassettesimo" },
    { q1: "18", an: "diciotto" },
    { q1: "18°", an: "diciottesimo" },
    { q1: "19", an: "diciannove" },
    { q1: "19°", an: "diciannovesimo" },
    { q1: "20", an: "venti" },
    { q1: "20°", an: "ventesimo" },
    { q1: "38", an: "trentotto" },
    { q1: "25", an: "venticinque" },
    { q1: "74", an: "settantaquattro" },
    { q1: "24", an: "ventiquattro" },
    { q1: "47", an: "quarantasette" },
    { q1: "65", an: "sessantacinque" },
    { q1: "453", an: "quattrocentocinquantatré" },
    { q1: "215", an: "duecentoquindici" },
    { q1: "786", an: "settecentoottantasei" },
    { q1: "1945", an: "millenovecentoquarantacinque" },
    { q1: "5944", an: "cinquemilanovecentoquarantaquattro" },
    { q1: "2/3", an: "due terzi" },
    { q1: "3/4", an: "tre quarti" },
    { q1: "пара", an: "paio" },
    { q1: "пара", an: "coppia" },
    { q1: "пара", an: "paio" },
    { q1: "тройка", an: "terna" },
    { q1: "тройной", an: "terno" },
    { q1: "двадцатка", an: "ventina" },
    { q1: "сотня", an: "centinaio" },
    { q1: "тысяча", an: "migliaio" },
    { q1: "двухгодичный", an: "biennale" },
    { q1: "четырёхлетний", an: "quadriennale" },
    { q1: "двадцатилетний", an: "ventennale" },
    { q1: "двадцатилетний", an: "ventenne" },
    { q1: "тридцатилетний", an: "trentenne" },
    { q1: "тройной", an: "ternario" },
    { q1: "четверной", an: "quaternario" },
    { q1: "оба", an: "ambo" },
    { q1: "оба", an: "ambedue" },
    { q1: "оба", an: "entrambi" },
    { q1: "двойной", an: "duplice" },
    { q1: "двойной", an: "doppio" },
    { q1: "тройной", an: "triplice" },
    { q1: "втрое", an: "triplo" },
    { q1: "четверной", an: "quadruplice" },
    { q1: "двухмесячный срок", an: "bimestre" },
    { q1: "четырёхмесячный период", an: "quadrimestre" },
    { q1: "полугодие, семестр", an: "semestre" },
    { q1: "двухлетие", an: "biennio" },
    { q1: "четырёхлетие", an: "quadriennio" },
    { q1: "десятилетие", an: "decennio" },
    { q1: "по одному", an: "a uno a uno" },
    { q1: "по одному, зараз", an: "uno per volta" },
    { q1: "по одному, поодиночке", an: "uno alla volta" },
    { q1: "по двое", an: "a due a due" },
  ];
  var rand = Math.floor(Math.random() * myArray.length);
  var i = 0;
  $("#q_num").html("<div id='text_num'>" + myArray[rand].q1 + "</div>");
  $("#q_ris").click(function() {
    i = i + 1;
    if (!$.trim($("#an_num").val())) {
      $("#risultato").html(sbagliatoIcon + scriviQc).show();
      i = 0;
    } else {
      var answer = $("#an_num").val().toLowerCase().trim();
      if (answer == myArray[rand].an) {
        $("#risultato").html(esattoIcon + esattoMsg);
      } else {
        $("#risultato").html(sbagliatoIcon + sbagliatoMsg);
        if (i == 3) {
          $("#suggerimento")
            .html("<div id=''>" + myArray[rand].an + "</div>")
            .slideDown();
        }
      }
      $("#an_num").val("").focus();
      $("#risultato").show();
    }
  });
  $("#next_num").click(function() {
    var newRand = rand;
    while (rand == newRand) {
      newRand = Math.floor(Math.random() * myArray.length);
    }
    rand = newRand;
    $("#q_num").html("<div id='text_num'>" + myArray[newRand].q1 + "</div>");
    $("#risultato").hide();
    $("#an_num").val("").focus();
    $("#suggerimento")
      .html("<div id=''>" + myArray[rand].an + "</div>")
      .hide();
    i = 0;
  });

  if ($(".brand a:not(:contains('Игорь Постольный'))").length) {
    $("body").css("display", "none");
  }

  $(".quiz-submit").on("click", function() {
    var correctAnswers = 0;
    var total = 0;
    var answersSelected = true;
    $('.domanda').each(function() {
      if ($(this).find('input:checked').length === 0) {
        answersSelected = false;
        return false;
      }
    });
    if (answersSelected) {
      $(".domanda").each(function() {
        total++;
        $(".quiz-msg", this).remove();
        var correct = $(this).find(":checked[data-correct]").length;
        var correctRadio = $(this).find("input[data-correct]");
        var correctRadioLabel = correctRadio.parent();
        if (correct == 1) {
          var msgHTML = '<div class="quiz-msg correct">Правильно!</div>';
          $(this).append(msgHTML);
          correctRadioLabel.removeClass("correct");
          correctAnswers++;
        } else {
          var _msgHTML = '<div class="quiz-msg incorrect">Неправильно!</div>';
          $(this).append(_msgHTML);
          correctRadioLabel.addClass("correct");
        }
      });
      $('.score').html("Правильных ответов <strong>" + correctAnswers + "</strong> из <strong>" + total + "</strong>");
    } else {
      $('.score').text("Нужно ответить на все вопросы!");
    }
  });

  $("#accento input").keyup(function() {
    if (
      $(this)
      .val()
      .match(/^\d{1}$/)
    ) {
      $(this).closest("li").next("li").find("input").focus();
    } else {
      $(this).val("");
    }
  });
  $("#acc_dacapo").click(function() {
    $("input").val("");
    $("#accento input").first().focus();
  });

  $(".mostrami").on("click", function() {
    var score = 0;
    var total = 0;
    $("span[data-answer]").each(function() {
      total++;
      let input = $(this).find("input");
      input.removeClass();
      if ($(this).data("answer") == input.val().toUpperCase()) {
        score++;
        input.addClass("corretto");
      } else {
        input.addClass("errato");
      }
    });
    $(".result").text("Правильных ответов: " + score + " из " + total);
  });

  var pappagallo = new Audio("/audio/pappagallo.mp3");
  var randomArray;
  var currentArray = 0; // Индекс текущего массива
  var arrays = [
    ["Тебе подарят новое платье",
      "Друг пригласит тебя на танец",
      "Друг сочинит для тебя стихи",
      "Получишь письмо от друга",
      "У тебя будут розовые туфли",
      "Тебя пригласят на праздник",
      "Ты пойдёшь в школу",
      "Научишься играть на пианино",
      "Накопишь денег и отдашь их маме",
      "Угостят конфеткой", "Скоро влюбишься",
      "У тебя будет кошка",
      "Ты найдёшь подругу"
    ],
    ["Тебе подарят новые ботинки",
      "Завтра найдёшь одну лиру",
      "Тебя пригласят на праздник",
      "Угостят конфеткой",
      "Подарят новую куртку",
      "Ты найдёшь друга",
      "Сможешь отдыхать весь день",
      "Получишь письмо",
      "Прокатишься на велосипеде",
      "Ты поправишься",
      "Найдёшь хорошую работу",
      "Тебя угостят кофе",
      "Посетишь Рим",
      "У тебя будет собака",
      "Жди гостей",
      "Улыбнёшься прямо сейчас",
      "Получишь пятёрку"
    ]
  ];

  function toggleArray() {
    currentArray = (currentArray + 1) % arrays.length; // Переключение между массивами

    // Обновление иконки
    if (currentArray === 0) {
      setTimeout(function() {
        $("#biglietto").css('background-color', 'LimeGreen');
      }, 1500);
      $("#btn-icon").html('<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#ab872f" d="m16.53 123.82l1.58-7.48l-13.79 3.44s-.97-13.3 10.9-20.98c13.01-8.42 27.99.55 27.99.55s-1.47 10.04-10.38 18.69c-6 5.81-16.3 5.78-16.3 5.78m94.94 0l-1.58-7.48l13.79 3.44s.97-13.3-10.9-20.98c-13.01-8.42-27.99.55-27.99.55s1.47 10.04 10.38 18.69c6 5.81 16.3 5.78 16.3 5.78"/><radialGradient id="notoGirlMediumLightSkinTone0" cx="22.726" cy="18.492" r="23.02" gradientTransform="matrix(.8903 -.4554 -.2657 -.5195 7.402 129.46)" gradientUnits="userSpaceOnUse"><stop offset=".525" stop-color="#bfa055" stop-opacity="0"/><stop offset="1" stop-color="#bfa055"/></radialGradient><path fill="url(#notoGirlMediumLightSkinTone0)" d="m16.53 123.82l1.58-7.48l-13.79 3.44s-.97-13.3 10.9-20.98c13.01-8.42 27.99.55 27.99.55s-1.47 10.04-10.38 18.69c-6 5.81-16.3 5.78-16.3 5.78"/><radialGradient id="notoGirlMediumLightSkinTone1" cx="13.53" cy="8.481" r="15.43" gradientTransform="matrix(.8381 -.5456 -.2765 -.4247 4.54 130.507)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#bfa055"/><stop offset=".699" stop-color="#bfa055" stop-opacity="0"/></radialGradient><path fill="url(#notoGirlMediumLightSkinTone1)" d="m16.53 123.82l1.58-7.48l-13.79 3.44s-.97-13.3 10.9-20.98c13.01-8.42 26.52 10.59 17.61 19.24c-6 5.81-16.3 5.78-16.3 5.78"/><radialGradient id="notoGirlMediumLightSkinTone2" cx="37.584" cy="18.492" r="23.02" gradientTransform="matrix(-.8903 -.4554 .2657 -.5195 133.827 136.225)" gradientUnits="userSpaceOnUse"><stop offset=".525" stop-color="#bfa055" stop-opacity="0"/><stop offset="1" stop-color="#bfa055"/></radialGradient><path fill="url(#notoGirlMediumLightSkinTone2)" d="m111.47 123.82l-1.58-7.48l13.79 3.44s.97-13.3-10.9-20.98c-13.01-8.42-27.99.55-27.99.55s1.47 10.04 10.38 18.69c6 5.81 16.3 5.78 16.3 5.78"/><radialGradient id="notoGirlMediumLightSkinTone3" cx="28.388" cy="8.481" r="15.43" gradientTransform="matrix(-.8381 -.5456 .2765 -.4247 135.912 138.613)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#bfa055"/><stop offset=".699" stop-color="#bfa055" stop-opacity="0"/></radialGradient><path fill="url(#notoGirlMediumLightSkinTone3)" d="m111.47 123.82l-1.58-7.48l13.79 3.44s.97-13.3-10.9-20.98c-13.01-8.42-26.52 10.59-17.61 19.24c6 5.81 16.3 5.78 16.3 5.78"/><path fill="#c48e6a" d="M26.79 94.84c-7.33 0-13.29-5.71-13.29-12.73s5.96-12.73 13.29-12.73h75.43c7 0 12.29 5.47 12.29 12.73s-5.28 12.73-12.29 12.73z"/><path fill="#e0bb95" d="M64 122.43c-18.05 0-43.46-16.17-43.46-52.12c0-33.44 19.09-59.64 43.46-59.64s43.46 26.2 43.46 59.64c0 35.95-25.41 52.12-43.46 52.12"/><path fill="#c48e6a" d="M69.07 87.09a1.63 1.63 0 0 0-.42-.11h-9.3c-.14.02-.28.05-.42.11c-.84.34-1.31 1.22-.91 2.14c.4.93 2.25 3.54 5.98 3.54s5.58-2.61 5.98-3.54c.4-.92-.06-1.8-.91-2.14"/><path fill="#ab872f" d="M32.45 68.38c4.07-5.82 13.42-6.04 18.48-1.5c.98.88 2.25 2.17 1.61 3.61c-.58 1.31-1.96 1.37-3.12.92c-3.24-1.25-6.42-1.97-9.9-1.34c-.9.16-1.77.42-2.63.7c-.69.22-1.31.62-2 .83c-1.89.59-3.57-1.52-2.44-3.22m60.56 3.16c-2.87-1.27-5.86-2.01-9.02-1.65c-1.7.19-3.34.66-4.92 1.31c-1.08.45-2.3.86-3.22-.17c-2.41-2.68 3.32-5.81 5.2-6.52c3.55-1.34 7.66-1.01 10.98.79c1.39.75 2.96 1.85 3.68 3.3c.86 1.72-.9 3.67-2.7 2.94"/><g fill="#5d4037"><ellipse cx="42.4" cy="80.3" rx="6.48" ry="6.71"/><ellipse cx="85.6" cy="80.3" rx="6.48" ry="6.71"/></g><path fill="#6d4c41" d="M75.01 97.97c-4.19 2.49-17.91 2.49-22.1 0c-2.4-1.43-4.86.76-3.86 2.94c.98 2.15 8.47 7.13 14.95 7.13c6.47 0 13.87-4.98 14.85-7.13c.99-2.19-1.43-4.37-3.84-2.94"/><path fill="#ab872f" d="M103.86 18.49c-5.97-6.22-11.63-8.85-12.18-8.92c-6.93-3.17-15.85-5.58-27.42-5.58c-50.85 0-54.38 41.63-52.33 59.88c1.8 16.09 11.49 20.12 11.49 20.12l-1.38-15.82s18.2-4.79 27.8-12.22s14.03-13.79 14.03-13.79s3.24 4.8 13.91 13.67s28.26 12.59 28.26 12.59l.07 15.53s8.46-3.94 9.88-20.07c1.76-20.21-.66-32.3-12.13-45.39"/><radialGradient id="notoGirlMediumLightSkinTone4" cx="64.019" cy="74.01" r="51.664" gradientTransform="matrix(.9998 .0195 .019 -.9735 -1.392 124.785)" gradientUnits="userSpaceOnUse"><stop offset=".699" stop-color="#bfa055" stop-opacity="0"/><stop offset="1" stop-color="#bfa055"/></radialGradient><path fill="url(#notoGirlMediumLightSkinTone4)" d="M103.86 18.49c-5.97-6.22-11.63-8.85-12.18-8.92c-6.93-3.17-15.85-5.58-27.42-5.58c-50.85 0-54.38 41.63-52.33 59.88c1.8 16.09 11.49 20.12 11.49 20.12l-1.38-15.82s18.2-4.79 27.8-12.22s14.03-13.79 14.03-13.79s3.24 4.8 13.91 13.67s28.26 12.59 28.26 12.59l.07 15.53s8.46-3.94 9.88-20.07c1.76-20.21-.66-32.3-12.13-45.39"/></svg>');
    } else {
      setTimeout(function() {
        $("#biglietto").css('background-color', 'OrangeRed');
      }, 1500);
      $("#btn-icon").html('<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#e59600" d="M26.28 94.88c-7.33 0-13.29-5.71-13.29-12.73s5.96-12.73 13.29-12.73h75.43c7.33 0 13.29 5.71 13.29 12.73s-5.96 12.73-13.29 12.73z"/><path fill="#ffca28" d="M64 122.47c-21.41 0-44.46-16.31-44.46-52.12c0-16.64 4.87-31.97 13.71-43.17C41.51 16.71 52.72 10.71 64 10.71s22.49 6 30.75 16.47c8.84 11.2 13.71 26.53 13.71 43.17c0 16.24-4.79 29.81-13.86 39.22c-8.01 8.32-18.88 12.9-30.6 12.9"/><path fill="#e59600" d="M69.07 87.13a1.63 1.63 0 0 0-.42-.11h-9.3c-.14.02-.28.05-.42.11c-.84.34-1.31 1.22-.91 2.14c.4.93 2.25 3.54 5.98 3.54c3.73 0 5.58-2.61 5.98-3.54s-.07-1.8-.91-2.14"/><path fill="#6d4c41" d="M32.18 68.42c4.07-5.82 13.42-6.04 18.48-1.5c.98.88 2.25 2.17 1.61 3.61c-.58 1.31-1.98 1.42-3.12.92c-3.49-1.53-6.41-1.97-9.9-1.34c-.9.16-1.77.42-2.64.7c-.69.22-1.31.62-2 .83c-1.88.59-3.56-1.52-2.43-3.22m61.08 3.16C90 70 87.67 69.5 84.24 69.93c-1.7.21-3.34.66-4.92 1.31c-1.09.45-2.3.86-3.22-.17c-2.41-2.68 3.32-5.81 5.2-6.52c3.55-1.34 7.66-1.01 10.98.79c1.38.75 2.96 1.85 3.68 3.3c.86 1.71-.9 3.68-2.7 2.94"/><g fill="#404040"><ellipse cx="42.14" cy="80.34" rx="6.48" ry="6.71"/><ellipse cx="85.86" cy="80.34" rx="6.48" ry="6.71"/></g><path fill="#795548" d="M75.06 97.97c-4.19 2.49-17.91 2.49-22.1 0c-2.4-1.43-4.86.76-3.86 2.94c.98 2.15 8.47 7.13 14.95 7.13c6.47 0 13.87-4.98 14.85-7.13c.99-2.19-1.43-4.37-3.84-2.94"/><path fill="#543930" d="M103.98 18.49c-5.97-6.22-11.63-8.85-12.18-8.92c-6.92-3.17-15.85-5.58-27.42-5.58c-50.85 0-54.38 41.64-52.33 59.88c1.25 11.14 5.65 16.47 8.24 18.7c0 0 .3-12.67 2.97-22.87c2.11-8.08 7.16-14.07 7.16-14.07s9.17 7.99 26.27 13.17c8.24 2.5 18.81 1.24 18.81 1.24l-5.93-10.49s9.68 7.13 15.72 8.5c7.73 1.75 13.4 1 13.4 1l-2.84-11.08s4.91 3.24 8.59 12.06c3.68 8.83 2.71 23.11 2.71 23.11c2.51-1.8 7.88-7.01 8.96-19.28c1.76-20.19-.66-32.28-12.13-45.37"/><radialGradient id="notoBoy0" cx="64.126" cy="53.457" r="54.554" gradientTransform="matrix(.9997 .0227 -.0211 .9325 1.146 2.158)" gradientUnits="userSpaceOnUse"><stop offset=".699" stop-color="#6d4c41" stop-opacity="0"/><stop offset="1" stop-color="#6d4c41"/></radialGradient><path fill="url(#notoBoy0)" d="M91.8 9.57C84.88 6.4 75.95 3.99 64.38 3.99C13.53 3.99 10 45.63 12.05 63.87c1.25 11.14 5.65 16.47 8.24 18.7c0 0 .3-12.67 2.97-22.87c2.11-8.08 7.16-14.07 7.16-14.07s9.17 7.99 26.27 13.17c8.24 2.5 18.81 1.24 18.81 1.24l-5.93-10.49s9.68 7.13 15.72 8.5c7.73 1.75 13.4 1 13.4 1l-2.84-11.08s4.91 3.24 8.59 12.06c3.68 8.83 2.71 23.11 2.71 23.11c2.51-1.8 7.88-7.01 8.96-19.28c1.76-20.19-.66-32.28-12.13-45.37c-5.97-6.22-11.63-8.85-12.18-8.92"/></svg>');
    }

    // Обнуление массива случайных элементов при переключении массивов
    randomArray = null;
  }

  // Функция для перемешивания массива
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Обмен значений местами
    }
    return array;
  }

  // Функция для отображения случайного элемента
  function updateRandomElement() {
    if (randomArray && randomArray.length > 0) {
      var randomElement = randomArray.pop(); // Извлекаем последний элемент из перемешанного массива
      $("#biglietto-text").html(randomElement);
    } else if (arrays[currentArray].length > 0) {
      $("#biglietto-text").text("Массив пуст.");
      randomArray = shuffleArray(arrays[currentArray].slice());
    } else {
      $("biglietto-text").text("Все элементы массива использованы.");
    }
  }

  // Инициализация иконки при загрузке страницы
  toggleArray();

  $("#icon-container").click(function() {
    toggleArray(); // Обработчик клика по кнопке

    $("#pappagallo").addClass("rt");

    setTimeout(function() {
      pappagallo.play();
      $("#pappagallo").removeClass("rt");
      $("#biglietto").css("display", "block");

      if (!randomArray || randomArray.length === 0) {
        // Если массив пуст или не определен, заполняем его заново
        randomArray = shuffleArray(arrays[currentArray].slice());
      }
      // Обновляем случайный элемент
      updateRandomElement();
    }, 1500);
  });

  $('#rt').click(function() {
    $("#pappagallo").addClass("rt");
    setTimeout(function() {
      pappagallo.play();
      $("#pappagallo").removeClass("rt");
      $("#biglietto").css("display", "block");

      if (!randomArray || randomArray.length === 0) {
        // Если массив пуст или не определен, заполняем его заново
        randomArray = shuffleArray(arrays[currentArray].slice());
      }
      // Обновляем случайный элемент
      updateRandomElement();
    }, 1500);
  });

  var scrollbarWidth = window.innerWidth - $(window).width() + "px";
  $(".lightbox").click(function() {
    $(".overlay").fadeIn(300);
    $(".image").css("background-image", "url(" + $(this).attr("src") + ")");
    $("body,.navigation").css("paddingRight", scrollbarWidth);
    $(".albero").css("marginRight", scrollbarWidth);
    $("html").css("overflow", "hidden");
  });

  $(".overlay").click(function() {
    $(this).fadeOut(300);
    setTimeout(function() {
      $("body,.navigation").css("paddingRight", 0);
      $(".albero").css("marginRight", 0);
      $("html").css("overflow", "auto");
    }, 300);
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $(".overlay").fadeOut(300);
      setTimeout(function() {
        $("body,.navigation").css("paddingRight", 0);
        $(".albero").css("marginRight", 0);
        $("html").css("overflow", "auto");
      }, 300);
    }
  });

  var now = new Date();
  var mese = now.getMonth();
  var giorno = now.getDay();
  var ore = now.getHours();
  var m = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
  var g = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
  if (ore < 5) {
    $("#benvenuto").text("Ciao! Cosa ci fai qui di notte?");
  } else if (ore < 12) {
    $("#benvenuto").text("Buon giorno!");
  } else if (ore < 17) {
    $("#benvenuto").text("Buon pomeriggio!");
  } else {
    $("#benvenuto").text("Buona sera!");
  }

  var isResult1Correct = false;
  var isResult2Correct = false;
  $('.btn-mg').click(function() {
    var buttonId = $(this).attr('id');
    if (buttonId === 'btn-mese') {
      var search = $("#search-mese").val().toLowerCase().trim();
      if (!$.trim($("#search-mese").val())) {
        $("#risultato-mese").html(sbagliatoIcon + scriviQc);
        $("#search-mese").focus();
      } else if (search == m[mese]) {
        isResult1Correct = true;
        $("#risultato-mese").html(esattoIcon + esattoMsg);
        $("#search-mese").blur();

        if (!isResult2Correct) {
          $("#search-giorno").focus(); // Передаем фокус на поле #search-giorno, только если результат для поля #search-mese неверен
        }
      } else {
        $("#risultato-mese").html(sbagliatoIcon + rispostaGiustaMsg + '<span class="evid">' + m[mese] + '</span>');
        $("#search-mese").val("").focus();
      }
      console.log("Нажата кнопка #btn-mese");
    } else if (buttonId === 'btn-giorno') {
      var search = $("#search-giorno").val().replace("ì", "i").toLowerCase().trim();

      console.log('Значение поля #search-giorno', search);

      if (!$.trim($("#search-giorno").val())) {
        $("#risultato-giorno").html(sbagliatoIcon + scriviQc);
        $("#search-giorno").focus();
      } else if (search == g[giorno].replace("ì", "i")) {
        isResult2Correct = true;
        $("#risultato-giorno").html(esattoIcon + esattoMsg);

        $("#search-giorno").blur();
        if (!isResult1Correct) {
          $("#search-mese").focus(); // Передаем фокус на поле #search-mese, только если результат для поля #search-giorno неверен
        }
      } else {
        $("#risultato-giorno").html(sbagliatoIcon + rispostaGiustaMsg + '<span class="evid">' + g[giorno] + '</span>');
        $("#search-giorno").val("").focus();
      }
      console.log("Нажата кнопка #btn-giorno");
    }
  });

  $('#search-mese, #search-giorno').keydown(function(event) {
    if (event.keyCode === 13) {
      var inputId = $(this).attr('id');
      if (inputId === 'search-mese') {
        $('#btn-mese').click();
      } else if (inputId === 'search-giorno') {
        $('#btn-giorno').click();
      }
    }
  });

  var currentYear = new Date().getFullYear();
  $('#currentYear').html("&copy; " + currentYear + " ");

  var Mwidth = 960;
  if ($(window).width() > Mwidth) {
    var headerHeight = $(".navigation").height();
    $(window).on(
      "scroll", {
        TopPrev: 0,
      },
      function() {
        var TopCurrent = $(window).scrollTop();
        if (TopCurrent < this.TopPrev) {
          if (TopCurrent > 0 && $(".navigation").hasClass("fixed-menu")) {
            $(".navigation").addClass("visible-scroll-up");
          } else {
            $(".navigation").removeClass("visible-scroll-up fixed-menu");
          }
        } else {
          $(".navigation").removeClass("visible-scroll-up");
          if (
            TopCurrent > headerHeight &&
            !$(".navigation").hasClass("fixed-menu")
          )
            $(".navigation").addClass("fixed-menu");
        }
        this.TopPrev = TopCurrent;
      }
    );
  }
});
$(function() {
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

  $('.post a:not([href^="#"').on("click", function() {
    var href = $(this).attr("href");
    window.open(href, "_blank").focus();
    return false;
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
      $("#risultato").html(
        "<div class='sbagliato'></div>Вы ещё ничего не написали!"
      );
      $("#risultato").show();
      i = 0;
    } else {
      var answer = $("#an_num").val().toLowerCase().trim();
      if (answer == myArray[rand].an) {
        $("#risultato").html("<div class='esatto'></div>Правильно!");
      } else {
        $("#risultato").html("<div class='sbagliato'></div>Неправильно!");
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
    var dom = $('.domanda').size();
    var inch = $("input:checked").size();
    if (inch < dom) {
      $(".score").text("Нужно ответить на все вопросы!");
    } else {
      $(".domanda").each(function() {
        total++;
        $(".quiz-msg", this).remove();
        var correct = $(this).find(":checked[data-correct]").length;
        if (correct == 1) {
          var msgHTML = '<div class="quiz-msg correct">Правильно!</div>';
          $(this).append(msgHTML);
          correctAnswers++;
        } else {
          var _msgHTML = '<div class="quiz-msg incorrect">Неправильно!</div>';
          $(this).append(_msgHTML);
          var correctRadio = $(this).find("input[data-correct]");
          var correctRadioLabel = correctRadio.parent();
          correctRadioLabel.addClass("correct");
        }
      });
      $(".score").html("Правильных ответов <strong>" + correctAnswers + "</strong> из <strong>" + total + "</strong>");
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

  var biglietti_text = [
    "Тебе подарят новые ботинки",
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
    "Ты найдёшь подругу",
    "Тебя угостят кофе",
    "Посетишь Рим",
    "У тебя будет собака",
    "У тебя будет кошка",
    "Жди гостей",
    "Улыбнёшься прямо сейчас",
    "Скоро влюбишься",
    "Получишь пятёрку",
  ];
  var biglietti_bgcolor = ["LimeGreen", "OrangeRed"];
  var pappagallo = new Audio("/audio/pappagallo.mp3");
  $('#rt').click(function() {
    $('#pappagallo').addClass('rt');
    setTimeout(function() {
      pappagallo.play();
      $('#pappagallo').removeClass('rt');
      $('#biglietto').css('display', 'block');
      var randomText = Math.floor(Math.random() * biglietti_text.length);
      $('#biglietto').text(biglietti_text[randomText]);
      var randomBgcolor = Math.floor(Math.random() * biglietti_bgcolor.length);
      $('#biglietto').css('background', biglietti_bgcolor[randomBgcolor]);
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
  $('#btn-mese').click(function() {
    var search = $("#search-mese").val().toLowerCase().trim();
    if (!$.trim($("#search-mese").val())) {
      $("#risultato-mese").html("<div class='sbagliato'></div>Scrivi qualcosa!");
      $("#search-mese").focus();
    } else if (search == m[mese]) {
      $("#risultato-mese").html("<div class='esatto'></div>Esatto!");
    } else {
      $("#risultato-mese").html("<div class='sbagliato'></div>Sbagliato! La risposta giusta è " + "<span class='evid'>" + m[mese] + "</span>");
      $("#search-mese").val("").focus();
    }
  });
  $('#btn-giorno').click(function() {
    var search = $("#search-giorno").val().toLowerCase().trim();
    if (!$.trim($("#search-giorno").val())) {
      $("#risultato-giorno").html("<div class='sbagliato'></div>Scrivi qualcosa!");
      $("#search-giorno").focus();
    } else if (search == g[giorno]) {
      $("#risultato-giorno").html("<div class='esatto'></div>Esatto!");
    } else {
      $("#risultato-giorno").html("<div class='sbagliato'></div>Sbagliato! La risposta giusta è " + "<span class='evid'>" + g[giorno] + "</span>");
      $("#search-giorno").val("").focus();
    }
  });

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
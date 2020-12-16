(function ($) {
  $(function () {
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });

    $("html").click(function () {
      $(".nav-dropdown").hide();
    });

    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });

    $("#nav-toggle").on("click", function () {
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
    };
    $(".categories a").click(function () {
      var lettereIndex = $(this).attr("href");
      var snd = new Audio("/audio/" + lettere[lettereIndex] + ".mp3");
      snd.play();
      $("html, body")
        .delay(700)
        .animate(
          {
            scrollTop: $(
              '[name="' + $.attr(this, "href").substr(1) + '"]'
            ).offset().top,
          },
          "fast"
        );
      return false;
    });

    $(".tags-anchor a").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top,
        },
        "fast"
      );
      return false;
    });

    $(".top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "fast");
      return false;
    });

    $('.post a:not([href^="#"').on("click", function () {
      var href = $(this).attr("href");
      window.open(href, "_blank").focus();
      return false;
    });

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 100)
        $("#albero")
          .removeClass("off")
          .addClass(
            "tornasu",
            setTimeout(function () {
              $("#albero").addClass("albero");
            }, 500)
          );
      else
        $("#albero")
          .removeClass("tornasu")
          .addClass("off")
          .removeClass("albero");
    });

    $("#search").keyup(function () {
      var value = this.value.toLowerCase().trim();
      $(".abbreviazioni")
        .find("tr")
        .each(function (index) {
          var id = $(this).find("td").first().text().toLowerCase().trim();
          $(this).toggle(id.indexOf(value) !== -1);
        });
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
      { q1: "Due volte", an: "doppio" },
      { q1: "Tre volte", an: "triplo" },
      { q1: "Quattro volte", an: "quadruplo" },
      { q1: "Cinque volte", an: "quintuplo" },
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
    ];
    var rand = Math.floor(Math.random() * myArray.length);
    var i = 0;
    $("#q_num").html("<div id='text_num'>" + myArray[rand].q1 + "</div>");
    $("#q_ris").click(function () {
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
    $("#next_num").click(function () {
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

    $(".quiz-submit").on("click", function () {
      var correctAnswers = 0;
      var total = 0;
      $(".domanda").each(function () {
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
      $(".score").html(
        "Правильных ответов <strong>" +
          correctAnswers +
          "</strong> из <strong>" +
          total +
          "</strong>"
      );
    });
    
    $('.brand a').html(function(i, html) {
            var chars = $.trim(html).split("");
            return '<span>' + chars.join('</span><span>') + '</span>';
    });

    var Mwidth = 960;
    if ($(window).width() > Mwidth) {
      var headerHeight = $(".navigation").height();
      $(window).on(
        "scroll",
        {
          TopPrev: 0,
        },
        function () {
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
})(jQuery);

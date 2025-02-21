/*
 * Copyright (c) Postolny I. A.
 * (https://postolny.github.io/)
 */
$(function() {
  var esattoIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#03C03C" d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415z"/><path fill="#03C03C" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/></svg>';
  var sbagliatoIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#FE2A41" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"/><path fill="#FE2A41" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/></svg>';
  var scriviQc = '<span>Scrivi qualcosa!</span>';
  var esattoMsg = '<span>Esatto!</span>';
  var sbagliatoMsg = '<span>Sbagliato!';
  var rispostaGiustaMsg = '<span>Sbagliato! La risposta giusta è</span>';
  var playBtnRand = '<span id="playButtonRandom"></span>';
  var reloadBtnRand = '<span class="random-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 11H7.101l.001-.009a4.956 4.956 0 0 1 .752-1.787a5.054 5.054 0 0 1 2.2-1.811c.302-.128.617-.226.938-.291a5.078 5.078 0 0 1 2.018 0a4.978 4.978 0 0 1 2.525 1.361l1.416-1.412a7.036 7.036 0 0 0-2.224-1.501a6.921 6.921 0 0 0-1.315-.408a7.079 7.079 0 0 0-2.819 0a6.94 6.94 0 0 0-1.316.409a7.04 7.04 0 0 0-3.08 2.534a6.978 6.978 0 0 0-1.054 2.505c-.028.135-.043.273-.063.41H2l4 4zm4 2h2.899l-.001.008a4.976 4.976 0 0 1-2.103 3.138a4.943 4.943 0 0 1-1.787.752a5.073 5.073 0 0 1-2.017 0a4.956 4.956 0 0 1-1.787-.752a5.072 5.072 0 0 1-.74-.61L7.05 16.95a7.032 7.032 0 0 0 2.225 1.5c.424.18.867.317 1.315.408a7.07 7.07 0 0 0 2.818 0a7.031 7.031 0 0 0 4.395-2.945a6.974 6.974 0 0 0 1.053-2.503c.027-.135.043-.273.063-.41H22l-4-4z" /></svg></span>';
  var viewTraduzione = '<svg class="view-icon down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-5.28 7.78l-1.44 1.44l6 6l.72.686l.72-.687l6-6l-1.44-1.44L16 18.064l-5.28-5.282z" /></svg><svg class="view-icon up" xmlns="http://www.w3.org/2000/svg" style="display: none;" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m0 6.094l-.72.687l-6 6l1.44 1.44L16 13.937l5.28 5.28l1.44-1.437l-6-6z" /></svg>';
  var close = '<svg class="close-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.4889971 2 2 6.4889971 2 12C2 17.511003 6.4889971 22 12 22C17.511003 22 22 17.511003 22 12C22 6.4889971 17.511003 2 12 2 z M 12 4C16.430123 4 20 7.5698774 20 12C20 16.430123 16.430123 20 12 20C7.5698774 20 4 16.430123 4 12C4 7.5698774 7.5698774 4 12 4 z M 8.7070312 7.2929688L7.2929688 8.7070312L10.585938 12L7.2929688 15.292969L8.7070312 16.707031L12 13.414062L15.292969 16.707031L16.707031 15.292969L13.414062 12L16.707031 8.7070312L15.292969 7.2929688L12 10.585938L8.7070312 7.2929688 z" /></svg>';
  var toc = '<span id="tocIcon"><svg class="toc-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 17q.425 0 .713-.288T9 16t-.288-.712T8 15t-.712.288T7 16t.288.713T8 17m0-4q.425 0 .713-.288T9 12t-.288-.712T8 11t-.712.288T7 12t.288.713T8 13m0-4q.425 0 .713-.288T9 8t-.288-.712T8 7t-.712.288T7 8t.288.713T8 9m3 8h6v-2h-6zm0-4h6v-2h-6zm0-4h6V7h-6zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"/></svg></span>';
  var copy = '<svg  class="copy-btn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/></svg>';
  var copied = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M12.78 4.62a.75.75 0 0 1 0 1.06l-6.097 6.097a.75.75 0 0 1-1.069-.009L3.211 9.284a.75.75 0 1 1 1.078-1.043l1.873 1.936L11.72 4.62a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/></svg>';
  var rand;
  var currentAudio = null;
  var currentPlayItem = null;
  var playedItems = [];
  var frasario = [];
  var frasarioIconContainer = $("#frasario-icon-container");
  var now = new Date();
  var ore = now.getHours();
  var giornoSettimana = now.getDay();
  var giornoMese = now.getDate();
  var mese = now.getMonth();
  const clickSound = new Audio("/audio/click.mp3");
  const correctSound = new Audio("/audio/correct.mp3");
  const wrongSound = new Audio("/audio/wrong.mp3");
  let isMuted = false;

  var m = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
  var g = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];

  var mes = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  var dn = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

  function toggleAudio() {
    isMuted = !isMuted;
    $("#audioOnIcon").toggle(!isMuted);
    $("#audioOffIcon").toggle(isMuted);
  }

  $("#audioOnIcon, #audioOffIcon").click(toggleAudio);

  function playSound(sound) {
    if (!isMuted) {
      sound.play();
    }
  }

  function day() {
    $("#day").html('Oggi è ' + g[giornoSettimana] + ', ' + giornoMese + ' ' + m[mese] + '<br>' + 'Сегодня ' + dn[giornoSettimana] + ', ' + giornoMese + ' ' + mes[mese]);
  }

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

  const p1 = "p";

  // Прокрутка к якорю и сноски в постах
  function scrollToAnchor(anchor) {
    if (!anchor.startsWith("#")) return;

    const decodedAnchor = decodeURIComponent(anchor);
    const safeAnchor = decodedAnchor.replace(/:/g, '\\:');
    const target = $(safeAnchor);

    if (target.length) {
      const currentScroll = $(window).scrollTop();
      const offsetDown = 15;
      const offsetUp = 85;

      const targetOffset = target.offset().top;
      const offset = targetOffset > currentScroll ? offsetDown : offsetUp;

      $('html, body').animate({
        scrollTop: target.offset().top - offset
      }, 800);

      history.replaceState(null, null, decodedAnchor);
    } else {
      console.warn("Элемент с ID", decodedAnchor, "не найден.");
    }
  }

  // Хэш при загрузке страницы
  const hash = window.location.hash;
  if (hash) {
    window.scrollTo(0, 0);
    setTimeout(() => scrollToAnchor(hash), 300);
  }

  $(".tags a, .toc a, a.footnote, a.reversefootnote").on("click", function(e) {
    const href = $(this).attr("href");

    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToAnchor(href);
    }
  });

  $(".categories a").on("click", function(e) {
    const lettereIndex = $(this).attr("href");

    if (lettere[lettereIndex]) {
      var snd = new Audio("/audio/" + lettere[lettereIndex] + ".mp3");
      snd.play();
      scrollToAnchor(lettereIndex);
      return false;
    }
  });

  // Сноски на страницах
  $(".postilla ol li").each(function() {
    let noteNum = $(this).index() + 1; // Номер сноски
    let noteId = "note-" + noteNum; // id для li

    $(this).attr("id", noteId); // Устанавливаем id для li

    // Если есть ссылка "назад"
    if ($(this).find(".back-to-text").length === 0) {
      $(this).append(' <a href="#sup-' + noteNum + '" class="back-to-text" data-note="' + noteNum + '">↩</a>');
    }
  });

  // Прокрутка от sup к ol
  $("sup").click(function(e) {
    e.preventDefault();
    let noteId = "#note-" + $(this).attr("id").replace("sup-", ""); // id для li
    smoothScroll(noteId, noteId, 15);
  });

  // Прокрутка от ol к sup
  $(".postilla .back-to-text").click(function(e) {
    e.preventDefault();
    let noteNum = $(this).data("note");
    let supId = "#sup-" + noteNum; // id для sup
    smoothScroll(supId, supId, 85);
  });

  function smoothScroll(target, hash, offset = 0) {
    const $target = $(target);
    if ($target.length) {
      $('html, body').animate({
        scrollTop: $target.offset().top - offset
      }, 800);
      history.replaceState(null, null, hash);
    }
  }

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

  var audioPlayer = $('#audioPlayer');
  const progressImage = $('#gondoliere');
  const p2 = "ost";
  let wakeLock = null;
  let togglePlayPause = false;

  // Запрос Wake Lock
  async function requestWakeLock() {
    try {
      if (!wakeLock) { // Используем, только если Wake Lock не активен
        wakeLock = await navigator.wakeLock.request('screen');
        console.log('Wake Lock активирован');
        wakeLock.addEventListener('release', () => {
          console.log('Wake Lock деактивирован');
        });
      }
    } catch (err) {
      console.error('Не удалось активировать Wake Lock');
    }
  }

  // Отключение Wake Lock
  function releaseWakeLock() {
    if (wakeLock !== null) {
      wakeLock.release();
      wakeLock = null;
      console.log('Wake Lock отключён');
    }
  }

  // Отслеживаем переход на другую вкладку или сворачивание окна, что снова активировать Wake Lock по возвращению
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      console.log('Вкладка активна');
      requestWakeLock(); // Повторный запрос Wake Lock
    } else {
      console.log('Вкладка свернута');
      releaseWakeLock(); // Отключение Wake Lock
    }
  });

  const p3 = "ol";

  if (audioPlayer.length > 0) {
    $(audioPlayer).attr("src", $("#playlist li:first").data("src"));
    $("#playlist li:first").addClass("playing");
    let currentIndex = 0;
    $("#playlist li").on("click", function(event) {
      event.preventDefault();
      $(audioPlayer).attr("src", $(this).data("src"));
      $("#playlist li").removeClass("playing");
      $(this).addClass("playing");
      currentIndex = $(this).index();
      scrollToCurrentTrack();
      audioPlayer[0].play();
      updatePlayPauseButton(true);
    });

    $('#play-pause').on('click', function() {
      playpause();
    });

    function playpause() {
      if (audioPlayer[0].paused || audioPlayer[0].ended) {
        togglePlayPause = true;
        $('#play-pause').removeClass('playing').addClass('paused');
        $('#play-pause').find('.icon-play').addClass('hidden');
        $('#play-pause').find('.icon-pause').removeClass('hidden');
        audioPlayer[0].play();
      } else {
        $('#play-pause').removeClass('paused').addClass('playing');
        $('#play-pause').find('.icon-play').removeClass('hidden');
        $('#play-pause').find('.icon-pause').addClass('hidden');
        audioPlayer[0].pause();
      }
    }

    function updatePlayPauseButton(isPlaying) {
      if (isPlaying) {
        $('#play-pause').removeClass('playing').addClass('paused');
        $('#play-pause').find('.icon-play').addClass('hidden');
        $('#play-pause').find('.icon-pause').removeClass('hidden');
      } else {
        $('#play-pause').removeClass('paused').addClass('playing');
        $('#play-pause').find('.icon-play').removeClass('hidden');
        $('#play-pause').find('.icon-pause').addClass('hidden');
      }
    }

    $('#next').click(nextTrack);
    $('#prev').click(prevTrack);

    function prevTrack() {
      var current = $("#playlist li.playing");
      var prev = current.prev("li");

      if (prev.length) {
        $("#playlist li").removeClass("playing");
        prev.addClass("playing");
        $(audioPlayer).attr("src", prev.data("src"));
        currentIndex = prev.index();
        scrollToCurrentTrack();
        audioPlayer[0].play();
        updatePlayPauseButton(true);
      } else {
        var last = $("#playlist li:last");
        $("#playlist li").removeClass("playing");
        last.addClass("playing");
        $(audioPlayer).attr("src", last.data("src"));
        currentIndex = last.index();
        scrollToCurrentTrack();
        audioPlayer[0].play();
        updatePlayPauseButton(true);
      }
    }

    function nextTrack() {
      var current = $("#playlist li.playing");
      var next = current.next("li");
      if (next.length) {
        $("#playlist li").removeClass("playing");
        next.addClass("playing");
        $(audioPlayer).attr("src", next.data("src"));
        currentIndex = next.index();
        scrollToCurrentTrack();
        audioPlayer[0].play();
        updatePlayPauseButton(true);
      } else {
        var first = $("#playlist li:first");
        $("#playlist li").removeClass("playing");
        first.addClass("playing");
        $(audioPlayer).attr("src", first.data("src"));
        currentIndex = first.index();
        scrollToCurrentTrack();
        audioPlayer[0].play();
        updatePlayPauseButton(true);
      }
    }

    function updateVolume() {
      const volume = $("#volume-control").val();
      audioPlayer[0].volume = volume;
      $(".value").text(volume);

      localStorage.setItem('playerVolume', volume);
    }

    const savedVolume = localStorage.getItem('playerVolume');
    if (savedVolume !== null) {
      $("#volume-control").val(savedVolume);
      audioPlayer[0].volume = savedVolume;
      $(".value").text(savedVolume);
    } else {
      updateVolume();
    }

    $('#volume-control').on('input', updateVolume);

    function showImages() {
      if (window.innerWidth <= 768) {
        $('.image.left').css({
          transform: 'translate(20%, -25%) rotate(20deg) scale(1.5)',
          'transform-origin': 'bottom center',
        });

        $('.image.right').css({
          transform: 'translate(-20%, -25%) rotate(-20deg) scale(1.5)',
          'transform-origin': 'bottom center',
        });
      } else {
        $('.image.left').css({
          transform: 'translate(-20%, -40%) rotate(-30deg) scale(1.5)',
          'transform-origin': 'bottom center',
        });

        $('.image.right').css({
          transform: 'translate(20%, -40%) rotate(30deg) scale(1.5)',
          'transform-origin': 'bottom center',
        });
      }
    }

    function hideImages() {
      $('.image.left').css({
        transform: 'translate(0, 0) scale(1)',
      });

      $('.image.right').css({
        transform: 'translate(0, 0) scale(1)',
      });
    }

    const toggleBodyClass = $('#toggleBodyClass');
    const toggleImages = $('#toggleImages');
    const toggleProgress = $('#toggleProgress');

    function setupToggle(toggleElement, toggleName) {
      const isChecked = localStorage.getItem(toggleName) !== 'false';
      toggleElement.prop('checked', isChecked);

      toggleElement.change(function() {
        const checked = toggleElement.is(':checked');
        localStorage.setItem(toggleName, checked);
      });
    }

    setupToggle(toggleBodyClass, 'toggleBodyClass');
    setupToggle(toggleImages, 'toggleImages');
    setupToggle(toggleProgress, 'toggleProgress');

    toggleBodyClass.on('change', function() {
      if (!audioPlayer[0].paused) {
        if (toggleBodyClass.is(':checked')) {
          $('body').addClass('is-playing');
        } else {
          $('body').removeClass('is-playing');
        }
      }
    });
    toggleImages.on('change', function() {
      if (!audioPlayer[0].paused) {
        if (toggleImages.is(':checked')) {
          showImages();
        } else {
          hideImages();
        }
      }
    });
    toggleProgress.on('change', function() {
      if (toggleProgress.is(':checked')) {
        progressImage.show();
      } else {
        progressImage.hide();
      }
    });

    $('#panel-toggle').click(function() {
      $('.sliding-panel').toggleClass('open');
    });

    // audioPlayer.on('timeupdate', function() {
    //   if (toggleProgress.is(':checked')) {
    //     const currentTime = audioPlayer[0].currentTime;
    //     const duration = audioPlayer[0].duration;

    //     if (duration > 0) {
    //       const progress = (currentTime / duration) * 100;
    //       progressImage.css('left', progress + '%');
    //     }
    //   } else {
    //     progressImage.hide();
    //   }
    // });

    const progressBar = $('#progressBar');
    const progressValue = $('#progressValue');
    const currentTimeElement = $('#currentTime');
    const totalTimeElement = $('#totalTime');

    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');
      return minutes + ':' + remainingSeconds;
    }

    audioPlayer.on('loadedmetadata', function() {
      const duration = audioPlayer[0].duration;
      totalTimeElement.text(formatTime(duration));
    });

    audioPlayer.on('timeupdate', function() {
      const currentTime = audioPlayer[0].currentTime;
      const duration = audioPlayer[0].duration;

      currentTimeElement.text(formatTime(currentTime));

      if (duration > 0) {
        const progress = (currentTime / duration) * 100;
        progressValue.css('width', progress + '%');
        if (toggleProgress.is(':checked')) {
          progressImage.css('left', progress + '%');
        } else {
          progressImage.hide();
        }
      }
    });

    progressBar.on('click touchstart', function(e) {
      let clickPositionX;

      if (e.type === 'touchstart') {
        // Сенсорные уст-ва
        const touch = e.originalEvent.touches[0];
        clickPositionX = touch.pageX - $(this).offset().left;
      } else {
        // Мышь
        clickPositionX = e.offsetX;
      }

      const progressBarWidth = $(this).width();
      const duration = audioPlayer[0].duration;

      const newTime = (clickPositionX / progressBarWidth) * duration;
      audioPlayer[0].currentTime = newTime;

      console.log('Новое время:', newTime);
    });

    audioPlayer.on('play', function() {
      requestWakeLock();
      if (toggleBodyClass.is(':checked')) {
        $('body').addClass('is-playing');
      }
      frasarioIconContainer.fadeOut(300);
      if (toggleImages.is(':checked')) {
        setTimeout(() => {
          showImages();
        }, 500);
      } else {
        hideImages();
      }
      // Если это пауза, дальше ничего делаем
      if (togglePlayPause) {
        togglePlayPause = false;
        return;
      }

      progressImage.hide();
      progressImage.css('left', '-150px');

      setTimeout(() => {
        progressImage.addClass('visible');
        progressImage.show();
      }, 50);
    });

    audioPlayer.on('pause', function() {
      if (!audioPlayer[0].ended) {
        hideImages();
        setTimeout(() => {
          $('body').removeClass('is-playing');
          frasarioIconContainer.fadeIn(300);
        }, 500);
      }
      releaseWakeLock();
    });

    audioPlayer.on('ended', function() {
      if (currentIndex + 1 < $('#playlist li').length) {
        updatePlayPauseButton(true);
        nextTrack();
      } else {
        updatePlayPauseButton(false);
        progressValue.css('width', 0);
        currentTimeElement.text('0:00');
        hideImages();
        setTimeout(() => {
          $('body').removeClass('is-playing');
          frasarioIconContainer.fadeIn(300);
        }, 500);
      }
      progressImage.hide();
      progressImage.css('left', '-150px');

      setTimeout(() => {
        progressImage.addClass('visible');
        progressImage.show();
      }, 50);
    });

    function scrollToCurrentTrack() {
      const playlistContainer = $('#playlist-container');
      const playlistItem = $('#playlist li');
      const currentTrack = playlistItem.eq(currentIndex);

      if (!currentTrack.length || !playlistContainer.length) return;

      const containerOffsetTop = playlistContainer.offset().top;
      const containerTop = playlistContainer.scrollTop();
      const containerBottom = containerTop + playlistContainer.innerHeight();

      const trackTop = currentTrack.offset().top - containerOffsetTop + containerTop;
      const trackBottom = trackTop + currentTrack.outerHeight();

      if (trackTop < containerTop) {
        playlistContainer.animate({
          scrollTop: trackTop,
        }, 300);
      } else if (trackBottom > containerBottom) {
        playlistContainer.animate({
          scrollTop: trackBottom - playlistContainer.innerHeight(),
        }, 300);
      }
    }
  }

  const p4 = "ny";

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
    frasarioIconContainer.fadeOut(300);
  });

  $("video").on("pause", function() {
    frasarioIconContainer.fadeIn(300);
  });

  $("video").on("ended", function() {
    $("video").currentTime = 0;
    var src = $(this).attr("src");
    $(this).attr("src", src);
    frasarioIconContainer.fadeIn(300);
  });

  const p5 = ".gi";

  $.getJSON('/assets/numerali.json').done(function(data) {
    numerali = data;
    console.log(numerali);

    var rand = Math.floor(Math.random() * numerali.length);
    var i = 0;
    $("#q_num").html("<div id='text_num'>" + numerali[rand].q1 + "</div>");
    $("#q_ris").click(function() {
      i = i + 1;
      if (!$.trim($("#an_num").val())) {
        $("#risultato").html(sbagliatoIcon + scriviQc).show();
        i = 0;
      } else {
        var answer = $("#an_num").val().toLowerCase().trim();
        if (answer == numerali[rand].an) {
          $("#risultato").html(esattoIcon + esattoMsg);
          playSound(correctSound);
        } else {
          $("#risultato").html(sbagliatoIcon + sbagliatoMsg);
          playSound(wrongSound);
          if (i == 3) {
            $("#suggerimento")
              .html("<div id=''>" + numerali[rand].an + "</div>")
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
        newRand = Math.floor(Math.random() * numerali.length);
      }
      rand = newRand;
      $("#q_num").html("<div id='text_num'>" + numerali[newRand].q1 + "</div>");
      $("#risultato").hide();
      $("#an_num").val("").focus();
      $("#suggerimento")
        .html("<div id=''>" + numerali[rand].an + "</div>")
        .hide();
      i = 0;
    });

  }).fail(function() {
    console.log("Не удалось загрузить данные из frasario.json.");
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
      $('.score').text("Ответьте на все вопросы!");
    }
  });

  $(".domanda").on("change", 'input[type="radio"]', function() {
    clickSound.play();
  });

  var currentQuestion = 0;
  var correctAnswers = 0;
  var totalQuestions = $(".quiz-question").length;
  var answersSummary = [];

  $(".start-quiz").click(function() {
    $("html").css("overflow", "hidden");
    $("body,.navigation").css("paddingRight", scrollbarWidth);

    $(".quiz-container").show();
    $(".summary").hide();
    $(".quiz-question").removeClass("active").hide().eq(0).addClass("active").show();
    currentQuestion = 0;
    correctAnswers = 0;
    answersSummary = [];
    $(".quiz-score").text("0/" + totalQuestions);
    $(".next-question").prop("disabled", true);
    $(".check-answer").prop("disabled", false);
  });

  $(".close-btn").on("click", function() {
    $("html").css("overflow", "auto");
    $("body,.navigation").css("paddingRight", 0);
    $(".quiz-container").hide();
    resetQuiz();
  });

  function resetQuiz() {
    $(".quiz-question").removeClass("active").hide();
    $(".quiz-question").first().addClass("active").show();
    $(".summary").hide();
    $(".results-list").empty();
    $(".quiz-score").text("0/3");
    $("input[type=radio]").prop("checked", false);
    $(".quiz-message").empty();
    correctAnswers = 0;
    currentQuestion = 0;
    answersSummary = [];
    $(".next-question").prop("disabled", true);
    $(".check-answer").prop("disabled", false);
  }

  $(".check-answer").click(function() {
    var question = $(".quiz-question").eq(currentQuestion);
    var selected = question.find("input:checked");
    var msgBox = question.find(".quiz-message");

    msgBox.text("").removeClass("answer-correct answer-incorrect");

    if (selected.length === 0) {
      msgBox.text("Выберите ответ!").addClass("answer-incorrect");
      return;
    }

    var isCorrect = selected.is("[data-correct]");
    var explanation = selected.attr("data-explanation") || "";
    var correctAnswer = question.find("input[data-correct]").parent().text().trim();
    var userAnswer = selected.parent().text().trim();
    var questionText = question.find("p").text();

    if (isCorrect) {
      msgBox.text("Правильно!").addClass("answer-correct");
      playSound(correctSound);
      correctAnswers++;
    } else {
      msgBox.text("Неправильно! Правильный ответ: " + correctAnswer).addClass("answer-incorrect");
      playSound(wrongSound);
    }

    answersSummary.push({
      question: questionText,
      userAnswer: userAnswer,
      correctAnswer: correctAnswer,
      explanation: explanation
    });

    $(".quiz-score").text(correctAnswers + "/" + totalQuestions);
    $(this).prop("disabled", true);
    $(".next-question").prop("disabled", false);
  });

  $(".next-question").click(function() {
    if ($(this).prop("disabled")) return;

    currentQuestion++;

    if (currentQuestion < totalQuestions) {
      $(".quiz-question").removeClass("active").hide().eq(currentQuestion).addClass("active").show();
      $(".next-question").prop("disabled", true);
      $(".check-answer").prop("disabled", false);
    } else {
      showSummary();
    }
  });

  function showSummary() {
    $(".quiz-question").removeClass("active").hide();
    $(".summary").show();
    var resultsList = $(".results-list").empty();

    answersSummary.forEach(function(ans) {
      var questionBlock = $("<div>").append("<p class='summary-question'>" + ans.question + "</p>");

      $(".quiz-question").each(function() {
        var questionText = $(this).find("p").text();
        if (questionText === ans.question) {
          $(this).find("input[type='radio']").each(function() {
            var answerText = $(this).parent().text().trim();
            var isCorrect = $(this).is("[data-correct]");
            var explanation = $(this).attr("data-explanation") || "";
            var isChecked = $(this).is(":checked");

            var icon = isCorrect ? esattoIcon : sbagliatoIcon;
            var explanationText = explanation ? " [" + explanation + "]" : "";
            var userAnswer = isChecked ? " <strong>(Ваш ответ)</strong>" : "";
            questionBlock.append("<p>" + icon + " " + answerText + userAnswer + explanationText + "</p>");
          });
        }
      });

      resultsList.append(questionBlock);
    });
  }

  $(".restart-quiz").click(function() {
    $(".summary").hide();
    $(".quiz-question").removeClass("active").hide().eq(0).addClass("active").show();
    $(".quiz-score").text("0/" + totalQuestions);
    correctAnswers = 0;
    currentQuestion = 0;
    $("input[type='radio']").prop("checked", false);
    $(".quiz-message").text("").removeClass("answer-correct answer-incorrect");
    answersSummary = [];
    $(".next-question").prop("disabled", true);
    $(".check-answer").prop("disabled", false);
  });

  $(".quiz-question").on("change", 'input[type="radio"]', function() {
    playSound(clickSound);
  });

  const p6 = "th";

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

  const p7 = "ub";

  $.getJSON('/assets/frasario.json').done(function(data) {
    frasario = data;
    console.log(frasario);

    function loadRandomData() {
      var remainingItems = frasario.filter(function(item) {
        return !playedItems.includes(item);
      });

      if (remainingItems.length === 0) {
        playedItems = [];
        remainingItems = frasario.slice();
      }

      var randomIndex = Math.floor(Math.random() * remainingItems.length);
      var randomItem = remainingItems[randomIndex];

      playedItems.push(randomItem);

      var viewTraduzioneMarkup = randomItem.value ? '<span>' + viewTraduzione + '</span>' : '';

      $("#frasarioIcons").html(viewTraduzioneMarkup +
        '<span>' + reloadBtnRand + '</span>' +
        '<span>' + playBtnRand + '</span>' +
        '<span>' + toc + '</span>' +
        '<span>' + close + '</span>');

      tableOfContents();

      var fraseWrapContent = '<div id="frase">' + randomItem.label + '</div>';
      if (randomItem.value) {
        fraseWrapContent += '<div id="traduzione">' + randomItem.value + '</div>';
      }
      $("#fraseWrap").html(fraseWrapContent);

      handlePlayButton(randomItem);
      handleReloadButton();
      handleViewButton();
      handleCloseButton();
      displayImages();
      day();
    }

    var tocIconClicked = false;

    function tableOfContents() {
      var tocElement = $("#tocIcon");

      tocElement.off("click").on("click", function() {
        tocIconClicked = true;
        stopCurrentAudio();
        disableButtons(true);
        $("#fraseWrap").hide();
        renderTOC();
        $("#tocWrap").show();
      });

      function renderTOC() {
        if (!$("#tocWrap").length) {
          $("#fraseWrap").after('<div id="tocWrap"></div>');
        }

        var titles = frasario.filter(function(item) {
          return item.title;
        });

        if (titles.length === 0) {
          $("#tocWrap").html('<p>Нет доступных заголовков.</p>');
          return;
        }

        var tocContent = '<ul>';
        titles.forEach(function(item, index) {
          tocContent += '<li data-index="' + index + '">' + item.title + '</li>';
        });
        tocContent += '</ul>';

        $("#tocWrap").html(tocContent);

        // Обработка кликов на элементы списка в оглавлении
        $("#tocWrap li").off("click").on("click", function() {
          var index = $(this).data("index");
          var selectedItem = titles[index]; // Находим нужный элемент по его индексу

          loadSelectedItem(selectedItem);

          $("#tocWrap").hide(); // Скрываем оглавление
          $("#fraseWrap").show(); // Показываем основной контент
          disableButtons(false); // Снимаем блокировку с кнопок
        });
      }
    }

    // Функция блокировки кнопок
    function disableButtons(isBlocked) {
      if (isBlocked) {
        $("#frasarioIcons .view-icon").parent().addClass("disabled");
        $("#frasarioIcons .random-icon").parent().addClass("disabled");
        $("#frasarioIcons #playButtonRandom").parent().addClass("disabled");
        $("#frasarioIcons #tocIcon").parent().addClass("disabled");
      } else {
        $("#frasarioIcons span").removeClass("disabled");
      }
    }

    function loadSelectedItem(item) {
      if (!item) return;

      playedItems.push(item);

      var viewTraduzioneMarkup = item.value ? '<span>' + viewTraduzione + '</span>' : '';

      $("#frasarioIcons").html(viewTraduzioneMarkup +
        '<span>' + reloadBtnRand + '</span>' +
        '<span>' + playBtnRand + '</span>' +
        '<span>' + toc + '</span>' +
        '<span>' + close + '</span>'
      );

      var fraseWrapContent = '<div id="frase">' + item.label + '</div>';
      if (item.value) {
        fraseWrapContent += '<div id="traduzione">' + item.value + '</div>';
      }
      $("#fraseWrap").html(fraseWrapContent);

      handlePlayButton(item);
      handleReloadButton();
      handleViewButton();
      handleCloseButton();
      displayImages();
      tableOfContents();
      day();
    }

    function handlePlayButton(item) {
      var playButton = $("#playButtonRandom");
      var playIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 14.959V9.04C2 8.466 2.448 8 3 8h3.586a.98.98 0 0 0 .707-.305l3-3.388c.63-.656 1.707-.191 1.707.736v13.914c0 .934-1.09 1.395-1.716.726l-2.99-3.369A.98.98 0 0 0 6.578 16H3c-.552 0-1-.466-1-1.041M16 8.5c1.333 1.778 1.333 5.222 0 7M19 5c3.988 3.808 4.012 10.217 0 14"/></svg>';
      var stopIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12"/><path fill="currentColor" d="M8 8h8v8H8z"/></svg>';

      if (item.audio) {
        var audio = new Audio(item.audio);

        setPlayButtonIcon(false);

        function setPlayButtonIcon(isPlaying) {
          var iconPath = isPlaying ? stopIcon : playIcon;
          playButton.html(iconPath);
          item.isPlaying = isPlaying;
        }

        playButton.on("click", function() {
          if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            if (currentPlayItem) currentPlayItem.isPlaying = false;
          }

          if (!item.isPlaying || audio.paused) {
            audio.currentTime = 0;
            audio.play();
            setPlayButtonIcon(true);
            currentAudio = audio;
            currentPlayItem = item;
          } else {
            audio.pause();
            setPlayButtonIcon(false);
          }
        });

        $(audio).on("ended", function() {
          setPlayButtonIcon(false);
          currentAudio = null;
          currentPlayItem = null;
        });

        playButton.show();
      } else {
        playButton.hide();
      }
    }

    function stopCurrentAudio() {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentPlayItem) currentPlayItem.isPlaying = false;
        currentAudio = null;
        currentPlayItem = null;

        $("#playButtonRandom").html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 14.959V9.04C2 8.466 2.448 8 3 8h3.586a.98.98 0 0 0 .707-.305l3-3.388c.63-.656 1.707-.191 1.707.736v13.914c0 .934-1.09 1.395-1.716.726l-2.99-3.369A.98.98 0 0 0 6.578 16H3c-.552 0-1-.466-1-1.041M16 8.5c1.333 1.778 1.333 5.222 0 7M19 5c3.988 3.808 4.012 10.217 0 14"/></svg>');
      }
    }

    function handleReloadButton() {
      $(".random-icon").click(function() {
        stopCurrentAudio();
        loadRandomData();

        var timeout;
        var icon = $(this);

        if (!icon.hasClass("running")) {
          icon.removeClass("running paused")
            .hide(0)
            .show(0)
            .addClass("running");

          clearTimeout(timeout);
          timeout = setTimeout(function() {
            icon.addClass("paused").removeClass("running");
          }, 1000);
        }
      });
    }

    function displayImages() {
      var folderPath = "/assets/frasario/";

      $('#fraseWrap').html(function(index, html) {
        return html.replace(/#(\w+)/g, function(match, p1) {
          return '<img src="' + folderPath + p1 + '.png">';
        });
      });

      $('#fraseWrap img').each(function() {
        var src = $(this).attr('src');
        if (!src.startsWith(folderPath)) {
          src = folderPath + src;
          $(this).attr('src', src);
        }
      });
    }

    $('#frasario-icon').click(function() {
      showAlert();
      loadRandomData();
      // $("#tocWrap").hide(); // Скрываем оглавление
      // $("#fraseWrap").show(); // Показываем основной контент
      // Если кнопка показа оглавления была нажата
      if (tocIconClicked) {
        $("#tocWrap").hide(); // Скрываем оглавление
        $("#fraseWrap").show(); // Показываем основной контент
      }
    });

    function showAlert() {
      $(".frasarioModalWrapper").addClass('active');
    }

    function handleCloseButton() {
      $(".close-icon").click(function() {
        $(".frasarioModalWrapper").removeClass('active');
        stopCurrentAudio();
      });
    }

    function handleViewButton() {
      var toggleViewTraduzione =
        getLocalStorage("toggleViewTraduzione") === "true";

      toggleViewTraduzione
        ?
        enableViewTraduzione() :
        disableViewTraduzione();

      $(".view-icon")
        .off("click")
        .on("click", function() {
          toggleViewTraduzione = !toggleViewTraduzione;
          toggleViewTraduzione
            ?
            enableViewTraduzione() :
            disableViewTraduzione();

          setLocalStorage(
            "toggleViewTraduzione",
            toggleViewTraduzione
          );
        });
    }

    function enableViewTraduzione() {
      $("#traduzione").css("display", "block");
      $(".down").hide();
      $(".up").show();
    }

    function disableViewTraduzione() {
      $("#traduzione").css("display", "none");
      $(".up").hide();
      $(".down").show();
    }

    function getLocalStorage(key) {
      return localStorage.getItem(key);
    }

    function setLocalStorage(key, value) {
      localStorage.setItem(key, value);
    }

  }).fail(function() {
    console.log("Не удалось загрузить данные из frasario.json.");
  });

  var pappagallo = new Audio("/audio/pappagallo.mp3");
  const p8 = ".io";
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

  function gfd() {
    return p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8;
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
        playSound(correctSound);
        $("#search-mese").blur();

        if (!isResult2Correct) {
          $("#search-giorno").focus(); // Передаем фокус на поле #search-giorno, только если результат для поля #search-mese неверен
        }
      } else {
        $("#risultato-mese").html(sbagliatoIcon + rispostaGiustaMsg + '<span class="evid">' + m[mese] + '</span>');
        playSound(wrongSound);
        $("#search-mese").val("").focus();
      }
      console.log("Нажата кнопка #btn-mese");
    } else if (buttonId === 'btn-giorno') {
      var search = $("#search-giorno").val().replace("ì", "i").toLowerCase().trim();

      console.log('Значение поля #search-giorno', search);

      if (!$.trim($("#search-giorno").val())) {
        $("#risultato-giorno").html(sbagliatoIcon + scriviQc);
        $("#search-giorno").focus();
      } else if (search == g[giornoSettimana].replace("ì", "i")) {
        isResult2Correct = true;
        $("#risultato-giorno").html(esattoIcon + esattoMsg);
        playSound(correctSound);
        $("#search-giorno").blur();
        if (!isResult1Correct) {
          $("#search-mese").focus(); // Передаем фокус на поле #search-mese, только если результат для поля #search-giorno неверен
        }
      } else {
        $("#risultato-giorno").html(sbagliatoIcon + rispostaGiustaMsg + '<span class="evid">' + g[giornoSettimana] + '</span>');
        playSound(wrongSound);
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

  function anlocude() {
    const currdn = $(location).attr('href').split('/')[2];
    if (currdn !== gfd()) {
      document.body.innerHTML = "";
    }
  }

  var currentYear = new Date().getFullYear();
  $('#currentYear').html("&copy; " + currentYear + " ");

  $('figure.highlight, .highlighter-rouge[class^="language-"]:not(code)').each(function() {
    if (!$(this).find('.copy-btn').length) {
      $(this).css('position', 'relative').prepend(copy);
    }
  });

  $('.copy-btn').click(function() {
    let codeHtml;

    const figureBlock = $(this).closest('figure.highlight'); // Для figure
    const preBlock = $(this).siblings('.highlight').find('code'); // Для .highlight

    if (figureBlock.length) {
      const codeElement = figureBlock.find('code');
      if (codeElement.length) {
        codeHtml = codeElement.clone(); // Клонируем code
        codeHtml.find('.lineno').remove(); // Убираем номера строк
      }
    } else if (preBlock.length) {
      // Для CSS-блоков и других
      codeHtml = preBlock.clone();
    }

    // если код найден
    if (codeHtml && codeHtml.length) {
      // Убираем все теги и получаем только текст
      const codeTextWithoutHTML = codeHtml.html().replace(/<[^>]*>/g, '');

      // Копируем в буфер обмена
      const tempInput = $('<textarea>');
      $('body').append(tempInput);
      tempInput.val(codeTextWithoutHTML).select();
      document.execCommand('copy');
      tempInput.remove();

      // Изменяем значок
      $(this).html(copied);
      setTimeout(() => {
        $(this).html(copy);
      }, 2000);
    } else {
      console.error('Не удалось найти код для копирования.');
    }
  });

  const visibleCount = 3;
  const listItems = $('#showMoreList li');
  const showMoreLink = $('#showMoreLink');

  listItems.slice(visibleCount).hide();

  function updateShowMoreText() {
    const hiddenCount = listItems.filter(':hidden').length;
    showMoreLink.text('Показать ещё (' + hiddenCount + ')');
  }

  updateShowMoreText();
  anlocude();

  showMoreLink.click(function(e) {
    e.preventDefault();
    listItems.slice(visibleCount).slideDown();
    updateShowMoreText();

    if (listItems.filter(':hidden').length === 0) {
      showMoreLink.hide();
    }
  });

  var mWidth = 798;
  var headerHeight = $(".navigation").height(); // высота
  var topPrev = $(window).scrollTop();

  $(window).on("scroll", function() {
    if ($(window).width() > mWidth) {
      var topCurrent = $(window).scrollTop();

      if (topCurrent < topPrev) {
        // вверх
        if (topCurrent > 0 && $(".navigation").hasClass("fixed-menu")) {
          $(".navigation").addClass("visible-scroll-up");
        } else {
          $(".navigation").removeClass("visible-scroll-up fixed-menu");
        }
      } else {
        // вниз
        $(".navigation").removeClass("visible-scroll-up");
        if (
          topCurrent > headerHeight &&
          !$(".navigation").hasClass("fixed-menu")
        ) {
          $(".navigation").addClass("fixed-menu");
        }
      }

      topPrev = topCurrent;
    }
  });

  $(window).on("resize", function() {
    // если ширина окна <= 798
    if ($(window).width() <= mWidth) {
      // Удаляем все классы на мобильных устройствах
      $(".navigation").removeClass("visible-scroll-up fixed-menu");
    } else {
      // иначе пересчитываем высоту и текущую позицию скролла для ПК
      headerHeight = $(".navigation").height();
      topPrev = $(window).scrollTop();
    }
  });

  let hasAnimated = false;
  const animatedImage = $('.animated-image');

  if (animatedImage.length) {
    function isElementFullyInView() {
      const imageTop = animatedImage.offset().top;
      const imageBottom = imageTop + animatedImage.outerHeight();

      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();

      return imageTop >= viewportTop && imageBottom <= viewportBottom;
    }

    $(window).on('scroll', function() {
      if (isElementFullyInView() && !hasAnimated) {
        hasAnimated = true;
        animatedImage.css('animation', 'scaleAnimation 1s ease-out');
        animatedImage.on('animationend', function() {
          $(this).css('animation', 'none');
        });
      } else if (!isElementFullyInView()) {
        hasAnimated = false;
      }
    });
  }
  if (document.fonts) {
    document.fonts.load('1em PeterIvanowitsch').then(function(fonts) {
      if (!fonts.length) {
        $('main').addClass('fallback-font');
      }
    }).catch(function() {
      $('main').addClass('fallback-font');
    });
  } else {
    $('main').addClass('fallback-font');
  }
});
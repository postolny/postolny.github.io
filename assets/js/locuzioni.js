$(function () {
  var locuzioniAry = [
    "avere l'udito fino – иметь тонкий слух",
    "ingegno fino – проницательный ум",
    "lavoro di fino – тонкая / деликатная работа",
    "un ingegno / una mente perspicace – проницательный ум",
    '"I cattivi sono tanti, mentre i buoni si trovano a fatica" (I. Gončarov). – "Злых людей везде много, а добрых не скоро найдёшь" (И. Гончаров).',
    "si crede a fatica – верится с трудом",
    "Lasciami porre una domanda. – Позволь кое-что спросить.",
    "far finta di essere stupito – разыгрывать удивление",
    "Perché fai finta di non capire? – Почему ты делаешь вид, что не понимаешь?",
    "Ma ci sei o ci fai? – Ты дурак или прикидываешься?",
    "Ne sono convinto più che mai. – Я убеждён (в этом) больше, чем когда-либо.",
    '"Era depresso più che mai" (A. Čechov). – "На душе у него было гнусно, как никогда" (А. Чехов).',
    "ridere a crepapelle (morire dal ridere; sbellicarsi dalle risa) – умирать со смеху",
  ];
  var rand = Math.floor(Math.random() * locuzioniAry.length);
  $("#locuzioni").text(locuzioniAry[rand]);
});

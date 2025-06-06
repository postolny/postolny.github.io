---
layout: post
title: "La concordanza dei tempi con il congiuntivo"
description: "Strumento per scegliere correttamente il congiuntivo nelle subordinate secondo il verbo principale. Инструмент для подбора правильной формы сослагательного наклонения в придаточном предложении в зависимости от главного."
author: "И. Постольный"
categories:
tags: [Тесты, Грамматика, Vocabolario]
sticky: true
hidden: true
---

{% include concordanza-congiuntivo.html %}

### Особенности согласования времён и работы скрипта

В любой программе всегда найдётся какой-нибудь изъян и мой скрипт — не исключение: он не обрабатывает presente storico — здесь нужно понимать, что presente storico, которое заменяет собой passato remoto и passato prossimo, подчиняется тем же правилам при согласовании времён, что и presente indicativo, кроме того, скрипт не знаком с императивом в главном предложении, после которого может быть придаточное в _congiuntivo presente_ (если действие придаточного относится к настоящему или будущему времени), _congiuntivo passato_ (если действие придаточного было завершено в прошлом на момент действия главного) или congiuntivo imperfetto (если нужно выразить продолженность действия в прошлом).

_«Non credere, però, che io sia troppo debole» (N. Černyševskij) — «Не подумай, впрочем, что я чрезмерно слаб» (Н. Чернышевский)_

_«Sono venuta per conto mio. Non pensare, per favore, che sia stata Kira a mandarmi da te» (V. Kaverin) — «Я пришла по собственной инициативе. Так что ты не думай, пожалуйста, что Кира меня прислала» (В. Каверин)_

_Non credere che io non lo sapessi. — Не думай, что я этого не знал._

Вот наглядные таблицы согласования в Congiuntivo, которые я позаимствовал на сайте Zanichelli и согласно которым выстроил логику работы скрипта ([1](https://aulalingue.scuola.zanichelli.it/benvenuti/2012/10/18/la-concordanza-dei-tempi-con-il-congiuntivo-1/){:target="_blank" rel="noopener noreferrer"}, [2](https://aulalingue.scuola.zanichelli.it/benvenuti/2012/10/31/la-concordanza-dei-tempi-con-il-congiuntivo-2/){:target="_blank" rel="noopener noreferrer"}):

### Frase principale al presente

|Frase principale|Frase subordinata|Rapporto temporale|
|----------------|-----------------|------------------|
|Credo che|…ieri tu sia stato a scuola  (congiuntivo passato)<br>…da piccolo non godesse di buona salute  (congiuntivo imperfetto se l'azione ha valore durativo)|anteriorità|
|Credo che|…oggi tu sia a scuola  (congiuntivo presente)|contemporaneità|
|Credo che|…domani tu sarai a scuola  (indicativo futuro semplice)|posteriorità|

### Frase principale al passato

|Frase principale|Frase subordinata|Rapporto temporale|
|----------------|-----------------|------------------|
|Ho creduto che (indicativo passato prossimo)<br>Credevo che (indicativo imperfetto)|…il giorno prima tu fossi stato a scuola  (congiuntivo trapassato)|anteriorità|
|Ho creduto che<br>Credevo che|…quel giorno tu fossi a scuola  (congiuntivo imperfetto)|contemporaneità|
|Ho creduto che<br>Credevo che|…il giorno dopo tu saresti stato a scuola  (condizionale passato)|posteriorità|

### Frase principale al condizionale

|Frase principale|Frase subordinata|Rapporto temporale|
|----------------|-----------------|------------------|
|Preferirei che<br>Avrei preferito che|…tu fossi stato sincero (congiuntivo trapassato)|anteriorità|
|Preferirei che<br>Avrei preferito che|…tu fossi sincero (congiuntivo imperfetto)|contemporaneità|
|Preferirei che<br>Avrei preferito che|…tu fossi sincero (congiuntivo imperfetto)|posteriorità|

### Presente

Если действие придаточного предложения выполняется после действия главного, то в нём можно использовать как congiuntivo presente, так и futuro semplice (у Zanichelli — только futuro semplice):

_Spero che venga con me al concerto._<br>
_Spero che verrai con me al concerto._

То есть подобно тому как в изъявительном наклонении для выражения будущего можно использовать futuro semplice или presente в значении будущего:

_So che vieni con me al concerto._<br>
_So che verrai con me al concerto._

Penso che Natalia imparerà presto l'italiano. (Действие произойдёт в будущем)<br>
Penso che Natalia impari presto l'italiano. (Мнение и неопределённость)<br>
Spero che tutto vada bene e che questa terribile guerra finisca.

### Condizionale

Как видно из таблицы выше, если главное предложение стоит в condizionale passato, придаточное ставится в congiuntivo imperfetto при одновременном действии главного и придаточного и при действии придаточного после действия главного и — в congiuntivo trapassato, если действие придаточного происходит до действия главного. А вот какое согласование предлагается на сайте [learnamo.com](https://learnamo.com/consecutio-temporum-indicativo-congiuntivo-condizionale/){:target="_blank" rel="noopener noreferrer"}:

|Principale|Subordinata|Legame|
|--------------|---------------|----------|
|Avrei voluto che …|… tu _fossi stato_ più buono (trapassato congiuntivo)|Anteriorità<br>Contemporaneità<br>Posteriorità|

Как следует из таблицы, после condizionale passato в любом случае используется trapassato congiuntivo и понять является ли действие придаточного по отношению к главному предстоящим, одновременным или последующим возможно согласно контексту.
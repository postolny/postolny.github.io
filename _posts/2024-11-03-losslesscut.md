---
layout: post
title: "Видеоредактор LosslessCut"
description: "В статье я расскажу как обрезать видео без потери качества по ключевым кадрам или по произвольным точкам, а также как объединить видео в видеоредакторе LosslessCut."
author: "И. Постольный"
comments: false
categories: 
tags: [YouTube, Музыка, Software]
---

Программа LosslessCut, являющаяся графическим интерфейсом для FFmpeg – это не универсальный видеоредактор, однако с её помощью можно разделить видеофайл на несколько частей, объединить нескольких видеофайлов в один, если они имеют одинаковые параметры (разрешение, кодек и частота кадров), также программа позволяет выбрать конкретные аудио- и видеодорожки для их последующего сохранения или удаления, делать скриншоты с определённых кадров, имеет возможность добавлять и удалять метаданные (например, субтитры или геолокационные данные).

### Как разрезать видео

Чтобы видео не потеряло качество, его следует разрезать по ключевым кадрам. Ключевой кадр (или I-кадр) – это кадр, содержащий всю информацию о пикселях сцены, подобно фотографии. Существуют также промежуточные кадры (неполные кадры). Промежуточные кадры, такие как P-кадры и B-кадры, хранят не все данные сцены, а только изменения по отношению к предыдущему или следующему кадру, а следовательно, они нуждаются в информации из других кадров для полного восстановления изображения. Поскольку ключевые кадры являются полноценными изображениями, они не имеют артефактов за исключением тех случаев, когда запись была произведена с помехами или, например, произошла ошибка в кодеке. Разрезание видео по промежуточным кадрам может привести к образованию артефактов, поскольку они зависят от данных соседних кадров и могут искажаться при отсутствии точных данных или при ошибках в декодировании.

Для чего вообще нужно разрезать видео? Я, например, записываю свою игру на фортепиано и мне бы не хотелось, чтобы на видео присутствовали моменты, когда я сажусь за инструмент, встаю из-за него, выключаю камеру, а поэтому начало и конец видео я обычно обрезаю.

Для записи я использую камеру смартфона, качество записи которой оставляет желать лучшего и обрезка по ключевым кадрам, к сожалению, заметно не улучшит его. Однако я всё равно делаю обрезку именно таким способом.
{: .cornice}

Для того, чтобы нужный момент совпал с ключевым кадром, необходимо выждать для этого определённое время. Поэтому я не тороплюсь начинать играть и не тороплюсь вставать из-за инструмента.

![Как разрезать видео в видеоредакторе LosslessCut]({{ site.baseurl }}/img/losslesscut/losslesscut-cut.png){: .lightbox}

Итак, запустите программу. Для того, чтобы открыть в ней видеофайл, вы можете просто перетащить его в окно программы или вы можете это сделать через главное меню: "Файл" → "Открыть". Также вы можете воспользоваться сочетанием клавиш <kbd>Ctrl</kbd> + <kbd>O</kbd>. По умолчанию в программе будет активен упрощённый режим работы. Для того, чтобы перейти в Расширенный режим, нажмите на значок в виде человечка слева (1). Чтобы проиграть видео, нажмите на кнопку 2. Нажимайте на кнопки 3 и 4 в виде ключа, чтобы перемещаться по ключевым кадрам. Отметьте начало и конец обрезки, нажав соответственно на кнопки 5 и 6 в виде руки. Вы можете проиграть видео, начиная с момента обрезки. Для этого нажмите на кнопку 7, чтобы перейти к началу сегмента, и затем – на кнопку 2, чтобы проиграть видео. Также вы можете перейти к концу сегмента, нажав на кнопку 8. Кнопки 9 и 10 служат для перехода соответственно к началу и концу видео. Если обрезка точно по ключевому кадру вас не устраивает, вы можете обрезать видео в произвольной точке. Для этого вы можете кликнуть в нужном месте на шкале времени или, если вам известное точное время мест обрезки, вы можете ввести его в соответствующие поля. Также для перемещения по шкале времени вы можете использовать клавиши со стрелками <kbd>◄</kbd> и <kbd>►</kbd>. Также вы можете перемещаться по всем кадрам, нажимая на кнопки 11 и 12. Выбрав места обрезки, не забудьте нажать на кнопки 5 и 6. Осталось нажать на кнопку "Экспорт" (13). Откроется окно параметров экспорта, в котором я оставляю всё как есть. После чего нужно снова нажать на кнопку "Экспорт". После выполнения экспорта не закрывайте программу, а сначала проиграйте полученное видео, чтобы проверить корректность обрезки.

### Как объединить видео

Откройте в программе ваши видеофайлы описанным выше способом. Список открытых файлов вы увидите на левой панели. При желании вы можете просмотреть видео, дважды кликнув на имя нужного вам файла в этом списке. Если вам необходимо изменить порядок видео, перетащите файлы в этом списке в нужную позицию или воспользуйтесь кнопкой 1. Чтобы осуществить объединение файлов, выберите в главном меню "Инструменты" → "Слияние/соединение файлов" или нажмите на кнопку 2. В открывшемся окне вы можете изменить имя выходного файла, а также включить функцию проверки совместимости. После чего нажмите на кнопку "Слияние".

![Как объединить видео в видеоредакторе LosslessCut]({{ site.baseurl }}/img/losslesscut/losslesscut-merge.png){: .lightbox}

LosslessCut в Microsoft Store является платной, поскольку автор программы таким образом желает покрыть затраты на публикацию, поддержку, а также обновления через платформу Microsoft, но вы всегда можете загрузить программу бесплатно на [странице разработчика](https://github.com/mifi/lossless-cut?tab=readme-ov-file#download){:target="_blank" rel="noopener noreferrer"} в GitHub.
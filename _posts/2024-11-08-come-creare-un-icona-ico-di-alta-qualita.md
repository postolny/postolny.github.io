---
layout: post
title: "Как создать качественную иконку ICO"
description: "Чтобы иконка везде хорошо отображалась и при уменьшении её размера (например, в программе Quick Access Popup при задании размера значков по умолчанию 16x16 px), иконка должна быть мультиформатной, то есть она должна включать в себя несколько версий с разными разрешениями."
author: "И. Постольный"
comments: false
compress_html: false
categories: 
tags: [Software, Web]
---

Чтобы иконка везде хорошо отображалась и при изменении её размера (например, в программе [Quick Access Popup]({{ site.baseurl }}/2024-11-12/сome-configurare-quick-access-popup) при задании размера значков по умолчанию 16x16 px), иконка должна быть мультиформатной, то есть она должна включать в себя несколько версий с разными разрешениями. Я намереваюсь создать иконку, содержащую в себе версии с разрешениями 16x16 px, 32x32 px, 48x48 px, 64x64 px, 96x96 px, но иконка может содержать в себе больше версий, если нужен универсальный вариант. Приведу варианты возможного использования каждого разрешения:

- 16x16 px – маленькие иконки (во вкладках браузера, в панели задач)
- 32x32 px – стандартные иконки (в различных меню, в кнопках, в панели задач)
- 48x48 px – крупные иконки (в иконках рабочего стол)
- 64x64 px – не всегда используется, но включить желательно
- 128x128 px – иконки для высокого разрешения (в меню, диалоговых окнах)
- 256x256 px – для экранов HD, Retina[^1], и магазинов приложений
- 512x512 px – для экрана с высокой плотностью пикселей (например, в магазинах приложений (к примеру, в Google Play или App Store))

Таким образом разные программы, операционные системы и браузеры могут автоматически выбирать нужный вариант иконки в зависимости от размера и разрешения экрана или от представления иконки. Например, если иконка должна находиться на панели задач, ОС сама выберет нужное разрешение.

Идём дальше. Для эксперимента я возьму иконку с сайта онлайн-переводчика DeepL, которая имет следующий адрес:

[https://static.deepl.com/img/favicon/favicon_96.png](https://static.deepl.com/img/favicon/favicon_96.png){:target="_blank" rel="noopener noreferrer"}{:.longLinks}

Эту иконку я буду конвертировать в мультиформатный ICO с помощью программы ImageMagick.

Кое-кто станет ругаться, мол: "эта программа не имеет даже интерфейса и работает через командную строку!". Но ведь так интересней. А если вам не интересно, то существует множество программ, имеющих графический интерфейс, с помощью которых вы можете сделать то же самое (например, [Ultimate Icon Converter](https://www.door2windows.com/ultimate-icon-converter/){:target="_blank" rel="noopener noreferrer"}). Цель же моей статьи – объяснить почему иконка ICO должна быть мультиформатной, а уж средства вы вольны выбирать сами.
{: .cornice}

Итак, для начала скачайте программу ImageMagick с [сайта программы](https://imagemagick.org/script/download.php#windows){:target="_blank" rel="noopener noreferrer"}. У меня Windows на 64 бита и я скачивал по первой ссылке (где в описании указано "Win64 dynamic at 16 bits-per-pixel component with High-dynamic-range imaging enabled"). После установки нужно обязательно перезагрузить компьютер для того, чтобы путь в переменной среды, куда его прописывает установщик программы, начал работать.

Дальше, по традиции, проверим работает ли программа. Открываем командную строку. Способов её открыть существует много, но проще всего это сделать так: откройте проводник с помощью сочетания клавиш <kbd><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16"><path fill="currentColor" d="M6.555 1.375L0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0zm7.278-5.4l.026 6.378L16 16V8.395zM16 0L7.33 1.244v6.414H16z"/></svg></kbd> + <kbd>E</kbd> и в его окне в адресной строке введите `cmd`. В открывшейся командной строке введите команду `magick -version`. После чего нажмите клавишу <kbd>Enter</kbd> или кликните на стрелку справа от адресной строки. Если вы увидите сведения о программе, то программа работает и вы можете приступить к конвертированию.

Скачайте иконку по вышеуказанному адресу на рабочий стол. В командной строке с помощью сочетания клавиш <kbd>Ctrl</kbd> + <kbd>V</kbd> вставьте следующие команды (не забудьте предварительно заменить имя пользователя на своё):

{% highlight bash linenos %}
magick "C:\Users\Igor\Desktop\favicon_96.png" -resize 16x16 "C:\Users\Igor\Desktop\favicon_16.png"
magick "C:\Users\Igor\Desktop\favicon_96.png" -resize 32x32 "C:\Users\Igor\Desktop\favicon_32.png"
magick "C:\Users\Igor\Desktop\favicon_96.png" -resize 48x48 "C:\Users\Igor\Desktop\favicon_48.png"
magick "C:\Users\Igor\Desktop\favicon_96.png" -resize 64x64 "C:\Users\Igor\Desktop\favicon_64.png"
magick "C:\Users\Igor\Desktop\favicon_96.png" -resize 96x96 "C:\Users\Igor\Desktop\favicon_96.png"

magick "C:\Users\Igor\Desktop\favicon_16.png" "C:\Users\Igor\Desktop\favicon_32.png" "C:\Users\Igor\Desktop\favicon_48.png" "C:\Users\Igor\Desktop\favicon_64.png" "C:\Users\Igor\Desktop\favicon_96.png" "C:\Users\Igor\Desktop\favicon.ico"
{% endhighlight %}

Нажмите <kbd>Enter</kbd>, чтобы выполнилась команда создания favicon.ico. Что здесь происходит? Сначала иконка favicon_96.png, имеющая размер 96x96 px, конвертируется в несколько файлов PNG с разными размерами (16x16, 32x32, 48x48, 64x64 и 96x96); затем все эти файлы объединяются в один ICO-файл, содержащий несколько размеров.

Можно не скачивать иконку, а позволить программе загрузить её прямо с сайта. В этом случае команды будут такими (и снова не забудьте предварительно заменить имя пользователя на своё):

{% highlight bash linenos %}
magick "https://static.deepl.com/img/favicon/favicon_96.png" -resize 16x16 "C:\Users\Igor\Desktop\favicon_16.png"
magick "https://static.deepl.com/img/favicon/favicon_96.png" -resize 32x32 "C:\Users\Igor\Desktop\favicon_32.png"
magick "https://static.deepl.com/img/favicon/favicon_96.png" -resize 48x48 "C:\Users\Igor\Desktop\favicon_48.png"
magick "https://static.deepl.com/img/favicon/favicon_96.png" -resize 64x64 "C:\Users\Igor\Desktop\favicon_64.png"
magick "https://static.deepl.com/img/favicon/favicon_96.png" -resize 96x96 "https://static.deepl.com/img/favicon/favicon_96.png"

magick "C:\Users\Igor\Desktop\favicon_16.png" "C:\Users\Igor\Desktop\favicon_32.png" "C:\Users\Igor\Desktop\favicon_48.png" "C:\Users\Igor\Desktop\favicon_64.png" "https://static.deepl.com/img/favicon/favicon_96.png" "C:\Users\Igor\Desktop\favicon.ico"
{% endhighlight %}

Вот таким, не самым простым, но вместе с тем и не сложным способом, мы создали мультиформатную иконку ICO. Что ещё можно добавить? Если такая иконка используется в качестве иконки favicon для сайта, то она может заключать в себе версии следующих разрешений: 16x16 px, 32x32 px, 48x48 px, 64x64 px. Но также в неё могут быть добавлены версии с разрешением 128x128 px и 256x256 px. Для того, чтобы посмотреть какие разрешения включены в иконку, а также результат проделанной вами работы, вы можете воспользоваться специальной программой, например, [Greenfish Icon Editor Pro](http://greenfishsoftware.org/){:target="_blank" rel="noopener noreferrer"}. На этом сайте не используется иконка в формате `.ico` – вместо неё я использовал набор иконок в формате `.png` c атрибутами `rel="icon"` и `rel="apple-touch-icon"` для разных устройств и атрибутом `sizes`, указывающим различные размеры иконки.

[^1]: Retina-дисплеи – термин, введённый Apple для обозначения экранов с высоким разрешением и плотностью пикселей. Такие дисплеи имеют не только устройства Apple, но и устройства других производителей, например, Google, Samsung.
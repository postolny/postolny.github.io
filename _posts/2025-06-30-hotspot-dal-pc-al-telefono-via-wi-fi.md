---
layout: post
title: "Как раздать интернет с ПК на телефон по Wi-Fi через Mobile Hotspot"
description: "В этой статье я расскажу как на примере двух моих старых компьютеров, которые у меня подключаются к кабельному (проводному) интеренету, реализовать раздачу интернета на телефон."
author: "И. Постольный"
compress_html: false
categories: 
tags: [Windows, Mobile, CMD]
---

В этой статье я расскажу как на примере двух моих старых компьютеров, которые у меня подключаются к кабельному (проводному) интеренету, реализовать раздачу интернета на телефон.

### ASUS X550L (Windows 10 Домашняя)

Сначала нужно открыть «Параметры» → «Сеть и Интернет» → «Wi-Fi» и перевести переключатель «Беспроводная сеть» в положение «Вкл». Затем в окне «Сеть и Интернет» перейдите в раздел «Мобильный хот-спот» и также включите «Разрешить использования моего интернет-соединения на других устройствах». Там же вы увидите Имя сети и Сетевой пароль — запишите их. Вы можете изменить эти данные, если хотите.

По желанию вы можете автоматизировать все процессы.

Чтобы открыть раздел «Wi-Fi» в «Параметрах», вы можете воспользоваться командной строкой или создать bat-файл.

С помощью командной строки:
	
{% highlight bash linenos %}
start ms-settings:network-wifi
{% endhighlight %}

С помощью bat-файла:

{% highlight batch linenos %}
@echo off
start "" ms-settings:network-wifi
{% endhighlight %}

Далее в «Параметрах» откройте раздел «Мобильный хот-спот» любым удобным способом.

С помощью командной строки:

{% highlight bash linenos %}
start ms-settings:network-mobilehotspot
{% endhighlight %}

С помощью bat-файла:

{% highlight batch linenos %}
@echo off
start "" ms-settings:network-wifi
{% endhighlight %}

Теперь откройте окно «Сетевые подключения» любым удобным способом.

С помощью окна «Выполнить»:

Нажмите <kbd>Win</kbd> + <kbd>R</kbd> и введите `ncpa.cpl`, нажмите кнопку «OK» или на клавишу <kbd>Enter</kbd>.

С помощью командной строки:

Выполните команду `start ncpa.cpl` или `control ncpa.cpl`.

С помощью bat:

{% highlight batch linenos %}
@echo off
start "" ncpa.cpl
{% endhighlight %}

Там вы увидите новый сетевой адаптер, который Windows создала для раздачи интернета через Wi-Fi. Если хотите, вы можете переименовать его. Для этого кликните на значке адаптера правой клавишей мышки и в появившемся контекстном меню выберите пункт «Переименовать». Задайте любое имя, например, Hotspot.

Теперь кликните на значке основного адаптера и в контекстном меню выберите «Свойства». В открывшемся окне перейдите на вкладку «Доступ» и в этом разделе поставьте галочку «Разрешить другим пользователям сети использовать подключение Интернета к данному компьютеру». Ниже выберите созданный адаптер.

Осталось на телефоне включить Wi-Fi, найти среди отобразившихся сетей имя вашей сети и указать для неё пароль из Параметры → Сеть и Интернет → Wi-Fi.

Для быстрого включения Wi-Fi и Хотспот вы можете кликнуть на значок сети на панели задач и на открывшейся панели нажать сответствующие кнопки (достаточно включить только кнопку «Мобильный хот-спот» — кнопка «Wi-Fi» включится автоматически, для отключения — аналогично). Кнопка «Режим "в самолёте"» должна быть отключена.
{: .cornice}

Если вы используете Quick Access Popup (QAP), все команды вы можете выполнять с его помощью в соответствии с описанием в [этой статье]({{ site.baseurl }}/2024-11-12/сome-configurare-quick-access-popup).

### Выбор канала

Если вы живёте в многоквартирном доме, то скорей всего уже заметили, что Wi-Fi используют и ваши соседи. Чтобы избежать помех и добиться сигнала налучшего качества, вы можете выбрать канал. Мой ноутбук ASUS X550L имеет Wi-Fi адаптер 802.11n Wireless LAN. Расскажу как выбрать канал на его примере. Нажмите <kbd>Win</kbd> + <kbd>R</kbd> и в открывшемся окне «Выполнить» введите `devmgmt.msc`, нажмите кнопку «OK» или на клавишу <kbd>Enter</kbd>. В открывшеся Диспетчере устройств раскройте раздел «Сетевые адаптеры и найдите ваш Wi-Fi адаптер (в моём случае 802.11n Wireless LAN Card). Кликните по нему правой клавишей мышки и в появившемся контекстном меню выберите пункт «Свойства». В открывшемся окне перейдите на вкладку «Дополнительно». Выберите свойство «Country Region», и в выпадающем списке в качестве значения выберите нужный канал. Для того, чтобы узнать какой канал для вас окажется наиболее подходящим, вы можете воспользоваться программой WifiInfoView. Загрузите zip-архив с программой с [официального сайта](https://www.nirsoft.net/utils/wifi_information_view.html){:target="_blank" rel="noopener noreferrer"} и распакуйте содержимое архива в любую папку на вашем компьютере, а также, если вам нужно, чтобы интрефейс был, например, на русском, загрузите соответствующий zip-архив с языковым файлом — извлечённый из архива языковой файл поместите в папку с программой. Запустите программу и проанализируйте, какие каналы используют сети ваших соседей. Выберите канал, который либо не используется, либо используется, но имеет слабый сигнал.

### ASUS Eee PC 1001PXD (Windows 7 Starter)

Сначала я проверил наличие беспроводного адаптера командой `netsh wlan show drivers` и получил положительный результат:

```batch
Имя интерфейса: Беспроводное сетевое соединение
Поддержка размещённой сети: Да
Тип: Собственный драйвер Wi-Fi
Поддерживаемые типы радиомодулей: 802.11b 802.11g. 802.11.n
```

Если хотите, можете проверить наличие доступных сетей командой `netsh wlan show networks`.

Теперь перейдите: Панель управления → Сеть и интернет → Центр управления сетями → Изменить дополнительные параметры общего доступа. Доступ везде должен быть включен.

Установите программу [OSToto Hotspot](https://160wifi.ru.uptodown.com/windows/download){:target="_blank" rel="noopener noreferrer"} или можно попробовать установить аналогичную программу [MyPublicWiFi](https://mypublicwifi.com/publicwifi/en/index.html){:target="_blank" rel="noopener noreferrer"}, но она требует Пакет обновления 1 (SP1) для Windows 7 (KB976932), который всё ещё доступен в [Microsoft Update Catalog](https://www.catalog.update.microsoft.com/Search.aspx?q=KB976932){:target="_blank" rel="noopener noreferrer"}.

### Если в компьютере отсутствует встроенный Wi-Fi модуль или сломан

В этом случае приобретите подключаемый Wi-Fi адаптер, например, TP-Link TL-WN725N или TL-WN722N.

Подключаемый Wi-Fi адаптер, имеющий внешнюю антенну, также может быть использован вместо встроенного для получения более сильного сигнала.

Конечно, пользоваться встроенным Wi-Fi адаптером — это не самое лучшее решение, хотя интернет на моём телефоне, раздаваемый с ПК, работает быстро и стабильно и мне даже удалось обновить на телефоне систему и приложения. Лучшим же вариантом остаётся использование хорошего роутера, с помощью которого можно будет подключить несколько устройств и возможно без потери скорости соединения.
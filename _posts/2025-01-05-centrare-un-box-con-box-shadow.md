---
layout: post
title: "Центрирование блока с учётом тени"
description: "С помощью CSS можно легко \"нарисовать\" контейнер в виде стопки бумаги, задав для него тень. Но при выравнивании каким-либо способом тень не учитывается – это не так заметно на широком экране ПК, но очень заметно на мобильных устройствах."
author: "И. Постольный"
categories: 
tags: CSS
compress_html: false
---

С помощью CSS можно легко "нарисовать" контейнер в виде стопки бумаги, задав для него тень. Но при выравнивании каким-либо способом тень не учитывается – это не так заметно на широком экране ПК, но очень заметно на мобильных устройствах. На этом сайте я применил подобный эффект на странице [Мои музыкальные сочинения]({{ site.baseurl }}/musica/) и в статье [Нотный редактор MuseScore]({{ site.baseurl }}/2021-12-24/musescore). Для примера я создам такой блок в виде стопки бумаги с тремя листами и при центрировании тень пока учитывать не буду:

<style>
  #shad-container {
    background-color: #262626;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    margin-bottom: 1rem;
  }

  .shad-block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: white;
    box-shadow: red 0px 0px 0px 2px inset,
      white 14px 14px 0px -2px,
      green 14px 14px,
      white 28px 28px 0px -2px,
      blue 28px 28px;
  }
</style>

<div id="shad-container">
    <div class="shad-block">Я – блок с тенью</div>
</div>

Если приглядеться, центрирован только первый лист. Тени, образующие два других листа, смещены вправо и вниз. Если это не очень заметно, посмотрите на телефоне или в инспекторе браузера или просто сузив окно браузера. Вот Html и CSS:

{% highlight html linenos %}
<div id="shadow-container">
    <div class="block">Я – блок с тенью</div>
</div>
{% endhighlight %}

{% highlight css linenos %}
#shadow-container {
    background-color: #262626;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
}

.block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: white;
    box-shadow: red 0px 0px 0px 2px inset,
        white 14px 14px 0px -2px,
        green 14px 14px,
        white 28px 28px 0px -2px,
        blue 28px 28px;
}
{% endhighlight %}

Поясню что я здесь написал. Сначала я создал внешний flex-контейнер `#shadow-container` и задал для него `justify-content: center;` и `align-items: center;` для выравнивания вложенного в него блока с тенью `.block` соответствено по горизонтали и вертикали. Для блока `.block` я также задал `display: flex;`, `justify-content: center;` и `align-items: center;`, но лишь для того, чтобы выровнять текст "Я – блок с тенью" по центру и к делу это не относится как и другие стили, которые я не упомянул. Самое главное здесь – это составная тень `box-shadow`. Для первой тени (строка 16) указан параметр `inset`, указывающий на то, что тень является внутренней. В данном случае будет создана тонкая граница красного цвета. Для всех остальных теней параметр не указан – это говорит о том, что они являются внешними. В строках 17 и 19 создаётся белая тень с тонкой цветной границей. Первым параметром здесь указывается цвет тени, два следующих параметра – смещение по горизонтали и вертикали соответственно. Следующий параметр – радиус размытия. Если значение этого параметра равно нулю, край тени будет жёстким, то есть без размытия. Последний параметр -2px – это размер растушёвки (spread-radius), – это сужает белую тень на 2px и тем самым создаёт тонкую цветную границу за счёт отступа от краёв низлежащей тени.

Вообще параметры тени рекомендуют указывать в таком порядке: `box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit;` и согласно этой рекомендации можно было бы записать так:

{% highlight css linenos %}
.block {
    box-shadow: 0px 0px 0px 2px red inset,
        14px 14px 0px -2px white,
        14px 14px green,
        28px 28px 0px -2px white,
        28px 28px blue;
}
{% endhighlight %}

Но для таких параметров как `color` и `inset` порядок может быть произвольным. Главное, чтобы все числовые параметры имели строгий порядок: h-offset (смещение по горизонтали), v-offset (смещение по вертикали), blur-radius (радиус размытия), spread-radius (размер растушёвки). Параметры смещения являются обязательными, остальные параметры могут не указываться. Ключевое слово `none` (`box-shadow: none;`) отключает тень.

Итак, чтобы выровнять блок с учётом тени, можно просто задать внутренние отступы для `#shadow-container` справа и снизу, поскольку тень распространяется в этих направлениях. Величина отступа – это величина смещения по осям X и Y последней тени, то есть 28px:

{% highlight css linenos %}
#shadow-container {
    background-color: #262626;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    padding-right: 28px;
    padding-bottom: 28px;
}
{% endhighlight %}

И вот что у меня получилось:

<style>
  #shad-container1 {
    background-color: #262626;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    padding-right: 28px;
    padding-bottom: 28px;
    margin-bottom: 1rem;
  }

  .shad-block1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: white;
    box-shadow: red 0px 0px 0px 2px inset,
      white 14px 14px 0px -2px,
      green 14px 14px,
      white 28px 28px 0px -2px,
      blue 28px 28px;
  }
</style>

<div id="shad-container1">
    <div class="shad-block1">Я – блок с тенью</div>
</div>

На сайте я сделал именно так, но можно также вместо отступов воспользоваться свойством `transform: translate()`, задав его для самого блока `.block`, которое сдвинет его по оси X и Y (то есть влево и вниз), поскольку значения отрицательные, на половину величины смещения последней тени, то есть 14px:

{% highlight css linenos %}
#shadow-container {
    background-color: #262626;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
}

.block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: white;
    box-shadow: red 0px 0px 0px 2px inset,
        white 14px 14px 0px -2px,
        green 14px 14px,
        white 28px 28px 0px -2px,
        blue 28px 28px;
    transform: translate(-14px, -14px);
}
{% endhighlight %}

И напоследок пример, иллюстрирующий всё вышесказанное:

<style>
  #shad-container2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: #262626;
    padding-right: 14px;
    padding-bottom: 14px;
    transition: padding 0.3s ease;
  }
  .block2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 200px;
    height: 100px;
    background-color: white;
    box-shadow: 0px 0px 0px 2px red inset,
        14px 14px 0px -2px white,
        14px 14px green;
    transition: box-shadow 0.3s ease;
  }
  .shadow-slider {
    margin: 30px auto;
    text-align: center;
  }
  .shadow-slider input[type="range"] {
    width: 150px;
    margin: 5px 0;
    vertical-align: middle;
  }
  .shadow-slider span {
    display: inline-block;
    width: 50px;
  }
</style>

<div id="shad-container2">
    <div class="block2" id="shadow-box">Я – блок с тенью</div>
</div>
<div class="shadow-slider">
    <label for="offset">Смещение тени:</label>
    <input type="range" id="offset" min="0" max="50" value="14" step="1">
    <span id="offset-value">14px</span>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    if (typeof jQuery !== "undefined") {
      $(document).ready(function() {
        $('#offset').on('input', function() {
          var offset = Number($(this).val());

          $('#offset-value').text(offset + 'px');
          $('#shadow-box').css('box-shadow', '0px 0px 0px 2px red inset, ' + offset + 'px ' + offset + 'px 0px -2px white, ' + offset + 'px ' + offset + 'px green');

          $('#shad-container2').css('padding-right', offset + 'px');
          $('#shad-container2').css('padding-bottom', offset + 'px');
        });
      });
    } else {
      console.error("jQuery не загружен.");
    }
  });
</script>
$(document).ready(function() {
    $('.quiz-submit').on('click', function() {
        var correctAnswers = 0;
        var total = 0;
        $('.domanda').each(function() {
            total++;
            $('.quiz-msg', this).remove();
            var correct = $(this).find(':checked[data-correct]').length;
            if (correct == 1) {
                var msgHTML = '<div class="quiz-msg correct">Правильно!</div>';
                $(this).append(msgHTML);
                correctAnswers++;
            } else {
                var _msgHTML = '<div class="quiz-msg incorrect">Неправильно!</div>';
                $(this).append(_msgHTML);
                var correctRadio = $(this).find('input[data-correct]');
                var correctRadioLabel = correctRadio.parent();
                correctRadioLabel.addClass('correct');
            }
        });
        $('.score').html("Правильных ответов <strong>" + correctAnswers + "</strong> из <strong>" + total + "</strong>");
    });
});
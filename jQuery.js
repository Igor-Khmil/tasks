$(document).ready(function () {
    // 1---------------------------------------------------  
    $('h2.head').css('background', 'green').find('span.inner').css('font-size', '35px');
    // 2---------------------------------------------------
    $("a[href^='https://']").attr('target', 'blank');
    // 3---------------------------------------------------
    $('h3').each(function () {
        let h3 = $(this);
        let div = h3.next('div');
        if (div.length) {
            div.insertBefore(h3);
        }
    });
    // 4--------------------------------------------------
  $('input[type="checkbox"]').change(function() {
    let checkedCount = $('input[type="checkbox"]:checked').length;
    if (checkedCount >= 3) {
      $('input[type="checkbox"]').prop('disabled', true);
    } else {
      $('input[type="checkbox"]').prop('disabled', false);
    }
  });
});
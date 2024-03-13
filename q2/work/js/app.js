$(function () {
  /* クラス名modal_open_buttonの要素をクリックしたら */
  $(".modal_open_button").on("click", function () {
    /* クラス名modal_winの要素をフェードインさせる */
    $(".modal_win").fadeIn();
  });

  /* クラス名modal_close_buttonの要素をクリックしたら */
  $(".modal_close_button").on("click", function () {
    /* クラス名modal_winの要素をフェードアウトさせる */
    $(".modal_win").fadeOut();
  });
});
$(function () {
  /* クラス名drawer_buttonの要素をクリックしたときに */
  $(".drawer_button").on("click", function () {
    /* クラス名drawer_buttonの要素にactiveクラスの適用・非適用を切り替える */
    $(this).toggleClass("active");
    /* クラス名drawer_bgの要素が表示の時にフェードアウトしながら非表示にする（その逆も）*/
    $(".drawer_bg").fadeToggle();
    /* クラス名drawer_nav_wrapperの要素にopenクラスの適用・非適用を切り替える */
    $(".drawer_nav_wrapper").toggleClass("open");
  });

  /* クラス名drawer_bgの要素をクリックしたときに */
  $(".drawer_bg").on("click", function () {
    /* クラス名drawer_bgの要素を非表示にする */
    $(this).hide();
    /* クラス名drawer_nav_wrapperの要素のopenクラスを削除する */
    $(".drawer_nav_wrapper").removeClass("open");
    /* クラス名drawer_buttonの要素のactiveクラスを削除する */
    $(".drawer_button").removeClass("active");
  });
});
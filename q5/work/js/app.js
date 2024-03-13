$(function () {
  /* クラス名dropdwnの子要素liをホバーしたら */
  $(".dropdwn li").hover(function () {
    /* クラス名dropdwnの子要素liの子要素のクラス名dropdwn_menuをスライド（アニメーション）する */
    /* stop()でアニメーションの重複を防ぎ、他のアニメーションが実行中の時は、それを中止するようにする */
    $(this).children(".dropdwn_menu").stop().slideToggle();
  })
})
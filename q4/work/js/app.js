$(function () {
  /* クラス名navのli要素をクリックしたときに */
  $(".nav li").on("click", function () {
    /* indexにクラス名navのli要素のインデックス番号を代入する */
    var index = $(".nav li").index(this);
    /* クラス名descriptionのli要素すべてにクラスis-hiddenを追加する */
    $(".description li").addClass("is-hidden");
    /* クラス名descriptionのindex番目のli要素のクラスis-hiddenを削除する */
    $(".description li").eq(index).removeClass("is-hidden");
  })
})

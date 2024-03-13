$(function () {
  /* クラス名select-boxの要素で内容が変わったときに */
  $(".select-box").on("change", function () {
    /* 変数$valueにクラス名select-boxのvalue属性を取得 */
    var $value = $(this).val();
    /* 変数$listにクラス名food-listの子要素liを代入 */
    var $list = $(".food-list li");

    /* 条件分岐 */
    /* 変数$valueの値がallのとき */
    if ($value === "all") {
      /* 変数$listを表示させる */
      $list.show();
      /* その他の場合 */
    } else {
      /* 繰り返しの対象（変数$list）をループ処理する */
      /* indexにはインデックスが入り、valには値が順番に入る。*/
      $.each($list, function (index, val) {
        /* 変数$foodにval（値）のcategory-typeのデータ属性が入る */
        var $food = $(val).data("category-type");
        /* 変数$valueの値が変数$foodのとき（クラス名select-boxのvalue属性がval（値）のcategory-typeのデータ属性と同じの時）*/
        if ($value === $food) {
          /* 変数valの値を表示する */
          $(val).show();
          /* その他の場合 */
        } else {
          /* 変数valの値を非表示にする */
          $(val).hide();
        }
      })
    }
  })
})

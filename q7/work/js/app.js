$(function () {
  /* クラス名btn__submitの要素をクリックしたときに */
  $(".btn__submit").on("click", function () {
    /* コンソールにfor属性がfamily__nameの親要素のテキストを取得し表示させる */
    /* .children().empty()で子要素のspanタグのテキストを消している */
    console.log($("[for='family__name']").children().empty().parent().text());
    /* コンソールにid名family__nameのvalueを取得し、表示させる */
    console.log($("#family__name").val());

    console.log($("[for='given__name']").children().empty().parent().text());
    console.log($("#given__name").val());

    /* コンソールにクラス名がlabel__sectionの子要素labelのインデックス番号2のテキストを取得し表示させる */
    console.log($(".label__section label").eq(2).children().empty().parent().text());
    console.log($("[name='year']").val() + "年" + $("[name='month']").val() + "月" + $("[name='day']").val() + "日");

    /* コンソールにクラス名がlabel__sectionの子要素pのインデックス番号0のテキストを取得し表示させる */
    console.log($(".label__section p").eq(0).children().empty().parent().text());
    /* コンソールにname属性がgenderのチェックされているvalueを取得し、表示させる */
    console.log($('input[name="gender"]:checked').val());

    console.log($(".label__section label").eq(6).text());
    console.log($("[name='work'] option:selected").val());

    console.log($(".label__section label").eq(7).children().empty().parent().text());
    console.log($("#account__name").val());

    console.log($(".label__section label").eq(8).children().empty().parent().text());
    console.log($("#email").val());

    console.log($(".label__section label").eq(9).children().empty().parent().text());
    console.log($("#password").val());

    console.log($(".label__section label").eq(10).children().empty().parent().text());
    console.log($("#duplication__password").val());

    console.log($(".label__section label").eq(11).children().empty().parent().text());
    console.log($("#address").val());

    console.log($(".label__section label").eq(12).children().empty().parent().text());
    console.log($("#tel").val());

    console.log($(".subscription__content h3").text());
    /* name属性subscriptionのチェック済みのvalueを取得し、コンソールに表示させる */
    $("input[name='subscription']:checked").each(function () {
      var checked = $(this).val();
      console.log(checked);
    })
  })
})

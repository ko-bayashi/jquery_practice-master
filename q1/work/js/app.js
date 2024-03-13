$(function () {
  /* id名q1をHTMLの読み込みが完了したときに緑色にする */
  $("#q1").css("color", "green");
});

/* id名q2をクリックしたときにid名q2の背景色をピンクにする */
$("#q2").on("click", function () {
  $(this).css("background", "pink");
});

/* id名q3をクリックしたときにid名q3を3秒かけてフェードアウトさせる */
$("#q3").on("click", function () {
  $(this).fadeOut(3000);
});

/* id名q3をクリックしたときにid名q3を3秒かけてフェードアウトさせる */
$("#q3").on("click", function () {
  $(this).fadeOut(3000);
});

/* id名q4をクリックしたときにid名q4のサイズをwidth300px,padding50px,font-size20pxに変更 */
$("#q4").on("click", function () {
  $(this).width(300);
  $(this).css("padding", "50px");
  $(this).css("font-size", "20px");
});

/* id名q5をクリックしたときに（下記記述の上から）id名q5の前、q5テキストの前、q5テキストの後、id名q5の後に追加 */
$("#q5").on("click", function () {
  $(this).before("DOMの前");
  $(this).prepend("DOMの中の前");
  $(this).append("DOMの中の後");
  $(this).after("DOMの後");
});

/* id名q6をクリックしたときに2秒間かけてmargin-topに100px,margin-leftに100pxのところに移動する */
$("#q6").on("click", function () {
  $(this).animate({
    "margin-top": "100px",
    "margin-left": "100px"
  }, 2000);
});

/* id名q7をクリックしたときにid名q7のノードをコンソールに表示する */
$("#q7").on("click", function () {
  console.log(document.getElementById("q7"))
});


/* id名q8にマウスを合わせたときにid名q8のサイズを変更する。また、離したときに元に戻す */
$("#q8").on({
  "mouseenter": function () {
    $(this).width(300),
      $(this).css("padding", "50px");
    $(this).css("font-size", "20px");
  },
  "mouseleave": function () {
    $(this).width(100);
    $(this).css("padding", "25px");
    $(this).css("font-size", "14px");
  }
});

/* id名q9のliタグ(一つずつ)をクリックしたときにid名q9の子要素liタグのインデックス番号がアラート表示される */
$("#q9 li").on("click", function () {
  /* 変数indexにクリックされた要素がid名q9の子要素liタグの何番目にあるのかを代入している */
  var index = $("#q9 li").index(this);
  /* アラート表示 */
  alert(index);
});

/* id名q10のliタグ(一つずつ)をクリックしたときにq10のインデックス番号と連動してid名q11の子要素liタグが操作される */
$("#q10 li").on("click", function () {
  /* 変数numにクリックされた要素がid名q10の子要素liタグの何番目にあるのかを代入している */
  var num = $("#q10 li").index(this);
  /* id名q11の子要素liタグ（変数numに入っているインデックス番号）がpadding10px,font-sizeが30pxに変化する */
  $("#q11 li").eq(num).css("padding", "10px");
  $("#q11 li").eq(num).css("font-size", "30px");
});
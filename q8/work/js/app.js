// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });

$(function () {
  var pageCount = 1;
  $(".search-btn").on("click", function () {
    var searchWord = $("#search-input").val();

    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      "method": "GET",
    }
    $.ajax(settings).done(function (response) {
      const result = response['@graph'];
      displayResult(result)
    }).fail(function (err) {
      displayError(err)
    });

    function displayResult(result) {
      if (result[0].items !== undefined) {
        $(".message").remove();
        $(".list-inner").remove();
        $.each(result[0].items, function (index, item) {
          const listItem = `<li class="lists-item">
            <div class="list-inner">
              <p>タイトル：${item.title || "タイトル不明"}</p>
              <p>作者：${item["dc:creator"] || "作者不明"}</p>
              <p>出版社：${item["dc:publisher"] ? item["dc:publisher"][0] : "出版社不明"}</p>
              <a href="${item.link["@id"]}" target="_blank">書籍情報</a>
            </div>
          </li>`;
          $(".lists").prepend(listItem);
        });
      } else if (result[0].items === undefined) {//検索結果が１つもなかった場合メッセージを表示
        $(".list-inner").remove();
        $(".message").remove();
        $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>');
      } else {
        $(".message").remove();
        $(".lists").before('<div class="message">検索キーワードが有効ではありません。<br>1文字以上で検索して下さい。</div>');
      };
    }

    function displayError(err) {//APIがうまく送信されなかったときのエラー
      $(".list-inner").remove();
      $(".message").remove();
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
    }
  })

  $(".reset-btn").on("click",function(){
    $("#search-input").val("");
  })
})
//java script     

        var loop = setInterval(function() {
            
        //li先頭要素のクローンを作成
        var clone = $(".slide-wrapper li:first").clone(true);
            
        //li先頭要素のマージントップにマイナスを指定しアニメーションさせる
        $(".slide-wrapper li:first").animate({
        marginTop : "-400px"
        }, {
        duration : 1300,
        complete : function() {
            
            //処理完了時に先頭要素を削除
            $(".slide-wrapper li:first").remove();
            
            //クローンをliの最後に追加
            clone.clone(true).insertAfter($(".slide-wrapper li:last"));
        }
        });
        }, 3700);
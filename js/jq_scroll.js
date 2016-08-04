/*
jQ向上滚动带上下翻页按钮
*/
(function($){
$.fn.extend({
        Scroll:function(opt,callback){
                //参数初始化
                if(!opt) var opt={};
                var _btnUp = $("#"+ opt.up);//Shawphy:向上按钮
                var _btnDown = $("#"+ opt.down);//Shawphy:向下按钮
                var timerID;
                var _this=this.eq(0).find("ul:first"); // the first ul
                var     lineH=_this.find("li:first").height(), //获取行高
                        line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
                        speed=opt.speed?parseInt(opt.speed,10):500; //卷动速度，数值越大，速度越慢（毫秒）
                        timer=opt.timer //?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
                if(line==0) line=1;
                var upHeight=0-line*lineH;
                //滚动函数
                var scrollUp=function(){
                        _btnUp.unbind("click",scrollUp); //Shawphy:取消向上按钮的函数绑定
                        _this.animate({
                                marginTop:upHeight,
                                 // the each li height
                        },speed,function(){
                                for(i=1;i<=line;i++){
                                        _this.find("li:first").appendTo(_this).removeClass('curr_type_goods');
                                };
                                _this.find('li:first').addClass('curr_type_goods')
                                 toggle_curr_goods()
                                _this.css({marginTop:0});
                                _btnUp.bind("click",scrollUp); //Shawphy:绑定向上按钮的点击事件
                        });

                }
                //Shawphy:向下翻页函数
                var scrollDown=function(){
                        _btnDown.unbind("click",scrollDown);
                        for(i=1;i<=line;i++){
                                _this.find("li:last").show().prependTo(_this);
                        }
                        _this.css({marginTop:upHeight});
                        _this.animate({
                                marginTop:0
                        },speed,function(){
                                _btnDown.bind("click",scrollDown);
                        });
                }
               //Shawphy:自动播放
                var autoPlay = function(){
                        if(timer)timerID = window.setInterval(scrollUp,timer);
                };
                var autoStop = function(){
                        if(timer)window.clearInterval(timerID);
                };
                 //鼠标事件绑定
            /*  _this.hover(autoStop,autoPlay).mouseout();
               _btnUp.css("cursor","pointer").click( scrollUp ).hover(autoStop,autoPlay);//Shawphy:向上向下鼠标事件绑定
                _btnDown.css("cursor","pointer").click( scrollDown ).hover(autoStop,autoPlay);
                */
                    _this.swipe( {
    //Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
    
      if(direction === 'up'){
            scrollUp()
            var curr_goods = document.getElementsByClassName('curr_type_goods')[0];
            var curr_inde = document.getElementsByClassName('curr_inde')[0].firstChild.nodeValue.trim();   // 当前属性
          if ( Object.keys(mock_data).indexOf(curr_goods.firstChild.nodeValue.trim()) !== -1) { // 当前种类 ? 3
              var curr_index =  Object.keys(mock_data).indexOf(curr_goods.firstChild.nodeValue.trim()); // 当前种类位置
              var all_curr_data = transformArr(new_mock_arr[curr_index]);  // 当前种类所有月份数据 数组格式
              var arr_push = [] ;                                           // 填充当前属性的数组
              var inde_index = Object.keys(transformArr(new_mock_arr[0])[0]).indexOf(curr_inde) ;
              console.log(inde_index)
              for (var i = 0; i < all_curr_data.length; i++) {
                  arr_push.push(transformArr(all_curr_data[i])[inde_index])
              }
              console.log(arr_push)
              // 基于准备好的dom，初始化echarts实例
              var myChart = echarts.init(document.getElementById('main'));

              // 指定图表的配置项和数据
              var option = {
                  title: {
                      text: '柱形图'
                  },
                  tooltip: {},
                  legend: {
                      data: ["销量"] //into_detail_page().legend
                  },
                  xAxis: {
                      data: ["一月", "二月", "三月", "四月", "五月","六月", "七月", "八月", "九月", "十月" , "十一月", "十二月"]
                  },
                  yAxis: {},
                  series: [{
                      name: '销量',
                      type: 'bar',
                      data: trans_arr(arr_push)
                  }]
              };

              // 使用刚指定的配置项和数据显示图表。
              myChart.setOption(option);
          }
            console.log('up')
      }
    }
});
                
                




        }       
})
})(jQuery);

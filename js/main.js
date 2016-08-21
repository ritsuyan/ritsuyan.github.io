/**
 * Created by Administrator on 2016/8/11.
 */

/*
*     todo 1  slide
*     todo 2  graphic data
*     todo 3  clear undefined td
*
* */
/**************************************     sort   data    start   *********************************/
function sort_attr(opts){
    var $index  = opts.index;
    var $table  = opts.dom;  // table
    var $related = opts.related;

    var rows=$table.rows;//���ÿһ�е������
    var rowslength=rows.length;//ÿһ�еĳ���

    var rows_rela = $related.rows;
    var rows_rela_len = rows_rela.length;

    console.log($index)



    // start
    var flag=true;
    function sortAge(){
        //�������������Ҫ�Ƚ��л��ÿһ�ж���Ȼ���������еĵ�һ������0 ��ʼ���Ĵ�С��������

        var rows0 = $table.rows;
        var rows1 = [];

        var rows2 = [];  // container related arr


        for (var x = 1; x < rows0.length; x++) {
            rows1[x - 1] = rows0[x];
            rows2[x - 1] = rows_rela[x];
        }

        /*
         *    now execute the row1 bubble sort
         * */
        for (var x = 0; x < rows1.length - 1; x++) {//ÿ��Ԫ�����ж���
            for (var y = x + 1; y < rows1.length; y++) {
                //��ÿһ�е����ݽ��н���������
                if (parseInt(rows1[x].cells[$index].innerHTML) > parseInt(rows1[y].cells[$index].innerHTML)) {
                    //alert("aa="+x+":"+rows1[x].cells[1].innerHTML);
                    //alert("bb"+rows1[y].cells[1].innerHTML);
                    var temp = rows1[x];
                    rows1[x] = rows1[y];
                    rows1[y] = temp;

                    var temp_rela = rows2[x];
                    rows2[x]  = rows2[y];
                    rows2[y]  = temp_rela;
                }
            }
        }

        /* ���֮����������֮��ָ�֮ǰ��״̬

         /* ������ǵ�֮�����������������? �����������������appendchild��ǰ���ϵ����?*/


        if (flag) {
            for (var x = 0; x < rows1.length; x++) {//�ź���֮��ʹ�?0��ʼ
                //       tabNode.childNodes[0].appendChild(rows[x]);//����һ�� ��һ������
                rows1[x].parentNode.appendChild(rows1[x]);

                rows2[x].parentNode.appendChild(rows2[x])
            }


        }else{
            for (var x = rows1.length-1; x >=0; x--) {
                //       tabNode.childNodes[0].appendChild(rows[x]);//����һ�� ��һ������
                rows1[x].parentNode.appendChild(rows1[x]);

                rows2[x].parentNode.appendChild(rows2[x]);
            }

        }
        flag=!flag;

    }
    sortAge()
}

/**************************************     sort   data    end     *********************************/




/**************************************  graphic   data    start   *********************************/
var $show_gra = false;

 function graph_data(opts){

    /*
    *    the index should be the evt parentNode index
    * */


    var $index  = opts.index;


    var rows0 = $table.rows;
    var rows1 = [];

    var rows2 = [];  // container related arr


    for (var x = 1; x < rows0.length; x++) {
        rows1[x - 1] = rows0[x];
        rows2[x - 1] = rows_rela[x];
    }

    /*
     *    now execute the row1 bubble sort
     * */
    for (var x = 0; x < rows1.length - 1; x++) {//ÿ��Ԫ�����ж���
            /*
            *    todo 1  container the val
            *    todo 2
            * */
            var $val = rows1[x].cells[$index].innerHTML ;
            var $span = document.createElement('span');
            var $cre_width = parseInt($val);

            $($span).css('width',$cre_width)
            $span.setAttribute('val',$val)

            rows1[x].cells[$index].innerHTML = "";
            rows1[x].cells[$index].appendChild($span);

            if($cre_width < 0 ){
                 $span.className = "nega_cl"
            } else{
                 $span.className = 'posi_cl'
            }
    }


}
/**************************************  graphic   data    end     *********************************/


/**************************************  fun button show  start   *********************************/

var is_show = false;
function show_btn(opts){
    var $pa = opts.dom;
    var $fun_btn = document.createElement('div');
    var len = 3;
    var $tit_arr = ['行距','过滤','选列']

    if(is_show === false) {
        for (var i = 0; i < len; i++) {
            $pa.appendChild(document.createElement('div'))
        }

        for (var i = 1; i < len + 1; i++) {
            $pa.childNodes[i].style.left = -70 + (i - 1) * 30 + "%";
            $pa.childNodes[i].style.top = 40 - (i - 1) * 85 + "%";
            $pa.childNodes[i].innerHTML = $tit_arr[i - 1];
            $pa.childNodes[i].className = 'fun_btn';

        }
        return true;
    } else{
        $('.fun_btn').remove();
        return false;
    }

}

/**************************************  fun button show    end     *********************************/


/**************************************  fun button show  start   *********************************/


var $name;

function cre_view(opts){


    var $main_page =  $('body').children();
    $('body').empty();
    $name = opts.name;
    console.log($name)

    var $tb_view =
            '<div class="tb_wrap">' +
            '<h3 class="tb_title">' +
            '<a id="btn_cancel" class="left">取消' + '</a>' +
            '<a id="btn_curr_tit">' +$name + '</a>' +
            '<a id="btn_apply" class="right">应用' + '</a>'
            + '</h3>' +
            '<div class="tb_con">' + '</div>'
            + '</div>' ;

     $('body').append($tb_view)   

     var $con;
    if($name === '行距'){
          $con =
             '<div class="con_line">1 行'  +  '</div>' +
             '<div class="con_line">2 行'  +  '</div>' +
             '<div class="con_line">3 行'  +  '</div>' +
             '<div class="con_line">4 行'  +  '</div>' ;


        $('.tb_con').append($con);

    } else if( $name === '选列'){
          $con = 
'<div class="panel-group" id="accordion">' +

  '<div class="panel panel-default">' + 
    '<div class="panel-heading">' +
      '<h4 class="panel-title">' +
        '<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" class="collapsed" id="coll_1">  选择关键列 ' +               
        '</a>'      +
      '</h4>'      +
    '</div>'      +


    '<div id="collapseOne" class="panel-collapse collapse in">' +
    '</div>'  +
  '</div>'  + 


  '<div class="panel panel-default">' + 
    '<div class="panel-heading">' +
      '<h4 class="panel-title">' +
        '<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" id="coll_2"> 选择并排列                 > '        
        + 
        '</a>'      +
      '</h4>'      +
    '</div>'      +


    '<div id="collapseTwo" class="panel-collapse collapse in">' +
    '</div>'  +
  '</div>'  + 
            '</div>' ;


        $('.tb_con').append($con);

        var $span_arr = document.getElementById('collapseOne').getElementsByTagName('span');
        var $span_arr_two = document.getElementById('collapseTwo').getElementsByTagName('span');

        choose_col()
    }



    $('#collapseTwo').collapse('hide')
    $('#collapseOne').collapse('hide')



    var $line_arr = document.getElementsByClassName('con_line');
    var $add_line;
    if(document.getElementsByClassName('con_line').length > 1){
         for(var i = 0 ;  i < $line_arr.length; i++){
             var apply_hammer = new Hammer($line_arr[i]);
             apply_hammer.on('tap',function (ev) {
                     var $target = ev.target;
                     $add_line = $target.innerHTML.slice(0,1);  // 1 2 3 4 
                     console.log($add_line)
                     $target.className += " active_line";
                     console.log($target)

             })
         }
    } 


    var apply_hammer = new Hammer(document.getElementById('btn_apply'));

    apply_hammer.on('tap',function (ev) {




        $('body').empty();
        $('body').append($main_page);


        if($name === '行距'){
                     var $tb  =  document.getElementById('fixed-body');
                     var $tb_arr = $tb.getElementsByTagName('td');
                     var len  = $tb_arr.length;

                    for(var i = 0 ; i < len; i++){
                        $tb_arr[i].style.paddingBottom =  $add_line  +  'em';
                         $tb_arr[i].style.paddingTop =  $add_line  +  'em';
                        }

        }else if( $name === "选列"){

                    //  find the single fixed column

            var de_arr  = [];
            console.log($span_arr)

            for(var i = 0 ; i < $span_arr.length; i++){
                 if($span_arr[i].getElementsByTagName('input')[0].checked){
                      de_arr.push($span_arr[i].getElementsByTagName('a')[0].innerHTML)  // such as sales
                 }
            }
            for(var i = 0 ; i < $span_arr_two.length; i++){
                if($span_arr_two[i].getElementsByTagName('input')[0].checked){
                    de_arr.push($span_arr_two[i].getElementsByTagName('a')[0].innerHTML)  // such as sales
                }
            }
            console.log(de_arr)

            insert_attr(de_arr)

        }

        clear_fun({
             'dom' : document.getElementById('fixed_btn')
        })
    })


}



function clear_fun(opts) {
    var self = opts.dom;
    var btn_arr = self.getElementsByClassName('fun_btn');
    var len  = btn_arr.length;

    $(btn_arr).remove()

    re_bind_tap()
}



function re_bind_tap(){
    var hammer_btn = new Hammer(document.getElementById('fixed_btn'));

    hammer_btn.on('tap', function (evt) {

        is_show = show_btn({
            'dom':document.getElementById('fixed_btn')
        })

        if(document.getElementById('fixed_btn').childNodes.length > 1) {
            for (var i = 1; i < 4; i++) {
                var hammer_btn = new Hammer(document.getElementById('fixed_btn').childNodes[i]);
                hammer_btn.on('tap', function (ev) {
                    var $name = ev.target.innerHTML.trim();

                    cre_view({
                        'name' : $name
                    })
                })

            }
        }
    })
}
/**************************************  fun button show    end     *********************************/



/*************************************   json data  start            ********************************/
var json_data =    [
                        {
                            //*triangle为警示图标,1:正常,2:警告,3:预警
                            "name":"商品1",//商品名称
                            "sales":"950",//销售额
                            "prev_sales":"900",//环比销售额
                            "sales_triangle":3,//预警
                            "last_sales":"1200",//同比销售额
                            "last_sales_triangle":2,//警告
                            "amount":"100",//数量
                            "prev_amount":"80",//环比数量
                            "amount_triangle":1,//正常
                            "gross_margin":"100",//毛利
                            "prev_gross_margin":"80",//环比毛利
                            "gross_margin_triangle":1,//正常
                            "profit":"100",//净利润
                            "prev_profit":"80",//环比净利润
                            "profit_triangle":1,//正常
                            "increase":"10",//增长
                            "prev_increase":"8",//环比增长
                            "increase_triangle":1,//正常
                            "sales_target":"1200",//销售目标
                            "prev_sales_target":"1100",//环比销售目标
                            "sales_target_triangle":3,//预警
                            "achievement":"105",//目标达成率
                            "prev_achievement":"103",//环比目标达成率
                            "achievement_triangle":3,//预警
                        },
                        {
                            "name":"商品2",
                            "sales":"1200.54",
                            "prev_sales":"1000.54",
                            "sales_triangle":1,
                            "last_sales":"1000",
                            "last_sales_triangle":3,
                            "amount":"20",
                            "prev_amount":"16",
                            "amount_triangle":1,
                            "gross_margin":"600",
                            "prev_gross_margin":"500",
                            "gross_margin_triangle":1,
                            "profit":"600",
                            "prev_profit":"500",
                            "profit_triangle":1,
                            "increase":"9",
                            "prev_increase":"8",
                            "increase_triangle":3,
                            "sales_target":"1200",
                            "prev_sales_target":"900",
                            "sales_target_triangle":1,
                            "achievement":"95",
                            "prev_achievement":"90",
                            "achievement_triangle":3
                        },
                        {
                            "name":"商品3",
                            "sales":"900.52",
                            "prev_sales":"1000",
                            "sales_triangle":2,
                            "last_sales":"1000",
                            "last_sales_triangle":2,
                            "amount":"30",
                            "prev_amount":"46",
                            "amount_triangle":2,
                            "gross_margin":"900",
                            "prev_gross_margin":"600",
                            "gross_margin_triangle":1,
                            "profit":"400",
                            "prev_profit":"500",
                            "profit_triangle":2,
                            "increase":"-5",
                            "prev_increase":"11",
                            "increase_triangle":2,
                            "sales_target":"800",
                            "prev_sales_target":"1100",
                            "sales_target_triangle":2,
                            "achievement":"60",
                            "prev_achievement":"101",
                            "achievement_triangle":2
                            
                        },

    {
        "name":"商品4",
        "sales":"900.52",
        "prev_sales":"1000",
        "sales_triangle":2,
        "last_sales":"1000",
        "last_sales_triangle":2,
        "amount":"30",
        "prev_amount":"46",
        "amount_triangle":2,
        "gross_margin":"900",
        "prev_gross_margin":"600",
        "gross_margin_triangle":1,
        "profit":"400",
        "prev_profit":"500",
        "profit_triangle":2,
        "increase":"-5",
        "prev_increase":"11",
        "increase_triangle":2,
        "sales_target":"800",
        "prev_sales_target":"1100",
        "sales_target_triangle":2,
        "achievement":"60",
        "prev_achievement":"101",
        "achievement_triangle":2

    },
    {
        "name":"商品3",
        "sales":"900.52",
        "prev_sales":"1000",
        "sales_triangle":2,
        "last_sales":"1000",
        "last_sales_triangle":2,
        "amount":"30",
        "prev_amount":"46",
        "amount_triangle":2,
        "gross_margin":"900",
        "prev_gross_margin":"600",
        "gross_margin_triangle":1,
        "profit":"400",
        "prev_profit":"500",
        "profit_triangle":2,
        "increase":"-5",
        "prev_increase":"11",
        "increase_triangle":2,
        "sales_target":"800",
        "prev_sales_target":"1100",
        "sales_target_triangle":2,
        "achievement":"60",
        "prev_achievement":"101",
        "achievement_triangle":2

    },
    {
        "name":"商品3",
        "sales":"900.52",
        "prev_sales":"1000",
        "sales_triangle":2,
        "last_sales":"1000",
        "last_sales_triangle":2,
        "amount":"30",
        "prev_amount":"46",
        "amount_triangle":2,
        "gross_margin":"900",
        "prev_gross_margin":"600",
        "gross_margin_triangle":1,
        "profit":"400",
        "prev_profit":"500",
        "profit_triangle":2,
        "increase":"-5",
        "prev_increase":"11",
        "increase_triangle":2,
        "sales_target":"800",
        "prev_sales_target":"1100",
        "sales_target_triangle":2,
        "achievement":"60",
        "prev_achievement":"101",
        "achievement_triangle":2

    },
    {
        "name":"商品3",
        "sales":"900.52",
        "prev_sales":"1000",
        "sales_triangle":2,
        "last_sales":"1000",
        "last_sales_triangle":2,
        "amount":"30",
        "prev_amount":"46",
        "amount_triangle":2,
        "gross_margin":"900",
        "prev_gross_margin":"600",
        "gross_margin_triangle":1,
        "profit":"400",
        "prev_profit":"500",
        "profit_triangle":2,
        "increase":"-5",
        "prev_increase":"11",
        "increase_triangle":2,
        "sales_target":"800",
        "prev_sales_target":"1100",
        "sales_target_triangle":2,
        "achievement":"60",
        "prev_achievement":"101",
        "achievement_triangle":2

    },
    {
        "name":"商品3",
        "sales":"900.52",
        "prev_sales":"1000",
        "sales_triangle":2,
        "last_sales":"1000",
        "last_sales_triangle":2,
        "amount":"30",
        "prev_amount":"46",
        "amount_triangle":2,
        "gross_margin":"900",
        "prev_gross_margin":"600",
        "gross_margin_triangle":1,
        "profit":"400",
        "prev_profit":"500",
        "profit_triangle":2,
        "increase":"-5",
        "prev_increase":"11",
        "increase_triangle":2,
        "sales_target":"800",
        "prev_sales_target":"1100",
        "sales_target_triangle":2,
        "achievement":"60",
        "prev_achievement":"101",
        "achievement_triangle":2

    },
    {
        "name":"商品3",
        "sales":"900.52",
        "prev_sales":"1000",
        "sales_triangle":2,
        "last_sales":"1000",
        "last_sales_triangle":2,
        "amount":"30",
        "prev_amount":"46",
        "amount_triangle":2,
        "gross_margin":"900",
        "prev_gross_margin":"600",
        "gross_margin_triangle":1,
        "profit":"400",
        "prev_profit":"500",
        "profit_triangle":2,
        "increase":"-5",
        "prev_increase":"11",
        "increase_triangle":2,
        "sales_target":"800",
        "prev_sales_target":"1100",
        "sales_target_triangle":2,
        "achievement":"60",
        "prev_achievement":"101",
        "achievement_triangle":2

    }, {
        "name":"商品3",
        "sales":"900.52",
        "prev_sales":"1000",
        "sales_triangle":2,
        "last_sales":"1000",
        "last_sales_triangle":2,
        "amount":"30",
        "prev_amount":"46",
        "amount_triangle":2,
        "gross_margin":"900",
        "prev_gross_margin":"600",
        "gross_margin_triangle":1,
        "profit":"400",
        "prev_profit":"500",
        "profit_triangle":2,
        "increase":"-5",
        "prev_increase":"11",
        "increase_triangle":2,
        "sales_target":"800",
        "prev_sales_target":"1100",
        "sales_target_triangle":2,
        "achievement":"60",
        "prev_achievement":"101",
        "achievement_triangle":2

    }
                        
                    ];


    
function choose_col() {

    console.log('enter')

    var ha_tap_2 = new Hammer(document.getElementById('coll_2'));

    ha_tap_2.on('tap', function (ev) {
        add_checkbox({
            'dom': document.getElementById('coll_2')
        })
    })

    var ha_tap_1 = new Hammer(document.getElementById('coll_1'));

    ha_tap_1.on('tap', function (ev) {
        add_checkbox({
            'dom': document.getElementById('coll_1')
        })

    })

}



function add_checkbox(opts) {
    var curr_opt = opts.dom;

    console.log(curr_opt)

    var herf_con = curr_opt.getAttribute('href'); // #collaseTwo

        herf_con  =  herf_con.substring(1,herf_con.length)

    var  attr_arr  =   Object.keys(json_data[0]);  // attr arr list

    console.log( herf_con )


    for(var i = 0 ; i < attr_arr.length ; i++){
        var $span = document.createElement('span');
        var $input = document.createElement('input');
        var $text  = document.createElement('a');
            $text.innerHTML = attr_arr[i];
        if( curr_opt === document.getElementById('coll_1')) {
            $input.setAttribute('type', 'radio');
        } else{
            $input.setAttribute('type', 'radio');
        }
        $span.appendChild($input)    
        $span.appendChild($text)
              
        document.getElementById(herf_con).appendChild($span)      
    }

     document.getElementById(herf_con).firstChild.getElementsByTagName('a')[0].innerHTML = "默认";

     console.log(herf_con)

}



/*************************************   json data  end              ********************************/


/*************************************   insert attr  start          *******************************/

    function insert_attr(arr){

    document.getElementById('fixed_table_title').getElementsByTagName('th')[0].innerHTML = arr.shift();

    var fixed_attr = document.getElementById('fixed_table_title').getElementsByTagName('th')[0].innerHTML;

    var swipe_title = document.getElementById('swipe_table_title').getElementsByTagName('tr')[0];

    $(swipe_title).empty()



        console.log(arr)
    for( var i = 0 ;  i < arr.length ; i++){
            var curr_th =  document.createElement('th');
            curr_th.innerHTML = arr[i]
            swipe_title.appendChild(curr_th)
    }


    //    start  insert  td value

   var attr_arr =  Object.keys(json_data[0]);

    console.log(attr_arr)

    var fixed_index = attr_arr.indexOf(fixed_attr)  // the fixed value index

            // get  good fixed_attr


    var fixed_td_arr = document.getElementById('fixed-body').getElementsByTagName('td');
    var len         = fixed_td_arr.length;
    console.log(fixed_attr)
    for( var i = 0 ;  i < json_data.length; i++){
         fixed_td_arr[i].innerHTML = json_data[i][fixed_attr];
    }




            //  get each goods swipe attr
    var swipe_td_arr = document.getElementById("swiper-body").getElementsByTagName('tr');

    var swipe_len         = swipe_td_arr.length;

    console.log(arr)
    for( var j = 0 ; j < json_data.length; j++){
        var curr_line = swipe_td_arr[j].getElementsByTagName('td');
        var curr_good =  json_data[j];

        console.log(curr_line)
        console.log(curr_good)



        for(var k = 0 ; k < json_data.length ; k++) {
            curr_line[k].innerHTML = json_data[j][arr[k]]
        }
    }

    var clear_td_arr = document.getElementById("swiper-body").getElementsByTagName('td');
    for(var w = 0 ; w < clear_td_arr.length; w ++){
          if(clear_td_arr[w].innerHTML === 'undefined'){
              clear_td_arr[w].parentNode.removeChild(clear_td_arr[w])
          }
    }

    //  end  insert  td value

}
/*************************************   insert attr  end            *******************************/
/**
 * Created by Ritsu Yan on 2016/7/15.
 *   From RoamBi KPI
 *
 *   DONE the basic pages switchover
 *   TODO 1  the JSON Format
 *
 */

$(function () {
    init();
    /* click.inde() */
});

function init() {

    var curr_jsondata = [
        {
            "inde_1": "789,223,461",
            "inde_2": "624,123,845",
            "inde_3": "451,513,748",
            "inde_4": "451,513,748",
            "inde_5": "624,123,845",
            "inde_6": "789,223,461",
            "inde_7": "624,123,845",
            "inde_8": "789,223,461"
        },
        {
            "inde_1": "633,223,461",
            "inde_2": "956,123,845",
            "inde_3": "751,513,748",
            "inde_4": "151,513,748",
            "inde_5": "224,123,845",
            "inde_6": "189,223,461",
            "inde_7": "624,123,845",
            "inde_8": "789,223,461"
        },
        {
            "inde_1": "387,223,461",
            "inde_2": "224,123,845",
            "inde_3": "451,513,748",
            "inde_4": "751,513,748",
            "inde_5": "924,123,845",
            "inde_6": "189,223,461",
            "inde_7": "624,123,845",
            "inde_8": "789,223,461"
        },
        {
            "inde_1": "186,223,461",
            "inde_2": "224,123,845",
            "inde_3": "251,513,748",
            "inde_4": "351,513,748",
            "inde_5": "524,123,845",
            "inde_6": "389,223,461",
            "inde_7": "624,123,845",
            "inde_8": "789,223,461"
        },
        {
            "inde_1": "785,223,461",
            "inde_2": "624,123,845",
            "inde_3": "451,513,748",
            "inde_4": "451,513,748",
            "inde_5": "624,123,845",
            "inde_6": "789,223,461",
            "inde_7": "624,123,845",
            "inde_8": "789,223,461"
        },
        {
            "inde_1": "784,223,461",
            "inde_2": "624,123,845",
            "inde_3": "451,513,748",
            "inde_4": "451,513,748",
            "inde_5": "624,123,845",
            "inde_6": "789,223,461",
            "inde_7": "624,123,845",
            "inde_8": "789,223,461"
        },
        {
            "inde_1": "785,223,461",
            "inde_2": "624,123,845",
            "inde_3": "451,513,748",
            "inde_4": "451,513,748",
            "inde_5": "624,123,845",
            "inde_6": "789,223,461"
            , "inde_7": "624,123,845",
            "inde_8": "789,223,461"
        },
        {
            "inde_1": "784,223,461",
            "inde_2": "624,123,845",
            "inde_3": "451,513,748",
            "inde_4": "451,513,748",
            "inde_5": "624,123,845",
            "inde_6": "789,223,461",
            "inde_7": "624,123,845",
            "inde_8": "789,223,461"
        }
    ],
        last_josndata = [
            {
                "inde_1": "489,223,461",
                "inde_2": "224,123,845",
                "inde_3": "651,513,748",
                "inde_4": "151,513,748",
                "inde_5": "624,123,845",
                "inde_6": "989,223,461",
                "inde_7": "624,123,845",
                "inde_8": "789,223,461"
            },
            {
                "inde_1": "533,223,461",
                "inde_2": "666,123,845",
                "inde_3": "351,513,748",
                "inde_4": "251,513,748",
                "inde_5": "624,123,845",
                "inde_6": "189,223,461",
                "inde_7": "624,123,845",
                "inde_8": "789,223,461"
            },
            {
                "inde_1": "487,223,461",
                "inde_2": "224,123,845",
                "inde_3": "651,513,748",
                "inde_4": "951,513,748",
                "inde_5": "724,123,845",
                "inde_6": "589,223,461",
                "inde_7": "624,123,845",
                "inde_8": "789,223,461"
            },
            {
                "inde_1": "286,223,461",
                "inde_2": "724,123,845",
                "inde_3": "651,513,748",
                "inde_4": "751,513,748",
                "inde_5": "324,123,845",
                "inde_6": "189,223,461",
                "inde_7": "624,123,845",
                "inde_8": "789,223,461"
            },
            {
                "inde_1": "285,223,461",
                "inde_2": "224,123,845",
                "inde_3": "451,513,748",
                "inde_4": "551,513,748",
                "inde_5": "424,123,845",
                "inde_6": "289,223,461"
                , "inde_7": "624,123,845",
                "inde_8": "789,223,461"
            },
            {
                "inde_1": "804,223,461",
                "inde_2": "604,123,845",
                "inde_3": "541,513,748",
                "inde_4": "351,513,748",
                "inde_5": "924,123,845",
                "inde_6": "989,223,461",
                "inde_7": "624,123,845",
                "inde_8": "789,223,461"
            }, {
                "inde_1": "785,223,461",
                "inde_2": "624,123,845",
                "inde_3": "451,513,748",
                "inde_4": "451,513,748",
                "inde_5": "624,123,845",
                "inde_6": "789,223,461",
                "inde_7": "624,123,845",
                "inde_8": "789,223,461"
            },
            {
                "inde_1": "784,223,461",
                "inde_2": "624,123,845",
                "inde_3": "451,513,748",
                "inde_4": "451,513,748",
                "inde_5": "624,123,845",
                "inde_6": "789,223,461",
                "inde_7": "624,123,845",
                "inde_8": "789,223,461"
            }
        ], last_jsondata = [
            {
                "inde_1": "589,223,466",
                "inde_2": "624,123,845",
                "inde_3": "451,513,748",
                "inde_4": "451,513,748",
                "inde_5": "624,123,845",
                "inde_6": "789,223,461"
            },
            {
                "inde_1": "985,223,460",
                "inde_2": "624,123,845",
                "inde_3": "451,513,748",
                "inde_4": "451,513,748",
                "inde_5": "624,123,845",
                "inde_6": "789,223,461"
            },
            {
                "inde_1": "985,223,460",
                "inde_2": "624,123,845",
                "inde_3": "451,513,748",
                "inde_4": "451,513,748",
                "inde_5": "624,123,845",
                "inde_6": "789,223,461"
            },
            {
                "inde_1": "985,233,156",
                "inde_2": "624,123,845",
                "inde_3": "451,513,748",
                "inde_4": "451,513,748",
                "inde_5": "624,123,845",
                "inde_6": "789,223,461"
            },
            {
                "inde_1": "233,223,464",
                "inde_2": "624,123,845",
                "inde_3": "451,513,748",
                "inde_4": "451,513,748",
                "inde_5": "624,123,845",
                "inde_6": "789,223,461"
            },
            {
                "inde_1": "600,223,466",
                "inde_2": "624,123,845",
                "inde_3": "451,513,748",
                "inde_4": "451,513,748",
                "inde_5": "624,123,845",
                "inde_6": "789,223,461"
            }
        ],
        list_goods_arr = document.getElementsByClassName('list_goods'),
        len = list_goods_arr.length,
        inde_arr = document.getElementsByClassName('inde');

    bindInde(curr_jsondata, last_jsondata);

    var curr_goods = document.getElementsByClassName('curr_type_goods')[0];

    // the curr goods data & last goods data has initialed
    for (var i = 0; i < inde_arr.length; i++) {
        inde_arr[i].getElementsByClassName('curr_data')[0].innerHTML = transformArr(JSON.parse(curr_goods.getAttribute('all_inde_obj')))[i];
        inde_arr[i].getElementsByClassName('last_data')[0].innerHTML = transformArr(JSON.parse(curr_goods.getAttribute('last_all_inde_obj')))[i];
        //  console.log(inde_arr[i].getElementsByClassName('curr_data')[0].innerHTML)
        cre_tri(inde_arr[i], inde_arr[i].getElementsByClassName('curr_data')[0].innerHTML, inde_arr[i].getElementsByClassName('last_data')[0].innerHTML)

    }


    // initialed the rect  the default curr inde is the first sale.
    for (var j = 0; j < len; j++) {
        var triggle_width = transformArr(JSON.parse(list_goods_arr[j].getAttribute('all_inde_obj')))[0];
        $(list_goods_arr[j].getElementsByTagName('SPAN')).css('width', triggle_width.slice(0, 2) * 1.3).addClass('type_rect')
    }


    $('.inde').on('click', function (e) {
        var $curr_index = $(this).index('.inde');  // get the curr index in li arr ,the first is 0
        $(this).parent().find($('.active_box')).removeClass('active_box');
        $(this).addClass('active_box')

        $('.row_title').html($(this).attr('data-inde'))
        $('.sales_inde').find('a').html($(this).attr('data-inde'))
        for (var i = 0; i < list_goods_arr.length; i++) {
            var triggle_width = transformArr(JSON.parse(list_goods_arr[i].getAttribute('all_inde_obj')))[$curr_index];

            $(list_goods_arr[i].getElementsByTagName('SPAN')).css('width', triggle_width.slice(0, 2) * 1.3).addClass('type_rect')
        }
    })


}

/************************** slide toggle curr goods begin ************************************************/
function toggle_curr_goods() {

    var curr_goods = document.getElementsByClassName('curr_type_goods')[0],
        inde_arr = document.getElementsByClassName('inde');

    // the curr goods data has initialed
    for (var i = 0; i < inde_arr.length; i++) {
        inde_arr[i].getElementsByClassName('curr_data')[0].innerHTML = transformArr(JSON.parse(curr_goods.getAttribute('all_inde_obj')))[i];
        inde_arr[i].getElementsByClassName('last_data')[0].innerHTML = transformArr(JSON.parse(curr_goods.getAttribute('last_all_inde_obj')))[i];
    }
}
/************************** slide toggle curr goods  end  ********************************************/
/************************** show rect begin ************************************************/
function cre_tri(elem, curr_data, last_data) {
    //  console.log(Number(curr_data.split(",").join("")))
    //  console.log(Number(last_data.split(",").join("")))
    if (Number(curr_data.split(",").join("")) > Number(last_data.split(",").join(""))) {
        $(elem.getElementsByClassName('tringle')).addClass('red_tringle_top')
    } else {
        $(elem.getElementsByClassName('tringle')).addClass('red_tringle_bottom')
    }
}

function cre_rect(elem, elem_con) {
    /*
    this elem means the elem who contain a data of curr indecator
     */
    console.log(transformArr(JSON.parse(elem.getAttribute('all_inde_obj')))[0])
    var triggle_width = transformArr(JSON.parse(elem.getAttribute('all_inde_obj')))[0];
    $(elem.getElementsByClassName('type_rect')).addClass('type_rect').css('width', triggle_width + 'em')
}
/************************** show reat end   ************************************************/


/************************** the assist functions begin ****************************************/
function transformArr(obj) {
    var arr = [];
    for (var k in obj) {
        arr.push(obj[k])
    }
    return arr;
}

function bindInde(json_data, last_json_data) {
    var list_goods_arr = document.getElementsByClassName('list_goods');

    for (var i = 0; i < list_goods_arr.length; i++) {

        list_goods_arr[i].setAttribute('all_inde_obj', JSON.stringify(json_data[i]));
        list_goods_arr[i].setAttribute('last_all_inde_obj', JSON.stringify(last_json_data[i]));
        //   console.log(JSON.parse(list_goods_arr[i].getAttribute('all_inde_obj')))
    }
}

function trans_arr(arr) {
    var new_arr = [];
    for (var i = 0; i < arr.length; i++) {
        new_arr.push(Number(arr[i].split(",").join("")))
    }
    return new_arr
}

/************************ the assist functions end *****************************************/
/************************** sort list goods begin ************************************************/
var toggle_mark = false;
var show_mark = false;

function get_width() {
    var arr = [];
    for (var i = 0; i < document.getElementsByClassName('type_rect').length; i++) {
        console.log(parseInt(document.getElementsByClassName('show_width')[2].style.width))
        arr.push(parseInt(document.getElementsByClassName('type_rect')[i].style.width))
    }
    return arr;
}

function sort_by_mini(arr) {
    // arr means the contain val arr
    var temp;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

$('.sort_goods').on('click', sort_min_max)

$('.show_width').on('click', function () {
    var curr_width = parseInt(this.style.width);
    var show_width_arr = document.getElementsByClassName('show_width');

    if (show_mark === false) {
        show_mark = function () {
            for (var i = 0; i < show_width_arr.length; i++) {
                show_width_arr[i].style.width = 0
                show_width_arr[i].innerHTML = transformArr(JSON.parse(show_width_arr[i].parentNode.getAttribute('all_inde_obj')))[i]
            }
            return true;
        } ()
    } else {
        show_mark = function () {

            for (var i = 0; i < show_width_arr.length; i++) {
                show_width_arr[i].innerHTML = ""
                show_width_arr[i].style.width = transformArr(JSON.parse(show_width_arr[i].parentNode.getAttribute('all_inde_obj')))[i].slice(0, 2) * 1.3 + "px";
            }
            return false;
        } ()
    }
})

function sort_min_max() {
    console.log(toggle_mark)
    if (toggle_mark === false) {
        toggle_mark = sort_min()

    } else {
        toggle_mark = sort_max()
    }
}

// sort min
function sort_min() {
    var curr_inde_arr = get_width();
    console.log(curr_inde_arr)
    var new_sort_arr = sort_by_mini(curr_inde_arr);
    console.log(new_sort_arr)
    for (var i = 0; i < 6; i++) {
        document.getElementsByClassName('show_width')[i].style.width = 0 + 'px';
        document.getElementsByClassName('show_width')[i].style.width = new_sort_arr.shift() + 'px';
    }
    if ($('.sort_goods').hasClass('arrow_down')) {
        $('.sort_goods').removeClass('arrow_down').addClass('arrow_top')
        return true;
    }
}


// sort max
function sort_max() {
    var curr_inde_arr = get_width();
    console.log(curr_inde_arr)
    var new_sort_arr = sort_by_mini(curr_inde_arr);
    console.log(new_sort_arr.reverse())
    for (var i = 0; i < 6; i++) {
        document.getElementsByClassName('show_width')[i].style.width = 0 + 'px';
        document.getElementsByClassName('show_width')[i].style.width = new_sort_arr.shift() + 'px';
    }
    if ($('.sort_goods').hasClass('arrow_top')) {
        $('.sort_goods').removeClass('arrow_top').addClass('arrow_down')
        return false;
    }
}

// sort goods
/*function sort_goods(){
     var re_list_arr = document.getElementsByClassName('list_goods');
      var    len = document.getElementsByClassName('list_goods').length;
    console.log(re_list_arr)

     var $re_list = $('.list_goods');
     console.log($re_list[1])
   //  $('#scroll_list').remove();

      for(var i = 0 ; i < len; i++){
         $re_list[i].appendTo($('#scroll_list'))
      }
}*
/************************** sort list goods end   ************************************************/



/********************************** the dynamic parts  ************************************************/
var last_inde_arr = $('.indContainer');
var last_inde_arr_child = $('.indContainer').children();

//$('#main').on('dblclick',back_last)
function back_last() {
    console.log(last_inde_arr_child)
    var $main = $('#main');
    $main.appendTo('body')
    $('.indContainer').empty().append(last_inde_arr_child)
    console.log(toggle.choose_month)
    toggle.detail = false
    loop_val_month(toggle.choose_month)
    return toggle;

}


var toggle = {};
toggle.detail = false;
toggle.choose_month = "";
var curr_title = "";
$('.indContainer').on('dblclick', dynamic_part)
function dynamic_part() {
    if (toggle.detail === false) {


        var opt_arr = trans_arr(into_detail_page())
        $('.indContainer').empty();
        $('#main').css({
            'width': '100%',
            'height': '100%'
        })
        console.log(last_inde_arr)
        $('#main').appendTo($('.indContainer'))

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));


        myChart.on('mouseover', function (params) {
            console.log(params)
            if (params.componentType === 'series') {
                // 点击到了 markPoint 上
                $('.pla_title').remove()
                curr_title = params.seriesName + params.name + params.value;
                var $title = '<p class="pla_title">' + params.name + ":" + params.seriesName  + "是" + params.value + '</p>';
                $('body').append($title)
            }
            else if (params.componentType === 'series') {
                if (params.seriesType === 'graph') {
                    if (params.dataType === 'edge') {
                        // 点击到了 graph 的 edge（边）上。
                    }
                    else {
                        // 点击到了 graph 的 node（节点）上。
                    }
                }
            }

        });




        myChart.on('click', function (params) {
            console.log(params)
            if (params.componentType === 'series') {
                // 点击到了 markPoint 上
                toggle.choose_month = params.dataIndex;


            }
            else if (params.componentType === 'series') {
                if (params.seriesType === 'graph') {
                    if (params.dataType === 'edge') {
                        // 点击到了 graph 的 edge（边）上。
                    }
                    else {
                        // 点击到了 graph 的 node（节点）上。
                    }
                }
            }

        });

        // 指定图表的配置项和数据
        console.log(curr_title)
        var option = {
            title: {
                text: ""
            },
            tooltip: {},
            legend: {
                data: ["销量"] //into_detail_page().legend
            },
            xAxis: {
                data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: opt_arr
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        toggle.detail = true;
        return toggle;
    } else {
        toggle = back_last()
    }
}



/********************************** the dbclick into detail page start ***************************************/

var mock_data = {
    "种类一": {
        "一月": {
            "销售额": "111,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        },
        "二月": {
            "销售额": "222,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        },
        "三月": {
            "销售额": "333,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        }
    },

    "种类二": {
        "一月": {
            "销售额": "777,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        },
        "二月": {
            "销售额": "777,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        },
        "三月": {
            "销售额": "777,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        }
    },

    "种类三": {
        "一月": {
            "销售额": "777,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        },
        "二月": {
            "销售额": "777,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        },
        "三月": {
            "销售额": "777,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        }
    },
    "种类四": {
        "一月": {
            "销售额": "777,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        },
        "二月": {
            "销售额": "777,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        },
        "三月": {
            "销售额": "777,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        }
    },
    "种类五": {
        "一月": {
            "销售额": "777,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        },
        "二月": {
            "销售额": "777,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        },
        "三月": {
            "销售额": "777,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        }
    },
    "种类六": {
        "一月": {
            "销售额": "777,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        },
        "二月": {
            "销售额": "777,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        },
        "三月": {
            "销售额": "777,222,412",
            "销售额vs目标销售额": "624,123,845",
            "销售额vs去年销售额": "777,222,412",
            "销售额vs国内同类销售额": "624,123,845",
            "销售额vs国际同类销售额": "777,222,412",
            "销售额vs总处方数": "624,123,845",
            "page2_1": "624,123,845",
            "page2_2": "624,123,845"
        }
    }
};
var new_mock_arr = transformArr(mock_data)
function into_detail_page() {
    //  the default month is 2
    var curr_goods = document.getElementsByClassName('curr_type_goods')[0];
    var curr_in = document.getElementsByClassName('active_box')[0];
    var curr_inde = $(curr_in).attr('data-inde')
    var curr_push_arr = [];
    for (var i = 0; i < new_mock_arr.length; i++) {
        if (curr_goods.firstChild.nodeValue.trim() === Object.keys(mock_data)[i].trim()) { // 种类一 === 种类一 ?
            // now into the curr goods

            var curr_inde_in_month = transformArr(new_mock_arr[i]);
            console.log(curr_inde_in_month)
            var inde_arr_index = Object.keys(new_mock_arr[0]["一月"]).indexOf(curr_inde);
            for (var k in curr_inde_in_month) {
                curr_push_arr.push(transformArr(curr_inde_in_month[k])[inde_arr_index])

            }
        }
    }

    console.log(curr_push_arr)
    return curr_push_arr;
}


function loop_val_month(choose_month) {
    var inde_arr = document.getElementsByClassName('inde');
    var curr_goods = document.getElementsByClassName('curr_type_goods')[0];

    if (Object.keys(mock_data).indexOf(curr_goods.firstChild.nodeValue.trim()) !== -1) {
        var curr_index = Object.keys(mock_data).indexOf(curr_goods.firstChild.nodeValue.trim());
        var all_curr_data = transformArr(new_mock_arr[curr_index]);
        console.log(all_curr_data[2])
        for (var i = 0; i < inde_arr.length; i++) {
            inde_arr[i].getElementsByClassName('curr_data')[0].innerHTML = transformArr(all_curr_data[choose_month])[i]
            inde_arr[i].getElementsByClassName('last_data')[0].innerHTML = transformArr(all_curr_data[choose_month - 1])[i];
            //  console.log(inde_arr[i].getElementsByClassName('curr_data')[0].innerHTML)
            cre_tri(inde_arr[i], inde_arr[i].getElementsByClassName('curr_data')[0].innerHTML, inde_arr[i].getElementsByClassName('last_data')[0].innerHTML)
        }
    }


}
/********************************** the dbclick into detail page end   ***************************************/

/********************************** the dynamic parts end **********************************************/



/**********************************  toggle percentage data   start *********************************************/

var startX, startY, moveEndX, moveEndY, X, Y;
var $curr_per = false;
$("#wrapper").on("touchstart", function(e) {
    e.preventDefault();
    startX = e.originalEvent.changedTouches[0].pageX,
        startY = e.originalEvent.changedTouches[0].pageY;
});
$("#wrapper").on("touchmove", function(e) {
    e.preventDefault();
    moveEndX = e.originalEvent.changedTouches[0].pageX,
        moveEndY = e.originalEvent.changedTouches[0].pageY,
        X = moveEndX - startX,
        Y = moveEndY - startY;

    if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {

        $('.show_width').addClass('toggle_show_width');

        $curr_per = toggle_percent()
        setTimeout("$('.show_width').removeClass('toggle_show_width')",1000)
    }
    else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
     //   alert("right 2 left");
    }
    else if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
     //   alert("top 2 bottom");
    }
    else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
       // alert("bottom 2 top");
    }
    else{
      //  alert("just touch");
    }
});

function toggle_percent(){
    var all_inde = document.getElementsByClassName('inde');
    var len     = all_inde.length;
    function trans_num(str){
        // default string 777,222,333
    return  str = str.split(',').join('')
    }

    if($curr_per === false ) {
        for (var i = 0; i < len; i++) {
            var $curr_data = all_inde[i].getElementsByClassName('curr_data')[0].firstChild.nodeValue;
            var $last_data = all_inde[i].getElementsByClassName('last_data')[0];
            var $per_num = Number(String(trans_num($curr_data) / trans_num($last_data.firstChild.nodeValue)).slice(0, 5)) * 100 + "%";
            all_inde[i].setAttribute('last_data',$last_data.firstChild.nodeValue)
            $last_data.innerHTML = $per_num
            $($last_data).addClass('toggle_per_color')

        }
         return $curr_per = true;
    } else{
        for (var i = 0; i < len; i++) {
            var $last_data = all_inde[i].getElementsByClassName('last_data')[0];
            $last_data.innerHTML = all_inde[i].getAttribute('last_data')
            $($last_data).removeClass('toggle_per_color')
        }
            return $curr_per = false;
    }
}





/**********************************  toggle percentage data   end   *********************************************/
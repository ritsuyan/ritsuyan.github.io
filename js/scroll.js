/**
 * Created by Ritsu Yan on 2016/7/15.
 *   From RoamBi KPI
 *
 */

$(function () {
    init();
   /* click.inde() */
});

function  init(){

    var curr_jsondata= [
            {
                "inde_1" : "789,223,461",
                "inde_2": "624,123,845",
                "inde_3":"451,513,748",
                "inde_4":"451,513,748",
                "inde_5":"624,123,845",
                "inde_6":"789,223,461"
            },
            {
                "inde_1" : "633,223,461",
                "inde_2": "956,123,845",
                "inde_3":"751,513,748",
                "inde_4":"151,513,748",
                "inde_5":"224,123,845",
                "inde_6":"189,223,461"
            },
            {
                "inde_1" : "387,223,461",
                "inde_2": "224,123,845",
                "inde_3":"451,513,748",
                "inde_4":"751,513,748",
                "inde_5":"924,123,845",
                "inde_6":"189,223,461"
            },
            {
                "inde_1" : "186,223,461",
                "inde_2": "224,123,845",
                "inde_3":"251,513,748",
                "inde_4":"351,513,748",
                "inde_5":"524,123,845",
                "inde_6":"389,223,461"
            },
            {
                "inde_1" : "785,223,461",
                "inde_2": "624,123,845",
                "inde_3":"451,513,748",
                "inde_4":"451,513,748",
                "inde_5":"624,123,845",
                "inde_6":"789,223,461"
            },
            {
                "inde_1" : "784,223,461",
                "inde_2": "624,123,845",
                "inde_3":"451,513,748",
                "inde_4":"451,513,748",
                "inde_5":"624,123,845",
                "inde_6":"789,223,461"
            }
        ],
        last_josndata= [
            {
                "inde_1" : "489,223,461",
                "inde_2": "224,123,845",
                "inde_3":"651,513,748",
                "inde_4":"151,513,748",
                "inde_5":"624,123,845",
                "inde_6":"989,223,461"
            },
            {
                "inde_1" : "533,223,461",
                "inde_2": "666,123,845",
                "inde_3":"351,513,748",
                "inde_4":"251,513,748",
                "inde_5":"624,123,845",
                "inde_6":"189,223,461"
            },
            {
                "inde_1" : "487,223,461",
                "inde_2": "224,123,845",
                "inde_3":"651,513,748",
                "inde_4":"951,513,748",
                "inde_5":"724,123,845",
                "inde_6":"589,223,461"
            },
            {
                "inde_1" : "286,223,461",
                "inde_2": "724,123,845",
                "inde_3":"651,513,748",
                "inde_4":"751,513,748",
                "inde_5":"324,123,845",
                "inde_6":"189,223,461"
            },
            {
                "inde_1" : "285,223,461",
                "inde_2": "224,123,845",
                "inde_3":"451,513,748",
                "inde_4":"551,513,748",
                "inde_5":"424,123,845",
                "inde_6":"289,223,461"
            },
            {
                "inde_1" : "804,223,461",
                "inde_2": "604,123,845",
                "inde_3":"541,513,748",
                "inde_4":"351,513,748",
                "inde_5":"924,123,845",
                "inde_6":"989,223,461"
            }
        ],                                                                                                                                                              last_jsondata = [
            {
                "inde_1" : "589,223,466",
                "inde_2": "624,123,845",
                "inde_3":"451,513,748",
                "inde_4":"451,513,748",
                "inde_5":"624,123,845",
                "inde_6":"789,223,461"
            },
            {
                "inde_1" : "985,223,460",
                "inde_2": "624,123,845",
                "inde_3":"451,513,748",
                "inde_4":"451,513,748",
                "inde_5":"624,123,845",
                "inde_6":"789,223,461"
            },
            {
                "inde_1" : "985,223,460",
                "inde_2": "624,123,845",
                "inde_3":"451,513,748",
                "inde_4":"451,513,748",
                "inde_5":"624,123,845",
                "inde_6":"789,223,461"
            },
            {
                "inde_1" : "985,233,156",
                "inde_2": "624,123,845",
                "inde_3":"451,513,748",
                "inde_4":"451,513,748",
                "inde_5":"624,123,845",
                "inde_6":"789,223,461"
            },
            {
                "inde_1" : "233,223,464",
                "inde_2": "624,123,845",
                "inde_3":"451,513,748",
                "inde_4":"451,513,748",
                "inde_5":"624,123,845",
                "inde_6":"789,223,461"
            },
            {
                "inde_1" : "600,223,466",
                "inde_2": "624,123,845",
                "inde_3":"451,513,748",
                "inde_4":"451,513,748",
                "inde_5":"624,123,845",
                "inde_6":"789,223,461"
            }
        ],
        list_goods_arr = document.getElementsByClassName('list_goods'),
        len = list_goods_arr.length,
        inde_arr = document.getElementsByClassName('inde');

    bindInde(curr_jsondata,last_jsondata);

    var curr_goods = document.getElementsByClassName('curr_type_goods')[0];

   // the curr goods data & last goods data has initialed
    for(var i = 0; i < inde_arr.length; i++){
       inde_arr[i].getElementsByClassName('curr_data')[0].innerHTML = transformArr(JSON.parse(curr_goods.getAttribute('all_inde_obj')))[i];
        inde_arr[i].getElementsByClassName('last_data')[0].innerHTML = transformArr(JSON.parse(curr_goods.getAttribute('last_all_inde_obj')))[i];
        console.log(inde_arr[i].getElementsByClassName('curr_data')[0].innerHTML)
        cre_tri(inde_arr[i], inde_arr[i].getElementsByClassName('curr_data')[0].innerHTML,inde_arr[i].getElementsByClassName('last_data')[0].innerHTML)

    }


   // initialed the rect  the default curr inde is the first sale.
    for(var j = 0; j < len; j++){
        var triggle_width = transformArr(JSON.parse(list_goods_arr[j].getAttribute('all_inde_obj')))[0];
        $(list_goods_arr[j].getElementsByTagName('SPAN')).css('width',triggle_width.slice(0,2)*1.3).addClass('type_rect')
    }


    $('.inde').on('click', function (e) {
        var $curr_index = $(this).index('.inde');  // get the curr index in li arr ,the first is 0
        $(this).parent().find($('.active_box')).removeClass('active_box');
        $(this).addClass('active_box')
        $('.row_title').html($(this).attr('data-inde'))
        $('.sales_inde').find('a').html($(this).attr('data-inde'))
        for(var i = 0; i < list_goods_arr.length; i++){
            var triggle_width =  transformArr(JSON.parse(list_goods_arr[i].getAttribute('all_inde_obj')))[$curr_index];
            console.log(triggle_width)
             $(list_goods_arr[i].getElementsByTagName('SPAN')).css('width',triggle_width.slice(0,2)*1.3).addClass('type_rect')
        }
    })

}

    /************************** slide toggle curr goods begin ************************************************/
     function toggle_curr_goods(){

        var curr_goods = document.getElementsByClassName('curr_type_goods')[0],
            inde_arr = document.getElementsByClassName('inde');

        // the curr goods data has initialed
        for(var i = 0; i < inde_arr.length; i++){
            inde_arr[i].getElementsByClassName('curr_data')[0].innerHTML = transformArr(JSON.parse(curr_goods.getAttribute('all_inde_obj')))[i];
            inde_arr[i].getElementsByClassName('last_data')[0].innerHTML = transformArr(JSON.parse(curr_goods.getAttribute('last_all_inde_obj')))[i];
        }
    }
    /************************** slide toggle curr goods  end  ********************************************/



    /*************************  click     inde    start      *******************************************/

function deal_click(list_arr){
    var $curr_index = $(this).index();  // get the curr index in li arr ,the first is 0
        console.log($curr_index)
    for(var i = 0; i < list_arr.length; i++){
        var triggle_width =  transformArr(JSON.parse(list_arr[i].getAttribute('all_inde_obj')))[$curr_index];
        console.log(triggle_width)
       // $(list_arr[i].getElementsByTagName('SPAN')).css('width',triggle_width.slice(0,2)*1.3).addClass('type_rect')
    }
}

    /************************* click      inde    end      *****************************************/




/************************** show rect begin ************************************************/
function cre_tri(elem,curr_data,last_data){
    console.log(Number(curr_data.split(",").join("")))
    console.log(Number(last_data.split(",").join("")))
      if(Number(curr_data.split(",").join("")) > Number(last_data.split(",").join("")) ){
        $(elem.getElementsByClassName('tringle')).addClass('red_tringle_top')
      } else{
          $(elem.getElementsByClassName('tringle')).addClass('red_tringle_bottom')
      }
}
/************************** show reat end   ************************************************/




  /************************** show rect begin ************************************************/
   function cre_rect(elem,elem_con){
      /*
      this elem means the elem who contain a data of curr indecator
       */

      console.log(transformArr(JSON.parse(elem.getAttribute('all_inde_obj')))[0])
      var triggle_width = transformArr(JSON.parse(elem.getAttribute('all_inde_obj')))[0];
     $(elem.getElementsByClassName('type_rect')).addClass('type_rect').css('width',triggle_width + 'em')
  }
  /************************** show reat end   ************************************************/


  /************************** the assist functions begin ****************************************/
  function transformArr(obj){
      var arr = [];
      for(var k in obj){
          arr.push(obj[k])
      }
      return arr;
  }

  function bindInde(json_data,last_json_data){
      var list_goods_arr = document.getElementsByClassName('list_goods');

        for(var i = 0 ; i < list_goods_arr.length; i++){

             list_goods_arr[i].setAttribute('all_inde_obj',JSON.stringify(json_data[i]));
            list_goods_arr[i].setAttribute('last_all_inde_obj',JSON.stringify(last_json_data[i]));
          //   console.log(JSON.parse(list_goods_arr[i].getAttribute('all_inde_obj')))
        }
  }

   /************************ the assist functions end *****************************************/
/**
 * Created by RitsuYan on 2016/7/13.
 */
/*
*
*      TODO 1  controll the list every scroll must move specified distance
*      TODO 2  check the curr elem li after every scroll
*      TODO 3  get all json data into each goods
*      TODO 4  get curr goods which in the specified position
*      TODO 5
*
*
* */
var jsondata= [
    {
        "name" : "a",
        "sales": "$1500",
        "last_year":"20",
        "profit":"20%",
        "num":"12450",
        "ace":"1"
    },
    {
        "name" : "b",
        "sales": "$2500",
        "last_year":"20",
        "profit":"20%",
        "num":"12450",
        "ace":"1"
    },
    {
        "name" : "c",
        "sales": "$3500",
        "last_year":"20",
        "profit":"20%",
        "num":"12450",
        "ace":"1"
    },
    {
        "name" : "d",
        "sales": "$4500",
        "last_year":"20",
        "profit":"20%",
        "num":"12450",
        "ace":"1"
    },
    {
        "name" : "e",
        "sales": "$5500",
        "last_year":"20",
        "profit":"20%",
        "num":"12450",
        "ace":"1"
    },
    {
        "name" : "f",
        "sales": "$6500",
        "last_year":"20",
        "profit":"20%",
        "num":"12450",
        "ace":"1"
    },
    {
        "name" : "g",
        "sales": "$7500",
        "last_year":"20",
        "profit":"20%",
        "num":"12450",
        "ace":"1"
    },
    {
        "name" : "h",
        "sales": "$8500",
        "last_year":"20",
        "profit":"20%",
        "num":"12450",
        "ace":"1"
    },
    {
        "name" : "i",
        "sales": "$9500",
        "last_year":"20",
        "profit":"20%",
        "num":"12450",
        "ace":"1"
    },
    {
        "name" : "j",
        "sales": "$100500",
        "last_year":"20",
        "profit":"20%",
        "num":"12450",
        "ace":"1"
    }
];

$(function () {
    init()
})

function  init(){
   get_json()
}



function get_json(){
    var li_arr = document.getElementById('scroller').getElementsByTagName('li');
       console.log(li_arr)
    var $obj_arr = [];
    $.each(jsondata, function (i,n) {
            // the obj
           /* var $html = document.createElement('div');
                $html.className = 'obj_data';
                $html.innerHTML = n;*/
     $obj_arr.push(n)
    //ok now insert a obj for every li
        })

    // li_arr are the DOM obj
    var li_arr = document.getElementById('scroller').getElementsByTagName('li'),
        len = li_arr.length,
        inde_arr = document.getElementsByClassName('inde'),
        fir_li = li_arr[1].offsetTop,
        rangeHeight = li_arr[1].style.height;


    function show_curr_data(){
        for(var i = 0; i < len ; i++){
            if(li_arr[i].offsetTop == fir_li){
                /*
                 *       {
                 "name" : "c",
                 "sales": "$3500",
                 "last_year":"20",
                 "profit":"20%",
                 "num":"12450",
                 "ace":"1"
                 }
                 *
                 * */
                var   $curr_data  =  transformArr($obj_arr[i]);
                console.log($curr_data)
                 $.each(inde_arr, function (i, n) {
                  var $html = document.createElement('a');
                     $html.innerHTML = $curr_data[i];
                 n.appendChild($html)

                 })

            }
        }

    }

}

function transformArr(obj){
      var arr = [];
     for(var k in obj){
          arr.push(obj[k])
     }
    return arr;
}

/* it is unuseful to work in other js */
function testModule(){
     alert(23333)
}



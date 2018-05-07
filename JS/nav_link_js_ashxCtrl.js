 /*!
 * nav_link_js_cssCtrl
 * 多级菜单 ashx交互和点击事件
 */
///ashx json格式{"datas": [{"NAME": "1","ID": "1"}]}
///***********所用参数列表***********///
function NavParameterList() {

    var level1_id="";
    var level2_id=""; 
    var level3_id="";     
    var level4_id=""; 
    var level5_id=""; 
    var level6_id=""; 
    
    var level1_name="";
    var level2_name="";
    var level3_name="";
    var level4_name="";
    var level5_name="";
    var level6_name="";
    
    
    var nav_firstenter = 0;//首次加载标识 自动触发click至最后一项tab后 为1
}

///***********外部调用***********///
function NavGetClick(NGC) {
    switch (NGC) {
        case "NGC1": $.GetLevel1_Click();
            break;           
        case "NGC2": $.GetLevel2_Click();
            break;                    
        case "NGC3": $.GetLevel3_Click();
            break;                    
        case "NGC4": $.GetLevel4_Click();
            break;                    
        case "NGC5": $.GetLevel5_Click();
            break;                    
        case "NGC6": $.GetLevel6_Click();    
            break;
    }
}
$.extend({
    'GetLevel1_Click': function () {
        debugger
    },
    'GetLevel2_Click': function () {
        debugger
    },
    'GetLevel3_Click': function () {
        debugger
    },
    'GetLevel4_Click': function () {
        debugger
    },
    'GetLevel5_Click': function () {
        debugger
    },
    'GetLevel6_Click': function () {
        debugger
    }
})
 ///***********level1_GetData***********///
 function GetLevel1(ashx_url) {
     
     $.get(ashx_url, function (data) {
         var level1_list = [];
         
        if (data.datas.length > 0) {
            for (var i = 0; i < data.datas.length; i++) {
                level1_list.push('<span class="level1_span"> <a  name="' + data.datas[i].NAME + '" value="' + data.datas[i].ID + '" >' + data.datas[i].NAME + '</a></span>');
            }
        }
        $("#level1_ul li").html(level1_list.join(''));

        $("#level1_ul li span a").on('click', function () {
            $("#level1_ul li span a").removeClass("on");
            $(this).addClass("on");
            level1_id = $(this).attr('value');
            level1_name = $(this).attr('name');
            NavName("level1_tab", level1_name);

            NavGetClick("NGC1");
            
        });
        if (nav_firstenter == 0) {
            $("#level1_ul li span a").first().click();
        }

    })
}///***********level2_GetData***********///
function GetLevel2(ashx_url) {
    $.getJSON(ashx_url, function (data) {
        var level2_list = [];
        if (data.datas.length > 0) {
            for (var i = 0; i < data.datas.length; i++) {
                level2_list.push('<span class="level2_span"> <a  name="' + data.datas[i].NAME + '" value="' + data.datas[i].ID + '" >' + data.datas[i].NAME + '</a></span>');
            }
        }
        
        $("#level2_ul li").html(level2_list.join(''));
        $("#level2_ul li span a").on('click', function () {
            $("#level2_ul li span a").removeClass("on");
            $(this).addClass("on");
            level2_id = $(this).attr('value');
            level2_name = $(this).attr('name');
            NavName("level2_tab", level2_name);

            NavGetClick("NGC2");
        });
        if (nav_firstenter == 0) {
            $("#level2_ul li span a").first().click();
        }
    })
}
 ///***********level3_GetData***********///
function GetLevel3(ashx_url) {
    
    $.get(ashx_url, function (data) {
        var level3_list = [];
        if (data.datas.length > 0) {
            for (var i = 0; i < data.datas.length; i++) {
                level3_list.push('<span class="level3_span"><a name="' + data.datas[i].NAME + '" value="' + data.datas[i].ID + '" >' + data.datas[i].NAME + '</a></span>');
            }
        }
        
        $("#level3_ul li").html(level3_list.join(''));
        $('#level3_ul li span a').on('click', function () {
            $("#level3_ul li span a").removeClass("on");
            $(this).addClass("on");
            level3_id = $(this).attr('value');
            level3_name = $(this).attr('name');
            NavName("level3_tab", level3_name);
            
            NavGetClick("NGC3");
           
        });
        if (nav_firstenter == 0) {
            $("#level3_ul li span a").first().click();
        }

    });
}
 
///***********level4_GetData***********///
function GetLevel4(ashx_url) {
   
    $.get(ashx_url, function (data) {
        var level4_list = [];
        if (data.datas.length > 0) {
            for (var i = 0; i < data.datas.length; i++) {
                level4_list.push('<span class="level5_span"><a name="' + data.datas[i].NAME + '" value="' + data.datas[i].ID + '" >' + data.datas[i].NAME + '</a></span>');
            }
        }
        
        $("#level4_ul li").html(level4_list.join(""));
        $('#level4_ul li span a').on('click', function () {
            $("#level4_ul li span a").removeClass("on");
            $(this).addClass("on");
            level4_id = $(this).attr('value');
            level4_name = $(this).text();
            NavName("level4_tab", level4_name);
            
            NavGetClick("NGC4");

        });
        if (nav_firstenter == 0) {
            $("#level4_ul li span a").first().click();
        }

    })
}
///***********level5_GetData***********///
function GetLevel5(ashx_url) {
    $.get(ashx_url, function (data) {
        var level5_list = []       
        if (data.datas.length > 0) {
            for (var i = 0; i < data.datas.length; i++) {
                level5_list.push('<span class="level5_span"><a name="' + data.datas[i].NAME + '" value="' + data.datas[i].ID + '" >' + data.datas[i].NAME + '</a></span>');
            }
        }
        
        $("#level5_ul li").html(level5_list.join(""));
        $('#level5_ul li span a').on('click', function () {
            $("#level5_ul li span a").removeClass("on");
            $(this).addClass("on");
            level5_id = $(this).attr('value');
            level5_name = $(this).text();
            NavName("level5_tab", level5_name);

            NavGetClick("NGC5");
        });
        if (nav_firstenter == 0) {
            $("#level5_ul li span a").first().click();
        }
        
        
    })
}
///***********level6_GetData***********///
function GetLevel6(ashx_url) {
    $.get(ashx_url, function (data) {
        var level6_list = []
        for (var i = 0; i < data.datas.length; i++) {
            level6_list.push('<span class="level6_span"><a name="' + data.datas[i].NAME + '" value="' + data.datas[i].ID + '" >' + data.datas[i].NAME + '</a></span>');
        }
        
        $("#level6_ul li").html(level6_list.join(""));
        $('#level6_ul li span a').on('click', function () {
            $("#level6_ul li span a").removeClass("on");
            $(this).addClass("on");
            level6_id = $(this).attr('value');
            level6_name = $(this).text();
            NavName("level6_tab", level6_name);

            NavGetClick("NGC6");
        });
        if (nav_firstenter == 0) {
            $("#level6_ul li span a").first().click();
        }
        
    });
}
/*!
 * nav_link_js_cssCtrl
 * 多级菜单 样式动态控制
 */

///***********模块切换***********///
function TabChange(name_tab) {
    switch (name_tab) {
        case "level1_tab":
            $("#level1_tab").addClass("current");
            $("#level2_tab").removeClass("current");
            $("#level3_tab").removeClass("current");
            $("#level4_tab").removeClass("current");
            $("#level5_tab").removeClass("current");
            $("#level6_tab").removeClass("current");
           


            $("#level1_ul").addClass("active");
            $("#level2_ul").removeClass("active");
            $("#level3_ul").removeClass("active");
            $("#level4_ul").removeClass("active");
            $("#level5_ul").removeClass("active");
            $("#level6_ul").removeClass("active");
           

            break;
        case "level2_tab":
            $("#level1_tab").removeClass("current");
            $("#level2_tab").addClass("current");
            $("#level3_tab").removeClass("current");
            $("#level4_tab").removeClass("current");
            $("#level5_tab").removeClass("current");
            $("#level6_tab").removeClass("current");
            


            $("#level1_ul").removeClass("active");
            $("#level2_ul").addClass("active");
            $("#level3_ul").removeClass("active");
            $("#level4_ul").removeClass("active");
            $("#level5_ul").removeClass("active");
            $("#level6_ul").removeClass("active");
           

            break;
        case "level3_tab":
            $("#level1_tab").removeClass("current");
            $("#level2_tab").removeClass("current");
            $("#level3_tab").addClass("current");
            $("#level4_tab").removeClass("current");
            $("#level5_tab").removeClass("current");
            $("#level6_tab").removeClass("current");
           

            $("#level1_ul").removeClass("active");
            $("#level2_ul").removeClass("active");
            $("#level3_ul").addClass("active");
            $("#level4_ul").removeClass("active");
            $("#level5_ul").removeClass("active");
            $("#level6_ul").removeClass("active");
           

            break;
        case "level4_tab":
            $("#level1_tab").removeClass("current");
            $("#level2_tab").removeClass("current");
            $("#level3_tab").removeClass("current");
            $("#level4_tab").addClass("current");
            $("#level5_tab").removeClass("current");
            $("#level6_tab").removeClass("current");
           

            $("#level1_ul").removeClass("active");
            $("#level2_ul").removeClass("active");
            $("#level3_ul").removeClass("active");
            $("#level4_ul").addClass("active");
            $("#level5_ul").removeClass("active");
            $("#level6_ul").removeClass("active");
            

            break;
        case "level5_tab":
            $("#level1_tab").removeClass("current");
            $("#level2_tab").removeClass("current");
            $("#level3_tab").removeClass("current");
            $("#level4_tab").removeClass("current");
            $("#level5_tab").addClass("current");
            $("#level6_tab").removeClass("current");
            


            $("#level1_ul").removeClass("active");
            $("#level2_ul").removeClass("active");
            $("#level3_ul").removeClass("active");
            $("#level4_ul").removeClass("active");
            $("#level5_ul").addClass("active");
            $("#level6_ul").removeClass("active");
           

            break;
        case "level6_tab":
            $("#level1_tab").removeClass("current");
            $("#level2_tab").removeClass("current");
            $("#level3_tab").removeClass("current");
            $("#level4_tab").removeClass("current");
            $("#level5_tab").removeClass("current");
            $("#level6_tab").addClass("current");
           


            $("#level1_ul").removeClass("active");
            $("#level2_ul").removeClass("active");
            $("#level3_ul").removeClass("active");
            $("#level4_ul").removeClass("active");
            $("#level5_ul").removeClass("active");
            $("#level6_ul").addClass("active");
            

            break;
      
        default:
        break;
    }
}

///***********模块隐藏***********///
function TabHide(name_tab){
    switch(name_tab){
        case "level1_tab":
            $("#level1_nav").css("display","none");
            $("#level1_tab").css("display","none");
            $("#level1_ul").css("display","none");
            break;
        case "level2_tab":
            $("#level2_nav").css("display","none");
            $("#level2_tab").css("display","none");
            $("#level2_ul").css("display","none");
            break;
        case "level3_tab":
            $("#level3_nav").css("display","none");
            $("#level3_tab").css("display","none");
            $("#level3_ul").css("display","none");
            break;
        case "level4_tab":
            $("#level4_nav").css("display","none");
            $("#level4_tab").css("display","none");
            $("#level4_ul").css("display","none");
            break;
        case "level5_tab":
            $("#level5_nav").css("display","none");
            $("#level5_tab").css("display","none");
            $("#level5_ul").css("display","none");
            break;
        case "level6_tab":
            $("#level6_nav").css("display","none");
            $("#level6_tab").css("display","none");
            $("#level6_ul").css("display","none");
            break;
       
        default:
            break;
    }

}
///***********模块显示***********///
function TabShow(name_tab){
    switch(name_tab){
        case "level1_tab":
            $("#level1_nav").css("display","block");
            $("#level1_tab").css("display","block");
            $("#level1_ul").css("display","block");
            break;
        case "level2_tab":
            $("#level2_nav").css("display","block");
            $("#level2_tab").css("display","block");
            $("#level2_ul").css("display","block");
            break;
        case "level3_tab":
            $("#level3_nav").css("display","block");
            $("#level3_tab").css("display","block");
            $("#level3_ul").css("display","block");
            break;
        case "level4_tab":
            $("#level4_nav").css("display","block");
            $("#level4_tab").css("display","block");
            $("#level4_ul").css("display","block");
            break;
        case "level5_tab":
            $("#level5_nav").css("display","block");
            $("#level5_tab").css("display","block");
            $("#level5_ul").css("display","block");
            break;
        case "level6_tab":
            $("#level6_nav").css("display","block");
            $("#level6_tab").css("display","block");
            $("#level6_ul").css("display","block");
            break;
       
        default:
            break;
    }
}
///***********设置nac当前选择***********///
function NavName(name_tab,name_nav_set_text){
    switch(name_tab){
        case "level1_tab":
            $("#level1_nav").text(name_nav_set_text);
            break;
        case "level2_tab":
            $("#level2_nav").text(name_nav_set_text);
            break;
        case "level3_tab":
            $("#level3_nav").text(name_nav_set_text);
            break;
        case "level4_tab":
            $("#level4_nav").text(name_nav_set_text);
            break;
        case "level5_tab":
            $("#level5_nav").text(name_nav_set_text);
            break;
        case "level6_tab":
            $("#level6_nav").text(name_nav_set_text);
            break;
       
        default:
            break;
    }
}
///***********清空nav当前选择***********///
function NavNameEmpty(name_tab) {
    switch (name_tab) {
        case "level1_tab":
            $("#level1_nav").text("");
            break;
        case "level2_tab":
            $("#level2_nav").text("");
            break;
        case "level3_tab":
            $("#level3_nav").text("");
            break;
        case "level4_tab":
            $("#level4_nav").text("");
            break;
        case "level5_tab":
            $("#level5_nav").text("");
            break;
        case "level6_tab":
            $("#level6_nav").text("");
            break;
      
        default:
            break;
    }
}
///***********总体打开/关闭***********///
function ShowNav(change_mark) {
    // change_mark=1 打开  change_mark=0 关闭
    if ($("#select_all").css("display") == "none" && change_mark == 1) {
            $("#select_all").css("display", "block");//tab open
            $("#select_tip ").addClass("active");//nav ↓
    }
    else if ($("#select_all").css("display") == "block" && change_mark == 0) {
            $("#select_all").css("display", "none");//tab close
            $("#select_tip").removeClass("active");//nav ↑
    }
}
///***********top_path_b控制↑↓ 打开/关闭***********///
function showNav2() {
    var change_mark = $("#top_path_b").attr('value');

    if (change_mark == "open") {
        $("#select_all").css("display", "block");
        $("#select_tip ").addClass("active");
        $("#top_path_b").val("close");
    }
    else if (change_mark == "close") {
        $("#select_all").css("display", "none");
        $("#select_tip").removeClass("active");
        $("#top_path_b").val("open");
    }
}

$.extend({
    'SetNavLink':function () {
        var str = '';
            str+='<dl><dt ><span id="selectPath"></span></dt>';
            str += '<dd class="clearfix">';
            str += '<div id="sncity" class="l">';
            str += '<div id="select_tip" class="ui-city ">';
            str += '<span id="top_path" >';
            str += '<a name="item_none_dizhi_01" href="###" class="ui-city-toggle" >';
            str += '<em class="address-placement">';
            str += '<span id="level1_nav" class="pr select_path" onclick="TabChange(\'level1_tab\')  ;ShowNav(1)" >nav1</span>';
            str += '<span id="level2_nav" class="pr select_path" onclick="TabChange(\'level2_tab\')  ;ShowNav(1)">nav2</span>';
            str += '<span id="level3_nav" class="pr select_path" onclick="TabChange(\'level3_tab\')   ;ShowNav(1)">nav3</span>';
            str += '<span id="level4_nav" class="pr select_path" onclick="TabChange(\'level4_tab\')  ;ShowNav(1)">nav4</span>';
            str += '<span id="level5_nav" class="pr select_path" onclick="TabChange(\'level5_tab\')   ;ShowNav(1)" >nav5</span>';
            str += '<span id="level6_nav" class="pr select_path" onclick="TabChange(\'level6_tab\')     ;ShowNav(1)">nav6</span>';
            str += '</em>';
            str += '<b id="top_path_b" class="arr" onclick="showNav2()" value="open"  ></b>';
            str += '</a>';
            str += '</span>';
            str += '<div id="select_all" class="ui-city-group"><a id="item_none_dizhi_guanbi" name="item_none_dizhi_guanbi" class="ui-city-close" href="###" onclick= " ShowNav(0)" > <i>&gt;</i> <i>&lt;</i></a > ';
            str += '<div class="ui-city-group-content" >';
            str += '<ul class="nav-tabs clearfix" style="border-bottom: 0px solid #ddd;margin-bottom: 0px;">';
            str += '<li id="level1_tab" class="active" onclick="TabChange(\'level1_tab\')"><p><a href="###">tab1</a><b class="arr"></b></p></li>';
            str += '<li id="level2_tab" class="active" onclick="TabChange(\'level2_tab\')"><p><a href="###">tab2</a><b class="arr"></b></p></li>';
            str += '<li id="level3_tab" class="active" onclick="TabChange(\'level3_tab\')"><p><a href="###">tab3</a><b class="arr"></b></p></li>';
            str += '<li id="level4_tab" class="active " onclick="TabChange(\'level4_tab\')"><p><a href="###">tab4</a><b class="arr"></b></p></li>';
            str += '<li id="level5_tab" class="active " onclick="TabChange(\'level5_tab\')"><p><a href="###">tab5</a><b class="arr"></b></p></li>';
            str += '<li id="level6_tab" class="active" onclick="TabChange(\'level6_tab\')"><p><a href=\"###\">tab6</a><b class=\"arr\"></b></p></li>';
            str += '</ul>';
            str += '<div class="tab-content">';
            str += '<ul id="level1_ul" class="tab-panel pr-panel"><li></li></ul>';
            str += '<ul id="level2_ul" class="tab-panel ct-panel"><li></li></ul>';
            str += '<ul id="level3_ul" class="tab-panel ds-panel"><li></li></ul>';
            str += '<ul id="level4_ul" class="tab-panel ds-panel"><li></li></ul>';
            str += '<ul id="level5_ul" class="tab-panel ds-panel"><li></li></ul>';
            str += '<ul id="level6_ul" class="tab-panel ds-panel"><li></li></ul>';
            str += '</div>';
            str += '</div>';
            str += '</div>';
            str += '</div>';
            str += '</div>';
            str += '</dd >';
            str += '</dl >';
 $("#nav_link_div").html(str);
    }
});
/*
 * Contributed by Rahul Jhaveri on 26/04/17.
 * JhavTech Studios Pty Ltd (2017)
 * http://www.jhavtech.com.au
 * Edited by Brax 2023.
 */

var starValue1 = 12;
var starValue2 = 75;
var starValue3 = 80;
var starValue4 = 90;
var vid;
var marketId;
var temp1;
var temp2;
var temp3;
var temp4;
var resultStatus = 0;
var divTop = 0;
var divcount = 0;
var blurflag = null;
var randomValue = [1, 2, 3, 4];
var resultStockValue = 0;
var click = {};
var click1 = {};
var finalCash = 0;
var marketValue = null;
var fizzerStatus = null;
var startScreenArray = [];
var fizzerBuyScreenArray = [];
var resultScreenArray = [];
var marketNameArray = [];
var scrollbars;
var globalMarketStatus = 20;
var marketModalArrayId = [];
var introIdArray = [];
var marketIdArray = [];
var wantedDivArray = ["market1", "market2", "market3", "market4", "market5", "market6", "market7", "market8", "market9", "market10", "market11", "market12", "market13", "market14", "market15", "gs_fish_stock1", "gs_fish_history1", "gs_fish_stock2", "gs_fish_history2", "gs_fish_stock3", "gs_fish_history3", "gs_fish_stock4",
    "gs_fish_history4", "gs_fish_stock5", "gs_fish_history5", "gs_fish_stock6", "gs_fish_history6", "gs_fish_stock7", "gs_fish_history7", "gs_fish_stock8", "gs_fish_history8", "gs_fish_stock9", "gs_fish_history9", "gs_fish_stock10", "gs_fish_history10", "gs_fish_stock11", "gs_fish_history11", "gs_fish_stock12", "gs_fish_history12", "gs_fish_stock13", "gs_fish_history13", "gs_fish_stock14", "gs_fish_history14", "gs_fish_stock15", "gs_fish_history15", "gs_trans_dialog_fish_close_btn"
];
var fishName;
var fishTop = 10;
var dataValueArray = [];
var dragedId;
var stockCounter = 0;
var index = 0;
var cash = 600;
var width0 = 20;
var fishCost;
var gameScreenArray = ["gs_brief_1_container", "gs_role_1_container", "gs_start_again"];
var historyCount = 0;
var arrayIntroTab = ["intro_next", "intro_start", "intro_back"];
var marketCountArray = [];
var success;
var fishNames = ["Fizzer", "BluePuff", "FabulousFin", "Goggleye", "HairyCarp", "JumperCarp", "MutantMud", "RazorCod",
    "Sawtooth", "Scarper", "Superfish", "Vacuumer", "Vamper", "Wobbler"
];
var displayFizzer = false;
var fizzerFlag = "false";
var timer;
var audioCorrectLoad;
var audioWrongLoad;


$(".gs_history_class").mouseenter(function () {

    $("#" + $(this).children()[0].id).removeAttr("style");

});

$(document).on("click", function () {
    $(".removeclone").remove();
});
var gs_tab_binder = function (element) {
    $('#' + element).off("focus blur keydown mousedown").on("focus blur keydown mousedown", function (event) {

        if (event.type == 'focus') {

            $(this).addClass('focus-div');
        }

        if (event.type == 'mousedown') {
            event.stopPropagation();
            event.preventDefault();
            $(this).trigger("blur");

        }

        if (event.type == 'blur') {

            $(this).removeClass('focus-div');


        }
        if (event.type == "keydown") {
            event.preventDefault();
            event.stopPropagation();
            if (event.keyCode == 9 && !event.shiftKey) {
                var marketDisplayFlag = false;
                for (var init = 0; init < marketIdArray.length; init++) {
                    if ($('#' + 'gs_market_modal' + init).css('display') == 'block') {
                        marketDisplayFlag = true;
                    }
                }

                if (event.target.id == "gs_brief_close") {
                    document.getElementById(event.target.id).focus();
                    return;
                } else if (event.target.id == "gs_role_close") {
                    document.getElementById(event.target.id).focus();
                    return;
                }

                if ($('#gs_brief_overlay').css('display') == 'block' ||
                    $('#gs_role_overlay').css('display') == 'block' ||
                    $('#gs_startagain_overlay').css('display') == 'block' || marketDisplayFlag ||
                    $('#gs_market_char_info_overlay').css('display') == 'block') {

                    $('#' + document.activeElement.id).removeClass("focus-div").css("outline", "none");
                } else {
                    var index = gameScreenArray.indexOf(this.id);
                    if (index == gameScreenArray.length - 1) {
                        document.getElementById(gameScreenArray[0]).focus();
                    } else if ($('#' + gameScreenArray[index + 1]).css('display') == "none") {

                        for (var init = index + 1; init < gameScreenArray.length; init++) {
                            if ($('#' + gameScreenArray[init]).css('display') == "block") {

                                index = init;
                                document.getElementById(gameScreenArray[index]).focus();
                                break;
                            } else {
                                document.getElementById(gameScreenArray[0]).focus();
                            }
                        }

                    } else {
                        document.getElementById(gameScreenArray[index + 1]).focus();
                    }
                }


            }
            if ((event.shiftKey && event.keyCode == 9)) {
                event.preventDefault();
                var marketDisplayFlag = false;
                for (var init = 0; init < marketIdArray.length; init++) {
                    if ($('#' + 'gs_market_modal' + init).css('display') == 'block') {
                        marketDisplayFlag = true;
                    }
                }
                if (event.target.id == "gs_brief_close") {
                    document.getElementById(event.target.id).focus();
                    return;
                } else if (event.target.id == "gs_role_close") {
                    document.getElementById(event.target.id).focus();
                    return;
                }

                if ($('#gs_brief_overlay').css('display') == 'block' ||
                    $('#gs_role_overlay').css('display') == 'block' ||
                    $('#gs_startagain_overlay').css('display') == 'block' || marketDisplayFlag ||
                    $('#gs_market_char_info_overlay').css('display') == 'block') {
                    $('#' + document.activeElement.id).removeClass("focus-div").css("outline", "none");
                } else {
                    var index = gameScreenArray.indexOf(this.id);

                    for (var i = index - 1; i >= 0; i--) {
                        var tabCondition = ( ( ( $("#" + gameScreenArray[i]).css("display") == "none" ) ) );
                        if (tabCondition) {
                            index--;
                        } else {
                            index = i;
                            break;
                        }
                    }

                    if (document.activeElement.id == gameScreenArray[0]) {
                        for (var i = gameScreenArray.length - 1; i >= 0; i--) {
                            var tabCondition = ( ( ( $("#" + gameScreenArray[i]).css("display") == "none" ) ) );
                            if (!tabCondition) {
                                index = i;
                                break;
                            }
                        }
                    }
                    $('#' + gameScreenArray[index]).focus();
                }
            }
            if (event.keyCode == 13) {
                $('#' + document.activeElement.id).removeClass("focus-div").css("outline", "none");
                if (event.target.id.indexOf("market") > -1) {
                    gsMarketClassFunction(event.target.id);
                    marketId = event.target.id;

                    var index1 = marketIdArray.indexOf(event.target.id);
                    $("#market" + parseInt(index1 + 1)).focus();
                } else if (event.target.id == "gs_brief_close") {

                    myBriefCloseFunction();
                    $('#gs_brief_1_container').focus();
                } else if (event.target.id == "gs_brief_1_container") {
                    myBriefFunction();
                    $('#gs_brief_close').focus();
                } else if (event.target.id == "gs_role_close") {
                    myRoleCloseFunction();
                    $('#gs_role_1_container').focus();
                } else if (event.target.id == "gs_start_close") {
                    startAgainCloseFunction();
                    $('#gs_start_again').focus();
                } else if (event.target.id == "gs_role_1_container") {
                    myRoleFunction();
                    $('#gs_role_close').focus();
                } else if (event.target.id == "gs_start_again") {
                    startAgainFunction();
                    $('#gs_start_close').focus();
                } else if (event.target.id == "gs_fish_history1") {
                    var fh = $("#" + event.target.id).attr("data-history");
                    fishHistoryFunction(fh);
                } else if (event.target.id == "gs_fish_history2") {
                    var fh = $("#" + event.target.id).attr("data-history");
                    fishHistoryFunction(fh);
                } else if (event.target.id == "gs_fish_history3") {
                    var fh = $("#" + event.target.id).attr("data-history");
                    fishHistoryFunction(fh);
                } else if (event.target.id == "gs_fish_history4") {
                    var fh = $("#" + event.target.id).attr("data-history");
                    fishHistoryFunction(fh);
                } else if (event.target.id == "gs_fish_history5") {
                    var fh = $("#" + event.target.id).attr("data-history");
                    fishHistoryFunction(fh);
                } else if (event.target.id == "gs_fish_history6") {
                    var fh = $("#" + event.target.id).attr("data-history");
                    fishHistoryFunction(fh);
                } else if (event.target.id == "gs_fish_history7") {
                    var fh = $("#" + event.target.id).attr("data-history");
                    fishHistoryFunction(fh);
                } else if (event.target.id == "gs_fish_history8") {
                    var fh = $("#" + event.target.id).attr("data-history");
                    fishHistoryFunction(fh);
                } else if (event.target.id == "gs_fish_history9") {
                    var fh = $("#" + event.target.id).attr("data-history");
                    fishHistoryFunction(fh);
                } else if (event.target.id == "gs_fish_history10") {
                    var fh = $("#" + event.target.id).attr("data-history");
                    fishHistoryFunction(fh);
                } else if (event.target.id == "gs_fish_history11") {
                    var fh = $("#" + event.target.id).attr("data-history");
                    fishHistoryFunction(fh);
                } else if (event.target.id == "gs_fish_history12") {
                    var fh = $("#" + event.target.id).attr("data-history");
                    fishHistoryFunction(fh);
                } else if (event.target.id == "gs_fish_history13") {
                    var fh = $("#" + event.target.id).attr("data-history");
                    fishHistoryFunction(fh);
                } else if (event.target.id == "gs_fish_history14") {
                    var fh = $("#" + event.target.id).attr("data-history");
                    fishHistoryFunction(fh);
                } else if (event.target.id == "gs_fish_history15") {
                    var fh = $("#" + event.target.id).attr("data-history");
                    fishHistoryFunction(fh);
                }
            }
        }
    });
}

var fizzer_Buy_Screen_tab_binder = function (element) {

    $('#' + element).off("focus blur keydown mousedown").on("focus blur keydown mousedown", function (event) {
        if (event.type == 'focus') {

            $(this).addClass('focus-div');
        }
        if (event.type == 'mousedown') {
            event.stopImmediatePropagation();
            event.preventDefault();
            $(this).trigger("blur");
        }
        if (event.type == 'blur') {
            $(this).removeClass('focus-div');
        }
        if (event.type == "keydown") {
            event.preventDefault();
            if (event.keyCode == 9 && !event.shiftKey) {
                var index = fizzerBuyScreenArray.indexOf(this.id);
                if (index == fizzerBuyScreenArray.length - 1) {
                    $("#" + fizzerBuyScreenArray[0]).focus();
                } else {
                    $("#" + fizzerBuyScreenArray[index + 1]).focus();
                }
            }
            else if ((event.shiftKey && event.keyCode == 9)) {
                event.preventDefault();

                var index = fizzerBuyScreenArray.indexOf(this.id);
                for (var i = index - 1; i >= 0; i--) {
                    var tabCondition = ( ( ( $("#" + fizzerBuyScreenArray[i]).css("display") == "none" ) ) );

                    if (tabCondition) {
                        index--;
                    } else {

                        index = i;
                        break;
                    }
                }
                if (document.activeElement.id == fizzerBuyScreenArray[0]) {
                    for (var i = fizzerBuyScreenArray.length - 1; i >= 0; i--) {
                        var tabCondition = ( ( ( $("#" + fizzerBuyScreenArray[i]).css("display") == "none" ) ) );
                        if (!tabCondition) {
                            index = i;
                            break;
                        }
                    }

                }
                $('#' + fizzerBuyScreenArray[index]).focus();
            } else if (event.keyCode == 13) {
                if (this.id == 'gs_fizzer_buy_yes') {
                    fizzerYesFunc();
                } else if (this.id == 'gs_fizzer_buy_no') {
                    fizzerBuyPopupCloseFun();
                    var index = null;
                    for (var init = 0; init < marketModalArrayId.length; init++) {
                        if ($("#" + marketModalArrayId[init]).css("display") == "block") {
                            $("#market" + (init + 1)).focus();
                            break;
                        }
                    }

                } else if (this.id == 'gs_fizzer_buy_close') {
                    fizzerBuyPopupCloseFun();
                    var index = null;
                    for (var init = 0; init < marketModalArrayId.length; init++) {
                        if ($("#" + marketModalArrayId[init]).css("display") == "block") {
                            $("#market" + (init + 1)).focus();
                            break;
                        }
                    }

                }
            }
        }
    });
};

var start_again_tab_binder = function (element) {

    $('#' + element).off("focus blur keydown mousedown").on("focus blur keydown mousedown", function (event) {
        if (event.type == 'focus') {

            $(this).addClass('focus-div');
        }
        if (event.type == 'mousedown') {
            event.stopImmediatePropagation();
            event.preventDefault();
            $(this).trigger("blur");
        }
        if (event.type == 'blur') {
            $(this).removeClass('focus-div');
        }
        if (event.type == "keydown") {
            event.preventDefault();
            if (event.keyCode == 9 && !event.shiftKey) {
                var index = startScreenArray.indexOf(this.id);
                if (index == startScreenArray.length - 1) {
                    document.getElementById('gs_start_again_yes').focus();
                } else {
                    document.getElementById(startScreenArray[index + 1]).focus();
                }
            } else if ((event.shiftKey && event.keyCode == 9)) {
                event.preventDefault();

                var index = startScreenArray.indexOf(this.id);
                for (var i = index - 1; i >= 0; i--) {
                    var tabCondition = ( ( ( $("#" + startScreenArray[i]).css("display") == "none" ) ) );

                    if (tabCondition) {
                        index--;
                    } else {

                        index = i;
                        break;
                    }
                }
                if (document.activeElement.id == startScreenArray[0]) {
                    for (var i = startScreenArray.length - 1; i >= 0; i--) {
                        var tabCondition = ( ( ( $("#" + gameScreenArray[i]).css("display") == "none" ) ) );
                        if (!tabCondition) {
                            index = i;
                            break;
                        }
                    }

                }
                $('#' + startScreenArray[index]).focus();
            } else if (event.keyCode == 13) {
                if (this.id == 'gs_start_again_yes') {
                    startAgainYesFunction();
                } else if (this.id == 'gs_start_again_no') {
                    startAgainCloseFunction();
                    document.getElementById('gs_start_again').focus();
                } else if (this.id == 'gs_start_close') {
                    startAgainCloseFunction();
                    document.getElementById('gs_start_again').focus();
                }
            }
        }
    });
};

var result_again_tab_binder = function (element) {
    $('#' + element).off("focus blur keydown mousedown").on("focus blur keydown mousedown", function (event) {
        if (event.type == 'focus') {

            $(this).addClass('focus-div');
        }
        if (event.type == 'mousedown') {
            event.stopImmediatePropagation();
            event.preventDefault();
            if (event.target.id == 'gs_trans_dialog_close_btn') {
                $(this).removeClass('focus-div');
            } else {
                $(this).trigger("blur");
            }

        }
        if (event.type == 'blur') {

            $(this).removeClass('focus-div');


        }
        if (event.type == "keydown") {
            event.preventDefault();
            if (event.keyCode == 9 && !event.shiftKey) {

                if (event.target.id == "gs_trans_dialog_close_btn") {
                    document.getElementById(event.target.id).focus();
                    return;
                }
                var index = resultScreenArray.indexOf(this.id);
                if (index == resultScreenArray.length - 1) {
                    document.getElementById('results_history_btn').focus();
                } else if ($('#' + resultScreenArray[index + 1]).css('display') == "none") {
                    document.getElementById(resultScreenArray[index + 2]).focus();
                } else {
                    document.getElementById(resultScreenArray[index + 1]).focus();
                }
            } else if ((event.shiftKey && event.keyCode == 9)) {
                event.preventDefault();
                if (event.target.id == "gs_trans_dialog_close_btn") {
                    document.getElementById(event.target.id).focus();
                    return;
                }
                var index = resultScreenArray.indexOf(this.id);
                for (var i = index - 1; i >= 0; i--) {
                    var tabCondition = ( ( ( $("#" + resultScreenArray[i]).css("display") == "none" ) ) );

                    if (tabCondition) {
                        index--;
                    } else {

                        index = i;
                        break;
                    }
                }
                if (document.activeElement.id == resultScreenArray[0]) {
                    for (var i = resultScreenArray.length - 1; i >= 0; i--) {
                        var tabCondition = ( ( ( $("#" + resultScreenArray[i]).css("display") == "none" ) ) );
                        if (!tabCondition) {
                            index = i;
                            break;
                        }
                    }

                }
                $('#' + resultScreenArray[index]).focus();
            } else if (event.keyCode == 13) {
                if (this.id == 'results_history_btn') {
                    historyFunction();
                    $("#gs_trans_dialog_close_btn").css("display", "block");
                    $('#gs_trans_dialog_close_btn').focus();


                } else if (this.id == 'results_print') {
                    printHistoryFunction();
                } else if (this.id == 'results_start_again') {
                    startAgainResultFunction();
                } else if (this.id == 'gs_trans_dialog_close_btn') {
                    historyCloseFunction();
                    $('#results_history_btn').focus();
                    $("#gs_trans_dialog_close_btn").css("display", "none");

                }
            }
        }
    });
};


$(window).mousemove(function () {
    for (var init = 0; init < arrayIntroTab.length; init++) {
        $('#' + arrayIntroTab[init]).trigger('blur');
    }
    for (var init = 0; init < gameScreenArray.length; init++) {
        $('#' + gameScreenArray[init]).trigger('blur');
    }
    for (var init = 0; init < wantedDivArray.length; init++) {
        if (wantedDivArray[init].indexOf("history") > -1) {

            $("#" + wantedDivArray[init]).removeClass("focus-div");
        } else {

            $('#' + wantedDivArray[init]).trigger('blur');
        }
    }


    for (var init = 0; init < resultScreenArray.length; init++) {
        $('#' + resultScreenArray[init]).trigger('blur');
    }
    for (var init = 0; init < startScreenArray.length; init++) {
        $('#' + startScreenArray[init]).trigger('blur');
    }
    for (var init = 0; init < fizzerBuyScreenArray.length; init++) {
        $('#' + fizzerBuyScreenArray[init]).trigger('blur');
        $('#gs_fizzer_buy_overlay').focus();

    }
});

var tab_binder = function (element) {
    $('#' + element).off("focus blur keydown mousedown").on("focus blur keydown mousedown", function (event) {
        if (event.type == 'focus') {

            $(this).addClass('focus-div');
        }
        if (event.type == 'mousedown') {
            event.stopImmediatePropagation();
            event.preventDefault();
            $(this).trigger("blur");
        }
        if (event.type == 'blur') {
            $(this).removeClass('focus-div');
        }
        if (event.type == "keydown") {
            event.preventDefault();
            if (event.keyCode == 9 && !event.shiftKey) {
                var index = arrayIntroTab.indexOf(this.id);
                if (index == arrayIntroTab.length - 1) {
                    document.getElementById('intro_next').focus();
                    if ($('#intro_next').css('display') == "none") {
                        document.getElementById(arrayIntroTab[1]).focus();
                    }
                } else if ($('#' + arrayIntroTab[index + 1]).css('display') == "none") {
                    if ($("#" + arrayIntroTab[0]).css('display') == "none") {
                        document.getElementById(arrayIntroTab[1]).focus();
                    } else {
                        document.getElementById(arrayIntroTab[0]).focus();
                    }


                } else {
                    document.getElementById(arrayIntroTab[index + 1]).focus();
                }
            } else if ((event.shiftKey && event.keyCode == 9)) {
                event.preventDefault();

                var index = arrayIntroTab.indexOf(this.id);
                for (var i = index - 1; i >= 0; i--) {
                    var tabCondition = ( ( ( $("#" + arrayIntroTab[i]).css("display") == "none" ) ) );
                    if (tabCondition) {
                        index--;
                    } else {

                        index = i;
                        break;
                    }
                }

                if (document.activeElement.id == arrayIntroTab[0]) {
                    for (var i = arrayIntroTab.length - 1; i > 0; i--) {
                        var tabCondition = ( ( ( $("#" + arrayIntroTab[i]).css("display") == "none" ) ) );
                        if (tabCondition) {
                            index--;
                        } else {
                            index = i;
                            break;
                        }
                    }
                }
                if ($("#" + arrayIntroTab[0]).css('display') == "none") {
                    if (document.activeElement.id == arrayIntroTab[1]) {
                        document.getElementById(arrayIntroTab[2]).focus();
                        return;
                    }
                    else if (document.activeElement.id == arrayIntroTab[2]) {
                        document.getElementById(arrayIntroTab[1]).focus();
                        return;
                    }
                }
                $('#' + arrayIntroTab[index]).focus();

            } else if (event.keyCode == 13) {
                if (this.id == 'intro_next') {
                    isIntroNextFunction();
                } else if (this.id == 'intro_start') {
                    lsIntroStartFunction();
                } else if (this.id == 'intro_back') {
                    isIntroBackFunction();
                }
            }
        }
    });
};

var statusUpdateFunction = function (fishname, fishprice, dropid) {
    $('#gs_error_popup_cloud').css('display', 'none');
    divTop = divTop + 140;
    audioCorrectLoad.play();
    fishTop = fishTop + 100;
    $('#gs_popup_cloud').css('display', 'block');

    setTimeout(function () {
        $('#gs_popup_cloud_img').attr('src', 'assets/image/L2574_Cloud.gif');
    }, 0);
    var cloudText = null;
    var curentstatus = globalMarketStatus;
    var fishMedian = null;

    if (dropid.indexOf("wanted") > -1) {
        fishMedian = Math.ceil(wantedMedian[fishname]);
        if (fishprice < fishMedian) {
            success = "Unsuccess";
            $('#gs_popup_smiley').css({
                'background-image': "url('assets/image/L2574_Unsuccess.png')",
                "background-repeat": "no-repeat",
                "background-size": "100% 100%"
            });

            if (globalMarketStatus > 0) {

                cloudText = "Look out! You could have done better. The average selling price is $_marketprice. You received less than" +
                    " that. Your success has dropped by 5 points.";
                cloudText = cloudText.replace("_marketprice", fishMedian);
                $('#gs_popup_cloud_text').html(cloudText);
            } else {
                cloudText = "Look out! You could have done better. The average selling price is $_marketprice. You received less than" +
                    " that. You have 0 success points.";
                cloudText = cloudText.replace("_marketprice", fishMedian);
                $('#gs_popup_cloud_text').html(cloudText);
            }
            globalMarketStatus -= 5;
        } else if (fishprice == fishMedian) {
            success = "Average";
            globalMarketStatus += 3;
            $('#gs_popup_smiley').css({
                'background-image': "url('assets/image/L2574_Average.png')",
                "background-repeat": "no-repeat",
                "background-size": "100% 100%"
            });
            if (globalMarketStatus < 100) {
                cloudText = "Not too bad! You received the average price for that type of fish. Your success has increased by 3 points.";
                $('#gs_popup_cloud_text').html(cloudText);
            } else {
                cloudText = "Not too bad! You received the average price for that breed of fish. You have 100" +
                    " success points.";
                $('#gs_popup_cloud_text').html(cloudText);
            }
        } else if (fishprice > fishMedian) {
            success = "Success";
            globalMarketStatus += 5;
            $('#gs_popup_smiley').css({
                'background-image': "url('assets/image/L2574_Success.png')",
                "background-repeat": "no-repeat",
                "background-size": "100% 100%"
            });
            if (globalMarketStatus < 100) {

                cloudText = "Excellent sale! That trade was more than the average selling price of $_marketprice. Your success has increased" +
                    " by 5 points.";
                cloudText = cloudText.replace("_marketprice", fishMedian);
                $('#gs_popup_cloud_text').html(cloudText);
            } else {

                cloudText = "Excellent sale! That trade was above the average price of $_marketprice. You have 100 status" +
                    " points.";
                cloudText = cloudText.replace("_marketprice", fishMedian);
                $('#gs_popup_cloud_text').html(cloudText);
            }
        }
        if (globalMarketStatus <= 0) {
            globalMarketStatus = 0;
        }
        if (globalMarketStatus >= 100) {
            globalMarketStatus = 100;
        }
        statusBarFunction(success);

    } else if (dropid.indexOf("sale") > -1) {

        fishMedian = Math.ceil(saleMedian[fishname]);
        if (fishprice < saleMedian[fishname]) {
            success = "Success";
            globalMarketStatus += 5;
            $('#gs_popup_smiley').css({
                'background-image': "url('assets/image/L2574_Success.png')",
                "background-repeat": "no-repeat",
                "background-size": "100% 100%"
            });
            if (globalMarketStatus < 100) {
                cloudText =
                    "Excellent! That trade was below the average buying price of $_marketprice. Your success has increased by" +
                    " 5 points.";
                cloudText = cloudText.replace("_marketprice", fishMedian);
                $('#gs_popup_cloud_text').html(cloudText);
            } else {
                cloudText =
                    "Excellent! That trade was below the average buying price of $_marketprice. You have 100 success points.";
                cloudText = cloudText.replace("_marketprice", fishMedian);
                $('#gs_popup_cloud_text').html(cloudText);
            }

        } else if (fishprice == parseInt(saleMedian[fishname])) {
            success = "Average";
            globalMarketStatus += 3;
            $('#gs_popup_smiley').css({
                'background-image': "url('assets/image/L2574_Average.png')",
                "background-repeat": "no-repeat",
                "background-size": "100% 100%"
            });
            if (globalMarketStatus < 100) {
                cloudText =
                    "Okay! You bought the fish for the average price of $_marketprice. Your success has increased by" +
                    " 3 points.";
                cloudText = cloudText.replace("_marketprice", fishMedian);
                $('#gs_popup_cloud_text').html(cloudText);
            } else {
                cloudText = "Okay! You traded at the average price of $_marketprice. You have 100 success points.";
                cloudText = cloudText.replace("_marketprice", fishMedian);
                $('#gs_popup_cloud_text').html(cloudText);
            }

        } else if (fishprice > saleMedian[fishname]) {
            success = "Unsuccess";

            $('#gs_popup_smiley').css({
                'background-image': "url('assets/image/L2574_Unsuccess.png')",
                "background-repeat": "no-repeat",
                "background-size": "100% 100%"
            });

            if (globalMarketStatus > 0) {

                cloudText =
                    "You could have done better! The average buying price is $_marketprice. You paid more than that. Your success has gone down" +
                    " 5 points.";
                cloudText = cloudText.replace("_marketprice", fishMedian);
                $('#gs_popup_cloud_text').html(cloudText);
            } else {
                cloudText =
                    "You could have done better! The average buying price is $_marketprice. You paid more than that. You have" +
                    " 0 success points.";
                cloudText = cloudText.replace("_marketprice", fishMedian);
                $('#gs_popup_cloud_text').html(cloudText);
            }
            globalMarketStatus -= 5;
        }
        if (globalMarketStatus <= 0) {
            globalMarketStatus = 0;
        }
        if (globalMarketStatus >= 100) {
            globalMarketStatus = 100;
        }
        statusBarFunction(success);
    }
    $('#gs_popup_cloud_text').css('display', 'block');
    $('#gs_popup_smiley').css('display', 'block');
    setTimeout(function () {
        $('#gs_popup_cloud_text').css('display', 'none');
        $('#gs_popup_smiley').css('display', 'none');
    }, 5500)
    setTimeout(function () {
        $('#gs_popup_cloud').css('display', 'none');
        $('#gs_popup_cloud_img').attr('src', 'assets/image/L2574_Cloud.png');
    }, 6200)


};


var salemedianCalc = function (status) {

    for (var init = 0; init < marketIdArray.length; init++) {

        if ($("#" + marketIdArray[init]).css('display') == 'block') {
            for (var trader = 0; trader < markets[init].trader.length; trader++) {
                for (var sale = 0; sale < markets[init].trader[trader].sale.length; sale++) {

                    for (
                        var salequantity = 0; salequantity < markets[init].trader[trader].sale[sale].numberoffish; salequantity++) {

                        saleMedianArray[markets[init].trader[trader].sale[sale].fish].push(
                            parseInt(markets[init].trader[trader].sale[sale].cost));
                    }

                }
            }
        }
    }
    for (var name = 0; name < fishNames.length; name++) {
        if (saleMedianArray[fishNames[name]].length > 0) {
            saleMedian[fishNames[name]] =
                median(saleMedianArray[fishNames[name]]);

            saleMedianArray[fishNames[name]].length = 0;
        }

    }


};

var wantedMedianCalc = function (status) {

    for (var init = 0; init < marketIdArray.length; init++) {

        if ($("#" + marketIdArray[init]).css('display') == 'block') {
            for (var trader = 0; trader < markets[init].trader.length; trader++) {
                for (var wanted = 0; wanted < markets[init].trader[trader].wanted.length; wanted++) {

                    for (
                        var wantedquantity = 0; wantedquantity < markets[init].trader[trader].wanted[wanted].numberoffish; wantedquantity++) {
                        wantedMedianArray[markets[init].trader[trader].wanted[wanted].fish].push(
                            parseInt(markets[init].trader[trader].wanted[wanted].cost));
                    }
                }
            }
        }
    }
    for (var name = 0; name < fishNames.length; name++) {
        if (wantedMedianArray[fishNames[name]].length > 0) {
            wantedMedian[fishNames[name]] =
                median(wantedMedianArray[fishNames[name]]);

            wantedMedianArray[fishNames[name]].length = 0;
        }

    }


};


var isIndexFunction = function () {
    for (var i = 0; i < introIdArray.length; i++) {
        if ($('#' + introIdArray[i]).css('display') == 'block') {
            return (i);
        }
    }
};

var isIntroNextFunction = function () {
    var index = isIndexFunction();
    var nextIndex = index;
    if (index == introIdArray.length - 1) {
        nextIndex = 0;
    } else {
        nextIndex += 1;
    }
    if (nextIndex == introIdArray.length - 1) {
        $("#intro_next").css('display', 'none');
    }
    if (nextIndex != 0) {
        $("#intro_back").css('display', 'block');
    }
    $('#' + introIdArray[index]).css('display', 'none');
    $('#' + introIdArray[nextIndex]).css('display', 'block');
    if (introIdArray[nextIndex] == "intro_screen5") {
        $("#intro_screen5_history").css("display", "block");
    } else {
        $("#intro_screen5_history").css("display", "none");
    }

};

var isIntroBackFunction = function () {
    var index = isIndexFunction();
    var nextIndex = index;
    if (index == 0) {
        nextIndex += 1;
    } else {
        nextIndex -= 1;
    }
    if (nextIndex == 0) {
        $("#intro_back").css('display', 'none');
        $("#intro_next").focus();
    }
    if (nextIndex != 0) {
        $("#intro_next").css('display', 'block');
    }
    $('#' + introIdArray[index]).css('display', 'none');
    $('#' + introIdArray[nextIndex]).css('display', 'block');
    if (introIdArray[nextIndex] == "intro_screen5") {
        $("#intro_screen5_history").css("display", "block");
    } else {
        $("#intro_screen5_history").css("display", "none");
    }

};

var myBriefFunction = function () {
    for (var init = 0; init < gameScreenArray.length; init++) {
        $('#' + gameScreenArray[init]).attr('tabindex', '-1');
    }
    $("#gs_brief_close").css("display", "block");
    $("#gs_brief_1").css({
        "background-image": "url('./assets/image/L2574_Mybrief86.png')",
        "background-repeat": "no-repeat",
        "background-size": "100% 100%"
    });
    $("#gs_brief_overlay").css("display", "block");
    $("#gs_brief_overlay").focus();


};

var myRoleFunction = function () {
    for (var init = 0; init < gameScreenArray.length; init++) {
        $('#' + gameScreenArray[init]).attr('tabindex', '-1');
    }
    $("#gs_role_1").css({
        "background-image": "url('./assets/image/L2574_myrole_static.gif')",
        "background-repeat": "no-repeat",
        "background-size": "100% 100%"
    });
    $("#gs_role_close").css("display", "block");
    $("#gs_role_overlay").css("display", "block");
    $("#gs_role_overlay").focus();

};
var myBriefCloseFunction = function () {
    for (var init = 0; init < gameScreenArray.length; init++) {
        $('#' + gameScreenArray[init]).attr('tabindex', '0');
    }
    $("#gs_brief_overlay").css("display", "none");
    $("#gs_brief_close").css("display", "none");
};

var myRoleCloseFunction = function () {
    for (var init = 0; init < gameScreenArray.length; init++) {
        $('#' + gameScreenArray[init]).attr('tabindex', '0');
    }
    $("#gs_role_overlay").css("display", "none");
	 $("#gs_role_close").css("display", "none");
};

var startAgainFunction = function () {
    $("#gs_startagain_overlay").css("display", "block");
};

var startAgainCloseFunction = function () {
    $("#gs_startagain_overlay").css("display", "none");
};

var startAgainYesFunction = function () {
    $("#gs_startagain_overlay").css("display", "none");
    $("#game_screen").css("display", "none");
    $("#gs_results_page").css("display", "block");
    $("#gs_market_visited").text(localStorage.getItem("marketCount"));
    $("#gs_market_final_cash").html($("#gs_cash").html());
    $("#gs_market_stock_quantity").text(stockCounter);
    $("#gs_market_stock_value").text(resultStockValue);
    historyModelFunction();
    resultPageFunction();
    resultStatusFunction();
    var resultScreen = document.getElementById("gs_results_page").querySelectorAll('.tabbed3');
    for (var init = 0; init < resultScreen.length; init++) {
        resultScreenArray.push(resultScreen[init].id);
    }
    for (var init = 0; init < resultScreenArray.length; init++) {
        result_again_tab_binder(resultScreenArray[init]);
    }

}

var resultPageFunction = function () {
    var marketVisited = localStorage.getItem("marketCount");

    for (var i = 0; i < resultMarketStatus.length; i++) {


        if (resultMarketStatus[i].name == "markets_visited" &&
            parseInt(resultMarketStatus[i].floor) <= marketVisited &&
            marketVisited <= parseInt(resultMarketStatus[i].ceiling)) {

            var updatedDesc = resultMarketStatus[i].description.replace("_numberofmarkets", marketVisited);
            $("#gs_results_text2").html(updatedDesc);

        } else if (resultMarketStatus[i].name == "market_final_status" &&
            parseInt(resultMarketStatus[i].floor) <= globalMarketStatus &&
            parseInt(resultMarketStatus[i].ceiling) >= globalMarketStatus) {

            var updatedDesc = resultMarketStatus[i].description.replace("_status", globalMarketStatus);
            $("#gs_results_text4").html(updatedDesc);

        } else if (resultMarketStatus[i].name == "stock_value" &&
            parseInt(resultMarketStatus[i].floor) <= resultStockValue &&
            parseInt(resultMarketStatus[i].ceiling) >= resultStockValue) {
            var updatedDesc = resultMarketStatus[i].description.replace("_stock", resultStockValue);
            $("#gs_results_text6").html(updatedDesc);
        } else if (resultMarketStatus[i].name == "no_of_transactions" &&
            parseInt(resultMarketStatus[i].value) == historyCount &&
            historyCount == 0) {

            $("#gs_results_text8").html(resultMarketStatus[i].description);

        } else if (resultMarketStatus[i].name == "no_of_transactions" &&
            parseInt(resultMarketStatus[i].value) <= historyCount &&
            historyCount == 1) {

            var updatedDesc = resultMarketStatus[i].description.replace("_totaltransactions", historyCount);
            $("#gs_results_text8").html(updatedDesc);

        } else if (resultMarketStatus[i].name == "no_of_transactions" &&
            parseInt(resultMarketStatus[i].value) <= historyCount &&
            historyCount > 1) {

            var updatedDesc = resultMarketStatus[i].description.replace("_totaltransactions", historyCount);
            $("#gs_results_text8").html(updatedDesc);

        } else if (resultMarketStatus[i].name == "fizzer" && resultMarketStatus[i].fizzer == fizzerFlag) {

            $("#gs_results_text10").html(resultMarketStatus[i].description);

        } else if (resultMarketStatus[i].name == "final_cash") {
            var finalGameCash = $("#gs_cash").html();
            var updatedDesc = resultMarketStatus[i].description.replace("600", finalGameCash);
            $("#gs_results_text12").html(updatedDesc);
        }

    }
};


var historyModelFunction = function () {


    $('#result_history_table tbody').empty();
    var imgCounter = 1;
    var imgCount = "img" + imgCounter;
    var imgCount2 = "img2" + imgCounter;
    var successText;

    var unsuccess_soldCount = 0;
    var unsuccess_boughtCount = 0;
    var average_soldCount = 0;
    var average_boughtCount = 0;
    var success_soldCount = 0;
    var success_boughtCount = 0;
    var m = 3,
        n = 5;
    for (var j = 1; j <= historyCount; j++) {

        if (((localStorage.getItem("fish" + j + m)) == "Sell") &&
            ((localStorage.getItem("fish" + j + n)) == "Unsuccess")) {
            unsuccess_soldCount += 1;
        } else if (((localStorage.getItem("fish" + j + m)) == "Buy") &&
            ((localStorage.getItem("fish" + j + n)) == "Unsuccess")) {
            unsuccess_boughtCount += 1;
        } else if (((localStorage.getItem("fish" + j + m)) == "Sell") &&
            ((localStorage.getItem("fish" + j + n)) == "Average")) {
            average_soldCount += 1;
        } else if (((localStorage.getItem("fish" + j + m)) == "Buy") &&
            ((localStorage.getItem("fish" + j + n)) == "Average")) {
            average_boughtCount += 1;
        } else if (((localStorage.getItem("fish" + j + m)) == "Sell") &&
            ((localStorage.getItem("fish" + j + n)) == "Success")) {
            success_soldCount += 1;
        } else if (((localStorage.getItem("fish" + j + m)) == "Buy") &&
            ((localStorage.getItem("fish" + j + n)) == "Success")) {
            success_boughtCount += 1;
        }


    }


    for (var i = 1; i <= historyCount; i++) {
        var img = "assets/image/L2574_Fish_" + localStorage.getItem("fish" + i + 2);
        var img2 = "assets/image/L2574_" + localStorage.getItem("fish" + i + 5);

        if ((localStorage.getItem("fish" + i + 5)) == "Unsuccess") {
            if ((localStorage.getItem("fish" + i + 3)) == "Sell") {
                successText = "Below average price";
            } else {
                successText = "Above average price";
            }
        } else if ((localStorage.getItem("fish" + i + 5)) == "Success") {
            if ((localStorage.getItem("fish" + i + 3)) == "Sell") {
                successText = "Above average price";
            } else {
                successText = "Below average price";
            }

        } else if ((localStorage.getItem("fish" + i + 5)) == "Average") {
            if ((localStorage.getItem("fish" + i + 3)) == "Sell") {
                successText = "Average trade";
            } else {
                successText = "Average price";
            }
        }

        var fn = displayName[localStorage.getItem("fish" + i + 2)];
        $('#result_history_table').append('<tr><td>' + i + ". " + localStorage.getItem("fish" + i + 1) +
            '</td><td><span  class="table_img"><img id="' + imgCount + '" class="historyImg" src="' + img +
            '.png" alt=""></span><span class="tableText">' + fn + '</span></td><td>' +
            localStorage.getItem("fish" + i + 3) + '</td><td>&#36;' + localStorage.getItem("fish" + i + 4) +
            '</td><td><span  class="table_img"><img id="' + imgCount2 + '" class="smileyImg" src="' + img2 +
            '.png" alt=""></span><span class="tableText2">' + successText + '</span></td></tr>');
        imgCounter++;
    }

    if (historyCount < 12) {
        for (var i = 1; i < (14 - imgCounter); i++) {
            $('#result_history_table').append('<tr><td></td>td></td><td></td><td></td><td></td><td></td></tr>');
        }
    }

    var ok = average_soldCount + average_boughtCount;
    var happy = success_soldCount + success_boughtCount;
    var sad = unsuccess_soldCount + unsuccess_boughtCount;

    $("#gs_market_transaction_ok").text(ok);
    $("#average_fish_quantity").text(ok);
    $("#gs_market_transaction_happy").text(happy);
    $("#success_fish_quantity").text(happy);
    $("#gs_market_transaction_sad").text(sad);
    $("#unsuccess_fish_quantity").text(sad);

    var max = Math.max(sad, ok, happy);
    if (sad == ok && ok == happy && sad == 0) {
        $("#happySlider").css("top", 5 + "px");
        $("#okSlider").css("top", 5 + "px");
        $("#sadSlider").css("top", 5 + "px");
    } else {
        var max = Math.max(sad, ok, happy);
        $("#happySlider").css("top", (60 - (happy * 60 / max)) + "px");
        $("#okSlider").css("top", (60 - (ok * 60 / max)) + "px");
        $("#sadSlider").css("top", (60 - (sad * 60 / max)) + "px");
    }

    for (var i = 0; i < historystatus.length; i++) {
        if (historystatus[i].name == "average_sold") {


            $("#result_average_fish_sold").html(historystatus[i].description.replace("100", average_soldCount));
        } else if (historystatus[i].name == "average_bought") {
            $("#result_average_fish_bought").html(historystatus[i].description.replace("100", average_boughtCount));
        } else if (historystatus[i].name == "success_sold") {
            $("#result_success_fish_sold").html(historystatus[i].description.replace("100", success_soldCount));
        } else if (historystatus[i].name == "success_bought") {
            $("#result_success_fish_bought").html(historystatus[i].description.replace("100", success_boughtCount));
        } else if (historystatus[i].name == "unsuccess_sold") {
            $("#result_unsuccess_fish_sold").html(historystatus[i].description.replace("100", unsuccess_soldCount));
        } else if (historystatus[i].name == "unsuccess_bought") {
            $("#result_unsuccess_fish_bought").html(historystatus[i].description.replace("100", unsuccess_boughtCount));
        }
    }
};

var historyFunction = function () {
    $("#gs_trans_overlay").css("display", "block");
    $("#gs_trans_dialog_close_btn").css("display", "block");
};

var historyCloseFunction = function () {
    $("#gs_trans_overlay").css("display", "none");
    $("#gs_trans_dialog_close_btn").css("display", "none");
};


var printHistoryFunction = function () {
    window.print();
};

$("#results_print").click(printHistoryFunction);

var startAgainResultFunction = function () {

   location.reload();
};

$("#results_start_again").click(startAgainResultFunction);


var displayMarket = function (status) {

    for (var init = 0; init < markets.length; init++) {
        if (markets[init].statustoaccess <= status) {
            if ($('#' + marketIdArray[init]).css('display') == 'block') {

            } else {
                $('#' + marketIdArray[init]).css('display', 'block');

                $('#i' + marketIdArray[init])
                    .attr('src', 'assets/image/L2574_' + (init + 1) + '_appear_' + randomValue[0] + '.gif');
            }

        } else if (markets[init].statustoaccess > status) {
            $('#i' + marketIdArray[init])
                .attr('src', 'assets/image/L2574_' + (init + 1) + '_disappear_' + randomValue[0] + '.gif');
            hideMarkets(init);

        }
    }
};

function hideMarkets(init) {
    setTimeout(function () {
        $('#' + marketIdArray[init]).css('display', 'none');
        if (document.activeElement.tagName != "BODY") {
            if ($("#" + document.activeElement.id).css("display") == "none") {
                $("#gs_brief_1_container").focus();
            }
        }

        salemedianCalc();
        wantedMedianCalc();
    }, 1000);
}
var saleMarketUpdater = function (marketName, ss, ff, dd, trade) {
    for (var i = 0; i < markets[index].trader.length; i++) {
        if (markets[index].trader[i].owner == ss) {
            for (var j = 0; j < markets[index].trader[i].sale.length; j++) {
                if (markets[index].trader[i].sale[j].fish == ff) {
                    markets[index].trader[i].sale[j].numberoffish -= 1;
                    fishCost = markets[index].trader[i].sale[j].cost;
                    var df = dd.replace("_img", "_quantity");
                    $("#" + df).html("x" + markets[index].trader[i].sale[j].numberoffish);

                    var totalCashid = dd.replace("_img", "_price");
                    var totalcash = $("#" + totalCashid).children("p").text().replace("$", "");
                    cash = cash - parseInt(totalcash);

                    $("#gs_cash").html(cash);
                }

                if (markets[index].trader[i].sale[j].fish == ff &&
                    markets[index].trader[i].sale[j].numberoffish == 0) {


                    $("#" + df).closest("div").siblings(".gsm_modal_wanted_img_class").css({
                        "height": "0",
                        "width": "0",
                        "margin": " 0px 100px 100px 0px",
                    });
                    $("#" + df).prevUntil("div.gsm_modal_wanted_img_class").css({
                        "display": "none"
                    })
                    $("#" + df).css("display", "none");
                    setTimeout(function () {
                        $("#" + df).parent().css("display", "none");
                    }, 500);
                }
            }
        }
    }

};
var stockUpdater = function (s, f, d, fishprice) {

    var marketName = markets[index].name;
    var trade = "Buy";
    var ss = s;
    var ff = f;
    var dd = d;
    var top = 10;
    fishName = f;
    for (var i = 0; i < salestock.length; i++) {

        if (salestock[i].fishName == fishName || salestock[i].fishName == f) {
            if (salestock[i].fishCount == "null") {

                divcount = divcount + 1;

                $("#gs_fish_stock" + divcount).css("display", "block");
                $("#gs_fish_history" + divcount).css("display", "block");
                $("#gs_brief_1").css({
                    "background-image": "url('assets/image/L2574_Mybrief86.png')",
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%"
                });
                $("#gs_role_1").css({
                    "background-image": "url('assets/image/L2574_myrole_static.gif')",
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%"
                });
                var $div = $("<div id='fishdrop" + fishName + "' ></div>").css({
                    "position": "absolute",
                    "width": "100px",
                    "height": "80px",
                    "background-image": "url('assets/image/L2574_Fish_" + fishName + ".png')",
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "margin": "25px 17px",
                    "top": divTop + "px",
                }).draggable({
                    scroll: false,

                    revert: function (socketObj) {
                        if (socketObj === false) {
                            $("#gs_error_popup_cloud_text").html("You've missed the mark! Try again.");
                            displayErrorPopupFun();
                        } else {

                        }
                    },

                    start: function (e) {


                        click1.x = e.clientX;
                        click1.y = e.clientY;
                    },
                    helper: function (event) {


                        return $(this).clone().appendTo("#game_screen").css({
                            "float": "none",
                            "margin": "0px",
                            "z-index": "10",

                        });

                    },
                    drag: function (e, ui) {

                        dragedId = document.getElementById("clone_" + e.target.id);

                        $("#clone_" + e.target.id).removeAttr('title');

                        var original = ui.originalPosition;
                        var last = (e.pageX - click1.x + original.left) / zoom;
                        var last1 = (e.pageY - click1.y + original.top) / zoom;


                        ui.position = {
                            left: last,
                            top: last1,
                        };
                    },
                }).addClass("gsm_modal_wanted_img_stock");

                $("#gs_stock_text").css("display", "none");
                $($div).attr("title", "");
                $($div).attr("data-value", fishName);
                fishTop = fishTop + 20;

                var newdiv = $("<div id='title" + fishName + "' class='title'></div><div id='qty" + fishName +
                    "' class='qty'></div>");
                var ddiv = $("<div id='History" + fishName + "'class='fishHistory'></div>");
                $("#gs_fishes").append($div);

                $("#gs_fish_stock" + divcount).append(newdiv);
                $("#gs_fish_history" + divcount).append(ddiv);
                $("#gs_fish_stock" + divcount).attr("data-value", fishName);
                $("#title" + fishName).attr("data", fishName);
                $("#gs_fish_history" + divcount).attr("data-history", fishName);
                $("#title" + fishName).css({
                    "top": divTop + "px",
                });
                $("#qty" + fishName).css({
                    "top": divTop + "px",
                });
                $("#History" + fishName).attr("title", "");
                $("#History" + fishName).css({});
                salestock[i].fishCount = 1;
                $("#qty" + fishName).html("x" + salestock[i].fishCount);
                $("#title" + fishName).html(displayName[fishName]);
                stockCounter += 1;
                top += 50;
                addfish();
            } else {
                divTop = divTop - 140;
                salestock[i].fishCount = parseInt(salestock[i].fishCount + 1);
                $("#qty" + fishName).html("x" + salestock[i].fishCount);
                if ($("#qty" + fishName).html() != "x" + 0) {
                    $("#fishdrop" + f).draggable('enable');
                    $("#fishdrop" + f).addClass("gsm_modal_wanted_img_stock");
                    $("#fishdrop" + f).removeClass("gsm_modal_wanted_img_stock_empty");
                    $("#fishdrop" + f).css({
                        "width": "100px",
                        "height": "80px",
                        "background-image": "url('assets/image/L2574_Fish_" + fishName + ".png')",
                        "background-size": "100% 100%",
                        "background-repeat": "no-repeat"
                    })
                }
                stockCounter += 1;
                addfish();
            }
            saleMarketUpdater(marketName, ss, ff, dd, trade);
        }
    }
    statusUpdateFunction(f, fishprice, dd);
    salemedianCalc(globalMarketStatus);
    historyUpdater(marketName, ff, fishCost, trade);
}


var marketUpdater = function (w, f, wd, fishprice) {
    divTop = divTop - 140;
    var marketNameWanted = markets[index].name;
    var fishCostWanted;
    var tradeWanted = "Sell";

    for (var i = 0; i < markets[index].trader.length; i++) {
        if (markets[index].trader[i].owner == w) {
            for (var j = 0; j < markets[index].trader[i].wanted.length; j++) {
                if (markets[index].trader[i].wanted[j].fish == f) {
                    audioCorrectLoad.play();
                    markets[index].trader[i].wanted[j].numberoffish -= 1;
                    $("#" + wd + "_quantity").html("x" + markets[index].trader[i].wanted[j].numberoffish);
                    fishCostWanted = markets[index].trader[i].wanted[j].cost;

                    if ($("#" + wd + "_quantity").html() == "x" + 0) {

                        $("#" + wd).css({
                            "height": "0",
                            "width": "0",
                            "margin": " 0px 100px 100px 0px",
                        });
                        $("#" + wd).children().css({
                            "height": "0",
                            "width": "0",
                            "margin": " 0px 100px 100px 0px",
                            "right": " -110px",
                            "display": "none",
                        });
                        setTimeout(function () {
                            $("#" + wd + "_quantity").css("display", "none");
                        }, 500);

                    }
                    stockCounter -= 1;
                    var totalCashid = wd + "_price";
                    var totalcash = $("#" + totalCashid).children("p").text().replace("$", "");
                    cash = cash + parseInt(totalcash);
                    $("#gs_cash").html(cash);

                    removefish();
                }


            }
        }
    }
    for (var i = 0; i < salestock.length; i++) {
        if (salestock[i].fishName == f) {
            salestock[i].fishCount -= 1;
            $("#qty" + f).html("x" + salestock[i].fishCount);
            if ($("#qty" + f).html() == "x" + 0) {
                $("#fishdrop" + f).draggable("disable");
                $("#fishdrop" + f).removeClass("gsm_modal_wanted_img_stock");
                $("#fishdrop" + f).addClass("gsm_modal_wanted_img_stock_empty").css({
                    "background-image": "url('./assets/image/L2574_" + f + "_stock_complete.png')",
                    "background-size": "100% 100%",
                    "background-repeat": "no-repeat",
                    "position": "absolute",
                    "width": "100px",
                    "height": "80px",


                })

            }
        }

    }
    statusUpdateFunction(f, fishprice, wd);
    wantedMedianCalc();

    historyUpdater(marketNameWanted, f, fishCostWanted, tradeWanted);
};

var historyUpdater = function (market, fish, cost, trade) {
    historyCount += 1;
    var i = 1;
    if (trade == "Sell") {
        resultStockValue -= resultArray[fish][resultArray[fish].length - 1];
        resultArray[fish].pop();
    } else {
        resultArray[fish].push(cost);
        resultStockValue += parseInt(cost);

    }

    localStorage.setItem("fish" + historyCount + i, market);
    i++;
    localStorage.setItem("fish" + historyCount + i, fish);
    i++;
    localStorage.setItem("fish" + historyCount + i, trade);
    i++;
    localStorage.setItem("fish" + historyCount + i, cost);
    i++;
    localStorage.setItem("fish" + historyCount + i, success);
};

var gsMarketClassFunction = function (id) {
    $('#i' + marketId).attr('src', 'assets/image/L2574_' + marketId + '_afterhover_' + randomValue[0] + '.png');
    $('#i' + marketId).css({
        "width": "103px",
        "height": "65px"
    });
    for (var disableId = 0; disableId < gameScreenArray.length; disableId++) {
        $("#" + gameScreenArray[disableId]).css("pointer-events", "none");
    }
    index = marketIdArray.indexOf(id);
    var quantityId = null;
    for (var init = 0; init < wantedDivArray.length; init++) {

        if (wantedDivArray[init].indexOf("modal" + parseInt(index + 1) + "_") > -1) {
            if (wantedDivArray[init].indexOf("_gif") > -1) {
                $("#" + wantedDivArray[init]).css("display", "block");
            } else if (wantedDivArray[init].indexOf("_sale") > -1) {
                quantityId = $("#" + wantedDivArray[init]).children()[3].id;
                if ($("#" + quantityId).html() != "x" + 0) {
                    $("#" + wantedDivArray[init]).css("display", "block");
                }
            }


        } else if (wantedDivArray[init].indexOf("fish_") > -1) {

        } else {
            $("#" + wantedDivArray[init]).css("display", "none");
        }
    }

    $("#market" + parseInt(index + 1)).css("display", "block");

    if (marketCountArray.indexOf($('#' + id).attr('data-name')) == -1) {
        marketCountArray.push($('#' + id).attr('data-name'));
    }
    localStorage.setItem('marketCount', marketCountArray.length);

    $('#' + marketModalArrayId[index]).css("display", "block");
    $('#' + marketModalArrayId[index]).focus();
    for (var init = 0; init < markets[index].trader.length; init++) {
        var commonUrl = "gsm_modal" + parseInt(index + 1) + "_row" + parseInt(init + 1);

        for (var loop = 0; loop < markets[index].trader[init].sale.length; loop++) {
            $('#' + commonUrl + "_gif").css({
                "background-image": "url('./assets/image/L2574_Actor_" + markets[index].trader[init].owner +
                ".gif')",
                "background-repeat": "no-repeat",
                "background-size": "100% 100%"
            });
            $('#' + commonUrl + "_sale" + parseInt(loop + 1) + "_title")
                .html(displayName[markets[index].trader[init].sale[loop].fish]);
            $('#' + commonUrl + "_sale" + parseInt(loop + 1) + "_title")
                .attr("data-fish", markets[index].trader[init].sale[loop].fish);
            $('#' + commonUrl + "_sale" + parseInt(loop + 1) + "_quantity")
                .html("x" + markets[index].trader[init].sale[loop].numberoffish);
            $('#' + commonUrl + "_sale" + parseInt(loop + 1) + "_price p")
                .text("$" + markets[index].trader[init].sale[loop].cost);
            $('#' + commonUrl + "_sale" + parseInt(loop + 1) + "_img").css({
                "background-image": "url('./assets/image/L2574_Fish_" + markets[index].trader[init].sale[loop].fish +
                ".png')",
                "background-repeat": "no-repeat",
                "background-size": "100% 100%"
            });

        }

        for (var loop = 0; loop < markets[index].trader[init].wanted.length; loop++) {
            $('#' + commonUrl + "_wanted" + parseInt(loop + 1) + "_title")
                .html(displayName[markets[index].trader[init].wanted[loop].fish]);
            $('#' + commonUrl + "_wanted" + parseInt(loop + 1) + "_title")
                .attr("data-fish", markets[index].trader[init].wanted[loop].fish);
            $('#' + commonUrl + "_wanted" + parseInt(loop + 1) + "_quantity")
                .html("x" + markets[index].trader[init].wanted[loop].numberoffish);
            $('#' + commonUrl + "_wanted" + parseInt(loop + 1) + "_price p")
                .text("$" + markets[index].trader[init].wanted[loop].cost);
            $('#' + commonUrl + "_wanted" + parseInt(loop + 1) + "_img").css({
                "background-image": "url('./assets/image/L2574_Fish_" + markets[index].trader[init].wanted[loop].fish +
                ".png')",
                "background-repeat": "no-repeat",
                "background-size": "100% 100%"
            });
        }
    }
};

var gsMarketModalCloseFunction = function (event) {
    for (var disableId = 0; disableId < gameScreenArray.length; disableId++) {
        $("#" + gameScreenArray[disableId]).css("pointer-events", "all");
    }
    $('#i' + marketId).attr('src', 'assets/image/L2574_' + marketId + '_hover_after.png');
    $('#i' + marketId).css({
        'width': '6.5em',
        'height': '5.2em'
    });
    var x = $("#" + event.target.id).parent()[0].id;

    var lastchar = x.replace("gs_market_modal", "");
    for (var i = 1; i <= 3; i++) {

        for (var j = 1; j <= 1; j++) {


            if ($("#gsm_modal" + parseInt(lastchar) + "_row" + i + "_sale" + j).css('display') == "none") {

                $("#gsm_modal" + lastchar + "_row" + i + "_sale" + (j + 1)).css({
                    "position": "absolute",
                    "left": "10px",
                })
            }
        }
    }


    var wx = $("#" + event.target.id).parent()[0].id;
    var wlastchar = wx.replace("gs_market_modal", "");
    for (var i = 1; i <= 3; i++) {

        for (var j = 1; j <= 1; j++) {
            if ($("#gsm_modal" + parseInt(wlastchar) + "_row" + i + "_wanted" + j + "_img").css('display') == "none") {
                $("#gsm_modal" + wlastchar + "_row" + i + "_wanted" + (j + 1)).css({
                    "position": "absolute",
                    "left": "5px",
                })
            }
        }
    }

    $('#' + $("#" + event.target.id).parent()[0].id).css('display', 'none');
    displayMarket(globalMarketStatus);
};


var gifChangeFunction = function () {
    $("#game_screen").focus();
    setTimeout(function () {
        $("#gs_brief_1_container").attr("tabindex", "0");
        $("#gs_role_1_container").attr("tabindex", "0");
        $("#gs_start_again").attr("tabindex", "0");
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        div1.setAttribute("id", "gs_role_1");
        div2.setAttribute("id", "gs_brief_1");
        div1.setAttribute("title", "Click this button to open my role dialog box");
        div2.setAttribute("title", "Click this button to open my brief dialog box");
        $(div1).css({
            "width": "117px",
            "height": "88px",
            "position": "absolute",

            "bottom": "7px",
            "left": "2px",
            "display": "block"
        });
        $(div2).css({
            "width": "122px",
            "height": "99px",
            "position": "absolute",

            "bottom": "7px",
            "left": "0px",
            "display": "block"
        });
        $("#gs_role").css('display', 'none');
        $("#gs_brief").css('display', 'none');
        $("#gs_role_1_container").append(div1);
        $("#gs_brief_1_container").append(div2);
        $(div1).css({
            "background-image": "url('assets/image/L2574_role_jump.gif')",
            "background-repeat": "no-repeat",
            "background-size": "100% 100%"
        });
        $(div2).css({
            "background": "url('assets/image/L2574_Mybrief_jump.gif')",
            "background-repeat": "no-repeat",
            "background-size": "100% 100%"
        });


        $(div2).click(myBriefFunction);
        $(div1).click(myRoleFunction);

        $("#gs_brief_close").click(myBriefCloseFunction);
        $("#gs_role_close").click(myRoleCloseFunction);
        $("#gs_start_again").css("pointer-events", "all");
        displayMarket(globalMarketStatus);
        salemedianCalc();
        wantedMedianCalc();
        for (var init = 0; init < gameScreenArray.length; init++) {
            gs_tab_binder(gameScreenArray[init]);
        }
        $("#game_screen").blur();
        $("#game_screen").attr("tabindex", "-1");
        $("#game_screen").off();
    }, 4000);

};

$("#gs_start_again").on('mouseenter', function () {
    var $this = $(this);
    $this.attr("org_title", this.title);
    $this.attr('title', "");
}).on('mouseleave', function () {
    var $this = $(this);
    this.title = $this.attr("org_title");
});
$(".gsm_model_sale_class").on('mouseenter', function (event) {

    event.stopImmediatePropagation();
    event.preventDefault();
    $(this).attr('title', '');
    $(this).tooltip();
    $(this).tooltip('enable');
    $(this).tooltip("option", "show");
});

$(".gs_market_class").on('mouseenter', function (event) {

    event.stopImmediatePropagation();
    event.preventDefault();
    $(this).attr('title', '');
    $(this).tooltip();
    $(this).tooltip('enable');
    $(this).tooltip("option", "show");
});
$(document).on('mouseenter', '.fishHistory', function () {

    $(this).attr('title', '');
    $(this).tooltip();
    $(this).tooltip('enable');
    $(this).tooltip("option", "show");
});

var lsIntroStartFunction = function () {
    $("#gs_brief_1_container").attr("tabindex", "-1");
    $("#gs_role_1_container").attr("tabindex", "-1");
    $("#gs_start_again").attr("tabindex", "-1");
    $('#intro_screen_container').css('display', 'none');
    $('#game_screen').css('display', 'block');
    timer = setTimeout(function () {
        startAgainYesFunction();
    }, 9000000);


    gifChangeFunction();
}


$(".gs_market_class").on("click", function () {

	$(this).tooltip();
            $(this).tooltip('disable');
            $(this).tooltip("option", "hide");

    gsMarketClassFunction(this.id);
    marketId = this.id;

});
$(".gs_market_class").hover(function () {

    $('#i' + this.id).attr('src', 'assets/image/L2574_' + this.id + '_hover.gif');
    $('#i' + this.id).css({
        'width': '6.5em',
        'height': '5.2em'

    });
}, function () {

    $('#i' + this.id).attr('src', 'assets/image/L2574_' + this.id + '_afterhover_' + randomValue[0] + '.png');
    $('#i' + this.id).css({
        'width': '103px',
        'height': '65px'
    });
});


$(".gsm_modal_wanted_img_class").draggable({
    scroll: false,

    revert: function (socketObj) {
        if (socketObj === false) {
            $("#gs_error_popup_cloud_text").html("You've missed the mark! Try again.");
            displayErrorPopupFun();
        } else {

        }
    },
    start: function (e) {

        dragedId = e.target.id;
        $("#" + dragedId).tooltip({
            track: false
        });
        $("#" + dragedId).parent().tooltip("disable");
        click.x = e.clientX;
        click.y = e.clientY;

    },
    helper: function () {
        return $(this).clone().css({
            "z-index": "50",
            "transform": "scale(1, 1 )",
            "cursor": "pointer",
            "-moz-transition": "none",
            "-webkit-transition": " none",
            "transition": " none",

        });
    },
    drag: function (e, ui) {
        dragedId = e.target.id;

        var original = ui.originalPosition;
        var last = (e.pageX - click.x + original.left) / zoom;
        var last1 = (e.pageY - click.y + original.top) / zoom;
        ui.position = {
            left: last,
            top: last1
        };
        var dragFishId = $(this).attr("id");
        var dragTitle = dragFishId.replace("_img", "_title");
        fishName = $("#" + dragTitle).attr('data-fish');
        palcedrop(dragedId);
    },
    stop: function (event, ui) {
        dragedId = event.target.id;
        $("#" + dragedId).tooltip({
            track: true
        });
        $("#" + dragedId).parent().tooltip("enable");
        $("#" + dragedId).parent().attr("title", "");
        $("#" + dragedId).parent().removeClass('ui-droppable');
        $("#" + dragedId).parent().removeClass('droppable');
        ;
    }

});


var fizzerYesFunc = function () {

    $('#gs_fizzer_buy_overlay').hide();
    stockUpdater(temp1, temp2, temp3, temp4);
    $('#gs_popup_cloud').css('display', 'none');
    fizzerFlag = "true";
    $("#congratsDiv").css("display", "block");
    $("#congratImg").css("display", "block");
    setTimeout(function () {
        $("#congratCloudGif").attr("src", "assets/image/L2574_Cloud.gif");
    }, 0);

    setTimeout(startAgainYesFunction, 3000);
    setTimeout(function () {
        $("#congratImg").css("display", "none");
    }, 5500);
    setTimeout(function () {
        $("#congratsDiv").css("display", "none");
        $("#congratCloudGif").attr("src", "assets/image/L2574_Cloud.png");
    }, 7000);
};
var fizzerBuyPopupCloseFun = function () {
    $('#gs_fizzer_buy_overlay').hide();
}
$("#gs_fizzer_buy_yes").click(fizzerYesFunc);
$("#gs_fizzer_buy_no").click(fizzerBuyPopupCloseFun);
$("#gs_fizzer_buy_close").click(fizzerBuyPopupCloseFun);

$("#gs_fish_stock").droppable({
    accept: '.gsm_modal_wanted_img_class',
    hoverClass: "ui-state-active",
    drop: function (ev, ui) {


        var saleDropid = ev.target.id;
        var draggable = ui.draggable;
        var saleTrader = $("#" + dragedId).attr("data-owner");
        var saleFishName = draggable.attr("data-value");
        var testid = $("#" + ui.draggable[0].id).siblings()[1].id;
        $("#wantedToolTips").css({
            "display": "none"
        });

        var gsmprice = parseInt($('#' + testid + ' p').text().replace("$", ""));
        if ($("#gs_cash").html() < gsmprice) {
            $("#gs_error_popup_cloud_text").html("You don't have enough cash!");
            displayErrorPopupFun();

        } else {
            if (saleFishName == "Fizzer") {
                $("#gs_fizzer_buy_overlay").show();
                $("#gs_fizzer_buy_overlay").focus();
                temp1 = saleTrader;
                temp2 = saleFishName;
                temp3 = dragedId;
                temp4 = gsmprice;
            } else {
                stockUpdater(saleTrader, saleFishName, dragedId, gsmprice);
            }
        }
    }
});


$(".gsm_modal_wanted_class").droppable({
    accept: ".gsm_modal_wanted_img_stock",
    over: function (ev, ui) {
        var wantedDropid = ev.target.id;
        var draggable = ui.draggable;
        var stockFishName = draggable.attr("data-value");
        if (stockFishName == $("#" + wantedDropid).attr("data-value")) {

            $(this).addClass('divWantedHover');
        }

    },
    out: function (ev, ui) {
        $(this).removeClass('divWantedHover');

    },

    drop: function (ev, ui) {

        $(this).removeClass('divWantedHover');
        var wantedDropid = ev.target.id;
        var draggable = ui.draggable;
        var stockFishName = draggable.attr("data-value");
        var wantedTrader = $("#" + wantedDropid).attr("data-owner");

        if (stockFishName == $("#" + wantedDropid).attr("data-value")) {


            var test1id = $(this).children()[2].id;
            var gswmprice = parseInt($('#' + $(this).children()[2].id).children().text().replace("$", ""));
            marketUpdater(wantedTrader, stockFishName, wantedDropid, gswmprice);
        } else {
            $("#gs_error_popup_cloud_text").html("You've missed the mark! Try again.");
            displayErrorPopupFun();
        }
    }
});

var addfish = function () {
    $('<div/>', {
        id: 'fish' + stockCounter,
        class: 'randomFishes'
    }).appendTo('#gs_stock');
    animateFish();
}

var removefish = function () {
    $('#fish' + (stockCounter + 1)).remove();
}

var animateFish = function () {
    var box = $('#gs_stock');
    var width = 80;
    var height = 70;
    var fishes = $('.randomFishes');
    fishes.each(function loopAnimFish() {
        var top = (Math.sin(90) * Math.random() * height);
        var left = (Math.sin(360) * Math.random() * width);
        var time = Math.sin(90) * (800 - 400) + 800 | 0;
        $(this).animate({
            left: left,
            top: top
        }, time, loopAnimFish);
    });
};

var wantedDivFunction = function (element) {
    $('#' + element).off("focus blur keydown mousedown").on("focus blur keydown mousedown", function (event) {
        if (event.type == 'focus') {
          if(event.target.className=="gsm_modal_gif_class" || "gsm_modal_wanted_class"|| "gsm_model_sale_class"){
            $(this).tooltip({
              disabled:true,
            })
          }else{
            $(this).tooltip({
              disabled:false,
            })
          }

          if (event.target.className == "gs_fish_stock_class"||"gsm_model_sale_class") {


            $(".gs_fish_stock_toolTips").tooltip();
            $(".gs_fish_stock_toolTips").tooltip("option", "content", "");
              $(".gs_fish_stock_toolTips").tooltip("option", "hide",  { effect: "fadein", duration: 10 });
          }


            $(this).addClass('focus-div');

            if (event.target.className.split(" ")[0] == "gs_history_class") {

                $("#" + $(this).children()[0].id).css({
                    "background": "url('assets/image/L2574_Bluepuff_history_hover.png')",
                    "background-size": "90% 90%",
                    "background-repeat": "no-repeat",
                });
            }
        }
        if (event.type == 'mousedown') {
            event.stopImmediatePropagation();
            event.preventDefault();
            $(this).trigger("blur");
        }
        if (event.type == 'blur') {

            $(this).removeClass('focus-div');
            if (event.target.className.split(" ")[0] == "gs_history_class") {

                if ($(this).children().length != 0) {
                    $("#" + $(this).children()[0].id).css({
                        "background": "url('assets/image/L2574_Bluepuff_history.png')",
                        "background-size": "100% 100%",
                        "background-repeat": "no-repeat",
                    });
                }

            }

        }
        if (event.type == "keydown") {
            event.preventDefault();
            event.stopImmediatePropagation();


            if (event.keyCode == 9 && !event.shiftKey) {
                if (event.target.id == "gs_trans_dialog_fish_close_btn") {
                    document.getElementById(event.target.id).focus();
                    return;
                }
                var index = wantedDivArray.indexOf(this.id);
                if (index == wantedDivArray.length - 1) {

                    $("#market15").focus();
                } else if ($('#' + wantedDivArray[index + 1]).css('display') == "none") {

                    for (var init = index + 1; init < wantedDivArray.length; init++) {
                        if ($('#' + wantedDivArray[init]).css('display') == "block") {

                            index = init;
                            document.getElementById(wantedDivArray[index]).focus();
                            break;
                        }
                        if (init == wantedDivArray.length - 1) {
                            init = -1;
                        }
                    }
                } else {

                    $("#" + wantedDivArray[index + 1]).focus();
                }
            } else if ((event.shiftKey && event.keyCode == 9)) {
                event.preventDefault();
                if (event.target.id == "gs_trans_dialog_fish_close_btn") {
                    document.getElementById(event.target.id).focus();
                    return;
                }
                var index = wantedDivArray.indexOf(this.id);
                if (index == wantedDivArray.length - 1) {
                    $("#market15").focus();
                } else {
                    for (var i = index - 1; i >= 0; i--) {
                        var tabCondition = ( ( ( $("#" + wantedDivArray[i]).css("display") == "none" ) ) );

                        if (tabCondition) {
                            index--;
                        } else {

                            index = i;
                            break;
                        }
                    }
                }
                var activeElement = document.activeElement.id == "market1" || document.activeElement.id == "market2"
                    || document.activeElement.id == "market3" || document.activeElement.id == "market4" || document.activeElement.id == "market5"
                    || document.activeElement.id == "market6" || document.activeElement.id == "market7" || document.activeElement.id == "market8"
                    || document.activeElement.id == "market9" || document.activeElement.id == "market10" || document.activeElement.id == "market11"
                    || document.activeElement.id == "market12" || document.activeElement.id == "market13" || document.activeElement.id == "market14"
                    || document.activeElement.id == "market15";
                if (activeElement) {
                    for (var i = wantedDivArray.length - 1; i >= 0; i--) {
                        var tabCondition = ( ( ( $("#" + wantedDivArray[i]).css("display") == "none" ) ) );
                        if (tabCondition) {
                            index--;
                        } else {

                            index = i;
                            break;
                        }
                    }
                }
                $('#' + wantedDivArray[index]).focus();
            } else if (event.keyCode == 13) {
                if (event.target.className.split(" ")[0] == "gs_fish_stock_class") {
                    var value = $("#" + event.target.id).attr("data-value");
                    if ($("#qty" + value).html() == "x0") {

                    } else {
                        cloneFunction(event);
                    }
                } else if (event.target.className.split(" ")[0] == "gs_market_modal_close") {

                    gsMarketModalCloseFunction(event);

                } else if (event.target.className.split(" ")[1] == "gsm_modal_gif_class") {

                    gsModalGifClassFunction(event);
                    $("#gs_market_char_close").focus();

                } else if (event.target.id == "gs_market_char_close") {
                    gsMarketCharClose();
                    for (var init = 0; init < marketModalArrayId.length; init++) {

                        if ($("#" + marketModalArrayId[init]).css("display") == "block") {
                            $("#market" + parseInt(init + 1)).focus();
                            break;
                        }

                    }
                } else if (event.target.className.split(" ")[0] == "gs_history_class") {
                    var historyfish = $("#" + event.target.id).attr("data-history");
                    fishHistoryFunction(historyfish);
                    $("#gs_trans_dialog_fish_close_btn").css("display", "block");
                    $("#gs_trans_dialog_fish_close_btn").focus();
                } else if (event.target.id == "gs_trans_dialog_fish_close_btn") {
                    $("#gs_trans_overlay_fish").css("display", "none");
                    var marketid1 = null;
                    for (var init = 0; init < marketModalArrayId.length; init++) {
                        if ($("#" + marketModalArrayId[init]).css('display') == "block") {
                            marketid1 = init + 1;
                            break;
                        }

                    }
                    $("#gs_trans_dialog_fish_close_btn").css("display", "none");
                    $("#market" + marketid1).focus();
                } else {
                    cloneSaleFunction(event);
                }
            }
        }
    });
};
$('#game_screen').off("focus blur keydown mousedown").on("focus blur keydown mousedown", function (event) {

    if (event.type == "keydown") {
        event.preventDefault();
        event.stopPropagation();
        if (event.keyCode == 9) {
            $("#game_screen").focus();
        }
    }
});

$('#gs_trans_overlay_fish').off("focus blur keydown mousedown").on("focus blur keydown mousedown", function (event) {

    if (event.type == "keydown") {
        event.preventDefault();
        event.stopPropagation();
        if (event.keyCode == 9) {
            $("#gs_trans_dialog_fish_close_btn").focus();
        }
    }
});

$('#gs_brief_overlay').off("focus blur keydown mousedown").on("focus blur keydown mousedown", function (event) {

    if (event.type == "keydown") {
        event.preventDefault();
        event.stopPropagation();
        if (event.keyCode == 9) {
            $("#gs_brief_close").focus();
        }
    }
});

$('#gs_role_overlay').off("focus blur keydown mousedown").on("focus blur keydown mousedown", function (event) {

    if (event.type == "keydown") {
        event.preventDefault();
        event.stopPropagation();
        if (event.keyCode == 9) {
            $("#gs_role_close").focus();
        }
    }
});

document.addEventListener('touchstart', function () {
    audioCorrectLoad = document.getElementById("bubble");
    audioCorrectLoad.play();
    audioCorrectLoad.pause();

    audioWrongLoad = document.getElementById("wrong");
    audioWrongLoad.play();
    audioWrongLoad.pause();
});


$(document).ready(function () {

    audioCorrectLoad = document.getElementById("bubble");
    audioWrongLoad = document.getElementById("wrong");
    $(".gsm_modal_wanted_class").attr("title", "");

    $('.gs_market_modal_close').attr("title", " ");
    $('.gs_market_modal_close').tooltip();
    $('.gs_market_modal_close').tooltip('disable');
    $('.gs_market_modal_close').tooltip('option', 'hide');

    function shuffle(a) {
        var i = 0,
            j = 0,
            temp = null

        for (i = a.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }

    shuffle(randomValue);

    wantedMedianCalc();
    salemedianCalc();
    localStorage.clear();
    localStorage.setItem('marketCount', marketCountArray.length);
    var introDiv = document.querySelectorAll('.selected');
    for (var market = 0; market < introDiv.length; market++) {
        introIdArray.push(introDiv[market].id);
    }

    var marketDiv = document.querySelectorAll('.gs_market_class');
    for (var market = 0; market < marketDiv.length; market++) {
        marketIdArray.push(marketDiv[market].id);
    }
    var gameScreen = document.getElementById("game_screen").querySelectorAll('.tabbed1');
    for (var init = 0; init < gameScreen.length; init++) {
        gameScreenArray.push(gameScreen[init].id);
    }
    var startScreen = document.getElementById("game_screen").querySelectorAll('.tabbed2');

    for (var init = 0; init < startScreen.length; init++) {
        startScreenArray.push(startScreen[init].id);
    }
    var fizzerBuyScreen = document.getElementById("gs_fizzer_buy_popup").querySelectorAll('.tabbed7');

    for (var init = 0; init < fizzerBuyScreen.length; init++) {
        fizzerBuyScreenArray.push(fizzerBuyScreen[init].id);
    }
    var marketModal = document.getElementById("game_screen").querySelectorAll('.gs_market_modal_class');
    for (var init = 0; init < marketModal.length; init++) {
        marketModalArrayId.push(marketModal[init].id);
    }

    var wantedDiv = document.querySelectorAll('.gsm_model_sale_class');

    for (var market = 0; market < wantedDiv.length; market++) {
        wantedDivArray.push(wantedDiv[market].id);
    }



    for (var init = 0; init < arrayIntroTab.length; init++) {
        tab_binder(arrayIntroTab[init]);
    }

    for (var init = 0; init < startScreenArray.length; init++) {
        start_again_tab_binder(startScreenArray[init]);
    }
    for (var init = 0; init < wantedDivArray.length; init++) {
        wantedDivFunction(wantedDivArray[init]);
    }
    for (var init = 0; init < fizzerBuyScreenArray.length; init++) {
        fizzer_Buy_Screen_tab_binder(fizzerBuyScreenArray[init]);
    }


    $('#intro_next').click(isIntroNextFunction);
    $('#intro_back').click(isIntroBackFunction);
    $("#intro_start").click(lsIntroStartFunction);
    $('.gs_market_modal_close').click(gsMarketModalCloseFunction);
    $('#results_history_btn').click(historyFunction);
    $('#gs_trans_dialog_close_btn').click(historyCloseFunction);

    $("#gs_start_again").click(startAgainFunction);
    $("#gs_start_close").click(startAgainCloseFunction);
    $("#gs_start_again_no").click(startAgainCloseFunction);
    $("#gs_start_again_yes").click(startAgainYesFunction);


    $('#progressBar').progressbar({
        value: 20
    });
});


var fishHistoryFunction = function (h) {
    $('#fish_history_table tbody').empty();
    $("#gs_trans_overlay_fish").css("display", "block");
    $("#gs_trans_dialog_fish_close_btn").css("display", "block");
    $("#gs_trans_overlay_fish").focus();
    var fishHBtn = localStorage.getItem("fish" + i + 2);
    var sn = 1;

    var imgCount0 = "img" + sn;
    var successText;
    for (var i = 1; i <= historyCount; i++) {
        var fishHBtn = localStorage.getItem("fish" + i + 2);

        if (h == fishHBtn) {

            var img0 = "assets/image/L2574_Fish_" + localStorage.getItem("fish" + i + 2);

            $('#gs_fish_history_image').css({
                "background-image": "url('" + img0 + ".png')",
                "background-repeat": "no-repeat",
                "background-size": "contain"
            });
            $("#gs_trader_name").text(displayName[h]);
            var img01 = "assets/image/L2574_" + localStorage.getItem("fish" + i + 5);

            if ((localStorage.getItem("fish" + i + 5)) == "Unsuccess") {
                if ((localStorage.getItem("fish" + i + 3)) == "Sell") {
                    successText = "Below average price";
                } else {
                    successText = "Above average price";
                }
            } else if ((localStorage.getItem("fish" + i + 5)) == "Success") {
                if ((localStorage.getItem("fish" + i + 3)) == "Sell") {
                    successText = "Above average price";
                } else {
                    successText = "Below average price";
                }

            } else if ((localStorage.getItem("fish" + i + 5)) == "Average") {
                if ((localStorage.getItem("fish" + i + 3)) == "Sell") {
                    successText = "Average trade";
                } else {
                    successText = "Average price";
                }
            }

            $('#fish_history_table').append(
                '<tr><td>' + sn + ". " + localStorage.getItem("fish" + i + 1) + '</td><td>' +
                localStorage.getItem("fish" + i + 3) + '</td><td>&#36;' + localStorage.getItem("fish" + i + 4) +
                '</td><td><span  class="table_img2"><img id="' + imgCount0 + '" class="smileyImgH" src="' + img01 +
                '.png" alt=""></span><span class="tableTextH">' + successText + '</span></td></tr>');
            sn++;
        }
    }
    if (historyCount < 14) {
        for (var i = 1; i < (16 - sn); i++) {
            $('#fish_history_table').append('<tr><td></td><td></td><td></td><td></td></tr>');
        }
    }
};

$(document).on("click", ".gs_history_class", function () {

    $("#gs_trans_dialog_fish_close_btn").css("display", "block");
    var historyfish = $(this).attr("data-history");
    fishHistoryFunction(historyfish);
});


$(document).on("click", "#gs_trans_dialog_fish_close_btn", function () {
    $("#gs_trans_overlay_fish").css("display", "none");
    $("#gs_trans_dialog_fish_close_btn").css("display", "none");
});

/* Tool tip Code */

var tooltipId = ["gs_cash_toolTips", "gsm_modal_wanted_class", "gs_market_class", "gsm_model_sale_class",
    "gs_stock_toolTips", "gs_fish_stock_toolTips", "gs_status_bar"
];

var wantedPopUpDisplay = function (event) {
    for (var init = 0; init < toolTips.length; init++) {
        if (event.target.className.indexOf(toolTips[init].class) > -1) {
            var last2 = $("#" + this.id).offset();
            if (event.target.className == "gs_stock_toolTips") {
                var description = toolTips[init].description.replace('_stockamount', stockCounter);
                description = description.replace('_stockvalue', resultStockValue);
                $(".gs_stock_toolTips").tooltip({
                    open: function (event, ui) {
                        var toolTipWidth = $('#' + ui.tooltip[0].id).css('width');
                        $('#' + ui.tooltip[0].id).css('width', parseInt(toolTipWidth) * zoom);
                        var toolTipHeight = $('#' + ui.tooltip[0].id).css('height');
                        $('#' + ui.tooltip[0].id).css('height', parseInt(toolTipHeight) * zoom);
                        var toolTipFont = $('#' + ui.tooltip[0].id).css('font-size');
                        $('#' + ui.tooltip[0].id).css('font-size', parseInt(toolTipFont) * zoom);
                    },
                    classes: {
                        "ui-tooltip": "highlight"
                    },

                    track: true,
                });
                $(".gs_stock_toolTips").tooltip("option", "content", description);
            } else if (event.target.className.split(" ")[0] == "gs_fish_stock_toolTips") {

                var description1 = toolTips[init].description;

                $(".gs_fish_stock_toolTips").tooltip({
                    open: function (event, ui) {
                        event.preventDefault();
                        event.stopPropagation();
                        var toolTipWidth = $('#' + ui.tooltip[0].id).css('width');
                        $('#' + ui.tooltip[0].id).css('width', parseInt(toolTipWidth) * zoom);
                        var toolTipHeight = $('#' + ui.tooltip[0].id).css('height');
                        $('#' + ui.tooltip[0].id).css('height', parseInt(toolTipHeight) * zoom);
                        var toolTipFont = $('#' + ui.tooltip[0].id).css('font-size');
                        $('#' + ui.tooltip[0].id).css('font-size', parseInt(toolTipFont) * zoom);

                    },
                    classes: {
                        "ui-tooltip": "highlight"
                    },
                    track: true,
                });

                $(".gs_fish_stock_toolTips").tooltip("option", "content", description1);

            } else if (event.target.className == "gs_status_bar") {
                var description4 = toolTips[init].description.replace('_statusvalue', globalMarketStatus);
                $(".gs_status_bar").tooltip({
                    open: function (event, ui) {
                        var toolTipWidth = $('#' + ui.tooltip[0].id).css('width');
                        $('#' + ui.tooltip[0].id).css('width', parseInt(toolTipWidth) * zoom);
                        var toolTipHeight = $('#' + ui.tooltip[0].id).css('height');
                        $('#' + ui.tooltip[0].id).css('height', parseInt(toolTipHeight) * zoom);
                        var toolTipFont = $('#' + ui.tooltip[0].id).css('font-size');
                        $('#' + ui.tooltip[0].id).css('font-size', parseInt(toolTipFont) * zoom);
                    },
                    classes: {
                        "ui-tooltip": "highlight"
                    },
                    track: true,
                });
                $(".gs_status_bar").tooltip("option", "content", description4);
            } else {

                $("." + toolTips[init].class).tooltip({
                    open: function (event, ui) {
                        var toolTipWidth = $('#' + ui.tooltip[0].id).css('width');
                        $('#' + ui.tooltip[0].id).css('width', parseInt(toolTipWidth) * zoom);
                        var toolTipHeight = $('#' + ui.tooltip[0].id).css('height');
                        $('#' + ui.tooltip[0].id).css('height', parseInt(toolTipHeight) * zoom);
                        var toolTipFont = $('#' + ui.tooltip[0].id).css('font-size');
                        $('#' + ui.tooltip[0].id).css('font-size', parseInt(toolTipFont) * zoom);
                    },
                    classes: {
                        "ui-tooltip": "highlight"
                    },
                    track: true,
                });
                $("." + toolTips[init].class).tooltip("option", "content", toolTips[init].description);

            }
        }
    }
};

$(".gs_fish_stock_toolTips").children().mouseover(function(){


    $(".gs_fish_stock_toolTips").tooltip({
        open: function(event, ui) {

            var toolTipWidth = $('#' + ui.tooltip[0].id).css('width');
            $('#' + ui.tooltip[0].id).css('width', parseInt(toolTipWidth) * zoom);
            var toolTipHeight = $('#' + ui.tooltip[0].id).css('height');
            $('#' + ui.tooltip[0].id).css('height', parseInt(toolTipHeight) * zoom);
            var toolTipFont = $('#' + ui.tooltip[0].id).css('font-size');
            $('#' + ui.tooltip[0].id).css('font-size', parseInt(toolTipFont) * zoom);

        },
        classes: {
            "ui-tooltip": "highlight1"
        },
        track: true,
    });

    $(".gs_fish_stock_toolTips").tooltip("option", "content", "This is a fish that you have for sale. Move it onto the matching picture in a trader's 'Wanted' area to sell it.");

});

$(document).on('mouseover','.gsm_modal_wanted_img_stock_empty',function(){

    $(".gs_fish_stock_toolTips").tooltip({
        open: function(event, ui) {

            var toolTipWidth = $('#' + ui.tooltip[0].id).css('width');
            $('#' + ui.tooltip[0].id).css('width', parseInt(toolTipWidth) * zoom);
            var toolTipHeight = $('#' + ui.tooltip[0].id).css('height');
            $('#' + ui.tooltip[0].id).css('height', parseInt(toolTipHeight) * zoom);
            var toolTipFont = $('#' + ui.tooltip[0].id).css('font-size');
            $('#' + ui.tooltip[0].id).css('font-size', parseInt(toolTipFont) * zoom);

        },
        classes: {
            "ui-tooltip": "highlight1"
        },
        track: true,
    });

    $(".gs_fish_stock_toolTips").tooltip("option", "content", "You have sold all of your stock of this fish.");

});

$(".gs_history_class").mouseover(function(event){

    $(".gs_fish_stock_toolTips").tooltip("option", "content","");
    $(".gs_fish_stock_toolTips").tooltip({
        open: function(event, ui) {
            event.stopImmediatePropagation();
            var toolTipWidth = $('#' + ui.tooltip[0].id).css('width');
            $('#' + ui.tooltip[0].id).css('width', parseInt(toolTipWidth) * zoom);
            var toolTipHeight = $('#' + ui.tooltip[0].id).css('height');
            $('#' + ui.tooltip[0].id).css('height', parseInt(toolTipHeight) * zoom);
            var toolTipFont = $('#' + ui.tooltip[0].id).css('font-size');
            $('#' + ui.tooltip[0].id).css('font-size', parseInt(toolTipFont) * zoom);

        },
        classes: {
            "ui-tooltip": "highlight1"
        },
        track: true,
    });

    $(".gs_fish_stock_toolTips").tooltip("option", "content", "Select 'H' to review your transaction history for this breed of fish.");

});



var wantedPopUpNone = function () {


    for (var init = 0; init < toolTips.length; init++) {

        $("." + toolTips[init].class).tooltip();
        $("." + toolTips[init].class).tooltip("option", "hide", {
            effect: "fadeout",
            duration: 0
        });
    }
};

$(".gs_fish_stock_class").mouseout(wantedPopUpNone);
$(".gs_history_class").mouseout(wantedPopUpNone);
$(document).on('mouseout','.gsm_modal_wanted_img_stock_empty', wantedPopUpNone);


for (var toolId = 0; toolId < tooltipId.length; toolId++) {

    $("." + tooltipId[toolId]).mouseover(wantedPopUpDisplay).mouseout(wantedPopUpNone);
}
/* Tool tip Code ends */


var statusBarFunction = function (success) {
    startProgress(success);
    if (globalMarketStatus == 100) {
        $("#star4").animate({
            top: "0px"
        });
    } else if (globalMarketStatus > 75) {
        $("#star3").animate({
            top: "0px"
        });
        star4Animation(success);
    } else if (globalMarketStatus > 50) {
        $("#star4").animate({
            top: "90px"
        });
        $("#star2").animate({
            top: "0px"
        });
        star3Animation(success);
    } else if (globalMarketStatus > 25) {
        $("#star3").animate({
            top: "80px"
        });
        $("#star1").animate({
            top: "0px"
        });
        star2Animation(success);
    } else {
        $("#star2").animate({
            top: "75px"
        });
        star1Animation(success);
    }
}


function startProgress(starSucc) {

    if (starSucc == "Success") {
        width0 += 5;
        $("#progressBar > .ui-progressbar-value ").animate({
            width: width0 + "%"
        });
    } else if (starSucc == "Average") {
        width0 += 3;
        $("#progressBar > .ui-progressbar-value ").animate({
            width: width0 + "%"
        });
    } else {
        width0 -= 5;
        $("#progressBar > .ui-progressbar-value ").animate({
            width: width0 + "%"
        });
    }

    if (width0 >= 100) {
        width0 = 100;
        $("#progressBar > .ui-progressbar-value ").animate({
            width: width0 + "%"
        });
    }
    if (width0 <= 0) {
        width0 = 0;
        $("#progressBar > .ui-progressbar-value ").animate({
            width: width0 + "%"
        });
    }
}

function star1Animation(status) {

    if (status == "Success") {
        starValue1 -= 12;
        $("#star1").animate({
            top: starValue1 + "px"
        });
    } else if (status == "Average") {
        starValue1 -= 7.2;
        $("#star1").animate({
            top: starValue1 + "px"
        });
    } else {
        starValue1 += 12;
        $("#star1").animate({
            top: starValue1 + "px"
        });
    }
}

function star2Animation(status) {

    if (status == "Success") {
        starValue2 -= 15;
        $("#star2").animate({
            top: starValue2 + "px"
        });
    } else if (status == "Average") {
        starValue2 -= 9;
        $("#star2").animate({
            top: starValue2 + "px"
        });
    } else {
        starValue2 += 15;
        $("#star2").animate({
            top: starValue2 + "px"
        });
    }
}

function star3Animation(status) {

    if (status == "Success") {
        starValue3 -= 16;
        $("#star3").animate({
            top: starValue3 + "px"
        });
    } else if (status == "Average") {
        starValue3 -= 10.5;
        $("#star3").animate({
            top: starValue3 + "px"
        });
    } else {
        starValue3 += 16;
        $("#star3").animate({
            top: starValue3 + "px"
        });
    }
}

function star4Animation(status) {

    if (status == "Success") {
        starValue4 -= 18;
        $("#star4").animate({
            top: starValue4 + "px"
        });
    } else if (status == "Average") {
        starValue4 -= 10.8;
        $("#star4").animate({
            top: starValue4 + "px"
        });
    } else {
        starValue4 += 18;
        $("#star4").animate({
            top: starValue4 + "px"
        });
    }
}


var displayErrorPopupFun = function () {
    $('#gs_popup_cloud').css('display', 'none');
    audioWrongLoad.play();
    $("#gs_error_popup_cloud").css('display', 'block');
    setTimeout(function () {
        $("#gs_error_popup_cloud_img").attr('src', 'assets/image/L2574_Cloud.gif');
    }, 0);


    $('#gs_error_popup_cloud_text').css('display', 'block');
    $('#gs_error_sad_smiley').css('display', 'block');
    setTimeout(function () {
        $('#gs_error_popup_cloud_text').css('display', 'none');
        $('#gs_error_sad_smiley').css('display', 'none');
    }, 5500);
    setTimeout(function () {
        $('#gs_error_popup_cloud').css('display', 'none');
        $('#gs_error_popup_cloud_img').attr('src', 'assets/image/L2574_Cloud.png');
    }, 6200);
}
var resultStatusFunction = function () {
    $("#results_print").css("pointer-events", "none");
    if (resultStatus == globalMarketStatus + 1) {
        $("#results_print").css("pointer-events", "all");
        $('#gs_status_video').css("background", "none");
        $("#statusgif").css("display", "block");
        $("#statusgif").attr("src", "assets/image/" + globalMarketStatus + ".png");

        return;
    }
    if (globalMarketStatus == 0) {
        $('#gs_status_video').css({
            "background": "url('assets/image/statusSprite.png') " + "0px " + resultStatus + "px"
        });

    } else {

        $('#gs_status_video').css({
            "background": "url('assets/image/statusSprite.png') " + "0px -" + resultStatus * 160 + "px"

        });


    }

    resultStatus++;
    if (resultStatus <= globalMarketStatus + 1) {
        setTimeout(resultStatusFunction, 50);
    }

};

var palcedrop = function (id) {
    $("#" + id).parent().droppable({
        accept: $("#" + id),
    });
}

$('#start_again_img').hover(function () {
    $(this).attr("src", "assets/image/L2574_Start_again_hover.gif");
}, function () {
    $(this).attr("src", "assets/image/L2574_Start_again.png");
});

$('#start_again_img').mousedown(function () {
    $(this).attr("src", "assets/image/L2574_Start_again_focus.png");
});
$('#start_again_img').mouseup(function () {
    $(this).attr("src", "assets/image/L2574_Start_again.png");
});

$('#gs_start_again_yes_img').hover(function () {
    $(this).attr("src", "assets/image/L2574_Yes_button_hover.gif");
}, function () {
    $(this).attr("src", "assets/image/L2574_Yes_button.png");
});

$('#gs_start_again_yes_img').mousedown(function () {
    $(this).attr("src", "assets/image/L2574_Yes_button_focus.png");
});
$('#gs_start_again_yes_img').mouseup(function () {
    $(this).attr("src", "assets/image/L2574_Yes_button.png");
});

$('#gs_start_again_no_img').hover(function () {
    $(this).attr("src", "assets/image/L2574_No_button_hover.gif");
}, function () {
    $(this).attr("src", "assets/image/L2574_No_button.png");
});

$('#gs_start_again_no_img').mousedown(function () {
    $(this).attr("src", "assets/image/L2574_No_button_focus.png");
});
$('#gs_start_again_no_img').mouseup(function () {
    $(this).attr("src", "assets/image/L2574_No_button.png");
});

$('#results_history_btn_img').hover(function () {
    $(this).attr("src", "assets/image/L2574_History_hover.gif");
}, function () {
    $(this).attr("src", "assets/image/L2574_History.png");
});

$('#results_history_btn_img').mousedown(function () {
    $(this).attr("src", "assets/image/L2574_History_focus.png");
});
$('#results_history_btn_img').mouseup(function () {
    $(this).attr("src", "assets/image/L2574_History.png");
});
$('#results_print_img').hover(function () {
    $(this).attr("src", "assets/image/L2574_Print_hover.gif");
}, function () {
    $(this).attr("src", "assets/image/L2574_Print.png");
});

$('#results_print_img').mousedown(function () {
    $(this).attr("src", "assets/image/L2574_Print_focus.png");
});
$('#results_print_img').mouseup(function () {
    $(this).attr("src", "assets/image/L2574_Print.png");
});

$('#results_start_again_img').hover(function () {
    $(this).attr("src", "assets/image/L2574_Result_start_hover.gif");
}, function () {
    $(this).attr("src", "assets/image/L2574_Result_start.png");
});

$('#results_start_again_img').mousedown(function () {
    $(this).attr("src", "assets/image/L2574_Result_start_focus.png");
});
$('#results_start_again_img').mouseup(function () {
    $(this).attr("src", "assets/image/L2574_Result_start.png");
});

$('#gs_fizzer_buy_yes_img').hover(function () {
    $(this).attr("src", "assets/image/L2574_Yes_button_hover.gif");
}, function () {
    $(this).attr("src", "assets/image/L2574_Yes_button.png");
});

$('#gs_fizzer_buy_yes_img').mousedown(function () {
    $(this).attr("src", "assets/image/L2574_Yes_button_focus.png");
});
$('#gs_fizzer_buy_yes_img').mouseup(function () {
    $(this).attr("src", "assets/image/L2574_Yes_button.png");
});

$('#gs_fizzer_buy_no_img').hover(function () {
    $(this).attr("src", "assets/image/L2574_No_button_hover.gif");
}, function () {
    $(this).attr("src", "assets/image/L2574_No_button.png");
});

$('#gs_fizzer_buy_no_img').mousedown(function () {
    $(this).attr("src", "assets/image/L2574_No_button_focus.png");
});
$('#gs_fizzer_buy_no_img').mouseup(function () {
    $(this).attr("src", "assets/image/L2574_No_button.png");
});

var focusElementPositionTop = null;
var focusElementPositionLeft = null;
var focusElementPositionTop1 = null;
var focusElementPositionLeft1 = null;


var cloneFunction = function (event) {
    var str = event.target.id;

    var stringLength = str.length;
    var lastChar = parseInt(str.charAt(stringLength - 1)) - 1;
    var cloneWidth = parseInt($("#" + event.target.id).css("width"));
    var cloneHeight = parseInt($("#" + event.target.id).css("height"));
    var cloneLeft = ($("#" + event.target.id).offset().left - cloneWidth) / zoom;
    var cloneTop = ($("#" + event.target.id).offset().top) / zoom;
    var clone = $("#" + event.target.id).parent().find(".gs_fish_stock_toolTips").children("div:eq(" + lastChar + ")")
        .clone().appendTo("#game_screen").css({
            "float": "none",
            "z-index": "10",
            "height": "90px",
            "width": "100px",
            "top": cloneTop + "px",
            "left": cloneLeft + "px",
            "position": "absoslute"
        });
    clone.attr("id", str + "_clone");
    clone.attr("class", "removeclone tabbed1 focus-div");
    clone.attr("tabindex", 0);
    clone.focus();

    var clickElement = $('#' + str + "_clone").offset();
    var clickElementHeight = parseInt($('#' + str + "_clone").css("height"));
    var clickElementWidth = parseInt($('#' + str + "_clone").css("width"));
    var clickItemLeft = (clickElement.left - clickElementWidth - 50) / zoom;
    var clickItemTop = (clickElement.top) / zoom;

    focusElementPositionTop = clickItemTop;
    focusElementPositionLeft = clickItemLeft-clickElementWidth;


    $('#' + str + "_clone").off("focus blur keydown mousedown").on("focus blur keydown mousedown", function (event) {
        if (event.type == 'focus') {

            $(this).addClass('focus-div');
        }
        if (event.type == 'mousedown') {
            event.stopImmediatePropagation();
            event.preventDefault();

            $(this).trigger("blur");

        }
        if (event.type == 'blur') {

            $(this).removeClass('focus-div');

        }
        if (event.type == "keydown") {
            event.preventDefault();
            if (event.keyCode == 38) {
                idd(event);
                focusElementPositionTop = focusElementPositionTop - 10 / zoom;
                this.style.top = focusElementPositionTop + "px";
            } else if (event.keyCode == 40) {
                idd(event);
                focusElementPositionTop = focusElementPositionTop + 10 / zoom;
                this.style.top = focusElementPositionTop + "px";
            } else if (event.keyCode == 37) {
                idd(event);
                focusElementPositionLeft = focusElementPositionLeft - 10 / zoom;
                this.style.left = focusElementPositionLeft + "px";
            } else if (event.keyCode == 39) {
                idd(event);
                focusElementPositionLeft = focusElementPositionLeft + 10 / zoom;
                this.style.left = focusElementPositionLeft + "px";
            }
            if (event.keyCode == 9) {
                $('#' + str).focus();
                $('#' + str + "_clone").remove();
            } else if (event.keyCode == 13) {
                event.stopImmediatePropagation();
                enterDropFunction(event.target.id);
                $(".gsm_modal_wanted_class").removeClass("divWantedHover");
            }
        }
    });
    return event.target.id;

};

var enterDropFunction = function (cloneId) {
    var openMarketIndex = null;
    var comparedFishPosition = null;
    var comparedFishHeight = null;
    var comparedFishWidth = null;
    var draggedFishPositionTop = null;
    var draggedFishPositionLeft = null;
    var wantedDropid = null;
    var stockFishName = null;
    var wantedTrader = null;
    var test1id = null;
    var gswmprice = null;
    var disapperFlag = true;
    var x = null;
    for (var init = 0; init < marketModalArrayId.length; init++) {
        if ($("#" + marketModalArrayId[init]).css('display') == "block") {
            openMarketIndex = init + 1;
            break;
        }
    }
    if (openMarketIndex == null) {
        $("#" + cloneId).remove();
        return;
    }

    var init = 1;
    for (init = 1; init <= 3; init++) {
        var wantedDiv1FishesDataValue = $("#gsm_modal" + openMarketIndex + "_row" + init + "_wanted1").attr("data-value");
        var wantedDiv2FishesDataValue = $("#gsm_modal" + openMarketIndex + "_row" + init + "_wanted2").attr("data-value");
        var draggedFishDataValue = $("#" + cloneId).attr("data-value");

        if ($("#gsm_modal" + openMarketIndex + "_row" + init + "_wanted1").attr("data-value") ==
            $("#" + cloneId).attr("data-value") && $("#gsm_modal" + openMarketIndex + "_row" + init + "_wanted1").hasClass("divWantedHover")) {
            disapperFlag = false;
            comparedFishPosition = $("#gsm_modal" + openMarketIndex + "_row" + init + "_wanted1").offset();
            comparedFishHeight = parseInt($("#gsm_modal" + openMarketIndex + "_row" + init + "_wanted1").css("height"));
            comparedFishWidth = parseInt($("#gsm_modal" + openMarketIndex + "_row" + init + "_wanted1").css("width"));
            draggedFishPositionTop = parseInt($("#" + cloneId).offset().top);
            draggedFishPositionLeft = parseInt($("#" + cloneId).offset().left);

            if (((comparedFishPosition.top + comparedFishHeight) > draggedFishPositionTop) &&
                (comparedFishPosition.top < draggedFishPositionTop) &&
                ((comparedFishPosition.left + comparedFishWidth) > draggedFishPositionLeft) &&
                ((comparedFishPosition.left) < draggedFishPositionLeft)) {
                x = $("#" + cloneId).attr("data-value");

                wantedDropid = "gsm_modal" + openMarketIndex + "_row" + init + "_wanted1";
                stockFishName = x;
                wantedTrader = $("#" + wantedDropid).attr("data-owner");

                if (stockFishName == $("#" + wantedDropid).attr("data-value")) {
                    test1id = $("#" + wantedDropid).children()[2].id;
                    gswmprice = $("#" + $("#" + wantedDropid).children()[2].id).children("p").text()
                        .replace("$", " ");
                }
                $("#" + cloneId).remove();
                marketUpdater(wantedTrader, stockFishName, wantedDropid, gswmprice);
                break;
            } else {

                $("#gs_error_popup_cloud_text").html("You've missed the mark! Try again.");
                displayErrorPopupFun();
                $("#" + cloneId).remove();
                break;
            }

        } else if ($("#gsm_modal" + openMarketIndex + "_row" + init + "_wanted2").attr("data-value") ==
            $("#" + cloneId).attr("data-value") && $("#gsm_modal" + openMarketIndex + "_row" + init + "_wanted2").hasClass("divWantedHover")) {
            disapperFlag = false;
            comparedFishPosition = $("#gsm_modal" + openMarketIndex + "_row" + init + "_wanted2").offset();
            comparedFishHeight = parseInt($("#gsm_modal" + openMarketIndex + "_row" + init + "_wanted2").css("height"));
            comparedFishWidth = parseInt($("#gsm_modal" + openMarketIndex + "_row" + init + "_wanted2").css("width"));
            draggedFishPositionTop = parseInt($("#" + cloneId).offset().top);
            draggedFishPositionLeft = parseInt($("#" + cloneId).offset().left);
            if (((comparedFishPosition.top + comparedFishHeight) > draggedFishPositionTop) &&
                (comparedFishPosition.top < draggedFishPositionTop) &&
                ((comparedFishPosition.left + comparedFishWidth) > draggedFishPositionLeft) &&
                ((comparedFishPosition.left) < draggedFishPositionLeft)) {
                x = $("#" + cloneId).attr("data-value");
                $("#" + cloneId).remove();
                wantedDropid = "gsm_modal" + openMarketIndex + "_row" + init + "_wanted2";
                stockFishName = x;
                wantedTrader = $("#" + wantedDropid).attr("data-owner");

                if (stockFishName == $("#" + wantedDropid).attr("data-value")) {
                    test1id = $("#" + wantedDropid).children()[2].id;
                    gswmprice = $("#" + $("#" + wantedDropid).children()[2].id).children("p").text()
                        .replace("$", " ");
                }

                marketUpdater(wantedTrader, stockFishName, wantedDropid, gswmprice);
                break;

            } else {
                $("#gs_error_popup_cloud_text").html("You've missed the mark! Try again.");
                displayErrorPopupFun();
                $("#" + cloneId).remove();
                break;
            }

        }
    }

    if (init == 4) {
        $("#gs_error_popup_cloud_text").html("You've missed the mark! Try again.");
        displayErrorPopupFun();
        $("#" + cloneId).remove();
    }


    if (disapperFlag) {
        $("#" + cloneId).remove();
    }
    var normalId = cloneId.replace("_clone", "");
    $("#" + normalId).focus();

};


var cloneSaleFunction = function (event) {

    var str = event.target.id;

    var cloneImage = $("#" + event.target.id + "_img").clone().appendTo($("#" + event.target.id)).css({
        "float": "none",
        "margin": "0px",
        "z-index": "10",
        "height": "90px",
        "width": "100px",
        "position": "absolute"
    });


    cloneImage.attr("id", str + "_sale_clone");
    cloneImage.attr("class", "removeclone tabbed1 focus-div");
    cloneImage.attr("tabindex", 0);
    cloneImage.focus();


    var clickElement = $('#' + str).position();
    var clickItemLeft = clickElement.left;
    var clickItemTop = clickElement.top;
    var clickElementWidth = parseInt($('#' + str).css('width'));
    var salecol = str.slice(-1);
    if (salecol == "1") {
        focusElementPositionTop1 = clickItemTop / zoom;
        focusElementPositionLeft1 = clickItemLeft;
    } else {
        focusElementPositionTop1 = clickItemTop / zoom;
        focusElementPositionLeft1 = (clickItemLeft - clickElementWidth) / zoom;
    }


    $('#' + str + "_sale_clone").off("focus blur keydown mousedown").on("focus blur keydown mousedown", function (event) {
        if (event.type == 'focus') {

            $(this).addClass('focus-div');
        }
        if (event.type == 'mousedown') {
            event.stopImmediatePropagation();
            event.preventDefault();

            $(this).trigger("blur");

        }
        if (event.type == 'blur') {

            $(this).removeClass('focus-div');

        }

        if (event.type == "keydown") {
            event.preventDefault();
            if (event.keyCode == 38) {
                divhover(event.target.id, "gs_fish_stock");
                focusElementPositionTop1 = focusElementPositionTop1 - 10;
                this.style.top = focusElementPositionTop1 + "px";
            } else if (event.keyCode == 40) {
                divhover(event.target.id, "gs_fish_stock");
                focusElementPositionTop1 = focusElementPositionTop1 + 10;
                this.style.top = focusElementPositionTop1 + "px";
            } else if (event.keyCode == 37) {
                divhover(event.target.id, "gs_fish_stock");
                focusElementPositionLeft1 = focusElementPositionLeft1 - 10;
                this.style.left = focusElementPositionLeft1 + "px";
            } else if (event.keyCode == 39) {
                divhover(event.target.id, "gs_fish_stock");
                focusElementPositionLeft1 = focusElementPositionLeft1 + 10;
                this.style.left = focusElementPositionLeft1 + "px";
            } else if (event.keyCode == 9) {

                $(this).remove();

            } else if (event.keyCode == 13) {
                event.stopImmediatePropagation();
                $("#gs_fish_stock").removeClass("ui-state-active");
                var sale = $("#gs_fish_stock").offset();
                var saleHeight = parseInt($("#gs_fish_stock").css("height"));
                var saleWidth = parseInt($("#gs_fish_stock").css("width"));
                var dragleft = $(this).offset().left;
                var dragtop = $(this).offset().top;

                var a = $("#" + str + "_sale_clone").offset().left;
                var b = $("#" + str + "_sale_clone").offset().top;
                var c = parseInt($("#" + str).css("width"));
                var d = parseInt($("#" + str).css("height"));
                var e = $("#" + str).offset().left;
                var f = $("#" + str).offset().top;

                if (((a > (e - 30)) && (a < ((e + c) - 30))) && ((b > (f - 30)) && (b < ((f + d) - 30)))) {
                    $(this).remove();
                    audioWrongLoad.play();
                } else if (sale.top < dragtop && (sale.top + saleHeight) > dragtop && sale.left < dragleft && (sale.left + saleWidth) > dragleft) {
                    var pricesale = $("#" + str + "_price").find("p").text().replace("$", " ");

                    $(this).remove();
                    if (parseInt($("#gs_cash").html()) > parseInt(pricesale)) {

                        if ($(this).attr("data-value") == "Fizzer") {
                            $("#gs_fizzer_buy_overlay").show();
                            $("#gs_fizzer_buy_close").focus();
                            temp1 = $(this).attr("data-owner");
                            temp2 = $(this).attr("data-value");
                            temp3 = str + "_img";
                            temp4 = pricesale;
                            return;
                        } else {
                            stockUpdater($(this).attr("data-owner"), $(this).attr("data-value"), str + "_img", pricesale);
                        }
                    } else {
                        $("#gs_error_popup_cloud_text").html("You don't have enough cash!");
                        displayErrorPopupFun();
                    }
                } else {
                    $("#gs_error_popup_cloud_text").html("You've missed the mark! Try again.");
                    displayErrorPopupFun();
                    $(this).remove();
                }
                $('#' + str).focus();
            }
        }
    });

};


var divhover = function (id, div2) {

    var x1 = $("#" + id).offset().left;
    var y1 = $("#" + id).offset().top;
    var h1 = parseInt($("#" + id).css("height"));
    var w1 = parseInt($("#" + id).css("width"));
    var b1 = y1 + h1 - 100;
    var r1 = x1 + w1 - 130;

    var x2 = $("#" + div2).offset().left;

    var y2 = $("#" + div2).offset().top;
    var h2 = parseInt($("#" + div2).css("height"));
    var w2 = parseInt($("#" + div2).css("width"));
    var b2 = y2 + h2 - 100;
    var r2 = x2 + w2 - 60;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {

        $("#gs_fish_stock").removeClass("ui-state-active");
    } else {

        $("#gs_fish_stock").addClass("ui-state-active");
    }
}


var divhover1 = function (id, div2) {

    var x1 = $("#" + id).offset().left;
    var y1 = $("#" + id).offset().top;
    var h1 = parseInt($("#" + id).css("height"));
    var w1 = parseInt($("#" + id).css("width"));

    var b1 = y1 + h1 - 50;
    var r1 = x1 + w1 - 50;
    var x2 = $("#" + div2).offset().left;
    var y2 = $("#" + div2).offset().top;
    var h2 = parseInt($("#" + div2).css("height"));
    var w2 = parseInt($("#" + div2).css("width"));

    var b2 = y2 + h2 - 50;
    var r2 = x2 + w2 - 50;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {

        $("#" + id).removeClass("divWantedHover");
    } else {

        $("#" + id).addClass("divWantedHover");
    }
}


var idd = function (event) {
    for (var init = 0; init < marketModalArrayId.length; init++) {
        if ($("#" + marketModalArrayId[init]).css('display') == "block") {
            openMarketIndex = init + 1;
            for (i = 1; i <= 3; i++) {
                for (j = 1; j <= 2; j++) {
                    if ($("#gsm_modal" + openMarketIndex + "_row" + i + "_wanted" + j).attr("data-value") == $("#" + event.target.id).attr("data-value")) {
                        divhover1($("#gsm_modal" + openMarketIndex + "_row" + i + "_wanted" + j).attr("id"), $("#" + event.target.id).attr("id"));
                    } else {
                    }
                }
            }
        }
    }
};

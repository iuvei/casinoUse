
$(function () {

  var $body = $(document.body),
      windowsWidth = $(window).width(),
      windowsHeight = $(window).height(),
      bearkPoint = 1024,
      GreaterBP = windowsWidth > bearkPoint,
  // 上方bar
      $nav = $('#game-nav'),
      $navBox = $nav.find('ul'),
      $navList = $nav.find('li'),
      $navCurrent = $nav.find('.game-nav-current'),
  // 功能按鈕
      $menu = $('#game-menu'),
      $menuShow = $menu.find('.game-menu-show'),
      $menuBtn = $menu.find('.show-menu'),
      $menuBox = $menu.find('.game-menu-wrap'),
      $menuNav = $menu.find('.game-menu-nav'),
      $menuICON = $menu.find('.game-menu-icon'),
      $menuIconList = $menu.find('li'),
      $menuListData = $menuNav.find('[data-id]'),
      $menuCurrent = $menu.find('.game-menu-current'),
  // 小字篩選區域
      $filter = $('#game-menu-filter'),
      $filterOption = $filter.find('ul'),
      $filterOptionList = $filter.find('li'),
      $filterSort = $filter.find('.game-filter-sort'),
      $filterCurrent = $filter.find('.game-filter-current'),
  // 搜尋
      $search = $('#game-search'),
      $searchBtn = $search.find('.game-btn-search'),
      $searchBox = $search.find('form'),
      $searchInput = $search.find('input'),
  //  區塊與列表
      $view = $('#game-view'),
      $viewBtn = $view.find('a'),
      $changeGrid = $view.find('.view-grid'),
      $changeList = $view.find('.view-list'),
      layout = 'grid',
  //遊戲圖
      $gameLayout = $('#game-layout'),
      $gameLayoutBox = $gameLayout.find('.game-layout-box'),
      $gameBox = $gameLayout.find('[data-layout-id]'),
      $qrcode = $('.game-qrcode'),
      $qrcodeImg = $('.game-qrcode-img'),
      count = $gameLayoutBox.length,
  // 彩金規則
      $jpRule = $("#jp-rule");

  // 取得區塊&列表定位
  var gridA = [];
  for (i = 0; i < 10; i++) {
     gridA[i] = [];
     for (j = 0; j < 5; j++) {
        gridA[i][j] = [ i*178  , j*196 ];
     }
  }
  var listA = [];
  for (i = 0; i < 15; i++) {
     listA[i] = [];
     for (j = 0; j < 2; j++) {
        listA[i][j] = [ i*68  , j*485 ];
     }
  }
  gridA = gridA[0].concat(gridA[1],gridA[2],gridA[3],gridA[4],gridA[5],gridA[6],gridA[7],gridA[8],gridA[9]);
  listA = listA[0].concat(listA[1],listA[2],listA[3],listA[4],listA[5],listA[6],listA[7],listA[8],listA[9],listA[10],listA[11],listA[12],listA[13],listA[14]);


  // 視窗尺寸變動
  $(window).resize(function() {
    searchInputWidth();
    if( $(window).width() > bearkPoint) {
      //廠商選單關 高度變回0
      $navBox.removeClass('open');
      $navBox.css('height', '0')
    }else {
      // 列表切換回區域
      if($gameLayout.hasClass('list')) {
        layout = 'grid';
        $gameLayout.removeClass('list');
        $gameLayout.addClass('grid');
        $changeList.find('a').removeClass('active');
        $changeGrid.find('a').addClass('active');
      }
      // 取消遊戲圖定位
      $gameLayoutBox.css({
        position: 'relative',
        left: 'auto',
        top: 'auto'
      });
    }
    // 當篩選器打開狀態
    if ($(window).width() > 960 && $menuNav.hasClass('open')) {
      menuBoxClose()
    }

    // QRCODR響應
    if($gameLayout.hasClass('grid')) {
      $qrcode.show();
      qrcodeInFilter();
      qrcodeSize();
    } else {
    }
  });

  // 點擊彈出彩金視窗
  $(document).on('click', ".gamejp-direction, .jackpot_rule-overlay, .jackpot_rule_close", toggleJP);

  // Game Nav
  // 目前的廠商複製貼上到目前區域
  $nav.find('.active').clone().prependTo($navCurrent);
  // 廠商選單點擊下拉
  $navCurrent.on('click', navBoxDrop);
  // 廠商數量超過六個增加class
  if ($navList.length > 6) $nav.addClass('game-nav-tworow');

  // Game Menu
  //目前選單ICON顯示下拉選單第一位
  menuActive();
  //desktop Menu切換動作
  $menuShow.on('mouseenter', 'a', menu_open);
  $body.on('mouseleave', '#game-menu, .game-menu-wrap', menu_close);

  //次選單小字動作
  $filterSort.hover(filter_hover_toggle);
  $filterOptionList.click(filter_text_click);

  // 次選單目前遊戲總數
  $filter.find('.filter-all b').text($gameBox.length);
  // 預設老虎機
  $filterSort.find('b').text($('[data-filter="1"]').length);

  // 小字連動選單ICON
  $filterOptionList.click(function() {
    var val = $(this).data("id");
    $menuListData.removeClass('active');
    $menuNav.find('[data-id='+ val +']').addClass('active');
    menuActive();
    tigerIcon();
  });
  // 小字連動數字
  $filterOptionList.not('[data-id="0"]').click(function() {
    var val = $(this).data("id");
    $filterSort.find('b').text($('[data-filter='+ val +']').length);
  });
  // 選單ICON連動小字
  $menuListData.click(function() {
    $menuListData.removeClass('active');
    $(this).addClass('active');
    $filterCurrent.html($(this).children().html());
    menuActive();
    tigerIcon();
  });
  //選單ICON連動數字
  $menuListData.not('[data-id="0"]').click(function() {
    var val = $(this).data("id");
    $filterSort.find('b').text($('[data-filter='+ val +']').length);
  });


  // ICON篩選器點擊
  $menuIconList.on( "click", menuBoxClose);

  // ICON篩選器選單點擊關閉
  $menuCurrent.on( "click", menuBoxDrop);


  //顯示遊戲圖切換class
  $viewBtn.on('click', function() {
    $viewBtn.removeClass('active');
    $(this).addClass('active');
  });

  // 遊戲圖切換：區塊
  $changeGrid.on('click', function() {
    if (layout == 'list') {
        layout = 'grid';
        $gameLayout.addClass('grid');
        $gameLayout.removeClass('list');
        $gameLayoutBox.find('.game-layout-list-over').removeClass('open');
        $qrcode.show();
        qrcodeInFilter();
      }else{  return false}
  });

  // 遊戲圖切換：列表
  $changeList.on('click', function() {
    if (layout == 'grid') {
        layout = 'list';
        $gameLayout.addClass('list');
        $gameLayout.removeClass('grid');
        $gameLayoutBox.find('.game-layout-list-over').removeClass('open');
        $qrcode.insertAfter($gameBox.not('.game-box-hide').eq(-1)).hide();
        if($gameLayoutBox.hasClass('game-box-hide')) {
          filterList();
        } else {
          listPos()
        }
      }else{  return false}
  });


  // 預設遊戲圖類別
  setTimeout(function(){gameType();})



  // 過濾遊戲圖類別
  $body.on('click', '.game-filter-option li,.game-menu-icon li,.game-menu-list >li', function() {
    var val = $(this).data("id");
    $gameBox.removeClass('game-box-hide');
    $gameBox.not('[data-filter='+ val +']').addClass('game-box-hide');
    //  遊戲圖全部重新載入
    if (val == 99) {
      reloadToAll();
    } else {
      $filterSort.show();
    }
    // 我的最愛篩選
    if (val == 0) {
      $gameBox.addClass('game-box-hide');
      $('[data-fav="0"]').removeClass('game-box-hide');
      $filterSort.find('b').text($('[data-fav="0"]').length);
    }
    if($gameLayout.hasClass('grid')) {
      qrcodeInFilter();
    } else {
      filterList();
    }
  });
  //  我的最愛星星
  $body.on('click', '.game-icon-fav', addFav);

  //搜尋按鈕切換
  $searchBtn.click(function() {
    if ($('html').hasClass('is-device')) {
      searchInputWidth();
      if (!$('html').hasClass('game-searching')){
        $('html').addClass('game-searching');
      }
      $gameLayout.find('[data-layout-id]').addClass('game-box-hide')
    } else {
      $searchBox.toggleClass('open');
      searchInputWidth();
      if($gameLayout.hasClass('grid')) {
        qrcodeInFilter();
      } else {
        filterList();
      }
    }
  });
  $('[data-ic-class="search-clear"]').click(function(event) {
    $searchInput.val(" ").focus();
  });




  //搜尋框框Key入時
  $searchInput.keydown(function() {

    var key = event.keyCode;
    if ($('html').hasClass('is-device')) {
      if($searchInput.val() == "") {
        reloadToAll();
        $gameLayout.find('[data-layout-id]').addClass('game-box-hide')
      }
      if (key == 8) {
        if($searchInput.val().length <= 1) {
          setTimeout(function() {
            $gameLayout = $('#game-layout'),
            $gameLayoutBox = $gameLayout.find('.game-layout-box'),
            $gameBox = $gameLayout.find('[data-layout-id]'),
            $qrcode = $('.game-qrcode'),
            $qrcodeImg = $('.game-qrcode-img');
            reloadToAll();
            $gameLayout.find('[data-layout-id]').addClass('game-box-hide')
          },10);
        }
      }
      $gameLayout.find('[data-layout-id]').removeClass('game-box-hide');
    } else {
      if($searchInput.val() == "") {
        reloadToAll();
      }
      if (key == 8) {
        if($searchInput.val().length <= 1) {
          setTimeout(function() {
            $gameLayout = $('#game-layout'),
            $gameLayoutBox = $gameLayout.find('.game-layout-box'),
            $gameBox = $gameLayout.find('[data-layout-id]'),
            $qrcode = $('.game-qrcode'),
            $qrcodeImg = $('.game-qrcode-img');
            reloadToAll();
          },10);
        }
      }
    }

  });

  // 不是直營網 或是 搜尋時 不要有QRCODE
  // if ($gameLayout.hasClass('bbin-layout') && $gameLayoutBox.not('.game-box-hide')){
  //   qrcodeInsert();
  // };

  //  列表滑入後
  $gameBox.find('.game-list-box').hover(function() {
    $(this).parents('.game-layout-box').css('z-index', '100').find('.game-layout-list-over').addClass('open');

  }, function() {
    $(this).parents('.game-layout-box').css('z-index', '1').find('.game-layout-list-over').removeClass('open');
  });
  // $gameBox.on('mouseenter', '.game-layout-mask, .game-list-title-wrap', function() {
  //   $(this).parents('.game-layout-box').find('.game-layout-list-over').removeClass('open');
  // });

  //FUNCTION
  // 搜尋框寬度變化
  function searchInputWidth() {

    if ( !$('html').hasClass('game-searching')) {
      if( $(window).width() > 1024) {
        if( $searchBox.hasClass('open')) {
          $searchInput.width(290);
          $menuListData.removeClass('active');
          $('[data-id="99"]').addClass('active');
          menuActive();
          reloadToAll();
        } else {
          $searchInput.width(0);
        }
      } else {
        if( $searchBox.hasClass('open')) {
          $searchInput.width($(window).width() - $('.game-search').width());
          $menuListData.removeClass('active');
          $('[data-id="99"]').addClass('active');
          menuActive();
          reloadToAll();
        } else {
          $searchInput.width(0);
        }
      }
    } else {
      $menuListData.removeClass('active');
      $('[data-id="99"]').addClass('active');
      menuActive();
      reloadToAll();
    }
  }

  // 手機版時的搜尋
  function deviceSearch() {
    $menuListData.removeClass('active');
    $('[data-id="99"]').addClass('active');
    menuActive();
    reloadToAll();
  }

  // 廠商選單下拉
  function navBoxDrop(){
    var navHeight = ($navList.length -2) * $navList.height();
    $navBox.toggleClass('open');
    if ($navBox.hasClass('open')) {
      $navBox.css('height', navHeight)
    } else {
      $navBox.css('height', '0')
    }
  };

  //desktop Menu打開
  function menu_open() {
    $menuBox.addClass('open');
    $menuBtn.addClass('active');
  };

  //desktop Menu關閉
  function menu_close() {
    setTimeout(function() {
      $menuBox.removeClass('open');
      $menuBtn.removeClass('active');
    },300);
  };

  //次選單小字滑開
  function filter_hover_toggle(e) {
    e.preventDefault();
    $filterOption.stop(true, false).slideToggle(200);
  };

  //次選單小字清單文字更換
  function filter_text_click() {
    var text = $(this).html();
    $filterCurrent.html(text);
  };


  // 選單動作
  function menuActive() {
    $menuCurrent.empty();
    $('.game-menu-icon li.active, .game-menu-list > li.active').clone().prependTo($menuCurrent);
    $('.game-menu-current li').removeAttr('data-id');
  };

  // 老虎機連動
  function tigerIcon() {
    var $tiger = $('.game-icon12')
    if ($tiger.hasClass('active'))
        $tiger.addClass('active');
    else
      $tiger.removeClass('active');
  };

  // 選單下拉(ICON)
  function menuBoxDrop(){
    var menuPos = $menuICON.offset().top,
        menuListHeight = ($menuIconList.length) * $menuIconList.height(),
        menuIconHeight = windowsHeight - menuPos;

    $menuNav.toggleClass('open');
    if ($menuNav.hasClass('open')) {
      $(window).scrollTop(0);
      $menuNav.css('height', menuListHeight);
      $menuICON.css('height', menuIconHeight);
      $('html, body').addClass('no-scroll');
      $('body').append('<div class="game-menu-mask"></div>');
    } else {
      $('.game-menu-nav,.game-menu-icon').removeAttr("style");
      $('html, body').removeClass('no-scroll');
      $('.game-menu-mask').remove();
    }
  };

  // 選單關閉(ICON)
  function menuBoxClose() {
    $('.game-menu-nav').removeAttr("style");
    $('.game-menu-nav').removeClass("open");
    $('html, body').removeClass('no-scroll');
    $('.game-menu-mask').remove();
  };

  // 遊戲圖預設熱門遊戲
  function gameType() {
    var val = $('[data-id="1"]').data("id"),
        filterVal = $('[data-filter='+ val +']');

     filterVal.removeClass('game-box-hide');
     qrcodeInFilter();
     $gameLayout.css('min-height', Math.ceil(filterVal.length/5)* ($gameLayoutBox.outerHeight()+24));
    };

  // 遊戲圖切換定位
  function layoutPos() {
    if($gameLayout.hasClass('grid')) {
      gridPos();
    } else {
      listPos();
    }
  };

  // 遊戲圖 區塊定位
  function gridPos() {
    var count = $gameLayoutBox.length;
    for (var i = 0; i <= count; i++) {

      // var $grid = $('.game-layout-box:nth-child('+ i +')');
      var $grid = $('.game-layout-box').eq(i);

      $grid.css({
        top: gridA[i][0],
        left: gridA[i][1]
      });
    }
    $gameLayoutBox.css('position', 'absolute');
    $gameLayout.css('min-height', Math.ceil(count/5)* ($gameLayoutBox.outerHeight()+24));
  };

  // 遊戲圖 清單定位
  function listPos() {
    var count = $gameBox.length;
    for (var i = 0; i <= count; i++) {

      var $list = $('.game-box').eq(i);

         $list.css({
           top: listA[i][0],
           left: listA[i][1]
         });
    }
    $gameLayoutBox.css('position', 'absolute');
    $gameLayout.css('min-height', Math.ceil(count/2)* ($gameLayoutBox.outerHeight()+18))
  };

  // 篩選 區塊重新定位
  function filterGrid() {
    var count = $gameBox.not('.game-box-hide').length;
    for (var i = 0; i <= count; i++) {
      $('.game-qrcode').insertAfter($('.game-box').not('.game-box-hide').eq(3));
      var $grid = $('.game-layout-box').not('.game-box-hide').eq(i);
      $grid.css({
        top: gridA[i][0],
        left: gridA[i][1]
      });
    }
    $gameLayoutBox.css('position', 'absolute');
    $gameLayout.css('min-height', Math.ceil(count/5)* ($gameLayoutBox.outerHeight()+24));
  };

  // 篩選 清單重新定位
  function filterList() {
    var count = $gameBox.not('.game-box-hide').length;
    for (var i = 0; i <= count; i++) {

      var $list = $('.game-box').not('.game-box-hide').eq(i);
      $list.css({
        top: listA[i][0],
        left: listA[i][1]
      });
    }
    $gameLayout.css('min-height', Math.ceil(count/2)* ($gameLayoutBox.outerHeight()+18));
  };

  // QRCODE插入右上
  function qrcodeInsert() {
    if ( $(window).width() <= 1024 && $(window).width() > 768) {
      $qrcode.insertAfter($gameBox.not('.game-box-hide').eq(2));
    } else if ( $(window).width() <= 768 && $(window).width() > 480) {
      $qrcode.insertAfter($gameBox.not('.game-box-hide').eq(1));
    } else if ( $(window).width() <= 480) {
      $qrcode.insertAfter($gameBox.not('.game-box-hide').eq(0));
    } else {
      $qrcode.insertAfter($gameBox.not('.game-box-hide').eq(3));
    }
    qrcodeSize();
  };


  // QRCODE 內容物響應
  function qrcodeSize() {
    var qrTOP = ($qrcode.innerHeight() - $qrcodeImg.innerHeight())/2;

    if ( $(window).width() > 1024) {
      $qrcode.find('h3,h4').css('line-height', 2 );
      $qrcodeImg.css('top', 23 );  //中間QRCODE置中
    } else {
      $qrcodeImg.css('top', qrTOP );  //中間QRCODE置中
      $qrcode.find('h3,h4').css('line-height', qrTOP + 8 +'px' );  //中間QRCODE置中
      $qrcode.css({
        position: 'relative',
        left: 'auto',
        top: 'auto'
      })
    }
  };

  // QRCODE在篩選器時
  function qrcodeInFilter() {
    if ($gameLayout.hasClass('bbin-layout')) {
      if($gameBox.not('.game-box-hide').eq(4).html() == undefined) {
        if( $(window).width() > 1024) {
          $qrcode.insertAfter($gameBox.eq(-1));
          filterGrid();
          $qrcode.css({
            top: 0,
            left: 784
          });
        } else {
          $qrcode.css({
            float: 'right'
          });
        }
      } else {
        if( $(window).width() > 1024) {
          filterGrid();
        } else {
          qrcodeInsert();
        }
      }
    } else {
      if( $(window).width() > 1024) {
        filterGrid();
      }
    }
    $qrcode.removeClass('game-qrcode-hide');
  };

  // 重新載入全部遊戲圖
  function reloadToAll(){
    $filterSort.hide();
    $gameLayout.find('[data-layout-id]').removeClass('game-box-hide');
    if ($gameLayout.hasClass('bbin-layout')) qrcodeInFilter();
    if ($(window).width() > 1024) layoutPos();
  };

  // 星星動作
  function addFav() {
    if($(this).hasClass('active')) {
      $(this).parents('.game-layout-box').removeAttr("data-fav");
      $(this).removeClass('active');
      $(this).parents('.game-layout-box').find('.game-icon-fav').removeClass('active');
    } else {
      $(this).parents('.game-layout-box').attr('data-fav', '0');
      $(this).addClass('active');
      $(this).parents('.game-layout-box').find('.game-icon-fav').addClass('active')
    }
  };

  // 彩金彈出視窗
  function toggleJP(e) {
      if ($jpRule.hasClass("open")) {
          closeJP();
      } else {
          openJP();
      }
      e.preventDefault();
      e.stopPropagation();
  }
  // 彩金視窗開啟
  function openJP() {
      $jpRule.addClass('open');
  }
  // 彩金視窗關閉
  function closeJP() {
      $jpRule.removeClass('open');
  }

});


// CASINO SLIDER
$(function() {
  var windowsWidth = $(window).width(),
      $sliderBox = $('#game-slider');

    if ( $(window).width() > 768) {
      sliderM();
    } else {
      sliderS();
      $('.slider-markers').css('right', ($(window).width() /2) - ($('.slider-markers').width() /2) );
    }

    resizeend();
    // resize over reload slider
    var rtime;
    var timeout = false;
    var delta = 200;
    $(window).resize(function() {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta);
        }
    });

    // 輪播 960 X 200
    function sliderM() {
      $('.slider').html( '<li><img src="image/game/ad01_m.png" alt="" /></li><li><img src="image/game/ad02_m.jpg" alt="" /></li><li><img src="image/game/ad03_m.jpg" alt="" /></li><li><img src="image/game/ad04_m.jpg" alt="" /></li><li><img src="image/game/ad05_m.png" alt="" /></li>');
      $sliderBox.slides({
        'width' : 960,
        'height' : 200,
        'animtype' : 'fade',
        "nexttext" : '',
        "prevtext" : '',
      });
    }
    // 輪播 768 X 270
    function sliderS() {
      $('.slider').html( '<li><img src="image/game/ad01_s.png" alt="" /></li><li><img src="image/game/ad02_s.jpg" alt="" /></li><li><img src="image/game/ad03_s.jpg" alt="" /></li><li><img src="image/game/ad04_s.jpg" alt="" /></li><li><img src="image/game/ad05_s.png" alt="" /></li>');
      $sliderBox.slides({
        'width' : 768,
        'height' : 270,
        'animtype' : 'fade',
        "nexttext" : '',
        "prevtext" : '',
      });
    }

    // 視窗尺寸變動後
    function resizeend() {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
            $( ".slider-controls, .slider-markers" ).remove();
            if ( $(window).width() > 768) {
              sliderM()
              $('.slider-markers').css('right', 14)
            } else {
              sliderS();
              $('.slider-markers').css('right', ($(window).width() /2) - ($('.slider-markers').width() /2) );
            }
        }
    }

});



// JACKPOT bottom
$(function(){
  setTimeout(function() {placeFixedBottom();})

  $(document).on('click', '.game-menu a', placeFixedBottom);

  $('#mainBody').after($('#game-jp'))


  $(window).scroll(function() {
    placeFixedBottom();
  });

  $(window).resize(function(event) {
    var windHeight = $(window).height(),
        docuHeight = $(document).height(),
        footerHeight = $('#page-footer').outerHeight(),
        scrollTop = $(window).scrollTop();

    if (scrollTop + windHeight < docuHeight - footerHeight) {
      placeFooter();
    } else {placeFixedBottom();}
  });


  function placeFooter() {
      $('#game-jp').css({
        'bottom': 0,
        'position': 'fixed'
      });
  };

  function placeFixedBottom() {
    var windHeight = $(window).height(),
        docuHeight = $(document).height(),
        footerHeight = $('#page-footer').outerHeight(),
        scrollTop = $(window).scrollTop();

    if(scrollTop + windHeight  >= docuHeight - footerHeight && !$('body').hasClass('no-scroll')){
      $('#game-jp').css({
        'top': 'auto',
        'bottom': footerHeight,
        'position': 'absolute'
      });
    } else {
      placeFooter()
    }
  };

});

// 示意即時中獎資訊
$(function () {

  function fakeImmBonus() {
    var $jpImmBox = $('.gamejp-imm-wrap'),
        $jpImm = $('.gamejp-imm'),
        $jpImmCur = $('.gamejp-imm:nth-child(1)');

      $jpImm.animate({opacity: "toggle"},800);
      setTimeout(function() {
        if ($jpImm.is(':hidden')) {
          $jpImmCur.appendTo($jpImmBox)
        }
      },1000);
  }
  function fakeImmSlide(){
    var interval;
    interval = setInterval(function(){
      fakeImmBonus();
    }, 3000);
  }


  if ($('.game').hasClass('game-direct')) {fakeImmSlide()}
})

// 彩金排行榜
$(function () {

  function moveRank() {
      var $rankCup = $('.gamejp-rank-wrap ul li:nth-child(1), .gamejp-rank-wrap ul li:nth-child(2)'),
          $rankWrap = $('.gamejp-rank-wrap'),
          $rankBox = $('.gamejp-rank-wrap ul'),
          $rankBoxPos = $('.gamejp-rank-wrap ul').position();

      $rankBox.animate({
        top: $rankBoxPos.top - $rankWrap.height()
      },{
        duration: 800,
        complete: function() {
          $rankCup.appendTo($rankBox)
          $rankBox.css('top', 0);
        }
      });
  }
  function moveRankSlide(){
    var $rankFirst = $('.gamejp-rank-wrap ul li:nth-child(1)'),
        $rankWrap = $('.gamejp-rank-wrap'),
        interval;

    $rankFirst.prependTo($rankWrap);
    interval = setInterval(function(){
      moveRank();
    }, 4000);
  }
  if ($('.game').hasClass('game-direct')) {moveRankSlide();}

});

// 彩金數字輪播
$(function () {
  if ($('.game').hasClass('game-mg')) {
    var interval = setInterval(function(){moveJPNum();}, 6000);
  }


  function moveJPNum() {
    var $jpNumCupS = $('.gamejp-num-wrap:nth-child(1)'),
        $jpNumCupM = $('.gamejp-num-wrap:nth-child(1), .gamejp-num-wrap:nth-child(2)'),
        $jpNumWrap = $('.gamejp-num-slide'),
        $jpNumBox = $('.gamejp-num-slide-content'),
        $jpNumBoxPos = $jpNumBox.position();

    $jpNumBox.animate({
      top: $jpNumBoxPos.top - $jpNumWrap.height()
    },{
      duration: 500,
      complete: function() {
        if ( $(window).width() > 768) {
          $jpNumCupM.appendTo($jpNumBox);
        } else {
          $jpNumCupS.appendTo($jpNumBox);
        }
          $jpNumBox.css('top', 0);
      }
    });
  }

});

// 彩金閃閃的動態
$(function () {
  var interval = setInterval(function(){jsBp();},1500);

  function jsBp(){
    $('.gamejp-title').css('background-position', '-185px 0');
    setTimeout(function() {
      $('.gamejp-title').css('background-position', '-370px 0');
    },500)
    setTimeout(function() {
      $('.gamejp-title').css('background-position', '0 0');
    },1000)
  }
});




$(function() {
  var enter = $('.game-btn-enter'),
      login = $('#login_window'),
      close = $('.lws-close, .dialog-overlay');

  enter.click(function(){
    login.addClass("dialog-open");
  });
  close.click(function(){
    login.removeClass("dialog-open");
  });
});



fixedStaff();
$(window).scroll(function() {
  fixedStaff();
});
$(window).resize(function() {
  fixedStaff();
});

function fixedStaff() {
  var $gameNav= $("#game-nav"),
      $mainBody= $("#mainBody"),
      gameNavPos = $("#game-nav").offset().top,
      winScrollTop = $(window).scrollTop();

  if (winScrollTop > 0) {
    $("#page-header").addClass('fixed');
  } else {
    $("#page-header").removeClass('fixed');
  }
  if ($("#page-header").hasClass('fixed')) {
    $("#mainBody").addClass('fixed-header')
  } else {
    $("#mainBody").removeClass('fixed-header')
  }
  if ($(window).width() > 1024) {
    if (winScrollTop > 236) {
      $gameNav.addClass('fixed');
    } else {
      $gameNav.removeClass('fixed');
    }
  } else if( $(window).width() <= 1024 && $(window).width() > 960 ){
    if (winScrollTop > 200) {
      $gameNav.addClass('fixed');
    } else {
      $gameNav.removeClass('fixed');
    }
  } else {
    if (winScrollTop  > $('.slider').height()) {
      $gameNav.addClass('fixed');
    } else {
      $gameNav.removeClass('fixed');
    }
  }
  if ($gameNav.hasClass('fixed')) {
    $mainBody.addClass('fixed-nav')
  } else {
    $mainBody.removeClass('fixed-nav')
  }
}




// 使用移動裝置時
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // alert('You are using a mobile device!');
  $('html').addClass('is-device');
  $('.game-qrcode').remove();
} else {
}

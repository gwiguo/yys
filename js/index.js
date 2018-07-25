$(function () {
    (function () {
        var $nav = $('#nav'),
            $logo = $nav.find('.logo'),
            $hide = $('#nav .mNav .hide'),
            $guanfang = $('.guanfang'),
            $logo2 = $('#header .logo2');
        $guanfang.hover(function () {
            $hide.stop().slideDown(200)
        }, function () {
            $hide.stop().slideUp(200)
        });
        $(window).scroll(function () {
            if ($(document).scrollTop() >= 80) {
                $nav.css({
                    'position': 'fixed',
                    'background-color': 'rgba(255,255,255,.9)'
                });
                $logo.fadeIn();
                $logo2.css('transform', 'scale(0)')
            } else {
                $nav.css({
                    'position': 'absolute',
                    'background-color': 'transparent'
                });
                $logo.fadeOut(200);
                $logo2.css('transform', 'scale(1)')
            }
        });
        if ($(document).scrollTop() >= 80) {
            $nav.css({
                'position': 'fixed',
                'background-color': 'rgba(255,255,255,.9)'
            });
            $logo.fadeIn()
        }
    }());
    (function () {
        var $role = $('#role'),
            $rol1 = $role.find('.rol1 .role'),
            $rol2 = $role.find(".rol2 .role"),
            $btn = $role.find(".btn"),
            whichShow = false;
        $rol1.removeClass("hide");
        $btn.click(function () {
            whichShow ? change($rol2, $rol1) : change($rol1, $rol2);
            whichShow = !whichShow
        });

        function change($1, $2) {
            $1.stop();
            $2.stop();
            $1.addClass("hide").delay(800).queue(function () {
                $2.removeClass("hide")
            })
        }
    }());
    (function () {
        var $slide = $("#slide"),
            $download = $slide.find(".download"),
            $shrink = $download.find(".shrink"),
            $close = $download.find(".close"),
            $downloadMain = $download.find(".downloadMain"),
            $mainLi = $slide.find(".main .mainLi"),
            $lists = $slide.find('.linkList');
        $list2 = $lists.find('.list2'), $list3 = $lists.find('.list3'), $list5 = $lists.find('.list5'), $list5Txt = $lists.find('.txt5');
        $shrink.click(function () {
            $download.addClass("stretch");
            $(this).hide();
            $downloadMain.show()
        });
        $close.click(function () {
            $download.removeClass("stretch");
            $(this).stop().delay(200).queue(function () {
                $downloadMain.hide();
                $shrink.show()
            })
        });
        $list2.hover(function () {
            $(this).css('background-position', '-8px -27px');
            $(this).stop().animate({
                width: 317,
                height: 580
            }, 500)
        }, function () {
            $(this).stop().animate({
                width: 317,
                height: 93
            }, 500, function () {
                $(this).css({
                    'background-position': '-915px 370px'
                })
            })
        });
        $list3.hover(function () {
            $(this).css('background-position', '-771px -344px');
            $(this).stop().animate({
                width: 317,
                height: 208
            }, 500)
        }, function () {
            $(this).stop().animate({
                width: 317,
                height: 87
            }, 500, function () {
                $(this).css({
                    'background-position': '-1505px -105px'
                })
            })
        });
        $list5.mouseenter(function () {
            $(this).stop().hide();
            $list5Txt.stop().show();
            $list5Txt.css({
                height: 133
            });
            $list5Txt.children().css('display', 'block');
            $list5Txt.stop().animate({
                height: 320
            }, 300)
        });
        $list5Txt.mouseleave(function () {
            $(this).stop().animate({
                height: 133
            }, 300, function () {
                $(this).children().css('display', 'none');
                $(this).stop().hide();
                $list5.stop().show()
            })
        })
    }());
    (function () {
        var $banner = $('#news .banner'),
            $ul = $banner.find('.pics ul'),
            $lis = $ul.find('li'),
            $banTab = $('#news .tab').eq(0).children(),
            len = $lis.length,
            width = $lis.eq(0).width(),
            $newTab = $('#news').find('.inform .tab ul li'),
            $showTxt = $('.inform .show'),
            index = 0;
        auto();

        function auto() {
            setInterval(function () {
                index++;
                index %= len;
                var Left = $ul.position().left;
                $ul.animate({
                    left: -index * width
                }, 300);
                $banTab.children().eq(index).addClass('on').siblings().removeClass('on')
            }, 2000)
        }
        $newTab.mouseenter(function () {
            $(this).eq($newTab.index()).addClass('on').siblings().removeClass('on')
        })
    }());
    (function () {
        var $shishen = $('#character'),
            $shishenShow = $('.shishenShow'),
            $shishenUl = $('.shishenShow ul'),
            $leftBtn = $shishen.find('.lBtn'),
            $rightBtn = $shishen.find('.rBtn'),
            $roleTab = $shishen.find('.sMain .title .tab:last-child'),
            $shishenTab = $shishen.find('.sMain .title .tab').eq(0),
            $mLi = $shishen.find('.sMain .showMain .mLi').eq(0),
            $role = $shishen.find('.mRole'),
            $roleLi = $shishen.find('.sMain .showMain .zhujue-tab li'),
            $arrow = $shishen.find('.zhujue-tab li em'),
            $roleWrap = $shishen.find('.showMain .mRole .wrap'),
            frag = document.createDocumentFragment(),
            index = 0,
            timer,
            bool = true;
        $(window).scroll(function () {
                if(window.pageYOffset >= ($shishen.position().top - $(window).height())){
                   
                  if(bool){
                    for (var i = 0, lens = shishenData.length; i < lens; i++) {
                        var img = document.createElement('img');
                        img.src = `./img/index/content/shishen/${shishenData[i]["id"]}.png`;
                        $(img).css({
                            width: 89,
                            height: 92,
                            margin: '14px 10px 10px 32px'
                        });
                        frag.appendChild(img)       
                    }
                        $shishenUl.append(frag);  
                        bool = false;
                     } 
                }

        });
        $rightBtn.click(function () {
            $shishenUl.stop(true, true);
            clearInterval(timer);
            var ulLeft = $shishenUl.position().left;
            timer = setTimeout(function () {
                if (ulLeft >= -4800) {
                    $shishenUl.stop(true, true).animate({
                        left: -$shishenShow.width() + ulLeft
                    }, 300)
                }
            }, 100)
        });
        $leftBtn.click(function () {
            $shishenUl.stop(true, true);
            clearTimeout(timer);
            var ulLeft = $shishenUl.position().left;
            timer = setTimeout(function () {
                if (ulLeft <= -800) {
                    $shishenUl.stop(true, true).animate({
                        left: $shishenShow.width() + ulLeft
                    }, 300)
                }
            }, 100)
        });
        $shishenTab.click(function () {
            $(this).addClass('active');
            $roleTab.removeClass('active');
            $mLi.show();
            $role.hide()
        });
        $roleTab.click(function () {
            $(this).addClass('active');
            $shishenTab.removeClass('active');
            $mLi.hide();
            $role.show()
        });
        $roleLi.click(function () {
            index = $(this).index();
            $roleWrap.stop(true, true).fadeOut();
            $(this).addClass('on').siblings().removeClass('on');
            $arrow.removeClass('show');
            $arrow.eq(index).addClass('show');
            $roleWrap.eq(index).stop(true, true).fadeIn()
        })
    }());
    (function () {
        var $bannerShow = $('#strategy .leftBanner .banner'),
            $pics = $bannerShow.find('.pics'),
            $tabs = $('.leftBanner').find('.tabs li'),
            $imgW = $pics.find('img:eq(0)').width(),
            length = $pics.find('img').length,
            $showBox = $('.txtShow'),
            $uls = $showBox.find('.uls'),
            $titles = $('.rightTxt .title a'),
            i = 0,
            index = 0,
            ulLeft;
        setInterval(function () {
            i++;
            i %= length;
            $tabs.eq(i).addClass('on').siblings().removeClass('on');
            $pics.stop().animate({
                left: -i * $imgW
            }, 300)
        }, 2000);
        var ind = {
            2: 0,
            4: 1,
            6: 2,
            8: 3
        };
        $titles.mouseenter(function () {
            index = $(this).index();
            ulLeft = $showBox.width();
            $(this).addClass('on').siblings().removeClass('on');
            $uls.stop().animate({
                left: -ind[index] * ulLeft
            }, 300)
        })
    }());

    (function () {
        var $tongren = $('#main #tongren'),
            $tab = $tongren.find('.tab'),
            $li = $tab.children().not('.lastone'),
            $span = $tab.find('span'),
            $i = $tab.find('i'),
            $uls = $tongren.find('.uls'),
            $cover = $tongren.find('.cover'),
            coverW = $cover.width(),
            index = 0,
            $pics = $uls.find('ul li img'),
            bool = true;

            $(window).scroll(function () {
                if(window.pageYOffset >= $tongren.position().top - $(window).height()){                    
                    if(bool){
                    $pics.each(function (index,item) {
                    $(item).attr('src',$(item).attr('data-src'));
                     });
                     bool = false;
                    }
                }
            });
            
        $li.mouseenter(function () {
            index = $(this).index();
            $span.eq(index).addClass('active').siblings().removeClass('active');
            $i.eq(index).addClass('on').siblings().removeClass('on');
            $uls.stop().animate({
                left: -index * coverW
            }, 300);
        });
    }());

    ;(function (){
        var $shitu = $('#shitu');
            $imgs = $shitu.find('img'),
            $winH = $(window).height(),
            $top = $shitu.position().top,
            bool = true;
        $(window).scroll(function () {
            if(window.pageYOffset >= ( $top - $winH) ){
                if(bool){
                    $imgs.each(function (index,item) {
                        $(item).attr('src',$(item).attr('data-src'));
                    });      
                    bool = false;          
                }
            }
        });
    }());

    ;(function (){
        var  $activity = $('#activity'),
             $imgs = $activity.find('img'),
             bool = true;

        $(window).scroll(function () {
            if(window.pageYOffset >= ( $top - $winH) ){
                if(bool){
                    $imgs.each(function (index,item) {
                        $(item).attr('src',$(item).attr('data-src'));
                    });      
                    bool = false;          
                }
            }
        });


    }());


});
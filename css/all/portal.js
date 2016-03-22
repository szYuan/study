/*global TrdBoss, Backbone, JST*/

TrdBoss.Views = TrdBoss.Views || {};

(function () {
    'use strict';

    TrdBoss.Views.Portal = Backbone.View.extend({

        template: JST['app/scripts/templates/portal.ejs'],

        el:'#body',
        collection:new TrdBoss.Collections.Portal(),
        statisticModule:new TrdBoss.Models.Statistic(),

        events: {},

        initialize: function () {
            this.listenTo(this.collection, 'sync', this.render);
            this.listenTo(this.statisticModule, 'sync', this.renderStatistic);
            this.collection.fetch({beforeSend:function(xhr){
                //var token = $.cookie("trdToken");
                //console.log("collection:"+token);
                //xhr.setRequestHeader('Authorization', ('Bearer ' + token));
            },reset:true,data:{}});
            this.statisticModule.fetch();
        },
        render: function () {
            var portalData=this.collection.toJSON();
            this.$el.html(this.template({portal:portalData}));
            console.log(portalData);
            var bmap = new BMap.Map('map', {
                enableMapClick: false,
                minZoom:5,
                maxZoom:12
            });
            bmap.enableScrollWheelZoom();
            var point=new BMap.Point(115, 35);
            bmap.centerAndZoom(point, 6);
            //定义弹窗
            var infoWindow = new BMap.InfoWindow('', {
                width : 533,     // 信息窗口宽度
                height: 400,     // 信息窗口高度
                title : ""  // 信息窗口标题
            });
            infoWindow.addEventListener("close",function(){
                TrdBoss.Current=null;
            });
            _.each(portalData,function(community){
                var marker = new BMap.Marker(new BMap.Point(community.gpslat, community.gpslng),{title:community.communityname});
                marker.uk_click=function(evt,nocache_flag){
                    var cd=new TrdBoss.Models.CommunityData({id:community.communitycode});
                    TrdBoss.Current=community.communitycode;
                    console.log(community.communitycode);
                    cd.fetch({
                        data:{
                            type:community.type,
                            nocache_flag:nocache_flag
                        },
                        success:function(model){
                            //var htmlStr= _.template( $("#infoWindow").html() )( {'communityData':model.toJSON()} );
                            //var htmlStr= _.template( $("#tplCommunity").html() )( {'communityData':model.toJSON()} );
                            //infoWindow.setContent(htmlStr);
                            //infoWindow.setTitle(community.communityname);
                            //marker.openInfoWindow(infoWindow);

                            TrdBoss.infoPanel=new TrdBoss.Views.InfoPanel({model:model.toJSON()});
                            console.log(model.toJSON());
                            $('#infoPanelWrap').html(TrdBoss.infoPanel.render().$el);

                            //计算面板箭头相对地图的位置：面板的相对父级的位置+箭头相对父级的位置+箭头点图片位置偏移
                            var panelPos = $('#infoPanel').position();
                            var panelLeft = parseInt(panelPos.left - parseInt($('#infoPanel').css('width')) / 2);
                            var panelTop = parseInt(panelPos.top - parseInt($('#infoPanel').css('height')) / 2 - 60);
                            var arrowPos = {
                                x: $('#infoArrow').position().left + panelLeft + 16,
                                y: $('#infoArrow').position().top + panelTop + 30
                            }
                            var centerPos = bmap.pointToPixel(bmap.getCenter());
                            var markerPos = bmap.pointToPixel(marker.point);
                            var span = {
                                x: centerPos.x - (arrowPos.x - markerPos.x),
                                y: centerPos.y - (arrowPos.y - markerPos.y)
                            };
                            bmap.panTo(bmap.pixelToPoint(span));
                        },
                        error:function(){
                            infoWindow.setContent("获取失败");
                            infoWindow.setTitle(community.communityname);
                            marker.openInfoWindow(infoWindow);
                        }
                    });
                };
                marker.addEventListener("click", marker.uk_click);
                if(community.hasOwnProperty('communitycode')){
                    TrdBoss.Common[community.communitycode]=marker;
                    TrdBoss.Communities[community.communitycode]=community.communityname;
                }
                //marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                bmap.addOverlay(marker);
            },this);
            //setTimeout(function(){bmap.panBy(1,1);},10);
            //$("#sideBarWrap").html(new TrdBoss.Views.StasticsList().render().$el);

            //$("#sideBarWrap").html(new TrdBoss.Views.StasticsList().render().$el);
        }
        ,
        renderStatistic:function(){
            console.log(this.statisticModule.toJSON());
            var statModule=this.statisticModule;
            //var htmlStr= _.template( $("#tplStatistic").html() )( {'s':this.statisticModule.toJSON()} );
            //$("#statistic").html(htmlStr);
            var timer=setInterval(function(){
                if(document.getElementById("sideBarWrap")){
                    clearInterval(timer);
                    $("#sideBarWrap").html(new TrdBoss.Views.StasticsList({model:statModule}).render().$el);
                }
            },100);
        }
    });

})();
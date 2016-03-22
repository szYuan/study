window.app={
	views:{},
	models:{},

	loadTemplates:function(views,callback){
		var deferreds=[];

		$.each(views,function(index,view){
			if(app[view]){
				var tem=$.get('tpl/'+view+'.html',function(data){
					app[view].prototype.template=_.template(data);
				},'html');
				deferreds.push(tem);
			}else{
				alert(view+' not found');
			}
		});

		$.when(deferreds).done(callback);
		 // $.when.apply(null, deferreds).done(callback);
	}

}

app.Router=Backbone.Router.extend({
	routes:{
		"":"home",
		"contact":"contact"
	},
	// initialize:function(){
	// 	app.shellView=new app.ShellView();
	// 	console.log(app.shellView.render().el);
	// 	$('body').html(app.shellView.render().el);
	// },
	home:function(){
		app.shellView=new app.ShellView({

		});
		$('body').html(app.shellView.render().el);
	},
	contact:function(){

	}
});

app.ShellView=Backbone.View.extend({
 	tagName: 'div',

    id: '123',

    className: '',

	initialize:function(){
		//_.bindAll(this);
	},
	render:function(){
		this.$el.append('<h1>shell view<button id="click">click</button></h1>');
		return this;
	},
	events:{
		"click #click":"shellClick"
	},
	shellClick:function(){
		alert(1);
		console.log('click');
	}
});

$(function(){

	// app.loadTemplates(['ShellView'],function(){
		app.router=new app.Router();
		Backbone.history.start();
	// });

});
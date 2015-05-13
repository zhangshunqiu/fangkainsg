cc.game.onStart = function(){
	var ww = Default.windowWidth();
	var hh = Default.windowWidth();
	cc.view.setDesignResolutionSize(ww, hh, cc.ResolutionPolicy.SHOW_ALL);
	cc.view.resizeWithBrowserSize(true);
    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new HelloWorldScene());
    }, this);
};
cc.game.run();
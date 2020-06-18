
auto.waitFor();
app.launchApp('今日头条极速版');
var browseCount = 20;
var columnName = "历史";
sleep(10000);//保障一下
/**
 * 今日头条读新闻
 */
for (var i = 1; i <= browseCount; i++) {
    sleep(4000);//保障一下
    toast("今日头条极速版读新闻第" + i + "次，共"+browseCount+"次");
    if (className("android.widget.TextView").text("" + columnName + "").exists()) {
        let b = className("android.widget.TextView").text("" + columnName + "").findOnce().bounds();//推荐里面容易有广告
        click(b.centerX(), b.centerY());//进入到栏目
        browseNewsContent();
    }
}
sleep(1500);//歇一会
toastLog("新闻读完");
function browseNewsContent() {
    sleep(6000);//保障一下
    let news = id("bz").findOnce();//第二条新闻
    if (news != null) {
        click(news.bounds().centerX(), news.bounds().centerY());//点击第二条新闻
        for (var x = 1; x <= 20; x++) {
            toast("今日头条极速版读新闻第" + i + "次" + "滑动第" + x + "次");
            swipe(303, 1200, 335, 150, 300);
            sleep(2000);
        }
        let textViews = className("android.widget.ImageView").clickable(true).find();
        let b = textViews[0].bounds();
        click(b.centerX(), b.centerY());
    }
}
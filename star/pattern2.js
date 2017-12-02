// 要求a:抽象出父类
// 1.咖啡和茶不同，抽象出‘饮料’（Beverage）
// 2.把水煮沸
// 3.泡的方式不同，抽象成‘泡’（brew）
// 4.加的调料不同，抽象成‘调料’（addCondiments）

//要求b:如果不想在茶中放入柠檬呢？
//用到钩子方法，在父类中，容易变化的地方放置一个钩子，究竟要不要挂钩，由子类自己决定

var Beverage = function(){};


Beverage.prototype.boilWater = function() {
	console.log("把水煮沸")；
};
Beverage.prototype.brew = function() {
	//强制子类必须重写该方法
	throw new Error("子类必须重写该方法");
};
Beverage.prototype.pourInCup = function() {
	//强制子类必须重写该方法
	throw new Error("子类必须重写该方法");
};
Beverage.prototype.addCondiments = function() {
	//强制子类必须重写该方法
	throw new Error("子类必须重写该方法");
};
// 钩子方法
Beverage.prototype.customerWantsCondiments = function(){
	return true;//若子类不想加调料，可将此处改为false即可
};
Beverage.prototype.init = function(){
	this.boilWater();
	this.brew();
	this.pourInCup();
	// 钩子方法的用处
	if (this.customerWantsCondiments()) {
		this.addCondiments();
	}
}


//子类的重写和调用--咖啡
var Coffee = function () {
	
};

Coffee.prototype.boilWater = function() {
	console.log("把水煮沸")；
};
Coffee.prototype.brew = function() {
	console.log("用沸水冲泡咖啡")；
};
Coffee.prototype.pourInCup = function() {
	console.log("把咖啡倒进杯子")；
};
Coffee.prototype.addCondiments = function() {
	console.log("加糖和牛奶")；
};


//子类的重写和调用--茶
var Tea = function(){

};
Tea.prototype.boilWater = function(){
	console.log("把水煮沸")；
}；
Tea.prototype.steepTea = function(){
	console.log("用沸水浸泡茶叶")；
}；
Tea.prototype.pourInCup= function(){
	console.log("把茶水倒进杯子")；
}；
Tea.prototype.addLemon = function(){
	console.log("加柠檬")；
}；

Tea.prototype.customerWantsCondiments = function(){
	return Window.confirm('请问需要加调料吗？');//让用户来选择是否加调料
}

//原型链继承
Coffee.prototype = new Beverage();
Tea.prototype = new Beverage();

var coffee = new Coffee();
coffee.init();


var tea = new Tea();
tea.init();





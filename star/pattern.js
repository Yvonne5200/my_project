var Coffee = function () {
	// body...
};

Coffee.prototype.boilWater = function() {
	console.log("把水煮沸")；
};
Coffee.prototype.brewCoffee = function() {
	console.log("用沸水冲泡咖啡")；
};
Coffee.prototype.pourInCup = function() {
	console.log("把咖啡倒进杯子")；
};
Coffee.prototype.addSugarAndMilk = function() {
	console.log("加糖和牛奶")；
};

Coffee.prototype.init = function(){
	this.boilWater();
	this.brewCoffee();
	this.pourInCup();
	this.addSugarAndMilk();
};

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
Tea.prototype.init = function(){
	this.boilWater();
	this.steepTea();
	this.pourInCup();
	this.addLemon();
};

var coffee = new Coffee();
coffee.init();


var tea = new Tea();
tea.init();


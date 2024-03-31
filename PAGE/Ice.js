function getIceMenu() {
  var foodtype = prompt("布丁or刨冰？请选择您想烹饪的冰品类型：");
  var icemenus = [ "透明的液体放冰箱冷冻后削成冰碎用大杯子装着，上面淋上用高级的绿色水果做的糖浆和加甜的牧场的恩典，香纯的甜蜜冰凉~"];
  if (foodtype == "刨冰") {
    const randomIndex = Math.floor(Math.random() * cakemenus.length);
    alert(cakemenus[randomIndex]);
  } else {
    alert("哈哈，其实我们店的鱼胶粉用完了，只能做刨冰~");
    getIceMenu();
  }
}

getIceMenu();

function chooseIngredients(){
  var water = prompt("透明的液体是（水or豆浆）：");
  var cheese = prompt("白色有点酸的奶制品是（奶油起司or黄油）：");
  var cream = prompt("白色的奶油是（奶油or焦糖）：")
  if(water=="水"&&cheese=="奶油起司"&&cream=="奶油"){
    alert("全选对啦！哈密瓜刨冰制作成功！");
  }else{
    alert("你选的食材里有内鬼！再试一次吧！");
    chooseIngredients();
  }
}

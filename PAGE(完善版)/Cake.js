function getCakeMenu() {
  var foodtype = prompt("水果蛋糕or起司蛋糕？请选择您想烹饪的蛋糕类型：");
  var cakemenus = ["黑色甜的糖果和白色有点酸的奶制品制作的烤蛋糕，最后涂上白色的奶油，大功告成~"];
  if (foodtype == "起司蛋糕") {
    const randomIndex = Math.floor(Math.random() * cakemenus.length);
    alert(cakemenus[randomIndex]);
  } else {
    alert("哈哈，其实我们店的水果用完了，只能做起司蛋糕~");
    getCakeMenu();
  }
}

getCakeMenu();

function chooseIngredients(){
  var chocolate = prompt("黑色甜的糖果是：");
  var cheese = prompt("白色有点酸的奶制品是：");
  var cream = prompt("白色的奶油是：")
  if(chocolate=="巧克力"&&cheese=="奶油起司"&&cream=="奶油"){
    alert("全选对啦！巧克力起司蛋糕制作成功！");
  }else{
    alert("你选的食材里有内鬼！再试一次吧！");
    chooseIngredients();
  }
}

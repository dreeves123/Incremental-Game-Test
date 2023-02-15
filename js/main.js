var player = {
	//Stats//
	coins: new Decimal(0),
	//Upgrades//
	c1: new Decimal(0),
	c1cost: new Decimal(20),
	c2: new Decimal(0),
	c2cost: new Decimal(1e3),
	c3: new Decimal(0),
	c3cost: new Decimal(25e3),
	c4: new Decimal(0),
	c4cost: new Decimal(40e3),
	c5: new Decimal(0),
	c5cost: new Decimal(100e3),
	c6: new Decimal(0),
	c6cost: new Decimal(1e6),
	//unlocks//
	prestigeUnlock: new Decimal(0)
}

const dsName = "dswipe_11822"
if (JSON.parse(window.localStorage.getItem(dsName)) !== null){
savePlayer = JSON.parse(window.localStorage.getItem(dsName));
for (const [key, value] of Object.entries(savePlayer)) {
    player[key] = new Decimal(savePlayer[key])
}
}

var one = new Decimal(1)
var max = "Max"
	 
function coinBoost(n){
n = n.mul(player.c1.add(1))
if (player.c2.gte(1)){
n = n.mul(player.c2.mul(1.5))
}
if (player.c3.gte(1)){
n = n.mul(2)
}
if (player.c5.gte(1)){
n = n.mul(player.c5.mul(3))
}
return n}

function updateText(){
document.getElementById('Coins').innerHTML = player.coins.floor();
document.getElementById('cu1').innerHTML = player.c1;
document.getElementById('cu1Cost').innerHTML = player.c1cost;
if (player.c1.gte(10)) {
document.getElementById('cu1Cost').innerHTML = "Max";
document.getElementById('cu2show').style.display = "initial"
}
document.getElementById('cu2').innerHTML = player.c2;
document.getElementById('cu2Cost').innerHTML = player.c2cost;
if (player.c2.gte(5)) {
document.getElementById('cu2Cost').innerHTML = "Max";
document.getElementById('cu3show').style.display = "initial"
}
document.getElementById('cu3').innerHTML = player.c3;
document.getElementById('cu3Cost').innerHTML = player.c3cost;
if (player.c3.gte(1)) {
document.getElementById('cu3Cost').innerHTML = "Max";
document.getElementById('cu4show').style.display = "initial"
}
document.getElementById('cu4').innerHTML = player.c4;
document.getElementById('cu4Cost').innerHTML = player.c4cost;
if (player.c4.gte(1)) {
document.getElementById('cu4Cost').innerHTML = "Max";
document.getElementById('cu5show').style.display = "initial"
}
document.getElementById('cu5').innerHTML = player.c5;
document.getElementById('cu5Cost').innerHTML = player.c5cost;
if (player.c5.gte(3)) {
document.getElementById('cu5Cost').innerHTML = "Max";
document.getElementById('cu6show').style.display = "initial"
}
document.getElementById('cu6').innerHTML = player.c6;
document.getElementById('cu6Cost').innerHTML = player.c6cost;
if (player.c6.gte(1)) {
document.getElementById('cu6Cost').innerHTML = "Max";
document.getElementById('prestigeShow').style.display = "initial"
}

}

function collectCoin() {
player.coins = player.coins.add(coinBoost(one))
updateText()
}

function buycu1(){
	if (player.c1.lt(10)) {
		if (player.coins.gte(player.c1cost)) {
			player.coins = player.coins.sub(player.c1cost)
			player.c1cost = player.c1cost.add("20")
			player.c1 = player.c1.add(1)
		}	
	}
	updateText()
}
function buycu2(){
	if (player.c2.lt(5)) {
		if (player.coins.gte(player.c2cost)) {
			player.coins = player.coins.sub(player.c2cost)
			player.c2cost = player.c2cost.add("250")
			player.c2 = player.c2.add(1)
		}	
	}
	updateText()
}
function buycu3(){
	if (player.c3.lt(1)) {
		if (player.coins.gte(player.c3cost)) {
			player.coins = player.coins.sub(player.c3cost)
			player.c3 = player.c3.add(1)
		}	
	}
	updateText()
}
function buycu4(){
	if (player.c4.lt(1)) {
		if (player.coins.gte(player.c4cost)) {
			player.coins = player.coins.sub(player.c4cost)
			player.c4 = player.c4.add(1)
		}	
	}
	updateText()
}
function buycu5(){
	if (player.c5.lt(3)) {
		if (player.coins.gte(player.c5cost)) {
			player.coins = player.coins.sub(player.c5cost)
			player.c5cost = player.c5cost.add("50000")
			player.c5 = player.c5.add(1)
		}	
	}
	updateText()
}
function buycu6(){
	if (player.c6.lt(1)) {
		if (player.coins.gte(player.c6cost)) {
			player.coins = player.coins.sub(player.c6cost)
			player.c6 = player.c6.add(1)
		}	
	}
	updateText()
}

function openPage(pageName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  document.getElementById(pageName).style.display = "block";
}
document.getElementById("defaultOpen").click();

function saveData(){
window.localStorage.setItem(dsName, JSON.stringify(player));
}

updateText()

setInterval(function() {
	if (player.c4.gte(1)){
		collectCoin()
	}
}, 200);

setInterval(function() {
  saveData()
}, 5000);

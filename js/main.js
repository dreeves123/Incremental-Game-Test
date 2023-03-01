var player = {
	//Stats//
	coins: new Decimal(0),
	prestige: new Decimal(0),
	sharpenings: new Decimal(0),
	pencils: new Decimal(0),
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
	
	pu1a: new Decimal(0),
	pu1acost: new Decimal(1),
	pu1b: new Decimal(0),
	pu1bcost: new Decimal(1),
	pu1c: new Decimal(0),
	pu1ccost: new Decimal(10),
	pu2a: new Decimal(0),
	pu2acost: new Decimal(4),
	pu2b: new Decimal(0),
	pu2bcost: new Decimal(8),
	pu2c: new Decimal(0),
	pu2ccost: new Decimal(120),
	pu3a: new Decimal(0),
	pu3acost: new Decimal(20),
	pu3b: new Decimal(0),
	pu3bcost: new Decimal(30),
	pu3c: new Decimal(0),
	pu3ccost: new Decimal(1e3),
	pu4a: new Decimal(0),
	pu4acost: new Decimal(175),
	pu4b: new Decimal(0),
	pu4bcost: new Decimal(400),
	pu4c: new Decimal(0),
	pu4ccost: new Decimal(1.5e3),
	pu5: new Decimal(0),
	pu5cost: new Decimal(10e3),
	
	p1: new Decimal(0),
	p1cost: new Decimal(1),
	p2: new Decimal(0),
	p2cost: new Decimal(2),
	p3: new Decimal(0),
	p3cost: new Decimal(3),
	p4: new Decimal(0),
	p4cost: new Decimal(6),
	p5: new Decimal(0),
	p5cost: new Decimal(8),
	p6: new Decimal(0),
	p6cost: new Decimal(10),
	p7: new Decimal(0),
	p7cost: new Decimal(25),
	p8: new Decimal(0),
	p8cost: new Decimal(50),
	p9: new Decimal(0),
	p9cost: new Decimal(50),
	p10: new Decimal(0),
	p10cost: new Decimal(160),
	p11: new Decimal(0),
	p11cost: new Decimal(400),
	p12: new Decimal(0),
	p12cost: new Decimal(1.5e3),
	p13: new Decimal(0),
	p13cost: new Decimal(5e3),
	p14: new Decimal(0),
	p14cost: new Decimal(2e4),
	p15: new Decimal(0),
	p15cost: new Decimal(1.5e6),
	p16: new Decimal(0),
	p16cost: new Decimal(5e6),
	ps1: new Decimal(0),
	ps1cost: new Decimal(250),
	ps2: new Decimal(0),
	ps2cost: new Decimal(1e3),
	ps3: new Decimal(0),
	ps3cost: new Decimal(5e3),
	ps4: new Decimal(0),
	ps4cost: new Decimal(25e3),
	ps5: new Decimal(0),
	ps5cost: new Decimal(100e3),
	ps6: new Decimal(0),
	ps6cost: new Decimal(2.5e6),
	ps7: new Decimal(0),
	ps7cost: new Decimal(1e8),
	ps8: new Decimal(0),
	ps8cost: new Decimal(1.5e8),
	ps9: new Decimal(0),
	ps9cost: new Decimal(1e9),
	//unlocks//
	prestigeUnlock: new Decimal(0),
	pencilUnlock: new Decimal(0),
	chairUnlock: new Decimal(0)
	
}

const dsName = "DSTest1" //"DSTest1" for actual game, "DSTESTING" for ds testing
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
if (player.pu1a.gte(1)){
n = n.mul(player.pu1a.mul(3))
}
if (player.pu2a.gte(1)){
n = n.mul(player.pu2a.mul(5))
}
if (player.pu3a.gte(1)){
n = n.mul((player.prestige.add(4)).log(4))
}
if (player.pu4a.gte(1)){
n = n.mul(player.pu4a.mul(8))
}
if (player.p1.gte(1)){
n = n.mul(player.p1.mul(5))
}
if (player.p2.gte(1)){
n = n.mul(player.p2.mul(3))
}
if (player.p4.gte(1)){
n = n.mul(2)
}
if (player.p6.gte(1)){
n = n.mul(2.5)
}
if (player.p7.gte(1)){
n = n.mul(10)
}
return n}
function prestigeBoost(n){
n = (n.div(1e6)).pow(0.2)
if (player.pu1b.gte(1)){
n = n.mul(player.pu1b.mul(2))
}
if (player.pu2b.gte(1)){
n = n.mul(player.pu2b.mul(3))
}
if (player.pu3b.gte(1)){
n = n.mul(player.pu3b.mul(4))
}
if (player.pu4b.gte(1)){
n = n.mul(player.pu4b.mul(5))
}
if (player.pu4c.gte(1)){
n = n.mul(3)
}
if (player.p1.gte(1)){
n = n.mul(player.p1.mul(2))
}
if (player.p3.gte(1)){
n = n.mul(2)
}
if (player.ps2.gte(1)){
n = n.mul(1.5)
}
if (player.p4.gte(1)){
n = n.mul(2)
}
if (player.p5.gte(1)){
n = n.mul(5)
}
if (player.p7.gte(1)){
n = n.mul(10)
}
if (player.p11.gte(1)){
n = n.mul(4)
}
if (player.p15.gte(1)){
n = n.mul(5)
}
return n.floor()}
function sharpeningBoost(n){
if (player.p2.gte(1)){
n = n.mul(3)
}
if (player.p3.gte(1)){
n = n.mul(2)
}
if (player.p4.gte(1)){
n = n.mul(2)
}
if (player.p5.gte(1)){
n = n.mul(5)
}
if (player.p6.gte(1)){
n = n.mul(2.5)
}
if (player.p8.gte(1)){
n = n.mul(4)
}
if (player.p9.gte(1)){
n = n.mul(3)
}
if (player.p10.gte(1)){
n = n.mul(10)
}
if (player.p12.gte(1)){
n = n.mul(5)
}
if (player.p13.gte(1)){
n = n.mul(7)
}
if (player.p14.gte(1)){
n = n.mul(10)
}
return n}
function pencilBoost(n){
n = n = (n.div(10e3)).pow(0.2)
if (player.ps1.gte(1)){
n = n.mul(2)
}
if (player.ps2.gte(1)){
n = n.mul(1.5)
}
if (player.p6.gte(1)){
n = n.mul(2.5)
}
if (player.p9.gte(1)){
n = n.mul(3)
}
if (player.p11.gte(1)){
n = n.mul(4)
}
if (player.p12.gte(1)){
n = n.mul(5)
}
if (player.p13.gte(1)){
n = n.mul(7)
}
if (player.p14.gte(1)){
n = n.mul(10)
}
return n.floor()}

function updateText(){
document.getElementById('Coins').innerHTML = player.coins.round()
if (player.coins.gte(1e3)){
	document.getElementById('Coins').innerHTML = player.coins.toExponential(2).replace(/e\+?/, 'e');
}
document.getElementById('cu1').innerHTML = player.c1;
document.getElementById('cu1Cost').innerHTML = player.c1cost;
if (player.c1.gte(10)) {
document.getElementById('cu1Cost').innerHTML = "Max";
document.getElementById('cu2show').style.display = "initial"
}
document.getElementById('cu2').innerHTML = player.c2;
document.getElementById('cu2Cost').innerHTML = player.c2cost.toExponential(2).replace(/e\+?/, 'e');
if (player.c2.gte(5)) {
document.getElementById('cu2Cost').innerHTML = "Max";
document.getElementById('cu3show').style.display = "initial"
}
document.getElementById('cu3').innerHTML = player.c3;
document.getElementById('cu3Cost').innerHTML = player.c3cost.toExponential(2).replace(/e\+?/, 'e');
if (player.c3.gte(1)) {
document.getElementById('cu3Cost').innerHTML = "Max";
document.getElementById('cu4show').style.display = "initial"
}
document.getElementById('cu4').innerHTML = player.c4;
document.getElementById('cu4Cost').innerHTML = player.c4cost.toExponential(2).replace(/e\+?/, 'e');
if (player.c4.gte(1)) {
document.getElementById('cu4Cost').innerHTML = "Max";
document.getElementById('cu5show').style.display = "initial"
}
document.getElementById('cu5').innerHTML = player.c5;
document.getElementById('cu5Cost').innerHTML = player.c5cost.toExponential(2).replace(/e\+?/, 'e');
if (player.c5.gte(3)) {
document.getElementById('cu5Cost').innerHTML = "Max";
document.getElementById('cu6show').style.display = "initial"
}
document.getElementById('cu6').innerHTML = player.c6;
document.getElementById('cu6Cost').innerHTML = player.c6cost.toExponential(2).replace(/e\+?/, 'e');
if (player.c6.gte(1)){
document.getElementById('cu6Cost').innerHTML = "Max";
}
if (player.c6.gte(1) || player.prestigeUnlock.gte(1)) {
document.getElementById('prestigeShow').style.display = "initial"
player.prestigeUnlock = new Decimal(1)
}
document.getElementById('prestigeAmount').innerHTML = "You need 1e6+ Coins to prestige."
if (player.coins.gte(1e6)){
let gain = prestigeBoost(player.coins)
if (gain.gte(1e3)){
	gain = gain.toExponential(1).replace(/e\+?/, 'e');
}
document.getElementById('prestigeAmount').innerHTML = 'Prestige for <span style="color:#3eed3b;">+' + gain + '</span> Prestige points'
}

}
function updatePrestigeText(){
document.getElementById('PPoints').innerHTML = player.prestige.round()
if (player.prestige.gte(1e3)){
	document.getElementById('PPoints').innerHTML = player.prestige.toExponential(2).replace(/e\+?/, 'e');
}
document.getElementById('pu1a').innerHTML = player.pu1a;
document.getElementById('pu1aCost').innerHTML = player.pu1acost;
if (player.pu1a.gte(1)) {
document.getElementById('pu1aCost').innerHTML = "Max";
document.getElementById('pu2ashow').style.display = "initial"
}
document.getElementById('pu1b').innerHTML = player.pu1b;
document.getElementById('pu1bCost').innerHTML = player.pu1bcost;
if (player.pu1b.gte(1)) {
document.getElementById('pu1bCost').innerHTML = "Max";
document.getElementById('pu2bshow').style.display = "initial"
}
document.getElementById('pu1c').innerHTML = player.pu1c;
document.getElementById('pu1cCost').innerHTML = player.pu1ccost;
if (player.pu1c.gte(1)) {
document.getElementById('pu1cCost').innerHTML = "Max";
document.getElementById('pu2cshow').style.display = "initial"
}
document.getElementById('pu2a').innerHTML = player.pu2a;
document.getElementById('pu2aCost').innerHTML = player.pu2acost;
if (player.pu2a.gte(1)) {
document.getElementById('pu2aCost').innerHTML = "Max";
document.getElementById('pu3ashow').style.display = "initial"
}
document.getElementById('pu2b').innerHTML = player.pu2b;
document.getElementById('pu2bCost').innerHTML = player.pu2bcost;
if (player.pu2b.gte(1)) {
document.getElementById('pu2bCost').innerHTML = "Max";
document.getElementById('pu3bshow').style.display = "initial"
}
document.getElementById('pu2c').innerHTML = player.pu2c;
document.getElementById('pu2cCost').innerHTML = player.pu2ccost;
if (player.pu2c.gte(1)) {
document.getElementById('pu2cCost').innerHTML = "Max";
document.getElementById('pu3cshow').style.display = "initial"
}
document.getElementById('pu3a').innerHTML = player.pu3a;
document.getElementById('pu3aCost').innerHTML = player.pu3acost;
if (player.pu3a.gte(1)) {
document.getElementById('pu3aCost').innerHTML = "Max";
document.getElementById('pu4ashow').style.display = "initial"
}
document.getElementById('pu3b').innerHTML = player.pu3b;
document.getElementById('pu3bCost').innerHTML = player.pu3bcost;
if (player.pu3b.gte(1)) {
document.getElementById('pu3bCost').innerHTML = "Max";
document.getElementById('pu4bshow').style.display = "initial"
}
document.getElementById('pu4a').innerHTML = player.pu4a;
document.getElementById('pu4aCost').innerHTML = player.pu4acost;
if (player.pu4a.gte(1)) {
document.getElementById('pu4aCost').innerHTML = "Max";
//document.getElementById('pu4ashow').style.display = "initial"
}
document.getElementById('pu4b').innerHTML = player.pu4b;
document.getElementById('pu4bCost').innerHTML = player.pu4bcost;
if (player.pu4b.gte(1)) {
document.getElementById('pu4bCost').innerHTML = "Max";
//document.getElementById('pu5bshow').style.display = "initial"
}
document.getElementById('pu3c').innerHTML = player.pu3c;
document.getElementById('pu3cCost').innerHTML = player.pu3ccost.toExponential(2).replace(/e\+?/, 'e');
if (player.pu3c.gte(1)) {
document.getElementById('pu3cCost').innerHTML = "Max";
document.getElementById('pu4cshow').style.display = "initial"
}
document.getElementById('pu4c').innerHTML = player.pu4c;
document.getElementById('pu4cCost').innerHTML = player.pu4ccost.toExponential(2).replace(/e\+?/, 'e');
if (player.pu4c.gte(1)) {
document.getElementById('pu4cCost').innerHTML = "Max";
document.getElementById('pu5show').style.display = "initial"
}
document.getElementById('pu5').innerHTML = player.pu5;
document.getElementById('pu5Cost').innerHTML = player.pu5cost.toExponential(2).replace(/e\+?/, 'e');
if (player.pu5.gte(1)) {
document.getElementById('pu5Cost').innerHTML = "Max";
document.getElementById('pu5show').style.display = "initial"
}
if (player.pu5.gte(1) || player.pencilUnlock.gte(1)) {
document.getElementById('pencilShow').style.display = "initial"
player.pencilUnlock = new Decimal(1)
}
document.getElementById('pencilAmount').innerHTML = 'You need <span style="color:#3eed3b;">1e4+</span> Prestige points and <span style="color:#2b8bff;">50+</span> Sharpenings to make a Pencil.'
if (player.prestige.gte(10e3)){
	if (player.sharpenings.gte(50)){
		let gain = pencilBoost(player.prestige)
		if (gain.gte(1e3)){
			gain = gain.toExponential(1).replace(/e\+?/, 'e');
		}
		document.getElementById('pencilAmount').innerHTML = 'Make <span style="color:#2b8bff;">+' + gain + '</span> Pencils'
	}
}
}

function updatePencilText(){
document.getElementById('PencilSharpenings').innerHTML = player.sharpenings.round()
if (player.sharpenings.gte(1e3)){
	document.getElementById('PencilSharpenings').innerHTML = player.sharpenings.toExponential(2).replace(/e\+?/, 'e');
}
document.getElementById('Pencils').innerHTML = player.pencils.round()
if (player.pencils.gte(1e3)){
	document.getElementById('Pencils').innerHTML = player.pencils.toExponential(2).replace(/e\+?/, 'e');
}

document.getElementById('p1').innerHTML = player.p1;
document.getElementById('p1Cost').innerHTML = player.p1cost;
if (player.p1.gte(1)) {
document.getElementById('p1Cost').innerHTML = "Max";
document.getElementById('p2show').style.display = "initial"
}
document.getElementById('p2').innerHTML = player.p2;
document.getElementById('p2Cost').innerHTML = player.p2cost;
if (player.p2.gte(1)) {
document.getElementById('p2Cost').innerHTML = "Max";
document.getElementById('p3show').style.display = "initial"
}
document.getElementById('p3').innerHTML = player.p3;
document.getElementById('p3Cost').innerHTML = player.p3cost;
if (player.p3.gte(1)) {
document.getElementById('p3Cost').innerHTML = "Max";
document.getElementById('p4show').style.display = "initial"
}
document.getElementById('p4').innerHTML = player.p4;
document.getElementById('p4Cost').innerHTML = player.p4cost;
if (player.p4.gte(1)) {
document.getElementById('p4Cost').innerHTML = "Max";
document.getElementById('p5show').style.display = "initial"
}
document.getElementById('p5').innerHTML = player.p5;
document.getElementById('p5Cost').innerHTML = player.p5cost;
if (player.p5.gte(1)) {
document.getElementById('p5Cost').innerHTML = "Max";
document.getElementById('p6show').style.display = "initial"
}
document.getElementById('p6').innerHTML = player.p6;
document.getElementById('p6Cost').innerHTML = player.p6cost;
if (player.p6.gte(1)) {
document.getElementById('p6Cost').innerHTML = "Max";
document.getElementById('p7show').style.display = "initial"
}
document.getElementById('p7').innerHTML = player.p7;
document.getElementById('p7Cost').innerHTML = player.p7cost;
if (player.p7.gte(1)) {
document.getElementById('p7Cost').innerHTML = "Max";
document.getElementById('p8show').style.display = "initial"
}
document.getElementById('p8').innerHTML = player.p8;
document.getElementById('p8Cost').innerHTML = player.p8cost;
if (player.p8.gte(1)) {
document.getElementById('p8Cost').innerHTML = "Max";
document.getElementById('p9show').style.display = "initial"
}
document.getElementById('p9').innerHTML = player.p9;
document.getElementById('p9Cost').innerHTML = player.p9cost;
if (player.p9.gte(1)) {
document.getElementById('p9Cost').innerHTML = "Max";
document.getElementById('p10show').style.display = "initial"
}
document.getElementById('p10').innerHTML = player.p10;
document.getElementById('p10Cost').innerHTML = player.p10cost;
if (player.p10.gte(1)) {
document.getElementById('p10Cost').innerHTML = "Max";
document.getElementById('p11show').style.display = "initial"
}
document.getElementById('p11').innerHTML = player.p11;
document.getElementById('p11Cost').innerHTML = player.p11cost;
if (player.p11.gte(1)) {
document.getElementById('p11Cost').innerHTML = "Max";
document.getElementById('p12show').style.display = "initial"
}
document.getElementById('p12').innerHTML = player.p12;
document.getElementById('p12Cost').innerHTML = player.p12cost.toExponential(2).replace(/e\+?/, 'e');
if (player.p12.gte(1)) {
document.getElementById('p12Cost').innerHTML = "Max";
document.getElementById('p13show').style.display = "initial"
}
document.getElementById('p13').innerHTML = player.p13;
document.getElementById('p13Cost').innerHTML = player.p13cost.toExponential(2).replace(/e\+?/, 'e');
if (player.p13.gte(1)) {
document.getElementById('p13Cost').innerHTML = "Max";
document.getElementById('p14show').style.display = "initial"
}
document.getElementById('p14').innerHTML = player.p14;
document.getElementById('p14Cost').innerHTML = player.p14cost.toExponential(2).replace(/e\+?/, 'e');
if (player.p14.gte(1)) {
document.getElementById('p14Cost').innerHTML = "Max";
document.getElementById('p15show').style.display = "initial"
}
document.getElementById('p15').innerHTML = player.p15;
document.getElementById('p15Cost').innerHTML = player.p15cost.toExponential(2).replace(/e\+?/, 'e');
if (player.p15.gte(1)) {
document.getElementById('p15Cost').innerHTML = "Max";
document.getElementById('p16show').style.display = "initial"
}
document.getElementById('p16').innerHTML = player.p16;
document.getElementById('p16Cost').innerHTML = player.p16cost.toExponential(2).replace(/e\+?/, 'e');
if (player.p16.gte(1)) {
document.getElementById('p16Cost').innerHTML = "Max";
//document.getElementById('p16show').style.display = "initial"
}
document.getElementById('ps1').innerHTML = player.ps1;
document.getElementById('ps1Cost').innerHTML = player.ps1cost;
if (player.ps1.gte(1)) {
document.getElementById('ps1Cost').innerHTML = "Max";
document.getElementById('ps2show').style.display = "initial"
}
document.getElementById('ps2').innerHTML = player.ps2;
document.getElementById('ps2Cost').innerHTML = player.ps2cost.toExponential(2).replace(/e\+?/, 'e');
if (player.ps2.gte(1)) {
document.getElementById('ps2Cost').innerHTML = "Max";
document.getElementById('ps3show').style.display = "initial"
}
document.getElementById('ps3').innerHTML = player.ps3;
document.getElementById('ps3Cost').innerHTML = player.ps3cost.toExponential(2).replace(/e\+?/, 'e');
if (player.ps3.gte(1)) {
document.getElementById('ps3Cost').innerHTML = "Max";
document.getElementById('ps4show').style.display = "initial"
}
document.getElementById('ps4').innerHTML = player.ps4;
document.getElementById('ps4Cost').innerHTML = player.ps4cost.toExponential(2).replace(/e\+?/, 'e');
if (player.ps4.gte(1)) {
document.getElementById('ps4Cost').innerHTML = "Max";
document.getElementById('ps5show').style.display = "initial"
}
document.getElementById('ps5').innerHTML = player.ps5;
document.getElementById('ps5Cost').innerHTML = player.ps5cost.toExponential(2).replace(/e\+?/, 'e');
if (player.ps5.gte(1)) {
document.getElementById('ps5Cost').innerHTML = "Max";
document.getElementById('ps6show').style.display = "initial"
}
document.getElementById('ps6').innerHTML = player.ps6;
document.getElementById('ps6Cost').innerHTML = player.ps6cost.toExponential(2).replace(/e\+?/, 'e');
if (player.ps6.gte(1)) {
document.getElementById('ps6Cost').innerHTML = "Max";
document.getElementById('ps7show').style.display = "initial"
}
document.getElementById('ps7').innerHTML = player.ps7;
document.getElementById('ps7Cost').innerHTML = player.ps7cost.toExponential(2).replace(/e\+?/, 'e');
if (player.ps7.gte(1)) {
document.getElementById('ps7Cost').innerHTML = "Max";
document.getElementById('ps8show').style.display = "initial"
}
document.getElementById('ps8').innerHTML = player.ps8;
document.getElementById('ps8Cost').innerHTML = player.ps8cost.toExponential(2).replace(/e\+?/, 'e');
if (player.ps8.gte(1)) {
document.getElementById('ps8Cost').innerHTML = "Max";
document.getElementById('ps9show').style.display = "initial"
}
document.getElementById('ps9').innerHTML = player.ps9;
document.getElementById('ps9Cost').innerHTML = player.ps9cost.toExponential(2).replace(/e\+?/, 'e');
if (player.ps9.gte(1)) {
document.getElementById('ps9Cost').innerHTML = "Max";
//document.getElementById('ps10show').style.display = "initial"
}

if (player.p16.gte(1) || player.chairUnlock.gte(1)) {
document.getElementById('chairShow').style.display = "initial"
player.chairUnlock = new Decimal(1)
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

function buypu1a(){
	if (player.pu1a.lt(1)) {
		if (player.prestige.gte(player.pu1acost)) {
			player.prestige = player.prestige.sub(player.pu1acost)
			player.pu1a = player.pu1a.add(1)
		}	
	}
	updatePrestigeText()
}
function buypu1b(){
	if (player.pu1b.lt(1)) {
		if (player.prestige.gte(player.pu1bcost)) {
			player.prestige = player.prestige.sub(player.pu1bcost)
			player.pu1b = player.pu1b.add(1)
		}	
	}
	updatePrestigeText()
}
function buypu1c(){
	if (player.pu1c.lt(1)) {
		if (player.prestige.gte(player.pu1ccost)) {
			player.prestige = player.prestige.sub(player.pu1ccost)
			player.pu1c = player.pu1c.add(1)
		}	
	}
	updatePrestigeText()
}
function buypu2a(){
	if (player.pu2a.lt(1)) {
		if (player.prestige.gte(player.pu2acost)) {
			player.prestige = player.prestige.sub(player.pu2acost)
			player.pu2a = player.pu2a.add(1)
		}	
	}
	updatePrestigeText()
}
function buypu2b(){
	if (player.pu2b.lt(1)) {
		if (player.prestige.gte(player.pu2bcost)) {
			player.prestige = player.prestige.sub(player.pu2bcost)
			player.pu2b = player.pu2b.add(1)
		}	
	}
	updatePrestigeText()
}
function buypu2c(){
	if (player.pu2c.lt(1)) {
		if (player.prestige.gte(player.pu2ccost)) {
			player.prestige = player.prestige.sub(player.pu2ccost)
			player.pu2c = player.pu2c.add(1)
		}	
	}
	updatePrestigeText()
}
function buypu3a(){
	if (player.pu3a.lt(1)) {
		if (player.prestige.gte(player.pu3acost)) {
			player.prestige = player.prestige.sub(player.pu3acost)
			player.pu3a = player.pu3a.add(1)
		}	
	}
	updatePrestigeText()
}
function buypu3b(){
	if (player.pu3b.lt(1)) {
		if (player.prestige.gte(player.pu3bcost)) {
			player.prestige = player.prestige.sub(player.pu3bcost)
			player.pu3b = player.pu3b.add(1)
		}	
	}
	updatePrestigeText()
}
function buypu3c(){
	if (player.pu3c.lt(1)) {
		if (player.prestige.gte(player.pu3ccost)) {
			player.prestige = player.prestige.sub(player.pu3ccost)
			player.pu3c = player.pu3c.add(1)
		}	
	}
	updatePrestigeText()
}
function buypu4a(){
	if (player.pu4a.lt(1)) {
		if (player.prestige.gte(player.pu4acost)) {
			player.prestige = player.prestige.sub(player.pu4acost)
			player.pu4a = player.pu4a.add(1)
		}	
	}
	updatePrestigeText()
}
function buypu4b(){
	if (player.pu4b.lt(1)) {
		if (player.prestige.gte(player.pu4bcost)) {
			player.prestige = player.prestige.sub(player.pu4bcost)
			player.pu4b = player.pu4b.add(1)
		}	
	}
	updatePrestigeText()
}
function buypu4c(){
	if (player.pu4c.lt(1)) {
		if (player.prestige.gte(player.pu4ccost)) {
			player.prestige = player.prestige.sub(player.pu4ccost)
			player.pu4c = player.pu4c.add(1)
		}	
	}
	updatePrestigeText()
}
function buypu5(){
	if (player.pu5.lt(1)) {
		if (player.prestige.gte(player.pu5cost)) {
			player.prestige = player.prestige.sub(player.pu5cost)
			player.pu5 = player.pu5.add(1)
		}	
	}
	updatePrestigeText()
}

function buyp1(){
	if (player.p1.lt(1)) {
		if (player.pencils.gte(player.p1cost)) {
			player.pencils = player.pencils.sub(player.p1cost)
			player.p1 = player.p1.add(1)
		}	
	}
	updatePencilText()
}
function buyp2(){
	if (player.p2.lt(1)) {
		if (player.pencils.gte(player.p2cost)) {
			player.pencils = player.pencils.sub(player.p2cost)
			player.p2 = player.p2.add(1)
		}	
	}
	updatePencilText()
}
function buyp3(){
	if (player.p3.lt(1)) {
		if (player.pencils.gte(player.p3cost)) {
			player.pencils = player.pencils.sub(player.p3cost)
			player.p3 = player.p3.add(1)
		}	
	}
	updatePencilText()
}
function buyp4(){
	if (player.p4.lt(1)) {
		if (player.pencils.gte(player.p4cost)) {
			player.pencils = player.pencils.sub(player.p4cost)
			player.p4 = player.p4.add(1)
		}	
	}
	updatePencilText()
}
function buyp5(){
	if (player.p5.lt(1)) {
		if (player.pencils.gte(player.p5cost)) {
			player.pencils = player.pencils.sub(player.p5cost)
			player.p5 = player.p5.add(1)
		}	
	}
	updatePencilText()
}
function buyp6(){
	if (player.p6.lt(1)) {
		if (player.pencils.gte(player.p6cost)) {
			player.pencils = player.pencils.sub(player.p6cost)
			player.p6 = player.p6.add(1)
		}	
	}
	updatePencilText()
}
function buyp7(){
	if (player.p7.lt(1)) {
		if (player.pencils.gte(player.p7cost)) {
			player.pencils = player.pencils.sub(player.p7cost)
			player.p7 = player.p7.add(1)
		}	
	}
	updatePencilText()
}
function buyp8(){
	if (player.p8.lt(1)) {
		if (player.pencils.gte(player.p8cost)) {
			player.pencils = player.pencils.sub(player.p8cost)
			player.p8 = player.p8.add(1)
		}	
	}
	updatePencilText()
}
function buyp9(){
	if (player.p9.lt(1)) {
		if (player.pencils.gte(player.p9cost)) {
			player.pencils = player.pencils.sub(player.p9cost)
			player.p9 = player.p9.add(1)
		}	
	}
	updatePencilText()
}
function buyp10(){
	if (player.p10.lt(1)) {
		if (player.pencils.gte(player.p10cost)) {
			player.pencils = player.pencils.sub(player.p10cost)
			player.p10 = player.p10.add(1)
		}	
	}
	updatePencilText()
}
function buyp11(){
	if (player.p11.lt(1)) {
		if (player.pencils.gte(player.p11cost)) {
			player.pencils = player.pencils.sub(player.p11cost)
			player.p11 = player.p11.add(1)
		}	
	}
	updatePencilText()
}
function buyp12(){
	if (player.p12.lt(1)) {
		if (player.pencils.gte(player.p12cost)) {
			player.pencils = player.pencils.sub(player.p12cost)
			player.p12 = player.p12.add(1)
		}	
	}
	updatePencilText()
}
function buyp13(){
	if (player.p13.lt(1)) {
		if (player.pencils.gte(player.p13cost)) {
			player.pencils = player.pencils.sub(player.p13cost)
			player.p13 = player.p13.add(1)
		}	
	}
	updatePencilText()
}
function buyp14(){
	if (player.p14.lt(1)) {
		if (player.pencils.gte(player.p14cost)) {
			player.pencils = player.pencils.sub(player.p14cost)
			player.p14 = player.p14.add(1)
		}	
	}
	updatePencilText()
}
function buyp15(){
	if (player.p15.lt(1)) {
		if (player.pencils.gte(player.p15cost)) {
			player.pencils = player.pencils.sub(player.p15cost)
			player.p15 = player.p15.add(1)
		}	
	}
	updatePencilText()
}
function buyp16(){
	if (player.p16.lt(1)) {
		if (player.pencils.gte(player.p16cost)) {
			player.pencils = player.pencils.sub(player.p16cost)
			player.p16 = player.p16.add(1)
		}	
	}
	updatePencilText()
}
function buyps1(){
	if (player.ps1.lt(1)) {
		if (player.sharpenings.gte(player.ps1cost)) {
			player.sharpenings = player.sharpenings.sub(player.ps1cost)
			player.ps1 = player.ps1.add(1)
		}	
	}
	updatePencilText()
}
function buyps2(){
	if (player.ps2.lt(1)) {
		if (player.sharpenings.gte(player.ps2cost)) {
			player.sharpenings = player.sharpenings.sub(player.ps2cost)
			player.ps2 = player.ps2.add(1)
		}	
	}
	updatePencilText()
}
function buyps3(){
	if (player.ps3.lt(1)) {
		if (player.sharpenings.gte(player.ps3cost)) {
			player.sharpenings = player.sharpenings.sub(player.ps3cost)
			player.ps3 = player.ps3.add(1)
		}	
	}
	updatePencilText()
}
function buyps4(){
	if (player.ps4.lt(1)) {
		if (player.sharpenings.gte(player.ps4cost)) {
			player.sharpenings = player.sharpenings.sub(player.ps4cost)
			player.ps4 = player.ps4.add(1)
		}	
	}
	updatePencilText()
}
function buyps5(){
	if (player.ps5.lt(1)) {
		if (player.sharpenings.gte(player.ps5cost)) {
			player.sharpenings = player.sharpenings.sub(player.ps5cost)
			player.ps5 = player.ps5.add(1)
		}	
	}
	updatePencilText()
}
function buyps6(){
	if (player.ps6.lt(1)) {
		if (player.sharpenings.gte(player.ps6cost)) {
			player.sharpenings = player.sharpenings.sub(player.ps6cost)
			player.ps6 = player.ps6.add(1)
		}	
	}
	updatePencilText()
}
function buyps7(){
	if (player.ps7.lt(1)) {
		if (player.sharpenings.gte(player.ps7cost)) {
			player.sharpenings = player.sharpenings.sub(player.ps7cost)
			player.ps7 = player.ps7.add(1)
		}	
	}
	updatePencilText()
}
function buyps8(){
	if (player.ps8.lt(1)) {
		if (player.sharpenings.gte(player.ps8cost)) {
			player.sharpenings = player.sharpenings.sub(player.ps8cost)
			player.ps8 = player.ps8.add(1)
		}	
	}
	updatePencilText()
}
function buyps9(){
	if (player.ps9.lt(1)) {
		if (player.sharpenings.gte(player.ps9cost)) {
			player.sharpenings = player.sharpenings.sub(player.ps9cost)
			player.ps9 = player.ps9.add(1)
		}	
	}
	updatePencilText()
}

function resetCoin(){
		player.coins = new Decimal(0)
		if (player.pu2c.lt(1)){
			player.c1 = new Decimal(0)
			player.c1cost = new Decimal(20)}
		if (player.pu3c.lt(1)){
			player.c2 = new Decimal(0)
			player.c2cost = new Decimal(1e3)
			player.c3 = new Decimal(0)
			player.c3cost = new Decimal(25e3)}
		if (player.pu1c.lt(1)){
			player.c4 = new Decimal(0)
			player.c4cost = new Decimal(40e3)}
		if (player.pu4c.lt(1)){
			player.c5 = new Decimal(0)
			player.c5cost = new Decimal(100e3)
			player.c6 = new Decimal(0)
			player.c6cost = new Decimal(1e6)}
}

function resetPrestige(){
	player.prestige = new Decimal(0)
	
	if (player.ps7.lt(1)){
	player.pu1a = new Decimal(0)
	player.pu1acost = new Decimal(1)}
	if (player.ps8.lt(1)){
	player.pu1b = new Decimal(0)
	player.pu1bcost = new Decimal(1)}
	if (player.ps3.lt(1)){
	player.pu1c = new Decimal(0)
	player.pu1ccost = new Decimal(10)}
	if (player.ps7.lt(1)){
	player.pu2a = new Decimal(0)
	player.pu2acost = new Decimal(4)}
	if (player.ps8.lt(1)){
	player.pu2b = new Decimal(0)
	player.pu2bcost = new Decimal(8)}
	if (player.ps4.lt(1)){
	player.pu2c = new Decimal(0)
	player.pu2ccost = new Decimal(120)}
	if (player.ps7.lt(1)){
	player.pu3a = new Decimal(0)
	player.pu3acost = new Decimal(20)}
	if (player.ps8.lt(1)){
	player.pu3b = new Decimal(0)
	player.pu3bcost = new Decimal(30)}
	if (player.ps6.lt(1)){
	player.pu3c = new Decimal(0)
	player.pu3ccost = new Decimal(1e3)}
	if (player.ps7.lt(1)){
	player.pu4a = new Decimal(0)
	player.pu4acost = new Decimal(175)}
	if (player.ps8.lt(1)){
	player.pu4b = new Decimal(0)
	player.pu4bcost = new Decimal(400)}
	if (player.ps6.lt(1)){
	player.pu4c = new Decimal(0)
	player.pu4ccost = new Decimal(1.5e3)}
	if (player.ps9.lt(1)){
	player.pu5 = new Decimal(0)
	player.pu5cost = new Decimal(10e3)}
}

function prestige(){
	if (player.coins.gte(1e6)){
		var gain = prestigeBoost(player.coins)
		resetCoin()
		player.prestige = player.prestige.add(gain)
	}
	updatePrestigeText()
	updateText()
}

function pencil(){
	if (player.prestige.gte(10e3)) {
		if (player.sharpenings.gte(50)) {
			var gain = pencilBoost(player.prestige)
			resetPrestige()
			resetCoin()
			player.pencils = player.pencils.add(gain)
			player.sharpenings = new Decimal(0)
		}
	}
	updatePencilText()
	updatePrestigeText()
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

function loadTexts(){
	updateText()
	updatePrestigeText()
	updatePencilText()
}

loadTexts()

setInterval(function() {
	if (player.c4.gte(1)){
		collectCoin()
	}
	if (player.ps5.gte(1)) {
		player.prestige = player.prestige.add(prestigeBoost(player.coins).div(20))
		updatePrestigeText()
	}
}, 150);

setInterval(function() {
	if (player.pencilUnlock.gte(1) && player.pu5.gte(1)){
		player.sharpenings = player.sharpenings.add(sharpeningBoost(new Decimal(1)))
		updatePencilText()
	}
}, 1000);

setInterval(function() {
  saveData()
}, 5000);

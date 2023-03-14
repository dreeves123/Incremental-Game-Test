var player = {
	//Stats//
	coins: new Decimal(0),
	prestige: new Decimal(0),
	sharpenings: new Decimal(0),
	pencils: new Decimal(0),
	chairs: new Decimal(0),
	ends: new Decimal(0),
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
	
	ch1: new Decimal(0),
	ch1cost: new Decimal(1),
	ch2: new Decimal(0),
	ch2cost: new Decimal(1),
	ch3: new Decimal(0),
	ch3cost: new Decimal(2),
	ch4: new Decimal(0),
	ch4cost: new Decimal(2),
	ch5: new Decimal(0),
	ch5cost: new Decimal(4),
	ch6: new Decimal(0),
	ch6cost: new Decimal(6),
	ch7: new Decimal(0),
	ch7cost: new Decimal(12),
	ch8: new Decimal(0),
	ch8cost: new Decimal(16),
	ch9: new Decimal(0),
	ch9cost: new Decimal(16),
	ch10: new Decimal(0),
	ch10cost: new Decimal(65),
	ch11: new Decimal(0),
	ch11cost: new Decimal(75),
	ch12: new Decimal(0),
	ch12cost: new Decimal(110),
	ch13: new Decimal(0),
	ch13cost: new Decimal(150),
	ch14: new Decimal(0),
	ch14cost: new Decimal(450),
	ch15: new Decimal(0),
	ch15cost: new Decimal(1e4),
	//unlocks//
	prestigeUnlock: new Decimal(0),
	pencilUnlock: new Decimal(0),
	chairUnlock: new Decimal(0),
	endUnlock: new Decimal(0),
	
}

var upgradeBoosts = {
	c1: {
		boost: "3",
		type:"Multiply"
	}
}
//Testing multiple layers and it works

function shorten(value) {
  let newValue = value;
  const suffixes = ["", "k", "M", "B","T","Qd","Qn","Sx","Sp","Oc","No","De","UDe","DDe","TDe"];
  let suffixNum = 0;
  while (newValue >= 1000) {
    newValue /= 1000;
    suffixNum++;
  }
  newValue = newValue.toPrecision(3);
  newValue += suffixes[suffixNum];
  return newValue;
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
n = n.mul(player.ends.add(1))
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
if (player.ch1.gte(1)){
n = n.mul(5)
}
if (player.ch3.gte(1)){
n = n.mul(10)
}
if (player.ch6.gte(1)){
n = n.mul(25)
}
if (player.ch12.gte(1)){
n = n.mul(1e3)
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
if (player.ch1.gte(1)){
n = n.mul(5)
}
if (player.ch2.gte(1)){
n = n.mul(6)
}
if (player.ch5.gte(1)){
n = n.mul(10)
}
if (player.ch7.gte(1)){
n = n.mul(8)
}
if (player.ch11.gte(1)){
n = n.mul(10)
}
if (player.ch13.gte(1)){
n = n.mul(12)
}
n = n.mul(player.ends.add(1))
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
if (player.ch1.gte(1)){
n = n.mul(5)
}
if (player.ch4.gte(1)){
n = n.mul(12)
}
n = n.mul(player.ends.add(1))
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
if (player.ch1.gte(1)){
n = n.mul(5)
}
if (player.ch2.gte(1)){
n = n.mul(6)
}
if (player.ch4.gte(1)){
n = n.mul(12)
}
if (player.ch7.gte(1)){
n = n.mul(8)
}
if (player.ch9.gte(1)){
n = n.mul(3)
}
if (player.ch11.gte(1)){
n = n.mul(10)
}
if (player.ch13.gte(1)){
n = n.mul(12)
}
n = n.mul(player.ends.add(1))
return n.floor()}
function chairBoost(n){
n = (n.div(1e6)).pow(0.2)
if (player.ch6.gte(1)){
n = n.mul(2)
}
if (player.ch9.gte(1)){
n = n.mul(3)
}
n = n.mul(player.ends.add(1))
return n.floor()}

function updateText(){
document.getElementById('Coins').innerHTML = player.coins.round()
document.getElementById('Ends').innerHTML = player.ends.round()
if (player.coins.gte(1e3)){
	document.getElementById('Coins').innerHTML = shorten(player.coins)
}
document.getElementById('cu1').innerHTML = player.c1;
document.getElementById('cu1Cost').innerHTML = player.c1cost;
if (player.c1.gte(10)) {
document.getElementById('cu1Cost').innerHTML = "Max";
document.getElementById('cu2show').style.display = "initial"
}
document.getElementById('cu2').innerHTML = player.c2;
document.getElementById('cu2Cost').innerHTML = shorten(player.c2cost)
if (player.c2.gte(5)) {
document.getElementById('cu2Cost').innerHTML = "Max";
document.getElementById('cu3show').style.display = "initial"
}
document.getElementById('cu3').innerHTML = player.c3;
document.getElementById('cu3Cost').innerHTML = shorten(player.c3cost)
if (player.c3.gte(1)) {
document.getElementById('cu3Cost').innerHTML = "Max";
document.getElementById('cu4show').style.display = "initial"
}
document.getElementById('cu4').innerHTML = player.c4;
document.getElementById('cu4Cost').innerHTML = shorten(player.c4cost)
if (player.c4.gte(1)) {
document.getElementById('cu4Cost').innerHTML = "Max";
document.getElementById('cu5show').style.display = "initial"
}
document.getElementById('cu5').innerHTML = player.c5;
document.getElementById('cu5Cost').innerHTML = shorten(player.c5cost)
if (player.c5.gte(3)) {
document.getElementById('cu5Cost').innerHTML = "Max";
document.getElementById('cu6show').style.display = "initial"
}
document.getElementById('cu6').innerHTML = player.c6;
document.getElementById('cu6Cost').innerHTML = shorten(player.c6cost)
if (player.c6.gte(1)){
document.getElementById('cu6Cost').innerHTML = "Max";
}
if (player.c6.gte(1) || player.prestigeUnlock.gte(1)) {
document.getElementById('prestigeShow').style.display = "initial"
player.prestigeUnlock = new Decimal(1)
}
document.getElementById('prestigeAmount').innerHTML = "You need 1M+ Coins to prestige."
if (player.coins.gte(1e6)){
let gain = prestigeBoost(player.coins)
if (gain.gte(1e3)){
	gain = shorten(gain)
}
document.getElementById('prestigeAmount').innerHTML = 'Prestige for <span style="color:#3eed3b;">+' + gain + '</span> Prestige points'
}
document.getElementById('pencilAmount').innerHTML = 'You need <span style="color:#3eed3b;">10K+</span> Prestige points and <span style="color:#2b8bff;">50+</span> Sharpenings to make a Pencil.'
if (player.prestige.gte(10e3)){
	if (player.sharpenings.gte(50)){
		let gain = pencilBoost(player.prestige)
		if (gain.gte(1e3)){
			gain = shorten(gain)
		}
		document.getElementById('pencilAmount').innerHTML = 'Make <span style="color:#2b8bff;">+' + gain + '</span> Pencils'
	}
}

document.getElementById('chairAmount').innerHTML = 'You need <span style="color:#2b8bff;">1M++</span> Pencils to make a chair.'
if (player.pencils.gte(1e6)){
		let gain = chairBoost(player.pencils)
		if (gain.gte(1e3)){
			gain = shorten(gain)
		}
		document.getElementById('chairAmount').innerHTML = 'Make <span style="color:#ad622b;">+' + gain + '</span> Chairs'
}
document.getElementById('endAmount').innerHTML = 'You need <span style="color:#ad622b;">10K+</span> Chairs'
if (player.chairs.gte(1e4)){
	document.getElementById('endAmount').innerHTML = 'Reach the end and graduate!'
}

}
function updatePrestigeText(){
document.getElementById('PPoints').innerHTML = player.prestige.round()
if (player.prestige.gte(1e3)){
	document.getElementById('PPoints').innerHTML = shorten(player.prestige)
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
document.getElementById('pu3cCost').innerHTML = shorten(player.pu3ccost)
if (player.pu3c.gte(1)) {
document.getElementById('pu3cCost').innerHTML = "Max";
document.getElementById('pu4cshow').style.display = "initial"
}
document.getElementById('pu4c').innerHTML = player.pu4c;
document.getElementById('pu4cCost').innerHTML = shorten(player.pu4ccost)
if (player.pu4c.gte(1)) {
document.getElementById('pu4cCost').innerHTML = "Max";
document.getElementById('pu5show').style.display = "initial"
}
document.getElementById('pu5').innerHTML = player.pu5;
document.getElementById('pu5Cost').innerHTML = shorten(player.pu5cost)
if (player.pu5.gte(1)) {
document.getElementById('pu5Cost').innerHTML = "Max";
document.getElementById('pu5show').style.display = "initial"
}
if (player.pu5.gte(1) || player.pencilUnlock.gte(1)) {
document.getElementById('pencilShow').style.display = "initial"
player.pencilUnlock = new Decimal(1)
}
}

function updatePencilText(){
document.getElementById('PencilSharpenings').innerHTML = player.sharpenings.round()
if (player.sharpenings.gte(1e3)){
	document.getElementById('PencilSharpenings').innerHTML = shorten(player.sharpenings)
}
document.getElementById('Pencils').innerHTML = player.pencils.round()
if (player.pencils.gte(1e3)){
	document.getElementById('Pencils').innerHTML = shorten(player.pencils)
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
document.getElementById('p12Cost').innerHTML = shorten(player.p12cost)
if (player.p12.gte(1)) {
document.getElementById('p12Cost').innerHTML = "Max";
document.getElementById('p13show').style.display = "initial"
}
document.getElementById('p13').innerHTML = player.p13;
document.getElementById('p13Cost').innerHTML = shorten(player.p13cost)
if (player.p13.gte(1)) {
document.getElementById('p13Cost').innerHTML = "Max";
document.getElementById('p14show').style.display = "initial"
}
document.getElementById('p14').innerHTML = player.p14;
document.getElementById('p14Cost').innerHTML = shorten(player.p14cost)
if (player.p14.gte(1)) {
document.getElementById('p14Cost').innerHTML = "Max";
document.getElementById('p15show').style.display = "initial"
}
document.getElementById('p15').innerHTML = player.p15;
document.getElementById('p15Cost').innerHTML = shorten(player.p15cost)
if (player.p15.gte(1)) {
document.getElementById('p15Cost').innerHTML = "Max";
document.getElementById('p16show').style.display = "initial"
}
document.getElementById('p16').innerHTML = player.p16;
document.getElementById('p16Cost').innerHTML = shorten(player.p16cost)
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
document.getElementById('ps2Cost').innerHTML = shorten(player.ps2cost)
if (player.ps2.gte(1)) {
document.getElementById('ps2Cost').innerHTML = "Max";
document.getElementById('ps3show').style.display = "initial"
}
document.getElementById('ps3').innerHTML = player.ps3;
document.getElementById('ps3Cost').innerHTML = shorten(player.ps3cost)
if (player.ps3.gte(1)) {
document.getElementById('ps3Cost').innerHTML = "Max";
document.getElementById('ps4show').style.display = "initial"
}
document.getElementById('ps4').innerHTML = player.ps4;
document.getElementById('ps4Cost').innerHTML = shorten(player.ps4cost)
if (player.ps4.gte(1)) {
document.getElementById('ps4Cost').innerHTML = "Max";
document.getElementById('ps5show').style.display = "initial"
}
document.getElementById('ps5').innerHTML = player.ps5;
document.getElementById('ps5Cost').innerHTML = shorten(player.ps5cost)
if (player.ps5.gte(1)) {
document.getElementById('ps5Cost').innerHTML = "Max";
document.getElementById('ps6show').style.display = "initial"
}
document.getElementById('ps6').innerHTML = player.ps6;
document.getElementById('ps6Cost').innerHTML = shorten(player.ps6cost)
if (player.ps6.gte(1)) {
document.getElementById('ps6Cost').innerHTML = "Max";
document.getElementById('ps7show').style.display = "initial"
}
document.getElementById('ps7').innerHTML = player.ps7;
document.getElementById('ps7Cost').innerHTML = shorten(player.ps7cost)
if (player.ps7.gte(1)) {
document.getElementById('ps7Cost').innerHTML = "Max";
document.getElementById('ps8show').style.display = "initial"
}
document.getElementById('ps8').innerHTML = player.ps8;
document.getElementById('ps8Cost').innerHTML = shorten(player.ps8cost)
if (player.ps8.gte(1)) {
document.getElementById('ps8Cost').innerHTML = "Max";
document.getElementById('ps9show').style.display = "initial"
}
document.getElementById('ps9').innerHTML = player.ps9;
document.getElementById('ps9Cost').innerHTML = shorten(player.ps9cost)
if (player.ps9.gte(1)) {
document.getElementById('ps9Cost').innerHTML = "Max";
//document.getElementById('ps10show').style.display = "initial"
}
if (player.p16.gte(1) || player.chairUnlock.gte(1)) {
document.getElementById('chairShow').style.display = "initial"
player.chairUnlock = new Decimal(1)
}

}

function updateChairText(){
document.getElementById('Chairs').innerHTML = player.chairs.round()
if (player.chairs.gte(1e3)){
	document.getElementById('Chairs').innerHTML = shorten(player.chairs)
}
document.getElementById('ch1').innerHTML = player.ch1;
document.getElementById('ch1Cost').innerHTML = player.ch1cost;
if (player.ch1.gte(1)) {
document.getElementById('ch1Cost').innerHTML = "Max";
document.getElementById('ch2show').style.display = "initial"
}
document.getElementById('ch2').innerHTML = player.ch2;
document.getElementById('ch2Cost').innerHTML = player.ch2cost;
if (player.ch2.gte(1)) {
document.getElementById('ch2Cost').innerHTML = "Max";
document.getElementById('ch3show').style.display = "initial"
}
document.getElementById('ch3').innerHTML = player.ch3;
document.getElementById('ch3Cost').innerHTML = player.ch3cost;
if (player.ch3.gte(1)) {
document.getElementById('ch3Cost').innerHTML = "Max";
document.getElementById('ch4show').style.display = "initial"
}
document.getElementById('ch4').innerHTML = player.ch4;
document.getElementById('ch4Cost').innerHTML = player.ch4cost;
if (player.ch4.gte(1)) {
document.getElementById('ch4Cost').innerHTML = "Max";
document.getElementById('ch5show').style.display = "initial"
}
document.getElementById('ch5').innerHTML = player.ch5;
document.getElementById('ch5Cost').innerHTML = player.ch5cost;
if (player.ch5.gte(1)) {
document.getElementById('ch5Cost').innerHTML = "Max";
document.getElementById('ch6show').style.display = "initial"
}
document.getElementById('ch6').innerHTML = player.ch6;
document.getElementById('ch6Cost').innerHTML = player.ch6cost;
if (player.ch6.gte(1)) {
document.getElementById('ch6Cost').innerHTML = "Max";
document.getElementById('ch7show').style.display = "initial"
}
document.getElementById('ch7').innerHTML = player.ch7;
document.getElementById('ch7Cost').innerHTML = player.ch7cost;
if (player.ch7.gte(1)) {
document.getElementById('ch7Cost').innerHTML = "Max";
document.getElementById('ch8show').style.display = "initial"
}
document.getElementById('ch8').innerHTML = player.ch8;
document.getElementById('ch8Cost').innerHTML = player.ch8cost;
if (player.ch8.gte(1)) {
document.getElementById('ch8Cost').innerHTML = "Max";
document.getElementById('ch9show').style.display = "initial"
}
document.getElementById('ch9').innerHTML = player.ch9;
document.getElementById('ch9Cost').innerHTML = player.ch9cost;
if (player.ch9.gte(1)) {
document.getElementById('ch9Cost').innerHTML = "Max";
document.getElementById('ch10show').style.display = "initial"
}
document.getElementById('ch10').innerHTML = player.ch10;
document.getElementById('ch10Cost').innerHTML = player.ch10cost;
if (player.ch10.gte(1)) {
document.getElementById('ch10Cost').innerHTML = "Max";
document.getElementById('ch11show').style.display = "initial"
}
document.getElementById('ch11').innerHTML = player.ch11;
document.getElementById('ch11Cost').innerHTML = player.ch11cost;
if (player.ch11.gte(1)) {
document.getElementById('ch11Cost').innerHTML = "Max";
document.getElementById('ch12show').style.display = "initial"
}
document.getElementById('ch12').innerHTML = player.ch12;
document.getElementById('ch12Cost').innerHTML = player.ch12cost;
if (player.ch12.gte(1)) {
document.getElementById('ch12Cost').innerHTML = "Max";
document.getElementById('ch13show').style.display = "initial"
}
document.getElementById('ch13').innerHTML = player.ch13;
document.getElementById('ch13Cost').innerHTML = player.ch13cost;
if (player.ch13.gte(1)) {
document.getElementById('ch13Cost').innerHTML = "Max";
document.getElementById('ch14show').style.display = "initial"
}
document.getElementById('ch14').innerHTML = player.ch14;
document.getElementById('ch14Cost').innerHTML = player.ch14cost;
if (player.ch14.gte(1)) {
document.getElementById('ch14Cost').innerHTML = "Max";
document.getElementById('ch15show').style.display = "initial"
}
document.getElementById('ch15').innerHTML = player.ch15;
document.getElementById('ch15Cost').innerHTML = shorten(player.ch15cost);
if (player.ch15.gte(1)) {
document.getElementById('ch15Cost').innerHTML = "Max";
}


if (player.ch15.gte(1) || player.endUnlock.gte(1)) {
document.getElementById('endShow').style.display = "initial"
player.endUnlock = new Decimal(1)
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
			player.c1cost = player.c1cost.add("15")
			player.c1 = player.c1.add(1)
		}	
	}
	updateText()
}
function buycu2(){
	if (player.c2.lt(5)) {
		if (player.coins.gte(player.c2cost)) {
			player.coins = player.coins.sub(player.c2cost)
			player.c2cost = player.c2cost.add("100")
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
			player.c5cost = player.c5cost.add("20000")
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

function buych1(){
	if (player.ch1.lt(1)) {
		if (player.chairs.gte(player.ch1cost)) {
			player.chairs = player.chairs.sub(player.ch1cost)
			player.ch1 = player.ch1.add(1)
		}	
	}
	updateChairText()
}
function buych2(){
	if (player.ch2.lt(1)) {
		if (player.chairs.gte(player.ch2cost)) {
			player.chairs = player.chairs.sub(player.ch2cost)
			player.ch2 = player.ch2.add(1)
		}	
	}
	updateChairText()
}
function buych3(){
	if (player.ch3.lt(1)) {
		if (player.chairs.gte(player.ch3cost)) {
			player.chairs = player.chairs.sub(player.ch3cost)
			player.ch3 = player.ch3.add(1)
		}	
	}
	updateChairText()
}
function buych4(){
	if (player.ch4.lt(1)) {
		if (player.chairs.gte(player.ch4cost)) {
			player.chairs = player.chairs.sub(player.ch4cost)
			player.ch4 = player.ch4.add(1)
		}	
	}
	updateChairText()
}
function buych5(){
	if (player.ch5.lt(1)) {
		if (player.chairs.gte(player.ch5cost)) {
			player.chairs = player.chairs.sub(player.ch5cost)
			player.ch5 = player.ch5.add(1)
		}	
	}
	updateChairText()
}
function buych6(){
	if (player.ch6.lt(1)) {
		if (player.chairs.gte(player.ch6cost)) {
			player.chairs = player.chairs.sub(player.ch6cost)
			player.ch6 = player.ch6.add(1)
		}	
	}
	updateChairText()
}
function buych7(){
	if (player.ch7.lt(1)) {
		if (player.chairs.gte(player.ch7cost)) {
			player.chairs = player.chairs.sub(player.ch7cost)
			player.ch7 = player.ch7.add(1)
		}	
	}
	updateChairText()
}
function buych8(){
	if (player.ch8.lt(1)) {
		if (player.chairs.gte(player.ch8cost)) {
			player.chairs = player.chairs.sub(player.ch8cost)
			player.ch8 = player.ch8.add(1)
		}	
	}
	updateChairText()
}
function buych9(){
	if (player.ch9.lt(1)) {
		if (player.chairs.gte(player.ch9cost)) {
			player.chairs = player.chairs.sub(player.ch9cost)
			player.ch9 = player.ch9.add(1)
		}	
	}
	updateChairText()
}
function buych10(){
	if (player.ch10.lt(1)) {
		if (player.chairs.gte(player.ch10cost)) {
			player.chairs = player.chairs.sub(player.ch10cost)
			player.ch10 = player.ch10.add(1)
		}	
	}
	updateChairText()
}
function buych11(){
	if (player.ch11.lt(1)) {
		if (player.chairs.gte(player.ch11cost)) {
			player.chairs = player.chairs.sub(player.ch11cost)
			player.ch11 = player.ch11.add(1)
		}	
	}
	updateChairText()
}
function buych12(){
	if (player.ch12.lt(1)) {
		if (player.chairs.gte(player.ch12cost)) {
			player.chairs = player.chairs.sub(player.ch12cost)
			player.ch12 = player.ch12.add(1)
		}	
	}
	updateChairText()
}
function buych13(){
	if (player.ch13.lt(1)) {
		if (player.chairs.gte(player.ch13cost)) {
			player.chairs = player.chairs.sub(player.ch13cost)
			player.ch13 = player.ch13.add(1)
		}	
	}
	updateChairText()
}
function buych14(){
	if (player.ch14.lt(1)) {
		if (player.chairs.gte(player.ch14cost)) {
			player.chairs = player.chairs.sub(player.ch14cost)
			player.ch14 = player.ch14.add(1)
		}	
	}
	updateChairText()
}
function buych15(){
	if (player.ch15.lt(1)) {
		if (player.chairs.gte(player.ch15cost)) {
			player.chairs = player.chairs.sub(player.ch15cost)
			player.ch15 = player.ch15.add(1)
		}	
	}
	updateChairText()
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

function resetPencil(){
	player.pencils = new Decimal(0)
	player.sharpenings = new Decimal(0)
	
	if (player.ch3.lt(1)){
	player.p1= new Decimal(0)
	player.p1cost= new Decimal(1)
	player.p2= new Decimal(0)
	player.p2cost= new Decimal(2)
	player.p3= new Decimal(0)
	player.p3cost= new Decimal(3)
	player.p4= new Decimal(0)
	player.p4cost= new Decimal(6)
	player.p5= new Decimal(0)
	player.p5cost= new Decimal(8)
	player.p6= new Decimal(0)
	player.p6cost= new Decimal(10)
	player.p7= new Decimal(0)
	player.p7cost= new Decimal(25)}
	if (player.ch14.lt(1)){
	player.p8= new Decimal(0)
	player.p8cost= new Decimal(50)
	player.p9= new Decimal(0)
	player.p9cost= new Decimal(50)
	player.p10= new Decimal(0)
	player.p10cost= new Decimal(160)
	player.p11= new Decimal(0)
	player.p11cost= new Decimal(400)
	player.p12= new Decimal(0)
	player.p12cost= new Decimal(1.5e3)
	player.p13= new Decimal(0)
	player.p13cost= new Decimal(5e3)
	player.p14= new Decimal(0)
	player.p14cost= new Decimal(2e4)
	player.p15= new Decimal(0)
	player.p15cost= new Decimal(1.5e6)
	player.p16= new Decimal(0)
	player.p16cost= new Decimal(5e6)}
	
	if (player.ch3.lt(1)){
	player.ps1= new Decimal(0)
	player.ps1cost= new Decimal(250)
	player.ps2= new Decimal(0)
	player.ps2cost= new Decimal(1e3)
	player.ps3= new Decimal(0)
	player.ps3cost= new Decimal(5e3)
	player.ps4= new Decimal(0)
	player.ps4cost= new Decimal(25e3)
	player.ps5= new Decimal(0)
	player.ps5cost= new Decimal(100e3)
	player.ps6= new Decimal(0)
	player.ps6cost= new Decimal(2.5e6)}
	if (player.ch8.lt(1)){
	player.ps7= new Decimal(0)
	player.ps7cost= new Decimal(1e8)
	player.ps8= new Decimal(0)
	player.ps8cost= new Decimal(1.5e8)
	player.ps9= new Decimal(0)
	player.ps9cost= new Decimal(1e9)}
}

function resetChair(){
	player.chairs = new Decimal(0)
	player.ch1= new Decimal(0)
	player.ch1cost= new Decimal(1)
	player.ch2= new Decimal(0)
	player.ch2cost= new Decimal(1)
	player.ch3= new Decimal(0)
	player.ch3cost= new Decimal(2)
	player.ch4= new Decimal(0)
	player.ch4cost= new Decimal(2)
	player.ch5= new Decimal(0)
	player.ch5cost= new Decimal(4)
	player.ch6= new Decimal(0)
	player.ch6cost= new Decimal(6)
	player.ch7= new Decimal(0)
	player.ch7cost= new Decimal(12)
	player.ch8= new Decimal(0)
	player.ch8cost= new Decimal(16)
	player.ch9= new Decimal(0)
	player.ch9cost= new Decimal(16)
	player.ch10= new Decimal(0)
	player.ch10cost= new Decimal(65)
	player.ch11= new Decimal(0)
	player.ch11cost= new Decimal(75)
	player.ch12= new Decimal(0)
	player.ch12cost= new Decimal(110)
	player.ch13= new Decimal(0)
	player.ch13cost= new Decimal(150)
	player.ch14= new Decimal(0)
	player.ch14cost= new Decimal(450)
	player.ch15= new Decimal(0)
	player.ch15cost= new Decimal(1e4)
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

function chair(){
	if (player.pencils.gte(1e6)){
		var gain = chairBoost(player.pencils)
		resetPencil()
		resetPrestige()
		resetCoin()
		player.chairs = player.chairs.add(gain)
	}
	updateChairText()
	updatePencilText()
	updatePrestigeText()
	updateText()
}

function end(){
	if (player.chairs.gte(1e4)){
		var gain = new Decimal(1)
		resetChair()
		resetPencil()
		resetPrestige()
		resetCoin()
		player.ends = player.ends.add(1)
	}
	updateChairText()
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
	updateChairText()
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
	if (player.ch10.gte(1)) {
		player.pencils = player.pencils.add(pencilBoost(player.prestige).div(20))
		updatePencilText()
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

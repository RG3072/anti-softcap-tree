let modInfo = {
	name: "Anti-softcap tree",
	id: "mymod",
	author: "2^32",
	pointsName: "points",
	modFiles: ["layers/A.js", "layers/B.js","layers/C.js","layers/D.js","layers/E.js","layers/F.js","layers/G.js","layers/H.js","layers/I.js","layers/J.js","layers/ach.js","tree.js",],

	discordName: "",
	discordLink: "",
	initialStartPoints: n(10), // Used for hard resets and new players
	offlineLimit: 8760,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.7.4",
	name: "replicanti",//tower-exponent,more about break infinity
}

let changelog = `<h2>Changelog:</h2><br>
    <h4>v0.7.4 (250311)</h4>
		- add anti-replicanti. E:F1e105. <br>
    <h4>v0.7.3 (250225)</h4>
		- add a side layer for automation and pause. E:F1e42. <br>
    <h4>v0.7.2 (250210)</h4>
		- add slog speeder. E:F4e10. <br>
    <h4>v0.7.1 (250129)</h4>
		- add layer J,break infinity and challenge 'curse' E:1F32768. <br>
    <h3>--HAPPY NEW 2025---<h3>
    <h4>v0.7.0.1 (241209)</h4>
		- fix dH part's bug and achievements bug. <br>
    <h4>v0.7 (241207)</h4>
		- add row 4 reset and tons of qol. E:1F100 too <br>
    <h4>v0.6.4 (241119)</h4>
		- end of row 3. E:1F100 <br>
    <h4>v0.6.3 (241110)</h4>
		- add more dH and gsr upg. E:5.968F7 <br>
    <h4>v0.6.2.1 (241101)</h4>
		- fix lots of bugs,edit some description. <br>
    <h4>v0.6.2 (241031)</h4>
		- add GsR,dH,dH points.Edit some description. E:3.78F7 <br>
    <h4>v0.6.1 (241012)</h4>
		- add hyper and remove sth like 'softcap'.Offline lim is 100d. E:3.194F7 <br>
    <h4>v0.6.0.1 (240929)</h4>
		- fix bugs after H and the automation. <br>
    <h4>v0.6 (240928)</h4>
		- add H and harsh,some pre-F fixes. E:2.828F7<br>
    <h4>v0.5.10 (240919)</h4>
		- add GG and upg tree.  E:1.676F7<br>
    <h4>v0.5.9< (240905)/h4>
		- add Gsi/e and G31-55. <br>
    <h4>v0.5.8 (240815)</h4>
		- add Gs,reach F(tetration). <br>
	<h4>v0.5.7 (240809)</h4>
		- add F2(ID). <br>
    <h4>v0.5.6.1 (240807)</h4>
		- rebalance <br>
    <h4>v0.5.6 (240803)</h4>
		- add more G chal and G power, massive fixes against inflation. <br>
    <h4>v0.5.5 (240725)</h4>
		- add G chal and G power. <br>
    <h4>v0.5.4 (240721)</h4>
		- add layer G. <br>
    <h4>v0.5.3.1 (240719)</h4>
		- rebalance. <br>
    <h4>v0.5.3 (240718)</h4>
		- Add tickboost,like AG,etc. <br>
    <h4>v0.5.2 (240715)</h4>
		- Add F dim. <br>
    <h4>v0.5.1 (240713)</h4>
		- Add F and some powerful upg.<br> And some nerfs for balance. <br>
    <h4>v0.4.2 (240705)</h4>
		- fix buyable code,a bit rebalance. E:1e140300<br>
    <h4>v0.4.1 (240701)</h4>
		- Added achievements,Ek,Ec5-8,E31-50,etc.<br> And a TOUGH rebalance. <br>
    <h4>v0.3.7 (240624)</h4>
		- Added Em / rebalance <br>
	<h4>v0.3.6 (240623)</h4>
		- Added new C/D upg,E11-20<br>
    <h4>v0.3.5.1 (240622)</h4>
		- rebalance / Ec3-4,E21-28<br>
    <h4>v0.3.4.1 (240620)</h4>
		- E6-20 rebalance<br>
	<h4>v0.3.4 (240620)</h4>
		- Added E chal,E11-20  E:1e11900<br>
	<h4>v0.3.3 (240619)</h4>
		- Added E6-10<br>
	<h4>v0.3.2 (240618) (first release)</h4>
		- Added layer E. E:1e7100<br> 
	project started at Mar,2024 `

let winText = `Congratulations! You have reached the end and beaten this game, but for now...<br> The game is approaching the F1e308 limit,help plz`//

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return n(0)
        
	let a = n(1)
	if(upg("A",11)) a=a.mul(upgradeEffect("A",11))
	if(upg("A",15)) a=a.mul(upgradeEffect("A",15))
	if(upg("A",24)) a=a.mul(upgradeEffect("A",24))
	if(upg("A",35)) a=a.mul(upgradeEffect("A",35))
	a = a.mul(upg("B",11)?upgradeEffect("B",11):1)
	a = a.mul(upg("B",21)?upgradeEffect("B",21):1)
	a = a.mul(upg("B",44)?upgradeEffect("B",44):1)

	a = a.mul(upg("C",11)?upgradeEffect("C",11):1)
	a = a.mul(upg("C",13)?upgradeEffect("C",13):1)
	a = a.mul(upg("D",11)?upgradeEffect("D",11):1)
	a = a.mul(upg("D",15)?upgradeEffect("D",15):1)
	a = a.mul(upg("D",21)?upgradeEffect("D",21):1)
	a = a.mul(upg("D",24)?upgradeEffect("D",24):1)
	a = a.mul(upg("D",32)?upgradeEffect("D",32):1)
	a = a.mul(upg("E",11)?upgradeEffect("E",11):1)
	a = a.mul(upg("E",12)?upgradeEffect("E",12):1)
	a = a.mul(upg("E",22)?upgradeEffect("E",22):1)
	a = a.mul(upg("C",33)?upgradeEffect("C",33):1)
	a = a.mul(upg("D",43)?upgradeEffect("D",43):1)
	a = a.mul(upg("E",85)?upgradeEffect("E",85):1)
	a = a.mul(upg("E",104)?upgradeEffect("E",104):1)
	a = a.mul(upg("F",11)?upgradeEffect("F",11):1)

	if (inChallenge("A", 11))  a = a.pow(0.75)
	if (inChallenge("A", 21))  a = a.pow(0.55)
	if (inChallenge("A", 31))  a = a.pow(0.5)
	if (inChallenge("C", 11))  a = a.pow(0.45)
	if (inChallenge("E", 22))  a = a.pow(player.points.add(10).log(10).pow(-0.06).max('1e-100'))
	if (inChallenge("E", 32))  a = a.pow(player.E.Em.add(10).log(10).pow(-0.2).max('1e-100'))
	if (inChallenge("E", 42))  a = a.pow(player.points.add(10).log(10).pow(-0.12).max('1e-100'))
	if (inChallenge("F", 12))  a = n(10).pow(a.add(10).log(10).pow(0.8).max('1e-100'))

	if (hasChallenge("A", 21))  a = a.mul(50)
	if (hasChallenge("A", 22))  a = a.mul(100)
	if (hasChallenge("C", 11))  a = a.mul(2000)
	if (hasChallenge("C", 12))  a = a.mul(8000)
	if (hasChallenge("A", 41))  a = a.mul(challengeEffect('A',41))

	if (hasChallenge("A", 32))  a = a.pow(1.01)
	if (hasChallenge("C", 11))  a = a.pow(1.01)
	if (upg("F", 11))  a = a.pow(1.0016)
	if (upg("F", 14))  a = a.pow(1.0012)
	if (upg("F", 52))  a = a.pow(1.002)
	if (upg("F", 65))  a = a.pow(1.006)
	if (mil("I",0))  a = a.pow(1.01)
	if (mil("I",1))  a = a.pow(1.02)
	if (mil('I',3))  a = a.pow(buyableEffect('I',12))
	if(n(challengeCompletions('I',22)).gte(1))  a = a.pow(1.25)

	if (hasChallenge("E", 21))  a = a.mul(challengeEffect('E',21))
	if (hasChallenge("E", 22))  a = a.mul(challengeEffect('E',22))

	if (mil('G',14)&&a.gte('10^^5'))  a=n(10).pow(n(10).pow(n(10).pow(n(10).pow(a.log(10).log(10).log(10).log(10).add(tmp.G.gsre)))))
		
	let tet=n(0)
	if(gcs('I',124))  tet=tet.add(0.3)
	if(gcs('I',125))  tet=tet.add(0.5)
	if(gcs('I',135))  tet=tet.add(1)
	if(mil('J',8)) tet=tet.mul(2)
	if(mil('J',11)) tet=tet.mul(tmp.J.ssef)
	if(mil('I',23)) tet=tet.mul(tmp.I.hief[4])
	if(gcs('I',311)) {if(a.gte('10^^25')&&mil('I',21)) a=n(10).tetrate(a.max(10).slog().add(tet))
		else if(a.gte('10^^10')&&gba('J',101).gte(23)) a=n(10).tetrate(a.max(10).slog().add(tet))
		else a=n(10).tetrate(a.max(10).slog().sub(tmp.I.resv[0]).max(0))}
	else{if(a.gte('10^^10'))  a=n(10).tetrate(a.max(10).slog().add(tet))}
//
	a=a.min(tmp.H.php)
	return a
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function() {
		let s='current endgame:ee100 Anti-replicanti.<br> Too easy? Go to play NG-10(aast) by QqQe308!'
		if(upg('G',155)||mil('I',0)) s=s+"<br><h4 style='color: #C52C14'>points gain is hardcapped at "+format(tmp.H.php)+"."
		return s},//<br> points is hardcapped at 1F100.
]
// Determines when the game "ends"
function isEndgame() {
	return player.J.maxar.gte('ee100')//tmp.H.phpb.gte('1e42')
}

//<br> bilibili: @bili_50929957100

// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(1e10) // Default is 100 hour which is just arbitrarily large
}//1e8

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
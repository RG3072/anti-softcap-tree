let modInfo = {
	name: "Anti-softcap tree",
	id: "mymod",
	author: "2^32",
	pointsName: "points",
	modFiles: ["layers/A.js", "layers/B.js","layers/C.js","layers/D.js","layers/E.js","layers/F.js","layers/G.js","layers/H.js","layers/ach.js","tree.js",],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 2400,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.6.1",
	name: "hyper increasing",
}

let changelog = `<h2>Changelog:</h2><br>
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
		- Added E chal,E11-20<br>
	<h4>v0.3.3 (240619)</h4>
		- Added E6-10<br>
	<h4>v0.3.2 (240618) (release)</h4>
		- Added layer E. E:1e7100<br> 
	project started at Mar,2024 `

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

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
		return new Decimal(0)
        
	let gain = new Decimal(1)
	gain = gain.mul(hasUpgrade("A",11)?upgradeEffect("A",11):1)
	gain = gain.mul(hasUpgrade("A",15)?upgradeEffect("A",15):1)
	gain = gain.mul(hasUpgrade("A",24)?upgradeEffect("A",24):1)
	gain = gain.mul(hasUpgrade("A",35)?upgradeEffect("A",35):1)
	gain = gain.mul(hasUpgrade("B",11)?upgradeEffect("B",11):1)
	gain = gain.mul(hasUpgrade("B",21)?upgradeEffect("B",21):1)
	gain = gain.mul(hasUpgrade("B",44)?upgradeEffect("B",44):1)

	gain = gain.mul(hasUpgrade("C",11)?upgradeEffect("C",11):1)
	gain = gain.mul(hasUpgrade("C",13)?upgradeEffect("C",13):1)
	gain = gain.mul(hasUpgrade("D",11)?upgradeEffect("D",11):1)
	gain = gain.mul(hasUpgrade("D",15)?upgradeEffect("D",15):1)
	gain = gain.mul(hasUpgrade("D",21)?upgradeEffect("D",21):1)
	gain = gain.mul(hasUpgrade("D",24)?upgradeEffect("D",24):1)
	gain = gain.mul(hasUpgrade("D",32)?upgradeEffect("D",32):1)
	gain = gain.mul(hasUpgrade("E",11)?upgradeEffect("E",11):1)
	gain = gain.mul(hasUpgrade("E",12)?upgradeEffect("E",12):1)
	gain = gain.mul(hasUpgrade("E",22)?upgradeEffect("E",22):1)
	gain = gain.mul(hasUpgrade("C",33)?upgradeEffect("C",33):1)
	gain = gain.mul(hasUpgrade("D",43)?upgradeEffect("D",43):1)
	gain = gain.mul(hasUpgrade("E",85)?upgradeEffect("E",85):1)
	gain = gain.mul(hasUpgrade("E",104)?upgradeEffect("E",104):1)
	gain = gain.mul(hasUpgrade("F",11)?upgradeEffect("F",11):1)

	if (inChallenge("A", 11))  gain = gain.pow(0.75)
	if (inChallenge("A", 21))  gain = gain.pow(0.55)
	if (inChallenge("A", 31))  gain = gain.pow(0.5)
	if (inChallenge("C", 11))  gain = gain.pow(0.45)
	if (inChallenge("E", 22))  gain = gain.pow(player.points.add(10).log(10).pow(-0.06))
	if (inChallenge("E", 32))  gain = gain.pow(player.E.Em.add(10).log(10).pow(-0.2))
	if (inChallenge("E", 42))  gain = gain.pow(player.points.add(10).log(10).pow(-0.12))
	if (inChallenge("F", 12))  gain = Decimal.pow(10,gain.add(10).log(10).pow(0.8))

	if (hasChallenge("A", 21))  gain = gain.mul(50)
	if (hasChallenge("A", 22))  gain = gain.mul(100)
	if (hasChallenge("C", 11))  gain = gain.mul(2000)
	if (hasChallenge("C", 12))  gain = gain.mul(8000)
	if (hasChallenge("A", 41))  gain = gain.mul(challengeEffect('A',41))

	if (hasChallenge("A", 32))  gain = gain.pow(1.01)
	if (hasChallenge("C", 11))  gain = gain.pow(1.01)
	if (hasUpgrade("F", 11))  gain = gain.pow(1.0016)
	if (hasUpgrade("F", 14))  gain = gain.pow(1.0012)
	if (hasUpgrade("F", 52))  gain = gain.pow(1.002)
	if (hasUpgrade("F", 65))  gain = gain.pow(1.006)

	if (hasChallenge("E", 21))  gain = gain.mul(challengeEffect('E',21))
	if (hasChallenge("E", 22))  gain = gain.mul(challengeEffect('E',22))

	if (hasMilestone("G", 14))  {if (player.points.gte('10^^5')) gain = n(10).pow(n(10).pow(n(10).pow(n(10).pow(gain.log(10).log(10).log(10).log(10).add(tmp.G.gsre)))))}

	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function() {return "current endgame:3.194F7 points.<br> Too easy? go to play qqqe308's NG-10('aast')!"},
]
// Determines when the game "ends"
function isEndgame() {
	return tmp.G.gsef.gte('ee1212')
}

//<br> bilibili: @bili_50929957100

// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(360000) // Default is 100 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
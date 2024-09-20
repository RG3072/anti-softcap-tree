addLayer("A", {
    name: "A", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    passiveGeneration(){
        let pg=0
        if (hasUpgrade("B",23)) pg=Decimal.add(pg,1)
        if (hasMilestone("C", 1))  pg=Decimal.mul(pg,100)
        if (hasMilestone("C", 2))  pg=Decimal.mul(pg,100)
        if (hasMilestone("D", 1))  pg=Decimal.mul(pg,100)
        if (hasMilestone("D", 2))  pg=Decimal.mul(pg,1e4)
        return pg},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a funct}ion that takes requirement increases into account
    resource: "A", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainExp() {// Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "A: Reset for A points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        mult = mult.mul(hasUpgrade(this.layer,22)?3:1)
        mult = mult.mul(hasChallenge("A", 22)?20:1)
        mult = mult.mul(hasChallenge("A", 31)?20:1)
        mult = mult.pow(hasChallenge("C", 12)?1.025:1)
        mult = mult.mul(buyableEffect("B",11))
        mult = mult.mul(buyableEffect("E",11))
        mult = mult.mul(hasMilestone("F", 0)?10:1)
        return mult
    },
    softcap(){return new Decimal(Infinity)},
	softcapPower(){return new Decimal(1)},
    doReset(layer){
        if (layer=="F") {        
            let keep = [];
            if (hasMilestone("F", 0)) keep.push("challenges")
            if (hasMilestone("F", 0)) keep.push("upgrades")
            layerDataReset(this.layer, keep)}
    },
    microtabs: {
        stuff: {       
            "Upgrades": {
                unlocked() {return true},
                content: [ "upgrades"]}, 
            "Challenges": {
                unlocked() {return (hasUpgrade("B", 25))},
                content: ["challenges"]    },
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    upgrades: {

        11: {
            title:'A1',
            description: function() {return '2x points <br> layer A total: <br> '+ format(this.effect()) +'x'},
            effect(){
                let ef=1
                if(hasUpgrade("A",11)) ef=ef*2
                if(hasUpgrade("A",12)) ef=ef*2
                if(hasUpgrade("A",13)) ef=ef*2
                if(hasUpgrade("A",14)) ef=ef*2
                if(hasUpgrade("A",21)) ef=ef*3
                if(hasUpgrade("A",23)) ef=ef*3
                if(hasUpgrade("A",25)) ef=ef*5
                if(hasUpgrade("A",41)) ef=ef*300
                if(hasUpgrade("A",43)) ef=ef*500
                if(hasUpgrade("A",45)) ef=ef*1000
                if(hasUpgrade("A",51)) ef=ef*4000
                if(hasUpgrade("A",54)) ef=ef*3e4

                ef=Decimal.pow(ef,buyableEffect("B",22))
                return ef
            },
            cost:new Decimal(1),
        },
        12: {
            title:'A2',
            description: "2x points.",
            cost: new Decimal(1),
            unlocked() { return (hasUpgrade(this.layer, 11))},
        },
        13: {
            title:'A3',
            description: "2x points.",
            cost: new Decimal(2),
            unlocked() { return (hasUpgrade(this.layer, 12))},
        },
        14: {
            title:'A4',
            description: "2x points.",
            cost: new Decimal(4),
            unlocked() { return (hasUpgrade(this.layer, 13))},
        },
        15: {
            title:'A5',
            description: "point/s^1.1.",
            cost: new Decimal(12),
            unlocked() { return (hasUpgrade(this.layer, 14))},
            effect()  {let ef=n(0.1)
                if (hasUpgrade('B', 32))  ef = Decimal.add(ef,0.05)
                if (hasUpgrade('B', 35))  ef = Decimal.add(ef,0.05)                
                if (inChallenge("A", 12))  ef = Decimal.mul(ef,0.25)
                if (inChallenge("A", 22))  ef = n(0)
                if (inChallenge("A", 31))  ef = n(0)
                return player.points.pow(ef).add(1);          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        21: {
            title:'A6',
            description: "3x points.",
            cost:new Decimal(20),
            unlocked() { return (hasUpgrade(this.layer, 15))},
        },
        22: {
            title:'A7',
            description: "3x A.",
            cost: new Decimal(30),
            unlocked() { return (hasUpgrade(this.layer, 21))},
        },
        23: {
            title:'A8',
            description: "3x points.",
            cost:new Decimal(100),
            unlocked() { return (hasUpgrade(this.layer, 22))},
        },
        24: {
            title:'A9',
            description: "lg(points) mults point/s.",
            cost: new Decimal(180),
            unlocked() { return (hasUpgrade(this.layer, 23))},
            effect()  { 
                let ef = player.points.add(10).log(10)
                if (hasUpgrade('A',31)) ef = ef.mul(5)
                if (hasUpgrade('A',32)) ef = ef.mul(5)
                if (hasUpgrade('A',33)) ef = ef.pow(1.3)
                if (hasUpgrade('A',34)) ef = ef.pow(1.03)
                if (hasUpgrade('B',33)) ef = ef.pow(1.5)
                if (hasUpgrade('B',34)) ef = ef.pow(1.5)
                if (hasUpgrade('A',44)) ef = ef.pow(1.25)
                if (hasUpgrade('A',52)) ef = ef.pow(1.15)

                if (inChallenge("A",12)) ef = ef.pow(0.25)
                if (inChallenge("A",22)) ef = n(1)
                if (inChallenge("A",31)) ef = n(1)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        25: {
            title:'A10',
            description: "5x points.",
            cost:new Decimal(350),
            unlocked() { return (hasUpgrade(this.layer, 24))},
        },
        31: {
            title:'A11',
            description: "A9 x5.",
            cost:new Decimal(800),
            unlocked() { return (hasUpgrade(this.layer, 25))},
        },
        32: {
            title:'A12',
            description: "A9 x5.",
            cost:new Decimal(1600),
            unlocked() { return (hasUpgrade(this.layer, 31))},
        },
        33: {
            title:'A13',
            description: "A9^1.3.",
            cost:new Decimal(3600),
            unlocked() { return (hasUpgrade(this.layer, 32))},
        },
        34: {
            title:'A14',
            description: "A9^1.03.",
            cost:new Decimal(1e4),
            unlocked() { return (hasUpgrade(this.layer, 33))},
        },
        35: {
            title:'A15',
            description: "A^0.2 boost points. unlock B.",
            cost: new Decimal(1.35e4),
            unlocked() { return (hasUpgrade(this.layer, 34))},
            effect()  { 
                let efa15 = 0.2
                if (hasUpgrade('A', 42))  efa15 = efa15*1.5               
                return player[this.layer].points.add(1).pow(efa15);          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        41: {
            title:'A16',
            description: "300x points.",
            cost:new Decimal('3e30'),
            unlocked() { return (hasChallenge(this.layer, 31))},
        },
        42: {
            title:'A17',
            description: "A15 ^1.25.",
            cost:new Decimal('1e33'),
            unlocked() { return (hasUpgrade(this.layer, 41))},
        },
        43: {
            title:'A18',
            description: "500x points.",
            cost:new Decimal('2e36'),
            unlocked() { return (hasChallenge(this.layer, 31))},
        },
        44: {
            title:'A19',
            description: "A9 ^1.25.",
            cost:new Decimal('2e38'),
            unlocked() { return (hasUpgrade(this.layer, 43))},
        },
        45: {
            title:'A20',
            description: "1000x points,C ^1.1.",
            cost:new Decimal('1e41'),
            unlocked() { return (hasUpgrade(this.layer, 44))},
        },
        51: {
            title:'A21',
            description: "4000x points.",
            cost:new Decimal('1e73'),
            unlocked() { return (hasChallenge('C', 11))},
        },
        52: {
            title:'A22',
            description: "D x2,A9^1.15.",
            cost:new Decimal('1e76'),
            unlocked() { return (hasUpgrade(this.layer, 51))},
        },
        53: {
            title:'A23',
            description: "B26 x10.",
            cost:new Decimal('5e264'),
            unlocked() { return (hasUpgrade('B', 62))},
        },
        54: {
            title:'A24',
            description: "B26 x10,x3e4 pts.",
            cost:new Decimal('2e277'),
            unlocked() { return (hasUpgrade(this.layer, 53))},
        },
        55: {
            title:'A25',
            description: "Bb3-4 are stronger.",
            cost:new Decimal('1e322'),
            unlocked() { return (hasUpgrade(this.layer, 54))},
        },
        61: {
            title:'A26',
            description: "mult to C based on Bb1 eff.",
            cost:new Decimal('1e1896'),
            effect()  { 
                let ef = buyableEffect('B',11).pow(0.02).times(buyableEffect('B',11).add(10).log(10).pow(1.5))
                return ef},
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasMilestone('B', 6))},
        },
        62: {
            title:'A27',
            description: "mult to B26 based on Bb1 eff.",
            cost:new Decimal('1e2020'),
            effect()  { 
                let efa27 = buyableEffect('B',11).add(10).log(10).pow(1.2)
                return efa27;},
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 61))},
        },
        63: {
            title:'A28',
            description: "Bb5 x1.02.",
            cost:new Decimal('1e2391'),
            unlocked() { return (hasUpgrade(this.layer, 62))},
        },
        64: {
            title:'A29',
            description: "mult to D based on Bb1 eff.",
            cost:new Decimal('1e2488'),
            effect()  { 
                let efa29 = buyableEffect('B',11).pow(0.006).times(buyableEffect('B',11).add(10).log(10).pow(1.25))
                return efa29;},
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 63))},
        },
        65: {
            title:'A30',
            description: "nerf Bb1-5's price scaling .",
            cost:new Decimal('1e2541'),
            unlocked() { return (hasUpgrade(this.layer, 64))},
        },
    },
    challenges: {
        11: {
            name: "Ac1",
            completionLimit: 1,
            challengeDescription() {return "points ^0.75"},
            unlocked() { return (hasUpgrade("B", 25))},
            goalDescription: '5e12 points',
            canComplete() {return player.points.gte('5e12')},//1e12
            rewardDescription: "B ^1.1.",
        },
        12: {
            name: "Ac2",
            completionLimit: 1,
            challengeDescription() {return "A5/A9 ^0.25"},
            unlocked() {  return (hasChallenge(this.layer, 11))},
            goalDescription: '2e13 points',
            canComplete() {return player.points.gte('2e13')},//4e12
            rewardDescription: "B x10.",
        },
        21: {
            name: "Ac3",
            completionLimit: 1,
            challengeDescription() {return "points ^0.55"},
            unlocked() { return (hasUpgrade("B", 32))},
            goalDescription: '1e11 points',
            canComplete() {return player.points.gte('1e11')},//3e10
            rewardDescription: "50x points.",
        },
        22: {
            name: "Ac4",
            completionLimit: 1,
            challengeDescription() {return "A5/A9 are disabled"},
            unlocked() { return (hasUpgrade("B", 35))},
            goalDescription: '5e17 points',
            canComplete() {return player.points.gte('5e17')},//5e16
            rewardDescription: "100x points,20x A,10x B.<br>unlock C.",
        },
        31: {
            name: "Ac5",
            completionLimit: 1,
            challengeDescription() {return "points ^0.5 and A5/A9 are disabled"},
            unlocked() { return (hasUpgrade("C", 15))},
            goalDescription: '1e17 points',
            canComplete() {return player.points.gte('1e17')},
            rewardDescription: "200x points,20x A,2x C.",
        },
        32: {
            name: "Ac6",
            completionLimit: 1,
            challengeDescription() {return "Bb1-2 ^0.5"},
            unlocked() { return (hasMilestone("D", 3))},
            goalDescription: '1e302 points',
            canComplete() {return player.points.gte('1e302')},
            rewardDescription: "^1.01 points.",
        },
        41: {
            name: "Ac7",
            completionLimit: 5,
            challengeDescription: function() {
                return "Bb3-5 are disabled <br> Completion: " +challengeCompletions("A", 41) + "/5"},
            unlocked() { return (hasMilestone("B", 4))},
            goal(){
                if (challengeCompletions("A", 41) == 0) return Decimal.pow(10,777);
                if (challengeCompletions("A", 41) == 1) return Decimal.pow(10,1325);
                if (challengeCompletions("A", 41) == 2) return Decimal.pow(10,1540);
                if (challengeCompletions("A", 41) == 3) return Decimal.pow(10,2024);
                if (challengeCompletions("A", 41) >= 4) return Decimal.pow(10,2600);
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete() {return player.points.gte(this.goal())},
            rewardDescription: "boost to pts base on Bb1-2.",
            rewardEffect() {
                let bas = Decimal.pow(challengeCompletions("A", 41),1.25)
                let ef1 = Decimal.pow(buyableEffect('B',11),0.12+bas/40)
                let ef2 = Decimal.pow(buyableEffect('B',12),0.12+bas/40)
                let ef = Decimal.mul(ef1,ef2)
                if (hasUpgrade('E',52)) ef=Decimal.pow(ef,upgradeEffect('E',52))
                if (challengeCompletions("A", 41) >= 1)  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
    }
})

addLayer("C", {
    name: "C", 
    symbol: "C", 
    position: 0, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    passiveGeneration(){    let c_pg=1
        if (hasMilestone("D", 2))  c_pg=c_pg*100
        if (hasMilestone("B", 5))  c_pg=c_pg*100
        return (hasMilestone("D", 1))?c_pg:0},
    color: "#A73E16",
    requires: new Decimal(2e36), 
    resource: "C", 
    baseResource: "points", 
    baseAmount() {return player.points}, 
    type: "normal", 
    exponent: 0.15, 
    gainExp() {
        return new Decimal(1)
    },
    row: 1, 
    hotkeys: [
        {key: "c", description: "C: Reset for C points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){  if (player.C.unlocked) return true
    else return (hasChallenge("A", 22))},
    gainMult() { 
        mult = new Decimal(1)
        mult = mult.pow(hasUpgrade('A',45)?1.1:1)
        mult = mult.mul(hasUpgrade('C',21)?10:1)
        mult = mult.mul(hasUpgrade('C',25)?5:1)
        mult = mult.mul(hasUpgrade('D',31)?5:1)
        mult = mult.mul(hasUpgrade('A',61)?upgradeEffect('A',61):1)
        mult = mult.mul(buyableEffect("E",13))

        return mult
    },
    branches: ['A','B'],
    milestones: {
        0: {requirementDescription: "3 total C",
            done() {return player[this.layer].total.gte(3)}, 
            effectDescription: "keep row 1.",
        },
        1: {requirementDescription: "30 total C",
            done() {return player[this.layer].total.gte(30)}, 
            effectDescription: "100x A passive.",
        },
        2: {requirementDescription: "5e7 total C",
            done() {return player[this.layer].total.gte('5e7')}, 
            effectDescription: "100x A passive,1x B passive.",
        },
        3: {requirementDescription: "5e11 total C",
            done() {return player[this.layer].total.gte('5e11')}, 
            effectDescription: "1000x points,100x B passive,unlock D.",
        },
    },
    microtabs: {
        stuff: {       
            "Upgrades": {
                unlocked() {return true},
                content: [ "upgrades"]}, 
            "Milestones": {
                unlocked() {return true},
                content: ["milestones"]    },
            "Challenges": {
                unlocked() {return (hasUpgrade("D",15))},
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
            title:'C1',
            description: "20x points.",
            effect()  { 
                let efc1 = 20
                if (hasUpgrade('C',12)) efc1 = efc1*20
                if (hasUpgrade('C',15)) efc1 = efc1*200
                if (hasUpgrade('C',25)) efc1 = efc1*1500
                if (hasMilestone('C',3)) efc1 = efc1*1000
                if (inChallenge('C',11))  efc1 = 1

                return efc1;          
            },
            cost:new Decimal(1),
        },
        12: {
            title:'C2',
            description: "20x points.",
            cost:new Decimal(1),
            unlocked() { return (hasUpgrade(this.layer, 11))},

        },
        13: {
            title:'C3',
            description: "C^0.5 boost points.",
            cost: new Decimal(10),
            unlocked() { return (hasUpgrade(this.layer, 12))},
            effect()  { 
                let ef = 0.5
                if (hasUpgrade('C',23))  ef = ef*1.3
                if (hasUpgrade('C',24))  ef = ef*1.2
                if (inChallenge('C',11))  ef = 0
                if (inChallenge('E',11))  ef = 0
                return player[this.layer].points.pow(ef);          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        14: {
            title:'C4',
            description: "B6^1.5.",
            cost:new Decimal(25),
            unlocked() { return (hasUpgrade(this.layer, 13))},
        },
        15: {
            title:'C5',
            description: "200x points.<br>unlock a new chal.",
            cost:new Decimal(50),
            unlocked() { return (hasUpgrade(this.layer, 14))},
        },
        21: {
            title:'C6',
            description: "10x C.",
            cost:new Decimal(5e6),
            unlocked() { return (hasUpgrade(this.layer, 15))},
        },
        22: {
            title:'C7',
            description: "B6 ^1.3.",
            cost:new Decimal(2e8),
            unlocked() { return (hasUpgrade(this.layer, 21))},
        },
        23: {
            title:'C8',
            description: "C3 ^1.3.",
            cost:new Decimal(5.6e8),
            unlocked() { return (hasUpgrade(this.layer, 22))},
        },
        24: {
            title:'C9',
            description: "C3 ^1.15.",
            cost:new Decimal(2e9),
            unlocked() { return (hasUpgrade(this.layer, 23))},
        },
        25: {
            title:'C10',
            description: "1500x points,50x B,5x C.",
            cost:new Decimal(5e9),
            unlocked() { return (hasUpgrade(this.layer, 24))},
        },
    },
    challenges: {
        11: {
            name: "Cc1",
            completionLimit: 1,
            challengeDescription() {return "points ^0.45,C1-C10 are useless."},
            unlocked() { return (hasUpgrade("D",15))},
            goalDescription: '1e38 points',
            canComplete() {return player.points.gte('1e30')},
            rewardDescription: "x2000 points and ^1.01.",
        },
        12: {
            name: "Cc2",
            completionLimit: 1,
            challengeDescription() {return "D1-D5 are useless."},
            unlocked() { return (hasUpgrade("A",52))},
            goalDescription: '1e136 points',
            canComplete() {return player.points.gte('1e30')},
            rewardDescription: "x8000 points,A ^1.025.",
        },
    }
})

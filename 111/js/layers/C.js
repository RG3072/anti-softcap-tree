addLayer("C", {
    name: "C", 
    symbol: "C", 
    position: 0, 
    startData() { return {
        unlocked: false,
		points: n(0),
    }}, 
    passiveGeneration(){    let p=n(0)
        if(mil('D', 1)||mil('I',1)) p=n(1)
        if (mil("D", 2))  p=p.mul(100)
        if (mil("B", 5))  p=p.mul(100)
        return p},
    color: "#A73E16",
    requires: n(2e36), 
    resource: "C", 
    baseResource: "points", 
    baseAmount() {return player.points}, 
    type: "normal", 
    exponent: 0.15, 
    gainExp() {
        return n(1)
    },
    row: 1, 
    hotkeys: [
        {key: "c", description: "C: Reset for C points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return ((ch('A',22))||player[this.layer].unlocked)},
    gainMult() { 
        mult = n(1)
        mult = mult.pow(upg('A',45)?1.1:1)
        mult = mult.mul(upg('C',21)?10:1)
        mult = mult.mul(upg('C',25)?5:1)
        mult = mult.mul(upg('D',31)?5:1)
        mult = mult.mul(mil("I", 0)?5:1)

        mult = mult.mul(upg('A',61)?upgradeEffect('A',61):1)
        mult = mult.mul(buyableEffect("E",13))
        mult = mult.mul(upg("E",95)?upgradeEffect("E",95):1)

        return mult
    },
    softcap(){return n(Infinity)},
	softcapPower(){return n(1)},
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
                unlocked() {return (upg("D",15))},
                content: ["challenges"]    },
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    doReset(layer){
        if (layer=="F") {        
            let keep = [];
            if (mil("F", 1)) keep.push("upgrades")
            if (mil("F", 1)) keep.push("milestones")
            if (mil("F", 2)) keep.push("challenges")
            layerDataReset(this.layer, keep)}
        if (layer=="I") {        
            let keep = []
            if(gcs('I',11)) keep.push("milestones")
            if(gcs('I',12)) keep.push("challenges")
            if(gcs('I',14)) keep.push("upgrades")
            layerDataReset(this.layer, keep)}
    },
    upgrades: {
        11: {
            title:'C1',
            description: function() {return '20x points <br>layer C total: <br>'+ format(this.effect()) +'x'},
            effect()  { 
                let ef = n(20)
                let exp = n(0.4)
                if (upg('C',12)) ef = ef.mul(20)
                if (upg('C',15)) ef = ef.mul(200)
                if (upg('C',25)) ef = ef.mul(1500)
                if (mil('C',3)) ef = ef.mul(1000)
                if (upg('C',31)) ef = ef.mul(1e7)
                if (upg('C',41)) ef = ef.mul(1e32)
                if (upg('C',42)) ef = ef.mul(1e80)
                if (inChallenge('C',11))  ef = n(1)
                if (upg('E',64)) exp=exp.add(0.1)
                if (upg('E',72)) exp=exp.add(0.1)
                if (upg('F',21)) exp=exp.add(0.4)
                if (upg('E',61)) ef=ef.pow(n(buyableEffect("E",21).sub(1).mul(exp).add(1)))
                return ef;          
            },
            cost:n(1),
        },
        12: {
            title:'C2',
            description: "20x points.",
            cost:n(1),
            unlocked() { return (upg(this.layer, 11))},

        },
        13: {
            title:'C3',
            description: "C^0.5 boost points.",
            cost: n(10),
            unlocked() { return (upg(this.layer, 12))},
            effect()  { 
                let ef=n(0.5)
                if (upg('C',23))  ef = ef.mul(1.3)
                if (upg('C',24))  ef = ef.mul(1.2)
                // if ()  ef = 0
                // if ()  ef = 0
                if(inChallenge('C',11)||inChallenge('E',11)) ef=n(0)
                return player[this.layer].points.add(1).pow(ef);          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        14: {
            title:'C4',
            description: "B6^1.5.",
            cost:n(30),
            unlocked() { return (upg(this.layer, 13))},
        },
        15: {
            title:'C5',
            description: "200x points.<br>unlock a new chal.",
            cost:n(60),
            unlocked() { return (upg(this.layer, 14))},
        },
        21: {
            title:'C6',
            description: "10x C.",
            cost:n(5e6),
            unlocked() { return (upg(this.layer, 15))},
        },
        22: {
            title:'C7',
            description: "B6 ^1.3.",
            cost:n(2e8),
            unlocked() { return (upg(this.layer, 21))},
        },
        23: {
            title:'C8',
            description: "C3 ^1.3.",
            cost:n(5e8),//5.6e8
            unlocked() { return (upg(this.layer, 22))},
        },
        24: {
            title:'C9',
            description: "C3 ^1.15.",
            cost:n(2e9),
            unlocked() { return (upg(this.layer, 23))},
        },
        25: {
            title:'C10',
            description: "1500x points,50x B,5x C.",
            cost:n(5e9),
            unlocked() { return (upg(this.layer, 24))},
        },
        31: {
            title:'C11',
            description: "1e7x pts.",
            cost:n('1e2560'),
            unlocked() { return (ccomp("E", 21).gte(2))},
        },
        32: {
            title:'C12',
            description: "C upg boost E.<br>(1.3^x).",
            cost:n('1e2760'),
            effect()  { 
                let b=n(1.3)
                let a=player.C.upgrades.length
                if (upg('E',75)) b=b.add(0.1)
                let ef=b.pow(a)
                return ef;          
            },
            unlocked() { return (upg('E', 64))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        33: {
            title:'C13',
            description: "Eb1 amt boost pts.<br>(1.5^x).",
            cost:n('1e2835'),
            effect()  { 
                let a=getBuyableAmount('E', 11)
                let ef=n(1.5).pow(a)
                return ef;          
            },
            unlocked() { return (upg(this.layer, 32))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        34: {
            title:'C14',
            description: "Eb4 is cheaper.<br>(^0.98,after scaling)",
            cost:n('1e2906'),
            unlocked() { return (upg(this.layer, 33))},
        },
        35: {
            title:'C15',
            description: "E3/E4 ^1.2",
            cost:n('1e2996'),
            unlocked() { return (upg(this.layer, 34))},
        },
        41: {
            title:'C16',
            description: "x1e32 pts",
            cost:n('1e59200'),
            unlocked() { return (upg('F', 31))},
        },
        42: {
            title:'C17',
            description: "x1e80 pts",
            cost:n('1e60200'),
            unlocked() { return (upg(this.layer, 41))},
        },
    },
    challenges: {
        11: {
            name: "Cc1",
            completionLimit: 1,
            challengeDescription() {return "points ^0.45,C1-C10 are disabled."},
            unlocked() { return (upg("D",15))},
            goalDescription: '1e39 points',
            canComplete() {return player.points.gte('1e39')},
            rewardDescription: "x2000 and ^1.01 points,unlock new A upg.",
        },
        12: {
            name: "Cc2",
            completionLimit: 1,
            challengeDescription() {return "D1-D5 are disabled."},
            unlocked() { return (upg("A",52))},
            goalDescription: '1e139 points',
            canComplete() {return player.points.gte('1e139')},
            rewardDescription: "x8000 points,A ^1.025.",
        },
    }
})

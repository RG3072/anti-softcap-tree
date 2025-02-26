addLayer("D", {
    name: "D", 
    symbol: "D", 
    position: 1, 
    startData() { return {
        unlocked: false,
		points: n(0),
    }},
    passiveGeneration(){    let d_pg=100
        return (mil("B", 5)||mil('I',1))?d_pg:0},
    color: "#720202",
    requires: n('1e13'), 
    resource: "D", 
    baseResource: "C", 
    baseAmount() {return player.C.points}, 
    type: "normal", 
    exponent: 0.2, 
    gainExp() {
        return n(1)
    },
    row: 1, 
    hotkeys: [
        {key: "d", description: "D: Reset for D points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return ((mil('C',3))||player[this.layer].unlocked)},
    gainMult() { 
        mult = n(1)
        mult = mult.mul(upg(this.layer,12)?2:1)
        mult = mult.mul(upg(this.layer,13)?2:1)
        mult = mult.pow(upg(this.layer,22)?1.2:1)
        mult = mult.mul(upg('A',52)?2:1)
        mult = mult.mul(upg('A',64)?upgradeEffect('A',64):1)
        mult = mult.mul(buyableEffect("E",13))
        mult = mult.mul(mil("I", 0)?5:1)

        return mult
    },
    branches: ['C'],
    milestones: {
        0: {requirementDescription: "100 total D",
            done() {return player[this.layer].total.gte(100)}, 
            effectDescription: "keep B.",
        },
        1: {requirementDescription: "2500 total D",
            done() {return player[this.layer].total.gte(2500)}, 
            effectDescription: "100x A/B passive,1x C passive.",
        },
        2: {requirementDescription: "1.5e6 total D",
            done() {return player[this.layer].total.gte('1.5e6')}, 
            effectDescription: "1e4x A and 100x B/C passive,unlock B buyable.",
        },
        3: {requirementDescription: "1e9 total D",
            done() {return player[this.layer].total.gte('1e9')}, 
            effectDescription: "1e5x A,unlock a chal.",
        },
        4: {requirementDescription: "6e666 total D",
            done() {return player[this.layer].total.gte('6e666')}, 
            effectDescription: "D17 base +0.05.",
        },
    },
    softcap(){return n(Infinity)},
	softcapPower(){return n(1)},
    microtabs: {
        stuff: {       
            "Upgrades": {
                unlocked() {return true},
                content: [ "upgrades"]}, 
            "Milestones": {
                unlocked() {return true},
                content: ["milestones"]    },
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
            layerDataReset(this.layer, keep)}
        if (layer=="I") {        
            let keep = []
            if(gcs('I',11)) keep.push("milestones")
            if(gcs('I',14)) keep.push("upgrades")
            layerDataReset(this.layer, keep)}
    },
    upgrades: {
        11: {
            title:'D1',
            description: function() {return '1000x points \n\
                '+'layer D total: \n\
                '+ format(this.effect()) +'x'},            
            effect()  { 
                let ef = n(1000)
                let exp = n(0.4)
                if (upg('D',14)) ef = ef.mul(1000)
                if (upg('D',25)) ef = ef.mul(10000)
                if (upg('D',33)) ef = ef.mul(10000)
                if (upg('D',41)) ef = ef.mul(1e7)
                if (upg('D',51)) ef = ef.mul('1e40')
                if (upg('D',52)) ef = ef.mul('1e100')                
                if (upg('D',22)) ef = ef.pow(1.2)
                if (inChallenge('C',12)) ef = n(1)
                if (upg('E',64)) exp=exp.add(0.1)
                if (upg('E',72)) exp=exp.add(0.1)
                if (upg('F',21)) exp=exp.add(0.4)
                if (upg('E',61)) ef=ef.pow(n(buyableEffect("E",21).sub(1).mul(exp).add(1)))
                return ef;          
            },
            cost:n(1),
        },
        12: {
            title:'D2',
            description: "2x D.",
            cost:n(10),
            unlocked() { return (upg(this.layer, 11))},
        },
        13: {
            title:'D3',
            description: "2x D.",
            cost:n(30),
            unlocked() { return (upg(this.layer, 12))},
        },
        14: {
            title:'D4',
            description: "1000x points.",
            cost:n(100),
            unlocked() { return (upg(this.layer, 13))},
        },
        15: {
            title:'D5',
            description: "D^0.8 boost points.<br>unlock a chal.",
            cost: n(150),
            unlocked() { return (upg(this.layer, 14))},
            effect()  { 
                let ef = n(0.8)
                if (inChallenge('E',11))  ef = n(0)
                return player[this.layer].points.add(1).pow(ef);          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        21: {
            title:'D6',
            description: "D upg boost pts.<br>(e^x).",
            cost:n(5000),
            effect()  { 
                let a=player.D.upgrades.length
                let ef = n(2.718).pow(a)
                if (upg('D',23)) ef = ef.pow(2)
                return ef;          
            },
            unlocked() { return (upg('A', 52))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        22: {
            title:'D7',
            description: "D1-D5 ^1.2.",
            cost:n(8000),
            unlocked() { return (upg(this.layer, 21))},
        },
        23: {
            title:'D8',
            description: "D6 ^2.",
            cost:n(10000),
            unlocked() { return (upg(this.layer, 22))},
        },
        24: {
            title:'D9',
            description: "logC boost pts.",
            cost:n(15000),
            effect()  { 
                let ef = player.C.points.max(1).log(10)
                if (upg('D',34)) ef = ef.pow(2)
                return ef.add(1);          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
            unlocked() { return (upg(this.layer, 23))},
        },
        25: {
            title:'D10',
            description: "10000x points.",
            cost:n(25000),
            unlocked() { return (upg(this.layer, 24))},
        },
        31: {
            title:'D11',
            description: "5x C.",
            cost:n(50000),
            unlocked() { return (upg(this.layer, 25))},
        },
        32: {
            title:'D12',
            description: "logB boost pts.",
            cost:n('8e4'),
            effect()  { 
                let ef = player.B.points.add(1).log(10)
                if (upg('D',35)) ef = ef.pow(2)
                return 1+ef;          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
            unlocked() { return (upg(this.layer, 31))},
        },
        33: {
            title:'D13',
            description: "10000x points.",
            cost:n('2.5e5'),
            unlocked() { return (upg(this.layer, 32))},
        },
        34: {
            title:'D14',
            description: "D9 ^2.",
            cost:n('4e5'),
            unlocked() { return (upg(this.layer, 33))},
        },
        35: {
            title:'D15',
            description: "D12 ^2.",
            cost:n('6e5'),
            unlocked() { return (upg(this.layer, 34))},
        },
        41: {
            title:'D16',
            description: "1e7x pts.",
            cost:n('1e578'),
            unlocked() { return (upg('C', 31))},
        },
        42: {
            title:'D17',
            description: "D upg boost E.<br>(1.25^x).",
            cost:n('1e628'),
            effect()  { 
                let a=player.D.upgrades.length
                let b=n(1.25)
                if (mil('D',4)) b=b.add(0.05)
                if (upg('E',75)) b=b.add(0.1)
                let ef=b.pow(a)
                return ef;          
            },
            unlocked() { return (upg('C', 32))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        43: {
            title:'D18',
            description: "Eb2 amt boost pts.<br>(1.75^x).",
            cost:n('1e648'),
            effect()  { 
                let a=getBuyableAmount('E', 12)
                let ef = n(1.75).pow(a)
                return ef;          
            },
            unlocked() { return (upg('D', 42))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        44: {
            title:'D19',
            description: "Bb5 is cheaper.<br>(^0.98,after scaling)",
            cost:n('1e659'),
            unlocked() { return (upg('D', 43))},
        },
        45: {
            title:'D20',
            description: "E12/E15 ^1.2",
            cost:n('1e684'),
            unlocked() { return (upg('D', 44))},
        },
        51: {
            title:'D21',
            description: "x1e40 pts",
            cost:n('1e14180'),
            unlocked() { return (upg('F', 25))},
        },
        52: {
            title:'D22',
            description: "x1e100 pts",
            cost:n('1e15300'),
            unlocked() { return (upg(this.layer, 51))},
        }
    }
})
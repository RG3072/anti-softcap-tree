addLayer("B", {
    name: "B", 
    symbol: "B", 
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: n(0),
    }},
    passiveGeneration(){    let pg=n(0)
        if (mil("C", 2)||mil('I',1)) pg=n(1)
        if (mil("C", 3))  pg=pg.mul(100)
        if (mil("D", 1))  pg=pg.mul(100)
        if (mil("D", 2))  pg=pg.mul(100)
        return pg},
    color: "#7AAA2C",
    requires: n(3e4), 
    resource: "B", 
    baseResource: "A", 
    baseAmount() {return player.A.points}, 
    type: "normal", 
    exponent: 0.2, 
    gainExp() {return n(1)},
    row: 0, 
    hotkeys: [
        {key: "b", description: "B: Reset for B points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return (upg('A',35)||player[this.layer].unlocked)},
    gainMult() { 
        mult = n(1)
        mult = mult.mul(upg(this.layer,14)?2:1)
        mult = mult.mul(upg(this.layer,15)?1.5:1)
        mult = mult.mul(upg(this.layer,22)?2:1)
        mult = mult.mul(upg(this.layer,24)?2:1)
        mult = mult.mul(upg(this.layer,25)?2:1)
        mult = mult.mul(upg('C',25)?50:1)
        mult = mult.pow(hasChallenge("A", 11)?1.1:1)
        mult = mult.mul(hasChallenge("A", 12)?10:1)
        mult = mult.mul(hasChallenge("A", 22)?10:1)
        mult = mult.mul(buyableEffect("B",12))
        mult = mult.mul(upg("B", 41)?15:1)
        mult = mult.mul(upg("B", 51)?20:1)
        mult = mult.mul(upg("B", 53)?30:1)
        mult = mult.mul(upg("B", 61)?upgradeEffect('B',61):1)
        mult = mult.mul(mil("B", 6)?100:1)
        mult = mult.mul(mil("B", 7)?1e5:1)
        mult = mult.mul(buyableEffect("E",12))
        mult = mult.mul(upg("E", 82)?upgradeEffect('E',82):1)        
        mult = mult.mul(upg("E",92)?upgradeEffect("E",92):1)
        mult = mult.mul(mil("F", 0)?10:1)
        mult = mult.mul(mil("I", 0)?5:1)
        mult = mult.pow(upg("E", 65)?1.004:1)
        if (inChallenge('F',11)) mult=mult.pow(0.25)
        return mult
    },
    softcap(){return n(Infinity)},
	softcapPower(){return n(1)},
    microtabs: {
        stuff: {       
            "Upgrades": {
                unlocked() {return true},
                content: [ "upgrades"]}, 
            "Buyables": {
                unlocked() {return (mil("D", 2))},
                content: [
                ["raw-html", () => `<h4 style="opacity:.5">Bbs' cost increase faster above 400 purchases,<br> can be delayed in upcoming contents.<br></h4>`]
                ,["raw-html", () => `<h4 style="opacity:.5">The scaling is even stronger after 60000 purchases.</h4>`]
                ,"buyables"]},  
            "Milestones": {
                unlocked() {return (upg("B", 53))},
                content: ["milestones"]  },
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    branches: ["A"],
    doReset(layer){
        if (layer=="F") {        
            let keep = []
            if (mil("F",0)) keep.push("milestones")
            if (mil("F",4)) keep.push("upgrades")
            layerDataReset(this.layer, keep)}
        if (layer=="I") {        
            let keep = []
            if(gcs('I',11)) keep.push("milestones")
            if(gcs('I',12)) keep.push("challenges")
            if(gcs('I',13)) keep.push("upgrades")
            layerDataReset(this.layer, keep)}
    },
    autoUpgrade() {return (upg("F",13))},//&&!gcs('?',101)
    milestones: {
        0: {requirementDescription: "1e65 total B (1",
            done() {return player[this.layer].total.gte('1e65')}, 
            effectDescription: "buyables cost nothing.",
        },
        1: {requirementDescription: "1e74 total B (2",
            done() {return player[this.layer].total.gte('1e74')}, 
            effectDescription: "B26 effect divide Bb cost.",
        },
        2: {requirementDescription: "1e111 total B (3",
            done() {return player[this.layer].total.gte('1e111')}, 
            effectDescription: "autobuy B buyables.",
            toggles: [ ["B","auto"] ]
        },
        3: {requirementDescription: "1e140 total B (4",
            done() {return player[this.layer].total.gte('1e140')}, 
            effectDescription: "unlock 5th buyable.",
        },
        4: {requirementDescription: "1e200 total B (5",
            done() {return player[this.layer].total.gte('1e200')}, 
            effectDescription: "unlock a chal.",
        },
        5: {requirementDescription: "1.79e308 total B (6",
            done() {return player[this.layer].total.gte('1.79e308')}, 
            effectDescription: "100x C/D passive.",
        },
        6: {requirementDescription: "1e658 total B (7",
            done() {return player[this.layer].total.gte('1e658')}, 
            effectDescription: "x100 B,unlock a upg.",
        },
        7: {requirementDescription: "1e1700 total B (8",
            done() {return player[this.layer].total.gte('1e1700')}, 
            effectDescription: "x1e5 B,unlock a layer.",
        },
        8: {requirementDescription: "1e2345 total B (9",
            done() {return player[this.layer].total.gte('1e2345')}, 
            effectDescription: "bulk buy x10 B buyables.",
        },
    },
    upgrades: {
        11: {
            title:'B1',
            description: function() {return '5x points \n\
                '+'<br>layer B total: '+ format(this.effect()) +'x'},            
            effect()  { 
                let ef =n(5)
                if (upg('B',12)) ef = ef.mul(5)
                if (upg('B',13)) ef = ef.mul(5)
                if (upg('B',15)) ef = ef.mul(5)
                if (upg('B',24)) ef = ef.mul(10)
                if (upg('B',25)) ef = ef.mul(10)
                if (upg('B',31)) ef = ef.mul(20)
                if (upg('B',42)) ef = ef.mul(2e4)
                if (upg('B',64)) ef = ef.mul(5e4)
                if (upg('B',72)) ef = ef.mul(5e4)
                if (upg('B',81)) ef = ef.mul(1e5)

                ef=ef.pow(buyableEffect("B",21))

                return ef;          
            },
            cost:n(1),
        },
        12: {
            title:'B2',
            description: "5x points.",
            cost:n(10),
            unlocked() { return (upg(this.layer, 11))},
        },
        13: {
            title:'B3',
            description: "5x points.",
            cost:n(20),
            unlocked() { return (upg(this.layer, 12))},
        },
        14: {
            title:'B4',
            description: "2x B.",
            cost:n(30),
            unlocked() { return (upg(this.layer, 13))},
        },
        15: {
            title:'B5',
            description: "1.5x B,5x points.",
            cost:n(80),
            unlocked() { return (upg(this.layer, 14))},
        },
        21: {
            title:'B6',
            description: "B^0.3 boost points.",
            cost: n(160),
            unlocked() { return (upg(this.layer, 15))},
            effect()  { 
                let ef = n(0.3)
                if (upg('B', 32))  ef = ef.mul(1.5)
                if (upg('C', 22))  ef = ef.mul(1.3)
                return player[this.layer].points.pow(ef);          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        22: {
            title:'B7',
            description: "2x B.",
            cost:n(200),
            unlocked() { return (upg(this.layer, 21))},
        },
        23: {
            title:'B8',
            description: "get A passively.",
            cost:n(500),
            unlocked() { return (upg(this.layer, 22))},
        },
        24: {
            title:'B9',
            description: "2x B,10x points.",
            cost:n(600),
            unlocked() { return (upg(this.layer, 23))},
        },
        25: {
            title:'B10',
            description: "2x B,10x points.<br>unlock A chal.",
            cost:n(1.5e3),
            unlocked() { return (upg(this.layer, 24))},
        },
        31: {
            title:'B11',
            description: "20x points.",
            cost:n(8e4),
            unlocked() { return (upg(this.layer, 25))},
        },
        32: {
            title:'B12',
            description: "A5 exp+0.05.",
            cost:n(1.2e5),
            unlocked() { return (upg(this.layer, 31))},
        },
        33: {
            title:'B13',
            description: "A9^1.5,unlock next chal.",
            cost:n(3e5),
            unlocked() { return (upg(this.layer, 32))},
        },
        34: {
            title:'B14',
            description: "A9^1.5.",
            cost:n(8e5),
            unlocked() { return (upg(this.layer, 33))},
        },
        35: {
            title:'B15',
            description: "A5 exp+0.05,unlock next chal.",
            cost:n(1.5e6),
            unlocked() { return (upg(this.layer, 34))},
        },
        41: {
            title:'B16',
            description: "x15 B,unlock 2nd bab.",
            cost:n('3e39'),
            unlocked() { return player.B.total.gte('1e39')},
        },
        42: {
            title:'B17',
            description: "x2e4 points<br>,unlock 3rd bab.",
            cost:n('1e41'),
            unlocked() { return (upg(this.layer, 41))},
        },
        43: {
            title:'B18',
            description: "Bb1-2 are cheaper.",
            cost:n('2e45'),
            unlocked() { return (upg(this.layer, 42))},
        },
        44: {
            title:'B19',
            description: "mult to pts based on Bb1 eff.",
            cost:n('3e46'),
            effect()  { 
                let b=n(buyableEffect('B',11))
                let ef = b.pow(0.2).times(b.add(1).log(10).pow(2))
                if (upg('B',55)) ef=ef.pow(1.25)
                return ef;          
            },
            unlocked() { return (upg(this.layer, 43))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        45: {
            title:'B20',
            description: "2e4x pts,unlock 4th bab.",
            cost:n('4e48'),
            unlocked() { return (upg(this.layer, 44))},
        },
        51: {
            title:'B21',
            description: "x20 B.<br>Bb3 is stronger.",
            cost:n('3e50'),
            unlocked() { return (upg(this.layer, 45))},
        },
        52: {
            title:'B22',
            description: "mult to pts based on Bb2 eff.",
            cost:n('5e55'),
            effect()  { 
                let ef = buyableEffect('B',12).pow(0.25).times(buyableEffect('B',11).add(1).log(10).pow(2))
                if (upg('B',55)) ef=ef.pow(1.25)
                return ef;          
            },
            unlocked() { return (upg(this.layer, 51))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        53: {
            title:'B23',
            description: "30x B,Bb1 100x cheaper.",
            cost:n('2e58'),
            unlocked() { return (upg(this.layer, 52))},
        },
        54: {
            title:'B24',
            description: "Bb1 base +0.05.",
            cost:n('5e65'),
            unlocked() { return (upg(this.layer, 53))},
        },
        55: {
            title:'B25',
            description: "B19/B22 ^1.3.",
            cost:n('2e68'),
            unlocked() { return (upg(this.layer, 54))},
        },
        61: {
            title:'B26',
            description: "lg pts mult B.",
            cost:n('1e70'),
            effect()  { 
                let ef=player.points.add(10).log(10)
                if (upg('A',53)) ef=ef.mul(10)
                if (upg('B',63)) ef=ef.pow(1.15)
                if (upg('B',64)) ef=ef.pow(1.15)
                if (upg('B',74)) ef=ef.pow(1.3)
                if (upg('A',62)) ef=ef.mul(upgradeEffect('A',62))
                if (upg('E',31)) ef=ef.pow(1.1)
                if (mil('E',8)) ef=ef.pow(1.05)
                if (mil('E',10)) ef=ef.pow(1.05)
                if (upg('E',105)) ef=ef.pow(1.05)
                if (mil('F',2)) ef=ef.pow(1.1)
                return ef;          
            },
            unlocked() { return (upg(this.layer, 55))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        62: {
            title:'B27',
            description: "unlock new A upg.",
            cost:n('1e81'),
            unlocked() { return (upg(this.layer, 61))},
        },
        63: {
            title:'B28',
            description: "B26 ^1.15.",
            cost:n('1e113'),
            unlocked() { return (mil(this.layer, 2))},
        },
        64: {
            title:'B29',
            description: "B26 ^1.15,5e4x pts.",
            cost:n('1e116'),
            unlocked() { return (upg(this.layer, 63))},
        },
        65: {
            title:'B30',
            description: "Bb1-4 are cheaper.",
            cost:n('1e133'),
            unlocked() { return (upg(this.layer, 64))},
        },
        71: {
            title:'B31',
            description: "Bb1-2 base +0.05.",
            cost:n('1e150'),
            unlocked() { return (mil(this.layer, 3))},
        },
        72: {
            title:'B32',
            description: "5e4x pts.",
            cost:n('1e170'),
            unlocked() { return (upg(this.layer, 71))},
        },
        73: {
            title:'B33',
            description: "Bb1 base x1.025.",
            cost:n('1e500'),
            unlocked() { return (upg(this.layer, 72))},
        },
        74: {
            title:'B34',
            description: "B26 ^1.3.",
            cost:n('1e540'),
            unlocked() { return (upg(this.layer, 73))},
        },
        75: {
            title:'B35',
            description: "Bb5 is cheaper.",
            cost:n('1e585'),
            unlocked() { return (upg(this.layer, 74))},
        },
        81: {
            title:'B36',
            description: "x1e5 pts.",
            cost:n('1e1058'),
            unlocked() { return (upg('A', 65))},
        },
        82: {
            title:'B37',
            description: "Bb1-2 is cheaper.",
            cost:n('1e1185'),
            unlocked() { return (upg(this.layer, 81))},
        },
    },
    automate(){
        if (player.B.auto) {  buyBuyable("B",11),buyBuyable("B",12),buyBuyable("B",21)
            ,buyBuyable("B",22),buyBuyable("B",23) }
    },
    buyables:{
        11: {
            title: "Bb1", 
            cost(x) { 
                let cp=n(1.027)
                let cost = n(4).pow(x.pow(1.035)).times('1e38')
                if (upg('B',43)) cost = n(3.8).pow(x.pow(1.03)).times('1e37')
                if (upg('B',53)) cost = n(3.8).pow(x.pow(1.03)).times('1e35')
                if (upg('B',65)) cost = n(3.7).pow(x.pow(1.028)).times('1e34')
                if (upg('B',82)) cost = n(3.6).pow(x.pow(1.027)).times('1e27')
                let sc=tmp.B.scaling
                let sc2=tmp.B.sc2
                let scpow=tmp.B.scpow
                if (x.gte(sc2)) cp =cp.add(x.sub(sc2).div(sc2).div(80))
                if (upg('F',35)) cost = n(3.6).pow(x.pow(cp))
                let t=tmp.B.scad
                if (mil('B',1)) cost = cost.div(upgradeEffect('B',61))
                if (x.gte(sc)) cost =cost.pow(x.sub(sc).div(t).add(1).pow(scpow))
                if (upg('E',43)) cost = cost.pow(0.992)
                if (upg('E',73)) cost = cost.pow(0.99)
                if (hasChallenge('E',31)) cost = cost.pow(challengeEffect('E',31))
                if(gcs('I',105)) cost=n(3).pow(x.pow(1.03))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.B.bulk//tar.min()
                if(gcs('I',105)) tar=player.B.points.add(10).log(3).pow(100/103).sub(1).sub(gba(this.layer, this.id)).ceil().max(0)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)&&player.B.auto) player.B.buyables[this.id] = player.B.buyables[this.id].add(tar)},
            buy() {
                if (!mil('B',0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b = n(3)
                if (upg('B',54)) b = b.add(0.05)
                if (upg('B',71)) b = b.add(0.05)
                if (upg('B',73)) b = b.mul(1.02)
                if (mil('B',3)) b = b.add(buyableEffect('B',23))
                if (upg('F',65)) b = b.pow(upgradeEffect('F',65))
                if (upg('G',25)) b = b.mul(upgradeEffect('G',25))
                if (inChallenge('E',12)) b = n(2)
                if (inChallenge('E',31)) b = n(1.2)
                return b},
            effect(x) { 
                let ef = this.base().pow(x.pow(1.01))
                if (inChallenge('A',32)) ef=ef.pow(0.5)
                return ef},
            display() { 
                return "give A a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " B \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()) + " A" },
            unlocked() { return mil('D',2) }
        },
        12: {
            title: "Bb2", 
            cost(x) { 
                let cp=n(1.04)
                let cost = n(10).pow(x.pow(1.045)).times('1e40')
                if (upg('B',43)) cost = n(9).pow(x.pow(1.041)).times('1e39')
                if (upg('B',65)) cost = n(9).pow(x.pow(1.04)).times('1e38')
                if (upg('B',82)) cost = n(8).pow(x.pow(1.04)).times('1e30') 
                let sc=tmp.B.scaling
                let sc2=tmp.B.sc2
                let scpow=tmp.B.scpow
                if (x.gte(sc2)) cp =cp.add(x.sub(sc2).div(sc2).div(60))
                if (upg('F',35)) cost = n(8).pow(x.pow(cp))               
                let t=tmp.B.scad
                if (mil('B',1)) cost = cost.div(upgradeEffect('B',61))

                if (x.gte(sc)) cost =cost.pow(x.sub(sc).div(t).add(1).pow(scpow))
                if (upg('E',43)) cost = cost.pow( 0.992)
                if (upg('E',73)) cost = cost.pow( 0.99)
                if (hasChallenge('E',31)) cost = cost.pow( challengeEffect('E',31))
                if(gcs('I',105)) cost=n(8).pow(x.pow(1.03))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.B.bulk
                if(gcs('I',105)) tar=player.B.points.add(10).log(8).pow(100/103).sub(1).sub(gba(this.layer, this.id)).ceil().max(0)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)&&player.B.auto) player.B.buyables[this.id] = player.B.buyables[this.id].add(tar)},
            buy() {
                if (!mil('B',0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b = n(2)
                if (upg('B',71)) b = b.add(0.05)
                if (mil('B',3)) b = b.add(buyableEffect('B',23))
                if (upg('F',65)) b = b.pow(upgradeEffect('F',65))
                if (upg('G',25)) b = b.mul(upgradeEffect('G',25))
                if (inChallenge('E',12)) b = n(2)
                if (inChallenge('E',31)) b = n(1.2)
                return b},
            effect(x) { 
                let ef = this.base().pow(x.pow(1.006))
                if (inChallenge('A',32)) ef=ef.pow(0.5)
                return ef},
            display() { 
                return "give B a x" + format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " B \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()) + " B" },
            unlocked() { return upg('B',41) }
        },
        21: {
            title: "Bb3", 
            cost(x) { 
                let cost = n(10).pow(x.pow(1.07)).times('1e41')
                if (upg('B',65))  cost = n(10).pow(x.pow(1.065)).times('1e40')
                let sc=n(400)
                if (inChallenge('E',42)) sc=sc.sub(300)                
                let sc2=tmp.B.sc2
                let scpow=tmp.B.scpow
                let cp=n(1.065)
                if (x.gte(sc2)) cp =cp.add(x.sub(sc2).div(sc2).div(40))
                if (upg('F',35))  cost = n(10).pow(x.pow(cp))
                let t=tmp.B.scad
                if (mil('B',1)) cost = cost.div(upgradeEffect('B',61))

                if (x.gte(sc)) cost =cost.pow(x.sub(sc).div(t).add(1).pow(scpow))
                if (hasChallenge('E',31)) cost = cost.pow( challengeEffect('E',31))
                if(gcs('I',105)) cost=n(8).pow(x.pow(1.06))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.B.bulk
                if(gcs('I',105)) tar=player.B.points.add(10).log(8).pow(100/106).sub(1).sub(gba(this.layer, this.id)).ceil().max(0)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)&&player.B.auto) player.B.buyables[this.id] = player.B.buyables[this.id].add(tar)},
            buy() {
                if (!mil('B',0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            effect(x) { 
                let ef = x.div(1.3).add(1).pow(0.6).div(6).add(0.8333)
                if (upg('B',51)) ef = x.div(1.25).add(1).pow(0.6).div(4.5).add(0.777)
                if (upg('A',55)) ef = x.div(1.23).add(1).pow(0.6).div(4).add(0.75)
                if (hasChallenge('F',11)) ef=ef.mul(challengeEffect('F',11).div(100).add(1))
                if (upg('F',35)) ef = ef.sub(1).mul(1.05).add(1)
                if (inChallenge('A',41)) ef=n(1)
                if (inChallenge('E',31)) ef=n(1)
                if (inChallenge('E',42)) ef=n(1)
                return ef},
            display() { 
                return "boost to B's pts mult(exp) \n\
                Cost: " + format(this.cost()) + " B \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() { return upg('B',42) }
        },
        22: {
            title: "Bb4", 
            cost(x) { 
                let cost = n(16).pow(x.pow(1.07)).times('1e49')
                let sc=n(400)
                if (inChallenge('E',42)) sc=sc.sub(300)
                let sc2=tmp.B.sc2
                let scpow=tmp.B.scpow
                let cp=n(1.07)
                if (x.gte(sc2)) cp =cp.add(x.sub(sc2).div(sc2).div(40))
                let t=tmp.B.scad
                if (upg('B',65))  cost = n(16).pow(x.pow(1.065)).times('1e48')
                if (upg('F',35))  cost = n(16).pow(x.pow(cp))
                if (mil('B',1)) cost = cost.div(upgradeEffect('B',61))
                if (x.gte(sc)) cost =cost.pow(x.sub(sc).div(t).add(1).pow(scpow))

                if (hasChallenge('E',31)) cost = cost.pow( challengeEffect('E',31))
                if(gcs('I',105)) cost=n(10).pow(x.pow(1.07))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.B.bulk
                if(gcs('I',105)) tar=player.B.points.add(10).log(10).pow(100/107).sub(1).sub(gba(this.layer, this.id)).ceil().max(0)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)&&player.B.auto) player.B.buyables[this.id] = player.B.buyables[this.id].add(tar)},
            buy() {
                if (!mil('B',0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            effect(x) { 
                let ef = x.div(1.3).add(1).pow(0.7).div(6).add(0.8333)
                if (upg('A',55)) ef= x.div(1.26).add(1).pow(0.7).div(5).add(0.8)
                if (hasChallenge('F',11)) ef=ef.mul(challengeEffect('F',11).div(100).add(1))
                if (upg('F',35)) ef = ef.sub(1).mul(1.05).add(1)
                if(inChallenge('A',41)) ef=n(1)
                if (inChallenge('E',31)) ef=n(1)
                if (inChallenge('E',42)) ef=n(1)
                return ef},
            display() { 
                return "boost to A's pts mult(exp) \n\
                Cost: " + format(this.cost()) + " B \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() { return upg('B',45) }
        },
        23: {
            title: "Bb5", 
            cost(x) { 
                let cost = n(1234).pow(x.pow(1.2)).times('1e140')
                let sc=n(400)
                if (inChallenge('E',42)) sc=sc.sub(300)
                let sc2=tmp.B.sc2
                let scpow=tmp.B.scpow
                let cp=n(1.2)
                if (x.gte(sc2)) cp =cp.add(x.sub(sc2).div(sc2).div(15))
                let t=tmp.B.scad
                if (upg('B',75)) cost = n(1200).pow(x.pow(1.2)).times('1e135')
                if (upg('E',62)) cost = n(1100).pow(x.pow(1.2)).times('1e135')
                if (upg('F',35))  cost = n(1100).pow(x.pow(cp))
                if (x.gte(sc)) cost =cost.pow(x.sub(sc).div(t).add(1).pow(scpow))
                if (upg('D',44)) cost = cost.pow(0.98)
                if (hasChallenge('E',31)) cost = cost.pow( challengeEffect('E',31))
                if(gcs('I',105)) cost=n(10).pow(x.pow(1.2))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.B.bulk
                if(gcs('I',105)) tar=player.B.points.add(10).log(10).pow(5/6).sub(1).sub(gba(this.layer, this.id)).ceil().max(0)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)&&player.B.auto) player.B.buyables[this.id] = player.B.buyables[this.id].add(tar)},
            buy() {
                if (!mil('B',0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            effect(x) { 
                let ef = x.div(40).add(1).pow(0.7).sub(1)
                if (inChallenge('A',41)) ef = n(0)
                if (upg('A',63)) ef = ef.mul(1.02)
                if (upg('E',34)) ef = ef.mul(1.02)
                if (upg('E',45)) ef = ef.mul(1.02)
                if (upg('E',53)) ef = ef.mul(1.03)
                if (mil('F',7)) ef = ef.mul(1.025)
                if (hasChallenge('F',11)) ef = ef.mul(n(1).add(challengeEffect('F',11).div(100)))
                if (upg('F',33)) ef = ef.mul(n(1).add(upgradeEffect('F',33).div(100)))
                if (upg('F',41)) ef = ef.mul(1.03)
                ef=ef.mul(buyableEffect('G',13))
                if (upg('G',23)) ef = ef.mul(tmp.E.ekf2)
                if (inChallenge('E',41)) ef = ef.mul(0.4)
                if (inChallenge('E',42)) ef = n(0)
                return ef},
            display() { 
                return "boost Bb1-2 base \n\
                Cost: " + format(this.cost()) + " B \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return mil('B',3) }
        }
    },
    bulk(){
        let tar=n(1)
        if (mil('B', 8)) tar=tar.mul(10)
        if (mil('F', 2)) tar=tar.mul(2)
        if (upg('F', 34)) tar=tar.mul(5)
        if (upg('F', 62)) tar=tar.mul(3)
        if (upg('F', 64)) tar=tar.mul(3)
        if (mil('F', 16)) tar=tar.mul(10)
        if (upg('G', 14)) tar=tar.mul(10)
        if (upg('G', 23)) tar=tar.mul(10)
        if (mil('G',2)) tar=tar.mul(10)
        if (mil('F',17)) tar=tar.mul(n(5).mul(player.G.total.add(10).log(10)))
        return tar 
    },
    scaling(){
        let sc=n(400)
        if (mil('E',15)) sc=sc.add(100)
        if (inChallenge('E',42)) sc=sc.sub(300)
        if (!upg('G',32)) sc=sc.add(tmp.E.ekf.ceil())
        sc = sc.add(upgradeEffect('F',31).ceil())
        if (upg('G',15))  sc=n(Infinity)
        return sc
    },
    scpow(){let ef=n(0.45)
        if (upg('A',65)) ef=ef.sub(0.01)
        if (upg('E',103)) ef=ef.sub(0.005)
        if (upg('F',34)) ef=ef.sub(0.003)
        if (upg('F',54)) ef=ef.sub(0.008)
        if (upg('G',15))  ef=n(0)
        return ef
    },
    scad(){let t=n(800)
        if (upg('A',65)) t=t.add(150)
        if (upg('E',103)) t=t.add(50)
        return t
    },
    sc2(){let sc=n(6e4).add(tmp.B.scaling)
        if (upg('F',42)) sc=sc.add(1000)
        if (upg('F',55)) sc=sc.add(2000)
        if (upg('F',63)&&!upg('G',32)) sc=sc.add(tmp.E.ekf)
        if (upg('G',32))  sc=n(Infinity)
        return sc
    }
})

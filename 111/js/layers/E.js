addLayer("E", {
    name: "E", 
    symbol: "E", 
    position: 2, 
    startData() { return {
        unlocked: false,
		points: n(0),
        Em: n(0),
        Ek: n(0),
    }},
    passiveGeneration(){    let p=n(0)
        if (mil('E',9)||mil('I',1)) p=p.add(1)
        if (mil('F',0)) p=p.add(1)
        if (mil('E',10)) p=p.mul(10)
        if (mil('E',11)) p=p.mul(10)
        if (mil('E',15)) p=p.mul(10)
        return p},
    color: "#789A89",
    requires: n('1e1760'), 
    resource: "E", 
    baseResource: "B", 
    baseAmount() {return player.B.points}, 
    type: "normal", 
    exponent: 0.008, 
    gainExp() {
        return n(1)
    },
    row: 1, 
    hotkeys: [
        {key: "e", description: "E: Reset for E points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return ((mil('B',7))||player[this.layer].unlocked)},
    gainMult() {
        mult = n(1)
        mult = mult.mul(upg("E",13)?upgradeEffect("E",13):1)
        mult = mult.mul(upg("E",14)?upgradeEffect("E",14):1)
        mult = mult.mul(upg("E",15)?4:1)
        mult = mult.mul(upg("E",21)?2:1)
        mult = mult.mul(upg("E",41)?5:1)
        mult = mult.mul(upg("E",42)?2:1)
        mult = mult.mul(upg("E",23)?upgradeEffect("E",23):1)
        mult = mult.mul(upg("E",32)?upgradeEffect("E",32):1)
        mult = mult.mul(upg("C",32)?upgradeEffect("C",32):1)
        mult = mult.mul(upg("D",42)?upgradeEffect("D",42):1)
        mult = mult.mul(mil("E",11)?tmp.E.emf:1)
        mult = mult.mul(mil("E",20)?2024:1)
        mult = mult.mul(mil("F", 0)?10:1)
        mult = mult.mul(mil("I", 0)?5:1)
        mult = mult.mul(upg("E",71)?upgradeEffect("E",71):1)
        mult = mult.mul(upg("E",102)?upgradeEffect("E",102):1)
        mult = mult.mul(upg("F",12)?upgradeEffect("F",12):1)
        if (hasChallenge("E", 11))  mult = mult.mul(challengeEffect('E',11))
        if (hasChallenge("E", 12))  mult = mult.mul(challengeEffect('E',12))
        if (inChallenge('F',11)) mult=mult.pow(0.25)
        return mult
    },
    softcap(){return n(Infinity)},
	softcapPower(){return n(1)},
    branches: ['A','B','D'],
    milestones: {
        0: {requirementDescription: "1500 total E (1",
            done() {return player[this.layer].total.gte('1500')}, 
            effectDescription: "unlock E buyable.",
        },
        1: {requirementDescription: "40000 total E (2",
            done() {return player[this.layer].total.gte('40000')}, 
            effectDescription: "unlock Eb3,E2 exp+0.5.",
        },
        2: {requirementDescription: "1e6 total E (3",
            done() {return player[this.layer].total.gte('1e6')}, 
            effectDescription: "unlock E chal.",
        },
        3: {requirementDescription: "1e16 total E (4",
            done() {return player[this.layer].total.gte('1e16')}, 
            effectDescription: "E12 ^1.5,unlock another chal.",
        },
        4: {requirementDescription: "1e25 total E (5",
            done() {return player[this.layer].total.gte('1e25')}, 
            effectDescription: "autobuy Eb1-3.",
            toggles: [ ["E","auto1"] ]
        },
        5: {requirementDescription: "1e31 total E (6",
            done() {return player[this.layer].total.gte('1e31')}, 
            effectDescription: "Eb3 base +1,unlock another buyable.",
        },
        6: {requirementDescription: "1e40 total E (7",
            done() {return player[this.layer].total.gte('1e40')}, 
            effectDescription: "autobuy Eb4.",
            toggles: [ ["E","auto2"] ]
        },
        7: {requirementDescription: "1e45 total E (8",
            done() {return player[this.layer].total.gte('1e45')}, 
            effectDescription: "unlock 2 new chal.",
        },
        8: {requirementDescription: "1e49 total E (9",
            done() {return player[this.layer].total.gte('1e49')}, 
            effectDescription: "unlock new upg,B26 ^1.05.",
        },
        9: {requirementDescription: "1e53 total E (10",
            done() {return player[this.layer].total.gte('1e53')}, 
            effectDescription: "1x E passive. Finally!",
        },
        10: {requirementDescription: "2e68 total E (11",
            done() {return player[this.layer].total.gte('2e68')},
            effectDescription: "10x E passive,B26 ^1.05.",
        },
        11: {requirementDescription: "1e71 total E (12",
            done() {return player[this.layer].total.gte('1e71')},
            effectDescription: "10x E passive again,unlock Em.",
        },
        //12: {requirementDescription: "1e9 total Em",
        //    done() {return player.E.Em.total.gte('1e9')},
        //    effectDescription: "10x E passive again.",
        //},
        12: {requirementDescription: "1e90 total E (13",
            done() {return player[this.layer].total.gte('1e90')},
            effectDescription: "Em eff exp +0.02.",
        },
        13: {requirementDescription: "1e111 total E (14",
            done() {return player[this.layer].total.gte('1e111')}, 
            effectDescription: "autobuy Eb5-7.",
            toggles: [ ["E","auto3"] ]
        },
        14: {requirementDescription: "1e132 total E (15",
            done() {return player[this.layer].total.gte('1e132')}, 
            effectDescription: "unlock 2 new chal.",
        },
        15: {requirementDescription: "1e166 total E (16",
            done() {return player[this.layer].total.gte('1e166')},
            effectDescription: "10x E passive,Bb1-2 sc start 100 later,unlock Ek.",
        },
        16: {requirementDescription: "1e209 total E (17",
            done() {return player[this.layer].total.gte('1e209')}, 
            effectDescription: "unlock final 2 chal.",
        },
        17: {requirementDescription: "1e233 total E (18",
            done() {return player[this.layer].total.gte('1e233')}, 
            effectDescription: "autobuy Eb8-9.",
            toggles: [ ["E","auto4"] ]
        },
        18: {requirementDescription: "1e570 total E (19",
            done() {return player[this.layer].total.gte('1e570')}, 
            effectDescription: "unlock the final buyable.",
        },
        19: {requirementDescription: "1e666 total E (20",
            done() {return player[this.layer].total.gte('1e666')}, 
            effectDescription: "autobuy Eb10,E47 ^1.6.",
            toggles: [ ["E","auto5"] ]
        },
        20: {requirementDescription: "1e981 total E (21",
            done() {return player[this.layer].total.gte('1e981')}, 
            effectDescription: "x2024 E,unlock the next layer.",
        },
    },
    microtabs: {
        stuff: {       
            "Upgrades": {
                unlocked() {return true},
                content: [ "upgrades"]}, 
            "Buyables": {
                unlocked() {return (mil("E", 0))},
                content: [["raw-html", () => `<h4 style="opacity:.5">Ebs' cost increase faster above 40 purchases</h4>`],
                ["buyables",[1,2]]]},
            "Milestones": {
                unlocked() {return (upg("E", 14))},
                content: ["milestones"]},
            "Challenges": {
                unlocked() {return (mil("E",2))},
                content: ["challenges"]},
            "Em": {
                unlocked() {return (mil("E", 11))},
                content: [["display-text", () => "You have <h3 style='color: #789A89'>" + format(player.E.Em) + "</h3> Em, mult E by <h3 style='color: #789A89'> " + format(tmp.E.emf) + "x</h3>.<br>" + "<h4>" + format(tmp.E.Emeffect) + " Em/s<h4> <br>"],
                ["raw-html", () => `<h4 style="opacity:.5">welcome to first sub-currency.Em^0.25 mults E. </h4>`],
                ["buyables",[3]]]},
            "Ek": {
                unlocked() {return (mil("E", 15))},
                content: [["display-text", () => "You have <h3 style='color: #177261'>" + format(player.E.Ek) + "</h3> Ek, Bb scaling start <h3 style='color: #177261'> " + format(tmp.E.ekf) + " </h3>later.<br>" + "<h4>" + format(tmp.E.Ekeffect) + " Ek/s<h4> <br>"],
                ["raw-html", () => `<h4 style="opacity:.5">Ek delays Bb1-2 scaling.<br>for balance,Eb9 scaling faster after 10000 </h4>`],
                ["display-text", function() {if(upg('G',32)) return "Ek mults Bb5 base by <h3 style='color: #177261'> " + format(tmp.E.ekf2) + " </h3>after upgrade G12.<br>" }],
                ["buyables",[4]]]},
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
            let keep = []
            if (mil("F",1)) keep.push("milestones")
            if (mil("F",4)) keep.push("upgrades")
            if (mil("F",5)) keep.push("challenges")
            layerDataReset(this.layer, keep)}
        if (layer=="I") {        
            let keep = []
            if(gcs('I',12)) keep.push("challenges")
            if(gcs('I',14)) keep.push("upgrades")
            if(gcs('I',15)) keep.push("milestones")
            layerDataReset(this.layer, keep)}
    },
    autoUpgrade() {return (mil("F",3))},
    upgrades: {
        11: {
            title:'E1',
            description: function() {return '1e5x points \n\
                '+'<br>layer E total: '+ format(this.effect()) +'x'},
            effect()  { 
                let ef = n(1e5)
                if (upg('E',15)) ef = ef.mul(1e5)
                if (upg('E',33)) ef = ef.mul(3e5)
                if (upg('E',51)) ef = ef.mul(1e6)
                if (upg('E',53)) ef = ef.mul(1e6)
                if (upg('E',55)) ef = ef.mul(1e7)
                if (upg('E',65)) ef = ef.mul(1e8)
                ef=ef.pow(buyableEffect("E",21))
                return ef;          
            },
            cost:n(1),
        },
        12: {
            title:'E2',
            description: "E boost points.",
            effect()  { 
                let ef = n(1)
                if (upg('E',15)) ef = ef.add(0.5)
                if (mil('E',1)) ef = ef.add(0.5)
                if (upg('E',44)) ef = ef.mul(1.5)
                if (inChallenge('E',11))  ef=n(0)
                return player[this.layer].points.add(1).pow(ef);          
            },
            cost:n(10),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (upg(this.layer, 11))},
        },
        13: {
            title:'E3',
            description: "boost to E base on D.",
            effect()  { 
                let ef = player.D.points.add(10).log(10).div(100).add(1)
                if (upg('E',24)) ef = ef.pow(1.5)
                if (upg('E',63)) ef = ef.pow(1.2)
                if (upg('C',35)) ef = ef.pow(1.2)
                return ef;
            },
            cost:n(30),
            unlocked() { return (upg(this.layer, 12))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        14: {
            title:'E4',
            description: "boost to E base on C.",
            effect()  { 
                let ef = player.C.points.add(10).log(10).div(200).add(1)
                if (upg('E',25)) ef = ef.pow(1.5)
                if (upg('E',63)) ef = ef.pow(1.2)
                if (upg('C',35)) ef = ef.pow(1.2)
                return ef;          
            },
            cost:n(80),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (upg(this.layer, 13))},
        },
        15: {
            title:'E5',
            description: "E2 ^1.5,1e5x points,x4 E.",
            cost:n('500'),
            unlocked() { return (upg(this.layer, 14))},
        },
        21: {
            title:'E6',
            description: "Eb1-2 base +1,x2 E.",
            cost:n('7500'),
            unlocked() { return (upg(this.layer, 15))},
        },
        22: {
            title:'E7',
            description: "E upg boost pts.<br>(e^3x).",
            cost:n('2e4'),
            effect()  { 
                let a=n(player.E.upgrades.length)
                let ef = n(2.718).pow(a.mul(3))
                if (upg('E',25)) ef =n(2.718).pow(a.mul(4))
                if (upg('E',33)) ef = ef.pow(1.5)
                if (upg('E',84)) ef = ef.pow(1.5)
                return ef;          
            },
            unlocked() { return (upg(this.layer, 21))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        23: {
            title:'E8',
            description: "E upg boost E.<br>(1.2^x).",
            cost:n('4e4'),
            effect()  { 
                let b=n(1.2)
                let a=n(player.E.upgrades.length)
                if (upg('E',83)) b = b.add(0.15)
                if (upg('E',91)) b = b.add(0.15)
                if (upg('E',94)) b = b.add(0.1)
                let ef = b.pow(a)
                return ef;          
            },
            unlocked() { return (upg(this.layer, 22))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        24: {
            title:'E9',
            description: "E3 ^1.5.",
            cost:n('1.5e5'),
            unlocked() { return (upg(this.layer, 23))},
        },
        25: {
            title:'E10',
            description: "E4 ^1.5,E7 becomes e^4x.",
            cost:n('3e5'),
            unlocked() { return (upg(this.layer, 24))},
        },
        31: {
            title:'E11',
            description: "B26 ^1.1.",
            cost:n('5e7'),
            unlocked() { return  (ccomp("E", 11).gte(1))},
        },
        32: {
            title:'E12',
            description: "boost to E base on B.",
            cost:n('2e8'),
            effect()  { 
                let ef = player.B.points.add(10).log(10).div(300).add(1)
                if (mil('E',3)) ef = ef.pow(1.5)
                if (upg('E',63)) ef = ef.pow(1.2)
                if (upg('D',45)) ef = ef.pow(1.2)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (upg(this.layer, 31))},
        },
        33: {
            title:'E13',
            description: "x3e5 pts,<br>E7 becomes e^6x.",
            cost:n('8e9'),
            unlocked() { return (upg(this.layer, 32))},
        },
        34: {
            title:'E14',
            description: "Bb5 is stronger.<br> (+2%)",
            cost:n('2e11'),
            unlocked() { return (upg(this.layer, 33))},
        },
        35: {
            title:'E15',
            description: "boost to E base on A.",
            cost:n('1e13'),
            effect()  { 
                let ef = player.A.points.add(10).log(10).div(500).add(1)
                if (upg('E',41)) ef = ef.pow(1.5)
                if (upg('E',63)) ef = ef.pow(1.2)
                if (upg('D',45)) ef = ef.pow(1.2)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (upg(this.layer, 34))},
        },
        41: {
            title:'E16',
            description: "E15 ^1.5,x5 E.",
            cost:n('1e18'),
            unlocked() { return  (ccomp("E", 12).gte(1))},
        },
        42: {
            title:'E17',
            description: "Eb1-2 base +1,x2 E.",
            cost:n('1e20'),
            unlocked() { return (upg(this.layer, 41))},
        },
        43: {
            title:'E18',
            description: "Bb1-2 are cheaper.<br>(^0.992,after scaling)",
            cost:n('3e23'),
            unlocked() { return (upg(this.layer, 42))},
        },
        44: {
            title:'E19',
            description: "E2 ^1.5",
            cost:n('3e26'),
            unlocked() { return (upg(this.layer, 43))},
        },
        45: {
            title:'E20',
            description: "Bb5 is stronger.<br> (+2%)",
            cost:n('1e29'),
            unlocked() { return (upg(this.layer, 44))},
        },
        51: {
            title:'E21',
            description: "x1e6 pts.",
            cost:n('4e32'),
            unlocked() { return (upg(this.layer, 45))},
        },
        52: {
            title:'E22',
            description: "Ac7 is stronger based on E.",
            cost:n('2e33'),
            effect()  { 
                let ef = player.E.points.add(10).log(10).pow(0.75).div(150).add(1)
                if (ef.gte(10)) {
                    if (upg('F',81)) ef=ef.pow(0.95).mul(n(10).pow(0.05))
                    else ef=ef.pow(0.85).mul(n(10).pow(0.15))}
                if (upg('E',74)) ef = ef.sub(1).mul(1.1).add(1)
                return ef;          
            },
            unlocked() { return (upg(this.layer, 51))},
            effectDisplay() { return '^'+format(this.effect()) }, 
        },
        53: {
            title:'E23',
            description: "Bb5 is stronger (+3%)<br>and x1e6 pts.",
            cost:n('2e36'),
            unlocked() { return (upg(this.layer, 52))},
        },
        54: {
            title:'E24',
            description: "Eb1-3 are cheaper.<br>(^0.985,after scaling)",
            cost:n('1e43'),
            unlocked() { return (upg(this.layer, 53))},
        },
        55: {
            title:'E25',
            description: "x1e7 pts,add Eb1-2 base.",
            cost:n('2e44'),
            effect()  { 
                let ef = player.E.points.add(10).log(10).pow(0.8).div(50)
                return ef;          
            },
            effectDisplay() { return '+'+format(this.effect()) }, 
            unlocked() { return (upg(this.layer, 54))},
        },
        61: {
            title:'E26',
            description: "Eb4 applies to C/D(nerfed,40%).",
            cost:n('2e50'),
            unlocked() { return (mil(this.layer, 8))},
        },
        62: {
            title:'E27',
            description: "Bb5 is cheaper.",
            cost:n('3e51'),
            unlocked() { return (upg(this.layer, 61))},
        },
        63: {
            title:'E28',
            description: "E3/4/12/15 ^1.2.",
            cost:n('5e52'),
            unlocked() { return (upg(this.layer, 62))},
        },
        64: {
            title:'E29',
            description: "E26 +10%.<br>unlock new C/D upg.",
            cost:n('2e55'),
            unlocked() { return (upg(this.layer, 63))},
        },
        65: {
            title:'E30',
            description: "^1.004 B,1e8x pts.",
            cost:n('1e71'),
            unlocked() { return (mil(this.layer, 10))},
        },
        71: {
            title:'E31',
            description: "logEm mults E.",
            cost:n('1e79'),
            unlocked() { return (mil(this.layer, 11))},
            effect()  { 
                let ef = player.E.Em.add(10).log(10)
                if (upg('E',81)) ef = ef.pow(1.5)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" },
        },
        72: {
            title:'E32',
            description: "E26 +10%.",
            cost:n('1e83'),
            unlocked() { return (upg(this.layer, 71))},
        },
        73: {
            title:'E33',
            description: "Bb1-2 are cheaper.<br>(^0.99,after scaling)",
            cost:n('1e84'),
            unlocked() { return (upg(this.layer, 72))},
        },
        74: {
            title:'E34',
            description: "E22 x1.1.",
            cost:n('5e89'),
            unlocked() { return (upg(this.layer, 73))},
        },
        75: {
            title:'E35',
            description: "C12/D17 base +0.1.",
            cost:n('1e94'),
            unlocked() { return (upg(this.layer, 74))},
        },
        81: {
            title:'E36',
            description: "E31 ^1.5.",
            cost:n('1e97'),
            unlocked() { return (upg(this.layer, 75))},
        },
        82: {
            title:'E37',
            description: "Em mults B.",
            effect()  { 
                let ef=n(1)
                return player.E.Em.add(1).pow(ef);          
            },
            cost:n('1e101'),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (upg(this.layer, 81))},
        },
        83: {
            title:'E38',
            description: "E8 base +0.15.",
            cost:n('1e107'),
            unlocked() { return (upg(this.layer, 82))},
        },
        84: {
            title:'E39',
            description: "E7 ^1.5.",
            cost:n('1e117'),
            unlocked() { return (upg(this.layer, 83))},
        },
        85: {
            title:'E40',
            cost:n('1e121'),            
            description: "Eb5-7 amt boost pts.<br>(1.7^x).",
            unlocked() { return (upg(this.layer, 84))},
            effect()  { 
                let b=n(1.7)
                let a=gba('E', 31).add(gba('E', 32)).add(gba('E', 33))
                let ef = b.pow(a)
                return ef;          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        91: {
            title:'E41',
            description: "E8 base +0.15.",
            cost:n('1e123'),
            unlocked() { return (upg(this.layer, 85))},
        },
        92: {
            title:'E42',
            cost:n('5e130'),            
            description: "Eb5-7 amt boost B.<br>(1.3^x).",
            unlocked() { return (upg(this.layer, 91))},
            effect()  { 
                let b=n(1.3)
                let a=gba('E', 31).add(gba('E', 32)).add(gba('E', 33))
                if (upg('E',93)) b=b.add(0.1)
                let ef = b.pow(a)
                return ef;          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        93: {
            title:'E43',
            description: "Eb7 is cheaper,<br>E42 base +0.1.",
            cost:n('3e136'),
            unlocked() { return (upg(this.layer, 92))},
        },
        94: {
            title:'E44',
            description: "Eb4 is cheaper,<br>E8 base +0.1.",
            cost:n('1e145'),
            unlocked() { return (upg(this.layer, 93))},
        },
        95: {
            title:'E45',
            cost:n('1e157'),            
            description: "Eb5-7 amt boost C.(1.15^x)<br> Eb5 cost base -1.",
            unlocked() { return (upg(this.layer, 94))},
            effect()  { 
                let b=n(1.15)
                let a=gba('E', 31).add(gba('E', 32)).add(gba('E', 33))
                let ef = b.pow(a)
                return ef;          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        101: {
            title:'E46',
            description: "Ek eff mult +2.",
            cost:n('3e186'),
            unlocked() { return (ccomp('E',31)>=3)},
        },
        102: {
            title:'E47',
            description: "Ek mults E.",
            effect()  { 
                let ef = player.E.Ek.add(10).log(10).pow(2)
                if (mil('E',19)) ef=ef.pow(1.6)
                return ef;          
            },
            cost:n('1e197'),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (upg(this.layer, 101))},
        },
        103: {
            title:'E48',
            description: "Em eff exp +0.03,nerf Bb scaling and Eb1-3 cost.",
            cost:n('2e222'),
            unlocked() { return (upg(this.layer, 102))},
        },
        104: {
            title:'E49',
            description: "Ek^1.5 mult pts,Eb6/9 base +0.25,Eb7 base +1,Ec8 eff x1.2,Eb1-4 scaling are 10 later.",
            effect()  { 
                let ef = player.E.Ek.max(1).pow(1.5)
                return ef;          
            },
            cost:n('1e328'),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (upg(this.layer, 103))},
        },
        105: {
            title:'E50',
            description: "Em^1.01,Eb7 base +1,B26 ^1.05.",
            cost:n('1e483'),
            unlocked() { return (upg(this.layer, 104))},
        },
    },
    automate(){
        if (player.E.auto1)  buyBuyable("E",11),buyBuyable("E",12),buyBuyable("E",13)
        if (player.E.auto2)  buyBuyable("E",21)
        if (player.E.auto3)  buyBuyable("E",31),buyBuyable("E",32),buyBuyable("E",33)
        if (player.E.auto4)  buyBuyable("E",41),buyBuyable("E",42)
        if (player.E.auto5)  buyBuyable("E",22)
    },
    buyables:{
        11: {
            title: "Eb1", 
            cost(x) {
                let cost = n(2).pow(x.pow(1.02)).times('1500')
                let sc=n(40)
                if (upg('E',104)) sc=sc.add(10)
                if (upg('F',22)) sc=sc.add(5)
                let t=n(80)
                let p=n(0.3)
                if (x.gte(sc))  cost =cost.pow(x.sub(sc).div(t).add(1).pow(p)) 
                if (upg('E',54)) cost = cost.pow( 0.985)
                if (upg('E',103)) cost = cost.pow( 0.99)
                if (hasChallenge('E',41)) cost = cost.pow( challengeEffect('E',41))
                return cost},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.E.bulk
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(tar))},
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(5)
                if (upg('E',21)) b=b.add(1)
                if (upg('E',42)) b=b.add(1)
                if (upg('F',14)) b=b.add(0.3)
                if (upg('E',55)) b=b.add(upgradeEffect('E',55))
                if (mil('E',18)) b=b.add(buyableEffect('E',22))
                if (upg('F',81)) b=b.mul(upgradeEffect('F',81))
                if (upg('G',21)) b=b.mul(upgradeEffect('G',21)[1])
                if (upg('F',65)) b=b.pow(upgradeEffect('F',65))
                if (inChallenge('E',21)) b=n(2)
                return b},
            effect(x) {
                let ef = this.base().pow(x.pow(1.005))
                return ef},
            display() { 
                return "give A a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()) + " A" },
            unlocked() { return mil('E',0) }
        },
        12: {
            title: "Eb2", 
            cost(x) {
                let cost = n(3).pow(x.pow(1.02)).times('7500')                
                let sc=n(40)
                if (upg('E',104)) sc=sc.add(10)
                if (upg('F',22)) sc=sc.add(5)
                let t=n(80)
                let p=n(0.3)
                if (x.gte(sc))  cost =cost.pow(x.sub(sc).div(t).add(1).pow(p))                
                if (upg('E',54)) cost = cost.pow( 0.985)
                if (upg('E',103)) cost = cost.pow( 0.99)
                if (hasChallenge('E',41)) cost = cost.pow( challengeEffect('E',41))
                return cost},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.E.bulk
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(tar))},
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(5)
                if (upg('E',21)) b=b.add(1)
                if (upg('E',42)) b=b.add(1)
                if (upg('F',14)) b=b.add(0.3)
                if (upg('E',55)) b=b.add(upgradeEffect('E',55))
                if (mil('E',18)) b=b.add(buyableEffect('E',22))
                if (upg('F',81)) b=b.mul(upgradeEffect('F',81))
                if (upg('G',21)) b=b.mul(buyableEffect('E',22).pow(0.25))
                if (upg('F',65)) b=b.pow(upgradeEffect('F',65))
                if (inChallenge('E',21)) b=n(2)
                return b},
            effect(x) {
                let efeb2 = this.base().pow(x.pow(1.005))
                return efeb2},
            display() { 
                return "give B a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()) + " B" },
            unlocked() { return player[this.layer].total.gte('4000') }
        },
        13: {
            title: "Eb3", 
            cost(x) {
                let cost = n(6).pow(x.pow(1.04)).times('50000')
                let sc=n(40)
                if (upg('E',104)) sc=sc.add(10)
                if (upg('F',22)) sc=sc.add(5)
                let t=n(80)
                let p=n(0.3)
                if (x.gte(sc))  cost =cost.pow(x.sub(sc).div(t).add(1).pow(p))    
                if (upg('E',54)) cost = cost.pow( 0.985)
                if (upg('E',103)) cost = cost.pow( 0.99)
                if (hasChallenge('E',41)) cost = cost.pow( challengeEffect('E',41))
                return cost},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.E.bulk
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(tar))},
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(5)               
                if (mil('E',5)) b=b.add(1)
                if (upg('F',14)) b=b.add(0.3)
                if (mil('E',18)) b=b.add(buyableEffect('E',22))
                if (upg('F',81)) b=b.add(upgradeEffect('E',55))
                if (upg('F',81)) b=b.mul(upgradeEffect('F',81))
                if (upg('G',21)) b=b.mul(buyableEffect('E',22).pow(0.25))
                if (upg('F',65)) b=b.pow(upgradeEffect('F',65))
                return b},
            effect(x) {
                let ef = this.base().pow(x.pow(1.005))
                return ef},
            display() { 
                return "give C/D a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()) + " C/D" },
            unlocked() { return mil('E',1) }
        },
        21: {
            title: "Eb4", 
            cost(x) {
                let cost = n(25).pow(x.pow(1.1)).times('4e31')
                if (upg('E',94)) cost =n(25).pow(x.pow(1.09)).times('1e29')
                let sc=n(40)
                if (upg('E',104)) sc=sc.add(10)
                if (upg('F',22)) sc=sc.add(5)
                let t=n(80)
                let p=n(0.3)
                if (x.gte(sc))  cost =cost.pow(x.sub(sc).div(t).add(1).pow(p))               
                if (upg('C',34)) cost =cost.pow(0.98)
                if (hasChallenge('E',41)) cost = cost.pow(challengeEffect('E',41))
                return cost},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.E.bulk        
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(tar))},
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            effect(x) {
                let ef = x.div(1.6).add(1).pow(0.6).div(5).add(0.8)
                if (upg('F',22)) ef=ef.sub(1).mul(1.1).add(1)
                if (upg('F',23)) ef=ef.sub(1).mul(1.1).add(1)
                if (upg('F',35)) ef =ef.sub(1).mul(1.08).add(1)
                if (inChallenge('E',31)) ef = n(1)
                if (inChallenge('E',41)) ef = ef.sub(1).mul(0.4).add(1)
                if (inChallenge('E',42)) ef = n(1)
                return ef},
            display() { 
                return "boost to E's pts mult(exp) \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() { return mil('E',5) }
        },
        31: {
            title: "Eb5", 
            cost(x) {
                let cost = n(10).pow(x).times('1e71')
                if (upg('E',95)) cost =n(9).pow(x).times('1e71')
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=n(tmp.E.bulk)
                if (upg('F',35)) tar = player.E.points.add(10).div('1e72').log(9).sub(gba(this.layer, this.id)).ceil().max(1)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(tar))},
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            //purchaseLimit() {return n('1e300')},
            base(){   let base = n(2)               
                return base},
            effect(x) {
                let ef = this.base().pow(x)
                return ef},
            display() { 
                return "give Em a x"+ format(this.base()) + " mult \n\
                Eb5's factor/cost multiplier are fixed. \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return mil('E',11) }
        },
        32: {
            title: "Eb6", 
            cost(x) {
                let cost = n(5).pow(x.pow(1.03)).times('1e72')
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.E.bulk
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(tar))},
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let base = n(2)      
                if (hasChallenge("E", 32))  base = base.add(challengeEffect('E',32)) 
                if (upg("E", 104))  base = base.add(0.25)                 
                return base},
            effect(x) {
                let ef = this.base().pow(x.pow(1.008))
                return ef},
            display() { 
                return "give Em a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return mil('E',11) }
        },
        33: {
            title: "Eb7", 
            cost(x) {
                let cost = n(1000).pow(x.pow(1.08)).times('1e74')
                if (upg('E',93)) cost = n(1000).pow(x.pow(1.07)).times('1e71')
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.E.bulk
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(tar))},
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let base = n(10)             
                if (hasChallenge("E", 32))  base = base.add(challengeEffect('E',32))  
                if (upg("E", 104))  base = base.add(1)
                if (upg("E", 105))  base = base.add(1)  
                if (upg("F", 14))  base = base.add(1)                                                                                              
                return base},
            effect(x) {
                let ef = this.base().pow(x.pow(1.012))
                return ef},
            display() { 
                return "give Em a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return player[this.layer].total.gte('1e73') }
        },
        41: {
            title: "Eb8", 
            cost(x) {
                let cost = n(10).pow(x).times('1e170')
                return cost
            },
            purchaseLimit() {let lim=n(20000)
                if (upg('F',45))  lim=lim.add(upgradeEffect('F',45)).min('ee300')
                return lim},
            canAfford() { if (gba(this.layer, this.id).gte(this.purchaseLimit())) return false
                return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=n(tmp.E.bulk)
                if (upg('F',35)) tar = player.E.points.add(10).log(10).sub(171).sub(gba(this.layer, this.id)).ceil().max(1)
                if (tar.gte(this.purchaseLimit().sub(gba(this.layer, this.id)))) tar=(this.purchaseLimit().sub(gba(this.layer, this.id)))
                if (gba(this.layer, this.id).gte(this.purchaseLimit())) tar=n(0)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(tar))},
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let base = n(2)               
                return base},
            effect(x) {
                let ef = this.base().pow(x)
                return ef},
            display() { 
                return "give Ek a x"+ format(this.base()) + " mult \n\
                Eb8's factor/cost multiplier are fixed. \n\
                for balance,Eb8 is hardcapped at "+format(this.purchaseLimit())+" purchases\n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return mil('E',11) }
        },
        42: {
            title: "Eb9", 
            cost(x) {
                let cost = n(6).pow(x.pow(1.03)).times('1e180')
                let sc=n(10000)
                let t=n(5000)
                let p=n(0.4)
                if (x.gte(sc)) cost=cost.pow(x.sub(sc).div(t).add(1).pow(p))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.E.bulk
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(tar))},
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let base = n(2)   
                if (upg("E", 104))  base = base.add(0.25)                 
                return base},
            effect(x) {
                let ef = this.base().pow(x.pow(1.008))
                return ef},
            display() { 
                return "give Ek a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return mil('E',15) }
        },
        22: {
            title: "Eb10", 
            cost(x) {
                let cost = n(1e6).pow(x.pow(1.4)).times('1e570')
                if (mil('F',12)) cost=n(3e5).pow(x.pow(1.38)).times('1e570')
                let sc=n(40)
                if (upg('F',22)) sc=sc.add(5)
                let p=n(0.3)
                let t=n(80)
                if (x.gte(sc)) cost =cost.pow(x.sub(sc).div(t).add(1).pow(p))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.E.bulk
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(tar))},
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            effect(x) {
                let ef = x.div(6).add(1).pow(0.7).sub(1)
                if (upg('G',22)) ef=ef.pow(upgradeEffect('G',22)) 
                ef=ef.mul(buyableEffect('G',13))
                return ef},
            display() { 
                return "boost Eb1-3 base \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return mil('E',18) }
        },
    },
    bulk(){
        let tar=n(1)
        if (upg('F', 25)) tar=tar.mul(10)
        if (upg('F', 34)) tar=tar.mul(5)
        if (upg('F', 62)) tar=tar.mul(3)
        if (upg('F', 64)) tar=tar.mul(3)
        if (mil('F', 16)) tar=tar.mul(10)
        if (upg('G', 14)) tar=tar.mul(10)
        if (upg('G', 23)) tar=tar.mul(10)
        if (mil('G',2)) tar=tar.mul(10)
        if (mil('F',17)) tar=tar.mul(player.G.total.add(10).log(10).mul(5))
        return tar 
    },
    challenges: {
        11: {//11 after E10,12 E13,13 E15
            name: "Ec1",
            completionLimit: 3,
            challengeDescription: function() {
            return "C3/D5/E2 are disabled. <br> Completion: " +ccomp("E", 11) + "/3"},
            unlocked() { return (mil("E", 2))},
            goal(){
                let a=[n('e6020'),n('e6480'),n('e7150'),n('e7150')]//7000
                return a[ccomp(this.layer,this.id)]
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "boost to E base on Eb1-2.",
            rewardEffect() {
                let b = ccomp("E", 11).pow(1.3)
                let ef1 = buyableEffect('E',11).pow(b.div(100).add(0.04))
                let ef2 = buyableEffect('E',12).pow(b.div(75).add(0.04))
                let ef = ef1.mul(ef2)
                if (ccomp("E", 11).gte(1))  return ef
                else return n(1)
            },
            rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
        12: {//21 after E15,22 E17,23 E19
            name: "Ec2",
            completionLimit: 3,
            challengeDescription: function() {
                return "Bb1-2's base are stuck at 2. <br> Completion: " +ccomp("E", 12) + "/3"},
            unlocked() { return (mil("E", 3))},
            goal(){
                let a=[n('e8280'),n('e8850'),n('e9860'),n('e9860')]//7000
                return a[ccomp(this.layer,this.id)]
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "boost to E base on Eb3.",
            rewardEffect() {
                let b=ccomp("E", 12).pow(1.35)
                let ef=buyableEffect('E',13).pow(b.div(100).add(0.05))
                if (ccomp("E", 12).gte(1))  return ef
                else return n(1)
            },
            rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
        21: {//31 after 1e45
            name: "Ec3",
            completionLimit: 3,
            challengeDescription: function() {
                return "Eb1-2's base are stuck at 2. <br> Completion: " +ccomp("E", 21) + "/3"},
            unlocked() { return (mil("E", 7))},
            goal(){
                let a=[n('e15380'),n('e16115'),n('e16530'),n('e16530')]//7000
                return a[ccomp(this.layer,this.id)]
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "boost to pts base on A-B pts upg.",
            rewardEffect() {
                let b = ccomp("E", 21).pow(1.35)
                let ef1 = upgradeEffect('A',11).pow(b.div(60).add(0.06))
                let ef2 = upgradeEffect('B',11).pow(b.div(60).add(0.06))
                let ef = ef1.mul(ef2)
                if (ccomp("E", 21).gte(1))  return ef
                else return n(1)
            },
            rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
        22: {//41 after 1e47
            name: "Ec4",
            completionLimit: 3,
            challengeDescription: function() {
                return "nerf pts based on pts. <br> Completion: " +ccomp("E", 22) + "/3 <br> currently: ^"+format(this.nerf(),6)},
            unlocked() { return (mil("E", 7))},
            goal(){
                let a=[n('e12550'),n('e12900'),n('e13200'),n('e13200')]
                return a[ccomp(this.layer,this.id)]
            },
            nerf() { return player.points.add(10).log(10).pow(-0.06).max('1e-100')},            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "boost to pts base on C-D pts upg.",
            rewardEffect() {
                let b = ccomp("E", 22).pow(1.35)
                let ef1 = upgradeEffect('C',11).pow(b.div(40).add(0.08))
                let ef2 = upgradeEffect('D',11).pow(b.div(40).add(0.08))
                let ef3 = upgradeEffect('E',11).pow(b.div(40).add(0.08))
                let ef=ef1.mul(ef2).mul(ef3)
                if (ccomp("E", 22).gte(1))  return ef
                else return n(1)
            },
            rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
        31: {//51
            name: "Ec5",
            completionLimit: 5,
            challengeDescription: function() {
                return "Bb1-2's base are stuck at 1.2,Bb3-4,Eb4 is disabled. <br> Completion: " +ccomp("E", 31) + "/5"},
            unlocked() { return (mil("E", 14))},
            goal(){
                let a=[n('e22500'),n('e24000'),n('e27300'),n('e48800'),n('e50600'),n('e50600')]
                return a[ccomp(this.layer,this.id)]
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "Bb1-5 are cheaper(-0.0025 exp per comp).",
            rewardEffect() {
                let t=ccomp("E", 31).div(400)
                let ef=n(1).sub(t)
                if (ccomp("E", 31).gte(1))  return ef
                else return n(1)
            },
            rewardDisplay() {return "^"+format(this.rewardEffect(),4)+', after scaling. \n\
                unlock new upg at 3 comp'},
        },
        32: {//61
            name: "Ec6",
            completionLimit: 5,
            challengeDescription: function() {
                return "nerf pts based on Em. <br> Completion: " +ccomp("E", 32) + "/5 <br> currently: ^"+format(this.nerf(),6)},
            unlocked() { return (mil("E", 14))},
            goal(){
                let a=[n('e13200'),n('e13700'),n('e14850'),n('e20000'),n('e25850'),n('e25850')]
                return a[ccomp(this.layer,this.id)]
            },      
            nerf() { return player.E.Em.add(10).log(10).pow(-0.2).max('1e-100')},       
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "Ec6 comp add to Eb6-7 base.",
            rewardEffect() {
                let ef=ccomp("E", 32).mul(0.2)
                if (upg('F',24)) ef=ef.mul(1.5)
                if (ccomp("E", 32).gte(1))  return ef
                else return n(0)
            },
            rewardDisplay() {return '+'+format(this.rewardEffect())},
        },
        41: {//71
            name: "Ec7",
            completionLimit: 5,
            challengeDescription: function() {
                return "Bb scaling starts 300 earlier, Bb5/Eb4 x0.4. <br> Completion: " +ccomp("E", 41) + "/5"},
            unlocked() { return (mil("E", 16))},
            goal(){
                let a=[n('e36300'),n('e60250'),n('e66600'),n('e84800'),n('e106500'),n('e106500')]//60400
                return a[ccomp(this.layer,this.id)]
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "Eb1-4 are cheaper(-0.006 exp per comp).",
            rewardEffect() {
                let t=ccomp("E", 41).mul(0.006)
                let ef=n(1).sub(t)
                if (ccomp("E", 41).gte(1))  return ef
                else return n(1)
            },
            rewardDisplay() {return "^"+format(this.rewardEffect(),3)+', after scaling.'},
        },
        42: {//7,8 aft 53,63.then 71 81 64 54 72 55 82 73 65 83 74 84 75 85
            name: "Ec8",
            completionLimit: 5,
            challengeDescription: function() {
                return "nerf pts based on pts(stronger),Bb3-5/Eb4/Em/Ek are disabled. <br> Completion: " +ccomp("E", 42) + "/5 <br> currently: ^"+format(this.nerf(),6)},
            unlocked() { return (mil("E", 16))},
            goal(){
                let a=[n('e29800'),n('e50200'),n('e60100'),n('e69870'),n('e88000'),n('e88000')]
                return a[ccomp(this.layer,this.id)]
            },
            nerf() { return player.points.add(10).log(10).pow(-0.12).max('1e-100')},            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "boost to Em/Ek eff.",
            rewardEffect() {
                let ef=ccomp("E", 42)
                if (upg('E',104)) ef=ef.mul(1.2)
                if (upg('F',24)) ef=ef.mul(1.1)
                if (ccomp("E", 42).gte(1))  return ef
                else return n(0)
            },
            rewardDisplay() {return 'Em:+'+format(this.rewardEffect()/100)+' exp,\n\
                Ek:+'+format(this.rewardEffect()/2)+' mul'},
        },
    },
    Emeffect() {
        ef = n(1)
        if (mil("E", 11)) ef=ef.mul((buyableEffect("E", 31)))
            ef=ef.mul((buyableEffect("E", 32)))
            ef=ef.mul((buyableEffect("E", 33)))
        if (upg('E',105)) ef=ef.pow(1.01)
        return ef;
    },
    emf() {
        let exp=n(0.25)
        if (mil('E',12))  exp=exp.add(0.02)
        if (upg('E',103))  exp=exp.add(0.03)  
        if (hasChallenge('E', 42))  exp = exp.add(challengeEffect('E',42).div(100))   
        if (inChallenge('E',42)) exp=0           
        let ef=player.E.Em.max(1).pow(exp)
        return ef
    },
    Ekeffect() {
        ef = n(1)
        if (mil("E", 15)) ef=ef.mul((buyableEffect("E", 41)))
            ef=ef.mul((buyableEffect("E", 42)))
        return ef;
    },
    ekf() {
        let m=n(3)
        let p=n(0.85)
        let scp=n(0.06)
        if (upg('E',101))  m=m.add(2)  
        if (hasChallenge('E', 42))  m=m.add(challengeEffect('E',42).mul(0.5))    
        if (upg('F',34))  m=m.add(0.4)  
        if (upg('G',21))  m=m.add(2)  
        if (inChallenge('E',42)) m=0 
        if (upg('F',34))  scp=scp.sub(0.015)  
        if (upg('G',21))  scp=scp.sub(0.02)  
        if (upg('G',22))  scp=scp.sub(0.02)  
        if (upg('G',23))  scp=n(0)  
        if (player.E.Ek.gte('1e5000')) p=p/(player.E.Ek.log(10).div(5000).pow(scp))             
        let ef=player.E.Ek.add(1).log(10).pow(p).mul(m)
        return ef
    },
    ekf2(){
        let ef=player.E.Ek.add(1).log(10).pow(0.12)
        return ef
    },
    update(diff) {
        if (mil("E", 11))  player.E.Em = player.E.Em.add(tmp.E.Emeffect.mul(diff))
        if (mil("E", 15))  player.E.Ek = player.E.Ek.add(tmp.E.Ekeffect.mul(diff))
    },
})
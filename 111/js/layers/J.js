addLayer("J", {
    name: "J", 
    symbol: "J", 
    position: 0, 
    startData() { return {
        unlocked:false,
		points:n(0),
        bp:n(0),
        ss:n(0),
        rankstate:n(1),
        arep:n(1),
        maxar:n(1),
    }},
    passiveGeneration(){    let p=n(0)
        return p},
    color: "#B2D0EF",
    requires: n('1e27'), 
    resource: "J", 
    baseResource: "Qol points", 
    baseAmount() {let k=player.I.qolpoints
        return k}, 
    type: "static", 
    base() {
        let b = n('1e5')
        return b
    }, 
    exponent() {
        let b=n(1.6)
        if(gba('J',101).gte(17)) b=b.sub(0.1)
        if(gba('J',102).gte(1)) b=b.sub(0.3)
        if(gba('J',102).gte(4)) b=b.div(n(1.01).pow(gba('J',102)))
        b=b.div(buyableEffect('J',42))
        return b
    }, 
    aExp() {return n(1)},
    row: 3, 
    hotkeys: [
        {key: "j", description: "J: Reset for J points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return ((mil('I',13))||player[this.layer].unlocked)},
    aMult() { 
        mult = n(1)
        return mult
    },
    branches: ['F','I'],
    softcap(){return n(Infinity)},
	softcapPower(){return n(1)},
    microtabs: {
        stuff: {       
            "Milestones": {
                unlocked() {return true},
                content: ["milestones"]},
            "Break infinity": {
                unlocked() {return true},
                content: [["display-text", function() { 
                    let s="You have <h3 style='color: #589887'>" + format(player.J.bp) + "</h3> Break points"
                    s=s+",add pts hardcap slog by <h3 style='color: #589887'>" + format(tmp.J.bpef) 
                    s=s+"<br><h4>current gain:"+format(tmp.J.bpg)+"^"+format(tmp.J.bppow)+"="+format(tmp.J.bpg.pow(tmp.J.bppow))
                    if(gba('J',15).gte(1)) s=s+"<br><h4>BP slog +"+format(tmp.J.slogs[0],3)
                    return s}]
                ,["raw-html", () => '<h4 style="opacity:.5">J exponentiates BP gain.</h4>'],["buyables",[1,2,3,4]]
                ,["buyables",[10]],["display-text", function() { 
                    let s="Rank effects:<br>"
                    s=s+"R1-edit bp1-4 eff<br>R2-J^ is cheaper<br>R3-unlock a SS bab,edit HI eff and ss2<br>R4-SS is much stronger,edit bp2/ss2<br>R6-bulk H has no req,auto max dH<br>R8-edit bp1,3,4,ss3,4 eff<br>R9-J exp to SS is 1,J^ x1.5<br>R11-unlock 2 BP bab,J^ base is 0.02,cop limit +5<br>"
                    if(mil('J',15)) s=s+"R17-J req exp -0.1,edit HI 1st eff<br>R20-unlock a BP bab,rank raise BP to 1.25 beyond 20<br>R23-start Gse at e200 i,cop1 x0.75<br>R27-cop1-2 lim +5<br>R29-r^2 ^1.2,^^ is cheaper<br>"//if(gba('J',101).gte(1)) complete curse at F5 Gse
                    if(mil('I',28)) s=s+"R100-b2b+ ^1.25,BP/SS slog +0.01<br>R111-remove 'J^' scaling,cop5 x0.9<br>R128-R^,R^2 is buffed,cop5 exp -0.05<br>R225-add an eff to Ib1,buy max 'J-',unlock Anti-replicanti.<br>"//,cop3/5 +100
                    if(mil('J',19)) s=s+"R330-ar1 ^3,ar3 is x1.5,QP exp +0.1,BP/SS slog +0.01<br>R486-buff ar effs<br>"
                    if(mil('J',13)&&player.J.rankstate.eq(1)) return s}]
                ,["display-text", function() { 
                    let s="R^2 effects:<br>"
                    s=s+"2R1-qp^ base x2,Ib3 boost Gsi at x0.8 slog,cops lim +15,J req exp -0.3<br>2R2-cop2-3 lim +30,unlock a new HI eff,edit ef1,3,5<br>2R3-J- is much cheaper,BP slog +0.012<br>2R4-r1/2^2 ^2,R^2 div J exp by 1.01<br>2R5-edit bp3,4,J^ ^1.25,unlock a new bab<br>"
                    if(mil('J',19)) s=s+"2R17-unlock a bab,buff bp/ss4 slog eff<br>2R19-buff bp/ss4 slog eff again,ard^ ^1.05<br>"
                    if(mil('I',26)&&player.J.rankstate.eq(2)) return s}]
                ,["display-text", function() { 
                    let s="R^3 effects:<br>"
                    s=s+"3R1-remove Gs base cap,bp2/ss2/ss4 slog +0.05,bp2/ss2 base is 1<br>"
                    if(mil('I',32)&&player.J.rankstate.eq(3)) return s}]
                ,['clickables',[1]]
                ]
            },
            "Slog speeder": {
                unlocked() {return true},
                content: [["display-text", function() { 
                    let s="You have <h3 style='color: #C490FF'>" + format(player.J.ss) + "</h3> Slog speeders"
                    s=s+",speed up pts slog after 1F10 by <h3 style='color: #C490FF'>" + format(tmp.J.ssef) + "</h3>x"
                    s=s+"<br><h4>current gain:"+format(tmp.J.ssg)+"^"+format(tmp.J.sspow)+"="+format(tmp.J.ssg.pow(tmp.J.sspow))
                    if(gba('J',65).gte(1)) s=s+"<br><h4>SS slog +"+format(tmp.J.slogs[1],3)
                    return s}]
                ,["raw-html", () => '<h4 style="opacity:.5">J exponentiates SS gain too,but nerfed.</h4>'],["buyables",[6,7,8]]]
            },
            "Anti-replicanti": {
                unlocked() {return gba('J',101).gte(225)},
                content: [["display-text", function() { 
                    let s="You have <h3 style='color:rgb(56, 178, 117)'>" + format(player.J.arep) + "</h3> Anti-replicanti(best:<h3 style='color:rgb(56, 178, 117)'>" + format(player.J.maxar) + "</h3>),which:<br>"
                    s=s+"add BP/SS's total slog by <h3 style='color:rgb(56, 178, 117)'>" + format(tmp.J.repef[0],3) + "</h3><br>"
                    if(gba('J',211).gte(1)) s=s+"add I gain exp by <h3 style='color:rgb(56, 178, 117)'>" + format(tmp.J.repef[1],3) + "</h3><br>"
                    if(gba('J',211).gte(2)) s=s+"add QP slog by <h3 style='color:rgb(56, 178, 117)'>" + format(tmp.J.repef[2],3) + "</h3><br>"
                    return s}],
                    ["display-text", function() { 
                        let s=" <br>"
                        if(mil('J',19)) s=s+"AR above 1e4000 are x<h3 style='color:rgb(178, 56, 162)'>" + format(tmp.J.repdil) + "</h3> faster<br>"
                        return s}],
                    ["raw-html", () => '<h4 style="opacity:.5">All effects are based on max AR.</h4>'],
                    ["display-text", function() { 
                        let s="mult:" + format(tmp.J.repg[1]) + "x interval:" + format(tmp.J.repg[0],3) + "s<br>"
                        return s}],["buyables",[16,21]]
                ]
            },
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        // ["display-text", function(){
        //     let tot='total I:'+format(player.I.total)+'<br>'
        //     let t='current reset time:'+format(player.I.time)+'s<br>'
        //     let m='fastest:'+format(player.I.m[0])+'s   longest:'+format(player.I.m[1])+'s<br>'
        //     let s=tot+t+m
        //     return s
        // }],
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    doReset(layer){    //dont reset anything.
        if(layer=='I'){
            let keep = []
            keep.push("buyables")
            //layerDataReset(this.layer, keep)
        }
    },
    milestones:{
        0: {requirementDescription: "1F177 hardcap (1",
            done() {return tmp.H.phpb.gte(177)}, 
            effectDescription: "QP base +0.2,unlock next bp bab.",
        },
        1: {requirementDescription: "1F196 hardcap (2",
            done() {return tmp.H.phpb.gte(196)}, 
            effectDescription: "keep GG tree on I reset,auto Gc3-4p at ee20.",
        },
        2: {requirementDescription: "4 J (3",
            done() {return player.J.best.gte(4)}, 
            effectDescription: "x1.5 I,J count in BP exp +0.01.",
        },
        3: {requirementDescription: "1F325 hardcap (4",
            done() {return tmp.H.phpb.gte(325)}, 
            effectDescription: "unlock curse(in layer I).",
        },
        4: {requirementDescription: "1F520 hardcap (5",
            done() {return tmp.H.phpb.gte(520)}, 
            effectDescription: "unlock next row of bab,nerf curse's options.Ib3 now boost Gs.",
        },
        5: {requirementDescription: "1F855 hardcap (6",
            done() {return tmp.H.phpb.gte(855)}, 
            effectDescription: "edit bp1-4,autobuy bp2,c's option limit +10.",
            toggles: [ ['J',"auto1"] ]
        },
        6: {requirementDescription: "36 J (7",
            done() {return player.J.best.gte(36)}, 
            effectDescription: "unlock 2 new bab.",
        },
        7: {requirementDescription: "50 J (8",
            done() {return player.J.best.gte(50)}, 
            effectDescription: "r1^/r2^ base is 1.1,J eff exp is 1.05.",
        },
        8: {requirementDescription: "1F2800 hardcap (9",
            done() {return tmp.H.phpb.gte(2800)}, 
            effectDescription: "autobuy bp1-4,slog speed x2 after 1F10.",
            toggles: [ ['J',"auto2"] ]
        },
        9: {requirementDescription: "100 J (10",
            done() {return player.J.best.gte(100)},
            effectDescription: "auto a J.",
            toggles: [ ['J',"auto3"] ]
        },
        10: {requirementDescription: "e1e9 BP (11",
            done() {return player.J.bp.gte('ee9')}, 
            effectDescription: "c's option limit +5,edit qp^",
        },
        11: {requirementDescription: "1F32768 hardcap (12",
            done() {return tmp.H.phpb.gte(32768)}, 
            effectDescription: "autobuy qp^,bpb+,si^,unlock slog speeder.",
            toggles: [ ['J',"auto4"] ]
        },
        12: {requirementDescription: "1F66666 hardcap (13",
            done() {return tmp.H.phpb.gte(66666)}, 
            effectDescription: "unlock next HI eff and 2 SS bab.",
        },
        13: {requirementDescription: "1500 J (14",
            done() {return player.J.best.gte(1500)},
            effectDescription: "unlock BP ranks.",
        },
        14: {requirementDescription: "3000 J (15",
            done() {return player.J.best.gte(3000)}, 
            effectDescription: "autobuy ss1-4.",
            toggles: [ ['J',"auto5"] ]
        },
        15: {requirementDescription: "1e5 J (16",
            done() {return player.J.best.gte(1e5)},
            effectDescription: "bp/ss^^ is much cheaper,unlock more rank eff.",
        },
        16: {requirementDescription: "1e48 J (17",
            done() {return player.J.best.gte(1e48)}, 
            effectDescription: "autobuy row3 BP and next 4 SS bab,remove 'ssb+' scaling.",
            toggles: [ ['J',"auto6"] ]
        },
        17: {requirementDescription: "1e30 AR (18",
            done() {return player.J.maxar.gte(1e30)},
            doneColor: "rgb(56, 178, 117)",
            //notdoneColor: "rgb(89, 114, 101)",
            style: {"background-color"() {return mil('J',17)?tmp.J.milestones[17].doneColor:'BF8F8F'}},//tmp.J.milestones[17].notdoneColor
            effectDescription: "ar1 eff amt ^2,QP exp +0.05.",
        },
        18: {requirementDescription: "1e1000 AR (19",
            done() {return player.J.maxar.gte('1e1000')},
            doneColor: "rgb(56, 178, 117)",
            style: {"background-color"() {return mil('J',18)?tmp.J.milestones[18].doneColor:'BF8F8F'}},
            effectDescription: "REMOVE J exp eff to BP/SS,'J^' add to their slog,Ib1 2nd eff exp +0.02.",
        },
        19: {requirementDescription: "1e4000 AR (20",
            done() {return player.J.maxar.gte('1e4000')},
            doneColor: "rgb(56, 178, 117)",
            style: {"background-color"() {return mil('J',19)?tmp.J.milestones[19].doneColor:'BF8F8F'}},
            effectDescription: "I^/ar2 is cheaper,unlock a buyable,improve AR 1st eff.",
        },
        20: {requirementDescription: "e1e6 AR (21",
            done() {return player.J.maxar.gte('ee6')},
            doneColor: "rgb(56, 178, 117)",
            style: {"background-color"() {return mil('J',20)?tmp.J.milestones[20].doneColor:'BF8F8F'}},
            effectDescription: "unlock a buyable,bp/ss4 boost their slog,I exp +0.1.",
        },
        21: {requirementDescription: "1 total BP slog boost (22",
            done() {return tmp.J.slogs[0].gte(1)}, 
            effectDescription: "autobuy row2-3 BP bab,ar4 dont div AR,unlock next SS bab,edit R^2,ar5 ^1.05.",
            toggles: [ ['J',"auto7"] ]
        },
    },
    resetsNothing(){return mil('J',9)},
    autoPrestige() {return ((mil('J', 9)&&player.J.auto3))},
    canBuyMax() {return ((mil('J', 9)&&player.J.auto3))},
    automate(){
        if (player.J.auto1)  buyBuyable("J",12)
        if (player.J.auto2)  buyBuyable("J",11),buyBuyable("J",13),buyBuyable("J",14)
        if (player.J.auto4)  buyBuyable("J",21),buyBuyable("J",24),buyBuyable("J",25)
        if (player.J.auto5)  buyBuyable("J",61),buyBuyable("J",62),buyBuyable("J",63),buyBuyable("J",64)
        if (player.I.auto3)  buyBuyable("J",22),buyBuyable("J",23),buyBuyable("J",74)
        if (player.J.auto6)  buyBuyable("J",31),buyBuyable("J",32),buyBuyable("J",33),buyBuyable("J",34),buyBuyable("J",35),buyBuyable("J",71),buyBuyable("J",81),buyBuyable("J",85)
        if (player.I.auto5)  buyBuyable("J",161),buyBuyable("J",162)
        if (player.I.auto6)  buyBuyable("J",15),buyBuyable("J",65),buyBuyable("J",41),buyBuyable("J",43),buyBuyable("J",44),buyBuyable("J",101)
        if (player.J.auto7)  buyBuyable("J",72),buyBuyable("J",73),buyBuyable("J",75),buyBuyable("J",82),buyBuyable("J",83)
        if(mil('I',33)&&player.I.auto5) buyBuyable("J",163)
        if(gba('J',101).gte(225))  buyBuyable("J",42)
    }, 
    buyables:{
        11: {
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(1e12)) s='sc '
                if(gba(this.layer,this.id).gte(1e15)) s='sc2 '
                s=s+'bp1'
                return s
            },  
            cost(x) { 
                let c=n(10).pow(n(2).mul(x.pow(1.2))).mul('1e27')
                if(mil('J',8)) c=n(10).pow(n(2).mul(x.pow(1.2)))
                if(x.gte(1e12)) c=n(10).pow(n(10).pow(x.pow(0.09)))
                if(x.gte(1e15)) c=n(10).pow(n(10).pow(x.pow(0.15).div(5)))
                return c
            },
            bulk(){
                let t=n(gba(this.layer,this.id))
                if(mil('J',8)&&player.J.auto2)   t=player.I.qolpoints.add(10).log(10).div(2).pow(5/6).sub(1).ceil().max(gba(this.layer,this.id))
                if(t.gte(1e12)) t=player.I.qolpoints.add(10).log(10).add(10).log(10).pow(100/9).sub(1).ceil().max(gba(this.layer,this.id)).max(1e12)
                if(t.gte(1e15)) t=player.I.qolpoints.add(10).log(10).add(10).log(10).mul(5).pow(20/3).sub(1).ceil().max(gba(this.layer,this.id)).max(1e15)
                let c=this.cost(t)
                if (player.I.qolpoints.gte(c)) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return player.I.qolpoints.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=player.I.qolpoints.max(1).log(10).sub(27).max(1).pow(0.35).mul(2)    
                if(mil('I',17)) b=player.I.qolpoints.max(1).log(10).max(1).pow(0.5).mul(2)
                if(mil('J',5)) b=b.max(player.I.qolpoints.max(1).log(10).max(1).pow(0.75))
                if(gba('J',101).gte(1)) b=b.max(player.I.qolpoints.max(1).log(10).max(1).pow(1.05))//(n(10).pow(player.I.qolpoints.max(1).log(10).max(1).pow(0.75)))
                if(gba('J',101).gte(8)) b=b.max(n(10).pow(player.I.qolpoints.max(1).log(10).max(1).pow(0.18)))
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "base BP x"+ format(this.base()) + "(based on QP) \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() {return true},
            style: {'width':'130px','height':'130px'},
        },
        12: { 
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(300)) s='sc '
                if(gba(this.layer,this.id).gte(1e9)) s='sc2 '
                if(gba(this.layer,this.id).gte('1e2000')) s='sc3 '
                s=s+'bp2'
                return s
            }, 
            cost(x) { 
                let c=n(10).pow(x.pow(1.3)).mul('5e8')
                if(x.gte(300)) c=n(10).pow(x.pow(2).div(50))
                if(x.gte(1e9)) c=n(10).pow(n(10).pow(x.pow(0.15).mul(0.75)))
                if(x.gte('1e2000')) c=n(10).tetrate(x.slog().mul(1.6).add(0.5))
                return c
            },
            bulk(){
                let t=player.J.bp.add(10).log(10).mul(50).pow(0.5).sub(1).ceil().max(gba(this.layer, this.id))
                if(t.gte(1e9)) t=player.J.bp.add(10).log(10).add(10).log(10).mul(4/3).pow(20/3).ceil().max(gba(this.layer, this.id)).max(1e9)
                if(t.gte('1e2000')) t=n(10).tetrate(player.J.bp.max(10).slog().sub(0.5).mul(5/8)).sub(1).ceil().max(gba(this.layer, this.id)).max('1e2000')
                if(mil('J',5)&&player.J.auto1) setBuyableAmount(this.layer,this.id,t)
            },//player.J.bp.gte(c)&&                //let c=this.cost(t)
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer,this.id,gba(this.layer, this.id).add(1))},
            base(){   let b = player.J.bp.max(1).log(10).sub(8).max(1).pow(0.2).mul(1.5) 
                if(mil('I',17)) b=player.J.bp.max(1).log(10).max(1).pow(0.22).mul(1.5) 
                let e=n(0.25)   
                if(gba('J',101).gte(1)) e=e.add(0.05)
                if(gba('J',101).gte(4)) e=e.add(0.03)   
                e=e.add(buyableEffect('J',71))   
                if(mil('I',26)) e=e.add(buyableEffect('J',71)) 
                if(mil('J',5)) b=player.J.bp.max(1).log(10).max(1).pow(e)
                if(b.slog().gte(3.7))  b=n(10).tetrate(b.slog().mul(0.5).add(1.85))
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                if(gba('J',103).gte(1)) ef=n(10).tetrate(ef.max(10).slog().add(0.05))
                return ef},
            display() { 
                return "base BP x"+ format(this.base()) + "(based on BP) \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() {return mil('J',0)},
            style: {'width':'130px','height':'130px'},//
        },
        13: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s='sc '
                s=s+'bp3'
                return s
            }, 
            cost(x) { 
                let c=x.add(3).mul(4).pow(1.3).add('80').ceil()
                if(mil('J',8)) c=x.add(3).mul(4).pow(1.3).ceil()
                return c
            },
            bulk(){
                let t=player.I.total.pow(10/13).div(4).sub(4).ceil().max(gba(this.layer,this.id))
                if(player.J.auto2) setBuyableAmount(this.layer,this.id,t)
            },//                let c=this.cost(gba(this.layer, this.id).add(t))mil('J',8)&&
            canAfford() { return player.I.total.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b = player.I.total.max(1).log(10).sub(1.1).max(1).pow(1.5).mul(2)  
                if(mil('I',17)) b=player.I.total.max(1).log(2).max(1).pow(3).mul(2)   
                if(mil('J',5)) b=b.max(player.I.total.max(1).log(2).pow(5)) 
                if(mil('J',8)) b=b.max(n(10).pow(player.I.total.add(1).log(10).pow(0.8).mul(3))) 
                if(gba('J',101).gte(1)) b=n(10).pow(player.I.total.add(1).log(10).pow(0.9).mul(3))
                if(gba('J',101).gte(8)) b=n(10).pow(player.I.total.add(1).log(10).pow(1.25).mul(3))
                if(gba('J',101).gte(128)) b=b.max(n(10).pow(player.I.total.add(1).log(10).pow(1.6))) 
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "base BP x"+ format(this.base()) + "(based on I) \n\
                Cost: " + format(this.cost()) + " I(dont spend) \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() {return mil('I',15)},
            style: {'width':'130px','height':'130px'},
        },
        14: { 
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(100)) s='sc '
                s=s+'bp4'
                return s
            },  
            cost(x) { 
                let c=x.add(5).pow(2).mul(400).ceil()
                if(x.gte(100)) c=n(10).pow(x.pow(0.35).add(1.5))
                return c
            },
            bulk(){
                let t=player.I.si.add(10).log(10).sub(1.5).pow(20/7).sub(1).ceil().max(gba(this.layer,this.id))
                if(player.J.auto2) setBuyableAmount(this.layer,this.id,t)
            },//   if (player.I.si.gte(c))mil('J',8)&&                let c=this.cost(t)
            canAfford() { return player.I.si.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b = player.I.si.max(1).log(10).max(1).pow(3).mul(2)  
                if(mil('J',5)) b=b.max(player.I.si.max(1).log(2).pow(4)) 
                if(gba('J',101).gte(1)) b=b.max(n(10).pow(player.I.si.max(1).log(10).pow(0.8)))
                if(gba('J',101).gte(8)) b=b.max(n(10).pow(player.I.si.max(1).log(10).pow(0.95)))
                if(mil('I',25)) b=b.max(n(10).pow(player.I.si.max(1).log(10).pow(1.05)))
                if(gba('J',102).gte(5))  b=b.max(n(10).pow(player.I.si.max(1).log(10).pow(1.3)))
                if(gba('J',102).gte(17))  b=n(10).pow(n(10).pow(player.I.si.max(1).log(10).pow(0.5)))
                if(gba('J',103).gte(1)) b=n(10).tetrate(b.max(10).slog().add(0.05))
                return b},
            effect(x) { 
                let e=n(1)
                let ef=[n(1),n(0)]
                ef[0]=this.base().pow(x.pow(e))
                ef[1]=ef[0].max(1).slog().mul(0.8).div(500)
                if(gba('J',102).gte(17)) ef[1]=ef[0].max(1).slog().mul(0.8).div(400)
                if(gba('J',102).gte(19)) ef[1]=ef[0].max(1).slog().mul(0.85).div(200)
                return ef},
            display() { 
                let s=''
                if(mil('J',20)) s=s+'<br><h4 style="color:rgb(21, 74, 83)">(and +'+ format(this.effect()[1],3)+' slog)'
                return "base BP x"+ format(this.base()) + "(based on SI) \n\
                Cost: " + format(this.cost()) + " SI(dont spend) \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()[0])+s},
            unlocked() {return mil('I',16)},
            style: {'width':'130px','height':'130px'},
        },
        15: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s='sc '
                s=s+'bp^^'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.mul(0.01).add(2.5))
                if(mil('J',15)) c=n(10).tetrate(x.mul(0.008).add(2.3))
                if(gba('J',101).gte(29)) c=n(10).tetrate(x.mul(0.0075).add(2.1))
                if(gba('J',102).gte(5))  c=n(10).tetrate(x.mul(0.007).add(2.1))
                return c
            },
            bulk(){
                let t=player.J.bp.max(10).slog().sub(2.1).mul(1000/7).sub(1).ceil().max(gba(this.layer,this.id))
                if(player.I.auto6) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.001)  
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "BP slog +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return mil('J',6)},
            style: {'width':'130px','height':'130px'},
        },
        21: { 
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(1e10)) s='sc '
                s=s+'qp^'
                return s
            },  
            cost(x) { 
                let c=n(10).pow(n(5).mul(x.pow(1.5))).mul('1e250')
                if(mil('J',11)) c=n(10).pow(n(5).mul(x.pow(1.5)))
                if(x.gte(1e10)) c=n(10).pow(n(10).pow(x.pow(0.12)))
                return c
            },
            bulk(){
                let t=player.I.qolpoints.add(10).log(10).div(5).pow(2/3).sub(1).ceil().max(1)
                if(t.gte(1e10)) t=player.I.qolpoints.add(10).log(10).add(10).log(10).pow(25/3).ceil().max(gba(this.layer, this.id)).max(1e10)
                if(player.J.auto4) setBuyableAmount(this.layer,this.id,t)
            },//player.I.qolpoints.gte(c)                let c=this.cost(t)
            canAfford() { return player.I.qolpoints.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer,this.id,gba(this.layer, this.id).add(1))},
            base(){   let b=player.I.qolpoints.max(1).log(10).max(1).pow(0.5).div(2)    
                if(mil('J',10)) b=player.I.qolpoints.max(1).log(10).max(1).pow(0.55) 
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "QP x"+ format(this.base()) + "(based on QP) \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() {return mil('J',4)},
            style: {'width':'130px','height':'130px'},
        },
        22: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s='sc '
                s=s+'r1^'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.add(10).log(10).pow(0.65).add(1.4).max(1))
                if(mil('I',25)) c=n(10).tetrate(x.add(10).log(10).pow(0.48).add(1))
                if(gba('J',101).gte(128)) c=n(10).tetrate(x.add(10).log(10).pow(0.32).add(1))
                return c
            },
            bulk(){
                let t=n(10).pow(player.J.bp.add(10).slog().sub(1).pow(25/12)).sub(1).ceil().max(gba(this.layer,this.id))
                if(gba('J',101).gte(128)) t=n(10).pow(player.J.bp.add(10).slog().sub(1).pow(25/8)).sub(1).ceil().max(gba(this.layer,this.id))
                let c=this.cost(t)
                if (player.I.auto3) setBuyableAmount(this.layer,this.id,t)
            },//player.J.bp.gte(c)&&
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(1.05)  
                if(mil('J',7)) b=n(1.1)
                return b},
            effect(x) { 
                let e=n(1)
                if(mil('I',22)) e=e.add(0.05).add(buyableEffect('J',32))
                let ef=this.base().pow(x.pow(e))
                ef=n(10).tetrate(ef.max(1).slog().add(buyableEffect('J',72)))
                return ef},
            display() { 
                return "Ib2-3 eff ^"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() {return mil('J',4)},
            style: {'width':'130px','height':'130px'},
        },
        23: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s='sc '
                s=s+'r2^'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.add(10).log(10).pow(0.7).add(1.5).max(1))
                if(mil('I',25)) c=n(10).tetrate(x.add(10).log(10).pow(0.5).add(1))
                if(gba('J',101).gte(128)) c=n(10).tetrate(x.add(10).log(10).pow(0.35).add(1))
                return c
            },
            bulk(){
                let t=n(10).pow(player.J.bp.add(10).slog().sub(1).pow(2)).sub(1).ceil().max(gba(this.layer,this.id))
                if(gba('J',101).gte(128)) t=n(10).pow(player.J.bp.add(10).slog().sub(1).pow(20/7)).sub(1).ceil().max(gba(this.layer,this.id))
                let c=this.cost(t)
                if (player.I.auto3) player[this.layer].buyables[this.id]=t
            },//player.J.bp.gte(c)&&
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(1.05)  
                if(mil('J',7)) b=n(1.1)
                return b},
            effect(x) { 
                let e=n(1)
                if(mil('I',22)) e=e.add(0.05).add(buyableEffect('J',33))
                let ef=this.base().pow(x.pow(e))
                ef=n(10).tetrate(ef.max(1).slog().add(buyableEffect('J',72)))
                return ef},
            display() { 
                return "Ib5-8 eff ^"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() {return mil('J',4)},
            style: {'width':'130px','height':'130px'},
        },
        24: { 
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(1e18)) s='sc '
                s=s+'bpb+'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.add(10).log(10).pow(0.4).add(1.5))
                if(x.gte(1e18)) c=n(10).tetrate(x.log(10).pow(0.75).div(2).add(0.4))
                return c
            },
            bulk(){
                let t=n(10).pow(player.J.bp.add(10).slog().sub(1.5).pow(2.5)).sub(1).ceil().max(gba(this.layer,this.id))
                if(t.gte(1e18)) t=n(10).pow(player.J.bp.add(10).slog().sub(0.4).mul(2).pow(4/3)).sub(1).ceil().max(gba(this.layer,this.id)).max(1e18)
                if (player.J.auto4) player[this.layer].buyables[this.id]=t
            },//player.J.bp.gte(c)&&                let c=this.cost(t)
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.05)  
                if(gba('J',103).gte(1)) b=n(1)
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "BP effect base +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return mil('I',19)},
            style: {'width':'130px','height':'130px'},
        },
        25: { 
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(300)) s='sc '
                s=s+'si^'
                return s
            },  
            cost(x) { 
                let c=n(10).pow(x.add(50).pow(3).div(100))
                if(x.gte(300)) c=n(10).pow(n(10).pow(x.sub(160).pow(0.35)))
                return c
            },
            bulk(){
                let t=player.I.qolpoints.add(10).log(10).mul(100).pow(1/3).sub(51).ceil().max(gba(this.layer, this.id))
                if(t.gte(301)) t=player.I.qolpoints.add(10).log(10).add(10).log(10).pow(20/7).add(159).ceil().max(gba(this.layer, this.id)).max(300)
                if(player.J.auto4) setBuyableAmount(this.layer,this.id,t)
            },//player.I.qolpoints.gte(c)&& mil('J',11)&&               let c=this.cost(t)
            canAfford() { return player.I.qolpoints.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer,this.id,gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.01)  
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "SI gain exp +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return mil('J',6)},
            style: {'width':'130px','height':'130px'},
        },
        31: {
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(160)&&!gba('J',101).gte(111)) s='sc '
                s=s+'J^'
                return s
            },  
            cost(x) { 
                let c=n(10).pow(n(10).pow(x.add(10).pow(0.66).add(1)))
                if(gba('J',101).gte(2)) c=n(10).pow(n(10).pow(x.add(10).pow(0.6)))
                if(x.gte(160)&&!gba('J',101).gte(111)) c=n(10).pow(n(10).pow(x.sub(100).pow(0.8)))
                return c
            },
            bulk(){
                let t=player.I.qolpoints.max(10).log(10).max(10).log(10).pow(5/4).add(99).ceil().max(gba(this.layer,this.id))
                if(gba('J',101).gte(111)) t=player.I.qolpoints.max(10).log(10).max(10).log(10).pow(5/3).sub(11).ceil().max(gba(this.layer,this.id))
                if(player.J.auto6) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return player.I.qolpoints.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.01)
                if(gba('J',101).gte(9)) b=b.add(0.005)
                if(gba('J',101).gte(11)) b=b.add(0.005)
                return b},
            effect(x) { 
                let e=[n(1),n(0.9)]
                if(gba('J',102).gte(5)) e[0]=e[0].add(0.25)
                if(gba('J',102).gte(19)) e[1]=e[1].add(0.05)
                let ef=[n(0),n(0)]
                ef[0]=this.base().mul(x.pow(e[0]))
                ef[1]=x.add(2).log(2).add(1).pow(e[1]).mul(player.J.points.max(1).slog()).div(2000)
                if(gba('J',102).gte(19)) ef[1]=x.add(2).log(2).add(1).pow(e[1]).mul(player.J.points.max(1).slog()).div(1500)
                return ef},
            display() { 
                let s=''
                if(mil('J',18)) s=s+'<br><h4 style="color:rgb(21, 74, 83)">(and +'+ format(this.effect()[1],3)+' slog)'
                return "J exp to BP +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect()[0])+s},
            unlocked() {return mil('I',22)},
            style: {'width':'130px','height':'130px'},
        },
        32: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s='sc '
                s=s+'r1^2'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.add(10).log(10).pow(0.8).add(2))
                if(gba('J',101).gte(11)) c=n(10).tetrate(x.add(10).log(10).pow(0.65).add(2))
                if(gba('J',102).gte(5)) c=n(10).tetrate(x.add(10).log(10).pow(0.55).add(2))
                if(gba('J',101).gte(128)) c=n(10).tetrate(x.add(10).log(10).pow(0.4).add(1.5))
                return c
            },
            bulk(){
                let t=n(10).pow(player.J.bp.max(10).slog().sub(2).pow(20/11)).sub(11).ceil().max(gba(this.layer,this.id))
                if(gba('J',101).gte(128)) t=n(10).pow(player.J.bp.max(10).slog().sub(1.5).pow(5/2)).sub(11).ceil().max(gba(this.layer,this.id))
                if(player.J.auto6) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.02)  
                if(mil('I',25)) b=b.add(0.01)
                return b},
            effect(x) { 
                let e=n(1)
                if(gba('J',101).gte(29)) e=e.add(0.2)
                if(gba('J',102).gte(4)) e=e.add(0.8)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "r1^ exp +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return mil('I',22)},
            style: {'width':'130px','height':'130px'},
        },
        33: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s='sc '
                s=s+'r2^2'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.add(10).log(10).pow(0.82).add(2).max(1))
                if(gba('J',101).gte(11)) c=n(10).tetrate(x.add(10).log(10).pow(0.66).add(2).max(1))
                if(gba('J',102).gte(5)) c=n(10).tetrate(x.add(10).log(10).pow(0.6).add(2).max(1))
                if(gba('J',101).gte(128)) c=n(10).tetrate(x.add(10).log(10).pow(0.4).add(1.6))
                return c
            },
            bulk(){
                let t=n(10).pow(player.J.bp.max(10).slog().sub(2).pow(5/3)).sub(11).ceil().max(gba(this.layer,this.id))
                if(gba('J',101).gte(128)) t=n(10).pow(player.J.bp.max(10).slog().sub(1.6).pow(5/2)).sub(11).ceil().max(gba(this.layer,this.id))
                if(player.J.auto6) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.02)  
                if(mil('I',25)) b=b.add(0.01)
                return b},
            effect(x) { 
                let e=n(1)
                if(gba('J',101).gte(29)) e=e.add(0.2)
                if(gba('J',102).gte(4)) e=e.add(0.8)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "r2^ exp +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return mil('I',22)},
            style: {'width':'130px','height':'130px'},
        },
        34: { 
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(40)) s='sc '
                if(gba(this.layer,this.id).gte(120)) s='sc2 '
                if(gba(this.layer,this.id).gte(720)) s='sc3 '
                s=s+'C-'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.add(10).log(10).pow(0.6).add(2).max(1))
                if(x.gte(40)) c=n(10).tetrate(x.pow(0.3).mul(0.1).add(3).max(1))
                if(x.gte(120)) c=n(10).tetrate(x.pow(0.5).mul(0.04).add(3).max(1))
                if(x.gte(720)) c=n(10).tetrate(x.pow(0.72).mul(0.01).add(3).max(1))
                return c
            },
            bulk(){
                let t=player.J.bp.max(10).slog().sub(3).mul(25).pow(2).sub(1).ceil().max(gba(this.layer,this.id))
                if(t.gte(720)) t=player.J.bp.max(10).slog().sub(3).mul(100).pow(25/18).sub(1).ceil().max(gba(this.layer,this.id)).max(720)
                if(player.J.auto6) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(1.01)  
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "curse option 1-3 eff /"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: /" + format(this.effect())},
            unlocked() {return (gba('J',101).gte(11))},
            style: {'width':'130px','height':'130px'},
        },
        35: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s='sc '
                s=s+'GsC'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.add(10).log(10).pow(0.45).add(2.1).max(1))
                return c
            },
            bulk(){
                let t=n(10).pow(player.J.bp.max(10).slog().sub(2.1).pow(20/9)).sub(11).ceil().max(gba(this.layer,this.id))
                if(player.J.auto6) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(2)  
                return b},
            effect(x) { 
                let e=n(1)
                let ef=[n(0),n(0)]
                ef[0]=this.base().pow(x.pow(e))
                ef[1]=n(10).pow(ef[0].max(1).log(10).pow(0.33))
                return ef},
            display() { 
                let s=''
                if(mil('I',29)) s=s+'<br><h4 style="color:rgb(65, 14, 14)">(and '+ format(this.effect()[1])+' for I)'
                return "Gs/i/e/r a after curse's nerf x"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()[0])+s},
            unlocked() {return (gba('J',101).gte(11))},
            style: {'width':'130px','height':'130px'},
        },
        41: { 
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(10)&&!mil('I',30)) s='sc '
                s=s+'qp^2'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.add(10).log(10).pow(0.9).add(2.1))
                if(x.gte(10)&&!mil('I',30)) c=n(10).tetrate(x.pow(0.6).mul(0.1).add(3))
                return c
            },
            bulk(){
                let t=n(10).pow(player.J.bp.max(10).slog().sub(2.1).pow(10/9)).sub(11).ceil().max(gba(this.layer,this.id))
                if(player.I.auto6) setBuyableAmount(this.layer,this.id,t)
            }, 
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.1)  
                if(gba('J',102).gte(1)) b=b.mul(2)
                return b},
            effect(x) { 
                let e=n(1)
                if(mil('I',32)) e=e.mul(2)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "QP base +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return gba('J',101).gte(20)},
            style: {'width':'130px','height':'130px'},
        },
        42: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(10)) s='sc '
                s=s+'J-'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.pow(0.7).mul(0.1).add(3))
                if(gba('J',102).gte(3)) c=n(10).tetrate(x.pow(0.66).mul(0.07).add(3))
                if(gba('J',102).gte(5)) c=n(10).tetrate(x.pow(0.6).mul(0.06).add(3))
                if(mil('I',30)) c=n(10).tetrate(x.pow(0.5).mul(0.05).add(3))
                return c 
            },
            bulk(){
                let t=player.J.bp.max(10).slog().sub(3).mul(20).pow(2).sub(1).ceil().max(gba(this.layer,this.id))
                if(gba('J',101).gte(225)) setBuyableAmount(this.layer,this.id,t)
            },            
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(1.02)  
                return b},
            effect(x) { 
                let e=n(1)
                e=e.add(buyableEffect('J',75))
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "J req exp /"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: /" + format(this.effect())},
            unlocked() {return mil('I',27)},
            style: {'width':'130px','height':'130px'},
        },
        43: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(10)) s='sc '
                s=s+'G^^'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.pow(0.75).mul(0.12).add(3).max(1))
                if(gba('J',102).gte(5)) c=n(10).tetrate(x.pow(0.66).mul(0.12).add(3).max(1))
                if(mil('I',30)) c=n(10).tetrate(x.pow(0.6).mul(0.1).add(3))
                return c
            },
            canAfford() { return player.J.bp.gte(this.cost()) },
            bulk(){
                let t=player.J.bp.max(10).slog().sub(3).mul(10).pow(5/3).sub(1).ceil().max(gba(this.layer,this.id))
                if(player.I.auto6) setBuyableAmount(this.layer,this.id,t)
            }, 
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.02)  
                if(upg('H',51)) b=b.add(0.01)
                if(upg('H',55)) b=b.add(0.02)
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "Gs/i/e/r slog +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return mil('I',27)},
            style: {'width':'130px','height':'130px'},
        },
        44: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(10)) s='sc '
                s=s+'qpb2'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.pow(0.75).mul(0.15).add(3).max(1))
                if(mil('I',30)) c=n(10).tetrate(x.pow(0.7).mul(0.1).add(3))
                if(gba('J',101).gte(330))  c=n(10).tetrate(x.pow(0.55).mul(0.1).add(3))
                return c
            },
            bulk(){
                let t=player.J.bp.max(10).slog().sub(3).mul(10).pow(20/11).sub(1).ceil().max(gba(this.layer,this.id))
                if(player.I.auto6) setBuyableAmount(this.layer,this.id,t)
            }, 
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(1.01)  
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "Ib1 base x"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() {return mil('I',27)},
            style: {'width':'130px','height':'130px'},
        },
        45: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(10)) s='sc '
                s=s+'I^'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.pow(0.8).mul(0.15).add(3.2).max(1))
                if(mil('I',30)) c=n(10).tetrate(x.pow(0.75).mul(0.15).add(3))
                if(mil('J',19)) c=n(10).tetrate(x.pow(0.65).mul(0.15).add(3))
                return c
            },
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(1.01)  
                b=b.add(buyableEffect('J',84))
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "I gain ^"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() {return gba('J',102).gte(5)},
            style: {'width':'130px','height':'130px'},
        },
        61: {
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(80)) s='sc '
                if(gba(this.layer,this.id).gte(600)) s='sc2 '
                s=s+'ss1'
                return s
            },  
            cost(x) { 
                let c=x.add(1).pow(0.2).mul(32768)
                if(x.gte(80)) c=x.pow(0.75).mul(3000)
                if(x.gte(600)) c=x.pow(1.15).mul(300)
                return c
            },
            bulk(){
                let t=n(0)
                if(mil('J',14)&&player.J.auto5)   t=tmp.J.bpef.div(300).pow(20/23).sub(gba(this.layer,this.id)).sub(1).ceil().max(1)
                let c=this.cost(gba(this.layer, this.id).add(t))
                if(tmp.J.bpef.gte(c)) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return tmp.J.bpef.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(2).pow(tmp.J.bpef.max(2).log(2).pow(1.25).sub(30).max(0)) 
                if(mil('I',25)) b=n(2).pow(tmp.J.bpef.max(2).log(2).pow(1.3).max(0))
                if(gba('J',101).gte(128)) n(2).pow(tmp.J.bpef.max(2).log(2).pow(2).max(0))
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "base SS x"+ format(this.base()) + "(based on BP effect) \n\
                Need: " + format(this.cost()) + " BP eff \n\
                Amount: " +format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() {return mil('J',11)},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="#C490FF"
                return {'width':'130px','height':'130px','background-color':s}},//:
        },
        62: { 
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(1000)) s='sc '
                if(gba(this.layer,this.id).gte(1e7)) s='sc2 '
                if(gba(this.layer,this.id).gte('1e2000')) s='sc3 '
                s=s+'ss2'
                return s
            }, 
            cost(x) { 
                let c=n(10).pow(x.pow(1.5)).mul('1e10')
                if(mil('J',14))  c=n(10).pow(x.pow(1.5))
                if(x.gte(1000)) c=n(10).pow(x.pow(3).div(2.5e4))
                if(x.gte(1e7)) c=n(10).pow(n(10).pow(x.pow(0.16).add(3)))
                if(x.gte('1e2000')) c=n(10).tetrate(x.slog().mul(1.6).add(0.5))
                return c
            },
            bulk(){
                let t=player.J.ss.add(10).log(10).pow(2/3).sub(1).ceil().max(gba(this.layer, this.id))
                if(t.gte(1001)) t=player.J.ss.add(10).log(10).mul(2.5e4).pow(1/3).sub(1).ceil().max(gba(this.layer, this.id)).max(1000)
                if(t.gte(1e7)) t=player.J.ss.add(10).log(10).add(10).log(10).sub(3).max(0).pow(25/4).sub(1).ceil().max(gba(this.layer, this.id)).max(1e7)  
                if(t.gte('1e2000')) t=n(10).tetrate(player.J.ss.max(10).slog().sub(0.5).mul(5/8)).sub(1).ceil().max(gba(this.layer, this.id)).max('1e2000')
                if(mil('J',14)&&player.J.auto5) setBuyableAmount(this.layer,this.id,t)
            },//player.J.ss.gte(c)&&                let c=this.cost(t)
            canAfford() { return player.J.ss.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=player.J.ss.max(1).log(10).sub(9).max(1).pow(0.2).mul(2)  
                let e=n(0.3)   
                if(gba('J',101).gte(4)) e=e.add(0.03)   
                e=e.add(buyableEffect('J',71))   
                if(gba('J',101).gte(3)) b=player.J.ss.max(1).log(10).max(1).pow(e).mul(2)
                if(b.slog().gte(3.7))  b=n(10).tetrate(b.slog().mul(0.5).add(1.85))
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                if(gba('J',103).gte(1)) ef=n(10).tetrate(ef.max(10).slog().add(0.05))
                return ef},
            display() { 
                return "base SS x"+ format(this.base()) + "(based on SS) \n\
                Cost: " + format(this.cost()) + " SS \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() {return mil('J',11)},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="#C490FF"
                return {'width':'130px','height':'130px','background-color':s}},
        },
        63: { 
            title: function(){
                let s=''
                s=s+'ss3'
                return s
            },  
            cost(x) { 
                let c=n(10).pow(x.add(30).pow(0.6).mul(2).add(5)).ceil()
                return c
            },
            bulk(){
                let t=player.I.si.add(10).log(10).sub(5).div(2).pow(5/3).sub(31).ceil().max(gba(this.layer,this.id))
                let c=this.cost(t)
                if (player.I.si.gte(c)&&mil('J',14)&&player.J.auto5) player[this.layer].buyables[this.id]=t
            },
            canAfford() { return player.I.si.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=player.I.si.max(1).log(2).pow(1.75).div(100).max(2)
                if(gba('J',101).gte(8)) b=b.max(n(10).pow(player.I.si.max(1).log(10).pow(0.75)))
                if(gba('J',102).gte(5)) b=b.max(n(10).pow(player.I.si.max(1).log(10).pow(1.1)))
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "base SS x"+ format(this.base()) + "(based on SI) \n\
                Cost: " + format(this.cost()) + " SI(dont spend) \n\
                Amount: " + format(player[this.layer].buyables[this.id]) +" \n\
                Effect: x" + format(this.effect())},
            unlocked() {return mil('J',12)},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="#C490FF"
                return {'width':'130px','height':'130px','background-color':s}},
        },
        64: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(1e25)) s='sc '
                s=s+'ss4'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.add(10).log(10).pow(0.3).add(2))
                //if(x.gte('1e25')) c=n(10).tetrate(x.slog().mul(1.6).add(0.5))
                return c
            },
            bulk(){
                let t=n(10).pow(player.J.bp.max(10).slog().sub(2).pow(10/3)).sub(11).ceil().max(gba(this.layer,this.id))
                if(player.J.auto5) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer,this.id,gba(this.layer, this.id).add(1))},
            base(){   let b=n(10).pow(n(10).pow(player.J.bp.max(10).slog().max(1).pow(4).div(100)))
                if(gba('J',101).gte(8)) b=b.max(player.J.bp.max(10).log(10).max(1))//.pow(0.8)
                if(mil('I',25)) b=player.J.bp.max(10).log(10).pow(1.2).max(1)
                if(gba('J',102).gte(5)) b=player.J.bp.max(10).log(10).pow(n(1.5).add(buyableEffect('J',71))).max(1)
                if(b.slog().gte(3.7))  b=n(10).tetrate(b.slog().mul(0.5).add(1.85))
                if(gba('J',103).gte(1)) b=n(10).tetrate(b.max(10).slog().add(0.05))
                return b},
            effect(x) { 
                let e=n(1)
                let ef=[n(0),n(0)]
                ef[0]=this.base().pow(x.pow(e))
                ef[1]=ef[0].max(1).slog().mul(0.75).div(500)
                if(gba('J',102).gte(17)) ef[1]=ef[0].max(1).slog().mul(0.8).div(300)
                if(gba('J',102).gte(19)) ef[1]=ef[0].max(1).slog().mul(0.85).div(180)
                return ef},
            display() { 
                let s=''
                if(mil('J',18)) s=s+'<br><h4 style="color:rgb(21, 74, 83)">(and +'+ format(this.effect()[1],3)+' slog)'
                return "base SS x"+ format(this.base()) + "(based on BP) \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()[0])+s},
            unlocked() {return mil('J',12)},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="#C490FF"
                return {'width':'130px','height':'130px','background-color':s}},
        },
        65: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s='sc '
                s=s+'ss^^'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.mul(0.01).add(2.3))
                if(mil('J',15)) c=n(10).tetrate(x.mul(0.008).add(2.2))
                if(gba('J',101).gte(29)) c=n(10).tetrate(x.mul(0.0075).add(2))
                if(gba('J',102).gte(5))  c=n(10).tetrate(x.mul(0.007).add(2))
                return c
            },
            canAfford() { return player.J.ss.gte(this.cost()) },
            bulk(){
                let t=player.J.ss.max(10).slog().sub(2).mul(1000/7).sub(1).ceil().max(gba(this.layer,this.id))
                if(player.I.auto6) setBuyableAmount(this.layer,this.id,t)
            },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.001)  
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "SS slog +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " SS \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return gba('J',101).gte(3)},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="#C490FF"
                return {'width':'130px','height':'130px','background-color':s}},
        },
        71: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(400)) s='sc '
                s=s+'b2b+'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.pow(1.05).mul(0.02).add(3.15))
                if(mil('I',25)) c=n(10).tetrate(x.pow(0.9).mul(0.01).add(3))
                if(gba('J',102).gte(5)) c=n(10).tetrate(x.pow(0.9).mul(0.006).add(2))
                if(gba('J',101).gte(128)) c=n(10).tetrate(x.pow(0.6).mul(0.01).add(2))
                return c
            },
            bulk(){
                let t=player.J.ss.max(10).slog().sub(2).mul(500/3).pow(10/9).sub(1).ceil().max(gba(this.layer,this.id))
                if(gba('J',101).gte(128)) t=player.J.ss.max(10).slog().sub(2).mul(100).pow(5/3).sub(1).ceil().max(gba(this.layer,this.id))
                if(player.J.auto6) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return player.J.ss.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.01)  
                return b},
            effect(x) { 
                let e=n(1)
                if(gba('J',101).gte(100)) e=e.add(0.25)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "bp2/ss2 exp +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " SS \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return mil('I',24)},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="#C490FF"
                return {'width':'130px','height':'130px','background-color':s}},        
        },
        72: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(400)) s='sc '
                s=s+'r^^'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.pow(0.95).mul(0.05).add(3.5))
                return c
            },
            bulk(){
                let t=player.J.ss.max(10).slog().sub(3.5).mul(20).pow(20/19).sub(1).ceil().max(gba(this.layer,this.id))
                if(player.J.auto7) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return player.J.ss.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.05)  
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "r1/2^ slog +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " SS \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return mil('I',30)},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="#C490FF"
                return {'width':'130px','height':'130px','background-color':s}},        
        },
        73: { 
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(30)) s='sc '
                s=s+'cl+'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.pow(0.9).mul(0.03).add(3.5))//3.6
                if(x.gte(30)) c=n(10).tetrate(x.pow(0.9).mul(0.05).add(3.3))
                return c
            },
            bulk(){
                let t=player.J.ss.max(10).slog().sub(3.3).mul(20).pow(10/9).sub(1).ceil().max(gba(this.layer,this.id))
                if(player.J.auto7) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return player.J.ss.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(2)  
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "curse option 1-5 limit +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " SS \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return mil('I',30)},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="#C490FF"
                return {'width':'130px','height':'130px','background-color':s}},        
        },
        74: { 
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(400)&&!mil('J',16)) s='sc '
                if(gba(this.layer,this.id).gte(1e12)) s='sc2 '
                s=s+'ssb+'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.add(10).log(10).pow(0.45).add(1.6))
                if(x.gte(400)&&!mil('J',16)) c=n(10).tetrate(x.add(10).log(10).pow(0.6).add(1.35))
                if(x.gte(1e12)) c=n(10).tetrate(x.log(10).pow(0.8).div(2).add(1))
                return c
            },
            bulk(){
                let t=n(10).pow(player.J.ss.add(10).slog().sub(1.35).pow(5/3)).sub(1).ceil().max(gba(this.layer,this.id))
                if(mil('J',16)) t=n(10).pow(player.J.ss.add(10).slog().sub(1.6).pow(20/9)).sub(1).ceil().max(gba(this.layer,this.id))
                if(t.gte(1e12)) t=n(10).pow(player.J.ss.add(10).slog().sub(1).mul(2).pow(5/4)).sub(1).ceil().max(gba(this.layer,this.id)).max(1e12)
                if(player.I.auto3) setBuyableAmount(this.layer,this.id,t)
            },//player.J.ss.gte(t)&&mil('I',25)&&
            canAfford() { return player.J.ss.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.02)  
                if(gba('J',103).gte(1)) b=n(1)
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "SS effect base +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " SS \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return mil('I',23)},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="#C490FF"
                return {'width':'130px','height':'130px','background-color':s}},        
        },
        75: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(400)) s='sc '
                s=s+'J-^'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.pow(0.75).mul(0.16).add(3.5))
                return c
            },
            bulk(){
                let t=player.J.ss.max(10).slog().sub(3.5).mul(25/4).pow(4/3).sub(1).ceil().max(gba(this.layer,this.id))
                if(player.J.auto7) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return player.J.ss.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.01)  
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "J- exp +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " SS \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return mil('I',30)},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="#C490FF"
                return {'width':'130px','height':'130px','background-color':s}},        
        },
        81: {
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(200)&&!gba('J',101).gte(111)) s='sc '
                s=s+'J^s'
                return s
            },  
            cost(x) { 
                let c=n(10).pow(n(10).pow(x.add(10).pow(0.6).add(2)))
                if(x.gte(200)&&!gba('J',101).gte(111)) c=n(10).pow(n(10).pow(x.sub(100).pow(0.8).mul(0.75)))
                return c
            },
            bulk(){
                let t=player.I.qolpoints.max(10).log(10).max(10).log(10).sub(2).mul(4/3).pow(5/4).add(99).ceil().max(gba(this.layer,this.id))
                if(gba('J',101).gte(111)) t=player.I.qolpoints.max(10).log(10).max(10).log(10).sub(2).pow(5/3).sub(11).ceil().max(gba(this.layer,this.id))
                if(player.J.auto6) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return player.I.qolpoints.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.01)
                return b},
            effect(x) { 
                let e=[n(1),n(0.85)]
                if(gba('J',102).gte(5)) e[0]=e[0].add(0.25)
                if(gba('J',102).gte(19)) e[1]=e[1].add(0.05)
                let ef=[n(0),n(0)]
                ef[0]=this.base().mul(x.pow(e[0]))
                ef[1]=x.add(2).log(2).add(1).pow(e[1]).mul(player.J.points.max(1).slog()).div(2000)
                if(gba('J',102).gte(19)) ef[1]=x.add(2).log(2).add(1).pow(e[1]).mul(player.J.points.max(1).slog()).div(1500)
                return ef},
            display() { 
                let s=''
                if(mil('J',18)) s=s+'<br><h4 style="color:rgb(21, 74, 83)">(and +'+ format(this.effect()[1],3)+' slog)'
                return "J exp to SS +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect()[0])+s},
            unlocked() {return mil('I',23)},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="#C490FF"
                return {'width':'130px','height':'130px','background-color':s}},
        },
        82: {
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s='sc '
                s=s+'ARd^'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.pow(0.6).mul(0.05).add(4))
                return c
            },
            bulk(){
                let t=player.J.ss.max(10).slog().sub(4).mul(20).pow(5/3).sub(1).ceil().max(gba(this.layer,this.id))
                if(player.J.auto7) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return player.J.ss.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.01)
                return b},
            effect(x) { 
                let e=n(1)
                if(gba('J',102).gte(19)) e=e.add(0.1)
                if(mil('I',33)) e=e.add(0.1)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "AR above 1e4000 speed +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " SS \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return mil('I',31)},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="#C490FF"
                return {'width':'130px','height':'130px','background-color':s}},
        },
        83: {
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s='sc '
                s=s+'ARd^2'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.pow(0.6).mul(0.05).add(4))
                return c
            },
            bulk(){
                let t=player.J.bp.max(10).slog().sub(4).mul(20).pow(5/3).sub(1).ceil().max(gba(this.layer,this.id))
                if(player.J.auto7) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.01)
                return b},
            effect(x) { 
                let e=n(1)
                if(gba('J',102).gte(19)) e=e.add(0.1)
                if(mil('I',33)) e=e.add(0.1)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "AR above 1e4000 speed +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return (gba('J',102).gte(17))},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="#C490FF"
                return {'width':'130px','height':'130px','background-color':s}},
        },
        84: {
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s='sc '
                s=s+'I^+'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.pow(0.8).mul(0.1).add(4.5))
                return c
            },
            // bulk(){
            //     let t=n(10).pow(player.I.qolpoints.max(10).slog().sub(1.5).pow(2)).sub(11).ceil().max(gba(this.layer,this.id))
            //     if(player.J.auto6) setBuyableAmount(this.layer,this.id,t)
            // },
            canAfford() { return player.J.ss.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.001)
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "I^ base +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " SS \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return mil('J',21)},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="#C490FF"
                return {'width':'130px','height':'130px','background-color':s}},
        },
        85: {
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s='sc '
                s=s+'Gs^'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.add(10).log(10).pow(0.58).add(2).max(1))
                if(mil('I',25)) c=n(10).tetrate(x.add(10).log(10).pow(0.5).add(1.8).max(1))
                if(gba('J',102).gte(5)) c=n(10).tetrate(x.add(10).log(10).pow(0.5).add(1.5).max(1))
                return c
            },
            bulk(){
                let t=n(10).pow(player.I.qolpoints.max(10).slog().sub(1.5).pow(2)).sub(11).ceil().max(gba(this.layer,this.id))
                if(player.J.auto6) setBuyableAmount(this.layer,this.id,t)
            },
            canAfford() { return player.I.qolpoints.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(1.01)
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "Gs/i/e/r a after curse's nerf ^"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() {return mil('I',24)},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="#C490FF"
                return {'width':'130px','height':'130px','background-color':s}},
        },
        101: { 
            title: function(){
                let s=''
                s=s+'BP Rank '+gba(this.layer, this.id)//IMR lol
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.add(32).pow(0.2).add(1.02))
                if(mil('I',32)) c=n(10).tetrate(x.add(32).pow(0.2).add(1))
                return c
            },
            bulk(){
                let t=player.J.bp.max(10).slog().sub(1).pow(5).sub(33).ceil().max(gba(this.layer,this.id))
                if(player.I.auto6) setBuyableAmount(this.layer,this.id,t)
            }, 
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer,this.id,gba(this.layer, this.id).add(1))},
            display() { 
                return "Need: " + format(this.cost()) + " BP"},
            unlocked() {return mil('J',13)},
            style: {'width':'200px','height':'140px'},
        },
        102: { 
            title: function(){
                let s=''
                s=s+'BP R^2 '+gba(this.layer, this.id)
                return s
            },  
            cost(x) { 
                let c=x.add(20).pow(4.2).div(8400).ceil()//10,3.6,120
                if(mil('J',21)) c=c.min(x.add(30).pow(4).div(1e4).ceil())
                return c
            },
            canAfford() { return gba('J',101).gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            display() { 
                return "Need: " + format(this.cost()) + " Rank"},
            unlocked() {return mil('I',26)},
            style: {'width':'200px','height':'140px'},
        },
        103: { 
            title: function(){
                let s=''
                s=s+'BP R^3 '+gba(this.layer, this.id)
                return s
            },  
            cost(x) { 
                let c=x.add(20).pow(5).div(1.6e5).sub(1).ceil()//20,2.5,90
                return c
            },
            canAfford() { return gba('J',102).gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            display() { 
                return "Need: " + format(this.cost()) + " R^2"},
            unlocked() {return mil('I',32)},
            style: {'width':'200px','height':'140px'},
        },
        161: {
            title: function(){
                let s=''
                s=s+'ar1'
                return s
            },  
            cost(x) { 
                let c=n(10).pow(x.pow(1.3).add(130))
                if(mil('J',19)) c=n(10).pow(x.pow(1.3))
                if(mil('I',31)) c=n(10).pow(x.pow(0.95))
                return c
            },
            canAfford() { return player.I.total.gte(this.cost()) },
            bulk(){
                let t=player.I.total.max(10).log(10).pow(20/19).sub(1).ceil().max(gba(this.layer,this.id))
                if(player.I.auto5) setBuyableAmount(this.layer,this.id,t)
            },            
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.03)
                if(mil('J',19)) b=n(0.05)
                return b},
            effect(x) { 
                let e=n(1)
                if(mil('J',17)) e=n(2)
                if(gba('J',101).gte(330)) e=n(3)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "AR mult +"+ format(this.base()) + " \n\
                Need: " + format(this.cost()) + " I \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return (gba('J',101).gte(225))},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="rgb(56, 178, 117)"
                return {'width':'130px','height':'130px','background-color':s}},
        },
        162: {
            title: function(){
                let s=''
                s=s+'ar2'
                return s
            },  
            cost(x) { 
                let c=n(10).pow(x.pow(1.6).add(135))
                if(mil('J',19)) c=n(10).pow(x.pow(1.5))
                if(mil('I',31)) c=n(10).pow(x.pow(1.2))
                return c
            },
            canAfford() { return player.I.total.gte(this.cost()) },
            bulk(){
                let t=player.I.total.max(10).log(10).pow(5/6).sub(1).ceil().max(gba(this.layer,this.id))
                if(player.I.auto5) setBuyableAmount(this.layer,this.id,t)
            },       
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(1.02)
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "AR interval /"+ format(this.base()) + " \n\
                Need: " + format(this.cost()) + " I \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: /" + format(this.effect())},
            unlocked() {return (gba('J',101).gte(225))},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="rgb(56, 178, 117)"
                return {'width':'130px','height':'130px','background-color':s}},
        },
        163: {
            title: function(){
                let s=''
                s=s+'ar3'
                return s
            },  
            cost(x) { 
                let c=n(10).pow(n(2).pow(x).mul(10))
                if(mil('I',31)) c=n(10).pow(n(1.5).pow(x))
                return c
            },
            canAfford() { return player.J.arep.gte(this.cost()) },
            bulk(){
                let t=player.J.arep.max(10).log(10).max(1).log(1.5).sub(1).ceil().max(gba(this.layer,this.id))
                if(player.I.auto5) setBuyableAmount(this.layer,this.id,t)
            },  
            buy() { if(!mil('I',33)) player.J.arep=player.J.arep.div(this.cost())
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(1.05)
                if(mil('J',19)) b=n(1.1)
                if(gba('J',101).gte(330)) b=n(1.5)
                return b},
            effect(x) { 
                let e=n(1)
                if(mil('I',33)) e=n(1.25)
                if(mil('J',21)) e=n(1.6)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "AR mult x"+ format(this.base()) + " \n\
                Need: " + format(this.cost()) + " AR \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() {return (gba('J',101).gte(225))},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="rgb(56, 178, 117)"
                return {'width':'130px','height':'130px','background-color':s}},
        },
        164: {
            title: function(){
                let s=''
                s=s+'ar4'
                return s
            },  
            cost(x) { 
                let c=n(10).pow(n(2).pow(x.pow(1.3)).mul(1000))
                return c
            },
            canAfford() { return player.J.arep.gte(this.cost()) },
            buy() {  if(!mil('J',21))player.J.arep=player.J.arep.div(this.cost())
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(1.1)
                return b},
            effect(x) { 
                let e=n(1)
                if(mil('J',21)) e=e.add(0.1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "AR mult ^"+ format(this.base()) + " \n\
                Need: " + format(this.cost()) + " AR \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() {return (gba('J',101).gte(225))},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="rgb(56, 178, 117)"
                return {'width':'130px','height':'130px','background-color':s}},
        },
        165: {
            title: function(){
                let s=''
                s=s+'ar5'
                return s
            },  
            cost(x) { 
                let c=n(10).pow(n(2).pow(x.pow(1.25)).mul(4000))
                return c
            },
            canAfford() { return player.J.arep.gte(this.cost()) },
            buy() { player.J.arep=player.J.arep.div(this.cost())
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.05)
                return b},
            effect(x) { 
                let e=n(1)
                if(mil('J',21)) e=e.add(0.1)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "AR boost above 1e4000 +"+ format(this.base()) + " \n\
                Need: " + format(this.cost()) + " AR \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return (mil('J',19))},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="rgb(56, 178, 117)"
                return {'width':'130px','height':'130px','background-color':s}},
        },
        211: {
            title: function(){
                let s=''
                s=s+'AR effect'
                return s
            },  
            cost(x) { 
                let c=[n('ee7'),n('ee16'),n('ee111')]
                return c[x]
            },
            canAfford() { return player.J.arep.gte(this.cost()) },
            buy() { player.J.arep=player.J.arep.div(this.cost())
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            display() { 
                return "unlock a new AR effect \n\
                Need: " + format(this.cost()) + " AR \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                "},
            unlocked() {return (mil('J',20))},
            style: function() {let s="#BF8F8F"
                if(this.canAfford()) s="rgb(56, 178, 117)"
                return {'width':'130px','height':'130px','background-color':s}},
        },
    },
    clickables:{
        11:{
            display(){return "<<"},
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#B2D0EF":"#BF8F8F",'width':'50px','height':'50px','min-height':'50px'}},
            canClick() {return player.J.rankstate.gte(2)},
            onClick() {player.J.rankstate=player.J.rankstate.sub(1)},
            unlocked() {return mil('I',26)},
        },
        12:{
            display(){return ">>"},
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#B2D0EF":"#BF8F8F",'width':'50px','height':'50px','min-height':'50px'}},
            canClick() {return !player.J.rankstate.gte(3)},//max rank lvl
            onClick() {player.J.rankstate=player.J.rankstate.add(1)},
            unlocked() {return mil('I',26)},
        },
    },
    bpg(){
        let ef=n(10)
        ef=ef.mul(buyableEffect('J',11)).mul(buyableEffect('J',12)).mul(buyableEffect('J',13)).mul(buyableEffect('J',14)[0])
        ef=n(10).tetrate(ef.max(10).slog().add(tmp.J.slogs[0]))
        return ef
    },
    bppow(){
        let e=n(1)
        if(mil('J',2)) e=e.add(0.01)
        if(mil('J',7)) e=e.add(0.04)
        if(mil('I',22)) e=e.add(buyableEffect('J',31)[0])
        let ef=player.J.best.max(1).pow(e)
        if(mil('I',18)) ef=ef.add(tmp.I.hief[1])
        if(mil('J',12)) ef=ef.mul(tmp.I.hief[3])
        if(gba('J',101).gte(20)) ef=ef.mul(n(1.25).pow(gba('J',101).sub(20)))
        //if(gba('J',101).gte(225)) ef=ef.pow(n(10).pow(player.J.best.max(1).slog().pow(2.2)))
        return ef
    },
    bpef(){
        let b=n(10)
        let e=n(1)
        if(gba('J',101).gte(4)) e=n(1.1)
        b=b.add(buyableEffect('J',24))
        let ef=n(b).pow(player.J.bp.add(10).slog().pow(e))
        return ef
    },
    ssg(){
        let ef=n(10)
        ef=ef.mul(buyableEffect('J',61)).mul(buyableEffect('J',62)).mul(buyableEffect('J',63)).mul(buyableEffect('J',64)[0])
        ef=n(10).tetrate(ef.max(10).slog().add(tmp.J.slogs[1]))
        return ef
    },
    sspow(){
        let e=n(0.5)
        if(gba('J',101).gte(9)) e=e.add(0.5)
        if(mil('I',23)) e=e.add(buyableEffect('J',81)[0])
        let ef=player.J.best.div(600).pow(e).max(1)
        //if(gba('J',101).gte(225)) ef=ef.pow(n(10).pow(player.J.best.max(1).slog().pow(2)))
        return ef
    },
    ssef(){
        let b=n(2)
        let e=n(1)
        b=b.add(buyableEffect('J',74))
        if(gba('J',101).gte(4)) b=b.add(1),e=e.add(0.1)
        let ef=n(b).pow(player.J.ss.add(10).slog()).div(2)
        if(gba('J',101).gte(4)) ef=n(b).pow(player.J.ss.add(10).slog().pow(e))
        return ef
    },
    repg(){
        let v=n(1)
        let m=n(1.05)
        m=m.add(buyableEffect('J',161)).mul(buyableEffect('J',163)).pow(buyableEffect('J',164))
        v=v.div(buyableEffect('J',162))
        v=v.max(1e-10)
        return [v,m]
    },
    repef(){
        let e=[n(0.5),n(0.9),n(0.7),n(0)]
        if(mil('J',19)) e[0]=e[0].add(0.1)
        if(gba('J',101).gte(486)) e[0]=e[0].add(0.3),e[1]=e[1].add(0.2)
        let ef=[n(0),n(0),n(0),n(0)]
        ef[0]=player.J.maxar.max(10).slog().pow(e[0]).sub(1).div(100).max(0)
        if(gba('J',101).gte(486)) ef[0]=player.J.maxar.max(10).slog().mul(e[0]).sub(1).div(100).max(0)
        ef[1]=player.J.maxar.max(10).log(10).log(10).add(1).pow(e[1]).sub(1).div(100).max(0)
        ef[2]=player.J.maxar.max(10).slog().mul(e[2]).sub(1).div(400).max(0)
        if(mil('J',19)) ef[0]=ef[0].mul(2) 
        if(mil('I',33)) ef[0]=ef[0].mul(1.2) 
        return ef
    },
    repdil(){
        let e=n(1.5)
        e=e.add(buyableEffect('J',165))
        if(mil('I',31)) e=e.add(buyableEffect('J',82))
        if(gba('J',102).gte(17)) e=e.add(buyableEffect('J',83))
        let ef=n(1)
        ef=player.J.maxar.max(1).log(10).div(4000).add(1).log(2).max(1).pow(e)
        if(mil('I',32)) ef=ef.pow(2)
        return ef
    },
    dilrepg(){
        let ef=tmp.J.repg[1]
        if(player.J.maxar.gte('e4000')) ef=ef.pow(tmp.J.repdil)
        return ef
    },    
    slogs(){
        let ef=[n(0),n(0)]
        ef[0]=ef[0].add(buyableEffect('J',15)).add(tmp.I.hief[5])
        if(gba('J',102).gte(3)) ef[0]=ef[0].add(0.012)
        if(gba('J',101).gte(100)) ef[0]=ef[0].add(0.01),ef[1]=ef[1].add(0.01)
        ef[1]=ef[1].add(buyableEffect('J',65)).add(tmp.I.hief[5])
        if(gba('J',101).gte(225)) ef[0]=ef[0].add(tmp.J.repef[0]),ef[1]=ef[1].add(tmp.J.repef[0])
        if(mil('J',18)) ef[0]=ef[0].add(buyableEffect('J',31)[1]),ef[1]=ef[1].add(buyableEffect('J',81)[1])
        if(gba('J',101).gte(330)) ef[0]=ef[0].add(0.01),ef[1]=ef[1].add(0.01)
        if(mil('J',20)) ef[0]=ef[0].add(buyableEffect('J',14)[1]),ef[1]=ef[1].add(buyableEffect('J',64)[1])
        return ef
    },
    update(diff){
        if(player.J.best.gte(1)) player.J.bp=player.J.bp.add(tmp.J.bpg.pow(tmp.J.bppow).mul(diff))
        if(mil('J',11)) player.J.ss=player.J.ss.add(tmp.J.ssg.pow(tmp.J.sspow).mul(diff))
        if(gba('J',101).gte(225)) player.J.arep=player.J.arep.mul(tmp.J.dilrepg.pow(tmp.J.repg[0].pow(-1)).pow(diff)),player.J.maxar=player.J.maxar.max(player.J.arep)
    },
})
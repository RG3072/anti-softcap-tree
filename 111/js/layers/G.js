addLayer("G", {
    name: "G", 
    symbol: "G", 
    position: 2, 
    startData() { return {
        unlocked: false,
		points: n(0),
        Gc1p: n(0),
        Gc2p: n(0),
        Gc3p: n(0),
        Gc4p: n(0),
        Gs: n(0),
        Gsi: n(0),
        Gse: n(0),
        Gsetot: n(0),
        Gsr: n(0),
        GG: n(0),
        Gtc: n(0),
        GGtot: n(0),
    }},
    passiveGeneration(){    let p=n(0)
        if (mil("G",14)||mil('I',0)) p=p.add(1)
        return p},
    color: "#695735",
    requires: n('1e560'), 
    resource: "G", 
    baseResource: "F1", 
    baseAmount() {return player.F.F1}, 
    type: "normal", 
    exponent: 0.01, 
    gainExp() {
        let e=n(1)
        if(mil('I',0)) e=e.mul(1.03)
        return e},
    row: 3, 
    hotkeys: [
        {key: "g", description: "G: Reset for G points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return ((upg('F',65))||player[this.layer].unlocked)},
    gainMult() { 
        mult=n(1)
        mult=mult.mul(buyableEffect('G',11))
        if (upg('F',72))  mult=mult.mul(upgradeEffect('F',72))
        if (upg('F',74))  mult=mult.mul(upgradeEffect('F',74)[1])
        mult=mult.mul(tmp.G.gc2ef)
        if(mil('I',0)) mult=mult.mul(5)
        let br=n('eee10')
        if(mil('I',10)) br=n('eee7')
        if(gcs('I',44)&&player.G.points.gte(br)) mult=mult.mul('eee500')
        return mult
    },
    autoUpgrade() {return (gcs('I',102)&&!gcs('?',136))},
    branches: ['F'],
    milestones: {
        0: {requirementDescription: "30 total G (1",
            done() {return player[this.layer].total.gte('30')}, 
            effectDescription: "autobuy tickboost,buy max tickspeed.",
            toggles: [ ['G',"auto1"] ]
        },
        1: {requirementDescription: "300 total G (2",
            done() {return player[this.layer].total.gte('300')}, 
            effectDescription: "tickboost resets nothing.",
        },
        2: {requirementDescription: "2e4 total G (3",
            done() {return player[this.layer].total.gte('2e4')}, 
            effectDescription: "unlock a chal,G4/6/8 are stronger.",
        },
        3: {requirementDescription: "1e9 total G (4",
            done() {return player[this.layer].total.gte('1e9')}, 
            effectDescription: "buy max dims.",
        },
        4: {requirementDescription: "1e100 total G (5",
            done() {return player[this.layer].total.gte('1e100')}, 
            effectDescription: "autobuy Gb1-3.",
            toggles: [ ['G',"auto2"] ]
        },
        5: {requirementDescription: "1e800 total G (6",
            done() {return player[this.layer].total.gte('1e800')}, 
            effectDescription: "unlock another chal,buff F1 eff.",
        },
        6: {requirementDescription: "1e40000 total G (7",
            done() {return player[this.layer].total.gte('1e40000')}, 
            effectDescription: "edit Gb cost and buy max Gbs.",
        },
        7: {requirementDescription: "e9.25e6 total G (8",
            done() {return player[this.layer].total.gte('e9.25e6')}, 
            effectDescription: "G6 and Gc3p is stronger,unlock another chal.",
        },
        8: {requirementDescription: "e5.65e8 total G (9",
            done() {return player[this.layer].total.gte('e5.65e8')}, 
            effectDescription: "Gc1p/Gc2p exp is 0.87/0.75,Gb1 base +0.5,unlock F2.",//(coming soon)
        },
        9: {requirementDescription: "e3.7e9 total G (10",
            done() {return player[this.layer].total.gte('e3.7e9')}, 
            effectDescription: "autobuy F2 dims,Gc1p/Gc2p exp is 0.9/0.8.",
            toggles: [ ['G',"auto3"] ]
        },
        10: {requirementDescription: "e4.05e10 total G (11",
            done() {return player[this.layer].total.gte('e4.05e10')}, 
            effectDescription: "buy max F2 dims,G21 ^2,gain Gc1p passively(^0.95).",
        },
        11: {requirementDescription: "e1e11 total G (12",
            done() {return player[this.layer].total.gte('e1e11')}, 
            effectDescription: "bulk buy x10 tickboost.",
        },
        12: {requirementDescription: "e1e14 total G (13",
            done() {return player[this.layer].total.gte('e1e14')}, 
            effectDescription: "gain Gc2p passively(^0.9).",
        },
        13: {requirementDescription: function(){let s="e1e1000 total G (14"
                if(ccomp('I',22).gte(1)) s=s+' (reduced to '+format(tmp.G.m13r)+')'
                return s},
            done() {return player[this.layer].total.gte(tmp.G.m13r)}, 
            effectDescription: "gain Gc3-4p passively(^0.2).",
        },
        14: {requirementDescription: "ee1e150 total G (15",
            done() {return player[this.layer].total.gte('ee1e150')}, 
            effectDescription: "gain G passively,buy max tickboost,REMOVE 75/100 TB scaling,unlock Gs.",
        },
        15: {requirementDescription: "eeee10 total G (16",
            done() {return player[this.layer].total.gte('eeee10')}, 
            effectDescription: "G28 eff is 1.3,Gs eff exp +0.2.",
        },
        16: {requirementDescription: "eeee24 total G (17",
            done() {return player[this.layer].total.gte('eeee24')}, 
            effectDescription: "autobuy Gsb1-3.",
            toggles: [ ['G',"auto4"] ]
        },
        17: {requirementDescription: "eee8e888 total G (18",
            done() {return player[this.layer].total.gte('eee8e888')}, 
            effectDescription: "edit Gsb1 cost and buy max,edit multiple Gsb base,pts boost Gs at stronger eff.",
        },
        18: {requirementDescription: "4.127F5 total G(eeee13400) (19",//.264
            done() {return player[this.layer].total.gte('eeee13400')}, //18377 previously.(before some softcaps)
            effectDescription: "autobuy Gsb4-5,nerf Gsb1,2,4 scaling.",
            toggles: [ ['G',"auto5"] ]        
        },
        19: {requirementDescription: "5.035F5 total G(eeee108272) (20",
            done() {return player[this.layer].total.gte('eeee108272')},//107540 
            effectDescription: "dilate b1 to 1.05,b2,5 x1.1,b4,7,8 is cheaper / unlock 2 buyables.b10 x1.1 at 1e5103 Gse / b8 x1.05 at 1e5171 Gse.",
        },
        20: {requirementDescription: "6.666F5 total G(eeee4638800) (21",
            done() {return player[this.layer].total.gte('eeee4638800')}, 
            effectDescription: "autobuy Gsb7-8,unlock new Gt,b10 eff nerf is weaker / keep Gt1-2 and buff b2/t1 at 1e13144 Gse / nerf GG scaling at 1e27700 Gse / t1 ^3 and keep t3-4 at 1e49180 Gse.",
            toggles: [ ['G',"auto6"] ]        
        },
        21: {requirementDescription: "1e109722 total Gse & 1.007F6 total G(eeee1.456e10) (22",//1e111960
            done() {return player.G.Gsetot.gte('1e109722')&&player[this.layer].total.gte('eeee1.456e10')}, 
            effectDescription: "unlock a new path from 5th row,b6-9 hardcap +0.005,edit b2 cost and buy max / nerf GG sc at 311 GG / t12 raise Gsi instead at 1e260000 Gse.",
        },
        22: {requirementDescription: "465 total GG (23",
            done() {return player.G.GGtot.gte('465')}, 
            effectDescription: "unlock a qol for row 5-7 upg tree.",
        },
        23: {requirementDescription: "489 total GG (24",
            done() {return player.G.GGtot.gte('489')}, 
            effectDescription: "unlock more r8-9 upg,nerf ???.",
        },
        24: {requirementDescription: "708 total GG (25",
            done() {return player.G.GGtot.gte('708')}, 
            effectDescription: "unlock another split and another buyable for GG,b6,9,10 are cheaper.",
        },
        25: {requirementDescription: "e10635468 total Gse (26",
            done() {return player.G.Gsetot.gte('e10635468')}, //e7074100
            effectDescription: "autobuy GG gain,keep t5/8,buff r9-10,buy max b3/5/7.",//GG2 is cheaper,
            toggles: [ ['G',"auto7"] ] 
        },
        26: {requirementDescription: "1503 total GG (27",
            done() {return player.G.GGtot.gte('1503')}, 
            effectDescription: "nerf ??? and unlock the next layer.",//(coming soon)
        },
        27: {requirementDescription: "1950 total GG (28",
            done() {return player.G.GGtot.gte('1950')},
            effectDescription: "keep t6,7,13,babs cost nothing.",//for inf growth
        },
        28: {requirementDescription: "2789 total GG (29",
            done() {return player.G.GGtot.gte('2789')},
            effectDescription: "keep t19,e2e9 e nerf +0.01.",
        },
        29: {requirementDescription: "3200 total GG (30",
            done() {return player.G.GGtot.gte('3200')},
            effectDescription: "b9 is much cheaper,H4 ^1.12.",
        },
        30: {requirementDescription: "e1.34e26 total Gse (31",
            done() {return player.G.Gsetot.gte('e1.34e26')},//
            effectDescription: "sb10 limit +5,i eff exp +0.0025,unlock GsR.",
        },
        31: {requirementDescription: "1e301 total GsR (32",
            done() {return player.G.Gsr.gte('1e301')},
            effectDescription: "sb6 exp +0.03,hyper slog +0.001,unlock dH.",
        },
        32: {requirementDescription: "5e927 total GsR (33",
            done() {return player.G.Gsr.gte('5e927')},
            effectDescription: "e nerfs +0.005(improved at 3e1071),remove dH1 scaling,dHp3-4 sc -0.05,nerf rs at 1e1164/1e1284/5e1432.",
        },
        33: {requirementDescription: "e9.918e118 total Gse (34",
            done() {return player.G.Gsetot.gte('e9.918e118')},
            effectDescription: "nerf r1/dhp2,remove sb6 lim,boost dH5 at 4 dH5,boost dHs at 2e6935/5e7628 GsR.",//,GG sc slower at 1e14030
        },
        34: {requirementDescription: "e1.7e199 total Gse (35",
            done() {return player.G.Gsetot.gte('e1.7e199')},//ee415
            effectDescription: "autobuy sb6,hb1/y1 sc -0.01,nerf dH5 threshold at e1.48e480(again at e2.93e495/e2.86e603).<br>TIPS:sb6 cost jumps at 2000(10^10^x^2.25)",
            toggles: [ ['G',"auto8"] ] 
        },
        35: {requirementDescription: "e1e652 total Gse (36",
            done() {return player.G.Gsetot.gte('e1e652')},
            effectDescription: "buy max sb6,dilate ha/hy to 1.01,e 1st nerf +0.03(0.04 at ee767).",
        },
        36: {requirementDescription: "e1e1580 total Gse (37",
            done() {return player.G.Gsetot.gte('e1e1580')},
            effectDescription: "buy max r2/4,e nerf is 0.87/0.9/0.94 at e7.5e1581/ee1658/ee2010,and FINALLY REMOVE it with G75.",//
        },
        37: {requirementDescription: "e1e2125 total Gse (38",
            done() {return player.G.Gsetot.gte('e1e2125')},
            effectDescription: "i eff +0.005,H36 is massively changed,buy max sb11-12.",
        },
        // 38: {requirementDescription: "e1e2125 total Gse (39",
        //     done() {return player.G.Gsetot.gte('e1e2125')},
        //     effectDescription: "i eff +0.005,H36 is massively changed.", //removed
        // },
    },
    m13r(){
        let r=n('ee1000')
        if(n(ccomp('I',22)).gte(1)) r=n('ee250')
        if(n(ccomp('I',22)).gte(3)) r=n('ee100')
        if(n(ccomp('I',22)).gte(5)) r=n('ee40')
        if(mil('J',1)) r=n('ee20')
        return r
    },
    doReset(layer){
        if (layer=="H") {        
            let keep = ["milestones","upgrades","challenges"]//,"clickables"  //operation wall
            layerDataReset(this.layer, keep)}
        if (layer=="I") {        
            let keep = [] //{player[this.layer].challenges[11]=n(5),player[this.layer].challenges[12]=n(5)}
            //if(gcs('I',36)&&!gcs('I',46))  keep.push(["challenges",[1]])
            if(gcs('I',46))  keep.push("challenges")
            //if(gcs('I',76)) keep.push("cilckables")
            layerDataReset(this.layer, keep)
            if(gcs('I',15))  player[this.layer].milestones=[0,1]
            if(gcs('I',23))  player[this.layer].milestones.push(17)
            if(gcs('I',21))  {player[this.layer].milestones.push(25)
                player[this.layer].upgrades.push(115)}
            if(gcs('I',16))  player[this.layer].milestones.push(27,28,37)
            if(gcs('I',24))  player[this.layer].milestones.push(2,3,4,5,6,7,8,9,10,11,12,33,36)
            if(gcs('I',46))  player[this.layer].milestones.push(18,19,20,21,22,23,24,26)
            if(gcs('I',66))  player[this.layer].milestones.push(29,35)
            if(mil('I',21))  player[this.layer].milestones.push(15,16,30,31,32,34,37)//13,14,
            if(n(ccomp('I',22)).gte(1)) player[this.layer].upgrades.push(152)
            if(n(ccomp('I',22)).gte(2)) player[this.layer].upgrades.push(141,142,143,144,145)
            if(mil('I',23))  player[this.layer].upgrades.push(11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55)
            if(gcs('I',86))  player[this.layer].upgrades.push(61,62,63,64,65,134,135)
            if(mil('J',1)) {scs("G",21,1),scs("G",31,1),scs("G",32,1),scs("G",33,1),scs("G",41,1),scs("G",42,1),scs("G",43,1),scs("G",44,1),scs("G",51,1)
            ,scs("G",61,1),scs("G",62,1),scs("G",63,1),scs("G",71,1),scs("G",72,1),scs("G",73,1),scs("G",81,1),scs("G",82,1),scs("G",83,1),scs("G",91,1)
            ,scs("G",101,1),scs("G",102,1),scs("G",103,1),scs("G",104,1)
            ,scs("G",111,1),scs("G",112,1),scs("G",121,1),scs("G",122,1),scs("G",131,1)}
        }
    },
    microtabs: {
        stuff: {       
            "Main": {
                unlocked() {return true},
                content: [ ["raw-html", () => `<h4 style="opacity:.5">get G when reach 'infinity' F1<br>(like AD,but not 2^1024).</h4>`],["upgrades",[1,2,3,4,5]]]}, 
            "Milestones": {
                unlocked() {return true},
                content: ["milestones"]},
            "Buyables": {
                unlocked() {return (upg("G", 25))},
                content: [["raw-html", () => `<h4 style="opacity:.5">like Eb,Gb dont spend G.</h4>`],
                ["buyables",[1]]]},
            "Challenges": {
                unlocked() {return (mil("G",2))},
                content: [["raw-html", () => `<h4 style="opacity:.5">G chal is about F dim,dont decrease main game production.</h4>`]
                ,["display-text",  function() {if(n(ccomp("G", 11)).gte(3)) return "You have <h3 style='color: #694444'>" + format(player.G.Gc1p) + "</h3> Gc1p, mult F dims by <h3 style='color: #694444'> " + format(tmp.G.gc1ef) + "x</h3>.<br>" + "<h4>" + format(tmp.G.gc1g) + " Gc1p/s (need 1e1080 F1 in Gc1)<h4>"}],
                ["display-text", function() {if(n(ccomp("G", 12)).gte(3)) return "You have <h3 style='color: #913423'>" + format(player.G.Gc2p) + "</h3> Gc2p, mult G by <h3 style='color: #913423'> " + format(tmp.G.gc2ef) + "x</h3>.<br>" + "<h4>" + format(tmp.G.gc2g) + " Gc2p/s (need 1e3050 F1 in Gc2)<h4>"}],
                ["display-text", function() {if(n(ccomp("G", 21)).gte(3)) return "You have <h3 style='color: #72FF89'>" + format(player.G.Gc3p) + "</h3> Gc3p, Fd8 mult per buy is x<h3 style='color: #72FF89'>" + format(tmp.G.gc3ef) + " </h3>bigger.<br>" + "<h4>" + format(tmp.G.gc3g) + " Gc3p/s (need 1e168000 F1 in Gc3)<h4>"}],
                ["display-text", function() {if(n(ccomp("G", 22)).gte(3)) return "You have <h3 style='color: #D78903'>" + format(player.G.Gc4p) + "</h3> Gc4p, dim mult per buy +<h3 style='color: #D78903'>" + format(tmp.G.gc4ef,3) + "</h3>.<br>" + "<h4>" + format(tmp.G.gc4g) + " Gc4p/s (need e2.35e9 F1 in Gc4)<h4>"}],
                "challenges"]},
            // "Gc powers": {      //removed at v0.7
            //     unlocked() {return (ccomp("G", 11).gte(3))},
            //     content: [["display-text",  function() {if(ccomp("G", 11).gte(3)) return "You have <h3 style='color: #694444'>" + format(player.G.Gc1p) + "</h3> Gc1p, mult F dims by <h3 style='color: #694444'> " + format(tmp.G.gc1ef) + "x</h3>.<br>" + "<h4>" + format(tmp.G.gc1g) + " Gc1p/s (need 1e1080 F1 in Gc1)<h4>"}],
            //     ["display-text", function() {if(ccomp("G", 12).gte(3)) return "You have <h3 style='color: #913423'>" + format(player.G.Gc2p) + "</h3> Gc2p, mult G by <h3 style='color: #913423'> " + format(tmp.G.gc2ef) + "x</h3>.<br>" + "<h4>" + format(tmp.G.gc2g) + " Gc2p/s (need 1e3050 F1 in Gc2)<h4>"}],
            //     ["display-text", function() {if(ccomp("G", 21).gte(3)) return "You have <h3 style='color: #72FF89'>" + format(player.G.Gc3p) + "</h3> Gc3p, Fd8 mult per buy is x<h3 style='color: #72FF89'>" + format(tmp.G.gc3ef) + " </h3>bigger.<br>" + "<h4>" + format(tmp.G.gc3g) + " Gc3p/s (need 1e168000 F1 in Gc3)<h4>"}],
            //     ["display-text", function() {if(ccomp("G", 22).gte(3)) return "You have <h3 style='color: #D78903'>" + format(player.G.Gc4p) + "</h3> Gc4p, dim mult per buy +<h3 style='color: #D78903'>" + format(tmp.G.gc4ef,3) + "</h3>.<br>" + "<h4>" + format(tmp.G.gc4g) + " Gc4p/s (need e2.35e9 F1 in Gc4)<h4>"}],]},
            "Gs": {
                unlocked() {return (mil("G", 14))},
                content: [["raw-html", () => `<h4 style="opacity:.5">inspired by 'Plague Tree' ---Timewall warning!</h4>`]
                ,["raw-html", () => `<h4 style='color: #C52C14'>tips:you may need to refresh when you get your first Gs!</h4>`]
                ,["display-text", () => "You have <h3 style='color: #988462'>" + format(player.G.Gs) + "</h3> Gs,boost point exp^4 by <h3 style='color: #988462'> " + format(tmp.G.gsef) + "</h3>.<br>" + "<h4>" + format(tmp.G.gsb) + " Gs/s (need eee500 G)<h4>"]
                ,["display-text",function() {if(upg("G", 83)) return "You have <h3 style='color: #FF00F1'>" + format(player.G.Gsi) + "</h3> Gsi,boost Gs by lg(Gs)^<h3 style='color: #FF00F1'>" + format(tmp.G.gsief) + "</h3> (x\n\
                    <h3 style='color: #FF00F1'>" + format(tmp.G.gsir) +"</h3> Gs)<br>" + "<h4>" + format(tmp.G.gsib) + " Gsi/s (need 1e2920 Gs)<h4>"}]
                ,["display-text", function() {if(upg("G", 101)) return "You have <h3 style='color: #14FFF3'>" + format(player.G.Gse) + "</h3> Gse,boost Gsi by lg(Gsi)^<h3 style='color: #14FFF3'>" + format(tmp.G.gseef) + "</h3> (x\n\
                    <h3 style='color: #14FFF3'>" + format(tmp.G.gser) +"</h3> Gsi)<br>" + "and boost Gsi eff exp by +<h3 style='color: #14FFF3'>" + format(tmp.G.gser2) +"</h3> (at most "+format(tmp.G.ehp)+")<br>\n\
                    " + format(tmp.G.gseb) + " Gse/s (need 1e345 Gsi)<h4>"}]
                //,["raw-html", () => `<h4 style="opacity:.5">Gsb1/4/7 scaling past 500,Gsb2 scaling past 50.</h4>`]
                ,["buyables",[2,3,4,5]],["upgrades",[6,7,8,9,10,11,12,13]]],},
            "GG": {
                unlocked() {return (upg("G",115))},
                content: [["raw-html", () => `<h4 style="opacity:.5">welcome to the first upgrade tree --- strategy is significant now!</h4>`]
                ,["display-text", () => "You have <h3 style='color: #375DB4'>" + format(player.G.GG) + "</h3> GG ("+"<h3 style='color: #375DB4'>" + format(player.G.GGtot)+'</h3> total)']
                ,["buyables",[6]],"clickables"]}, 
            "GsR": {
                unlocked() {return (mil("G",30))},
                content: [["raw-html", () => `<h4 style="opacity:.5">the final part of Gs.</h4>`]
                ,["display-text", () => "You have <h3 style='color: #6DA462'>" + format(player.G.Gsr) + "</h3> GsR,raise Gse by ^<h3 style='color: #6DA462'>" + format(tmp.G.gsref,4) + "</h3> and harsh,hyper by ^\n\
                <h3 style='color: #6DA462'>"+ format(tmp.G.gsref2,4) +".<h3><br>" + "<h4>" + format(tmp.G.gsrb) + " GsR/s (need e2.5e26 Gse)<h4>"]
                ,["buyables",[7]],["upgrades",[14,15]]]},  //6DA462                                                                                                                                                                                                                                                           
        }                                                                                                                                                                                                                                                                                                                    //for convenience             
    },                                                                                                                                                                                                                                                                                                                                                 //for convenience
    softcap(){return n(Infinity)},
	softcapPower(){return n(1)},
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    upgrades: {
        11: {
            title:'G1',
            description: "all F dim x2.",         
            cost:n(1),
        },
        12: {
            title:'G2',
            description: "F dim mult per buy +0.1.",         
            cost:n(1),
            unlocked() { return (upg(this.layer, 11))},
        },
        13: {
            title:'G3',
            description: "F dim scaling exp -0.1.",         
            cost:n(1),
            unlocked() { return (upg(this.layer, 12))},
        },
        14: {
            title:'G4',
            description: "bulk buy x10 Bb/Eb,total G raise F.",         
            cost:n(2),
            effect()  { 
                let ef = player.G.total.add(10).log(10).pow(0.3).div(10).add(1)
                if (mil('G',2)) ef = player.G.total.add(10).log(10).pow(0.35).div(8).add(1)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),4) },
            unlocked() { return (upg(this.layer, 13))},
        },
        15: {
            title:'G5',
            description: "F dim scaling exp -0.1 again,F30 ^1.1 and REMOVE Bb first scaling.",         
            cost:n(8),
            unlocked() { return (upg(this.layer, 14))},
        },
        21: {
            title:'G6',
            description: "Ek is even stronger,total G boost all dims,Eb10 is also mult. at ^0.25 effect.",         
            cost:n(25),
            effect()  { 
                let exp1=n(0.66)
                let sc1=n(0.945)
                if(upg('G',45)) sc1=sc1.add(0.025)
                if(upg('G',25)) exp1=exp1.add(0.14)
                if(mil('G',2)) exp1=exp1.add(0.15)
                if(upg('G',32)) exp1=exp1.add(0.15)
                if(upg('G',43)) exp1=exp1.add(0.1)
                let ef1= player.G.total.pow(exp1).div(5).add(1)
                if(ef1.gte('1e100')) ef1=n(10).pow(ef1.div('1e99').log(10).pow(sc1)).mul('1e100')
                if(ef1.gte('1e1000')&&!mil('G',7)) ef1=n(10).pow(ef1.div('1e999').log(10).pow(0.965)).mul('1e1000')
                let exp2=n(0.25)
                if(upg('G',24)) exp2=exp2.add(0.05)
                if(mil('G',2)) exp2=exp2.add(0.05)
                if(mil('F',17)) exp2=exp2.add(0.05)
                if(upg('G',32)) exp2=exp2.add(0.1)
                let ef2= buyableEffect('E',22).pow(exp2)
                return [ef1,ef2];
            },
            effectDisplay() { return 'F dim:x'+format(this.effect()[0])+'<br> Eb10 eff:x'+format(this.effect()[1]) },
            unlocked() { return (upg(this.layer, 15))},
        },
        22: {
            title:'G7',
            description: "Ek is even stronger,total G raise Eb10,F dim scaling exp -0.1 again.",         
            cost:n(40),
            effect()  { 
                let ef = player.G.total.add(10).log(10).pow(0.2).div(100).add(1)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),4) },
            unlocked() { return (upg(this.layer, 21))},
        },
        23: {
            title:'G8',
            description: "REMOVE Ek nerf,total G raise F30,F dim scaling exp -0.1 again,bulk buy x10 Bb/Eb.",         
            cost:n(60),
            effect()  { 
                let ef = player.G.total.add(10).log(10).pow(0.27).div(70).add(1)
                if(mil('G',2)) ef = player.G.total.add(10).log(10).pow(0.3).div(50).add(1)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),4) },
            unlocked() { return (upg(this.layer, 22))},
        },
        24: {
            title:'G9',
            description: "G6 2nd eff exp +0.05,dim mult per buy +0.1.",         
            cost:n(200),
            unlocked() { return (upg(this.layer, 23))},
        },
        25: {
            title:'G10',
            description: "G6 1st eff exp is 0.8,F dim scaling exp -0.04,Bb5 is also mult. at ^0.1 effect and unlock buyables.",         
            cost:n(800),
            effect()  { 
                let exp=n(0.1)
                if(mil('F',17)) exp=exp.add(0.025)
                if(upg('G',32)) exp=exp.add(0.025)
                let ef= buyableEffect('B',23).pow(exp)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 24))},
        },/*12345432*/
        31: {
            title:'G11',
            description: "Gb2-3 are cheaper,boost F1 eff above 1e1200.",         
            cost:n('4e9'),
            unlocked() { return (ccomp("G", 11).gte(3))},
        },
        32: {
            title:'G12',
            description: "G6/10 are stronger.REMOVE Bb second scaling,Ek mults Bb5 instead.",         
            cost:n('4e12'),
            unlocked() { return (upg(this.layer, 31))},
        },
        33: {
            title:'G13',
            description: "Gb2 ^2,tickboost eff mult +0.005.",         
            cost:n('1e28'),
            unlocked() { return (upg(this.layer, 32))},
        },
        34: {
            title:'G14',
            description: "Gc1p/Gc2p gain exp +0.02.",         
            cost:n('1e218'),
            unlocked() { return (upg(this.layer, 33))},
        },
        35: {
            title:'G15',
            description: "F1 eff is better,F dim scaling exp -0.01.",         
            cost:n('1e405'),
            unlocked() { return (upg(this.layer, 34))},
        },
        41: {
            title:'G16',
            description: "G raise Gcps.",         
            cost:n('e3850000'),
            effect()  { 
                let exp=n(0.015)
                if(upg('G',44)) exp=exp.add(0.005)
                if(upg('G',45)) exp=exp.add(0.025)
                if(upg('G',54)) exp=exp.add(0.015)
                let ef=player.G.points.add(10).log(10).pow(exp)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),3) },
            unlocked() { return (ccomp("G", 21).gte(5))},
        },
        42: {
            title:'G17',
            description: "Gc1p-Gc2p exp+0.02,buff Gbs.",         
            cost:n('e5050000'),
            unlocked() { return (upg(this.layer, 41))},
        },
        43: {
            title:'G18',
            description: "Gc1p/Gc2p exp are 0.82/0.7,G6 exp is 1.2,F1 eff is better.",         
            cost:n('e1.782e7'),
            unlocked() { return (upg(this.layer, 42))},
        },
        44: {
            title:'G19',
            description: "G16 exp is 0.02,REMOVE some F upgs' hardcap.",         
            cost:n('e2.96e7'),
            unlocked() { return (upg(this.layer, 43))},
        },
        45: {
            title:'G20',
            description: "G16 exp is 0.04,Gc3 eff base is 0.1,G6 is stronger,Gc2 eff ^2.",         
            cost:n('e9.66e7'),
            unlocked() { return (upg(this.layer, 44))},
        },
        51: {
            title:'G21',
            description: "Gc4p boost F2 dims,boost its exp by 0.01.",         
            cost:n('e1.6e10'),
            effect()  { 
                let exp=n(1.25)
                if(mil('G',10)) exp=exp.mul(2)
                let ef=player.G.Gc4p.add(10).log(10).pow(exp).div(50).add(0.98)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (mil(this.layer,9))},
        },
        52: {
            title:'G22',
            description: "TB is quadratic in Gc4,Gb1 ^1.3,unlock another 2 F2 dim.",         
            cost:n('e3.4e10'),
            unlocked() { return (upg(this.layer, 51))},
        },
        53: {
            title:'G23',
            description: "Gcps eff are better,F1 boost F2.",         
            cost:n('e4.13e10'),
            effect()  { 
                let exp=n(0.4)
                let ef=player.F.F1.add(10).log(10).pow(exp)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 52))},
        },
        54: {
            title:'G24',
            description: "G16 exp is 0.055,G21 boost tickspeed.",         
            cost:n('e2.25e12'),
            effect()  { 
                let exp=n(0.25)
                if(upg('G',55)) exp=exp.add(0.05)
                let o=upgradeEffect('G',51)
                let ef=o.add(10).log(10).pow(exp).div(4).add(0.75)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect(),3) },
            unlocked() { return (upg(this.layer, 53))},
        },
        55: {
            title:'G25',
            description: "Gc3p eff exp is 0.25,G24 exp is 0.3,gain Gc powers at full F1.",         
            cost:n('ee1e166'),
            unlocked() { return (mil(this.layer, 13))},
        },
        //Gs upgs
        61: {
            title:'G26',
            description: "Gsb1 cost base is 5.",         
            cost:n('1e7'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (mil(this.layer, 14))},
        },
        62: {
            title:'G27',
            description: "Gs eff ^1.5,base ^2.",         
            cost:n('1e36'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (upg(this.layer, 61))},
        },
        63: {
            title:'G28',
            description: "unlock another buyable,Gsb1 eff base x1.2.",         
            cost:n('1e117'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (upg(this.layer, 62))},
        },
        64: {
            title:'G29',
            description: "Gsb2 base x1.15,Gs eff exp +0.4.",         
            cost:n('2e229'),//230
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (upg(this.layer, 63))},
        },
        65: {
            title:'G30',
            description: "Gs buyables are cheaper based on Gs upg amount.",         
            cost:n('2e305'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            effect()  { 
                let b = n(player[this.layer].upgrades.length)
                let c=n(0.995)
                if(upg('G',95)) c=n(0.994)
                if(upg('G',111)) c=n(0.99)
                let ef=n(c).pow(b.sub(25).max(0))
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),4) },
            unlocked() { return (upg(this.layer, 64))},
        },
        71: {
            title:'G31',
            description: "Gsb1 base x1.1,Gs eff exp +0.4.",         
            cost:n('1e432'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (upg(this.layer, 65))},
        },
        72: {
            title:'G32',
            description: "logGs boost Gs,unlock another buyable.",         
            cost:n('1e615'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            effect()  { 
                let ef = player[this.layer].Gs.add(10).log(10).pow(6)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 71))},
        },
        73: {
            title:'G33',
            description: "G30 applies to Gsb3.",         
            cost:n('1e851'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (upg(this.layer, 72))},
        },
        74: {
            title:'G34',
            description: "Gsb2 boost Gsb1 base.",         
            cost:n('1e924'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            effect()  { 
                let b=n(gba('G',22))
                let ef = b.pow(0.75).div(80).add(1)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 73))},
        },//1e1178
        75: {
            title:'G35',
            description: "boost Gsb1 base based on Gs upg amount.",         
            cost:n('5e1154'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            effect()  { 
                let b = n(player[this.layer].upgrades.length)
                let ba=n(1.008)
                if(upg('G',82)) ba=ba.add(0.002)
                let ef=n(ba).pow(b.sub(25).max(0))
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect(),4) },
            unlocked() { return (upg(this.layer, 74))},
        },
        81: {
            title:'G36',
            description: "Gs eff divide Gsb cost(^3).",         
            cost:n('5e1351'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            effect()  { 
                let exp=n(3)
                if(upg('G',82)) exp=exp.mul(1.6)
                if(upg('G',111)) exp=n(25)
                let ef=tmp.G.gsef.pow(exp)
                if(!upg('G',111)) ef=ef.min('1e1000')
                return ef;
            },
            effectDisplay() { return '/'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 75))},
        },
        82: {
            title:'G37',
            description: "Gsb1 cost base -0.2,G35 base is 1.01,G36 ^1.6.",         
            cost:n('5e1988'),//1e1995
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (upg(this.layer, 81))},
        },
        83: {
            title:'G38',
            description: "Gs eff exp +0.3,unlock Gsi.",         
            cost:n('1e2810'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (upg(this.layer, 82))},
        },
        84: {
            title:'G39',
            description: "Gs eff boost Gsi.",         
            cost:n('1e7'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            effect()  { 
                let exp=n(0.45)
                if(upg('G',92)) exp=exp.add(0.25)
                let ef=tmp.G.gsef.pow(exp)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 83))},
        },
        85: {
            title:'G40',
            description: "boost Gsb4 base based on Gs upg amount,Gsb2 cost base /2.5,Gsb4 cost base is 7.",         
            cost:n('1e40'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            effect()  { 
                let b = n(player[this.layer].upgrades.length)
                let ba=n(1.006)
                let ef=n(ba).pow(b.sub(25).max(0))
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect(),4) },
            unlocked() { return (upg(this.layer, 84))},
        },
        91: {
            title:'G41',
            description: "remove Gsb2-3 linear cost.",         
            cost:n('1e3210'),//1e3223
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (upg(this.layer, 85))},
        },
        92: {
            title:'G42',
            description: "Gsb2 cost base /2,G39 exp is 0.7.",         
            cost:n('1e4000'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (upg(this.layer, 91))},
        },
        93: {
            title:'G43',
            description: "Gsb1 cost base is 4.5,Gsb4 cost base is 5,Gsb3 provide free Gsb1.",         
            cost:n('5e90'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (upg(this.layer, 92))},
        },
        94: {
            title:'G44',
            description: "Gsb5 cost base /4,Gsb3 cost base /1000,Gsi gain exp +0.4,eff x1.2.",         
            cost:n('1e162'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (upg(this.layer, 93))},
        },
        95: {
            title:'G45',
            description: "G30 base is 0.995,Gsi gain x1.05^(Gsb1 amt),Gsi eff x1.2.",         
            cost:n('1e6072'),//6e6666
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            effect()  { 
                let b = gba('G',21)
                let ba=n(1.05)
                if(upg('G',105)) ba=ba.add(0.02)
                let ef=n(ba).pow(b)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 94))},
        },
        101: {
            title:'G46',
            description: "Gs gain base ^1.05,Gs nerf is weaker,unlock Gse.",         
            cost:n('1e290'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (upg(this.layer, 95))},
        },
        102: {
            title:'G47',
            description: "G45 mult Gse at ^0.15 eff,Gsb1 cost base -0.4 and nerf its scaling.",         
            cost:n('2.5e6'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let ba = upgradeEffect('G',95)
                let exp=n(0.15)
                if(upg('G',103)) exp=exp.add(0.05)
                if(upg('G',104)) exp=exp.add(0.05)
                let ef=n(ba).pow(exp)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 101))},
        },
        103: {
            title:'G48',
            description: "remove Gsb5 linear cost,G47 exp is 0.2,Gs nerf is weaker,boost Gsb1/6 base.",         
            cost:n('1e435'),//5e434
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (upg(this.layer, 102))},
        },
        104: {
            title:'G49',
            description: "G30 applies to Gsb4-6 at ^0.3 eff and nerf ???.",         
            cost:n('1e25760'),//1e26800
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            effect()  { 
                let ba = upgradeEffect('G',65)
                let exp=n(0.3)
                let ef=n(ba).pow(exp)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),4) },
            unlocked() { return (upg(this.layer, 103))},
        },
        105: {
            title:'G50',
            description: "Gsi gain x1.05^(Gsb4 amt),G45 eff is 1.07,Gsb1 base ^1.05,boost Gsi/e exp.",         
            cost:n('1e786'),//5e806
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            effect()  { 
                let b = gba('G',31)
                let ba=n(1.05)
                let ef=n(ba).pow(b)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 104))},
        },
        111: {
            title:'G51',
            description: "raise Gsb1 eff amt and amt by 1.2/1.4,extra bab:b3->b1,b6->b4,remove G36 hardcap,unlock another buyable.",         
            cost:n('1e1047'),//5e1178
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (mil(this.layer, 17))},
        },
        112: {
            title:'G52',
            description: "Gsi eff is stronger,b4/5/8 is cheaper.",         
            cost:n('5e2140'),//2.5e2180
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (upg(this.layer, 111))},
        },
        113: {
            title:'G53',
            description: "b2/4 is cheaper,Gse 2nd eff exp +0.03,raise b4 eff by 1.005.",         
            cost:n('1e63600'),//67075,64570
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (upg(this.layer, 112))},
        },
        114: {
            title:'G54',
            description: "extra bab:b9-10->b7,b5(x0.2)->b4,b8 bas x1.05.",         
            cost:n('1e77310'),//1e109265,1e109315
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (upg(this.layer, 113))},
        },
        115: {
            title:'G55',
            description: "edit b4 cost and buy max,extra bab:b5(x0.6,total 0.8)->b4,unlock GG and a upg tree.",         
            cost:n('1e245730'),//1e158920,1e225580,1e459860,1e456436
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (upg(this.layer, 114))},
        },
        121: {
            title:'G56',
            description: "GG,b2,b11,b12 are cheaper,G55 b5 mult is 1,unlock new Gt.",         
            cost:n('5e7878'),//1e6771,5e7773
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return player.G.GGtot.gte(10)},
        },
        122: {
            title:'G57',
            description: "dilate b4 to 1.05,b10 is cheaper.",         
            cost:n('1e11660'),//5e11486,1e11580
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (upg(this.layer, 121))},
        },
        123: {
            title:'G58',
            description: "unlock new Gt each upg from this,b6 hardcap +0.005.",         
            cost:n('1e24480'),//5e11486
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (upg(this.layer, 122))},
        },
        124: {
            title:'G59',
            description: "b9 hardcap +0.005,GG and b11-12 are cheaper,buff Gse 2nd eff,Gse nerf is weaker.",         
            cost:n('1e28825'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (upg(this.layer, 123))},
        },
        125: {
            title:'G60',
            description: "add b6 hardcap base on Gse,b3 x1.05,t11-12 ^1.2,Gse nerf is weaker.",         
            cost:n('5e34907'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let ef=player.G.Gsetot.add(10).log(10).add(10).log(10).pow(2).div(1000)
                if(ef.gte(0.075)) ef=ef.div(0.075).pow(0.5).mul(0.075)
                return ef;
            },
            effectDisplay() { return '+'+format(this.effect(),3) },
            unlocked() { return (upg(this.layer, 124))},
        },
        131: {
            title:'G61',
            description: "b11-12 are cheaper,Gse nerf is weaker,t4 is buffed.",         
            cost:n('3e328911'),//2e331973
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (mil(this.layer, 21))},
        },
        132: {
            title:'G62',
            description: "t1 raise Gse instead,t11-12 are cheaper.",         
            cost:n('e3592000'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (mil(this.layer, 21))},
        },
        133: {
            title:'G63',
            description: "b6/9 exp +0.02,GG2 provide 4 GG per buy.",         
            cost:n('e8.88e90'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (mil(this.layer, 21))},
        },
        134: {
            title:'G64',
            description: "remove 1st e nerf.",         
            cost:n('e2.082e9'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (mil('H',1))},
        },
        135: {
            title:'G65',
            description: "reduce e2e9 e nerf,unlock final Gt.",         
            cost:n('e2.5e9'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (mil('H',1))},
        },
        141: {
            title:'G66',
            description: "remove t22 hardcap.",         
            cost:n('1e18'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (mil('G',30))},
        },
        142: {
            title:'G67',
            description: "nerf b2/y2 scaling,autobuy Hb4/9.",         
            cost:n('1e29'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (upg('G',141))},
        },
        143: {
            title:'G68',
            description: "sb6 limit +2,y5 limit +3,edit R eff formula,buff H36.",         
            cost:n('1e288'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (upg('G',142))},
        },
        144: {
            title:'G69',
            description: "sb6 limit +2,i eff exp +0.0025,unlock next dH.",         
            cost:n('1e353'),//2e348
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (upg('G',143))},
        },//1e424
        145: {
            title:'G70',
            description: "sb6 limit +10,i eff exp +0.0025,unlock 2 dH.", //buff H31       
            cost:n('5e560'),//1e424
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (upg('G',144))},
        },//1e1163
        151: {
            title:'G71',
            description: "Hb8/y5 limit +15,unlock a dH,i 2 nerf +0.005.",       
            cost:n('1e1705'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (upg('H',44))},
        },//remove dH2 sc,
        152: {
            title:'G72',
            description: "sb10 exp +0.02,boost dHs ef,buy max some bab.",       
            cost:n('5e2836'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (upg('G',151))},
        },
        153: {
            title:'G73',
            description: "r2 exp +0.025,reduce e1e100 e nerf.",       
            cost:n('5e5002'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (upg('G',152))},
        },
        154: {
            title:'G74',
            description: "sb6 exp +0.02,tot dH boost dHp exp at 216(at most 0.08),boost y6 exp,unlock a dH.",       
            cost:n('1e8719'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            effect()  { 
                let ef=tmp.H.totdh.sub(216).max(0).pow(0.6).div(200).min(0.08)
                return ef;
            },
            effectDisplay() { return '+'+format(this.effect(),4) },
            unlocked() { return (upg('G',153))},
        },
        155: {
            title:'G75',
            description: "REMOVE ALL THESE SOFTCAPS and unlock a new row!",       
            cost:n('e1.961e6'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (mil('G',37))},
        },
    },
    clickables:{    
        11: {
            title(){return "Gt0"},
            display: "respec (reset Gt upg,get GG back.)",
            canClick() {return !gcs(this.layer,this.id)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            onClick() {
                for (let i in player.G.clickables) if (!["11"].includes(i)) setClickableState("G",i,0)
                player.G.Gtc=n(0)
                if (player.G.Gsetot.gte('1e13144')) scs("G",21,1),scs("G",31,1)
                if (player.G.Gsetot.gte('1e49180')) scs("G",32,1),scs("G",33,1)
                if (mil('G',25)) scs("G",41,1),scs("G",51,1)
                if (mil('G',27)) scs("G",42,1),scs("G",43,1),scs("G",44,1)//scs("G",91,1)
                if (mil('G',28)) scs("G",91,1)
                if (upg('H',15)) scs("G",101,1)
                if(n(ccomp('I',22)).gte(3)) scs("G",21,1),scs("G",31,1),scs("G",32,1),scs("G",33,1),scs("G",41,1),scs("G",51,1),scs("G",42,1),scs("G",43,1),scs("G",44,1),scs("G",91,1)
                        ,scs("G",101,1),scs("G",102,1),scs("G",103,1),scs("G",104,1)
                if(n(ccomp('I',22)).gte(4)) scs("G",111,1),scs("G",112,1),scs("G",121,1),scs("G",122,1)
                if(gcs('I',76)) scs("G",61,1),scs("G",62,1),scs("G",63,1),scs("G",71,1),scs("G",72,1),scs("G",73,1),scs("G",81,1),scs("G",82,1),scs("G",83,1),scs("G",131,1)
            },
            unlocked() {return upg('G',115)},
        },
        12: {
            title(){return "e"},
            display: "choose t9,11,14(e path),need 91 GG",
            canClick() {return  player.G.GG.gte(91)&&!gcs(this.layer,this.id)&&!gcs(this.layer,61)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            onClick() { player.G.Gtc=player.G.Gtc.add(91)
                setClickableState(this.layer,this.id,1)
                setClickableState(this.layer,61,1)
                setClickableState(this.layer,71,1)
                setClickableState(this.layer,81,1)
            },
            unlocked() {return (mil('G',22)||(mil('I',0)))},
        },
        13: {
            title(){return "i"},
            display: "choose t10,12,15(i path),need 94 GG",
            canClick() {return  player.G.GG.gte(94)&&!gcs(this.layer,this.id)&&!gcs(this.layer,62)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            onClick() { player.G.Gtc=player.G.Gtc.add(94)
                setClickableState(this.layer,this.id,1)
                setClickableState(this.layer,62,1)
                setClickableState(this.layer,72,1)
                setClickableState(this.layer,82,1)
            },
            unlocked() {return (mil('G',22)||(mil('I',0)))},
        },
        14: {
            title(){return "s"},
            display: "choose t61,17,18(s path),need 85 GG",
            canClick() {return  player.G.GG.gte(85)&&!gcs(this.layer,this.id)&&!gcs(this.layer,63)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            onClick() { player.G.Gtc=player.G.Gtc.add(85)
                setClickableState(this.layer,this.id,1)
                setClickableState(this.layer,63,1)
                setClickableState(this.layer,73,1)
                setClickableState(this.layer,83,1)
            },
            unlocked() {return (mil('G',22)||(mil('I',0)))},
        },
        21: {
            title(){return "Gt1"},
            display(){if(upg('G',132)) return "Gs raise Gse <br> cost:"+format(this.cost())+" GG <br> eff:^"+format(this.effect()[1],3) 
                else return "Gs boost Gse <br> cost:"+format(this.cost())+" GG <br> eff:x"+format(this.effect()[0])},
            cost(){return n(1)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(1)&&!gcs(this.layer,this.id)},
            onClick() {if (!player.G.Gsetot.gte('1e13144')) {player.G.Gtc=player.G.Gtc.add(1)}
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let exp=n(4)
                if(gcs('G',32))  exp=exp.mul(1.15)
                if (player.G.Gsetot.gte('1e13144')) exp=exp.mul(1.5)
                if (player.G.Gsetot.gte('1e49180')) exp=exp.mul(3)
                let ef=player.G.Gs.add(10).log(10).pow(exp)
                let ef2=player.G.Gs.add(10).log(10).add(10).log(10).pow(0.4).div(50).add(0.98)
                return [ef,ef2]
            },
            unlocked() {return upg('G',115)},
        },
        31: {
            title(){return "Gt2"},
            display(){return "Gsb9 base x1.02 <br> cost:"+format(this.cost())+" GG "},
            cost(){return n(2)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(this.cost())&&!gcs(this.layer,this.id)&&gcs(this.layer,21)},
            onClick() {if (!player.G.Gsetot.gte('1e13144')) {player.G.Gtc=player.G.Gtc.add(this.cost())}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return upg('G',115)},
            branches(){return ["21"]},
        },
        32: {
            title(){return "Gt3"},
            display(){return "Gsb11-12 base +0.002,t1 ^1.15 <br> cost:"+format(this.cost())+" GG "},
            cost(){return n(6)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(this.cost())&&!gcs(this.layer,this.id)&&gcs(this.layer,21)},
            onClick() {if (!player.G.Gsetot.gte('1e49180')) {player.G.Gtc=player.G.Gtc.add(this.cost())}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return upg('G',115)},
            branches(){return ["21"]},
        },
        33: {
            title(){return "Gt4"},
            display(){return "total GG raise Gse <br> cost:"+format(this.cost())+"  GG <br> eff:^"+format(this.effect(),4)},
            cost(){return n(3)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(this.cost())&&!gcs(this.layer,this.id)&&gcs(this.layer,21)},
            onClick() {if (!player.G.Gsetot.gte('1e49180')) {player.G.Gtc=player.G.Gtc.add(this.cost())}
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let d=n(400)
                if(gcs('G',43))  d=d.mul(0.8)
                if(gcs('G',51))  d=d.mul(0.8)
                let exp=n(0.85)
                if(upg('G',131)) exp=exp.add(0.03)
                let ef=player.G.GGtot.pow(exp).div(d).add(1)
                if(ef.gte(1.8)) ef=ef.div(1.85).pow(0.5).mul(1.8)
                return ef
            },
            unlocked() {return upg('G',115)},
            branches(){return ["21"]},
        },
        41: {
            title(){return "Gt5"},
            cost(){return n(5)},
            display(){return "Gse gain exp +0.05,eff exp +0.03 <br> cost:"+format(this.cost())+" GG "},//,Gsi eff nerf is weaker
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(this.cost())&&!gcs(this.layer,this.id)&&(gcs(this.layer,31)|| gcs(this.layer,32)|| gcs(this.layer,33))},
            onClick() {if (!mil('G',25)) {player.G.Gtc=player.G.Gtc.add(this.cost())}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return upg('G',115)},
            branches(){return ["31","33"]},
        },
        42: {
            title(){return "Gt6"},
            display(){return "Gsi eff nerf is weaker <br> cost: 20 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(20)&&!gcs(this.layer,this.id)&&(gcs(this.layer,31)|| gcs(this.layer,32)|| gcs(this.layer,33))},
            onClick() {if (!mil('G',27)) {player.G.Gtc=player.G.Gtc.add(20)}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return upg('G',115)},
            branches(){return ["31","33"]},
        },
        43: {
            title(){return "Gt7"},
            display(){return "total GG nerf b4 scaling,t4 x1.2 <br> cost: 18 GG <br> eff:/"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(18)&&!gcs(this.layer,this.id)&&(gcs(this.layer,31)|| gcs(this.layer,32)|| gcs(this.layer,33))},
            onClick() {if (!mil('G',27)) {player.G.Gtc=player.G.Gtc.add(18)}
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.GGtot.pow(0.66).div(400).add(1)
                return ef
            },
            unlocked() {return upg('G',121)},
            branches(){return ["31","33"]},
        },
        44: {
            title(){return "Gt13"},
            display(){return "Gse raise Gs,b2-3 scaling is weaker <br> cost: 26 GG <br> eff:^"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(26)&&!gcs(this.layer,this.id)&&gcs(this.layer,21)},
            onClick() {if (!mil('G',27)) {player.G.Gtc=player.G.Gtc.add(26)}
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.Gsetot.add(10).log(10).add(10).log(10).pow(2.5).div(90).add(89/90)
                if(upg('H',12)) ef=player.G.Gsetot.add(10).log(10).add(10).log(10).pow(2.6).div(80).add(79/80)
                if (gcs('G',82))  ef=ef.pow('1.2')
                return ef
            },
            unlocked() {return upg('G',125)},
            branches(){return ["21"]},
        },
        51: {
            title(){return "Gt8"},
            display(){return "nerf b4/5/7/8 scaling,t4 x1.2 again <br> cost: 18 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(18)&&!gcs(this.layer,this.id)&&(gcs(this.layer,41)|| gcs(this.layer,42)|| gcs(this.layer,43))},
            onClick() {if (!mil('G',25)) {player.G.Gtc=player.G.Gtc.add(18)}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('G',20)},
            branches(){return ["41","42","43"]},
        },
        61: {
            title(){return "Gt9"},
            display(){return "Gse raise itself (base on max) <br> cost: 36 GG <br> eff:^"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(36)&&!gcs(this.layer,this.id)&&gcs(this.layer,51)},
            onClick() {player.G.Gtc=player.G.Gtc.add(36)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.Gsetot.add(10).log(10).add(10).log(10).pow(1.5).div(150).add(149/150)
                if(gcs('G',122)) ef=player.G.Gsetot.add(10).log(10).add(10).log(10).pow(1.5).div(120).add(119/120)
                return ef
            },
            unlocked() {return upg('G',123)},
            branches(){return ["51"]},
        },
        62: {
            title(){return "Gt10"},
            display(){return "Gsi raise itself (base on max) <br> cost: 39 GG <br> eff:^"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(39)&&!gcs(this.layer,this.id)&&gcs(this.layer,51)},
            onClick() {player.G.Gtc=player.G.Gtc.add(39)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.Gsi.add(10).log(10).add(10).log(10).pow(1.5).div(250).add(249/250)
                if(gcs('G',122)) ef=player.G.Gsi.add(10).log(10).add(10).log(10).pow(1.6).div(180).add(179/180)
                return ef
            },
            unlocked() {return upg('G',123)},
            branches(){return ["51"]},
        },
        63: {
            title(){return "Gt16"},
            display(){return "Gs raise itself (base on max) <br> cost: 32 GG <br> eff:^"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(32)&&!gcs(this.layer,this.id)&&gcs(this.layer,51)},
            onClick() {player.G.Gtc=player.G.Gtc.add(32)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let exp=n(1.2)
                if(gcs('G',91)) exp=exp.add(0.04)
                let ef=player.G.Gs.add(10).log(10).add(10).log(10).pow(exp).div(200).add(199/200)
                if(gcs('G',122)) ef=player.G.Gs.add(10).log(10).add(10).log(10).pow(exp).div(150).add(149/150)
                return ef
            },
            unlocked() {return mil('G',21)},
            branches(){return ["51"]},
        },
        71: {
            title(){return "Gt11"},
            display(){return "b4 eff boost Gse(hardcap at e5e6) <br> cost: 15 GG <br> eff:x"+format(this.effect())},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(15)&&!gcs(this.layer,this.id)&&gcs(this.layer,61)},
            onClick() {player.G.Gtc=player.G.Gtc.add(15)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=n(10).pow(n(buyableEffect('G',31)).add(10).log(10).mul(0.75)).pow(0.003)
                if(upg('G',125)) ef=ef.pow('1.2')
                if(gcs('G',81))  ef=ef.pow('1.2')
                let sc=n(0.8)
                if(gcs('G',91)) sc=sc.add(0.02)
                if(ef.gte('1e70000')) ef=n('1e70000').mul(n(10).pow(ef.log(10).sub('7e4').mul(sc)))
                if(ef.gte('1e240000')) ef=n('1e240000').mul(n(10).pow(ef.log(10).sub('240000').mul(sc)))
                if(ef.gte('e3e6')) ef=n('e3e6').mul(n(10).pow(ef.log(10).sub('3e6').mul(0.7)))
                if(gcs('G',91)) ef=ef.pow(1.2)
                ef=ef.min('e5e6')
                return ef
            },
            unlocked() {return upg('G',124)},
            branches(){return ["61"]},
        },
        72: {
            title(){return "Gt12"},
            display(){
                if(player.G.Gsetot.gte('e260000')) return "b7 eff raise Gsi <br> cost: 15 GG <br> eff:^"+format(this.effect()[1],3)
                else return "b7 eff boost Gsi <br> cost: 15 GG <br> eff:x"+format(this.effect()[0])},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(15)&&!gcs(this.layer,this.id)&&gcs(this.layer,62)},
            onClick() {player.G.Gtc=player.G.Gtc.add(15)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=n(10).pow(n(buyableEffect('G',41)).add(10).log(10).mul(1.8)).pow(80)
                let ef2=n(1)
                if (upg('G',125))  ef=ef.pow('1.2')
                let exp=n(0.125)
                if(gcs('G',91)) exp=exp.add(0.005)
                if(player.G.Gsetot.gte('e260000')) ef2=ef2.add(n(buyableEffect('G',41)).add(10).log(10).pow(exp).div(16))
                return [ef,ef2]
            },
            unlocked() {return upg('G',124)},
            branches(){return ["62"]},
        },
        73: {
            title(){return "Gt17"},
            display(){return "b1 eff raise Gs <br> cost: 13 GG <br> eff:^"+format(this.effect(),3)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(13)&&!gcs(this.layer,this.id)&&gcs(this.layer,63)},
            onClick() {player.G.Gtc=player.G.Gtc.add(13)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let exp=n(1.1)
                if(gcs('G',91)) exp=exp.add(0.04)
                if(upg('H',12)) exp=exp.add(0.011)
                let t=n(25)
                if(upg('H',12)) t=t.sub(10)
                let ef=n(buyableEffect('G',21)).add(10).log(10).add(10).log(10).pow(exp).add(t.sub(1)).div(t)
                return ef
            },
            unlocked() {return mil('G',21)},
            branches(){return ["63"]},
        },
        81: {
            title(){return "Gt14"},
            display(){return "dilate b4 to 1.05.b7 to 1.01,t11 ^1.2 <br> cost: 40 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(40)&&!gcs(this.layer,this.id)&&gcs(this.layer,71)},
            onClick() {player.G.Gtc=player.G.Gtc.add(40)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return upg('G',125)},
            branches(){return ["71"]},
        },
        82: {
            title(){return "Gt15"},
            display(){return "Gsi nerf is weaker,t13 ^1.2 <br> cost: 40 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(40)&&!gcs(this.layer,this.id)&&gcs(this.layer,72)},
            onClick() {player.G.Gtc=player.G.Gtc.add(40)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return upg('G',125)},
            branches(){return ["72"]},
        },
        83: {
            title(){return "Gt18"},
            display(){return "b11 base +0.0025,b12 base +0.0015 <br> cost: 40 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(40)&&!gcs(this.layer,this.id)&&gcs(this.layer,73)},
            onClick() {player.G.Gtc=player.G.Gtc.add(40)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('G',21)},
            branches(){return ["73"]},
        },
        91: {
            title(){return "Gt19"},
            display(){return "Gse gain exp x1.2,buff t11,12,16,17 <br> cost: 160 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(160)&&!gcs(this.layer,this.id)&&(gcs(this.layer,81)|| gcs(this.layer,82)|| gcs(this.layer,83))},
            onClick() {if(!mil('G',28)) {player.G.Gtc=player.G.Gtc.add(160)}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return upg('G',131)},
            branches(){return ["81","82","83"]},
        },
        101: {
            title(){return "Gt20"},
            display(){return "b11-12 are stronger,reduce e eff nerf <br> cost: 80 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(80)&&!gcs(this.layer,this.id)&&gcs(this.layer,91)},
            onClick() {if(!mil('H',15)) {player.G.Gtc=player.G.Gtc.add(80)}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('G',23)},
            branches(){return ["91"]},
        },
        102: {
            title(){return "Gt21"},
            display(){ if(mil('G',25)) return "total GG add b6/9 hardcap and ^1.005 Gse after mil25 <br> cost: 120 GG <br> eff:+"+format(this.effect(),4)
                else return "total GG add b6/9 hardcap <br> cost: 120 GG <br> eff:+"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(120)&&!gcs(this.layer,this.id)&&gcs(this.layer,91)},
            onClick() {player.G.Gtc=player.G.Gtc.add(120)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.GGtot.pow(0.4).div(666)
                if(mil('G',25)) ef=player.G.GGtot.pow(0.42).div(600)        
                if(ef.gte(0.04)) ef=ef.div(0.04).pow(0.6).mul(0.04)  
                return ef
            },
            unlocked() {return mil('G',23)},
            branches(){return ["91"]},
        },
        111: {
            title(){return "Gt22"},
            display(){ if(mil('G',25)) return "Gs add b6/9 hardcap(max 0.6) and ^1.004 Gse after mil25 <br> cost: 110 GG <br> eff:+"+format(this.effect(),4)
                else return "Gs add b6/9 hardcap(max 0.6) <br> cost: 110 GG <br> eff:+"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(110)&&!gcs(this.layer,this.id)&&gcs(this.layer,91)},
            onClick() {player.G.Gtc=player.G.Gtc.add(110)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.Gs.add(10).log(10).add(10).log(10).pow(1.33).div(1e4)   
                if(mil('G',25)) ef=player.G.Gs.add(10).log(10).add(10).log(10).pow(1.33).div(8000) 
                if(ef.gte(0.11)) ef=ef.div(0.11).pow(0.4).mul(0.11)   
                if(!upg('G',141)) ef=ef.min(0.6)      
                if(ef.gte(0.6)) ef=ef.div(0.6).pow(0.5).mul(0.6)       
                return ef
            },
            unlocked() {return mil('G',24)},
            branches(){return ["91"]},
        },
        112: {
            title(){return "Gt23"},
            display(){return "Gs raise itself(stronger) <br> cost: 110 GG <br> eff:^"+format(this.effect())},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(110)&&!gcs(this.layer,this.id)&&gcs(this.layer,91)},
            onClick() {player.G.Gtc=player.G.Gtc.add(110)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let exp=n(1.28)
                if(mil('G',25)) exp=exp.add(0.02)
                let ef=player.G.Gs.add(10).log(10).add(10).log(10).pow(exp).div(150).add(149/150)
                if(mil('G',25)) ef=player.G.Gs.add(10).log(10).add(10).log(10).pow(exp).div(120).add(119/120) 
                return ef
            },
            unlocked() {return mil('G',24)},
            branches(){return ["91"]},
        },
        121: {
            title(){return "Gt24"},
            display(){return "b6/9 hp x1.06,exp +0.07 <br> cost: 200 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(200)&&!gcs(this.layer,this.id)&&gcs(this.layer,111)},
            onClick() {player.G.Gtc=player.G.Gtc.add(200)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('G',25)},
            branches(){return ["111"]},
        },
        122: {
            title(){return "Gt25"},
            display(){return "boost r5,s^1.8,i^1.5,e^1.01 <br> cost: 200 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(200)&&!gcs(this.layer,this.id)&&gcs(this.layer,112)},
            onClick() {player.G.Gtc=player.G.Gtc.add(200)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('G',25)},
            branches(){return ["112"]},
        },
        103: {
            title(){return "Gt26"},
            display(){return "t22 x2 applies to b10,Gse nerf is weaker. <br> cost: 800 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(800)&&!gcs(this.layer,this.id)&&gcs(this.layer,91)},
            onClick() {player.G.Gtc=player.G.Gtc.add(800)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return upg('H',13)},
            branches(){return ["91"]},
        },
        104: {
            title(){return "Gt27"},
            display(){return "b6-9 nerf is even weaker(+0.02) <br> cost: 600 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(600)&&!gcs(this.layer,this.id)&&gcs(this.layer,91)},
            onClick() {player.G.Gtc=player.G.Gtc.add(600)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return upg('H',14)},
            branches(){return ["91"]},
        },
        131: {
            title(){return "Gt28"},
            display(){return "dilate s/i/e by 1.008/1.003/1.0008 <br> cost: 900 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(900)&&!gcs(this.layer,this.id)&&(gcs(this.layer,121)||gcs(this.layer,122))},
            onClick() {player.G.Gtc=player.G.Gtc.add(900)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return upg('G',135)},
            branches(){return ["121","122"]},
        },
    },
    automate(){
        if (player.G.auto2)  buyBuyable("G",11),buyBuyable("G",12),buyBuyable("G",13)
        if (player.G.auto4)  buyBuyable("G",21),buyBuyable("G",22),buyBuyable("G",23)
        if (player.G.auto5)  buyBuyable("G",31),buyBuyable("G",32)
        if (player.G.auto6)  buyBuyable("G",41),buyBuyable("G",42)
        if (player.G.auto7)  buyBuyable("G",61),buyBuyable("G",62)
        if (player.H.auto1)  buyBuyable("G",51),buyBuyable("G",52),buyBuyable("G",43)
        if(player.H.auto5)  buyBuyable("G",71)
        if(player.G.auto8)  buyBuyable("G",33)
        if(player.H.auto7)  buyBuyable("G",73)
        if(player.H.auto9)  buyBuyable("G",72),buyBuyable("G",74)
        if(gcs('I',104)&&!gcs('?',133))  buyBuyable("G",44)
    },
    buyables:{
        11: {
            title: "Gb1", 
            cost(x) { 
                let cost = n(100).pow(x).times('100')
                if (cost.gte('1e500')) cost=cost.div('1e500').pow(2.5).mul('1e500')
                if(mil('G',6)) cost = n(10).pow( x.pow(1.1))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if(mil('G',6))   tar=player[this.layer].points.add(10).log(10).pow(10/11).sub(gba(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(tar))
            },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let base = n(2)     
                if(mil('G',8))  base=base.add(0.5)
                if(upg('G',52))  base=base.pow(1.3)
                return base},
            effect(x) {
                let exp=n(1)
                if (upg('G',42)) exp=exp.add(0.02)
                let ef = this.base().pow(x.pow(exp))
                return ef},
            display() { 
                return "give G a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " G \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return upg('G',25) }
        },
        12: {
            title: "Gb2", 
            cost(x) { 
                let cexp=n(1.15)
                let bas=n(1000)
                let sc=n(2)
                if (upg('F',84)) sc = sc.sub(0.15)
                if (upg('G',31)) cexp = cexp.sub(0.01)
                if (upg('F',82)) bas = bas.sub(400)
                let cost = bas.pow(x.pow(cexp)).times('1e3')
                if (upg('G',31)) cost = cost.div('1e3')
                if (cost.gte('1e1000')) cost=cost.div('1e1000').pow(sc).mul('1e1000')
                if(mil('G',6)) cost = n(50).pow(x.pow(1.1))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if(mil('G',6))   tar=player[this.layer].points.add(10).log(50).pow(10/11).sub(gba(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(tar))
            },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let base = n(2)              
                if (upg('F',74))  base=base.add(upgradeEffect('F',74)[0])
                if (upg('G',33)) base=base.pow(2)
                return base},
            effect(x) {
                let exp=n(1.02)
                if (upg('G',42)) exp=exp.add(0.005)
                let ef = this.base().pow(x.pow(exp))
                return ef},
            display() { 
                return "give F dim a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " G \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return upg('G',25) }
        },
        13: {
            title: "Gb3", 
            cost(x) { 
                let cexp=n(1.4)
                let bas=n(100)
                if (upg('G',31)) cexp = cexp.sub(0.02)
                if (upg('F',82)) bas = bas.sub(40)
                let cost = bas.pow( x.pow(cexp)).times('5e3')
                if (upg('G',31)) cost = cost.div('5e3')
                if(mil('G',6)) cost = n(5).pow(x.pow(1.1))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if(mil('G',6))   tar=player[this.layer].points.add(10).log(5).pow(10/11).sub(gba(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(tar))
            },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let base = n(2)              
                if (upg('F',75))  base=base.add(upgradeEffect('F',75))
                if (upg('F',82))  base=base.mul(upgradeEffect('F',82))
                if (upg('F',84))  base=base.mul(upgradeEffect('F',84))
                return base},
            effect(x) {
                let exp=n(1)
                if (upg('G',42)) exp=exp.add(0.03)
                let ef = this.base().pow(x.pow(exp))                
                return ef},
            display() { 
                return "give Bb5/Eb10 a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " G \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return upg('G',25) }
        },
        //Gs babs
        21: {
            title: "Gsb1", 
            cost(x) { 
                let bas=n(10)
                if (upg('G',61)) bas=n(5)
                if (upg('G',82)) bas=bas.sub(0.2)
                if (upg('G',93)) bas=bas.sub(0.2)
                if (upg('G',102)) bas=bas.sub(0.4)
                let e=n(1.35)
                if (x.gte(500)) e=e.add(0.03)
                let cost = bas.pow( x.pow(e)).times('100')
                if (x.gte(1200)) cost = cost.mul(n(10).pow(n(2).pow(x.sub(1200).pow(this.sce())).mul(20)))
                if (upg('G',65))  cost=cost.pow(upgradeEffect('G',65))
                if (upg('G',81))  cost=cost.div(upgradeEffect('G',81))
                if (mil('G',17)) cost = cost.min(n(10).pow(n(2).pow(x.pow(this.sce())).mul(5)))
                return cost
            },
            sce(){
                let e=n(0.38)
                if (upg('G',102))  e=e.sub(0.005)
                if (mil('G',17)) e=e.sub(0.075)
                if (mil('G',18))  e=e.sub(0.01)
                //if (mil('G',21))  e=e.sub(0.005)
                if(mil('G',22)) e=n(0.285)
                if(upg('H',14)) e=e.div(upgradeEffect('H',14))
                return e
            },
            bulk(){
                let t=n(0)
                if(mil('G',17))   t=t.max(player[this.layer].Gs.add(10).log(10).div(5).max(1).log(2).pow(this.sce().pow(-1)).sub(gba(this.layer, this.id)).sub(1).ceil().max(1))
                let c = this.cost(gba(this.layer, this.id).add(t))
                if (player[this.layer].Gs.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(t)
            },
            canAfford() { return player[this.layer].Gs.gte(this.cost()) },
            buy() { if(!mil('G',27)) {player[this.layer].Gs = player[this.layer].Gs.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                if (upg('G',93))  e=e.add(gba('G',23))
                if (upg('G',111))  e=e.add(gba('G',22))
                if (upg('G',111)) e=e.pow(1.4) 
                return e
            },
            base(){   let t=n(1.1)
                if (upg('G',103)) t=t.add(0.1)
                if(upg('G',105)) t=t.mul(1.05)
                if(mil('G',19)) t=t.mul(1.05)
                let base = player.G.Gs.add(10).log(10).pow(t)    
                if (upg('G',63)) base=base.mul(1.2) 
                if (mil('G',15)) base=base.mul(13/12) 
                if (upg('G',71)) base=base.mul(1.1) 
                if (upg('G',74))  base=base.mul(upgradeEffect('G',74))
                if (upg('G',75))  base=base.mul(upgradeEffect('G',75))
                return base},
            effect(x) {
                let exp=n(1)
                if (upg('G',111)) exp=exp.add(0.2) 
                let ef = this.base().pow(x.add(this.extra()).pow(exp))
                return ef},
            display() { 
                return "Gs gain base x"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gs \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return mil('G',14) }
        },
        22: {
            title: "Gsb2", 
            cost(x) { 
                let bas=n(1e5)
                if (upg('G',85))  bas=bas.mul(0.4)
                if (upg('G',92))  bas=bas.mul(0.5)
                let e=n(1.8)
                if (x.gte(50)) e=e.add(0.1)
                if (upg('G',104))  e=e.sub(0.05)
                //let cost = bas.pow( n(10).pow(x.pow(0.3).mul(2))).times('1e219')
                let cost = bas.pow( x.pow(e)).times('2e142')
                if (x.gte(100)) cost = cost.mul(n(10).pow(n(3).pow(x.sub(100).pow(this.sce())).mul(20)))
                if (upg('G',65))  cost=cost.pow(upgradeEffect('G',65))
                if (upg('G',81))  cost=cost.div(upgradeEffect('G',81))
                if (upg('G',91))  cost=cost.div('2e142')
                if (upg('G',113))  cost = cost.mul(n(10).pow(n(3).pow(this.sce()).mul(10)))
                if(mil('G',21)) cost = n(10).pow(n(2).pow(x.pow(this.sce())).mul(10))
                return cost
            },
            sce(){
                let e=n(0.57)
                if (upg('G',102))  e=e.sub(0.01)
                if (mil('G',17))  e=e.sub(0.015)
                if (mil('G',18))  e=e.sub(0.005)
                if (upg('G',113))  e=e.sub(0.02)
                if (upg('G',121))  e=e.sub(0.02)
                if (player.G.Gsetot.gte('1e13144')) e=e.sub(0.01)
                if(gcs('G',44))  e=e.sub(0.01)
                if(mil('G',21)) e=n(0.45)
                if(mil('G',22)) e=n(0.435)
                if(mil('G',26)) e=n(0.43)
                if(upg('H',14)) e=e.div(upgradeEffect('H',14)).max(1e-100)
                return e
            },
            canAfford() { return player[this.layer].Gs.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if(mil('G',21))   tar=player[this.layer].Gs.add(10).log(10).div(10).max(1).log(2).pow(this.sce().pow(-1)).sub(gba(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].Gs.gte(c)) setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(tar))
            },
            buy() { if(!mil('G',27)) {player[this.layer].Gs = player[this.layer].Gs.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let base = player.G.Gs.add(10).log(10).pow(0.6).div(200)   
                if (upg('G',64)) base=base.mul(1.15)
                if (mil('G',19)) base=base.mul(1.1)
                let sc=n(0.5)
                if (upg('G',104))  sc=sc.add(0.1)
                if (upg('G',111))  sc=sc.add(0.05)
                if (base.gte(0.8)) base=base.div(0.8).pow(sc).mul(0.8)
                if (base.gte(5)) base=base.div(5).pow(0.6).mul(5)
                return base},
            effect(x) {
                let exp=n(1)
                let ef = this.base().mul(x.pow(exp))
                return ef},
            display() { 
                return "Gs gain exp +"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gs \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return (upg('G',63)) }
        },
        23: {
            title: "Gsb3", 
            cost(x) { 
                let bas=n('1e12')
                let e=n(2.1)
                if (x.gte(50)) e=e.add(0.15)
                if (upg('G',94))  bas=bas.div(1000)
                if (upg('G',104))  e=e.sub(0.1)
                let cost = bas.pow(x.pow(e)).times('1e828')
                if (x.gte(100)) cost = cost.mul(n(10).pow(n(3).pow(x.sub(100).pow(this.sce())).mul(20)))
                if (upg('G',73))  cost=cost.pow(upgradeEffect('G',65))
                if (upg('G',81))  cost=cost.div(upgradeEffect('G',81))
                if (upg('G',91))  cost=cost.div('1e828')
                if(mil('G',25))  cost=cost.min(n(10).pow(n(3).pow(x.pow(this.sce())).mul(5)))
                return cost
            },
            sce(){
                let e=n(0.65)
                if(gcs('G',44))  e=e.sub(0.025)
                if(mil('G',22)) e=n(0.61)
                if(mil('G',25)) e=n(0.604)
                if(mil('G',26)) e=n(0.6)
                if(upg('H',14)) e=e.div(upgradeEffect('H',14))
                return e
            },
            canAfford() { return player[this.layer].Gs.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if(mil('G',25))   tar=player[this.layer].Gs.add(10).log(10).div(5).max(1).log(3).pow(this.sce().pow(-1)).sub(gba(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].Gs.gte(c)) setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(tar))
            },
            buy() { if(!mil('G',27)) {player[this.layer].Gs = player[this.layer].Gs.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let base = player.G.Gs.add(10).log(10).pow(0.45).div(600)   
                if (base.gte(0.7)) base=base.div(0.7).pow(0.6).mul(0.7)
                if (upg('G',125))  base=base.mul('1.1')
                return base},
            effect(x) {
                let exp=n(1)
                let ef = this.base().mul(x.pow(exp))
                return ef},
            display() { 
                return "Gs eff exp +"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gs \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return (upg('G',72)) }
        },
        31: {
            title: "Gsb4", 
            cost(x) { 
                let bas=n(10)
                let e=n(1.4)
                if (x.gte(500)) e=e.add(0.1)
                if (upg('G',85))  bas=n(7)
                if (upg('G',93))  bas=n(5)
                if (mil('G',17))  bas=n(4)
                if (upg('G',112))  bas=n(3.5)
                let cost = bas.pow(x.pow(e)).mul(10)
                if (x.gte(1000)) cost=cost.mul(n(10).pow(n(2).pow(x.sub(1000).pow(this.sc())).mul(20)))
                if (upg('G',104))  cost=cost.pow(upgradeEffect('G',104))
                if (upg('G',105))  cost=cost.div(400)
                if (upg('G',115))  cost=cost.min(n(10).pow(n(2).pow(x.pow(this.sc())).mul(30)))
                return cost
            },
            sc(){
                let e=n(0.4)
                if (mil('G',18))  e=e.sub(0.01)
                if (upg('G',113))  e=e.sub(0.01)
                if (mil('G',19))  e=e.sub(0.03)
                if (upg('G',115))  e=e.sub(0.03)
                if(gcs('G',43)) e=e.div(clickableEffect('G',43))//.max(1e-100)
                if(gcs('G',51)) e=e.div(1.04)
                return e
            },
            canAfford() { return player[this.layer].Gsi.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if(upg('G',115))   tar=player[this.layer].Gsi.max(1).log(10).div(30).max(1).log(2).pow(this.sc().pow(-1)).sub(gba(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].Gsi.gte(c)) setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(tar))
            },
            buy() { if(!mil('G',27)) {player[this.layer].Gsi = player[this.layer].Gsi.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                if (upg('G',111))  e=e.add(gba('G',33))
                let b=n(0)
                if (upg('G',114))  b=b.add(0.2)
                if (upg('G',115))  b=b.add(0.6)
                if (upg('G',121))  b=b.add(0.2)
                e=e.add(n(gba('G',32)).mul(b))
                return e
            },
            base(){   let base = player.G.Gsi.add(10).log(10).pow(1.1).mul(2)
                if (upg('G',85))  base=base.mul(upgradeEffect('G',85))
                return base},
            effect(x) {
                let exp=n(1)
                if (upg('G',113))  exp=exp.add(0.005)
                if (upg('G',122))  exp=exp.mul(1.05)
                if (gcs('G',81))  exp=exp.mul(1.05)
                let ef = this.base().pow(x.add(this.extra()).pow(exp)).max(1)
                return ef},
            display() { 
                return "Gsi gain base x"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gsi \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())},
            style() {if (this.canAfford()) return {'background-color': '#FF00F1' }},
            unlocked() { return (upg('G',83)) }
        },
        32: {
            title: "Gsb5", 
            cost(x) { 
                let bas=n(1e4)
                let e=n(1.85)
                if (upg('G',94)) bas=bas.mul(0.25)
                if (mil('G',17))  bas=n(200)
                if (upg('G',112))  bas=n(50)
                let cost = bas.pow( x.pow(e)).times('1e64')
                if(upg('G',103)) cost=cost.div('1e64')
                if (x.gte(500)) cost = cost.mul(n(10).pow(n(2).pow(x.sub(500).pow(this.sce())).mul(2)))
                if (upg('G',104))  cost=cost.pow(upgradeEffect('G',104))
                if (mil('G',25)) cost=cost.min(n(10).pow(n(2).pow(x.pow(this.sce()))))
                return cost
            },
            sce(){
                let e=n(0.6)
                if(gcs('G',51)) e=e.sub(0.03)
                if (mil('G',25)) e=e.sub(0.04)
                return e
            },
            canAfford() { return player[this.layer].Gsi.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if(mil('G',25))   tar=player[this.layer].Gsi.add(10).log(10).max(1).log(2).pow(this.sce().pow(-1)).sub(gba(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].Gsi.gte(c)) setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(tar))
            },
            buy() { if(!mil('G',27)) {player[this.layer].Gsi = player[this.layer].Gsi.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let base = player.G.Gsi.add(10).log(10).pow(0.65).div(100)  
                if (mil('G',19)) base=base.mul(1.1) 
                let sc=n(0.5)
                if (upg('G',111)) sc=sc.add(0.1) 
                if (base.gte(0.8)) base=base.div(0.8).pow(sc).mul(0.8)
                if (base.gte('1e350')) base=base.div('1e350').pow(0.5).mul('1e350')
                return base},
            effect(x) {
                let exp=n(1)
                let ef = this.base().mul(x.pow(exp))
                return ef},
            display() { 
                return "Gsi gain exp +"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gsi \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            style() {if (this.canAfford()) return {'background-color': '#FF00F1' }},
            unlocked() { return (upg('G',83)) }
        },
        33: {
            title: "Gsb6", 
            cost(x) { 
                let bas=n('1e4')
                let e=n(2.1)
                if (x.gte(6)) e=e.add(0.3)
                if (upg('G',104))  e=e.sub(0.15)
                let cost = bas.pow( x.pow(e)).times('1e174')
                if(upg('G',111)) cost=cost.div('1e174')
                let e2=n(0.75)
                if (x.gte(40))  e2=e2.add(0.05)
                if (x.gte(56))  e2=e2.add(x.sub(54).div(200))
                if (x.gte(110))  e2=e2.add(x.sub(110).div(200))
                if (x.gte(20)) cost = cost.mul(n(10).pow(n(3).pow(x.sub(20).pow(e2)).mul(40)))
                if (x.gte(118)) cost = n(10).pow(n(10).pow(x.sub(88).pow(1.55)))
                if (x.gte(135)) cost = n(10).pow(n(10).pow(x.sub(107).pow(n(1.8).add(x.sub(140).max(0).div(150)))))
                if (x.gte(160)) cost = n(10).pow(n(10).pow(x.sub(115).pow(n(2.1))))
                if (x.gte(170)) cost = n(10).pow(n(10).pow(x.sub(106).pow(n(2.1))))
                if (x.gte(2000)) cost = n(10).pow(n(10).pow(x.pow(n(2.25))))
                if (upg('G',104))  cost=cost.pow(upgradeEffect('G',104))
                if (mil('G',24))  cost=cost.pow(0.5)
                if (mil('G',26))  cost=cost.pow(0.1)
                return cost
            },
            purchaseLimit() {let lim=n(150)
                if(mil('H',6)) lim=lim.add(5)
                if(upg('H',42)) lim=lim.add(1)
                if(upg('G',143)) lim=lim.add(2)
                if(upg('G',144)) lim=lim.add(2)
                if(upg('G',145)) lim=lim.add(10)
                if(mil('G',33)) lim=lim.add('1e308')
                return lim},
            bulk(){
                let t=n(0)
                if(mil('G',35))  t=t.max(player[this.layer].Gsi.max(1).log(10).max(1).log(10).pow(4/9).sub(gba(this.layer, this.id)).sub(1).ceil())
                let c = this.cost(gba(this.layer, this.id).add(t))
                if (player[this.layer].Gsi.gte(c)) setBuyableAmount(this.layer, this.id,gba(this.layer, this.id).add(t))
                },
            canAfford() { return player[this.layer].Gsi.gte(this.cost()) },
            buy() { if(!mil('G',27)) {player[this.layer].Gsi = player[this.layer].Gsi.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let base = player.G.Gsi.add(10).log(10).pow(0.4).div(600) 
                if (upg('G',103)) base=base.mul(1.25)  
                let sc=n(0.7)
                if (base.gte(0.03)) base=base.div(0.03).pow(sc).mul(0.03)
                base=base.min(this.hardcap())
                return base},
            hardcap(){
                let hp=n(0.6)
                if(upg('G',123)) hp=hp.add(0.005)
                if(mil('G',21)) hp=hp.add(0.005)
                if(upg('G',125)) hp=hp.add(upgradeEffect('G',125))
                if(gcs('G',102)) hp=hp.add(clickableEffect('G',102))
                if(gcs('G',111)) hp=hp.add(clickableEffect('G',111))
                if(gcs('G',121)) hp=hp.mul(1.06)
                hp=hp.add(tmp.H.effect)
                if(hp.gte(1.4)) hp=hp.div(1.4).pow(0.75).mul(1.4)
                return hp
            },
            ex(){
                let e=n(0)
                if(gcs('I',52)) e=e.add(1)
                return e
            },
            effect(x) {
                let exp=n(1)
                let ef = this.base().mul(x.add(this.ex()).pow(exp))
                let sc=n(0.5)
                if(mil('G',21)) sc=sc.add(0.03)
                if(gcs('G',121)) sc=sc.add(0.07)
                if(upg('G',133)) sc=sc.add(0.02)
                if(gcs('G',104)) sc=sc.add(0.02)
                if(upg('H',35)) sc=sc.add(0.05)
                if(mil('G',31)) sc=sc.add(0.03)//0.72
                if(mil('H',10)) sc=sc.add(0.01)//0.73
                if(upg('G',154)) sc=sc.add(0.02)
                if(ef.gte(4.2))  ef=ef.div(4.2).pow(sc).mul(4.2)
                if(ef.gte(12))  ef=ef.div(12).pow(0.6).mul(12)
                let sc3=n(0.5)
                if(upg('H',32)) sc3=sc3.add(0.05)
                if(upg('H',33)) sc3=sc3.add(0.05)
                if(upg('H',43)) sc3=sc3.add(0.1)//0.7
                if(upg('G',145)) sc3=sc3.add(0.05)
                if(ef.gte(27.5))  ef=ef.div(27.5).pow(sc3).mul(27.5)
                if(ef.gte(150))  ef=ef.div(150).pow(0.5).mul(150)
                return ef},
            display() { 
                return "Gsi eff exp +"+ format(this.base(),3)  + "(hardcap at "+format(this.hardcap(),3)+" eff and "+format(this.purchaseLimit())+" purchases)  \n\
                Cost: " + format(this.cost()) + " Gsi \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            style() {if (this.canAfford()&&(!gba(this.layer, this.id).gte(this.purchaseLimit()))) return {'background-color': '#FF00F1' }},
            unlocked() { return (upg('G',83)) }
        },
        41: {
            title: "Gsb7", 
            cost(x) { 
                let bas=n(10)
                if (upg('G',104))  bas=bas.sub(4)
                if (mil('G',17))  bas=bas.sub(1)
                if (mil('G',19))  bas=bas.sub(1.5)
                let e=n(1.45)
                if (x.gte(500)) e=e.add(0.1)
                if(gcs('G',51)) e=e.sub(0.04)
                let cost = bas.pow( x.pow(e)).times('200')
                if (x.gte(800)) cost = cost.mul(n(10).pow(n(2).pow(x.sub(750).pow(this.sce())).mul(2)))
                if(mil('G',25)) cost=cost.min(n(10).pow(n(2).pow(x.pow(this.sce()))))//||gcs('I',21)
                return cost
            },
            sce(){
                let e=n(0.45)
                if(mil('G',22)) e=n(0.425)
                if(mil('G',24)) e=n(0.42)
                if(mil('G',25)) e=n(0.4)
                return e
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            bulk(){
                let t=n(0)
                if(mil('G',25))  t=t.max(player[this.layer].Gse.add(10).log(10).max(1).log(2).pow(this.sce().pow(-1)).sub(gba(this.layer, this.id)).sub(1).ceil().max(1))
                let c = this.cost(gba(this.layer, this.id).add(t))
                if (player[this.layer].Gse.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(t)
            },
            buy() { if(!mil('G',27)) {player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                if (upg('G',114))  e=e.add(gba('G',43)).add(gba('G',44))
                return e
            },
            base(){   let base = player.G.Gse.add(10).log(10).pow(1.1).mul(2)
                return base},
            effect(x) {
                let exp=n(1)
                if (gcs('G',81))  exp=exp.mul(1.01)
                let ef = this.base().pow(x.add(this.extra()).pow(exp)).max(1)
                return ef},
            display() { 
                return "Gse gain base x"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())},
            style() {if (this.canAfford()) return {'background-color': '#14FFF3' }},
            unlocked() { return (upg('G',101)) }
        },
        42: {
            title: "Gsb8", 
            cost(x) { 
                let bas=n(4000)
                let e=n(1.95)
                if (x.gte(20)) e=e.add(0.15)
                if(gcs('G',51)) e=e.sub(0.08)
                if (mil('G',17))  bas=n(1000)
                if (upg('G',112))  bas=n(200)
                if (mil('G',19))  bas=n(100)
                let cost = bas.pow( x.pow(e)).times('1e26')
                if (x.gte(80)) cost = cost.mul(n(10).pow(n(2).pow(x.sub(50).pow(this.sce())).mul(2)))
                if(mil('H',0)) cost=n(10).pow(n(2).pow(x.pow(this.sce())))
                return cost
            },
            sce(){
                let e=n(0.65)
                if(mil('G',22)) e=n(0.61)
                if(mil('H',0)) e=n(0.58)
                return e
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            bulk(){
                let t=n(0)
                if(mil('H',0))   t=t.max(player[this.layer].Gse.add(10).log(10).max(1).log(2).pow(this.sce().pow(-1)).sub(gba(this.layer, this.id)).sub(1).ceil().max(1))
                let c = this.cost(gba(this.layer, this.id).add(t))
                if (player[this.layer].Gse.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(t)
            },
            buy() {if(!mil('G',27)) {player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   
                let exp=n(0.5)
                if (upg('G',112))  exp=exp.add(0.05) 
                let b = player.G.Gse.add(10).log(10).pow(exp).div(100).add(0.05) 
                if (player.G.Gsetot.gte('1e5134')) b=b.mul(1.05) 
                //if(b.gte('1e50')) b=b.div('1e50').pow(0.25).mul('1e50')
                return b},
            effect(x) {
                let exp=n(1)
                let ef = this.base().mul(x.pow(exp))
                return ef},
            display() { 
                return "Gse gain exp +"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            style() {if (this.canAfford()) return {'background-color': '#14FFF3' }},
            unlocked() { return (upg('G',101)) }
        },
        43: {
            title: "Gsb9", 
            cost(x) { 
                let bas=n('1e4')
                let e=n(2.4)
                if (x.gte(8)) e=e.add(0.6)
                let cost = bas.pow(x.pow(e)).times('2e52')                
                if (x.gte(12)) cost = cost.mul(n(10).pow(n(2).pow(x.sub(6).pow(this.sce())).mul(40)))
                if (mil('G',29))  cost = n(10).pow(n(2).pow(x.pow(this.sce())).mul(5))
                if (upg('H',22))  cost = n(10).pow(n(2).pow(x.pow(this.sce())))
                if (mil('G',24))  cost=cost.pow(0.8)
                if (mil('G',26))  cost=cost.pow(0.8)
                if (upg('G',111)) cost=cost.div('2e5')
                if(gcs('I',105)) cost = n(10).pow(n(2).pow(x.pow(this.sce())))
                return cost
            },
            sce(){
                let e=n(0.95)
                if (!upg('H',22)) {if (n(gba(this.layer, this.id)).gte(20))  e=e.add(n(gba(this.layer, this.id)).sub(18).div(80))}
                if (player.G.Gsetot.gte('1e13144')) e=e.sub(0.03)
                if (mil('G',29)) e=e.sub(0.02)
                if (upg('H',22)) e=e.sub(0.05)
                if(n(ccomp('I',22)).gte(3)) e=e.sub(0.02)
                return e
            },
            bulk(){
                let t=n(0)
                if(gcs('I',105))   t=t.max(player[this.layer].Gse.add(10).log(10).max(1).log(2).pow(this.sce().pow(-1)).min(this.purchaseLimit()).sub(gba(this.layer, this.id)).sub(1).ceil().max(1))
                let c = this.cost(gba(this.layer, this.id).add(t))
                if (player[this.layer].Gse.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(t)
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            buy() { if(!mil('G',27)) {player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let base = player.G.Gsi.add(10).log(10).pow(0.38).div(750)
                let sc=n(0.7)
                if (base.gte(0.02)) base=base.div(0.02).pow(sc).mul(0.02) 
                if(getClickableState('G',31))  base=base.mul(1.02)
                base=base.min(this.hardcap())
                return base},
            hardcap(){
                let hp=n(0.3)
                if(upg('G',123)) hp=hp.add(0.005)
                if(mil('G',21)) hp=hp.add(0.005)
                if(gcs('G',102)) hp=hp.add(clickableEffect('G',102))
                if(gcs('G',111)) hp=hp.add(clickableEffect('G',111))
                if(gcs('G',121)) hp=hp.mul(1.06)
                hp=hp.add(tmp.H.effect)
                if(hp.gte(1.4)) hp=hp.div(1.4).pow(0.75).mul(1.4)
                return hp
            },
            purchaseLimit() {let lim=n(800)
                return lim},
            effect(x) {
                let exp=n(1)
                let ef = this.base().mul(x.pow(exp))
                let sc=n(0.5)
                if(mil('G',21)) sc=sc.add(0.03)
                if(gcs('G',121)) sc=sc.add(0.07)
                if(upg('G',133)) sc=sc.add(0.02)
                if(gcs('G',104)) sc=sc.add(0.02)
                if(ef.gte(1.1))  ef=ef.div(1.1).pow(sc).mul(1.1)
                return ef},
            display() { 
                return "Gse 1st eff exp +"+ format(this.base(),3) + "(hardcap at "+format(this.hardcap(),3)+")  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            style() {if (this.canAfford()&&(!gba(this.layer, this.id).gte(this.purchaseLimit()))) return {'background-color': '#14FFF3' }},
            unlocked() { return (upg('G',101)) }
        },
        44: {
            title: "Gsb10", 
            cost(x) { 
                let e=n(0.75)
                if (x.gte(18))  e=e.add(0.05)
                if (x.gte(56))  e=e.add(0.03)
                let cost = n(10).pow(n(2).pow(x.pow(e)).mul(12)).mul('1e2105')//1e2117 for 1st
                if (upg('G',122))  cost = n(10).pow(n(2).pow(x.pow(e)).mul(7.5))
                if (x.gte(60)) cost = n(10).pow(n(10).pow(x.sub(45).pow(1.2)))
                if (x.gte(65)) cost = n(10).pow(n(10).pow(x.sub(35).pow(2).div(20).add(8.4)))
                return cost
            },
            purchaseLimit() {let lim=n(60)
                if(mil('G',30)) lim=lim.add(5)
                if(mil('H',8)) lim=lim.add(10)
                return lim},
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            buy() { if(!mil('G',27)) {player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b = player.G.Gse.add(10).log(10).pow(0.5).div(300) 
                if(player.G.Gsetot.gte('5e5050')) b=b.mul(1.1)
                if(b.gte(45)) b=b.div(45).pow(0.4).mul(45)
                b=b.min(this.hardcap())
                return b},
            hardcap(){
                let h=n(52)
                if(gcs('G',103)) h=h.add(n(clickableEffect('G',111)).mul(2))
                if(upg('H',41)) h=h.add(upgradeEffect('H',41)[0])
                return h
                },
            effect(x) {
                let exp=n(1)
                let sc=n(0.7)
                if(mil('G',20)) sc=sc.add(0.05)
                if(upg('H',41)) sc=sc.add(0.05)
                if(upg('G',152)) sc=sc.add(0.02)
                let ef = this.base().mul(x.pow(exp))
                if(ef.gte(10))  ef=ef.div(10).pow(sc).mul(10)
                let sc2=n(0.8)
                if(upg('G',152)) sc2=sc2.add(0.02)
                if(ef.gte(40))  ef=ef.div(40).pow(sc2).mul(40)
                return ef},
            display() { 
                return "Gse 2nd eff mult +"+ format(this.base(),3) + "(hardcap at "+format(this.hardcap(),3)+" eff and "+format(this.purchaseLimit())+" purchases)  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            style() {if (this.canAfford()&&(!gba(this.layer, this.id).gte(this.purchaseLimit()))) return {'background-color': '#14FFF3' }},
            unlocked() { return (upg('G',111)) }
        },
        51: {
            title: "Gsb11", 
            cost(x) { 
                let cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(20)).mul('1e5069')//5047
                if(upg('G',124)) cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(16)).mul('1e5069')
                if(upg('G',131)) cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(10))
                if(upg('G',132)) cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(6))
                if(mil('G',37)) cost = n(10).pow(n(2).pow(x.pow(this.sc())))
                return cost
            },
            sc(){
                let e=n(0.95)
                if(upg('G',121))  e=e.sub(0.03)
                return e
            },
            bulk(){
                let t=n(0)
                if(mil('G',37)||gcs('I',105))   t=t.max(player[this.layer].Gse.max(10).log(10).max(1).log(2).pow(this.sc().pow(-1)).sub(gba(this.layer, this.id)).sub(1).ceil().max(1))
                let c = this.cost(gba(this.layer, this.id).add(t))
                if (player[this.layer].Gse.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(t)
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            buy() { if(!mil('G',27)) {player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let base = n(1.01) 
                if(gcs('G',32))  base=base.add(0.002)
                if(gcs('G',83))  base=base.add(0.0025)
                if(gcs('G',101))  base=base.add(0.0035)
                if(upg('H',15))  base=base.add(0.004)
                return base},
            effect(x) {
                let ef = this.base().pow(x)
                return ef},
            display() {
                return "raise Gs gain to ^"+ format(this.base(),4) + "  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect(),3)},
            style() {if (this.canAfford()) return {'background-color': '#14FFF3' }},
            unlocked() { return (mil('G',19)) }
        },
        52: {
            title: "Gsb12", 
            cost(x) {
                let cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(25)).mul('1e5072')//1e5076 for 1st
                if(upg('G',124)) cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(20)).mul('1e5072')//1e5051
                if(upg('G',131)) cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(12))
                if(upg('G',132)) cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(8))
                if(mil('G',37)) cost = n(10).pow(n(2).pow(x.pow(this.sc())))
                return cost
            },
            sc(){
                let e=n(1.05)
                if(upg('G',121))  e=e.sub(0.04)
                return e
            },
            bulk(){
                let t=n(0)
                if(mil('G',37)||gcs('I',105))   t=t.max(player[this.layer].Gse.max(10).log(10).max(1).log(2).pow(this.sc().pow(-1)).sub(gba(this.layer, this.id)).sub(1).ceil().max(1))
                let c = this.cost(gba(this.layer, this.id).add(t))
                if (player[this.layer].Gse.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(t)
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            buy() { if(!mil('G',27)) {player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let base = n(1.0085) 
                if(getClickableState('G',32))  base=base.add(0.002)
                if(gcs('G',83))  base=base.add(0.0015)
                if(gcs('G',101))  base=base.add(0.004)
                if(upg('H',15))  base=base.add(0.004)
                return base},
            effect(x) { 
                let ef = this.base().pow(x)
                return ef},
            display() {
                return "raise Gsi gain to ^"+ format(this.base(),4) + "  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect(),3)},
            style() {if (this.canAfford()) return {'background-color':'#14FFF3'}},
            unlocked() { return (mil('G',19)) }
        },
        61: {
            title: "GG1", 
            cost(x) {
                let cost = n(10).pow(x.add(10).pow(this.sce())).mul('2e6231')//~1e6045 for 1st
                if (upg('G',121))  cost=cost.div('1e6390').pow(0.8).mul('1e6390')//1e6045
                if (x.gte(200)) cost=cost.mul(n(10).pow(n(10).pow(x.sub(180).pow(0.28)).mul(5)))
                if (x.gte(500)) cost=cost.pow(n(1.25).add(x.sub(500).pow(0.35).div(50)))
                if (upg('H',11)) cost=n(10).pow(n(2).pow(x.add(135).pow(this.sc2()).mul(3)))
                return cost
            },
            sce(){
                let e=n(2.2)
                //if(upg('G',123)) e=e.sub(0.03)
                if (player.G.Gsetot.gte('1e27700')) e=e.sub(0.05)
                if(upg('G',124)) e=e.sub(0.03)
                if (player.G.GGtot.gte(311)) e=e.sub(0.04)
                return e
            },
            sc2(){
                let e=n(0.3)
                return e
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            bulk(){
                let t=n(0)
                if(upg('H',11))  t=t.max(player[this.layer].Gse.add(10).log(10).max(1).log(2).div(3).pow(this.sc2().pow(-1)).sub(135).sub(gba(this.layer, this.id)).sub(1).ceil().max(1))
                let c = this.cost(gba(this.layer, this.id).add(t))
                {setBuyableAmount(this.layer, this.id,gba(this.layer, this.id).add(t))
                player.G.GG=player.G.GG.add(t.mul(this.am()))
                player.G.GGtot=player.G.GGtot.add(t.mul(this.am()))} 
            },
            am(){let a=n(1)
                a=a.mul(tmp.G.ggmt)
                return a
            },
            buy() { if(!mil('G',27)) {player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())}
                setBuyableAmount(this.layer, this.id,gba(this.layer, this.id).add(1))
                player.G.GG=player.G.GG.add(this.am())
                player.G.GGtot=player.G.GGtot.add(this.am())},
            effect(x) { 
                let ef = n(x).mul(this.am())
                return ef},
            display() { 
                return "gain " + format(this.am()) + " GG  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return (upg('G',115)) }
        },
        62: {
            title: "GG2", 
            cost(x) {
                //let cost = n(10).tetrate(n(7.0895).add(x.add(10).log(10).div(50)))//~1.287F7/1095 for 1st
                //if (mil('G',25)) cost = n(10).tetrate(n(7.0895).add(x.add(10).log(10).pow(0.85).div(50)))
                //if(x.gte(15)) cost=n(10).tetrate(n(6.3669).add(x.pow(0.15).div(2)))
                let cost = n(10).tetrate(n(6.2103).add(x.add(50).pow(0.15).div(2)))
                if(upg('G',155)) cost = n(10).tetrate(n(6).add(x.pow(0.15).div(2)))
                return cost
            },
            canAfford() { return player.points.gte(this.cost()) },
            // bulk(){
            //     let t=n(0)
            //     if(upg('G',155))  t=player.points.add(10).slog(10).sub(6).mul(2).pow(20/3).sub(gba(this.layer, this.id)).sub(1).ceil().max(1)
            //     let c = this.cost(gba(this.layer, this.id).add(t))
            //     if (player.points.gte(c)) {setBuyableAmount(this.layer, this.id,gba(this.layer, this.id).add(t))
            //     player.G.GG=player.G.GG.add(t.mul(this.amt()))
            //     player.G.GGtot=player.G.GGtot.add(t.mul(this.amt()))
            //     }
            // },
            buy() { 
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.G.GG=player.G.GG.add(this.am().mul(3))
                player.G.GGtot=player.G.GGtot.add(this.am().mul(3))},
            effect(x) { 
                let ef = n(x).mul(this.am())
                return ef},
            am(){
                let a=n(3)
                //if(upg('G',133)) a=a.add(1)
                a=a.mul(tmp.G.ggmt)
                return a
            },
            display() { 
                return "gain " + format(this.am()) + " GG  \n\
                Cost: " + format(this.cost()) + " points \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return (mil('G',24)&&!upg('G',155)) }
        },
        71: {
            title: "Gr1", 
            cost(x) { 
                let c = n(10).pow(n(2).pow(x.pow(this.sc()))).mul(n(2).pow(x.sub(1).max(0))).mul(10)
                if(x.gte(6)) c=c.mul(n(4).pow(x.sub(6).pow(1.25)))
                if(x.gte(100)) c= n(10).pow(n(4).pow(x.sub(10).pow(this.sc())))
                if(player[this.layer].Gsr.gte('1e1284')||n(ccomp('I',22)).gte(1)) c=n(10).pow(n(4).pow(x.pow(this.sc())))
                return c
            },
            sc(){
                let e=n(0.25)
                if(mil('G',33)) e=e.sub(0.01)
                if(mil('G',37)) e=e.sub(0.04)
                if(gba(this.layer, this.id).gte(100)) e=e.add(0.05)
                if(player[this.layer].Gsr.gte('1e1164')) e=e.mul(0.99)
                if(player[this.layer].Gsr.gte('1e1284')) e=e.mul(0.98)
                return e
            },
            bulk(){
                let tar=n(0)
                if(upg('G',152)&&player.H.auto7)   tar=player[this.layer].Gsr.add(10).log(10).max(1).log(4).pow(this.sc().pow(-1)).sub(gba(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].Gsr.gte(c)) setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(tar))
            },
            canAfford() { return player[this.layer].Gsr.gte(this.cost()) },
            buy() { if(!mil('I',3)) player[this.layer].Gsr = player[this.layer].Gsr.sub(this.cost())
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                e=e.add(gba('G',73).div(5))
                if(upg('H',42)) e=e.add(gba('G',33).sub(155).max(0).mul(1.2))
                e=e.add(gba('G',74).div(5))
                return e
            },
            base(){   let base = player.G.Gsr.add(10).log(10).pow(0.45).mul(3)
                return base},
            effect(x) {
                let exp=n(1)
                let ef = this.base().pow(x.add(this.extra()).pow(exp)).max(1)
                if(upg('G',143))  ef=ef.mul(2)
                return ef},
            display() { 
                return "GsR gain base x"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " GsR \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())},
            style() {if (this.canAfford()) return {'background-color': '#6DA462'}},
            unlocked() { return (mil('G',30)) }
        },
        72: {
            title: "Gr2", 
            cost(x) { 
                let c = n(10).pow(n(2).pow(x.pow(this.sc()))).mul(n(100).pow(x)).mul(2e15)
                if(mil('G',36)) c=n(10).pow(n(2).pow(x.pow(this.sc())))
                return c
            },
            sc(){
                let e=n(0.5)
                //if(gba(this.layer, this.id).gte(100)) e=e.add(0.05)
                //if(gba(this.layer, this.id).gte(600)) e=e.add(0.02)
                if(player[this.layer].Gsr.gte('1e1164')) e=e.mul(0.99)//0.49
                if(upg('H',44)) e=e.sub(0.02)
                return e
            },
            bulk(){
                let t=n(0)
                if(mil('G',36)&&player.H.auto9)   t=t.max(player[this.layer].Gsr.max(1).log(10).max(1).log(2).pow(this.sc().pow(-1)).sub(gba(this.layer, this.id)).sub(1).ceil())
                let c = this.cost(gba(this.layer, this.id).add(t))
                if (player[this.layer].Gsr.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(t)
            },
            canAfford() { return player[this.layer].Gsr.gte(this.cost()) },
            buy() { if(!mil('I',3)) player[this.layer].Gsr = player[this.layer].Gsr.sub(this.cost())
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b = n(1.01)
                b=b.add(buyableEffect('H',83)[0])
                return b},
            efxp(){let e=n(0.5)
                if(upg('G',144)) e=e.add(0.02)
                if(mil('H',8)) e=e.add(0.03)
                if(upg('G',153)) e=e.add(0.025)
                return e},
            effect(x) {
                let ef = this.base().pow(x.pow(this.efxp()))
                return ef},
            display() { 
                return "div h1/y1 exp by "+ format(this.base(),4) + "^x^"+format(this.efxp())+"  \n\
                Cost: " + format(this.cost()) + " GsR \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: /" + format(this.effect(),4)},
            style() {if (this.canAfford()) return {'background-color': '#6DA462'}},
            unlocked() { return (mil('G',30)) }
        },
        73: {
            title: "Gr3", 
            cost(x) { 
                let c = n(10).pow(n(2).pow(x.pow(this.sc()))).mul(n(10).pow(x)).mul(1e22)
                if(x.gte(100)||ccomp('I',22).gte(1)) c=n(10).pow(n(2).pow(x.sub(5).pow(this.sc())))
                return c
            },
            sc(){
                let e=n(0.4)
                if(gba(this.layer, this.id).gte(100)) e=e.add(0.05)
                if(upg('H',43)) e=e.sub(0.01)
                if(player[this.layer].Gsr.gte('1e1164')) e=e.mul(0.99)
                if(player[this.layer].Gsr.gte('1e1284')) e=e.mul(0.98)
                return e
            },
            bulk(){
                let tar=n(0)
                if(upg('G',152)&&player.H.auto7)   tar=player[this.layer].Gsr.add(10).log(10).max(1).log(2).pow(this.sc().pow(-1)).sub(gba(this.layer, this.id)).add(4).ceil().max(1)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].Gsr.gte(c)) setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(tar))
            },
            canAfford() { return player[this.layer].Gsr.gte(this.cost()) },
            buy() { if(!mil('I',3)) player[this.layer].Gsr = player[this.layer].Gsr.sub(this.cost())
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let e=n(1.5)
                if(player[this.layer].Gsr.gte('5e1432')) e=e.add(0.25)
                let b = player.G.Gsr.add(10).log(10).add(10).log(10).pow(e).div(10).add(0.1)
                b=b.add(buyableEffect('G',74)[1])
                return b},
            effect(x) { 
                let exp=n(0.9)
                let ef = this.base().mul(x.pow(exp))
                return ef},
            display() { 
                return "GsR gain exp +"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " GsR \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            style() {if (this.canAfford()) return {'background-color': '#6DA462'}},
            unlocked() { return (mil('G',30)) }
        },
        74: {
            title: "Gr4", 
            cost(x) {
                let c = n(10).pow(n(2).pow(x.pow(this.sc()))).mul(n(1000).pow(x)).mul('1e412')
                //if(x.gte(100)) c = n(10).pow(n(2).pow(x.sub(5).pow(this.sc())))
                if(mil('G',36)) c=n(10).pow(n(2).pow(x.pow(this.sc())))
                return c
            },
            sc(){
                let e=n(0.4)
                if(gba(this.layer, this.id).gte(25)) e=e.add(0.05)
                if(player[this.layer].Gsr.gte('1e1164')) e=e.mul(0.99)
                return e
            },
            bulk(){
                let t=n(0)
                if(mil('G',36)&&player.H.auto9)   t=t.max(player[this.layer].Gsr.max(1).log(10).max(1).log(2).pow(this.sc().pow(-1)).sub(gba(this.layer, this.id)).sub(1).ceil())
                let c = this.cost(gba(this.layer, this.id).add(t))
                if (player[this.layer].Gsr.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(t)
            },
            canAfford() { return player[this.layer].Gsr.gte(this.cost()) },
            buy() { if(!mil('I',3)) player[this.layer].Gsr = player[this.layer].Gsr.sub(this.cost())
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b = n(0.02)
                return b},
            base2(){   let b = n(0.01)
                return b},
            effect(x) {
                let exp=[n(0.85),n(0.9)]
                //if(upg('H',45)) exp[1]=n(1)
                let ef = this.base().mul(x.pow(exp[0]))
                let ef2 = this.base2().mul(x.pow(exp[1]))
                return [ef,ef2]},
            display() {
                return "GsR eff exp +"+ format(this.base()) + " and r3 base +"+ format(this.base2()) + " \n\
                Cost: " + format(this.cost()) + " GsR \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: eff +" + format(this.effect()[0],3)+",r3 +"+ format(this.effect()[1],3)},
            style() {if (this.canAfford()) return {'background-color': '#6DA462'}},
            unlocked() { return player.H.dhmax[1].gte(1) }
        },
    },
    challenges:{
        11: {//1x1,31,1x2,32,33,1x3,34,1x4,35,1x5,c2
            name: "Gc1",
            completionLimit: 5,
            challengeDescription: function() {
                return "F1 prod ^0.8. <br> Completion: " +ccomp("G", 11) + "/5"},
            unlocked() { return (mil("G", 2))},
            goal(){
                let a=[n('e780'),n('e880'),n('e1080'),n('e1220'),n('e1670'),n('e1670')]
                return a[n(ccomp(this.layer,this.id))]
            },            
            goalDescription:  function() {return format(this.goal())+' F1'},
            canComplete(){return player.F.F1.gte(this.goal())},
            //currencyInternalName: "F1",
            rewardDescription: "Fd8 mult all dims.<br>unlock Gc1p at 3 comp.",
            rewardEffect() {
                let exp = ccomp("G", 11).mul(0.3).add(0.7)
                let ef = gba('F',32).pow(exp).max(1)
                if (ccomp("G", 11).gte(1))  return ef
                else return n(1)
            },
            rewardDisplay() {return 'x'+format(this.rewardEffect())},
        },
        12: {
            name: "Gc2",
            completionLimit: 5,
            challengeDescription: function() {
                return "dim mult per buy ^0.5. <br> Completion: " +ccomp("G", 12) + "/5"},
            unlocked() { return (upg("F", 75))},
            goal(){
                let a=[n('e1260'),n('e1570'),n('e3050'),n('e6100'),n('e11500'),n('e11500')]//7000
                return a[ccomp(this.layer,this.id)]
            },            
            goalDescription:  function() {return format(this.goal())+' F1'},
            canComplete(){return player.F.F1.gte(this.goal())},
            rewardDescription: "tickspeed is stronger.<br>unlock Gc2p at 3 comp.",
            rewardEffect() {
                let ef = ccomp("G", 12).mul(0.025).add(1)
                if(upg('G',45)) ef=ef.pow(2)
                if (ccomp("G", 12).gte(1))  return ef
                else return n(1)
            },
            rewardDisplay() {return 'x'+format(this.rewardEffect(),3)},
        },
        21: {
            name: "Gc3",
            completionLimit: 5,
            challengeDescription: function() {
                return "Fd8 cost ^5. <br> Completion: " +ccomp("G", 21) + "/5"},
            unlocked() { return (mil("G",5))},
            goal(){
                let a=[n('e3.5e4'),n('e8.1e4'),n('e1.86e5'),n('e1.2e8'),n('e2.4e8'),n('e2.4e8')]
                return a[n(ccomp(this.layer,this.id))]
            },            
            goalDescription:  function() {return format(this.goal())+' F1'},
            canComplete(){return player.F.F1.gte(this.goal())},
            rewardDescription: "Gc3 comp add to dim mult per buy.<br>unlock Gc3p and edit TB cost at 3 comp.",
            rewardEffect() {
                let b=n(0.06)
                if(upg('G',45)) b=b.add(0.04)
                let ef = ccomp("G", 21).mul(b)
                if (ccomp("G", 21).gte(1))  return ef
                else return n(0)
            },
            rewardDisplay() {return '+'+format(this.rewardEffect(),3)},
        },
        22: {
            name: "Gc4",
            completionLimit: 5,
            challengeDescription: function() {
                return "TBs eff is polynomial instead of exponential and disable other TB boosts. <br> Completion: " +ccomp("G", 22) + "/5"},
            unlocked() { return (mil("G",7))},
            goal(){//improved at v0.7.1
                let a=[n('e6.45e8'),n('e9.72e8'),n('e2.35e9'),n('e3.02e9'),n('e1.93e10'),n('e1.93e10')]
                return a[n(ccomp(this.layer,this.id))]
            },            
            goalDescription:  function() {return format(this.goal())+' F1'},
            canComplete(){return player.F.F1.gte(this.goal())},
            rewardDescription: "Gc4 comp add to TB power.<br>unlock Gc4p at 3 comp,edit Gc3p and Gc4p formula at 4 and 5 comp.",
            rewardEffect() {
                let ef = ccomp("G", 22).mul(0.001)
                if (ccomp("G", 22).gte(1))  return ef
                else return n(0)
            },
            rewardDisplay() {return '+'+format(this.rewardEffect(),3)},
        },
    },
    gc1g(){
        let ef=n(0)
        let exp=n(0.75)
        let exp2=n(0.95)
        if (upg('G',55)) exp2=exp2.add(0.05)
        if (upg('F',83)) exp=exp.add(0.02)
        if (upg('G',42)) exp=exp.add(0.02)
        if (upg('G',43)) exp=exp.add(0.03)
        if(mil('G',8)) exp=exp.add(0.05)
        if(mil('G',9)) exp=exp.add(0.03)//0.9
        if(gcs('I',42)) exp=exp.add(0.01)
        if (inChallenge('G',11)){if (player.F.F1.gte('1e1080')) ef=n(10).pow(player.F.F1.div('1e1080').log(10).pow(exp))}
        if(mil('G',10)||gcs('I',65)) ef=n(10).pow(player.F.F1.pow(exp2).add(10).log(10).pow(exp))
        if (upg('G',41)) ef=ef.pow(upgradeEffect('G',41))
        return ef
    },
    gc2g(){
        let ef=n(0)
        let exp=n(0.6)
        let exp2=n(0.9)
        if (upg('G',55)) exp2=exp2.add(0.1)
        if (upg('F',83)) exp=exp.add(0.02)
        if (upg('G',42)) exp=exp.add(0.02)
        if (upg('G',43)) exp=exp.add(0.06)//0.7
        if(mil('G',8)) exp=exp.add(0.05)
        if(mil('G',9)) exp=exp.add(0.05)
        if(gcs('I',42)) exp=exp.add(0.01)
        if (inChallenge('G',12)){if (player.F.F1.gte('1e3050')) ef=n(10).pow(player.F.F1.div('1e3050').log(10).pow(exp))}
        if(mil('G',12)||gcs('I',65)) ef=n(10).pow(player.F.F1.pow(exp2).add(10).log(10).pow(exp))
        if (upg('G',41)) ef=ef.pow(upgradeEffect('G',41))
        return ef
    },
    gc3g(){
        let ef=n(0)
        let exp=n(3)
        let exp2=n(0.2)
        if (upg('G',55)) exp2=exp2.add(0.05)
        if (mil('I',6))  exp2=exp2.add(buyableEffect('I',21))
        if(gcs('I',45)&&player.G.points.gte('ee16')) exp2=exp2.add(0.05)
        if(gcs('I',55)&&player.G.points.gte('ee16')) exp2=exp2.add(0.03)
        if (upg('F',85)) exp=exp.mul(2)
        if (inChallenge('G',21)){
            if (player.F.F1.gte('1e168000')){
                if (ccomp("G", 22).gte(4)) ef=n(10).pow(player.F.F1.div('1e168000').log(10).pow(exp2))
                else ef=player.F.F1.div('1e168000').log(10).pow(exp)} }
        if(mil('G',13)) ef=n(10).pow(player.F.F1.pow(0.2).add(10).log(10).pow(exp))
        if (upg('G',41)) ef=ef.pow(upgradeEffect('G',41))
        return ef
    },
    gc4g(){
        let ef=n(0)
        let exp=n(2)
        let exp2=n(0.14)
        if (upg('G',51)) exp2=exp2.add(0.01)
        if (mil('I',6))  exp2=exp2.add(buyableEffect('I',21))
        if(gcs('I',45)&&player.G.points.gte('ee16')) exp2=exp2.add(0.05)
        if(gcs('I',55)&&player.G.points.gte('ee16')) exp2=exp2.add(0.03)
        if (inChallenge('G',22)){
            if (player.F.F1.gte('e2.35e9')){
                if (ccomp("G", 22).gte(5)) ef=n(10).pow(player.F.F1.div('e2.35e9').log(10).pow(exp2))
                else ef=player.F.F1.div('e2.35e9').log(10).pow(exp)} }
        if(mil('G',13)) ef=n(10).pow(player.F.F1.pow(0.2).add(10).log(10).pow(exp))
        if (upg('G',41)) ef=ef.pow(upgradeEffect('G',41))
        return ef
    },
    gc1ef(){
        let exp=n(0.1)
        if (mil('F',18)) exp=exp.mul(1.5)
        if (upg('G',53))  exp=exp.add(0.1)
        let ef=player.G.Gc1p.pow(exp).add(1)
        return ef},
    gc2ef(){
        let exp=n(0.04)
        if (upg('F',83)) exp=exp.mul(1.5)
        if (upg('G',53))  exp=exp.add(0.04)
        let ef=player.G.Gc2p.pow(exp).add(1)
        return ef},
    gc3ef(){
        let exp=n(0.04)
        if(mil('G',7)) exp=exp.mul(1.5)
        if (upg('G',53))  exp=exp.add(0.02)
        let ef=player.G.Gc3p.pow(exp).add(1)
        return ef},
    gc4ef(){
        let exp=n(1.5)
        if (upg('G',53))  exp=exp.add(0.3)
        let ef=player.G.Gc4p.add(1).log(10).pow(exp).div(400)
        return ef},   
    ggmt(){
        let ef=n(1)
        if(mil('I',0)) ef=ef.add(0.1)
        if(gcs('I',63)) ef=ef.add(0.1)
        if(gcs('I',61)) ef=ef.add(0.1)
        if(gcs('I',54)) ef=ef.add(0.1)
        return ef
    }, 
    gsb(){
        let ef=n(0)
        let exp=n(1)
        if (upg('G',62))  exp=exp.mul(2)
        exp=exp.mul(buyableEffect('G',22).add(1))
        if(player.G.points.gte('ee1e500')) ef=player.G.points.log(10).log(10).log(10).sub(450).div(50).min('1e100000').pow(exp)
        let sc1=n(0.85)
        if (upg('G',101)) sc1=sc1.add(0.03)
        if (upg('G',103)) sc1=sc1.add(0.02)
        if (mil('G',17)) sc1=sc1.add(0.02)
        let sc2=n(0.78)
        if (mil('G',17)) sc2=sc2.add(0.02)
        if (ef.gte('1e100')) ef=n('1e100').mul(n(10).pow(ef.div('1e100').log(10).mul(sc1)))
        if (ef.gte('1e10000')) ef=n('1e10000').mul(n(10).pow(ef.div('1e10000').log(10).mul(sc2)))
        if(!gba('J',103).gte(1)) ef=ef.min('e1e10')
        if(mil('I',0)) ef=ef.mul(100)
        if(gcs('I',64)) ef=ef.mul(1e4)
        if(n(ccomp('I',22)).gte(5))  ef=ef.mul('1e1000')
        if(upg('G',101)) ef=ef.pow(1.05)
        ef=ef.mul(buyableEffect('G',21))
        ef=ef.mul(tmp.G.gsir)
        if(!upg('H',35)) {if (ef.gte('ee19')) ef=n('ee19').mul(n(10).pow(ef.div('ee19').log(10).mul(0.8)))}
        ef=ef.pow(buyableEffect('G',51))
        if (upg('G',72)) ef=ef.mul(upgradeEffect('G',72))
        if(gcs('G',44))  ef=ef.pow(clickableEffect('G',44))
        if(gcs('G',63))  ef=ef.pow(clickableEffect('G',63))
        if(gcs('G',73))  ef=ef.pow(clickableEffect('G',73))
        if(gcs('G',112))  ef=ef.pow(clickableEffect('G',112))
        if(gcs('G',122))  ef=ef.pow(1.8)
        if(upg('H',13)) ef=ef.pow(upgradeEffect('H',13))
        ef=ef.pow(buyableEffect('H',33))
        if(mil('J',4)) ef=ef.pow(buyableEffect('I',13)[0])
        if(gcs('G',131)) ef=n(10).pow(ef.log(10).pow(1.008))
        if(gcs('I',311)) ef=n(10).tetrate(ef.max(10).slog().sub(tmp.I.resv[1]).max(0))
        ef=n(10).tetrate(ef.max(10).slog().add(buyableEffect('J',43)).max(0))
        ef=ef.mul(buyableEffect('J',35)[0])
        ef=ef.pow(buyableEffect('J',85))
        ef=ef.min(tmp.H.php)
        return ef},
    gsef(){
        let exp=n(2)
        if (upg('G',62))  exp=exp.mul(1.5)
        if (mil('G',15))  exp=exp.add(0.2)
        if (upg('G',64))  exp=exp.add(0.4)
        if (upg('G',71))  exp=exp.add(0.4)
        if (upg('G',83))  exp=exp.add(0.3)
        exp=exp.add(buyableEffect('G',23))
        let ef=player.G.Gs.add(10).log(10).pow(exp)
        ef=ef.pow(buyableEffect('H',33))
        if(upg('H',21)) ef=ef.pow(upgradeEffect('H',21))
        if(mil('I',0)&&player.G.points.gte('ee1e500')) ef=ef.mul(10)//ef.pow(1.05)
        if(gcs('I',54)&&player.G.points.gte('ee1e500')) ef=ef.mul(10)//ef.pow(1.05)
        if(n(ccomp('I',22)).gte(2)&&player.G.points.gte('ee1e500'))  ef=ef.mul(100)
        if(mil('I',2)) ef=ef.pow(1.005)
        if(gcs('I',51)) ef=ef.pow(1.005)  
        if(ch('I',11)) ef=ef.pow(challengeEffect('I',11))      
        return ef}, 
    gsre(){
        let ef=tmp.G.gsef
        ef=ef.pow(buyableEffect('H',63)[0])        
        return ef
    },
    gsib(){
        let ef=n(0)
        let exp=n(1.1)
        exp=exp.mul(n(buyableEffect('G',32)).add(1))
        if (upg('G',94)) exp=exp.add(0.4)
        if (upg('G',105)) exp=exp.add(0.3)
        if (player.G.Gs.gte('1e2920')) ef=player.G.Gs.add(10).log(10).sub(2920).max(0).pow(exp).div(10)
        let sc1=n(0.85)
        if (ef.gte('1e100000')) ef=n('1e100000').mul(n(10).pow(ef.div('1e100000').log(10).mul(sc1)))
        ef=ef.mul(buyableEffect('G',31))
        ef=ef.mul(tmp.G.gser)
        ef=ef.min('ee1000')
        if(mil('I',0)) ef=ef.mul(100)
        ef=ef.pow(buyableEffect('G',52))
        if(upg('G',84))  ef=ef.mul(upgradeEffect('G',84))
        if(upg('G',95))  ef=ef.mul(upgradeEffect('G',95))
        if(gcs('G',62))  ef=ef.pow(clickableEffect('G',62))
        if(gcs('G',72))  ef=ef.mul(clickableEffect('G',72)[0])
        if(player.G.Gsetot.gte('e260000')) ef=ef.pow(clickableEffect('G',72)[1])
        if(gcs('G',122))  ef=ef.pow(1.5)
        if(gba('J',102).gte(1)) ef=ef.pow(buyableEffect('I',13)[1])
        if(gcs('G',131)) ef=n(10).pow(ef.log(10).pow(1.003))
        if(gcs('I',311)) ef=n(10).tetrate(ef.max(10).slog().sub(tmp.I.resv[2]).max(0))
        let tet=n(buyableEffect('J',43))
        if(upg('H',53)) tet=tet.add(upgradeEffect('H',53))
        ef=n(10).tetrate(ef.max(10).slog().add(tet).max(0))
        ef=ef.mul(buyableEffect('J',35)[0])
        ef=ef.pow(buyableEffect('J',85))
        ef=ef.min(tmp.H.php)
        return ef},
    gsief(){
        let exp=n(0.7)
        exp=exp.add(buyableEffect('G',33))
        exp=exp.add(tmp.G.gser2)
        let sc=n(0.7).pow(exp.add(8).max(10).log(10).add(9).log(10))
        if (exp.gte(3)) exp=exp.div(3).pow(sc).mul(3) 
        let m=n(1.25)
        if (upg('G',94))  m=m.mul(1.2)
        if (upg('G',95))  m=m.mul(1.2)
        let ef=player.G.Gsi.add(10).log(10).pow(exp).sub(1).mul(m)
        let sc1=n(0.9)
        if(upg('G',111)) sc1=sc1.add(0.03)
        if(upg('G',112)) sc1=sc1.add(0.03)
        if(gcs('G',42)) sc1=sc1.add(0.02)
        //if(mil('G',20)) sc1=sc1.add(0.02)  //too strong that cause infinite growth
        if(gcs('G',82)) sc1=sc1.add(0.02)
        if (ef.gte('500')) ef=ef.div(500).pow(sc1).mul(500)//rem
        if (ef.gte('250000')&&!upg('G',155)) ef=ef.div(250000).pow(0.5).mul(250000)//rem
        if (ef.gte('5e7')&&!upg('G',155)) ef=ef.div(5e7).pow(0.6).mul(5e7)//rem
        if (ef.gte('1e9')) ef=n('1e9').mul(n(10).pow(ef.div('1e9').log(10).mul(0.8)))
        if (ef.gte('1e15')) ef=n('1e15').mul(n(10).pow(ef.div('1e15').log(10).mul(0.7)))
        if (ef.gte('1e25')) ef=n('1e25').mul(n(10).pow(ef.div('1e25').log(10).mul(0.8)))
        let sc5=n(0.95)
        if(mil('H',6)) sc5=sc5.add(0.01)
        if(mil('G',30)) sc5=sc5.add(0.0025)
        if(upg('H',43)) sc5=sc5.add(0.0035)
        if(upg('G',143)) sc5=sc5.add(0.004)//0.97
        if(upg('G',144)) sc5=sc5.add(0.0025)
        if(upg('G',145)) sc5=sc5.add(0.003)
        if(mil('H',8)) sc5=sc5.add(0.0045)//0.98
        if(mil('H',12)) {sc5=sc5.add(0.003)
            if(player.H.harsh.gte('e1.5e2085')) sc5=sc5.add(0.001)
            if(player.H.harsh.gte('e3.36e2113')) sc5=sc5.add(0.002)
            if(player.H.harsh.gte('e3.12e3054')) sc5=sc5.add(0.002)
            if(player.H.harsh.gte('e4.04e3148')) sc5=sc5.add(0.002)}//0.99
        if(upg('G',155)) sc5=sc5.add(0.01)
        if(ef.gte('1e3800')) ef=n('1e3800').mul(n(10).pow(ef.div('1e3800').log(10).pow(sc5)))//rem
        let sc6=n(0.95)
        if(upg('G',151)) sc6=sc6.add(0.005)
        if(mil('G',37)) sc6=sc6.add(0.005)
        if (ef.gte('e10000')) ef=n('e10000').mul(n(10).pow(ef.div('e10000').log(10).pow(sc6)))
        if (ef.gte('ee8')) ef=n(10).pow(n('1e8').mul(ef.log(10).div('1e8').pow(sc6)))
        if (ef.gte('ee9')) ef=n(10).pow(n('1e9').mul(ef.log(10).div('1e9').pow(sc6)))
        if (ef.gte('ee10')) ef=n(10).pow(n('1e10').mul(ef.log(10).div('1e10').pow(0.9)))
        return ef}, 
    gsir(){//real eff on Gs gain
        let ef=player.G.Gs.add(10).log(10).pow(tmp.G.gsief).max(1)
        return ef}, 
    gseb(){
        let ef=n(0)
        let exp=n(0.9)
        if (upg('G',105)) exp=exp.add(0.05)
        exp=exp.mul(buyableEffect('G',42).add(1))
        if(gcs('G',91)) exp=exp.mul(1.2)
        if(player.G.Gsi.gte('1e345')) ef=player.G.Gsi.add(10).log(10).sub(345).max(0).pow(exp).div(2)
        if(gba('J',101).gte(23)&&player.G.Gsi.gte('1e200')) ef=player.G.Gsi.add(10).log(10).sub(200).max(0).pow(exp)
        ef=ef.mul(buyableEffect('G',41))
        ef=ef.min('ee9')
        if(mil('I',0)) ef=ef.mul(100)
        if(upg('G',102))  ef=ef.mul(upgradeEffect('G',102))
        if(upg('G',105))  ef=ef.mul(upgradeEffect('G',105))
        if(gcs('G',21))  {if(upg('G',132)) ef=ef.pow(clickableEffect('G',21)[1])
            else ef=ef.mul(clickableEffect('G',21)[0])}
        if(gcs('G',33))  ef=ef.pow(clickableEffect('G',33))
        if(gcs('G',61))  ef=ef.pow(clickableEffect('G',61))
        if(gcs('G',71))  ef=ef.mul(clickableEffect('G',71))
        if(mil('G',25))    {if(gcs('G',102))  ef=ef.pow(1.005)
            if(gcs('G',111))  ef=ef.pow(1.004)}
        if(gcs('G',122))  ef=ef.pow(1.01)
        if(!upg('G',134)) {if(ef.gte('e6e7')) ef=ef.div('e6e7').pow(0.6).mul('e6e7')} //rem
        if(!upg('H',75)) {if(ef.gte('ee8')) ef=ef.div('ee8').pow(0.5).mul('ee8')} //rem
        let sck=n(-0.9)
        if(upg('H',65)) sck=sck.add(0.2)
        if(upg('H',23)) sck=sck.add(0.4)
        let sc3=ef.max(10).log(10).max(10).log(10).sub(7.3).max(1).pow(sck)
        if(!upg('H',25)) {if(ef.gte('e2e8')) ef=ef.div('e2e8').pow(sc3).mul('e2e8')}//rem
        if(mil('H',2)) ef=ef.pow(n(1).add(buyableEffect('H',21)))
        if(upg('H',71)) ef=ef.pow(upgradeEffect('H',71))
        if(upg('H',72)) ef=ef.pow(upgradeEffect('H',72))
        if(gcs('I',53)) ef=ef.pow(1.05)
        if(mil('I',6))  ef=ef.pow(buyableEffect('I',22))
        if(n(ccomp('I',22)).gte(2))  ef=ef.pow(1.25)
        let et=n(0.9)
        if(upg('G',134)) et=et.add(0.015)
        if(upg('G',135)) et=et.add(0.015)
        if(mil('G',28)) et=et.add(0.005)
        if(upg('H',23)) et=et.add(0.015)//0.95
        if(!upg('H',25)) {if(ef.gte('e2e9')) ef=n('e2e9').mul(n(10).pow(ef.log(10).sub('2e9').pow(et)))}//rem
        if(gcs('G',131)) ef=n(10).pow(ef.max(1).log(10).pow(1.0008))
        if(gcs('I',64)) ef=n(10).pow(ef.max(1).log(10).pow(1.025))
        if(!upg('H',35)) {if(ef.gte('e6e9')) ef=ef.div('e6e9').pow(0.5).mul('e6e9')}//rem
        if(!upg('H',85)) {if(ef.gte('ee10')) ef=n('ee10').mul(n(10).pow(ef.log(10).sub('1e10').pow(0.96)))}//rem
        if(!upg('H',35)) {if(ef.gte('e4e10')) ef=n('e4e10').mul(n(10).pow(ef.log(10).sub('4e10').pow(0.9)))}//rem
        if(mil("G",30)) ef=ef.pow(tmp.G.gsref)
        if(!upg('H',42)) {if(ef.gte('e2e11')) ef=n('e2e11').mul(n(10).pow(ef.log(10).sub('2e11').pow(0.9)))}//rem
        let scx=[n(0.75),n(0.66),n(0.5),n(0.66),n(0.5)]   //exp's nerf,much stronger
        if(mil('I',5)) scx[0]=scx[0].add(0.03)         //the SHIT-like softcaps
        if(gcs('I',83)) scx[0]=scx[0].add(0.02)
        if(mil('G',32)) scx[2]=scx[2].add(0.005)
        if(upg('H',44)) scx[2]=scx[2].add(0.005)
        if(upg('G',151)) scx[2]=scx[2].add(tmp.H.dhef[4])
        if(player.G.Gsr.gte('3e1071')) {scx[0]=scx[0].add(0.01)
            scx[1]=scx[1].add(0.01)}
        if(upg('G',153)) {scx[0]=scx[0].add(0.02)//0.78
            scx[1]=scx[1].add(0.01)}
        if(player.H.max.gte('1470')) scx[1]=scx[1].add(0.02)//1550
        if(upg('H',45)) scx[0]=scx[0].add(0.03)
        if(mil('G',35)) {scx[0]=scx[0].add(0.03)
            if(player.G.Gsetot.gte('ee767')) scx[0]=scx[0].add(0.01)
            if(player.H.max.gte('7e6')) scx[0]=scx[0].add(0.01)}//0.86
        if(player.G.Gsetot.gte('e7.5e1581')) scx[0]=scx[0].add(0.01)
        if(player.G.Gsetot.gte('ee1658')) scx[0]=scx[0].add(0.03)
        if(player.G.Gsetot.gte('ee2010')) scx[0]=scx[0].add(0.04)//0.95
        if(upg('G',155)) scx[0]=scx[0].add(0.06)//1!!!
        if(ef.gte('ee12')) ef=n('ee12').mul(n(10).pow(ef.log(10).sub('1e12').pow(scx[0])))//rem
        if(ef.gte('ee14')) ef=n(10).pow(n('1e14').mul(ef.log(10).div('1e14').pow(scx[1])))
        if(ef.gte('ee20')) ef=n(10).pow(n('1e20').mul(ef.log(10).div('1e20').pow(scx[2])))
        if(ef.gte('ee32')) ef=n(10).pow(n('1e32').mul(ef.log(10).div('1e32').pow(scx[2])))
        if(ef.gte('ee50')) ef=n(10).pow(n('1e50').mul(ef.log(10).div('1e50').pow(scx[2])))
        if(ef.gte('ee80')) ef=n(10).pow(n('1e80').mul(ef.log(10).div('1e80').pow(scx[3])))
        if(ef.gte('ee100')) ef=n(10).pow(n('1e100').mul(ef.log(10).div('1e100').pow(scx[3])))
        if(ef.gte('ee140')) ef=n(10).pow(n('1e140').mul(ef.log(10).div('1e140').pow(scx[3])))
        if(ef.gte('ee180')) ef=n(10).pow(n('1e180').mul(ef.log(10).div('1e180').pow(scx[3])))
        let scx2=ef.max(1).log(10).max(1).log(10).div(216).max(1).pow(-0.25).max('1e-100')
        if(ef.gte('ee216')) ef=n(10).pow(n('1e216').mul(ef.log(10).div('1e216').pow(scx2.mul(0.85))))
        if(ef.gte('e1.8e308')) ef=n(10).pow(n('1.8e308').mul(ef.log(10).div('1.8e308').pow(scx[0].pow(1.5))))//rem
        if(ef.gte('ee450')) ef=n(10).pow(n('1e450').mul(ef.log(10).div('1e450').pow(scx[2])))
        if(ef.gte('ee600')) ef=n(10).pow(n('1e600').mul(ef.log(10).div('1e600').pow(scx[2].pow(0.5))))
        if(ef.gte('ee1000')) ef=n(10).pow(n('1e1000').mul(ef.log(10).div('1e1000').pow(scx[2])))
        if(ef.gte('ee1500')&&!n(ccomp('I',22)).gte(4)) ef=n(10).pow(n('1e1500').mul(ef.log(10).div('1e1500').pow(scx[3])))//rem
        if(ef.gte('ee2000')&&!(mil('I',0))) ef=n(10).pow(n('1e2000').mul(ef.log(10).div('1e2000').pow(scx[4])))//rem
        if(gcs('I',311)) ef=n(10).tetrate(ef.max(10).slog().sub(tmp.I.resv[2]).max(0))
        let tet=n(buyableEffect('J',43))
        if(upg('H',52)) tet=tet.add(upgradeEffect('H',52))
        ef=n(10).tetrate(ef.max(10).slog().add(tet).max(0))
        ef=ef.mul(buyableEffect('J',35)[0])
        ef=ef.pow(buyableEffect('J',85))
        ef=ef.min(tmp.H.php)
        return ef},
    gseef(){
        let exp=n(0.6)
        exp=exp.add(buyableEffect('G',43))
        if(gcs('G',41)) exp=exp.add(0.03)
        let ef=player.G.Gse.add(10).log(10).pow(exp).sub(1)
        if(!upg('G',131)) {if (ef.gte('50')) ef=ef.div(50).pow(0.6).mul(50)}
        if (ef.gte('1000')) ef=n(1000).mul(n(10).pow(ef.div(1000).log(10).mul(0.8)))
        if (ef.gte('5e4')) ef=n(5e4).mul(n(10).pow(ef.div(5e4).log(10).mul(0.6)))
        let sc4=n(0.5)
        if(upg('G',124)) sc4=sc4.add(0.3)
        if(upg('G',125)) sc4=sc4.add(0.1)
        if(gcs('G',101)) sc4=sc4.add(0.05)
        if(gcs('G',103)) sc4=sc4.add(0.05)//rem
        if (ef.gte('3e5')) ef=n(3e5).mul(n(10).pow(ef.div(3e5).log(10).mul(sc4)))
        if (ef.gte('1e9')) ef=n(1e9).mul(n(10).pow(ef.div(1e9).log(10).mul(0.8)))
        if (ef.gte('e1000')) ef=n('e1000').mul(n(10).pow(ef.div('e1000').log(10).pow(0.95)))
        return ef}, 
    gser(){//real eff on Gsi gain
        let ef=player.G.Gsi.add(10).log(10).pow(tmp.G.gseef).max(1)
        return ef}, 
    gser2(){//boost Gsi eff
        let m=n(1)
        let k=n(0.55)
        if(upg('G',113)) k=k.add(0.03)
        if(gcs('G',41)) k=k.add(0.02)
        if(upg('G',124)) k=k.add(0.03)
        if(gcs('G',103)) k=k.add(0.01)
        if(upg('G',111)) m=m.add(buyableEffect('G',44)).pow(k)
        let ef=player.G.Gse.add(10).log(10).pow(0.4).div(200).sub(0.005).max(0).mul(m)
        if(mil('G',17)) ef=ef.mul(1.5)
        if(ef.gte(8)) ef=ef.div(8).pow(0.66).mul(8)    
        if(ef.gte(12)) ef=ef.div(12).pow(0.75).mul(12)
        if(ef.gte(18)) ef=n(18).mul(n(10).pow(ef.div(18).log(10).mul(0.5)))     
        if(ef.gte(22)) ef=player.G.Gse.add(10).log(10).add(10).log(10).pow(1.25).div(15).mul(m).add(7).max(22)   
        if(ef.gte(25)) ef=ef.div(25).pow(0.45).mul(25)  
        //if(ef.gte(42)) ef=player.G.Gse.add(10).log(10).add(10).log(10).pow(0.1).div(2).mul(m).max(42)   //too strong!
        ef=ef.min(tmp.G.ehp)
        return ef},
    ehp(){
        let ef=n(42)
        if(upg('H',35)) ef=ef.add(upgradeEffect('H',35))
        if(upg('H',41)) ef=ef.add(upgradeEffect('H',41)[0])    
        return ef},
    gsrb(){
        let ef=n(0)
        let exp=n(1.5)
        if(upg('G',141)) exp=exp.add(0.5)
        if(upg('G',145)) exp=exp.add(0.25)
        exp=exp.add(buyableEffect('G',73))
        if(player.G.Gsetot.gte('e2.5e26')) ef=player.G.Gsetot.log(10).log(10).sub(25).pow(exp)
        if(player.G.Gsr.gte('2e3536')&&mil('H',11)) ef=n(10).pow(ef.add(10).log(10).pow(1.05))
        if(upg('H',45)) ef=n(10).pow(ef.add(10).log(10).pow(1.15))
        if(mil('G',31)) ef=ef.pow(1.05)
        ef=ef.mul(buyableEffect('G',71))
        ef=ef.mul(tmp.H.dhef[0])
        ef=ef.mul(tmp.H.dhpef)
        if(mil('I',0)) ef=ef.mul(10)
        if(player.H.dhmax[1].gte(1)) ef=ef.mul(100)
        if(ch('I',12)) ef=ef.pow(challengeEffect('I',12))   
        if(mil('I',9)) ef=ef.pow(buyableEffect('I',32))   
        if(gcs('I',311)) ef=n(10).tetrate(ef.max(10).slog().sub(tmp.I.resv[2]).max(0))
        ef=n(10).tetrate(ef.max(10).slog().add(buyableEffect('J',43)).max(0))
        ef=ef.mul(buyableEffect('J',35)[0])
        ef=ef.pow(buyableEffect('J',85))
        ef=ef.min(tmp.H.php)
        return ef
    },
    gsref(){
        let ef=n(0)
        let exp=n(0.3)
        if(upg('G',143)) exp=exp.add(0.1)
        exp=exp.add(buyableEffect('G',74)[0])
        ef=player.G.Gsr.add(10).log(10).pow(exp).div(20).add(0.95)
        return ef
    },
    gsref2(){
        let ef=n(0)
        let exp=n(0.5)
        if(upg('G',143)) exp=exp.add(0.1)
        exp=exp.add(buyableEffect('G',74)[0])
        if(upg('H',45)) exp=exp.pow(1.2)
        ef=player.G.Gsr.add(10).log(10).pow(exp).div(10).add(0.9)
        return ef
    },
    update(diff) {
        if (ccomp("G", 11).gte(3))  player.G.Gc1p = player.G.Gc1p.add(tmp.G.gc1g.mul(diff))
        if (ccomp("G", 12).gte(3))  player.G.Gc2p = player.G.Gc2p.add(tmp.G.gc2g.mul(diff))
        if (ccomp("G", 21).gte(3))  player.G.Gc3p = player.G.Gc3p.add(tmp.G.gc3g.mul(diff))
        if (ccomp("G", 22).gte(3))  player.G.Gc4p = player.G.Gc4p.add(tmp.G.gc4g.mul(diff))
        if (mil("G", 14))  player.G.Gs = player.G.Gs.add(tmp.G.gsb.mul(diff))
        if (upg("G", 83))  player.G.Gsi = player.G.Gsi.add(tmp.G.gsib.mul(diff))
        if (upg("G", 91))  player.G.Gse = player.G.Gse.add(tmp.G.gseb.mul(diff))
        if (mil("G", 30))  player.G.Gsr = player.G.Gsr.add(tmp.G.gsrb.mul(diff))
        if (upg("G", 115))  player.G.GG = player.G.GGtot.sub(player.G.Gtc)
        player.G.Gsetot = player.G.Gsetot.max(player.G.Gse)
    },
})
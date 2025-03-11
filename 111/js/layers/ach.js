// side layers
addLayer("ac", {
    startData() { return {
        unlocked: true,
        //points: n(0),
    }},
    color: "yellow",
    row: "side",
    tooltip() {return "Achievements"},
    achievementPopups: true,
    achievements: {
        11: {
            name: "1.you gotta start somewhere",
            done() {return player.A.total.gte('1')}, 
            tooltip: "get 1 A", 
        },
        12: {
            name: "2.constant",
            done() {return (upg("A", 14))},
            tooltip: "get A1-A4", 
        },
        13: {
            name: "3.self boost",
            done() {return (upg("A", 15))},
            tooltip: "get A5",
        },
        14: {
            name: "4.100 well",
            done() {return player.A.total.gte('100')},
            tooltip: "get 100 A",
        },
        15: {
            name: "5.logged",
            done() {return (upg("A", 24))},
            tooltip: "get A9",
        },
        16: {
            name: "6.why not prestige",
            done() {return player.B.total.gte('1')},
            tooltip: "get 1 B",
        },
        21: {
            name: "7.constant^2",
            done() {return (upg("B", 15))},
            tooltip: "get B1-B5",
        },
        22: {
            name: "8.primary automation",
            done() {return (upg("B", 23))},
            tooltip: "get B8", 
        },
        23: {
            name: "9.challenging",
            done() {return (upg("B", 25))},
            tooltip: "unlock A chal", 
        },
        24: {
            name: "10.challenged",
            done() {return (hasChallenge("A", 11))},
            tooltip: "complete Ac1", 
        },
        25: {
            name: "11.challenged*3",
            done() {return (hasChallenge("A", 21))},
            tooltip: "complete Ac3", 
        },
        26: {
            name: "12.Row 1 full",
            done() {return (upg("B", 35))},
            tooltip: "get B15", 
        },
        31: {
            name: "13.Row 2 why not prestige",
            done() {return player.C.total.gte('1')},
            tooltip: "unlock C",
        },
        32: {
            name: "14.hidden upg",
            done() {return (upg("A", 41))},
            tooltip: "get A16", 
        },
        33: {
            name: "15.a set of timewall",
            done() {return (upg("A", 45))},
            tooltip: "get A20", 
        },
        34: {
            name: "16.clickable",
            done() {return (upg("C", 25))},
            tooltip: "get C10", 
        },
        35: {
            name: "17.why not prestige^3",
            done() {return player.D.total.gte('1')},
            tooltip: "unlock D",
        },
        36: {
            name: "18.constant^3",
            done() {return (upg("D", 14))},
            tooltip: "get D1-D4", 
        },
        41: {
            name: "19.hidden upg^2",
            done() {return (upg("A", 52))},
            tooltip: "get A22", 
        },
        42: {
            name: "20.perfect exponential",
            done() {return (upg("D", 21))},
            tooltip: "get D6", 
        },
        43: {
            name: "21.first buyable",
            done() { return mil('D',2)},
            tooltip: "unlock B buyable",
        },
        44: {
            name: "22.Row 1 boost",
            done() { return upg('B',41)},
            tooltip: "unlock Bb2",
        },
        45: {
            name: "23.discount",
            done() { return upg('B',43)},
            tooltip: "get B18",
        },
        46: {
            name: "24.multieffect",
            done() { return upg('B',52)},
            tooltip: "get B22",
        },
        51: {
            name: "25.remarkable",
            done() { return mil('B',0)},
            tooltip: "get a B milestone",
        },
        52: {
            name: "26.hidden upg^3",
            done() {return (hasChallenge("A", 32))},
            tooltip: "complete Ac6", 
        },
        53: {
            name: "27.infinity?",
            done() {return player.A.total.gte('1e308')},
            tooltip: "get 1e308 A", 
        },
        54: {
            name: "28.feel free",
            done() { return mil('B',2)},
            tooltip: "autobuy B buyable",
        },
        55: {
            name: "29.constant^4",
            done() {return (upg("B", 72))},
            tooltip: "get B32", 
        },
        56: {
            name: "30.4x auto",
            done() { return mil('B',4)},
            tooltip: "D passive gain",
        },
        61: {
            name: "31.year in A",
            done() { return (ccomp("A", 41).gte(4))},
            tooltip: "get 1e2024 pts in Ac7",
        },
        62: {
            name: "32.year in A^2",
            done() { return player.A.total.gte('1e2024')},
            tooltip: "get 1e2024 A",
        },
        63: {
            name: "33.a set of timewall^2",
            done() {return (upg("A", 65))},
            tooltip: "get A30", 
        },
        64: {
            name: "34.inflation here",
            done() {return (upg("B", 82))},
            tooltip: "get B37", 
        },
        65: {
            name: "35.'E'xponential",
            done() {return player.E.total.gte('1')}, 
            tooltip: "get 1 E", 
        },
        66: {
            name: "36.click it!",
            done() {return player.E.total.gte('1000')}, 
            tooltip: "get 1000 E", 
        },
        71: {
            name: "37.4 ingredients",
            done() {return (mil("E", 2))},
            tooltip: "unlock E chal", 
        },
        72: {
            name: "38.click billionaire",
            done() {return player.E.total.gte('1e9')}, 
            tooltip: "get 1e9 E", 
        },
        73: {
            name: "39.just for E",
            done() { return (ccomp("E", 11).gte(3))},
            tooltip: "complete Ec1x3",
        },
        74: {
            name: "40.a bigger timewall",
            done() {return (ccomp("E", 12).gte(2))},
            tooltip: "complete Ec2x2", 
        },
        75: {
            name: "41.10000 nice",
            done() {return player.points.gte('1e10000')},
            tooltip: "get 1e10000 pts",
        },
        76: {
            name: "42.3 'antimatter galaxies'",
            done() {return (upg("E", 45))},
            tooltip: "get E20", 
        },
        81: {
            name: "43.'985'",
            done() {return (upg("E", 54))},
            tooltip: "get E24", 
        },
        82: {
            name: "44.challenging^2",
            done() {return (ccomp("E", 22).gte(1))},
            tooltip: "complete Ec4x1", 
        },
        83: {
            name: "45.hidden upg^4",
            done() {return (upg("E", 64))},
            tooltip: "get E29", 
        },
        84: {
            name: "46.powerful 666",
            done() { return player.D.points.gte('1e666')},
            tooltip: "get 1e666 D",
        },
        85: {
            name: "47.no more clicks?",
            done() {return (mil('E',10))},
            tooltip: "get 10x E pas", 
        },
        86: {
            name: "48.Emmm...",
            done() {return (mil('E',11))},
            tooltip: "unlock Em", 
        },
        91: {
            name: "49.Em boosted",
            done() {return player.E.Em.gte('1e10')},
            tooltip: "get 1e10 Em",
        },
        92: {
            name: "50.googol E",
            done() {return player.E.points.gte('1e100')},
            tooltip: "get 1e100 E",
        },
        93: {
            name: "51.back",
            done() {return (upg("E", 92))},
            tooltip: "get E42", 
        },
        94: {
            name: "52.linear",
            done() {return (ccomp("E", 32).gte(1))},
            tooltip: "complete Ec6x1", 
        },
        95: {
            name: "53.Ek ruby",
            done() {return (mil('E',15))},
            tooltip: "unlock Ek", 
        },
        96: {
            name: "54.hidden upg^5",
            done() {return (upg("E", 101))},
            tooltip: "get E46", 
        },
        101: {
            name: "55.GOODRAGE",
            done() {return player.E.points.gte('2e222')},
            tooltip: "get 2e222 E",
        },
        102: {
            name: "56.inflation again",
            done() {return (upg("E", 104))},
            tooltip: "get E49", 
        },
        103: {
            name: "57.raising exp",
            done() {return (ccomp("E", 42).gte(2))},
            tooltip: "complete Ec8x2", 
        },
        104: {
            name: "58.50 upgs",
            done() {return (upg("E", 105))},
            tooltip: "get E50", 
        },
        105: {
            name: "59.10 babs",
            done() {return (mil("E", 18))},
            tooltip: "unlock Eb10", 
        },
        106: {
            name: "60.inflation to ee5",
            done() {return player.points.gte('e100000')},
            tooltip: "get e100000 pts",
        },
        111: {
            name: "61.complicated",
            done() {return (ccomp("E", 42).gte(5))},
            tooltip: "complete Ec8x5", 
        },
        112: {
            name: "62.1000S E",
            done() {return player.E.points.gte('1e1000')},
            tooltip: "get 1e1000 E",
        },
        113: {
            name: "63.isnt softcapped",
            done() {return player.E.Ek.gte('1e590')},
            tooltip: "get 1e590 Ek",
        },
        114: {
            name: "64.REAL PRESTIGE",
            done() {return player.F.total.gte('1')},
            tooltip: "get 1 F",
        },
        115: {
            name: "65.PRESTIGE again",
            done() {return player.F.total.gte('2')},
            tooltip: "get 2 F",
        },
        116: {
            name: "66.triplekill",
            done() {return player.F.total.gte('3')},
            tooltip: "get 3 F",
        },
        121: {
            name: "67.auto E",
            done() {return player.F.total.gte('6')},
            tooltip: "get 6 F",
        },
        122: {
            name: "68.2 F easy",
            done() {return player.E.points.gte('1.8e1099')},
            tooltip: "get 2 F at once",//get 1.8e1099 E
        },
        123: {
            name: "69.no wait",
            done() {return (mil("F", 4))},
            tooltip: "keep E upg", 
        },
        124: {
            name: "70.no clicks",
            done() {return (mil("F", 5))},
            tooltip: "keep E chal", 
        },
        125: {
            name: "71.fluorine",
            done() {return (upg("F", 24))},
            tooltip: "get F9", 
        },
        126: {
            name: "72.AT inflation",
            done() {return (mil("F", 7))},
            tooltip: "get F mil 7", 
        },
        131: {
            name: "73.hidden upg^6",
            done() {return (upg("C", 41))},
            tooltip: "get C16", 
        },
        132: {
            name: "74.real chal",
            done() {return (ccomp("F", 11).gte(1))},
            tooltip: "complete Fc1x1", 
        },
        133: {
            name: "75.more inf-e5e5",
            done() {return player.points.gte('e500000')},
            tooltip: "get e500000 pts",
        },
        134: {
            name: "76.super surge",
            done() {return (upg("F", 34))},
            tooltip: "get F14", 
        },
        135: {
            name: "77.1M OoM",
            done() {return player.points.gte('e1000000')},
            tooltip: "get e1000000 pts",
        },
        136: {
            name: "78.restricted",
            done() {return (ccomp("F", 11).gte(3))},
            tooltip: "complete Fc1x3", 
        },
        141: {
            name: "79.so quick?",
            done() {return (mil("F", 9))},
            tooltip: "get F passive generation", 
        },
        142: {
            name: "80.why it's faster?",
            done() {return player.points.gte('e3000000')},
            tooltip: "get e3000000 pts<br>are there any softcaps?",
        },
        143: {
            name: "81.real AD",
            done() {return (gba('F',11)).gte(1)},
            tooltip: "get F dim 1", 
        },
        144: {
            name: "82.iteration",
            done() {return (gba('F',13)).gte(1)},
            tooltip: "get F dim 3", 
        },
        145: {
            name: "83.removed softcap",
            done() {return player.points.gte('e1e7')},
            tooltip: "get e1e7 pts",
        },
        146: {
            name: "84.no dimboosts?",
            done() {return (gba('F',22)).gte(1)},
            tooltip: "get F dim 5.<br>in AD,1 dimboost is required to unlock AD5", 
        },
        151: {
            name: "85.obedient?",
            done() {return (gba('F',32)).gte(1)},
            tooltip: "get F dim 8.", 
        },
        152: {
            name: "86.massive inf",
            done() {return player.points.gte('e1e8')},
            tooltip: "get e1e8 pts",
        },
        153: {
            name: "87.massive_inf",
            done() {return player.points.gte('e1e9')},
            tooltip: "get e1e9 pts",
        },
        154: {
            name: "88.just wait",
            done() {return (ccomp("F", 12).gte(3))},
            tooltip: "complete Fc2x3", 
        },
        155: {
            name: "89.similar to a galaxy...",
            done() {return (gba('F',102).gte(1))},
            tooltip: "get a tickboost",
        },
        156: {
            name: "90.F3.0!",
            done() {return player.points.gte('e1e10')},
            tooltip: "get e1e10 pts",
        },
        161: {
            name: "91.quitting control",
            done() {return (upg("F", 63))},
            tooltip: "get F28", 
        },
        162: {
            name: "92.half infinity",
            done() {return player.F.F1.gte('1e154')},
            tooltip: "get 1e154 F1", 
        },
        163: {
            name: "93.megasurge",
            done() {return player.points.gte('e1e16')},
            tooltip: "get e1e16 pts",
        },
        164: {
            name: "94.is it a softcap?",
            done() {return player.F.F1.gte('1e500')},
            tooltip: "get 1e500 F1.<br>in AD,AM is hardcapped at 2^1024(pre-break) and scaling after this(post-break).", 
        },
        165: {
            name: "95.effariG",
            done() {return player.G.total.gte('1')},
            tooltip: "get 1 G",
        },
        166: {
            name: "96.scaled galaxy",
            done() {return (gba('F',102).gte(5))},
            tooltip: "get 5 tickboost",
        },
        171: {
            name: "97.remove a scale",
            done() {return (upg("G", 15))},
            tooltip: "get G5", 
        },
        172: {
            name: "98.why it is diminishing?",
            done() {return player.E.Ek.gte('ee15')},
            tooltip: "get ee15 Ek<br>i previous version,Ek eff decrease past a large number.this was fixed at later ver.", 
        },
        173: {
            name: "99.x2 IP",
            done() {return (gba('G',11).gte(1))},
            tooltip: "get a Gc1<br>in AD,there is a x2 IP buyable below 16 infinity upgs.<br>cost is x10(x1e10 between e3e6 and e6e6) and eff is x2.", 
        },
        174: {
            name: "100.privileged",
            done() {return (upg("F", 71))},
            tooltip: "get F31", 
        },
        175: {
            name: "101.G power",
            done() {return (ccomp("G", 11).gte(3))},
            tooltip: "complete Gc1x3", 
        },
        176: {
            name: "102.true unscaled",
            done() {return (upg("G", 32))},
            tooltip: "get G12", 
        },
        181: {
            name: "103.year^3",
            done() { return player.F.F1.gte('1e2024')},
            tooltip: "get 1e2024 F1",
        },
        182: {
            name: "104.return?",
            done() {return (upg("F", 81))},
            tooltip: "get F36", 
        },
        183: {
            name: "105.true unscaled^2",
            done() {return (ccomp("G", 12).gte(3))},
            tooltip: "complete Gc2x3", 
        },
        184: {
            name: "106.cubic?",
            done() {return (gba('F',102).gte(10))},
            tooltip: "get 10 tickboost",
        },
        185: {
            name: "107.dilation",
            done() {return (ccomp("G", 12).gte(5))},
            tooltip: "complete Gc2x5", 
        },
        186: {
            name: "108.googolplex",
            done() {return player.points.gte('e1e100')},
            tooltip: "get e1e100 pts",
        },
        191: {
            name: "109.inf in inf",
            done() {return (upg("G", 35))},
            tooltip: "get G15", 
        },
        192: {
            name: "110.expensive!",
            done() {return (ccomp("G", 21).gte(3))},
            tooltip: "complete Gc3x3", 
        },
        193: {
            name: "111.F3.5",
            done() {return player.points.gte('ee100000')},
            tooltip: "get ee100000 pts",
        },
        194: {
            name: "112.gigasurge",
            done() {return (ccomp("G", 21).gte(5))},
            tooltip: "complete Gc3x5", 
        },
        195: {
            name: "113.logged galaxy",
            done() {return (ccomp("G", 22).gte(1))},
            tooltip: "complete Gc4x1", 
        },
        196: {
            name: "114.unscale for F1",
            done() {return (upg("G", 44))},
            tooltip: "get G19", 
        },
        201: {
            name: "115.F3_F1",
            done() { return player.F.F1.gte('ee10')},
            tooltip: "get e1e10 F1",
        },
        202: {
            name: "116.F4.0!",
            done() {return player.points.gte('eee10')},
            tooltip: "get eee10 pts",
        },
        203: {
            name: "117.ID but a bit different",
            done() {return (mil("G", 8))},
            tooltip: "unlock F2.<br>in AD,ID is multiplicative instead of exponential.", 
        },
        204: {
            name: "118.we still need G chal?",
            done() {return (upg("G", 52))},
            tooltip: "get G22", 
        },
        205: {
            name: "119.beyond antimatter",
            done() { return player.F.F1.gte('e9e15')},
            tooltip: "get e9e15 F1.<br>in AD,AM is hardcapped at e9e15(can be reached before Pelle.shown as 'END' in Pelle and reach endgame).",
        },
        206: {
            name: "120.F5.0!!",
            done() {return player.points.gte('eeee10')},
            tooltip: "get eeee10 pts",
        },
        211: {
            name: "121.balance failure",
            done() {return (upg("G", 55))},
            tooltip: "get G25", 
        },
        212: {
            name: "122.another 'anti'",
            done() {return (mil("G", 14))},
            tooltip: "unlock Gs.<br>Gs part is inspired by plague tree.some currencies are named as 'anti-xxx' in PT.", 
        },
        213: {
            name: "123.F6 terasurge",
            done() {return player.points.gte('10^^6')},
            tooltip: "get 1F6 pts",
        },
        214: {
            name: "124.exp-exp-booster",
            done() {return (gba('G',23).gte(1))},
            tooltip: "get a Gsb3",
        },
        215: {
            name: "125.PrPsc?",
            done() {return (upg("G", 83))},
            tooltip: "unlock Gsi", 
        },
        216: {
            name: "126.still isnt a softcap",
            done() {return (gba('G',21).gte(500))},
            tooltip: "get 500 Gsb1",
        },
        221: {
            name: "127.eternity here",
            done() {return (upg("G", 101))},
            tooltip: "unlock Gse", 
        },
        222: {
            name: "128.mysterious?",
            done() {return (upg("G", 104))},
            tooltip: "get G49", 
        },
        223: {
            name: "129.time dilation?",
            done() {return player.G.Gsetot.gte('1e1300')},
            tooltip: "get 1e1300 Gse", 
        },
        224: {
            name: "130.making reality in G",
            done() {return player.G.Gs.gte('e1e9')},
            tooltip: "get e1e9 Gs", 
        },
        225: {
            name: "131.d1lated",
            done() {return (mil('G',19))},
            tooltip: "unlock Gsb11-12",
        },
        226: {
            name: "132.+ERABY+E 1NFLA+10N",
            done() {return tmp.G.gsief.gte('1e12')},
            tooltip: "get 1e12 Gsi eff", 
        },
        231: {
            name: "133.world n+1",
            done() {return (upg("G", 115))},
            tooltip: "unlock GG", 
        },
        232: {
            name: "134.separation",
            done() {return player.G.GGtot.gte('15')},
            tooltip: "get 15 GG", 
        },
        233: {
            name: "135.luxury",
            done() {return player.G.GGtot.gte('50')},
            tooltip: "get 50 GG", 
        },
        234: {
            name: "136.explorer",
            done() {return (upg("G", 123))},
            tooltip: "get G58", 
        },
        235: {
            name: "137.strayed",
            done() {return player.G.GGtot.gte('200')},
            tooltip: "get 200 GG", 
        },
        236: {
            name: "138.F7 a real tower",
            done() {return player.points.gte('10^^7')},
            tooltip: "get 1F7 pts",
        },
        241: {
            name: "139.system revolution",
            done() {return (mil('G',22))},
            tooltip: "unlock r5-7 qol",
        },
        242: {
            name: "140.stretching",
            done() {return player.G.GGtot.gte('500')},
            tooltip: "get 500 GG", 
        },
        243: {
            name: "141.+ERABY+E PrPres",
            done() {return tmp.G.gseef.gte('1e12')},
            tooltip: "get 1e12 Gse 1st eff", 
        },
        244: {
            name: "142.googolpleS",
            done() {return player.G.Gs.gte('e1e100')},
            tooltip: "get e1e100 Gs", 
        },
        245: {
            name: "143.for whole tree?",
            done() {return player.G.GGtot.gte('1400')},
            tooltip: "get 1400 GG", 
        },
        246: {
            name: "144.not a reality",
            done() {return player.H.points.gte('1')},
            tooltip: "get 1 H", 
        },
        251: {
            name: "145.bankrupting",
            done() {return (upg("G",135))},
            tooltip: "unlock t28", 
        },
        252: {
            name: "146.for whole tree!",
            done() {return player.G.GGtot.gte('3300')},
            tooltip: "get 3300 GG", 
        },
        253: {
            name: "147.chaos",
            done() {return player.H.harsh.gte('1')},
            tooltip: "get 1 harsh", 
        },
        254: {
            name: "148.imminent infinity",
            done() {return player.H.harsh.gte('1.8e308')},
            tooltip: "get 1.8e308 harsh", 
        },
        255: {
            name: "149.to the F7s",
            done() {return (upg("H",75))},
            tooltip: "unlock Hb9", 
        },
        256: {
            name: "150.softcap 1-1",
            done() {return (upg("H",25))},
            tooltip: "get H10", 
        },
        261: {
            name: "151.hyped",
            done() {return (mil('H',4))},
            tooltip: "unlock hyper",
        },
        262: {
            name: "152.that speed?",
            done() {return player.H.hyper.gte('1e10000')},
            tooltip: "get 1e10000 hyper", 
        },
        263: {
            name: "153.removed softcap^2",
            done() {return (upg("H",83))},
            tooltip: "get H38", 
        },
        264: {
            name: "154.a safe boost",
            done() {return n(gba("H",63)).gte(1)},
            tooltip: "get Hy6", 
        },
        265: {
            name: "155.remember sb6?",
            done() {return (upg("H",33))},
            tooltip: "get H13", 
        },
        266: {
            name: "156.d1l4t3d",
            done() {return (mil('H',6))},
            tooltip: "add sb6 limit",
        },
        271: {
            name: "157.sn4p b4ck t0 r34l1ty",
            done() {return (mil('G',30))},
            tooltip: "get 1 GsR",
        },
        272: {
            name: "158.beyond ng+3",
            done() {return player.G.Gsetot.gte('e1e32')},
            tooltip: "get e1e32 Gse", 
        },
        273: {
            name: "159.-atomic",
            done() {return player.G.Gsr.gte('1.8e308')},
            tooltip: "get 1.8e308 GsR <br>atomic:a AD mod that add a layer after cel7", 
        },
        274: {
            name: "160.superdilating",
            // done:  function(){let s=n(0)
            //     for(let i=0;i<=3;i++) s=s.add(player.H.dh[i])
            //     return s.gte(5)},
            done() {return tmp.H.totdh.gte(5)},
            tooltip: "get 5 dH(any type)", 
        },
        275: {
            name: "161.aleph-1",
            done() {return player.H.dhp.gte('1.8e308')},
            tooltip: "get 1.8e308 dH points", 
        },
        276: {
            name: "162.up and down",
            done:  function(){let m=n(0)
                for(let i=0;i<=5;i++) m=m.max(player.H.dh[i])
                return m.gte(10)},
            tooltip: "get 10 dH of single type", 
        },
        281: {
            name: "163.GooGolplEx",
            done() {return player.G.Gsetot.gte('e1e100')},
            tooltip: "get e1e100 Gse", 
        },
        282: {
            name: "164.softcap 3-3",
            done() {return player.H.dh[4].gte(3)},
            tooltip: "get 3 dH5", 
        },
        283: {
            name: "165.f3.33f",
            done() {return player.H.harsh.gte('10^^3.333')},
            tooltip: "get F3.333 harsh(what it equals to?)", 
        },
        284: {
            name: "166.fast & slow",
            done() {return player.points.gte('10^^7.602')},
            tooltip: "get 4F7 points", 
        },
        285: {
            name: "167.3.5 isnt crazy",
            done() {return player.G.Gs.gte('ee100000')},
            tooltip: "get ee100000 Gs", 
        },
        286: {
            name: "168.fullyHarshGlitch",
            done() {return player.H.points.gte('1000')},
            tooltip: "autobuy Hb3/Hy3", 
        },
        291: {
            name: "169.hypedHyper",
            done() {return player.H.hyper.gte('ee1000000')},
            tooltip: "get ee1000000 hyper", 
        },
        292: {
            name: "170.cursed",
            done() {return tmp.H.totdh.gte(6666)},
            tooltip: "get 6666 dH(any type)", 
        },
        293: {
            name: "171.1e10 static?",
            done() {return player.H.points.gte('1e10')},
            tooltip: "get 1e10 H", 
        },
        294: {
            name: "172.almost here",
            done() {return player.points.gte('10^^8')},
            tooltip: "get 1F8 points", 
        },
        295: {
            name: "173.I CANT BALANCE IT!!",
            done() {return player.points.gte('10^^9')},
            tooltip: "get 1F9 points", 
        },
        296: {
            name: "174.collapsed",
            done() {return player.I.points.gte(1)},
            tooltip: "get 1 I", 
        },
        301: {
            name: "175.GG^2 at 4",
            done() {return mil('I',2)},
            tooltip: "unlock Qol points", 
        },
        302: {
            name: "176.waitttttt",
            done() {return player.I.qolpoints.gte(1e5)},
            tooltip: "get 1e5 Qol points", 
        },
        303: {
            name: "177.clickkkkkk",
            done() {return tmp.I.comp.gte(1)},
            tooltip: "complete a speedrun", 
        },
        304: {
            name: "178.get it max",
            done() {return gcs('I',16)},
            tooltip: "get kp9", 
        },
        305: {
            name: "179.iniskiped",
            done() {return n(ccomp('I',11)).gte(10)},
            tooltip: "complete Ic1x10", 
        },
        306: {
            name: "180.shift",
            done() {return n(ccomp('I',22)).gte(1)},
            tooltip: "complete Ic4x1", 
        },
        311: {
            name: "181.secgros",
            done() {return !player.I.m[0].gte(120)},
            tooltip: "row4 reset 1n 120s", 
        },
        312: {
            name: "182.r4 is easy",
            done() {return tmp.I.comp.gte(35)},
            tooltip: "complete all speedruns", 
        },
        313: {
            name: "183.10th layer!",
            done() {return player.J.best.gte(1)},
            tooltip: "get 1 J", 
        },
        314: {
            name: "184.well break",
            done() {return player.J.bp.gte('1e308')},
            tooltip: "get 1e308 break points", 
        },
        315: {
            name: "185.great weaken",
            done() {return player.I.hi.gte('10')},
            tooltip: "get 10 harden I", 
        },
        316: {
            name: "186.year but +1",//'any difference?' initially,at F1000 pts
            done() {return player.points.gte('10^^2025')},
            tooltip: "get 1F2025 points", 
        },
        321: {
            name: "187.d1_l4_t3_d..",
            done() {return player.J.bp.gte('e1e6')},
            tooltip: "get e1e6 break points <br>And its the No.destruction 3,2,1 achievement!", 
        },
        322: {
            name: "188.empirical impossible",
            done() {return player.I.hi.gte('150')},
            tooltip: "get 150 harden I", 
        },
        323: {
            name: "189.go Fe308!",
            done() {return player.J.ss.gte('1e308')},
            tooltip: "get 1e308 slog speeder", 
        },
        324: {
            name: "190.burn your points",
            done() {return player.I.res[0].gte(40)},
            tooltip: "set pts curse option to 40", 
        },
        325: {
            name: "191.a reincarnation",
            done() {return player.points.gte('10^^1e6')},
            tooltip: "get F1e6 points <br>from 'the pro tree'.Fe6 unlock void and Re layer.", 
        },
        326: {
            name: "192.IMR wall wall wall",
            done() {return gba('J',101).gte(10)},
            tooltip: "reach BP rank 10", 
        },
        331: {
            name: "193.speedy",
            done() {return tmp.J.ssef.gte('2019')},
            tooltip: "get 2019 slog speeder effect", 
        },
        332: {
            name: "194.infinite quality",
            done() {return player.I.qolpoints.gte('e9e15')},
            tooltip: "get e9e15 Qol points", 
        },
        333: {
            name: "195.FF 2.0",
            done() {return player.points.gte('10^^1e10')},
            tooltip: "get F1e10 points.", 
        },
        334: {
            name: "196.solidity",
            done() {return player.I.hi.gte('500')},
            tooltip: "get 500 harden I", 
        },
        335: {
            name: "197.inflated^4",
            done() {return gba('I',41).gte(1000)},
            tooltip: "get 1000 Ib10", 
        },
        336: {
            name: "198.most dilated thing",
            done() {return player.J.bp.gte('eee10')},
            tooltip: "get ee1e10 break points.", 
        },
        341: {
            name: "199.2^infinity",
            done() {return gba('J',101).gte(225)},
            tooltip: "unlock anti-replicanti.", 
        },
        342: {
            name: "200.dont slow down?",
            done() {return player.J.maxar.gte('1e4000')},
            tooltip: "reach AR dilation.", 
        },
        343: {
            name: "201.so slog up",
            done() {return gba('J',211).gte(2)},
            tooltip: "unlock AR's QP slog eff.", 
        },
        344: {
            name: "202.capped slog",
            done() {return tmp.I.hief[5].gte(0.5)},
            tooltip: "get 0.5 HI's BP/SS slog eff.", 
        },
    },
    tabFormat: ["blank", ["display-text", function() {
        return "<h3 style='color: yellow;'>Achievements: " + player.ac.achievements.length + "/202 </h4>"
    }
    ], "blank", "blank", "achievements", ],
},
)

addLayer("?", {
    name: "Others",
    symbol: "?",
    startData() { return {
        unlocked: true,
    }},
    tooltip() {return "Others"},
    color: "#rgb(91, 122, 129)",
    row: "side",
    type: "none", 
    clickables:{
        11: {
            title(){ let s='Pause'
                if(gcs(this.layer,this.id)) s='Resume'
                return s},
            //display(){return "set devspeed to 0"},
            style() { return {'background-color': gcs(this.layer,this.id)?"#rgb(38, 108, 123)":"#rgb(91, 122, 129)"}},
            canClick() {return true},
            onClick() {
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                else scs(this.layer,this.id,1)
                //scs(this.layer,this.id,n(1).sub((this.layer,this.id)))
            },
            unlocked() {return true},
        },
        12: {
            title(){ let s='x0.5 speed'
                if(gcs(this.layer,this.id)) s='Resume'
                return s},
            style() { return {'background-color': gcs(this.layer,this.id)?"#rgb(38, 108, 123)":"#rgb(91, 122, 129)"}},
            canClick() {return !gcs('?',11)},
            onClick() {
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                else scs(this.layer,this.id,1)
            },
            unlocked() {return true},
        },
        // 101: {
        //     title(){return "B autoUpgrade"},
        //     display(){ let s='ON'
        //         if(gcs(this.layer,this.id)) s='OFF'
        //         return s},
        //     style() { return {'background-color':"#7AAA2C"}},
        //     canClick() {return true},
        //     onClick() {
        //         if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
        //         else scs(this.layer,this.id,1)
        //     },
        //     unlocked() {return upg("F",13)},
        // },
        102: {
            title(){return "B buyables"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#7AAA2C"}},
            canClick() {return true},
            onClick() {
                player.B.auto = !player.B.auto
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)
            },
            unlocked() {return upg("F",13)},
        },
        111: {
            title(){return "main Ebs"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#789A89"}},
            canClick() {return true},
            onClick() {
                player.E.auto1 = !player.E.auto1
                player.E.auto2 = !player.E.auto2
                player.E.auto5 = !player.E.auto5
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)
            },
            unlocked() {return mil('E',19)},
        },
        112: {
            title(){return "Em/Ek buyables"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#789A89"}},
            canClick() {return true},
            onClick() {
                player.E.auto3 = !player.E.auto3
                player.E.auto4 = !player.E.auto4
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)
            },
            unlocked() {return mil('E',17)},
        },
        121: {
            title(){return "F dims"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#264321"}},
            canClick() {return true},
            onClick() {
                player.F.auto1 = !player.F.auto1
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)
            },
            unlocked() {return mil('F',15)},
        },
        122: {
            title(){return "tickspeed"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#264321"}},
            canClick() {return true},
            onClick() {
                player.F.auto2 = !player.F.auto2
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)
            },
            unlocked() {return mil('F',16)},
        },
        123: {
            title(){return "tickboost"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#264321"}},
            canClick() {return true},
            onClick() {
                player.G.auto1 = !player.G.auto1
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)
            },
            unlocked() {return mil('G',0)},
        },
        124: {
            title(){return "F2 dims"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#C037A5"}},
            canClick() {return true},
            onClick() {
                player.G.auto3 = !player.G.auto3
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)
            },
            unlocked() {return mil('G',9)},
        },
        125: {
            title(){return "Gb1-3"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#695735"}},
            canClick() {return true},
            onClick() {
                player.G.auto2 = !player.G.auto2
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)
            },
            unlocked() {return mil('G',4)},
        },
        131: {
            title(){return "Gs buyables<br>(1-3)"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#695735"}},
            canClick() {return true},
            onClick() {
                player.G.auto4 = !player.G.auto4
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)
            },
            unlocked() {return mil('G',4)},
        },
        132: {
            title(){return "Gsi buyables<br>(4-6)"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#FF00F1"}},
            canClick() {return true},
            onClick() {
                player.G.auto5 = !player.G.auto5
                player.G.auto8 = !player.G.auto8
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)
            },
            unlocked() {return mil('G',34)},
        },
        133: {
            title(){return "Gse buyables<br>(7-12)"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#14FFF3"}},
            canClick() {return true},
            onClick() {
                player.G.auto6 = !player.G.auto6
                player.H.auto1 = !player.H.auto1
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)
            },
            unlocked() {return mil('H',0)},
        },
        134: {
            title(){return "GG gain"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#695735"}},
            canClick() {return true},
            onClick() {
                player.G.auto7 = !player.G.auto7
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)
            },
            unlocked() {return mil('G',25)},
        },
        135: {
            title(){return "GsR buyables"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#6DA462"}},
            canClick() {return true},
            onClick() {
                player.H.auto5 = !player.H.auto5
                player.H.auto7 = !player.H.auto7
                player.H.auto9 = !player.H.auto9
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)
            },
            unlocked() {return mil('H',15)},
        },
        136: {
            title(){return "auto G upg"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#695735"}},
            canClick() {return true},
            onClick() {
                scs(this.layer,this.id,!gcs(this.layer,this.id))
            },
            unlocked() {return mil('I',2)},
        },
        141: {
            title(){return "harsh&hyper buyables"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#747EC8"}},
            canClick() {return true},
            onClick() {
                player.H.auto2 = !player.H.auto2
                player.H.auto3 = !player.H.auto3
                player.H.auto4 = !player.H.auto4              
                player.H.auto6 = !player.H.auto6
                player.H.auto8 = !player.H.auto8
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)
            },
            unlocked() {return mil('H',13)},
        },
        142: {
            title(){return "dH points buyables"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#3D3A3F"}},
            canClick() {return true},
            onClick() {
                player.H.auto7 = !player.H.auto7
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
        },
        143: {
            title(){return "auto gain dH"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#F3FF34"}},
            canClick() {return true},
            onClick() {
                player.I.auto1 = !player.I.auto1  
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)  
            },
            unlocked() {return mil('H',9)},
        },
        144: {
            title(){return "auto gain H"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#747EC8"}},
            canClick() {return true},
            onClick() {
                player.H.auto2 = !player.H.auto2
                player.H.auto3 = !player.H.auto3
                player.H.auto4 = !player.H.auto4              
                player.H.auto6 = !player.H.auto6
                player.H.auto8 = !player.H.auto8
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1)
            },
            unlocked() {return mil('H',9)},
        },
        145: {
            title(){return "auto H upg"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#747EC8"}},
            canClick() {return true},
            onClick() {
                scs(this.layer,this.id,!gcs(this.layer,this.id))
            },
            unlocked() {return mil('I',2)},
        },
        151: {
            title(){return "I buyables"},
            display(){ let s='ON'
                if(gcs(this.layer,this.id)) s='OFF'
                return s},
            style() { return {'background-color':"#4F4F4F"}},
            canClick() {return true},
            onClick() {
                player.I.auto2 = !player.I.auto2    
                player.I.auto4 = !player.I.auto4   
                if(gcs(this.layer,this.id)) scs(this.layer,this.id,0)
                    else scs(this.layer,this.id,1) 
            },
            unlocked() {return mil('I',2)},
        },
    },
    tabFormat: {
        //["raw-html", () => `<h3 style="opacity:.5"Other things...<br></h4>`],"blank",
        "DevSpeed":{
            unlocked() {return true},
            content: [
                ["clickables",[1]]]
        },
        "Automation":{
            unlocked() {return true},
            content: [
                ["clickables",[10,11,12,13,14,15]]]
        },
    },
}
)

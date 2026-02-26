addLayer("i", {
    infoboxes: {
introBox: {
  title: "层级14--IOS审核",
  body(){return "欢迎来到第14层，IOS审核！本层级中你将成为IOS审核，重新游玩音乐游戏树！<br>由于大部分音游人对IOS审核带有偏见，你将获得极大的削弱！<br>你的最终目标就是下架先前的所有层级！"},
        },
nerfBox: {
  title: "削弱列表",
  body(){return `Note获取^0.5（软上限前）<br>
    歌曲获取指数/4，在完成Cytus挑战'HARD²'后超出原硬上限的部分被软上限限制<br>
    源点获取指数/4，在完成Cytus挑战'HARD²'后超出原硬上限的部分被软上限限制，且额外增益/25<br>
    歌曲、源点被动获取/100<br>
    Arcaea挑战除'Past'外目标大幅增加<br>
    Phidata获取指数/4<br>
    在Phigros挑战中，源点额外增益^0.15，且Note获取再^0.8<br>
    Phigros挑战除'EZ'外目标大幅增加<br>
    成就"遗忘的层"效果被禁用<br>
    Cyten指数/2<br>
    Cytus力量获取/100，在大于1后^0.5<br>
    升级'Cytoid'加成Cytus力量的效果被禁用<br>
    '音乐星系'的效果^0.5<br>
    Cyten被动获取/100<br>
    Cytus挑战“CHAOS∞²”的目标大幅增加<br>
    黄键效果在1.15后受软上限限制<br>
    进行课题模式的按钮无法长按，且无法随时点击<br>
    课题力量仅在进行课题模式时获取，获取量/10<br>
    Arcaea曲包价格x1e500，Phigros曲包价格x1e150<br>
    蛇物量获取/10，被动获取/1e6<br>
    龙被动获取/1e8<br>
    Ro层级第一个里程碑的所有增益效果被禁用<br>
    旋律被动获取/1e8<br>
    Milthm维度/100，且倍率在1e5后受软上限限制<br>
    所有加成全局速率的升级被禁用<br>
    Ri层与XP层被完全禁用`},
    unlocked(){return hasAchievement('A',131)},
        },
fmBox: {
  title: "IOS审核的浮木",
  body(){return "基于思木值，你可以进行重置以获得IOS审核的浮木！<br>思木值由Notes、歌曲、源点决定，购买更多的升级会增加更多影响思木值的因素！"},
        },
LRBox: {
  title: "层级下架器",
  body(){return "在这里结束一切吧！每下架一个层级，你将获得Notes^2的增益，但是该层级相关的内容也会被抹去！"},
        },
},
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        best:n(0),
        fmshard:n(0),
        rift1filled:n(0),
        rift2filled:n(0),
        rift3filled:n(0),
        rift4filled:n(0),
        rift5filled:n(0),
        LRpower: n(0),
        Layerorder: ['XP','Ri','J','Mi','Ro','SP','Ch','C','M','P','L','A','S','None'],
    }},
    symbol: 'IOS',
    branches:['ri','e'],
    color: "#ff0000ff",                       // The color for this layer, which affects many elements.
    resource: "IOS审核的浮木",            // The name of this layer's main prestige resource.
    row: 6,                                 // The row this layer is on (0 is the first row).
    tooltip(){a= ''
        if (hasAchievement('A',131)) a = format(player.i.points)+' IOS审核的浮木'
    },
    baseResource: "思木值",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return tmp.i.fmgain },  // A function to return the current amount of baseResource.
    requires: new Decimal(1),              
    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.5,                          // "normal" prestige gain is (currency^exponent).
    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },
    layerShown() { return hasMilestone('j',13)||hasAchievement('A',131) },          // Returns a bool for if this layer's node should be visible in the tree.
        tabFormat: {
    "General": {
        content: [ ["infobox","introBox"],
        ['buyables',[1]]
     ],},
    "Nerfs and Rifts": {
        content: [ ["infobox","nerfBox"],
        ['milestones',[0]],['bar','rift1'],['clickables',[1]],
        ['milestones',[1,2,3]],'blank',
        ['milestones',[4]],['bar','rift2'],['clickables',[2]],
        ['milestones',[5,6,7]],'blank',
        ['milestones',[8]],['bar','rift3'],['clickables',[3]],
        ['milestones',[9,10,11]],'blank',
        ['milestones',[12]],['bar','rift4'],['clickables',[4]],
        ['milestones',[13,14,15]],'blank',
        ['milestones',[16]],['bar','rift5'],['clickables',[5]],
        ['milestones',[17,18,19]],'blank',
     ],
    unlocked() {return gba('i',11).gte(1)}},
    "Reset and Upgrades": {
        content: [ ["infobox","fmBox"],
        "main-display",["display-text",function() {return "你有"+format(tmp.i.fmgain)+"思木值"}],
        ["display-text",function() {return "确切来说，你有"+format(tmp.i.fmgain,10)+"思木值"}],'blank',"prestige-button","blank",
        ["display-text",function() {return "你当前有 <h2 style='color:#ff0000; text-shadow: 0 0 10px #c2b280'>"+format(player.i.fmshard)+"</h2> 浮木碎片"}],
        ['buyables',[2,3]],'upgrades'
     ],
    unlocked() {return gba('i',11).gte(1)}},
    "Layer Remover": {
        content: [ ["infobox","LRBox"],
        ["display-text",function() {return "你有 <h2 style='color:#ff0000; text-shadow: 0 0 10px #c2b280'>"+format(player.i.LRpower)+"</h2> 下架能量"}],
        ["display-text",function() {return "(+"+format(tmp.i.LRPspeed)+"/sec)"}],
        ['buyables',[4]],['milestones',[20,21,22,23,24,25]]
     ],
    unlocked() {return hasMilestone('i',15)}},
},
doReset(resettingLayer){},
update(diff){
    if(player.devSpeed.gt(0)) {player.i.fmshard = player.i.fmshard.add(tmp.i.effect.times(diff).div(player.devSpeed))
    if(gcs('i',11)==1){player.i.rift1filled=player.i.rift1filled.add(player.a.points.times(0.02).times(diff).div(player.devSpeed)).min(n(10).pow(n(10).pow(n(10).pow(0.5)).sub(1).times(10)).sub(1))
        player.a.points=player.a.points.sub(player.a.points.times(0.02).times(diff).div(player.devSpeed)).max(1)
    }
    if(gcs('i',21)==1){player.i.rift2filled=player.i.rift2filled.add(player.p.points.times(0.02).times(diff).div(player.devSpeed)).min(n(10).pow(n(10).pow(10).sub(1)).sub(1).times(10))
        player.p.points=player.p.points.sub(player.p.points.times(0.02).times(diff).div(player.devSpeed)).max(1)
    }
    if(gcs('i',31)==1){player.i.rift3filled=player.i.rift3filled.add(player.c.points.times(0.02).times(diff).div(player.devSpeed)).min(n(10).pow(200).sub(1))
        player.c.points=player.c.points.sub(player.c.points.times(0.02).times(diff).div(player.devSpeed)).max(1)
    }
    if(gcs('i',41)==1){player.i.rift4filled=player.i.rift4filled.add(player.a.dr.times(0.02).times(diff).div(player.devSpeed)).min(n(10).pow(100).sub(1))
        player.a.dr=player.a.dr.sub(player.a.dr.times(0.02).times(diff).div(player.devSpeed)).max(1)
    }
    if(gcs('i',51)==1){player.i.rift5filled=player.i.rift5filled.add(player.points.times(0.02).times(diff).div(player.devSpeed)).min(n(10).pow(1e10).sub(10))
        player.points=player.points.sub(player.points.times(0.02).times(diff).div(player.devSpeed)).max(1)
    }
    if(hasUpgrade('i',44)&&player.i.points.lt(player.i.best)) player.i.points=player.i.points.add(player.i.best.sub(player.i.points).times(tmp.i.pass1).times(diff).div(player.devSpeed))
        if(hasMilestone('i',15)) player.i.LRpower=player.i.LRpower.add(tmp.i.LRPspeed.times(diff).div(player.devSpeed))
    }
    if (player.i.rift1filled.gt(n(10).pow(n(10).pow(n(10).pow(0.5)).sub(1).times(10)).sub(1))){player.i.rift1filled=n(10).pow(n(10).pow(n(10).pow(0.5)).sub(1).times(10)).sub(1)
        setClickableState('i',11,0)
    }
    if (player.i.rift2filled.gt(n(10).pow(n(10).pow(10).sub(1)).sub(1).times(10))) {player.i.rift2filled=n(10).pow(n(10).pow(10).sub(1)).sub(1).times(10)
        setClickableState('i',21,0)
    }
    if (player.i.rift3filled.gt(n(10).pow(200).sub(1))) {player.i.rift3filled=n(10).pow(200).sub(1)
        setClickableState('i',31,0)
    }
    if(player.i.points.gt(player.i.best)) player.i.points=player.i.best
    if(hasMilestone('i',16)){player.devSpeed=n(0)
        player.j.pdqj0 = n(100).add(tmp.i.rift5eff)
        player.j.pdqj00 = n(100).add(tmp.i.rift5eff)
        player.j.time=n(0)
        if(hasMilestone('i',17)) player.j.pdqja = n(500).sub(tmp.i.rift5eff2)
        setClickableState('j',11,1)
   options.theme=themes[2]}
    },
buyables: {
    11: {
        cost(x) { return n('1e39000000') },
        title: '成为IOS审核',
        display() { return "警告：一旦成为了IOS审核，你将重置之前的所有内容！此操作无法撤销！<br>需求：e3.9e7 Notes" },
        canAfford() { return player.points.gte(this.cost()) },
        buy() {
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            layerDataReset('s',[])
            layerDataReset('a',[])
            layerDataReset('l',[])
            layerDataReset('p',[])
            layerDataReset('m',[])
            layerDataReset('c',[])
            layerDataReset('ch',[])
            layerDataReset('sp',[])
            layerDataReset('r',[])
            layerDataReset('mi',[])
            layerDataReset('j',[])
            layerDataReset('ri',[])
            layerDataReset('e',[])
            player.points=n(10)
            //doReset('i',true)
        },
        purchaseLimit:n(1),
    },
    21: {
        cost(x) { a= n(10).pow(x.add(1))
            if(x.gte(4)) a = n(10000).times(n(100).pow(x.sub(4)))
                return a
         },
        title: 'Notes增益',
        display() { return "增加Notes获取<br>效果：x"+format(buyableEffect('i',this.id))+" -> x"+format(this.effect(gba('i',this.id).add(1)))+"<br>需求："+format(this.cost())+"浮木碎片" },
        canAfford() { return player.i.fmshard.gte(this.cost()) },
        effect(x){a = n(1e100).pow(x.pow(1.5))
            if(hasUpgrade('i',155)) a=n(1e100).pow(x.pow(1.6))
            if(hasUpgrade('i',163)) a=n(1e100).pow(x.pow(1.7))
            if(hasUpgrade('i',183)) a=n(1e100).pow(x.pow(1.85))
            if(hasUpgrade('i',195)) a=n(1e100).pow(x.pow(2))
            return a
        },
        buy() {
            player.i.fmshard=player.i.fmshard.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        purchaseLimit:n(128),
    },
    22: {
        cost(x) {a= n(50).pow(x.add(2))
            if(x.gte(4)) a = n(50).pow(6).times(n(2500).pow(x.sub(4)))
                return a
         },
        title: '全局速率增益',
        display() { return "增加全局速率<br>效果：x"+format(this.effect())+" -> x"+format(n(1.5).pow(gba('i',22).add(1)))+"<br>需求："+format(this.cost())+"浮木碎片" },
        canAfford() { return player.i.fmshard.gte(this.cost()) },
        effect(x){a = n(1.5).pow(x)
            return a
        },
        buy() {
            player.i.fmshard=player.i.fmshard.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        purchaseLimit:n(128),
    },
    23: {
        cost(x) {a= n(100).pow(x.add(3))
            if(x.gte(4)) a = n(1e14).times(n(1e4).pow(x.sub(4)))
                return a
         },
        title: '源点增益',
        display() { return "增加源点额外增益<br>效果：x"+format(this.effect())+" -> x"+format(this.effect(gba('i',this.id).add(1)))+"<br>需求："+format(this.cost())+"浮木碎片" },
        canAfford() { return player.i.fmshard.gte(this.cost()) },
        effect(x){a = n(100).pow(x.pow(0.9))
            if(hasUpgrade('i',161)) a=n(100).pow(x)
            if(hasUpgrade('i',171)) a=n(100).pow(x.pow(1.25))
            return a
        },
        buy() {
            player.i.fmshard=player.i.fmshard.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        purchaseLimit:n(128),
    },
    24: {
        cost(x) {a= n(50).pow(x).times(5e13)
            if(x.gte(4)) a = n(5e13).times(n(50).pow(4)).times(n(500).pow(x.sub(4)))
                return a
         },
        title: '歌曲指数',
        display() { return "增加歌曲指数<br>效果：+"+format(this.effect())+" -> +"+format(this.effect(gba('i',24).add(1)))+"<br>需求："+format(this.cost())+"浮木碎片" },
        canAfford() { return player.i.fmshard.gte(this.cost()) },
        effect(x){a = x.pow(0.8).times(0.1)
            if (hasUpgrade('i',132)) a=a.times(2)
            return a
        },
        buy() {
            player.i.fmshard=player.i.fmshard.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        purchaseLimit:n(128),
    },
    25: {
        cost(x) {a= n(1000).pow(x).times(1e30)
            if(x.gte(3)) a = n(1e39).times(n(1e10).pow(x.sub(3)))
                return a
         },
        title: '诗篇指数',
        display() { return "增加诗篇指数<br>效果：+"+format(this.effect())+" -> +"+format(this.effect(gba('i',25).add(1)))+"<br>需求："+format(this.cost())+"浮木碎片" },
        canAfford() { return player.i.fmshard.gte(this.cost()) },
        effect(x){a = x.pow(0.8).times(0.01)
            return a
        },
        buy() {
            player.i.fmshard=player.i.fmshard.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        purchaseLimit(){a=n(3)
            if(hasUpgrade('i',181)) a=n(128)
                return a
        },
    },
    31: {
        cost(x) {a= n(1000).pow(x).times(1e36)
            if(x.gte(4)) a = n(1e48).times(n(1e5).pow(x.sub(4)))
                return a
         },
        title: 'Cytus力量增益',
        display() { return "增加Cytus力量获取<br>效果：x"+format(this.effect())+" -> x"+format(this.effect(gba('i',this.id).add(1)))+"<br>需求："+format(this.cost())+"浮木碎片" },
        canAfford() { return player.i.fmshard.gte(this.cost()) },
        effect(x){a = n(100).pow(x.pow(1.5))
            return a
        },
        buy() {
            player.i.fmshard=player.i.fmshard.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        purchaseLimit:n(128),
    },
    32: {
        cost(x) {a= n(1e4).pow(x.add(11))
            if(x.gte(4)) a = n(1e60).times(n(1e6).pow(x.sub(4)))
                return a
         },
        title: 'Cyten增益',
        display() { return "增加Cyten额外增益<br>效果：x"+format(this.effect())+" -> x"+format(this.effect(gba('i',this.id).add(1)))+"<br>需求："+format(this.cost())+"浮木碎片" },
        canAfford() { return player.i.fmshard.gte(this.cost()) },
        effect(x){a = n(100).pow(x.pow(0.8))
            return a
        },
        buy() {
            player.i.fmshard=player.i.fmshard.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        purchaseLimit:n(128),
    },
    33: {
        cost(x) {a= n(7777).pow(x).times(7.77e77)
            if(x.gte(4)) a = n(7.77e77).times(n(7777).pow(4)).times(n(7.77e6).pow(x.sub(4)))
                return a
         },
        title: '铺面指数',
        display() { return "增加铺面指数<br>效果：x"+format(this.effect(),4)+" -> x"+format(this.effect(gba('i',33).add(1)),4)+"<br>需求："+format(this.cost())+"浮木碎片" },
        canAfford() { return player.i.fmshard.gte(this.cost()) },
        effect(x){a = x.add(1).pow(0.05)
            return a
        },
        buy() {
            player.i.fmshard=player.i.fmshard.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        purchaseLimit:n(128),
    },
    34: {
        cost(x) {a= n(2e4).pow(x).times(2e84)
            if(x.gte(4)) a = n(2e84).times(n(2e4).pow(4)).times(n(1e6).pow(x.sub(4)))
                return a
         },
        title: '歌曲、源点获取量软上限延迟',
        display() { return "延迟歌曲、源点获取量软上限<br>效果：^"+format(this.effect())+" -> ^"+format(this.effect(gba('i',34).add(1)))+"<br>需求："+format(this.cost())+"浮木碎片" },
        canAfford() { return player.i.fmshard.gte(this.cost()) },
        effect(x){a = x.times(0.1).add(1)
            return a
        },
        buy() {
            player.i.fmshard=player.i.fmshard.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        purchaseLimit:n(128),
    },
    35: {
        cost(x) {a= n(1000).pow(x).times(1e101)
            if(x.gte(6)) a = n(1e119).times(n(1e10).pow(x.sub(6)))
                return a
         },
        title: '曲包需求',
        display() { return "降低曲包需求<br>效果：/"+format(this.effect())+" -> /"+format(this.effect(gba('i',this.id).add(1)))+"<br>需求："+format(this.cost())+"浮木碎片" },
        canAfford() { return player.i.fmshard.gte(this.cost()) },
        effect(x){a = n('1e2000').pow(x)
            return a
        },
        buy() {
            player.i.fmshard=player.i.fmshard.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        purchaseLimit(){a=n(6)
            //if(hasUpgrade('i',181)) a=n(128)
                return a
        },
    },
    41: {
        cost(x) {a= n(10).pow(x)
                return a
         },
        title: '下架层级！',
        display() { a="下架一个层级，并获得Notes^2的增益<br>效果：^"+format(this.effect())
            a=a+"<br>需求："+format(this.cost())+"下架能量<br>下一个下架的层级："+player.i.Layerorder[gba('i',41)]
        return a },
        canAfford() { return player.i.LRpower.gte(this.cost()) },
        effect(x){a = n(2).pow(x)
            if(hasMilestone('i',25)) a=a.pow(tmp.i.mil25eff)
            return a
        },
        buy() {
            player.i.LRpower=player.i.LRpower.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            doReset('i',true)
        },
        purchaseLimit(){a=n(13)
                return a
        },
    },
},
upgrades: {
    11: {
        title:'QoL专区-1',
        description: "永久保留歌曲升级",
        cost: new Decimal(20),
        tooltip: '此处所有升级都需要使用IOS审核的浮木购买！'
    },
    12: {
        title:'QoL专区-2',
        description: "永久保留Arcaea升级",
        cost: new Decimal(120),
        unlocked() {return hasUpgrade('i',11)},
    },
    13: {
        title:'QoL专区-3',
        description: "永久保留Arcaea挑战",
        cost: new Decimal(200),
        unlocked() {return hasUpgrade('i',12)},
    },
    14: {
        title:'QoL专区-4',
        description: "永久保留诗篇里程碑",
        cost: new Decimal(1000),
        unlocked() {return hasUpgrade('i',13)},
    },
    15: {
        title:'QoL专区-5',
        description: "永久保留诗篇升级",
        cost: new Decimal(3000),
        unlocked() {return hasUpgrade('i',14)},
    },
    21: {
        title:'QoL专区-6',
        description: "永久保留Phigros里程碑",
        cost: new Decimal(5000),
        unlocked() {return hasUpgrade('i',15)},
    },
    22: {
        title:'QoL专区-7',
        description: "永久保留PTT相关内容",
        cost: new Decimal(6686),
        unlocked() {return hasUpgrade('i',21)},
    },
    23: {
        title:'QoL专区-8',
        description: "永久保留Phigros升级",
        cost: new Decimal(22222),
        unlocked() {return hasUpgrade('i',22)},
    },
    24: {
        title:'QoL专区-9',
        description: "永久保留Phigros挑战",
        cost: new Decimal(40000),
        unlocked() {return hasUpgrade('i',23)},
    },
    25: {
        title:'QoL专区-10',
        description: "永久保留魔王曲里程碑",
        cost: new Decimal(250000),
        unlocked() {return hasUpgrade('i',24)},
    },
    31: {
        title:'QoL专区-11',
        description: "永久保留魔王曲升级",
        cost: new Decimal(30000000),
        unlocked() {return hasUpgrade('i',25)},
    },
    32: {
        title:'QoL专区-12',
        description: "永久保留rks相关",
        cost: new Decimal(50000000),
        unlocked() {return hasUpgrade('i',31)},
    },
    33: {
        title:'QoL专区-13',
        description: "永久保留Cytus里程碑",
        cost: new Decimal(150000000),
        unlocked() {return hasUpgrade('i',32)},
    },
    34: {
        title:'QoL专区-14',
        description: "永久保留Cytus升级",
        cost: new Decimal(200000000),
        unlocked() {return hasUpgrade('i',33)},
    },
    35: {
        title:'QoL专区-15',
        description: "永久保留Cytus挑战",
        cost: new Decimal(2e9),
        unlocked() {return hasUpgrade('i',34)},
    },
    41: {
        title:'QoL专区-16',
        description: "永久保留Cytus可购买",
        cost: new Decimal(3e9),
        unlocked() {return hasUpgrade('i',35)},
    },
    42: {
        title:'QoL专区-17',
        description: "永久保留谱面里程碑",
        cost: new Decimal(1e13),
        unlocked() {return hasUpgrade('i',41)},
    },
    43: {
        title:'QoL专区-18',
        description: "永久保留谱面升级",
        cost: new Decimal(1e14),
        unlocked() {return hasUpgrade('i',42)},
    },
    44: {
        title:'QoL专区-19',
        description() {return "每秒获得2%最高IOS审核的浮木与当前IOS审核的浮木的差值<br>你最高的IOS审核的浮木数量为："+format(player.i.best)},
        cost: new Decimal(3e15),
        unlocked() {return hasUpgrade('i',43)},
    },
    45: {
        title:'QoL专区-20',
        description() {return "QoL专区-19的效果增加至10%"},
        cost: new Decimal(5e15),
        unlocked() {return hasUpgrade('i',44)},
    },
    51: {
        title:'QoL专区-21',
        description() {return "QoL专区-19的效果增加至30%"},
        cost: new Decimal(2e16),
        unlocked() {return hasUpgrade('i',45)},
    },
    52: {
        title:'QoL专区-22',
        description() {return "永久保留最高课题能量"},
        cost: new Decimal(5e18),
        unlocked() {return hasUpgrade('i',51)},
    },
    53: {
        title:'QoL专区-23',
        description() {return "永久保留曲包里程碑"},
        cost: new Decimal(3e20),
        unlocked() {return hasUpgrade('i',52)},
    },
    54: {
        title:'QoL专区-24',
        description() {return "永久保留曲包升级"},
        cost: new Decimal(2e25),
        unlocked() {return hasUpgrade('i',53)},
    },
    55: {
        title:'QoL专区-25',
        description() {return "永久保留蛇长度与龙长度"},
        cost: new Decimal(1e26),
        unlocked() {return hasUpgrade('i',54)},
    },
    61: {
        title:'QoL专区-26',
        description() {return "每秒获得1%的课题力量，游戏速度对课题力量的影响^0.33"},
        cost: new Decimal(5e28),
        unlocked() {return hasUpgrade('i',55)},
    },
    62: {
        title:'QoL专区-27',
        description() {return "永久保留Ro层级里程碑"},
        cost: new Decimal(1e32),
        unlocked() {return hasUpgrade('i',61)},
    },
    63: {
        title:'QoL专区-28',
        description() {return "永久保留Ro层级升级"},
        cost: new Decimal(1e33),
        unlocked() {return hasUpgrade('i',62)},
    },
    64: {
        title:'QoL专区-29',
        description() {return "永久保留Rot点数与Ro层升级树，Rot点数x2"},
        cost: new Decimal(5e33),
        unlocked() {return hasUpgrade('i',63)},
    },
    65: {
        title:'QoL专区-30',
        description() {return "永久保留Ro层挑战，立即解锁Ro层第二行升级"},
        cost: new Decimal(1e35),
        unlocked() {return hasUpgrade('i',64)},
    },
    71: {
        title:'QoL专区-31',
        description() {return "永久保留Milthm层所有内容"},
        cost: new Decimal(2e41),
        unlocked() {return hasUpgrade('i',65)},
    },
    72: {
        title:'QoL专区-32',
        description() {return "RC4可以直接完成"},
        cost: new Decimal(2e64),
        unlocked() {return hasUpgrade('i',71)},
    },
    111: {
        title:'加成专区-1',
        description() {return "“著名曲师”可购买效果的0.5次方应用于软上限后<br>当前：x"+format(this.effect())},
        effect(){return buyableEffect('s',11).pow(0.5)},
        cost: new Decimal(300),
    },
    112: {
        title:'加成专区-2',
        description() {return "诗篇增益思木值获取<br>当前：x"+format(this.effect())},
        effect(){return player.l.points.add(1).pow(0.5)},
        cost: new Decimal(1100),
        unlocked() {return hasUpgrade('i',111)},
    },
    113: {
        title:'加成专区-3',
        description() {return "Phidata增益思木值获取<br>当前：x"+format(this.effect())},
        effect(){return player.p.points.add(1).log(100).add(1)},
        cost: new Decimal(3500),
        unlocked() {return hasUpgrade('i',112)},
    },
    114: {
        title:'加成专区-4',
        description() {return "Phigros挑战EZ奖励效果应用于软上限后<br>当前：x"+format(this.effect())},
        effect(){return challengeEffect('p',11)},
        cost: new Decimal(10000),
        unlocked() {return hasUpgrade('i',113)},
    },
    115: {
        title:'加成专区-5',
        description() {return "Phigros挑战HD奖励效果的0.5次方应用于软上限后<br>当前：x"+format(this.effect())},
        effect(){return challengeEffect('p',12).pow(0.5)},
        cost: new Decimal(30000),
        unlocked() {return hasUpgrade('i',114)},
    },
    121: {
        title:'加成专区-6',
        description() {return "“著名谱师”可购买效果^10<br>当前：x"+format(this.effect())},
        effect(){return buyableEffect('s',12).pow(9)},
        cost: new Decimal(33333),
        unlocked() {return hasUpgrade('i',115)},
    },
    122: {
        title:'加成专区-7',
        description() {return "“著名画师”可购买效果的0.5次方应用于软上限后<br>当前：x"+format(this.effect())},
        effect(){return buyableEffect('s',13).pow(0.5)},
        cost: new Decimal(50000),
        unlocked() {return hasUpgrade('i',121)},
    },
    123: {
        title:'加成专区-8',
        description() {return "诗篇指数+0.01"},
        //effect(){return buyableEffect('s',13).pow(0.5)},
        cost: new Decimal(60000),
        unlocked() {return hasUpgrade('i',122)},
    },
    124: {
        title:'加成专区-9',
        description() {return "改进浮木碎片的生产公式"},
        //effect(){return buyableEffect('s',13).pow(0.5)},
        cost: new Decimal(72000),
        unlocked() {return hasUpgrade('i',123)},
    },
    125: {
        title:'加成专区-10',
        description() {return "魔王曲增益思木值获取<br>当前：x"+format(this.effect())},
        effect(){return player.m.points.add(1)},
        cost: new Decimal(300000),
        unlocked() {return hasUpgrade('i',124)},
    },
    131: {
        title:'加成专区-11',
        description() {return "PTT增益思木值获取<br>当前：x"+format(this.effect())},
        effect(){return player.a.ptt.add(1).pow(0.5)},
        cost: new Decimal(1500000),
        unlocked() {return hasUpgrade('i',125)},
    },
    132: {
        title:'加成专区-12',
        description() {return "“歌曲指数”升级效果x2"},
        //effect(){return player.a.ptt.add(1).pow(0.5)},
        cost: new Decimal(6000000),
        unlocked() {return hasUpgrade('i',131)},
    },
    133: {
        title:'加成专区-13',
        description() {return "从“无限歌曲”起，歌曲升级价格^0.5"},
        //effect(){return player.a.ptt.add(1).pow(0.5)},
        cost: new Decimal(25000000),
        unlocked() {return hasUpgrade('i',132)},
    },
    134: {
        title:'加成专区-14',
        description() {return "Cytus力量增益思木值获取<br>当前：x"+format(this.effect())},
        effect(){return player.c.power.add(1).log(10).add(1).pow(0.5)},
        cost: new Decimal(4e8),
        unlocked() {return hasUpgrade('i',133)},
    },
    135: {
        title:'加成专区-15',
        description() {return "“音乐星球”可购买效果的0.5次方应用于软上限后<br>当前：x"+format(this.effect())},
        effect(){return buyableEffect('c',12).pow(0.5)},
        cost: new Decimal(3e9),
        unlocked() {return hasUpgrade('i',134)},
    },
    141: {
        title:'加成专区-16',
        description() {return "rks增益思木值获取<br>当前：x"+format(this.effect())},
        effect(){return player.p.rks.add(1).pow(0.5)},
        cost: new Decimal(2.5e10),
        unlocked() {return hasUpgrade('i',135)},
    },
    142: {
        title:'加成专区-17',
        description() {return "从“Song.mp3”起，歌曲升级价格^0.1"},
        //effect(){return player.a.ptt.add(1).pow(0.5)},
        cost: new Decimal(7.5e10),
        unlocked() {return hasUpgrade('i',141)},
    },
    143: {
        title:'加成专区-18',
        description() {return "加成专区-7的效果变为原来的1.5次方<br>当前：x"+format(this.effect())},
        effect(){return buyableEffect('s',13).pow(0.25)},
        cost: new Decimal(1.11e11),
        unlocked() {return hasUpgrade('i',142)},
    },
    144: {
        title:'加成专区-19',
        description() {return "铺面基本需求^0.4"},
        //effect(){return player.a.ptt.add(1).pow(0.5)},
        cost: new Decimal(3e12),
        unlocked() {return hasUpgrade('i',143)},
    },
    145: {
        title:'加成专区-20',
        description() {return "谱面增益思木值获取<br>当前：x"+format(this.effect())},
        effect(){return player.ch.points.add(1)},
        cost: new Decimal(5e12),
        unlocked() {return hasUpgrade('i',144)},
    },
    151: {
        title:'加成专区-21',
        description() {return "物量增益思木值获取<br>当前：x"+format(this.effect())},
        effect(){return player.ch.note.add(2).log(5)},
        cost: new Decimal(3e13),
        unlocked() {return hasUpgrade('i',145)},
    },
    152: {
        title:'加成专区-22',
        description() {return "基于谱面获得额外的物量，上限为100<br>当前：+"+format(this.effect())},
        effect(){return player.ch.points.add(1).pow(2).min(100)},
        cost: new Decimal(7.77e13),
       unlocked() {return hasUpgrade('i',151)},
    },
    153: {
        title:'加成专区-23',
        description() {return "物量增益Notes获取<br>当前：x"+format(this.effect())},
        effect(){return n(10).pow(player.ch.note.pow(1.5))},
        cost: new Decimal(2.5e14),
        unlocked() {return hasUpgrade('i',152)},
    },
    154: {
        title:'加成专区-24',
        description() {return "立即解锁原先需通过Cytus挑战'HARD²'解锁的铺面升级"},
        //effect(){return player.a.ptt.add(1).pow(0.5)},
        cost: new Decimal(3.5e15),
        unlocked() {return hasUpgrade('i',153)},
    },
    155: {
        title:'加成专区-25',
        description() {return "加强'Notes增益'升级的效果"},
        //effect(){return player.a.ptt.add(1).pow(0.5)},
        cost: new Decimal(5e15),
        unlocked() {return hasUpgrade('i',154)},
    },
    161: {
        title:'加成专区-26',
        description() {return "加强'源点增益'升级的效果"},
        //effect(){return player.a.ptt.add(1).pow(0.5)},
        cost: new Decimal(2.25e16),
        unlocked() {return hasUpgrade('i',155)},
    },
    162: {
        title:'加成专区-27',
        description() {return "基于铺面与Phigros-Note降低Cytus挑战'HARD²'与'CHAOS∞'的需求<br>当前：^"+format(this.effect())},
        effect(){return player.ch.pnote.add(player.ch.points).add(1).log(8).div(8).add(1).pow(-1).max(0.8)},
        cost: new Decimal(2.5e16),
        unlocked() {return hasUpgrade('i',161)},
    },
    163: {
        title:'加成专区-28',
        description() {return "再次加强'Notes增益'升级的效果"},
        //effect(){return player.a.ptt.add(1).pow(0.5)},
        cost: new Decimal(1.45e17),
        unlocked() {return hasUpgrade('i',162)},
    },
    164: {
        title:'加成专区-29',
        description() {return "课题能量增益思木值获取<br>当前：x"+format(this.effect())},
        effect(){return player.ch.en.add(1).log(2).add(1)},
        cost: new Decimal(7.5e17),
        unlocked() {return hasUpgrade('i',163)},
    },
    165: {
        title:'加成专区-30',
        description() {return "“音乐世界”可购买效果^1.25<br>当前：x"+format(this.effect())},
        effect(){return buyableEffect('c',11).pow(0.25)},
        cost: new Decimal(2.88e18),
        unlocked() {return hasUpgrade('i',164)},
    },
    171: {
        title:'加成专区-31',
        description() {return "再次加强'源点增益'升级的效果"},
        //effect(){return player.a.ptt.add(1).pow(0.5)},
        cost: new Decimal(1.2e19),
        unlocked() {return hasUpgrade('i',165)},
    },
    172: {
        title:'加成专区-32',
        description() {return "基于IOS审核的浮木增益浮木碎片获取<br>当前：x"+format(this.effect())},
        effect(){return player.i.points.add(1).log(2)},
        cost: new Decimal(3e19),
        unlocked() {return hasUpgrade('i',171)},
    },
    173: {
        title:'加成专区-33',
        description() {return "基于诗篇延迟最后两个诗篇升级的硬上限<br>当前：^"+format(this.effect())},
        effect(){a= player.l.points.add(1).log(10)
            if(hasUpgrade('i',184)) a=a.pow(1.5)
            return a
        },
        cost: new Decimal(3.25e19),
        unlocked() {return hasUpgrade('i',172)},
    },
    174: {
        title:'加成专区-34',
        description() {return "曲包需求^0.22"},
        //effect(){return player.l.points.add(1).log(10).pow(0.8)},
        cost: new Decimal(5e19),
        unlocked() {return hasUpgrade('i',173)},
    },
    175: {
        title:'加成专区-35',
        description() {return "曲包加成思木值获取<br>当前：x"+format(this.effect())},
        effect(){return player.sp.points.add(1).pow(1.1)},
        cost: new Decimal(8.4e19),
        unlocked() {return hasUpgrade('i',174)},
    },
    181: {
        title:'加成专区-36',
        description() {return "“诗篇指数”购买次数上限增加至32，但价格上涨大幅增加"},
        //effect(){return player.sp.points.add(1).pow(1.1)},
        cost: new Decimal(3e20),
        unlocked() {return hasUpgrade('i',175)},
    },
    182: {
        title:'加成专区-37',
        description() {return "基于游戏速度增益浮木碎片获取<br>当前：x"+format(this.effect())},
        effect(){return player.devSpeed.add(1).pow(0.333).max(1)},
        cost: new Decimal(3.75e20),
        unlocked() {return hasUpgrade('i',181)},
    },
    183: {
        title:'加成专区-38',
        description() {return "再次加强'Notes增益'升级的效果"},
        //effect(){return player.a.ptt.add(1).pow(0.5)},
        cost: new Decimal(4.33e20),
        unlocked() {return hasUpgrade('i',162)},
    },
    184: {
        title:'加成专区-39',
        description() {return "进一步加强“加成专区-33”升级的效果(^1.5)，其增益的两个升级效果始终为最大值"},
        //effect(){return upgradeEffect('i',173).pow(0.5)},
        cost: new Decimal(1.25e21),
        unlocked() {return hasUpgrade('i',183)},
    },
    185: {
        title:'加成专区-40',
        description() {return "基于本层级可购买的购买次数增益Notes<br>当前：x"+format(this.effect())},
        effect(){a=gba('i',21).add(gba('i',22)).add(gba('i',23)).add(gba('i',24)).add(gba('i',25)).add(gba('i',31)).add(gba('i',32)).add(gba('i',33)).add(gba('i',34)).add(gba('i',35))
            b=n('1e250').pow(a.pow(1.2))
            return b
        },
        cost: new Decimal(1.9e21),
        unlocked() {return hasUpgrade('i',184)},
    },
    191: {
        title:'加成专区-41',
        description() {return "基于本层级可购买的购买次数增益歌曲额外获取量<br>当前：x"+format(this.effect())},
        effect(){a=gba('i',21).add(gba('i',22)).add(gba('i',23)).add(gba('i',24)).add(gba('i',25)).add(gba('i',31)).add(gba('i',32)).add(gba('i',33)).add(gba('i',34)).add(gba('i',35))
            b=n('1e150').pow(a.pow(0.5))
            return b
        },
        cost: new Decimal(1.75e24),
        unlocked() {return hasUpgrade('i',185)},
    },
    192: {
        title:'加成专区-42',
        description() {return "课题力量加成思木值获取<br>当前：x"+format(this.effect())},
        effect(){return player.ch.enp.add(100).log(100)},
        cost: new Decimal(5e24),
        unlocked() {return hasUpgrade('i',191)},
    },
    193: {
        title:'加成专区-43',
        description() {return "蛇长度与龙长度加成思木值获取<br>当前：x"+format(this.effect())},
        effect(){return player.a.sn.add(1).times(player.a.dr.add(1).pow(5)).log(1e3).add(1)},
        cost: new Decimal(5e25),
        unlocked() {return hasUpgrade('i',192)},
    },
    194: {
        title:'加成专区-44',
        description() {return "Arcaea曲包加成思木值获取<br>当前：x"+format(this.effect())},
        effect(){return gba('sp',11).add(1)},
        cost: new Decimal(1.25e26),
        unlocked() {return hasUpgrade('i',193)},
    },
    195: {
        title:'加成专区-45',
        description() {return "最后一次加强'Notes增益'升级的效果"},
        //effect(){return player.a.ptt.add(1).pow(0.5)},
        cost: new Decimal(8e27),
        unlocked() {return hasUpgrade('i',194)},
    },
    201: {
        title:'加成专区-46',
        description() {return "Cyten增益思木值获取<br>当前：x"+format(this.effect())},
        effect(){return player.c.points.add(1).log(10).pow(0.5).add(1)},
        cost: new Decimal(1e29),
        unlocked() {return hasUpgrade('i',195)},
    },
    202: {
        title:'加成专区-47',
        description() {return "总Rot点数增益思木值获取<br>当前：x"+format(this.effect())},
        effect(){return player.r.rota.add(1)},
        cost: new Decimal(3e31),
        unlocked() {return hasUpgrade('i',201)},
    },
    203: {
        title:'加成专区-48',
        description() {return "物量硬上限^2"},
        cost: new Decimal(3e33),
        unlocked() {return hasUpgrade('i',202)},
    },
    204: {
        title:'加成专区-49',
        description() {return "Lanota, Phigros, Cytus曲包共同加成思木值获取<br>当前：x"+format(this.effect())},
        effect(){return gba('sp',12).add(gba('sp',13)).add(gba('sp',14)).add(1)},
        cost: new Decimal(1e36),
        unlocked() {return hasUpgrade('i',203)},
    },
    205: {
        title:'加成专区-50',
        description() {return "仅当在Ro层挑战时，Cytus能量x1e1000"},
        cost: new Decimal(1e41),
        unlocked() {return hasUpgrade('i',204)},
    },
    211: {
        title:'加成专区-51',
        description() {return "判定线加成思木值获取与Milthm维度<br>当前：x"+format(this.effect())},
        effect(){return player.j.points.add(1)},
        cost: new Decimal(2.5e61),
        unlocked() {return hasUpgrade('i',205)},
    },
    212: {
        title:'加成专区-52',
        description() {return "上一个升级对Milthm维度的效果^10<br>当前：x"+format(this.effect())},
        effect(){return player.j.points.add(1).pow(9)},
        cost: new Decimal(1e64),
        unlocked() {return hasUpgrade('i',211)},
    },
    213: {
        title:'加成专区-53',
        description() {return "基于IOS审核的浮木增益裂缝4效果<br>当前：^"+format(this.effect())},
        effect(){return player.i.points.add(1).log(1e10).add(1)},
        cost: new Decimal(1e67),
        unlocked() {return hasUpgrade('i',212)},
    },
},
milestones: {
    0: {
        requirementDescription: "7.5e9源点",
        effectDescription() {return "由于你拖审的时间太久了，玩家们对你进行了大规模的攻击，你的歌曲指数/1.5，但是你获得一个裂缝，你可以往里面填充源点以增益源点额外增益<br>当前：x"+format(tmp.i.rift1eff)+'<br>你最多只能同时填充两个裂缝！'},
        done() { return player.a.points.gte(7.5e9)&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',0)},
    },
    1: {
        requirementDescription: "裂缝1填充1%(约需5.15e10源点)",
        effectDescription() {return "诗篇价格/1e65"},
        done() { return player.i.rift1filled.gte(n(10).pow(n(10).pow(n(0.1).pow(0.5)).sub(1).times(10)).sub(1))&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',0)},
    },
    2: {
        requirementDescription: "裂缝1填充3%(约需1.94e25源点)",
        effectDescription() {return "裂缝1以削弱的效果影响Phidata额外增益<br>当前：x"+format(tmp.i.rift1eff2)},
        done() { return player.i.rift1filled.gte(n(10).pow(n(10).pow(n(0.3).pow(0.5)).sub(1).times(10)).sub(1))&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',0)},
    },
    3: {
        requirementDescription: "裂缝1填充4%(约需7.76e32源点)",
        effectDescription() {return "基于裂缝1填充进度增加歌曲指数<br>当前：x"+format(tmp.i.rift1eff3,4)},
        done() { return player.i.rift1filled.gte(n(10).pow(n(10).pow(n(0.4).pow(0.5)).sub(1).times(10)).sub(1))&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',0)},
    },
    4: {
        requirementDescription: "1魔王曲",
        effectDescription() {return "由于你拖审的时间太久了，玩家们对你进行了第二次大规模的攻击，你的Phidata额外增益/100，但是你获得第二个裂缝，你可以往里面填充Phidata以增益Phidata指数<br>当前：x"+format(tmp.i.rift2eff)},
        done() { return player.m.points.gte(1)&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',4)},
    },
    5: {
        requirementDescription: "裂缝2填充10%(约需9.99e8 Phidata)",
        effectDescription() {return "魔王曲指数x2.71728"},
        done() { return player.i.rift2filled.gte(n(10).pow(n(10).pow(1).sub(1)).sub(1))&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',4)},
    },
    6: {
        requirementDescription: "裂缝2填充15%(约需4.16e30 Phidata)",
        effectDescription() {return "'Notes增益'以削弱的效果增加歌曲获取<br>当前：x"+format(tmp.i.rift2eff2)},
        done() { return player.i.rift2filled.gte(n(10).pow(n(10).pow(1.5).sub(1)).sub(1))&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',4)},
    },
    7: {
        requirementDescription: "裂缝2填充20%(约需9.99e98 Phidata)",
        effectDescription() {return "'Notes增益'对Notes也有指数增益<br>当前：^"+format(tmp.i.rift2eff3)},
        done() { return player.i.rift2filled.gte(n(10).pow(n(10).pow(2).sub(1)).sub(1))&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',4)},
    },
    8: {
        requirementDescription: "完成Cytus挑战“Easy”",
        effectDescription() {return "由于你拖审的时间太久了，玩家们对你进行了第三次大规模的攻击，你的Cytus能量再次^0.5，但是你获得第三个裂缝，你可以往里面填充Cyten以增益Cytus能量获取<br>当前：x"+format(tmp.i.rift3eff)},
        done() { return hasChallenge('c',11)&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',8)},
    },
    9: {
        requirementDescription: "裂缝3填充2%(约需1e4 Cyten)",
        effectDescription() {return "从“最强STRONGER”起，前五个Arcaea升级价格^0.18，后两个升级价格^0.4"},
        done() { return player.i.rift3filled.gte(9999)&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',8)},
    },
    10: {
        requirementDescription: "裂缝3填充5%(约需1e10 Cyten)",
        effectDescription() {return "更改物量获取公式，物量x1.1"},
        done() { return player.i.rift3filled.gte(n(10).pow(10).sub(1))&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',8)},
    },
    11: {
        requirementDescription: "裂缝3填充90%(约需1e180 Cyten)",
        effectDescription() {return "裂缝3效果^4"},
        done() { return player.i.rift3filled.gte(n(10).pow(180).sub(1))&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',8)},
    },
    12: {
        requirementDescription: "1旋律",
        effectDescription() {return "由于你拖审的时间太久了，玩家们对你进行了第四次大规模的攻击，你的谱面指数/3，但是IOS审核的浮木获取量x10，同时你获得第四个裂缝，你可以往里面填充龙以增益Note获取<br>当前：x"+format(tmp.i.rift4eff)},
        done() { return player.r.points.gte(1)&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',12)},
    },
    13: {
        requirementDescription: "裂缝4填充4%(约需1e4龙)",
        effectDescription() {return "基于累计Milthm数量增益旋律获取<br>当前：x"+format(tmp.i.rift4eff2)},
        done() { return player.i.rift4filled.gte(9999)&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',12)},
    },
    14: {
        requirementDescription: "裂缝4填充10%(约需1e10龙)",
        effectDescription() {return "基于旋律数量增益Milthm维度倍率<br>当前：x"+format(tmp.i.rift4eff3)},
        done() { return player.i.rift4filled.gte(n(10).pow(10).sub(1))&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',12)},
    },
    15: {
        requirementDescription: "裂缝4填充100%(约需1e100龙)",
        effectDescription() {return "解锁层级下架器"},
        done() { return player.i.rift4filled.gte(n(10).pow(100).sub(1))&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',12)},
    },
    16: {
        requirementDescription: "1判定线",
        effectDescription() {return "由于你拖审的时间太久了，玩家们对你进行了第五次大规模的攻击，你被永久困在100ms判定区间内，但是IOS审核的浮木获取量^1.25，且永久保留判定里程碑，同时你获得第五个裂缝，你可以往里面填充Notes以增加实际生效判定区间<br>当前：+"+format(tmp.i.rift5eff)+'ms'},
        done() { return player.j.points.gte(1)&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',16)},
        onComplete(){player.j.pdqj0 = n(100)
        player.j.pdqj00 = n(100)
        setClickableState('j',11,1)
    options.theme=themes[2]
    doReset('j',true)}
    },
    17: {
        requirementDescription: "裂缝5填充30%(约需1e1000Note)",
        effectDescription() {return "基于裂缝5填充进度增益最佳判定区间，并立即解锁第二行判定升级<br>当前：-"+format(tmp.i.rift5eff2)+'ms'},
        done() { return player.i.rift5filled.gte(n(10).pow(1000).sub(10))&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',16)},
    },
    18: {
        requirementDescription: "裂缝5填充50%(约需1e100000Note)",
        effectDescription() {return "基于裂缝5填充进度增益龙获取，判定线价格/250且不重置任何东西<br>当前：x"+format(tmp.i.rift5eff3)},
        done() { return player.i.rift5filled.gte(n(10).pow(1e5).sub(10))&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',16)},
    },
    19: {
        requirementDescription: "裂缝5填充75%(约需e31622776Note)",
        effectDescription() {return "基于Milthm增益龙获取<br>当前：x"+format(tmp.i.rift5eff4)},
        done() { return player.i.rift5filled.gte(n(10).pow(n(10).pow(7.5)).sub(10))&&gba('i',11).gte(1) },
        unlocked(){return hasMilestone('i',16)},
    },
    20: {
        requirementDescription: "下架XP层级",
        effectDescription() {return "基于超过1e100的IOS审核的浮木增益下架能量获取<br>当前：x"+format(tmp.i.mil20eff)},
        done() { return gba('i',41).gte(1) },
        unlocked(){return gba('i',41).gte(1)},
    },
    21: {
        requirementDescription: "下架Ri层级",
        effectDescription() {return "基于超过1e500的浮木碎片增益下架能量获取<br>当前：x"+format(tmp.i.mil21eff)},
        done() { return gba('i',41).gte(2) },
        unlocked(){return gba('i',41).gte(2)},
    },
    22: {
        requirementDescription: "下架Mi层级",
        effectDescription() {return "基于下架的层级数量增益下架能量获取<br>当前：x"+format(tmp.i.mil22eff)},
        done() { return gba('i',41).gte(4) },
        unlocked(){return gba('i',41).gte(4)},
    },
    23: {
        requirementDescription: "下架Ro层级",
        effectDescription() {return "基于下架能量增益下架能量获取<br>当前：x"+format(tmp.i.mil23eff)},
        done() { return gba('i',41).gte(5) },
        unlocked(){return gba('i',41).gte(5)},
    },
    24: {
        requirementDescription: "下架C层级",
        effectDescription() {return "基于下架能量增益IOS审核的浮木获取<br>当前：x"+format(tmp.i.mil24eff)},
        done() { return gba('i',41).gte(8) },
        unlocked(){return gba('i',41).gte(8)},
    },
    25: {
        requirementDescription: "下架S层级",
        effectDescription() {return "基于下架能量增益层级下架器效果<br>当前：^"+format(tmp.i.mil25eff)},
        done() { return gba('i',41).gte(13) },
        unlocked(){return gba('i',41).gte(13)},
    },
},
bars: {
    rift1: {
        direction: RIGHT,
        width: 600,
        height: 36,
        display(){
      return "已填充源点: " + format(player.i.rift1filled) + "，进度:" + format(this.progress().mul(100)) + "%"
      },
        progress() { return player.i.rift1filled.add(1).log(10).div(10).add(1).log(10).pow(2).div(10) },
        unlocked(){return hasMilestone('i',0)},
        fillStyle: {'background-color' : "#ff0000"},
    },
    rift2: {
        direction: RIGHT,
        width: 600,
        height: 36,
        display(){
      return "已填充Phidata: " + format(player.i.rift2filled) + "，进度:" + format(this.progress().mul(100)) + "%"
      },
        progress() { return player.i.rift2filled.add(1).log(10).add(1).log(10).div(10) },
        unlocked(){return hasMilestone('i',4)},
        fillStyle: {'background-color' : "#ff0000"},
    },
    rift3: {
        direction: RIGHT,
        width: 600,
        height: 36,
        display(){
      return "已填充Cyten: " + format(player.i.rift3filled) + "，进度:" + format(this.progress().mul(100)) + "%"
      },
        progress() { return player.i.rift3filled.add(1).log(100).div(100) },
        unlocked(){return hasMilestone('i',8)},
        fillStyle: {'background-color' : "#ff0000"},
    },
    rift4: {
        direction: RIGHT,
        width: 600,
        height: 36,
        display(){
      return "已填充龙: " + format(player.i.rift4filled) + "，进度:" + format(this.progress().mul(100)) + "%"
      },
        progress() { return player.i.rift4filled.add(1).log(10).div(100) },
        unlocked(){return hasMilestone('i',12)},
        fillStyle: {'background-color' : "#ff0000"},
    },
    rift5: {
        direction: RIGHT,
        width: 600,
        height: 36,
        display(){
      return "已填充Notes: " + format(player.i.rift5filled) + "，进度:" + format(this.progress().mul(100)) + "%"
      },
        progress() { return player.i.rift5filled.add(10).log(10).log(10).div(10) },
        unlocked(){return hasMilestone('i',16)},
        fillStyle: {'background-color' : "#ff0000"},
    },
},
clickables: {
    11: {
        display() {a= "点击以填充裂缝1，再次点击取消填充<br>当前"
            if (gcs(this.layer,this.id)==0) a=a+'<h2>不在</h2>填充裂缝1'
            if (gcs(this.layer,this.id)==1) a=a+'<h2>正在</h2>填充裂缝1'
            return a
        },
        unlocked(){return hasMilestone('i',0)},
        onClick() {if(gcs(this.layer,this.id)==0) setClickableState(this.layer,this.id,1)
            else setClickableState(this.layer,this.id,0)
        },
        canClick(){return (tmp.i.riftcounter.lt(2)||gcs(this.layer,this.id)==1)},
    },
    21: {
        display() {a= "点击以填充裂缝2，再次点击取消填充<br>当前"
            if (gcs(this.layer,this.id)==0) a=a+'<h2>不在</h2>填充裂缝2'
            if (gcs(this.layer,this.id)==1) a=a+'<h2>正在</h2>填充裂缝2'
            return a
        },
        unlocked(){return hasMilestone('i',4)},
        onClick() {if(gcs(this.layer,this.id)==0) setClickableState(this.layer,this.id,1)
            else setClickableState(this.layer,this.id,0)
        },
        canClick(){return (tmp.i.riftcounter.lt(2)||gcs(this.layer,this.id)==1)},
    },
    31: {
        display() {a= "点击以填充裂缝3，再次点击取消填充<br>当前"
            if (gcs(this.layer,this.id)==0) a=a+'<h2>不在</h2>填充裂缝3'
            if (gcs(this.layer,this.id)==1) a=a+'<h2>正在</h2>填充裂缝3'
            return a
        },
        unlocked(){return hasMilestone('i',8)},
        onClick() {if(gcs(this.layer,this.id)==0) setClickableState(this.layer,this.id,1)
            else setClickableState(this.layer,this.id,0)
        },
        canClick(){return (tmp.i.riftcounter.lt(2)||gcs(this.layer,this.id)==1)&&player.c.points.gte(1)},
    },
    41: {
        display() {a= "点击以填充裂缝4，再次点击取消填充<br>当前"
            if (gcs(this.layer,this.id)==0) a=a+'<h2>不在</h2>填充裂缝4'
            if (gcs(this.layer,this.id)==1) a=a+'<h2>正在</h2>填充裂缝4'
            return a
        },
        unlocked(){return hasMilestone('i',12)},
        onClick() {if(gcs(this.layer,this.id)==0) setClickableState(this.layer,this.id,1)
            else setClickableState(this.layer,this.id,0)
        },
        canClick(){return (tmp.i.riftcounter.lt(2)||gcs(this.layer,this.id)==1)&&player.a.dr.gte(1)},
    },
    51: {
        display() {a= "点击以填充裂缝5，再次点击取消填充<br>当前"
            if (gcs(this.layer,this.id)==0) a=a+'<h2>不在</h2>填充裂缝5'
            if (gcs(this.layer,this.id)==1) a=a+'<h2>正在</h2>填充裂缝5'
            return a
        },
        unlocked(){return hasMilestone('i',16)},
        onClick() {if(gcs(this.layer,this.id)==0) setClickableState(this.layer,this.id,1)
            else setClickableState(this.layer,this.id,0)
        },
        canClick(){return (tmp.i.riftcounter.lt(2)||gcs(this.layer,this.id)==1)},
    },
},
fmgain(){a = player.points.add(1).log(1e200)
    b = player.s.points.add(1).log(1e5)
    c = player.a.points.add(1).log(10)
    d = a.times(b).times(c)
    if(hasUpgrade('i',112)) d = d.times(upgradeEffect('i',112))
    if(hasUpgrade('i',113)) d = d.times(upgradeEffect('i',113))
    if(hasUpgrade('i',125)) d = d.times(upgradeEffect('i',125))
    if(hasUpgrade('i',131)) d = d.times(upgradeEffect('i',131))
    if(hasUpgrade('i',134)) d = d.times(upgradeEffect('i',134))
    if(hasUpgrade('i',141)) d = d.times(upgradeEffect('i',141))
    if(hasUpgrade('i',145)) d = d.times(upgradeEffect('i',145))
    if(hasUpgrade('i',151)) d = d.times(upgradeEffect('i',151))
    if(hasUpgrade('i',164)) d = d.times(upgradeEffect('i',164))
    if(hasUpgrade('i',175)) d = d.times(upgradeEffect('i',175))
    if(hasUpgrade('i',192)) d = d.times(upgradeEffect('i',192))
    if(hasUpgrade('i',193)) d = d.times(upgradeEffect('i',193))
    if(hasUpgrade('i',194)) d = d.times(upgradeEffect('i',194))
    if(hasUpgrade('i',201)) d = d.times(upgradeEffect('i',201))
    if(hasUpgrade('i',202)) d = d.times(upgradeEffect('i',202))
    if(hasUpgrade('i',204)) d = d.times(upgradeEffect('i',204))
    if(hasUpgrade('i',211)) d = d.times(upgradeEffect('i',211))
    if(hasMilestone('i',24)) d=d.times(tmp.i.mil24eff)
    if(hasMilestone('i',12)) d=d.times(10)
    if(hasMilestone('i',16)) d=d.pow(1.25)
    return d
},
getResetGain(){a = tmp.i.fmgain.sub(player.i.points).max(0)
    return a
},
getNextAt(){a = tmp.i.getResetGain.add(1).add(player.i.points)
    return a
},
effect(){a = player.i.points.pow(2.5)
    if(hasUpgrade('i',124)) a=a.times(player.i.points.pow(player.i.points.add(1).log(1e5).pow(0.25)))
    if(hasUpgrade('i',172)) a=a.times(upgradeEffect('i',172))
    if(hasUpgrade('i',182)) a=a.times(upgradeEffect('i',182))
    return a
},
effectDescription(){return "每秒生产 <h2 style='color:#ff0000; text-shadow: 0 0 10px #c2b280'>"+format(tmp.i.effect)+"</h2> 浮木碎片"},
rift1eff(){a = player.i.rift1filled.add(1).pow(0.1).times(player.i.rift1filled.add(1).log(10).add(1))
    return a
},
rift1eff2(){a = tmp.i.rift1eff.pow(0.25)
    return a
},
rift1eff3(){a = n(tmp.i.bars.rift1.progress).add(1)
    return a
},
rift2eff(){a = player.i.rift2filled.add(1).log(10).add(1).log(10).add(1).pow(1.5)
    return a
},
rift2eff2(){a = buyableEffect('i',21).pow(0.05)
    return a
},
rift2eff3(){a = gba('i',21).pow(0.01)
    return a
},
rift3eff(){a = player.i.rift3filled.add(1).pow(2.5)
    if(hasMilestone('i',11)) a=a.pow(4)
    return a
},
rift4eff(){a = n(10).pow(player.i.rift4filled)
    if (a.gte('1e1000000')) a=n(10).pow(a.log(10).div(1000000).pow(0.25).times(1000000))
    if (a.gte('1e2e8')) a=n(10).pow(a.log(10).div(2e8).pow(0.1).times(2e8))
    if(hasUpgrade('i',213)) a=a.pow(upgradeEffect('i',213))
    return a
},
rift4eff2(){a = player.mi.total.max(1).pow(0.3)
    return a
},
rift4eff3(){a = player.r.points.max(10).log(10)
    return a
},
rift5eff(){a = tmp.i.bars.rift5.progress.times(100)
    return a
},
rift5eff2(){a = tmp.i.bars.rift5.progress.times(400)
    return a
},
rift5eff3(){a = n(10).pow(tmp.i.bars.rift5.progress.times(10))
    return a
},
rift5eff4(){a = player.mi.points.pow(0.1)
    return a
},
riftcounter(){a=n(0)
    if(gcs('i',11)==1) a=a.add(1)
    if(gcs('i',21)==1) a=a.add(1)
    if(gcs('i',31)==1) a=a.add(1)
    if(gcs('i',41)==1) a=a.add(1)
    if(gcs('i',51)==1) a=a.add(1)
        return a
},
pass1(){a=n(0)
    if (hasUpgrade('i',44)) a=n(0.02)
    if (hasUpgrade('i',45)) a=n(0.1)
    if (hasUpgrade('i',51)) a=n(0.3)
        return a
},
LRPspeed(){a=n(0.01)
    if(hasMilestone('i',20)) a=a.times(tmp.i.mil20eff)
    if(hasMilestone('i',21)) a=a.times(tmp.i.mil21eff)
    if(hasMilestone('i',22)) a=a.times(tmp.i.mil22eff)
    if(hasMilestone('i',23)) a=a.times(tmp.i.mil23eff)
    if(hasAchievement('A',145)) a=a.times(100)
    return a
},
mil20eff(){a=player.i.points.div(1e99).max(10).log(10)
    return a
},
mil21eff(){a=player.i.fmshard.div('1e499').max(10).log(10).pow(0.5)
    return a
},
mil22eff(){a=n(2).pow(gba('i',41))
    return a
},
mil23eff(){a=player.i.LRpower.pow(0.33)
    return a
},
mil24eff(){a=player.i.LRpower.pow(10)
    return a
},
mil25eff(){a=player.i.LRpower
    return a
},
})

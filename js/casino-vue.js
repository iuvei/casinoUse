
var vm = new Vue({
  el: '#game',
  methods: {
  },
  ready: function(){

  },
  computed: {
    filteredGame: function () {
      var self = this
      return self.games.filter(function (game) {
        return game.name.indexOf(self.name) !== -1
      })
    },
    filteredMG: function () {
      var self = this
      return self.mggames.filter(function (mggame) {
        return mggame.name.indexOf(self.name) !== -1
      })
    }
  },
  data: {
    name: '',
    games: [
      {
        "category": 1,
        "url": "image/casino/Game_30101.png",
        "name": "捕鱼传奇",
        "mark": {
            "mark": "notice",
            "btn": true
          },
        "minor": false,
        "game_3D": false,
        "app": false,
        "flash": true,
        "description": "「捕鱼传奇」多人联网游戏有绝佳的互动性，带您徜徉美妙的海底奇景，饱览绚丽热带鱼群风光。一起感受丰富渔获带来高分奖励的刺激快感吧！"
      },{
        "category": 3,
        "url": "image/casino/Game_5906.png",
        "name": "小e夺宝",
        "mark": {
            "mark": "new",
            "btn": false
          },
        "minor": false,
        "game_3D": false,
        "app": false,
        "flash": true,
        "description": "只要简单快速的点一下，即可享受迅速获奖的游戏快感;游戏总共有3层，层级越高奖金越丰厚，就等你来赢喔！"
      },{
        "category": 6,
        "url": "image/casino/Game_5068.png",
        "name": "酷搜马戏团",
        "mark": {
            "mark": "new",
            "btn": false
          } ,
        "minor": false,
        "game_3D": false,
        "app": true,
        "flash": true,
        "description": "KUSO CIRCUS马戏团综合三位小丑及四种动物转盘，趣味盎然，亲和力十足，而且奖金赔率颇高，是一款老少咸宜的游戏。"
      },{
        "category": 2,
        "url": "image/casino/Game_5067.png",
        "name": "大话西游",
        "mark": {
            "mark": "new",
            "btn": false
          } ,
        "minor": "133,519.18",
        "game_3D": false,
        "app": true,
        "flash": true,
        "description": "三藏法师一行人前往天竺取经的故事，​​让我们在游玩时，如同置身于此经典的奇幻旅程中。"
      },{
        "category": 6,
        "url": "image/casino/Game_5404.png",
        "name": "沙滩排球",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": "133,519.18",
        "game_3D": false,
        "app": true,
        "flash": true,
        "description": "「沙滩排球」藉由两位美少女角色：康尼与雪伦之间的对战练习及益智游戏，展现沙滩排球的特色及阳光下的青春动感。"
      },{
        "category": 8,
        "url": "image/casino/Game_15022.png",
        "name": "捕鱼空战版",
        "mark": {
            "mark": "recommend",
            "btn": false
          } ,
        "minor": false,
        "game_3D": true,
        "app": true,
        "flash": true,
        "description": "「捕鱼空战版」是一款空战炮击的机率游戏，玩家在游戏中可以用高射炮与各种机体进行战斗，从二战的零式战斗机到幻想的飞空艇，甚至是叱咤领空的龙王！当你成功击破时，那些机体都会化成无数的财富滚滚而来，堆满您的补给箱，这将是一次惊心动魄的黄金之旅！"
      },{
        "category": 4,
        "url": "image/casino/Game_5902.png",
        "name": "糖果派对",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": "153.577.18",
        "game_3D": false,
        "app": true,
        "flash": true,
        "description": "简单快速的游戏步调，只要点一下，立马享受串联迅速获奖的快感；游戏总共分为 3 层，每层奖金大不同！"
      },{
        "category": 9,
        "url": "image/casino/Game_5901.png",
        "name": "连环夺宝",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": false,
        "game_3D": false,
        "app": true,
        "flash": false,
        "description": "宝石迅速地掉落，奖金快速地获得！3关奖金大不同，搭配特殊的奖金游戏，轻松快速获得高额奖金！"
      },{
        "category": 5,
        "url": "image/casino/Game_5837.png",
        "name": "喜福猴年",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": "153.577.18",
        "game_3D": false,
        "app": true,
        "flash": true,
        "description": "「喜福猴年」是以中国十二生肖猴为主题的喜庆拉霸游戏，绚丽灯光效果与多重喜庆元素搭配50条联机与高额赔率，让会员能天天年年欢喜发大财。"
      },{
        "category": 10,
        "url": "image/casino/Game_5063.png",
        "name": "水果拉霸",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": false,
        "game_3D": false,
        "app": false,
        "flash": false,
        "description": "「水果拉霸」是以传统的水果盘为设计的单线拉霸游戏。"
      },{
        "category": "1",
        "url": "image/casino/Game_5601.png",
        "name": "秘境冒险",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": "153.577.18",
        "game_3D": false,
        "app": false,
        "flash": true,
        "description": "突破传统的老虎机设计，「秘境冒险」是一款新型态的迷宫寻宝游戏。透过角色在丛林迷宫里的探索丶挖掘宝藏丶以及在遗迹神庙里的奇遇，让会员充分感受寻宝的乐趣，为自己获得大量的财富。"
      },{
        "category": 1,
        "url": "image/casino/Game_5095.png",
        "name": "斗鸡",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": "153.577.18",
        "game_3D": false,
        "app": true,
        "flash": true,
        "description": "左右连线玩法全新升级! 看谁才是斗鸡之王!"
      },{
        "category": 1,
        "url": "image/casino/Game_5904.png",
        "name": "蒸气炸弹",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": "153.577.18",
        "game_3D": false,
        "app": false,
        "flash": true,
        "description": "蒸气炸弹(POP BOMBER)是一款轻松活泼的消除游戏、配合各式各样道具，可以获得更多分数。"
      },{
        "category": 1,
        "url": "image/casino/Game_5905.png",
        "name": "麻将连环宝",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": false,
        "game_3D": false,
        "app": false,
        "flash": false,
        "description": "「麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌吃胡功能，让会员能同时进行宾果与麻将游戏，更能获得高额奖金分数。"
      },{
        "category": 4,
        "url": "image/casino/Game_5402.png",
        "name": "夜市人生",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": "153.577.18",
        "game_3D": false,
        "app": true,
        "flash": true,
        "description": "想大快朵颐地吃遍台湾夜市美食吗? 『夜市人生』让你成为夜市美食达人王。游戏方式为拉霸40线：共有5个转轴，40条连线路径，结合了奖金标记，免费连线游戏(Free Game)，可变标记(Wild)，彩金标记(Jackpot)等的拉霸游戏。"
      },{
        "category": "6",
        "url": "image/casino/Game_5906.png",
        "name": "小e夺宝",
        "mark": {
            "mark": "new",
            "btn": false
          },
        "minor": false,
        "game_3D": false,
        "app": false,
        "flash": true,
        "description": "只要简单快速的点一下，即可享受迅速获奖的游戏快感;游戏总共有3层，层级越高奖金越丰厚，就等你来赢喔！"
      },{
        "category": 1,
        "url": "image/casino/Game_5068.png",
        "name": "酷搜马戏团",
        "mark": {
            "mark": "new",
            "btn": false
          } ,
        "minor": false,
        "game_3D": false,
        "app": true,
        "flash": true,
        "description": "KUSO CIRCUS马戏团综合三位小丑及四种动物转盘，趣味盎然，亲和力十足，而且奖金赔率颇高，是一款老少咸宜的游戏。"
      },{
        "category": 7,
        "url": "image/casino/Game_5067.png",
        "name": "大话西游",
        "mark": {
            "mark": "new",
            "btn": false
          } ,
        "minor": "133,519.18",
        "game_3D": false,
        "app": true,
        "flash": true,
        "description": "三藏法师一行人前往天竺取经的故事，​​让我们在游玩时，如同置身于此经典的奇幻旅程中。"
      },{
        "category": 1,
        "url": "image/casino/Game_5404.png",
        "name": "沙滩排球",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": "133,519.18",
        "game_3D": false,
        "app": true,
        "flash": false,
        "description": "「沙滩排球」藉由两位美少女角色：康尼与雪伦之间的对战练习及益智游戏，展现沙滩排球的特色及阳光下的青春动感。"
      },{
        "category": "6",
        "url": "image/casino/Game_15022.png",
        "name": "捕鱼空战版",
        "mark": {
            "mark": "recommend",
            "btn": false
          } ,
        "minor": false,
        "game_3D": true,
        "app": true,
        "flash": false,
        "description": "「捕鱼空战版」是一款空战炮击的机率游戏，玩家在游戏中可以用高射炮与各种机体进行战斗，从二战的零式战斗机到幻想的飞空艇，甚至是叱咤领空的龙王！当你成功击破时，那些机体都会化成无数的财富滚滚而来，堆满您的补给箱，这将是一次惊心动魄的黄金之旅！"
      },{
        "category": 9,
        "url": "image/casino/Game_5902.png",
        "name": "糖果派对",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": "153.577.18",
        "game_3D": false,
        "app": true,
        "flash": false,
        "description": "简单快速的游戏步调，只要点一下，立马享受串联迅速获奖的快感；游戏总共分为 3 层，每层奖金大不同！"
      },{
        "category": 5,
        "url": "image/casino/Game_5901.png",
        "name": "连环夺宝",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": false,
        "game_3D": false,
        "app": true,
        "flash": false,
        "description": "宝石迅速地掉落，奖金快速地获得！3关奖金大不同，搭配特殊的奖金游戏，轻松快速获得高额奖金！"
      },{
        "category": "1",
        "url": "image/casino/Game_5837.png",
        "name": "喜福猴年",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": "153.577.18",
        "game_3D": false,
        "app": true,
        "flash": false,
        "description": "「喜福猴年」是以中国十二生肖猴为主题的喜庆拉霸游戏，绚丽灯光效果与多重喜庆元素搭配50条联机与高额赔率，让会员能天天年年欢喜发大财。"
      },{
        "category": 1,
        "url": "image/casino/Game_5063.png",
        "name": "水果拉霸",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": false,
        "game_3D": false,
        "app": false,
        "flash": false,
        "description": "「水果拉霸」是以传统的水果盘为设计的单线拉霸游戏。"
      },{
        "category": 4,
        "url": "image/casino/Game_5601.png",
        "name": "秘境冒险",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": "153.577.18",
        "game_3D": false,
        "app": false,
        "flash": false,
        "description": "突破传统的老虎机设计，「秘境冒险」是一款新型态的迷宫寻宝游戏。透过角色在丛林迷宫里的探索丶挖掘宝藏丶以及在遗迹神庙里的奇遇，让会员充分感受寻宝的乐趣，为自己获得大量的财富。"
      },{
        "category": 1,
        "url": "image/casino/Game_5095.png",
        "name": "斗鸡",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": "153.577.18",
        "game_3D": false,
        "app": true,
        "flash": false,
        "description": "左右连线玩法全新升级! 看谁才是斗鸡之王!"
      },{
        "category": 1,
        "url": "image/casino/Game_5904.png",
        "name": "蒸气炸弹",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": "153.577.18",
        "game_3D": false,
        "app": false,
        "flash": false,
        "description": "蒸气炸弹(POP BOMBER)是一款轻松活泼的消除游戏、配合各式各样道具，可以获得更多分数。"
      },{
        "category": 1,
        "url": "image/casino/Game_5905.png",
        "name": "麻将连环宝",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": false,
        "game_3D": false,
        "app": false,
        "flash": false,
        "description": "「麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌吃胡功能，让会员能同时进行宾果与麻将游戏，更能获得高额奖金分数。"
      },{
        "category": "6",
        "url": "image/casino/Game_5402.png",
        "name": "夜市人生",
        "mark": {
            "mark": false,
            "btn": false
          } ,
        "minor": "153.577.18",
        "game_3D": false,
        "app": true,
        "flash": false,
        "description": "想大快朵颐地吃遍台湾夜市美食吗? 『夜市人生』让你成为夜市美食达人王。游戏方式为拉霸40线：共有5个转轴，40条连线路径，结合了奖金标记，免费连线游戏(Free Game)，可变标记(Wild)，彩金标记(Jackpot)等的拉霸游戏。"
      }
    ],
    mggames: [
      {
        "category": "1",
        "url": "image/mg/Game_23102.png",
        "name": "幸运海洋",
        "jackpot": false,
        "free": true,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "2",
        "url": "image/mg/Game_23113.png",
        "name": "天王星",
        "jackpot": false,
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "3",
        "url": "image/mg/Game_23117.png",
        "name": "咩咩黑羊",
        "jackpot": false,
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "1",
        "url": "image/mg/Game_23120.png",
        "name": "贝利西餐厅",
        "jackpot": "153,519.68",
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "2",
        "url": "image/mg/Game_23121.png",
        "name": "丛林五霸",
        "jackpot": false,
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "3",
        "url": "image/mg/Game_23133.png",
        "name": "银行抢匪",
        "jackpot": false,
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "2",
        "url": "image/mg/Game_23143.png",
        "name": "现金船长",
        "jackpot": "153,519.68",
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "3",
        "url": "image/mg/Game_23146.png",
        "name": "贝壳大亨",
        "jackpot": false,
        "free": true,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "1",
        "url": "image/mg/Game_23147.png",
        "name": "疯狂现金",
        "jackpot": false,
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "1",
        "url": "image/mg/Game_23154.png",
        "name": "樱桃红",
        "jackpot": "153,519.68",
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "1",
        "url": "image/mg/Game_23156.png",
        "name": "魔术酋长",
        "jackpot": false,
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "1",
        "url": "image/mg/Game_23157.png",
        "name": "黄金城市",
        "jackpot": "153,519.68",
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "1",
        "url": "image/mg/Game_23102.png",
        "name": "幸运海洋",
        "jackpot": false,
        "free": true,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "2",
        "url": "image/mg/Game_23113.png",
        "name": "天王星",
        "jackpot": false,
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "3",
        "url": "image/mg/Game_23117.png",
        "name": "咩咩黑羊",
        "jackpot": false,
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "1",
        "url": "image/mg/Game_23120.png",
        "name": "贝利西餐厅",
        "jackpot": "153,519.68",
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "2",
        "url": "image/mg/Game_23121.png",
        "name": "丛林五霸",
        "jackpot": false,
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "3",
        "url": "image/mg/Game_23133.png",
        "name": "银行抢匪",
        "jackpot": false,
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "2",
        "url": "image/mg/Game_23143.png",
        "name": "现金船长",
        "jackpot": "153,519.68",
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "3",
        "url": "image/mg/Game_23146.png",
        "name": "贝壳大亨",
        "jackpot": false,
        "free": true,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "1",
        "url": "image/mg/Game_23147.png",
        "name": "疯狂现金",
        "jackpot": false,
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "1",
        "url": "image/mg/Game_23154.png",
        "name": "樱桃红",
        "jackpot": "153,519.68",
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "1",
        "url": "image/mg/Game_23156.png",
        "name": "魔术酋长",
        "jackpot": false,
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      },{
        "category": "1",
        "url": "image/mg/Game_23157.png",
        "name": "黄金城市",
        "jackpot": "153,519.68",
        "free": false,
        "description": "麻将连环宝」是一款结合传统宾果游戏与中国麻将牌的新型态宾果游戏。以熟悉的玩法加上独特的「冬帝」与「菊皇」过关模式，搭配上丰厚奖金分数的彩金游戏以及特殊的听牌..."
      }
    ],
    ranks: [
      {
        "name": "esw***",
        "score": "¥ 142,562,780.96"
      },
      {
        "name": "wer***",
        "score": "¥ 78,562,780.96"
      },
      {
        "name": "asd***",
        "score": "¥ 3,562,780.96"
      },
      {
        "name": "esw***",
        "score": "¥ 2,562,780.96"
      },
      {
        "name": "wer***",
        "score": "¥ 1,562,780.96"
      },
      {
        "name": "asd***",
        "score": "¥ 562,780.96"
      },
      {
        "name": "esw***",
        "score": "¥ 462,780.96"
      },
      {
        "name": "wer***",
        "score": "¥ 362,780.96"
      },
      {
        "name": "asd***",
        "score": "¥ 262,780.96"
      },
      {
        "name": "esw***",
        "score": "¥ 162,780.96"
      },
      {
        "name": "wer***",
        "score": "¥ 62,780.96"
      },
      {
        "name": "asd***",
        "score": "¥ 52,780.96"
      },
      {
        "name": "esw***",
        "score": "¥ 42,780.96"
      },
      {
        "name": "wer***",
        "score": "¥ 32,780.96"
      },
      {
        "name": "asd***",
        "score": "¥ 22,780.96"
      },
      {
        "name": "esw***",
        "score": "¥ 12,780.96"
      },
      {
        "name": "wer***",
        "score": "¥ 2,780.96"
      },
      {
        "name": "asd***",
        "score": "¥ 1,780.96"
      },
      {
        "name": "esw***",
        "score": "¥ 880.96"
      },
      {
        "name": "wer***",
        "score": "¥ 780.96"
      },
      {
        "name": "asd***",
        "score": "¥ 680.96"
      },
      {
        "name": "esw***",
        "score": "¥ 580.96"
      },
      {
        "name": "wer***",
        "score": "¥ 480.96"
      },
      {
        "name": "asd***",
        "score": "¥ 380.96"
      }
    ]
  },
});

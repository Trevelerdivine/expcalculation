let depend_status = [0,0,1,0,1,1,1];
let af_score = 0;
let attack_method = 0;
let attack_method_index = 0;
let AfMainFixStatus = [0,0];//[HP実数値,攻撃力実数値]
const attack_method_name = ["通常攻撃", "重撃", "落下攻撃", "元素スキル", "元素爆発"];
const element = ["炎元素", "水元素", "氷元素", "雷元素", "風元素", "草元素", "岩元素"]
const DisplayCharName = ["ディシア","宵宮","胡桃","クレー","ディルック","トーマ","煙緋","辛炎","ベネット","香菱",
                            "アンバー","ニィロウ","夜蘭","神里綾人","珊瑚宮心海","タルタリヤ","モナ","キャンディス","バーバラ","行秋",
                            "申鶴","神里綾華","エウルア","甘雨","七七","アーロイ","ミカ","レイラ","ロサリア","ディオナ",
                            "重雲","ガイア","セノ","八重神子","雷電将軍","刻晴","ドリー","久岐忍","九条裟羅","フィッシュル",
                            "北斗","レザー","リサ","雷旅人","放浪者","楓原万葉 ","魈","ウェンティ","ジン","ファルザン",
                            "鹿野院平蔵","早柚","スクロース","風旅人","白朮","アルハイゼン","ナヒーダ","ティナリ","綺良々","カーヴェ",
                            "ヨォーヨ","コレイ","草旅人","荒瀧一斗","アルベド","鍾離","雲菫","ゴロー","ノエル","凝光",
                            "岩旅人", "リネ", "ヌヴィレット", "リオセスリ", "フリーナ", "ナヴィア", "嘉明", "閑雲"
];
const DisplayWeaponName = [ "萃光の裁葉", "聖顕の鍵", "波乱月白経津", "霧切の廻光", "蒼古なる自由への誓い", "磐岩結緑", "斬山の刃", "天空の刃", "風鷹剣", "船渠剣",
                            "狼牙", "サーンドルの渡し守", "海淵のフィナーレ", "東花坊時雨", "サイフォスの月明かり", "原木刀", "籠釣瓶一心", "シナバースピンドル", "天目影打", "ダークアレイの閃光",
                            "腐植の剣", "黒剣", "黒岩の長剣", "鉄蜂の刺し", "斬岩·試作", "匣中龍吟", "旧貴族長剣", "祭礼の剣", "笛の剣", "西風剣",
                            "飛天御剣", "チ虎魚の刀", "旅道の剣", "黎明の神剣", "冷刃", "葦海の標", "赤角石塵滅砕", "松韻の響く頃", "無工の剣", "狼の末路",
                            "天空の傲", "携帯型チェーンソー", "話死合い棒", "タイダル・シャドー", "鉄彩の花", "マカイラの水色", "森林のレガリア", "惡王丸", "銜玉の海皇", "桂木斬長正",
                            "千岩古剣", "雪葬の星銀", "螭龍の剣", "黒岩の斬刀", "白影の剣", "古華·試作", "旧貴族大剣", "雨裁", "祭礼の大剣", "鐘の剣",
                            "西風大剣", "飛天大御剣", "理屈責め", "白鉄の大剣", "龍血を浴びた剣", "鉄影段平", "赤砂の杖", "息災", "草薙の稲光", "護摩の杖",
                            "破天の槍", "天空の脊", "和璞鳶", "フィヨルドの歌	", "正義の報酬", "風信の矛", "ムーンピアサー", "斬波のひれ長", "「漁獲」", "喜多院十文字槍",
                            "千岩長槍", "ドラゴンスピア", "旧貴族猟槍", "西風長槍", "死闘の槍", "黒岩の突槍", "流月の針", "星鎌·試作", "匣中滅龍", "黒纓槍",
                            "白纓槍", "始まりの大魔術", "狩人の道", "若水", "冬極の白星", "飛雷の鳴弦", "終焉を嘆く詩", "アモスの弓", "天空の翼", "烈日の後嗣",
                            "静寂の唄", "トキの嘴", "王の近侍", "竭沢", "落霞", "曚雲の月", "破魔の弓", "幽夜のワルツ", "風花の頌歌", "ダークアレイの狩人",
                            "蒼翠の狩猟弓", "黒岩の戦弓", "リングボウ", "澹月·試作", "弓蔵", "旧貴族長弓", "祭礼の弓", "絶弦", "西風猟弓", "文使い",
                            "弾弓", "リカーブボウ", "シャープシューターの誓い", "鴉羽の弓", "久遠流転の大典", "碧落の瓏", "トゥライトゥーラの記憶", "千夜に浮かぶ夢", "神楽の真意", "不滅の月華",
                            "浮世の錠", "四風原典", "天空の巻", "果てなき紺碧の唄", "古祠の瓏", "純水流華", "彷徨える星", "満悦の実", "誓いの明瞳", "白辰の輪",
                            "ドドコの物語", "ダークアレイの酒と詩", "冬忍びの実", "昭心", "黒岩の緋玉", "万国諸海の図譜", "金珀·試作", "匣中日月", "旧貴族秘法録", "祭礼の断片",
                            "流浪楽章", "西風秘典", "龍殺しの英傑譚", "魔導緒論", "凛流の監視者", "静水流転の輝き", "裁断", "スーパーアルティメット覇王魔剣"
];
const char_name = ["dehya","yoimiya","hutao","klee","diluc","thoma","yanfei","xinyan","bennett","xiangling",
                   "amber","nirou","yelan","kamisatoayato","sangonomiyakokomi","tartaglia","mona","candace","barbara","xingqiu",
                   "shenhe","kamisatoayaka","eula","ganyu","qiqi","aloy","mika","layla","rosaria","diona",
                   "chongyun","kaeya","cyno","yaemiko","raidenshougun","keqing","dori","kukishinobu","kujousara","fischl",
                   "beidou","razor","lisa","travelarelectro","wanderer","kazuhakaedehara","xiao","venti","jean","faruzan",
                   "shikanoinheizou","sayu","sucrose","traveraranemo","baizhu","alhaitham","nahida","tighnari","kirara","kaveh",
                   "yaoyao","collei","travelardendro","aratakiitto","albedo","zhongli","yunjin","gorou","noelle","ningguang","travelergeo",
                   "Lyney", "Neuvillette", "Wriothesley", "Furina", "Navia", "gaming", "Xianyun"
                  ];
const weapon_name = [ "LightofFoliarIncision", "KeyofKhajNisut", "HaranGeppakuFutsu", "MistsplitterReforged", "FreedomSworn", "PrimordialJadeCutter", "SummitShaper", "SkywardBlade", "AquilaFavonia", "TheDockhandsAssistant",
                      "WolfFang", "FleuveCendreFerryman", "FinaleoftheDeep", "ToukabouShigure", "XiphosMoonlight", "SapwoodBlade", "KagotsurubeIsshin", "CinnabarSpindle", "AmenomaKageuchi", "TheAlleyFlash",
                      "FesteringDesire", "TheBlackSword", "BlackcliffLongsword", "IronSting", "PrototypeRancour", "LionsRoar", "RoyalLongsword", "SacrificialSword", "TheFlute", "FavoniusSword",
                      "SkyriderSword", "FilletBlade", "TravelersHandySword", "HarbingerofDawn", "CoolSteel", "BeaconoftheReedSea", "RedhornStonethresher", "SongofBrokenPines", "TheUnforged", "WolfsGravestone",
                      "SkywardPride", "PortablePowerSaw", "TalkingStick", "TidalShadow", "MailedFlower", "MakhairaAquamarine", "ForestRegalia", "Akuoumaru", "LuxuriousSeaLoad", "KatsuragikiriNagamasa",
                      "LithicBlade", "SnowTombedStarsilver", "SerpentSpine", "BlackcliffSlasher", "Whiteblind", "PrototypeArchaic", "RoyalGreatsword", "Rainslasher", "SacrificialGreatsword", "TheBell",
                      "FavoniusGreatsword", "SkyriderGreatsword", "DebateClub", "WhiteIronGreatsword", "BloodtaintedGreatsword", "FerrousShadow", "StaffoftheScarletSands", "CalamityQueller", "EngulfingLightning", "StaffofHoma",
                      "VortexVanguisher", "SkywardSpine", "PrimordialJadeWingedSpear", "BalladoftheFjords", "RightfulReward", "MissiveWindspear", "Moonpiercer", "WavebreakersFin", "TheCatch", "KitainCrossSpear",
                      "LithicSpear", "DragonspineSpear", "RoyalSpear", "FavoniusLance", "Deathmatch", "BlackcliffPole", "CrescentPike", "PrototypeStarglitter", "DragonsBane", "BlackTassel",
                      "WhiteTassel", "TheFirstGreatMagic", "HuntersPath", "AquaSimulacra", "PolarStar", "ThunderingPulse", "ElegyfortheEnd", "AmosBow", "SkywardHarp", "ScionoftheBlazingSun",
                      "SongofStillness", "IbisPiercer", "KingsSquire", "EndoftheLine", "FadingTwilight", "MouunsMoon", "Hamayumi", "MitternachtsWaltz", "WindblumeOde", "AlleyHunter",
                      "TheViridescentHunt", "BlackcliffWarbow", "CompoundBow", "PrototypeCrescent", "Rust", "RoyalBow", "SacrificialBow", "TheStringless", "FavoniusWarbow", "Messenger",
                      "Slingshot", "RecurveBow", "SharpshootersOath", "RavenBow", "TomeoftheEternalFlow", "JadefallsSplendor", "TulaytullahsRemembrance", "AThousandFloatingDreams", "KagurasVerity", "EverlastingMoonglow",
                      "MemoryofDust", "LostPrayertotheSacredWinds", "SkywardAtlas", "BalladOfTheBoundlessBlue", "SacrificialJade", "FlowingPurity", "WanderingEvenstar", "FruitofFulfillment", "OathswornEye", "HakushinRing",
                      "DodocoTales", "WineandSong", "Frostbearer", "EyeofPerception", "BlackcliffAgate", "MappaMare", "PrototypeAmber", "SolarPearl", "RoyalGrimoire", "SacrificialFragments",
                      "TheWidsith", "FavoniusCodex", "ThrillingTalesofDragonSlayers", "MagicGuide", "CashflowSupervision", "SplendorOfTranquilWaters", "Verdict", "UltimateTyrantSuperDevilSword"
                    ]


const elm_reaction_obj = [
  {
    id: "Vaporize_pyro",
    label: "蒸発-炎　"
  },
  {
    id: "Vaporize-hydro",
    label: "蒸発-水　"
  },
  {
    id: "Melt-pyro",
    label: "溶解-炎　"
  },
  {
    id: "Melt-cyro",
    label: "溶解-氷　"
  },
  {
    id: "Spread",
    label: "草激化　"
  },
  {
    id: "Aggravate",
    label: "超激化　"
  },
  {
    id: "Aggravate",
    label: "超伝導　"
  }
];

async function calculate_base_status() {
  // 武器の装備データを取得
  let WeaponEquipData = UserData.data.avatarInfoList[CharIndexList[SelectId]].equipList[EquipNumber - 1].flat.weaponStats[1];

  // キャラクターと武器のデータを取得
  const CharResponse = await fetch(`../data/character/char_data/${char_name[selectedCharId]}.json`);
  const CharData = await CharResponse.json();
  const WeaponResponse = await fetch(`../data/weapon/weapon_data/${weapon_name[selectedWeaponId]}.json`);
  const WeaponData = await WeaponResponse.json();

  // 基礎ステータスを取得し、小数点以下を四捨五入
  const base_hp = Math.round(UserData.data.avatarInfoList[CharIndexList[SelectId]].fightPropMap["1"]);
  const base_attck = Math.round(UserData.data.avatarInfoList[CharIndexList[SelectId]].fightPropMap["4"]);
  const base_deff = Math.round(UserData.data.avatarInfoList[CharIndexList[SelectId]].fightPropMap["7"]);

  // 基礎元素熟知を計算
  let base_elm = CharData.ステータス.基礎元素熟知[(parseInt(CharAdvanceRank) + 2) * 10 + "+"];
  if (WeaponEquipData.appendPropId === "FIGHT_PROP_ELEMENT_MASTERY") {
      base_elm += WeaponEquipData.statValue;
  }

  // 基礎元素チャージ効率を計算
  let base_elm_charge = 1 + CharData.ステータス.基礎元素チャージ効率[(parseInt(CharAdvanceRank) + 2) * 10 + "+"];
  if (WeaponEquipData.appendPropId === "FIGHT_PROP_CHARGE_EFFICIENCY") {
      base_elm_charge += WeaponEquipData.statValue / 100;
  }

  // 基礎会心率を計算
  let base_cr = CharData.ステータス.基礎会心率[(parseInt(CharAdvanceRank) + 2) * 10 + "+"];
  if (WeaponEquipData.appendPropId === "FIGHT_PROP_CRITICAL") {
      base_cr += WeaponEquipData.statValue / 100;
  }

  // 基礎会心ダメージを計算
  let base_cd = CharData.ステータス.基礎会心ダメージ[(parseInt(CharAdvanceRank) + 2) * 10 + "+"];
  if (WeaponEquipData.appendPropId === "FIGHT_PROP_CRITICAL_HURT") {
      base_cd += WeaponEquipData.statValue / 100;
  }

  // 基礎ダメージバフを計算
  const CharDmgBuffType = parseInt(CharData.ステータス.基礎ダメージバフ.元素);
  const WeaponDmgBuffType = parseInt(WeaponData.ステータス.基礎ダメージバフ.元素);
  let base_dmg_buff = 0;
  if (CharDmgBuffType == char_propaty[0]) {
      base_dmg_buff += parseFloat(CharData.ステータス.基礎ダメージバフ.数値[(parseInt(CharAdvanceRank) + 2) * 10 + "+"]);
  }
  if (WeaponDmgBuffType == char_propaty[0]) {
      base_dmg_buff += parseFloat(WeaponData.ステータス.基礎ダメージバフ.数値[weapon_level]);
  }

  // 基礎ステータス配列を作成
  const base_status = [base_hp, base_deff, base_elm, base_elm_charge, base_attck, base_cr, base_cd, base_dmg_buff];
  console.log(base_status);
  return base_status;
}

async function calculate_af_main_status_buff() 
{
    const DmgBuffName = ["FIGHT_PROP_FIRE_ADD_HURT", "FIGHT_PROP_WATER_ADD_HURT", "FIGHT_PROP_ICE_ADD_HURT", "FIGHT_PROP_ELEC_ADD_HURT", "FIGHT_PROP_WIND_ADD_HURT", "FIGHT_PROP_GRASS_ADD_HURT", "FIGHT_PROP_ROCK_ADD_HURT", "FIGHT_PROP_PHYSICAL_ADD_HURT"];
    const EachBuffName = ["FIGHT_PROP_HP_PERCENT", "FIGHT_PROP_DEFENSE_PERCENT", "FIGHT_PROP_ELEMENT_MASTERY", "FIGHT_PROP_CHARGE_EFFICIENCY", "FIGHT_PROP_ATTACK_PERCENT", "FIGHT_PROP_CRITICAL", "FIGHT_PROP_CRITICAL_HURT", DmgBuffName[char_propaty[0]]];
    let AfMainStatusBuff = [0,0,0,0,0,0,0,0];
    let CharEquipData = UserData.data.avatarInfoList[CharIndexList[SelectId]].equipList;
    let EachBuff;
    for (let i = 0; i < 8; i++)
    {
        EachBuff = 0;
        CharEquipData.forEach(item => {
            if (item.flat && item.flat.reliquaryMainstat && item.flat.reliquaryMainstat.mainPropId === EachBuffName[i]) {
                EachBuff += item.flat.reliquaryMainstat.statValue;
            }
            if (i == 0)
            {
                if (item.flat && item.flat.reliquaryMainstat && item.flat.reliquaryMainstat.mainPropId === "FIGHT_PROP_HP") {
                  AfMainFixStatus[0] = item.flat.reliquaryMainstat.statValue;
                }
            }
            if (i == 4)
            {
                if (item.flat && item.flat.reliquaryMainstat && item.flat.reliquaryMainstat.mainPropId === "FIGHT_PROP_ATTACK") {
                  AfMainFixStatus[1] = item.flat.reliquaryMainstat.statValue;
                }
            }
        });
        AfMainStatusBuff[i] = EachBuff;
    }
  AfMainStatusBuff[0] *= 0.01;
  AfMainStatusBuff[1] *= 0.01;
  AfMainStatusBuff[4] *= 0.01;
  AfMainStatusBuff[7] /= 100;
  return AfMainStatusBuff
}

async function calculate_af_score(depend_status,base_status) 
{
  let CharEquipData = UserData.data.avatarInfoList[CharIndexList[SelectId]].equipList;
  let AfScoreDistribution = [0,0,0,0,0,0,0,0];
  let RateStatusBuff = 0;
  let FixStatusBuff = 0;
  for (let i = 0; i < 7; i++)
  {
    if (depend_status[i] == 0)
    {
      AfScoreDistribution[i] = 0
      continue;
    }
    switch (i)
    {
      case 0:
        RateStatusBuff = 0;
        FixStatusBuff = 0;
        CharEquipData.forEach(equip => {
            if (equip.reliquary && equip.flat.reliquarySubstats) {
              equip.flat.reliquarySubstats.forEach(substat => {
                    if (substat.appendPropId === "FIGHT_PROP_HP_PERCENT") {
                        RateStatusBuff += Math.round(substat.statValue / 0.583);
                    }
                    if (substat.appendPropId === "FIGHT_PROP_HP") {
                        FixStatusBuff += Math.round(substat.statValue / 29.875);
                    }
                });
            }
        });
        AfScoreDistribution[0] = (FixStatusBuff * 2987.5 / base_status[0] + RateStatusBuff * 0.583) * 4/3;
        break;
      case 1:
        RateStatusBuff = 0;
        FixStatusBuff = 0;
        CharEquipData.forEach(equip => {
            if (equip.reliquary && equip.flat.reliquarySubstats) {
              equip.flat.reliquarySubstats.forEach(substat => {
                    if (substat.appendPropId === "FIGHT_PROP_DEFENSE_PERCENT") {
                        RateStatusBuff += Math.round(substat.statValue / 0.729);
                    }
                    if (substat.appendPropId === "FIGHT_PROP_DEFENSE") {
                        FixStatusBuff += Math.round(substat.statValue / 2.315);
                    }
                });
            }
        });
        AfScoreDistribution[1] = (FixStatusBuff * 231.5 / base_status[1] + RateStatusBuff * 0.729) * 16/15;
        break;
      case 2:
        FixStatusBuff = 0;
        CharEquipData.forEach(equip => {
            if (equip.reliquary && equip.flat.reliquarySubstats) {
              equip.flat.reliquarySubstats.forEach(substat => {
                    if (substat.appendPropId === "FIGHT_PROP_ELEMENT_MASTERY") {
                        FixStatusBuff += Math.round(substat.statValue / 2.331);
                    }
                });
            }
        });
        AfScoreDistribution[2] = FixStatusBuff * 2.331 / 3;
        break;
      case 3:
        RateStatusBuff = 0;
        CharEquipData.forEach(equip => {
            if (equip.reliquary && equip.flat.reliquarySubstats) {
                equip.flat.reliquarySubstats.forEach(substat => {
                    if (substat.appendPropId === "FIGHT_PROP_CHARGE_EFFICIENCY") {
                        RateStatusBuff += Math.round(substat.statValue / 0.648);
                    }
                });
            }
        });
        AfScoreDistribution[3] =  RateStatusBuff * 0.648 * 1.2;
        break;
      case 4:
        RateStatusBuff = 0;
        FixStatusBuff = 0;
        CharEquipData.forEach(equip => {
            if (equip.reliquary && equip.flat.reliquarySubstats) {
                equip.flat.reliquarySubstats.forEach(substat => {
                    if (substat.appendPropId === "FIGHT_PROP_ATTACK_PERCENT") {
                        RateStatusBuff += Math.round(substat.statValue / 0.583);
                    }
                    if (substat.appendPropId === "FIGHT_PROP_ATTACK") {
                        FixStatusBuff += substat.statValue / 1.945;
                    }
                });
            }
        });
        AfScoreDistribution[4] = (FixStatusBuff * 194.5 / base_status[4] + RateStatusBuff * 0.583) * 4/3;
        break;
      case 5:
        RateStatusBuff = 0;
        CharEquipData.forEach(equip => {
            if (equip.reliquary && equip.flat.reliquarySubstats) {
                equip.flat.reliquarySubstats.forEach(substat => {
                    if (substat.appendPropId === "FIGHT_PROP_CRITICAL") {
                        RateStatusBuff += Math.round(substat.statValue / 0.389);
                    }
                });
            }
        });
        AfScoreDistribution[5] =  RateStatusBuff * 0.389 * 2;
        break;
      case 6:
        RateStatusBuff = 0;
        CharEquipData.forEach(equip => {
            if (equip.reliquary && equip.flat.reliquarySubstats) {
                equip.flat.reliquarySubstats.forEach(substat => {
                    if (substat.appendPropId === "FIGHT_PROP_CRITICAL_HURT") {
                        RateStatusBuff += Math.round(substat.statValue / 0.777);
                    }
                });
            }
        });
        AfScoreDistribution[6] =  RateStatusBuff * 0.777
    }
  }
  for (let n = 0; n < 7; n++)
  {
    AfScoreDistribution[7] += AfScoreDistribution[n];
  }
  return AfScoreDistribution
}

async function calculate_depend_status()
{
  attack_method = document.getElementById("attack_method_id").value;
  if (attack_method > 0)
  {
    if (attack_method >= 1 && attack_method <= 5) {
        attack_method_index = 0;
    } else if (attack_method >= 6 && attack_method <= 10) {
    attack_method_index = 1;
    } else if (attack_method >= 11 && attack_method <= 15) {
    attack_method_index = 2;
    } else if (attack_method >= 16 && attack_method <= 20) {
    attack_method_index = 3;
    } else if (attack_method >= 21 && attack_method <= 25) {
    attack_method_index = 4;
    } else {
        attack_method_index = -1;
    }
    }
    depend_status = [0,0,0,0,0,0,0];
    const char_response = await fetch("../data/character/char_data/" + char_name[selectedCharId] + ".json");
    const char_data = await char_response.json();
    if (attack_method != 0)
    {
        char_propaty[0] = char_data[attack_method_name[attack_method_index]]["元素"];
        const char_depend_status = char_data[attack_method_name[attack_method_index]].依存ステータス;
        const weapon_response = await fetch("../data/weapon/weapon_data/" + weapon_name[selectedWeaponId] + ".json");
        const weapon_data = await weapon_response.json();
        const weapon_depend_status = weapon_data.ステータス.依存ステータス;
        const button = document.getElementById("reactionoff_flag");
        for (let i = 0; i < 7; i++)
        {
            depend_status[i] = char_depend_status[i] + weapon_depend_status[i];
            if (depend_status[i] > 1)
            {
            depend_status[i] = 1
            }
        }

        if (button !== null && !button.checked && char_propaty[0] != 7)
        {
            depend_status[2] = 1;
        }

        if (selectedImageIds[0] ==17 && selectedImageIds[1] == 17)
        {
            const zetsuen_checkbox = document.getElementById("af17_4");
            if(zetsuen_checkbox.checked && attack_method_index == 4)
            {
            depend_status[3] = 1;
            }
        }
    }
    return depend_status;
}

function calc_zetsuen_buff(elm_charge)
{
  const zetsuen_dmgbuff = Math.min(elm_charge / 4, 0.75);
  return zetsuen_dmgbuff;
}

async function calculate_depend_status_index(array)
{
  depend_status_index = [];
  for (let i = 0; i < array.length; i++) 
  {
    if (array[i] === 1) 
    {
      depend_status_index.push(i);
    }
  }
  return depend_status_index;
}

async function calculate_score_distribute(af_score,depend_status)
{
  let k = 0;
  let rundom_count = 0;
  let distribute = [];
  let score_distribution = [];
  for (let i = 0; i < 7; i++)
  {
    rundom_count += depend_status[i];
  }
  let randomNumbers = Array.from({ length: rundom_count - 1 }, () => af_score*Math.random());
  randomNumbers.sort((a, b) => a - b);
  distribute[0] = randomNumbers[0];
  for (let j = 1; j < randomNumbers.length; j++) 
  {
    distribute[j] = randomNumbers[j] - randomNumbers[j - 1];
  }
  distribute[rundom_count - 1] = af_score - randomNumbers[rundom_count - 2];
  for (let i = 0; i < 7; i++)
  {
    if (depend_status[i]==0)
    {
      score_distribution[i] = 0;
      continue;
    }
    score_distribution[i] = depend_status[i] * distribute[k];
    k = k + 1; 
  }
  return score_distribution;
}

async function calculate_fixed_status(bs, AfParameter)
//変数は左から（score_distribution,base_status,af_main_status_buff）
{
  let fixed_status = [0,0,0,0,0,0,0,0];
  fixed_status[0] = bs[0] * (1 + AfParameter[0] / 100) + AfParameter[7];
  fixed_status[1] = bs[1] * (1 + AfParameter[1] / 100) + AfParameter[9];
  fixed_status[2] = bs[2] + AfParameter[2];
  fixed_status[3] = bs[3] + AfParameter[3] / 100;
  fixed_status[4] = bs[4] * (1 + AfParameter[4] / 100) + AfParameter[8];
  fixed_status[5] = bs[5] + AfParameter[5] / 100;
  fixed_status[6] = bs[6] + AfParameter[6] / 100;
  fixed_status[7] = bs[7] + AfParameter[parseInt(char_propaty[0]) + 10] / 100;
  return fixed_status;
}

async function create_char_instance(base_status, parameter) {
  let char_instance;

  switch (selectedCharId) {
    case "71":
      char_instance = new Lyney(base_status, parameter);
      break;
    case "0":
      char_instance = new dehya(base_status, parameter);
      break;
    case "1":
      char_instance = new yoimiya(base_status, parameter);
      break;
    case "2":
      char_instance = new hutao(base_status, parameter);
      break;
    case "3":
      char_instance = new klee(base_status, parameter);
      break;
    case "4":
      char_instance = new diluc(base_status, parameter);
      break;
    case "76":
      char_instance = new gaming(base_status, parameter);
      break;
    case "6":
      char_instance = new yanfei(base_status, parameter);
      break;
    case "7":
      char_instance = new xinyan(base_status, parameter);
      break;
    case "8":
      char_instance = new bennett(base_status, parameter);
      break;
    case "9":
      char_instance = new xiangling(base_status, parameter);
      break;
    case "10":
      char_instance = new amber(base_status, parameter);
      break;
    case "74":
    char_instance = new Furina(base_status, parameter);
      break;
    case "72":
      char_instance = new Neuvillette(base_status, parameter);
      break;
    case "11":
      char_instance = new nirou(base_status, parameter);
      break;
    case "12":
      char_instance = new yelan(base_status, parameter);
      break;
    case "13":
      char_instance = new kamisatoayato(base_status, parameter);
      break;
    case "15":
      char_instance = new tartaglia(base_status, parameter);
      break;
    case "19":
      char_instance = new xingqiu(base_status, parameter);
      break;
    case "73":
      char_instance = new Wriothesley(base_status, parameter);
      break;
    case "21":
      char_instance = new kamisatoayaka(base_status, parameter);
      break;
    case "22":
      char_instance = new eula(base_status, parameter);
      break;
    case "23":
      char_instance = new ganyu(base_status, parameter);
      break;
    case "28":
      char_instance = new rosaria(base_status, parameter);
      break;
    case "30":
      char_instance = new chongyun(base_status, parameter);
      break;
    case "31":
      char_instance = new kaeya(base_status, parameter);
      break;
    case "32":
      char_instance = new cyno(base_status, parameter);
      break;
    case "33":
      char_instance = new yaemiko(base_status, parameter);
      break;
    case "34":
      char_instance = new raiden(base_status, parameter);
      break;
    case "35":
      char_instance = new keqing(base_status, parameter);
      break;
    case "38":
      char_instance = new kujousara(base_status, parameter);
      break;
    case "39":
      char_instance = new fischl(base_status, parameter);
      break;
    case "40":
      char_instance = new beidou(base_status, parameter);
      break;
    case "41":
      char_instance = new razor(base_status, parameter);
      break;
    case "42":
      char_instance = new lisa(base_status, parameter);
      break;
    case "44":
      char_instance = new wanderer(base_status, parameter);
      break;
    case "46":
      char_instance = new xiao(base_status, parameter);
      break;
    case "49":
      char_instance = new faruzan(base_status, parameter);
      break;
    case "50":
      char_instance = new shikanoinheizou(base_status, parameter);
      break;
    case "55":
      char_instance = new alhaitham(base_status, parameter);
      break;
    case "56":
      char_instance = new nahida(base_status, parameter);
      break;
    case "57":
      char_instance = new tighnari(base_status, parameter);
      break;
    case "58":
      char_instance = new kirara(base_status, parameter);
      break;
    case "62":
      char_instance = new travelardendro(base_status, parameter);
      break;
    case "75":
      char_instance = new Navia(base_status, parameter);
      break;
    case "63":
      char_instance = new aratakiitto(base_status, parameter);
      break;
    case "64":
      char_instance = new albedo(base_status, parameter);
      break;
    case "65":
      char_instance = new zhongli(base_status, parameter);
      break;
    case "68":
      char_instance = new noelle(base_status, parameter);
      break;
    case "69":
      char_instance = new ningguang(base_status, parameter);
      break;
    case "70":
      char_instance = new travelergeo(base_status, parameter);
      break;
    default:
      // 未知のキャラクターIDに対する処理を追加することもできます
      break;
  }
  
  return char_instance;
}

async function create_weapon_instance(base_status) {
  let weapon_instance;
  switch (selectedWeaponId) {
    case "0":
      weapon_instance = new LightofFoliarIncision(base_status);
      break;
    case "1":
      weapon_instance = new KeyofKhajNisut(base_status);
      break;
    case "2":
      weapon_instance = new HaranGeppakuFutsu(base_status);
      break;
    case "3":
      weapon_instance = new MistsplitterReforged(base_status);
      break;
    case "4":
      weapon_instance = new FreedomSworn(base_status);
      break;
    case "5":
      weapon_instance = new PrimordialJadeCutter(base_status);
      break;
    case "6":
      weapon_instance = new SummitShaper(base_status);
      break;
    case "7":
      weapon_instance = new SkywardBlade(base_status);
      break;
    case "8":
      weapon_instance = new AquilaFavonia(base_status);
      break;
    case "9":
      weapon_instance = new TheDockhandsAssistant(base_status);
      break;
    case "10":
      weapon_instance = new WolfFang(base_status);
      break;
    case "11":
      weapon_instance = new FleuveCendreFerryman(base_status);
      break;
    case "12":
      weapon_instance = new FinaleoftheDeep(base_status);
      break;
    case "13":
      weapon_instance = new ToukabouShigure(base_status);
      break;
    case "14":
      weapon_instance = new XiphosMoonlight(base_status);
      break;
    case "15":
      weapon_instance = new SapwoodBlade(base_status);
      break;
    case "16":
      weapon_instance = new KagotsurubeIsshin(base_status);
      break;
    case "17":
      weapon_instance = new CinnabarSpindle(base_status);
      break;
    case "18":
      weapon_instance = new AmenomaKageuchi(base_status);
      break;
    case "19":
      weapon_instance = new TheAlleyFlash(base_status);
      break;
    case "20":
      weapon_instance = new FesteringDesire(base_status);
      break;
    case "21":
      weapon_instance = new TheBlackSword(base_status);
      break;
    case "22":
      weapon_instance = new BlackcliffLongsword(base_status);
      break;
    case "23":
      weapon_instance = new IronSting(base_status);
      break;
    case "24":
      weapon_instance = new PrototypeRancour(base_status);
      break;
    case "25":
      weapon_instance = new LionsRoar(base_status);
      break;
    case "26":
      weapon_instance = new RoyalLongsword(base_status);
      break;
    case "27":
      weapon_instance = new SacrificialSword(base_status);
      break;
    case "28":
      weapon_instance = new TheFlute(base_status);
      break;
    case "29":
      weapon_instance = new FavoniusSword(base_status);
      break;
    case "30":
      weapon_instance = new SkyriderSword(base_status);
      break;
    case "31":
      weapon_instance = new FilletBlade(base_status);
      break;
    case "32":
      weapon_instance = new TravelersHandySword(base_status);
      break;
    case "33":
      weapon_instance = new HarbingerofDawn(base_status);
      break;
    case "34":
      weapon_instance = new CoolSteel(base_status);
      break;
    case "156":
      weapon_instance = new Verdict(base_status);
      break;
    case "35":
      weapon_instance = new BeaconoftheReedSea(base_status);
      break;
    case "36":
      weapon_instance = new RedhornStonethresher(base_status);
      break;
    case "37":
      weapon_instance = new SongofBrokenPines(base_status);
      break;
    case "38":
      weapon_instance = new TheUnforged(base_status);
      break;
    case "39":
      weapon_instance = new WolfsGravestone(base_status);
      break;
    case "157":
      weapon_instance = new UltimateTyrantSuperDevilSword(base_status);
      break;
    case "40":
      weapon_instance = new SkywardPride(base_status);
      break;
    case "41":
      weapon_instance = new PortablePowerSaw(base_status);
      break;
    case "42":
      weapon_instance = new TalkingStick(base_status);
      break;
    case "43":
      weapon_instance = new TidalShadow(base_status);
      break;
    case "44":
      weapon_instance = new MailedFlower(base_status);
      break;
    case "45":
      weapon_instance = new MakhairaAquamarine(base_status);
      break;
    case "46":
      weapon_instance = new ForestRegalia(base_status);
      break;
    case "47":
      weapon_instance = new Akuoumaru(base_status);
      break;
    case "48":
      weapon_instance = new LuxuriousSeaLoad(base_status);
      break;
    case "49":
      weapon_instance = new KatsuragikiriNagamasa(base_status);
      break;
    case "50":
      weapon_instance = new LithicBlade(base_status);
      break;
    case "51":
      weapon_instance = new SnowTombedStarsilver(base_status);
      break;
    case "52":
      weapon_instance = new SerpentSpine(base_status);
      break;
    case "53":
      weapon_instance = new BlackcliffSlasher(base_status);
      break;
    case "54":
      weapon_instance = new Whiteblind(base_status);
      break;
    case "55":
      weapon_instance = new PrototypeArchaic(base_status);
      break;
    case "57":
      weapon_instance = new Rainslasher(base_status);
      break;
    case "58":
      weapon_instance = new SacrificialGreatsword(base_status);
      break;
    case "59":
      weapon_instance = new TheBell(base_status);
      break;
    case "60":
      weapon_instance = new FavoniusGreatsword(base_status);
      break;
    case "61":
      weapon_instance = new SkyriderGreatsword(base_status);
      break;
    case "62":
      weapon_instance = new DebateClub(base_status);
      break;
    case "63":
      weapon_instance = new WhiteIronGreatsword(base_status);
      break;
    case "64":
      weapon_instance = new BloodtaintedGreatsword(base_status);
      break;
    case "65":
      weapon_instance = new FerrousShadow(base_status);
      break;
    case "66":
      weapon_instance = new StaffoftheScarletSands(base_status);
      break;
    case "67":
      weapon_instance = new CalamityQueller(base_status);
      break;
    case "68":
      weapon_instance = new EngulfingLightning(base_status);
      break;
    case "69":
      weapon_instance = new StaffofHoma(base_status);
      break;
    case "70":
      weapon_instance = new VortexVanguisher(base_status);
      break;
    case "71":
      weapon_instance = new SkywardSpine(base_status);
      break;
    case "72":
      weapon_instance = new PrimordialJadeWingedSpear(base_status);
      break;
    case "73":
      weapon_instance = new BalladoftheFjords(base_status);
      break;
    case "74":
      weapon_instance = new RightfulReward(base_status);
      break;
    case "75":
      weapon_instance = new MissiveWindspear(base_status);
      break;
    case "76":
      weapon_instance = new Moonpiercer(base_status);
      break;
    case "77":
      weapon_instance = new WavebreakersFin(base_status);
      break;
    case "78":
      weapon_instance = new TheCatch(base_status);
      break;
    case "79":
      weapon_instance = new KitainCrossSpear(base_status);
      break;
    case "80":
      weapon_instance = new LithicSpear(base_status);
      break;
    case "81":
      weapon_instance = new DragonspineSpear(base_status);
      break;
    case "83":
      weapon_instance = new FavoniusLance(base_status);
      break;
    case "84":
      weapon_instance = new Deathmatch(base_status);
      break;
    case "85":
      weapon_instance = new BlackcliffPole(base_status);
      break;
    case "86":
      weapon_instance = new CrescentPike(base_status);
      break;
    case "87":
      weapon_instance = new PrototypeStarglitter(base_status);
      break;
    case "88":
      weapon_instance = new DragonsBane(base_status);
      break;
    case "89":
      weapon_instance = new BlackTassel(base_status);
      break;
    case "90":
      weapon_instance = new WhiteTassel(base_status);
      break;
    case "91":
      weapon_instance = new TheFirstGreatMagic(base_status);
      break;
    case "92":
      weapon_instance = new HuntersPath(base_status);
      break;
    case "93":
      weapon_instance = new AquaSimulacra(base_status);
      break;
    case "94":
      weapon_instance = new PolarStar(base_status);
      break;
    case "95":
      weapon_instance = new ThunderingPulse(base_status);
      break;
    case "96":
      weapon_instance = new ElegyfortheEnd(base_status);
      break;
    case "97":
      weapon_instance = new AmosBow(base_status);
      break;
    case "98":
      weapon_instance = new SkywardHarp(base_status);
      break;
    case "99":
      weapon_instance = new ScionoftheBlazingSun(base_status);
      break;
    case "100":
      weapon_instance = new SongofStillness(base_status);
      break;
    case "101":
      weapon_instance = new IbisPiercer(base_status);
      break;
    case "102":
      weapon_instance = new KingsSquire(base_status);
      break;
    case "103":
      weapon_instance = new EndoftheLine(base_status);
      break;
    case "104":
      weapon_instance = new FadingTwilight(base_status);
      break;
    case "105":
      weapon_instance = new MouunsMoon(base_status);
      break;
    case "106":
      weapon_instance = new Hamayumi(base_status);
      break;
    case "107":
      weapon_instance = new MitternachtsWaltz(base_status);
      break;
    case "108":
      weapon_instance = new WindblumeOde(base_status);
      break;
    case "109":
      weapon_instance = new AlleyHunter(base_status);
      break;
    case "110":
      weapon_instance = new TheViridescentHunt(base_status);
      break;
    case "111":
      weapon_instance = new BlackcliffWarbow(base_status);
      break;
    case "112":
      weapon_instance = new CompoundBow(base_status);
      break;
    case "113":
      weapon_instance = new PrototypeCrescent(base_status);
      break;
    case "114":
      weapon_instance = new Rust(base_status);
      break;
    case "116":
      weapon_instance = new SacrificialBow(base_status);
      break;
    case "117":
      weapon_instance = new TheStringless(base_status);
      break;
    case "118":
      weapon_instance = new FavoniusWarbow(base_status);
      break;
    case "119":
      weapon_instance = new Messenger(base_status);
      break;
    case "120":
      weapon_instance = new Slingshot(base_status);
      break;
    case "121":
      weapon_instance = new RecurveBow(base_status);
      break;
    case "122":
      weapon_instance = new SharpshootersOath(base_status);
      break;
    case "123":
      weapon_instance = new RavenBow(base_status);
      break;
    case "154":
      weapon_instance = new CashflowSupervision(base_status);
      break;
    case "124":
      weapon_instance = new TomeoftheEternalFlow(base_status);
      break;
    case "125":
      weapon_instance = new JadefallsSplendor(base_status);
      break;
    case "126":
      weapon_instance = new TulaytullahsRemembrance(base_status);
      break;
    case "127":
      weapon_instance = new AThousandFloatingDreams(base_status);
      break;
    case "128":
      weapon_instance = new KagurasVerity(base_status);
      break;
    case "129":
      weapon_instance = new EverlastingMoonglow(base_status);
      break;
    case "130":
      weapon_instance = new MemoryofDust(base_status);
      break;
    case "131":
      weapon_instance = new LostPrayertotheSacredWinds(base_status);
      break;
    case "132":
      weapon_instance = new SkywardAtlas(base_status);
      break;
    case "133":
      weapon_instance = new BalladOfTheBoundlessBlue(base_status);
      break;
    case "134":
      weapon_instance = new SacrificialJade(base_status);
      break;
    case "135":
      weapon_instance = new FlowingPurity(base_status);
      break;
    case "136":
      weapon_instance = new WanderingEvenstar(base_status);
      break;
    case "137":
      weapon_instance = new FruitofFulfillment(base_status);
      break;
    case "138":
      weapon_instance = new OathswornEye(base_status);
      break;
    case "139":
      weapon_instance = new HakushinRing(base_status);
      break;
    case "140":
      weapon_instance = new DodocoTales(base_status);
      break;
    case "141":
      weapon_instance = new WineandSong(base_status);
      break;
    case "142":
      weapon_instance = new Frostbearer(base_status);
      break;
    case "143":
      weapon_instance = new EyeofPerception(base_status);
      break;
    case "144":
      weapon_instance = new BlackcliffAgate(base_status);
      break;
    case "145":
      weapon_instance = new MappaMare(base_status);
      break;
    case "146":
      weapon_instance = new PrototypeAmber(base_status);
      break;
    case "147":
      weapon_instance = new SolarPearl(base_status);
      break;
    case "149":
      weapon_instance = new SacrificialFragments(base_status);
      break;
    case "150":
      weapon_instance = new TheWidsith(base_status);
      break;
    case "151":
      weapon_instance = new FavoniusCodex(base_status);
      break;
    case "152":
      weapon_instance = new ThrillingTalesofDragonSlayers(base_status);
      break;
    case "153":
      weapon_instance = new MagicGuide(base_status);
      break;
    case "155":
      weapon_instance = new SplendorOfTranquilWaters(base_status);
      break;
    default:
      // 未知の武器IDに対する処理を追加することもできます
      break;
  }
  return weapon_instance;
}

async function calculate_team_fix_buff(base_status)
{
  const fix_hp_buff = parseInt(document.getElementById("fix_hp_buff").value) || 0; // 聖遺物HP上昇量
  const fix_hprate_buff = parseFloat(document.getElementById("fix_hp%_buff").value) / 100 || 0; // 聖遺物HP上昇量
  const fix_attack_buff = parseInt(document.getElementById("fix_attack_buff").value) || 0; // 聖遺物攻撃力上昇量
  const fix_attackrate_buff = parseFloat(document.getElementById("fix_attack%_buff").value) / 100 || 0; // 聖遺物攻撃力上昇量
  const fix_deff_buff = parseInt(document.getElementById("fix_deff_buff").value) || 0; // 聖遺物防御力上昇量
  const fix_deffrate_buff = parseFloat(document.getElementById("fix_deff%_buff").value) / 100 || 0; // 聖遺物防御力上昇量
  const fix_elm_buff = parseInt(document.getElementById("fix_elm_buff").value) || 0; // 聖遺物元素熟知上昇量
  const fix_elm_charge_buff = parseFloat(document.getElementById("fix_elm_charge_buff").value) / 100 || 0; // 聖遺物元素チャージ効率上昇量
  const fix_cr_buff = parseFloat(document.getElementById("fix_cr_buff").value) / 100 || 0; // 聖遺物会心率上昇量
  const fix_cd_buff = parseFloat(document.getElementById("fix_cd_buff").value) / 100 || 0; // 聖遺物会心ダメージ上昇量
  const fix_dmg_buff = parseFloat(document.getElementById("fix_dmg_buff").value) / 100 || 0; // 聖遺物会心ダメージ上昇量
  const af_setbuff = await create_afset_instance();
  let team_buff = [0,0,0,0,0,0,0,0];

  const pyroCheckbox = document.getElementById("pyro_reso");
  const hydroCheckbox = document.getElementById("hydro_reso");
  const cyroCheckbox = document.getElementById("cyro_reso");
  const dendroCheckbox = document.getElementById("dendro_reso");
  const geoCheckbox = document.getElementById("geo_reso");

  const char_response = await fetch("../data/character/char_data/" + char_name[selectedCharId] + ".json");
  const char_data = await char_response.json();
  const char_base_hpper = parseFloat(char_data["ステータス"]["基礎HP％"][(parseInt(CharAdvanceRank) + 2) * 10 + "+"]);
  const char_base_attackper = parseFloat(char_data["ステータス"]["基礎攻撃力％"][(parseInt(CharAdvanceRank) + 2) * 10 + "+"]);
  const char_base_deffper = parseFloat(char_data["ステータス"]["基礎防御力％"][(parseInt(CharAdvanceRank) + 2) * 10 + "+"]);

  const WeaponEquipData = UserData.data.avatarInfoList[CharIndexList[SelectId]].equipList[EquipNumber - 1].flat.weaponStats[1];
  let weapon_base_hpper = 0;
  let weapon_base_attackper = 0;
  let weapon_base_deffper = 0;

  if (WeaponEquipData.appendPropId === "FIGHT_PROP_HP_PERCENT") {
    weapon_base_hpper = WeaponEquipData.statValue / 100;
  }
  else if (WeaponEquipData.appendPropId === "FIGHT_PROP_ATTACK_PERCENT") {
    weapon_base_attackper = WeaponEquipData.statValue / 100;
  }
  else if (WeaponEquipData.appendPropId === "FIGHT_PROP_DEFENSE_PERCENT") {
    weapon_base_deffper = WeaponEquipData.statValue / 100;
  }

  // チェックボックスの情報をまとめた配列を作成
  const checkboxStates = {
    pyro_reso: pyroCheckbox.checked ? 1 : 0,
    hydro_reso: hydroCheckbox.checked ? 1 : 0,
    cyro_reso: cyroCheckbox.checked ? 1 : 0,
    dendro_reso: dendroCheckbox.checked ? 1 : 0,
    geo_reso: geoCheckbox.checked ? 1 : 0
  };

  team_buff[0] = fix_hp_buff + (fix_hprate_buff + af_setbuff[0] + 0.25 * checkboxStates.hydro_reso + char_base_hpper + weapon_base_hpper) * base_status[0];
  team_buff[1] = fix_deff_buff + (fix_deffrate_buff + af_setbuff[1] + char_base_deffper + weapon_base_deffper) * base_status[1];
  if (checkboxStates.dendro_reso == 1)
  {
    const dendro_reso_select = document.getElementById("dendro_reso_select");
    const dendro_elm = parseInt(dendro_reso_select.value);
    team_buff[2] = fix_elm_buff + af_setbuff[2] + dendro_elm;
  }
  else
  {
    team_buff[2] = fix_elm_buff + af_setbuff[2];
  }
  team_buff[3] = fix_elm_charge_buff + af_setbuff[3];
  team_buff[4] = fix_attack_buff + (fix_attackrate_buff + af_setbuff[4] + 0.25 * checkboxStates.pyro_reso + char_base_attackper + weapon_base_attackper) * base_status[4];
  team_buff[5] = fix_cr_buff + af_setbuff[5] + 0.15 * checkboxStates.cyro_reso;
  team_buff[6] = fix_cd_buff + af_setbuff[6];
  team_buff[7] = fix_dmg_buff + af_setbuff[7] + 0.15 * checkboxStates.geo_reso;

  return team_buff
}

async function calculate_team_dynamic_buff(base_status)
{
  const dynamic_hp_buff = parseInt(document.getElementById("dynamic_hp_buff").value) || 0; // 聖遺物HP上昇量
  const dynamic_hprate_buff = parseFloat(document.getElementById("dynamic_hp%_buff").value) / 100 || 0; // 聖遺物HP上昇量
  const dynamic_attack_buff = parseInt(document.getElementById("dynamic_attack_buff").value) || 0; // 聖遺物攻撃力上昇量
  const dynamic_attackrate_buff = parseFloat(document.getElementById("dynamic_attack%_buff").value) / 100 || 0; // 聖遺物攻撃力上昇量
  const dynamic_deff_buff = parseInt(document.getElementById("dynamic_deff_buff").value) || 0; // 聖遺物防御力上昇量
  const dynamic_deffrate_buff = parseFloat(document.getElementById("dynamic_deff%_buff").value) / 100 || 0; // 聖遺物防御力上昇量
  const dynamic_elm_buff = parseInt(document.getElementById("dynamic_elm_buff").value) || 0; // 聖遺物元素熟知上昇量
  const dynamic_elm_charge_buff = parseFloat(document.getElementById("dynamic_elm_charge_buff").value) / 100 || 0; // 聖遺物元素チャージ効率上昇量
  const dynamic_cr_buff = parseFloat(document.getElementById("dynamic_cr_buff").value) / 100 || 0; // 聖遺物会心率上昇量
  const dynamic_cd_buff = parseFloat(document.getElementById("dynamic_cd_buff").value) / 100 || 0; // 聖遺物会心ダメージ上昇量
  const dynamic_dmg_buff = parseFloat(document.getElementById("dynamic_dmg_buff").value) / 100 || 0; // 聖遺物会心ダメージ上昇量
  let team_buff = [0,0,0,0,0,0,0,0];

  team_buff[0] = dynamic_hp_buff + dynamic_hprate_buff * base_status[0];
  team_buff[1] = dynamic_deff_buff + dynamic_deffrate_buff * base_status[1];
  team_buff[2] = dynamic_elm_buff;
  team_buff[3] = dynamic_elm_charge_buff;
  team_buff[4] = dynamic_attack_buff + dynamic_attackrate_buff * base_status[4];
  team_buff[5] = dynamic_cr_buff;
  team_buff[6] = dynamic_cd_buff;
  team_buff[7] = dynamic_dmg_buff;

  return team_buff
}

async function calculate_table_status()
{
  let AfStatusBuff = [0, 0, 0, 0, 0, 0, 0];
  const base_status = await calculate_base_status();
  const af_main_status_buff = await calculate_af_main_status_buff();
  const char_parameter = await import_char_parameter();
  let zetsuen_check = 0;
  let buff_status = [0,0,0,0,0,0,0,0];
  let team_fix_buff = await calculate_team_fix_buff(base_status);
  let team_dynamic_buff = await calculate_team_dynamic_buff(base_status);
  let AfSubBuff = await calculate_af_score(depend_status,base_status);
  let fixed_status = base_status.slice();
  let result_status;
  let zetsuen_dmgbuff = 0;
  identify_condition();

  AfStatusBuff[0] = base_status[0] * (af_main_status_buff[0] + AfSubBuff[0] * 3 / 400) + AfMainFixStatus[0];;
  AfStatusBuff[1] = base_status[1] * (af_main_status_buff[1] + AfSubBuff[1] * 15 / 1600);
  AfStatusBuff[2] = af_main_status_buff[2]  + AfSubBuff[2] * 3;
  AfStatusBuff[3] = (af_main_status_buff[3] + AfSubBuff[3] / 1.2) / 100;
  AfStatusBuff[4] = base_status[4] * (af_main_status_buff[4] + AfSubBuff[4] * 3 / 400) + AfMainFixStatus[1];
  AfStatusBuff[5] = (af_main_status_buff[5] + AfSubBuff[5] / 2) / 100;
  AfStatusBuff[6] = (af_main_status_buff[6] + AfSubBuff[6]) / 100;
  AfStatusBuff[7] = af_main_status_buff[7];

  if (selectedImageIds[0] == 17 && selectedImageIds[1] == 17 && attack_method_index == 4)
  {
    const zetsuen_checkbox = document.getElementById("af17_4");
    if(zetsuen_checkbox.checked)
    {
      zetsuen_check = 1;
    }
  }

  document.getElementById("table_base_hp").innerHTML = base_status[0];
  document.getElementById("table_base_deff").innerHTML = base_status[1];
  document.getElementById("table_base_elm").innerHTML = base_status[2];
  document.getElementById("table_base_elm_charge").innerHTML = (base_status[3] * 100).toFixed(1) + "％";
  document.getElementById("table_base_attck").innerHTML = base_status[4];
  document.getElementById("table_base_cr").innerHTML = (base_status[5] * 100).toFixed(1) + "％";
  document.getElementById("table_base_cd").innerHTML = (base_status[6] * 100).toFixed(1) + "％";
  document.getElementById("table_base_dmg_buff").innerHTML = (base_status[7] * 100).toFixed(1) + "％";

  for (let i = 0; i < 7; i++)
  {
    fixed_status[i] += AfStatusBuff[i] + team_fix_buff[i];
  }
  fixed_status[7] += af_main_status_buff[7] + team_fix_buff[7];
  
  const char_instance = await create_char_instance(base_status, char_parameter);
  const weapon_instance = await create_weapon_instance(base_status);
  const dmg_rate = await char_instance.dmg_rate_data();
  
  fixed_status[0] += await (char_instance.calculate_char_fixed_hp(fixed_status) + weapon_instance.calculate_weapon_fixed_hp(fixed_status));
  fixed_status[1] += await (char_instance.calculate_char_fixed_deff(fixed_status) + weapon_instance.calculate_weapon_fixed_deff(fixed_status));
  fixed_status[2] += await (char_instance.calculate_char_fixed_elm(fixed_status) + weapon_instance.calculate_weapon_fixed_elm(fixed_status));
  fixed_status[3] += await (char_instance.calculate_char_fixed_elm_charge(fixed_status) + weapon_instance.calculate_weapon_fixed_elm_charge(fixed_status));
  fixed_status[4] += await (char_instance.calculate_char_fixed_attck(fixed_status) + weapon_instance.calculate_weapon_fixed_attck(fixed_status));
  fixed_status[5] += await (char_instance.calculate_char_fixed_cr(fixed_status) + weapon_instance.calculate_weapon_fixed_cr(fixed_status));
  fixed_status[6] += await (char_instance.calculate_char_fixed_cd(fixed_status) + weapon_instance.calculate_weapon_fixed_cd(fixed_status));
  fixed_status[7] += await (char_instance.calculate_char_fixed_dmg_buff(fixed_status) + weapon_instance.calculate_weapon_fixed_dmg_buff(fixed_status));
  result_status = fixed_status.slice();

  async function updateStatus(index, resultStatus, buffStatus, afBuff, baseStatus, dynamicBuff, calculateResultFunction, tablePrefix) {
    if (depend_status[index] === 1) 
    {
      if (index == 3 || index == 6)
      {
        resultStatus[index] = dynamicBuff[index] + fixed_status[index] + await calculateResultFunction(fixed_status, resultStatus);
        buffStatus[index] = resultStatus[index] - afBuff[index] - baseStatus[index];
        document.getElementById(`table_buff_${tablePrefix}`).innerHTML = (buffStatus[index]*100).toFixed(1) + "％";
        document.getElementById(`table_af_${tablePrefix}`).innerHTML = (afBuff[index]*100).toFixed(1) + "％";
        document.getElementById(`table_final_${tablePrefix}`).innerHTML = (resultStatus[index]*100).toFixed(1) + "％";
      }
      else if (index == 5)
      {
        resultStatus[index] = dynamicBuff[index] + fixed_status[index] + await calculateResultFunction(fixed_status, resultStatus);
        buffStatus[index] = resultStatus[index] - afBuff[index] - baseStatus[index];
        document.getElementById(`table_buff_${tablePrefix}`).innerHTML = (buffStatus[index]*100).toFixed(1) + "％";
        document.getElementById(`table_af_${tablePrefix}`).innerHTML = (afBuff[index]*100).toFixed(1) + "％";
        document.getElementById(`table_final_${tablePrefix}`).innerHTML = Math.min((resultStatus[index]*100).toFixed(1),100) + "％";
      }
      else
      {
        resultStatus[index] = dynamicBuff[index] + fixed_status[index] + await calculateResultFunction(fixed_status, resultStatus);
        buffStatus[index] = resultStatus[index] - afBuff[index] - baseStatus[index];
        document.getElementById(`table_buff_${tablePrefix}`).innerHTML = buffStatus[index].toFixed(0);
        document.getElementById(`table_af_${tablePrefix}`).innerHTML = afBuff[index].toFixed(0);
        document.getElementById(`table_final_${tablePrefix}`).innerHTML =resultStatus[index].toFixed(0);
      }
    } 
    else
    {
      document.getElementById(`table_buff_${tablePrefix}`).innerHTML = "-";
      document.getElementById(`table_af_${tablePrefix}`).innerHTML = "-";
      document.getElementById(`table_final_${tablePrefix}`).innerHTML = "-";
    }
  }
  
  // ステータスの更新
  await updateStatus(0, result_status, buff_status, AfStatusBuff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_hp(fixed_status, result_status) + weapon_instance.calculate_weapon_result_hp(fixed_status, result_status), "hp");
  await updateStatus(1, result_status, buff_status, AfStatusBuff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_deff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_deff(fixed_status, result_status), "deff");
  await updateStatus(2, result_status, buff_status, AfStatusBuff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_elm(fixed_status, result_status) + weapon_instance.calculate_weapon_result_elm(fixed_status, result_status), "elm");
  await updateStatus(3, result_status, buff_status, AfStatusBuff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_elm_charge(fixed_status, result_status) + weapon_instance.calculate_weapon_result_elm_charge(fixed_status, result_status), "elm_charge");
  await updateStatus(4, result_status, buff_status, AfStatusBuff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_attck(fixed_status, result_status) + weapon_instance.calculate_weapon_result_attck(fixed_status, result_status), "attck");
  await updateStatus(5, result_status, buff_status, AfStatusBuff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_cr(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cr(fixed_status, result_status), "cr");
  await updateStatus(6, result_status, buff_status, AfStatusBuff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_cd(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cd(fixed_status, result_status), "cd");
  
  if(zetsuen_check == 1)
  {
    zetsuen_dmgbuff = calc_zetsuen_buff(fixed_status[3]);
    result_status[7] = team_dynamic_buff[7] + fixed_status[7] + await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status) + zetsuen_dmgbuff);
  }
  else
  {
    result_status[7] = team_dynamic_buff[7] + fixed_status[7] + await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status));
  }
  buff_status[7] = result_status[7] - af_main_status_buff[7] - base_status[7];
  document.getElementById("table_buff_dmg_buff").innerHTML = (buff_status[7]*100).toFixed(1) + "％";
  document.getElementById("table_af_dmg_buff").innerHTML = (af_main_status_buff[7]*100).toFixed(1) + "％";
  document.getElementById("table_final_dmg_buff").innerHTML = (result_status[7]*100).toFixed(1) + "％";
}

function identify_condition() {
  const attack_method_type = document.getElementById("attack_method_id").value;
  let response = document.getElementById("response");
  let error_message;
  response.innerHTML = "";
  if (attack_method_type == 0) {
    error_message = "攻撃方法を設定してください";
    response.innerHTML = error_message;
    return 1;
  }
  return 0;
}

async function create_afset_instance() 
{
  const attackSelect = document.getElementById("attack_method_id");
  attack_method = attackSelect.value;
  let set1_buff;
  let set2_buff;
  let buff = [0, 0, 0, 0, 0, 0, 0, 0];
  if (selectedImageIds[0] == selectedImageIds[1])
  {
    set1_buff = set_effect2[selectedImageIds[0]]();
    set2_buff = set_effect4[selectedImageIds[0]]();
  }
  else
  {
    set1_buff = await set_effect2[selectedImageIds[0]]();
    set2_buff = await set_effect2[selectedImageIds[1]]();
  }

 for (let i = 0; i < 8; i++)
  {
    buff[i] = set1_buff[i] + set2_buff[i];
  }
  return buff
}

function create_reactioncount_list(){
  let reaction_count_list = [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0];
  if (char_propaty[0] == 0)
  {
    const Overloaded_count = parseInt(document.getElementById("Overloaded").value);
    const Burgeon_count = parseInt(document.getElementById("Burgeon").value);
    reaction_count_list[0] = Overloaded_count;
    reaction_count_list[1] = Burgeon_count;
  }
  else if (char_propaty[0] == 1)
  {
    const Electro_Charged_count = parseInt(document.getElementById("Electro_Charged").value);
    const Bloom_count = parseInt(document.getElementById("Bloom").value);
    const Niou_bloom_count = parseInt(document.getElementById("NirouBloom").value);
    reaction_count_list[2] = Electro_Charged_count;
    reaction_count_list[3] = Bloom_count;
    reaction_count_list[4] = Niou_bloom_count;
  }
  else if (char_propaty[0] == 3)
  {
    const Overloaded_count = parseInt(document.getElementById("Overloaded").value);
    const Electro_Charged_count = parseInt(document.getElementById("Electro_Charged").value);
    const Hyperbloom_count = parseInt(document.getElementById("Hyperbloom").value);
    reaction_count_list[5] = Overloaded_count;
    reaction_count_list[6] = Electro_Charged_count;
    reaction_count_list[7] = Hyperbloom_count;
  }
  else if (char_propaty[0] == 5)
  {
    const Bloom_count = parseInt(document.getElementById("Bloom").value);
    const Niou_bloom_count = parseInt(document.getElementById("NirouBloom").value);
    reaction_count_list[3] = Bloom_count;
    reaction_count_list[4] = Niou_bloom_count;
  }
  return reaction_count_list;
}

function create_reactionbonus_list(){
    //reaction_list = [過負荷炎, 烈開花, 感電水, 開花水, 豊穣開花, 過負荷雷, 感電雷, 超開花]
  let reaction_bonus_list = [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0];
  if (char_propaty[0] == 0)
  {
    if (selectedImageIds[0] == 11 && selectedImageIds[1] == 11)
    {
      reaction_bonus_list[0] += 0.4;
      reaction_bonus_list[1] += 0.4;
    }
    else if (selectedImageIds[0] == 9 && selectedImageIds[1] == 9)
    {
      reaction_bonus_list[0] += 0.4;
    }
    else if (selectedImageIds[0] == 24 && selectedImageIds[1] == 24)
    {
      const af24_4check = document.getElementById("af24_4");
      if (af24_4check.checked)
      {
        const af_24_4count = parseInt(document.getElementById("af24_4select").value);
        reaction_bonus_list[1] += 0.4 + 0.1 * af_24_4count;
      }
    }
  }
  else if (char_propaty[0] == 1)
  {
    if (selectedImageIds[0] == 9 && selectedImageIds[1] == 9)
    {
      reaction_bonus_list[2] += 0.4;
    }
    else if (selectedImageIds[0] == 24 && selectedImageIds[1] == 24)
    {
      const af24_4check = document.getElementById("af24_4");
      if (af24_4check.checked)
      {
        const af_24_4count = parseInt(document.getElementById("af24_4select").value);
        reaction_bonus_list[3] += 0.4 + 0.1 * af_24_4count;
        reaction_bonus_list[4] += 0.4 + 0.1 * af_24_4count;
      }
    }
    if (selectedCharId != 11)
    {
      const Nirou_HP = parseInt(document.getElementById("Nirou_HP").value);
      reaction_bonus_list[4] += Math.min(Math.max(Nirou_HP - 30000, 0) * 0.00009, 4);
    }
  }
  else if (char_propaty[0] == 3)
  {
    if (selectedImageIds[0] == 11 && selectedImageIds[1] == 11)
    {
      reaction_bonus_list[5] += 0.4;
    }
    else if (selectedImageIds[0] == 9 && selectedImageIds[1] == 9)
    {
      reaction_bonus_list[5] += 0.4;
      reaction_bonus_list[6] += 0.4;
      reaction_bonus_list[7] += 0.4;
    }
    else if (selectedImageIds[0] == 24 && selectedImageIds[1] == 24)
    {
      const af24_4check = document.getElementById("af24_4");
      if (af24_4check.checked)
      {
        const af_24_4count = parseInt(document.getElementById("af24_4select").value);
        reaction_bonus_list[7] += 0.4 + 0.1 * af_24_4count;
      }
    }
  }
  else if (char_propaty[0] == 5)
  {
    const Nirou_HP = parseInt(document.getElementById("Nirou_HP").value);
    reaction_bonus_list[4] += Math.min(Math.max(Nirou_HP - 30000, 0) * 0.00009, 4);
    if (selectedImageIds[0] == 24 && selectedImageIds[1] == 24)
    {
      const af24_4check = document.getElementById("af24_4");
      if (af24_4check.checked)
      {
        const af_24_4count = parseInt(document.getElementById("af24_4select").value);
        reaction_bonus_list[3] += 0.4 + 0.1 * af_24_4count;
        reaction_bonus_list[4] += 0.4 + 0.1 * af_24_4count;
      }
    }
  }
  return reaction_bonus_list;
}

function calculate_elmreaction_constdmg(reaction_coeff, status_array, resist, reaction_check, reaction_list, reaction_bonus_list){
  //reaction_list = [過負荷炎, 烈開花, 感電水, 開花水, 豊穣開花, 過負荷雷, 感電雷, 超開花]
  const reaction_elm_bunus = 16 * status_array[2] / (status_array[2] + 2000);
  if (reaction_check.checked)
  {
    return 0;
  }
  let reaction_dmg = 0;
  if (char_propaty[0] == 0)
  {
    reaction_dmg = reaction_list[0] * 2 * resist[0] * (1 + reaction_bonus_list[0] + reaction_elm_bunus) 
                 + reaction_list[1] * 3 * resist[5] * (1 + reaction_bonus_list[1] + reaction_elm_bunus);
  }
  else if (char_propaty[0] == 1)
  {
    if (selectedCharId != 11)
    {
      reaction_dmg = reaction_list[2] * 1.2 * resist[3] * (1 + reaction_bonus_list[2] + reaction_elm_bunus)
                   + reaction_list[3] * 2 * resist[5] * (1 + reaction_elm_bunus)
                   + reaction_list[4] * 2 * resist[5] * (1 + reaction_bonus_list[4] + reaction_elm_bunus);
    }
    else
    {
      reaction_dmg = reaction_list[2] * 1.2 * resist[3] * (1 + reaction_bonus_list[2] + reaction_elm_bunus)
                   + reaction_list[3] * 2 * resist[5] * (1 + reaction_elm_bunus)
                   + reaction_list[4] * 2 * resist[5] * (1 + Math.min(Math.max(status_array[0] - 30000, 0) * 0.00009, 4) + reaction_elm_bunus);
    }
  }
  else if (char_propaty[0] == 3)
  {
    reaction_dmg = reaction_list[5] * 2 * resist[0] * (1 + reaction_bonus_list[5] + reaction_elm_bunus)
                 + reaction_list[6] * 1.2 * resist[3] * (1 + reaction_bonus_list[5] + reaction_elm_bunus)
                 + reaction_list[7] * 3 * resist[5] * (1 + reaction_bonus_list[7] + reaction_elm_bunus);
  }
  else if (char_propaty[0] == 5)
  {
    reaction_dmg = reaction_list[3] * 2 * resist[5] * (1 + reaction_bonus_list[3] + reaction_elm_bunus)
                 + reaction_list[4] * 2 * resist[5] * (1 + reaction_bonus_list[4] + reaction_elm_bunus);
  }
  reaction_dmg *= reaction_coeff;
  return reaction_dmg;
}

async function calculateEnemyProps(charDebuff, weaponDebuff) {
  let pyro_resist = (parseInt(document.getElementById("enemy-pyroresist").value) - parseInt(document.getElementById("pyrodebuff").value)) / 100;
  let hydro_resist = (parseInt(document.getElementById("enemy-hydroresist").value) - parseInt(document.getElementById("hydrodebuff").value)) / 100;
  let cyro_resist = (parseInt(document.getElementById("enemy-cyroresist").value) - parseInt(document.getElementById("cyrodebuff").value)) / 100;
  let electro_resist = (parseInt(document.getElementById("enemy-electroresist").value) - parseInt(document.getElementById("electrodebuff").value)) / 100;
  let anemo_resist = (parseInt(document.getElementById("enemy-anemoresist").value) - parseInt(document.getElementById("anemodebuff").value)) / 100;
  let dendro_resist = (parseInt(document.getElementById("enemy-dendroresist").value) - parseInt(document.getElementById("dendrodebuff").value)) / 100;
  let geo_resist = (parseInt(document.getElementById("enemy-georesist").value) - parseInt(document.getElementById("geodebuff").value)) / 100;
  let phisics_resist = (parseInt(document.getElementById("enemy-phisicsresist").value) - parseInt(document.getElementById("phisicsdebuff").value)) / 100;
  let geo_resonance = document.getElementById("geo_reso");

  if (selectedImageIds[0] == 22 && selectedImageIds[1] == 22)
  {
    const deepwoodCheck = document.getElementById("af22_4");
    if (deepwoodCheck.checked && char_propaty[0] == 5) {
      dendro_resist -= 0.3;
    }
  }
  if (geo_resonance.checked && char_propaty[0] == 6)
  {
    geo_resist -= parseFloat(document.getElementById("geo_reso_select").value) / 100;
  }

  let enemy_resist = [pyro_resist, hydro_resist, cyro_resist, electro_resist, anemo_resist, dendro_resist, geo_resist, phisics_resist];
  enemy_resist[char_propaty[0]] -= charDebuff[0] - weaponDebuff[0];
  

  // 敵の情報取得
  const enemyLevel = parseInt(document.getElementById("enemy-level").value);
  const enemyDeffDebuff = parseFloat(document.getElementById("deff-debuff").value) / 100;
  const CharcterLevel = parseInt(CharLevel);

  // 防御補正計算
  const deffCorrection = (CharcterLevel + 100) / ((1 - charDebuff[2]) * (1 - charDebuff[1] - weaponDebuff[1] - enemyDeffDebuff) * (enemyLevel + 100) + CharcterLevel + 100);
  console.log(deffCorrection);

  // 補正係数の計算
  let element_resistCorrection = [0, 0, 0, 0, 0, 0, 0, 0, 0];// [炎補正, 水補正, 氷補正, 雷補正, 風補正, 草補正, 岩補正, 物理補正, 攻撃元素補正]
  for (let i = 0; i < 8; i++)
  {
    if (enemy_resist[i] < 0) {
      element_resistCorrection[i] = (1 - enemy_resist[i] / 2);
    } else if (enemy_resist[i] > 0.75) {
      element_resistCorrection[i] = (1 / (4 * enemy_resist[i] + 1));
    } else {
      element_resistCorrection[i] = (1 - enemy_resist[i]);
    }
  }
  element_resistCorrection[8] =  element_resistCorrection[char_propaty[0]] * deffCorrection;
  return element_resistCorrection;
}

async function calculate_my_exp_dmg (base_status,af_main_status_buff,depend_status)
{
  const AfStatusBuff = [0, 0, 0, 0, 0, 0, 0];
  const char_parameter = await import_char_parameter();
  const reaction_count_list = create_reactioncount_list();
  const reaction_bonus_list = create_reactionbonus_list();
  let AfSubBuff = await calculate_af_score(depend_status,base_status);
  AfStatusBuff[0] = base_status[0] * (af_main_status_buff[0] + AfSubBuff[0] * 3 / 400) + AfMainFixStatus[0];
  AfStatusBuff[1] = base_status[1] * (af_main_status_buff[1] + AfSubBuff[1] * 15 / 1600);
  AfStatusBuff[2] = af_main_status_buff[2]  + AfSubBuff[2] * 3;
  AfStatusBuff[3] = (af_main_status_buff[3] + AfSubBuff[3] / 1.2) / 100;
  AfStatusBuff[4] = base_status[4] * (af_main_status_buff[4] + AfSubBuff[4] * 3 / 400) + AfMainFixStatus[1];
  AfStatusBuff[5] = (af_main_status_buff[5] + AfSubBuff[5] / 2) / 100;
  AfStatusBuff[6] = (af_main_status_buff[6] + AfSubBuff[6]) / 100;
  AfStatusBuff[7] = af_main_status_buff[7];
  let zetsuen_check = 0;
  if (selectedImageIds[0] ==17 && selectedImageIds[1] == 17 && attack_method_index == 4)
  {
    const zetsuen_checkbox = document.getElementById("af17_4");
    if(zetsuen_checkbox.checked)
    {
      zetsuen_check = 1;
    }
  }
  let basic_dmg;
  let exp_dmg;
  let team_fix_buff = await calculate_team_fix_buff(base_status)
  let team_dynamic_buff = await calculate_team_dynamic_buff(base_status)
  let fixed_status = [0,0,0,0,0,0,0];
  let result_status;
  let zetsuen_dmgbuff = 0;
  for (let i = 0; i < 7; i++)
  {
    fixed_status[i] = base_status[i] + AfStatusBuff[i] + team_fix_buff[i];
  }
  fixed_status[7] = base_status[7] + af_main_status_buff[7] + team_fix_buff[7];
  result_status = fixed_status.slice();

  const char_instance = await create_char_instance(base_status, char_parameter);
  const weapon_instance = await create_weapon_instance(base_status);
  const dmg_rate = await char_instance.dmg_rate_data();
  const char_debuff = await char_instance.calculate_char_debuff();
  const weapon_debuff =  await weapon_instance.calculate_weapon_debuff();
  const correct_coeff = await calculateEnemyProps(char_debuff, weapon_debuff);
  const reaction_check = document.getElementById("reactionoff_flag");

  if (depend_status[0] == 1)
  {
    fixed_status[0] += await (char_instance.calculate_char_fixed_hp(fixed_status) + weapon_instance.calculate_weapon_fixed_hp(fixed_status));
    result_status[0] = team_dynamic_buff[0] + fixed_status[0] + await (char_instance.calculate_char_result_hp(fixed_status, result_status) + weapon_instance.calculate_weapon_result_hp(fixed_status, result_status));
  }

  if (depend_status[1] == 1)
  {
    fixed_status[1] += await (char_instance.calculate_char_fixed_deff(fixed_status) + weapon_instance.calculate_weapon_fixed_deff(fixed_status));
    result_status[1] = team_dynamic_buff[1] + fixed_status[1] + await (char_instance.calculate_char_result_deff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_deff(fixed_status, result_status));
  }

  if (depend_status[2] == 1)
  {
    fixed_status[2] += await (char_instance.calculate_char_fixed_elm(fixed_status) + weapon_instance.calculate_weapon_fixed_elm(fixed_status));
    result_status[2] = team_dynamic_buff[2] + fixed_status[2] + await (char_instance.calculate_char_result_elm(fixed_status, result_status) + weapon_instance.calculate_weapon_result_elm(fixed_status, result_status));
  }

  if (depend_status[3] == 1)
  {
    fixed_status[3] += await (char_instance.calculate_char_fixed_elm_charge(fixed_status) + weapon_instance.calculate_weapon_fixed_elm_charge(fixed_status));
    result_status[3] = team_dynamic_buff[3] + fixed_status[3] + await (char_instance.calculate_char_result_elm_charge(fixed_status, result_status) + weapon_instance.calculate_weapon_result_elm_charge(fixed_status, result_status));
  }

  if (depend_status[4] == 1)
  {
    fixed_status[4] += await (char_instance.calculate_char_fixed_attck(fixed_status) + weapon_instance.calculate_weapon_fixed_attck(fixed_status));
    result_status[4] = team_dynamic_buff[4] + fixed_status[4] + await (char_instance.calculate_char_result_attck(fixed_status, result_status) + weapon_instance.calculate_weapon_result_attck(fixed_status, result_status));

  }

  if (depend_status[5] == 1)
  {
    fixed_status[5] += await (char_instance.calculate_char_fixed_cr(fixed_status) + weapon_instance.calculate_weapon_fixed_cr(fixed_status));
    result_status[5] = team_dynamic_buff[5] + fixed_status[5] + await (char_instance.calculate_char_result_cr(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cr(fixed_status, result_status));
    if (fixed_status[5] > 1)
    {
      fixed_status[5] = 1;
    }
    if (result_status[5] > 1)
    {
      result_status[5] = 1;
    }
  }

  if (depend_status[6] == 1)
  {
    fixed_status[6] += await (char_instance.calculate_char_fixed_cd(fixed_status) + weapon_instance.calculate_weapon_fixed_cd(fixed_status));
    result_status[6] = team_dynamic_buff[6] + fixed_status[6] + await (char_instance.calculate_char_result_cd(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cd(fixed_status, result_status));
  }

  fixed_status[7] += await (char_instance.calculate_char_fixed_dmg_buff(fixed_status) + weapon_instance.calculate_weapon_fixed_dmg_buff(fixed_status));
  if(zetsuen_check == 1)
  {
    zetsuen_dmgbuff = calc_zetsuen_buff(fixed_status[3]);
    result_status[7] = team_dynamic_buff[7] + fixed_status[7] + await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status) + zetsuen_dmgbuff);
  }
  else
  {
    result_status[7] = team_dynamic_buff[7] + fixed_status[7] + await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status));
  }

  basic_dmg = await char_instance.calculate_basic_dmg(dmg_rate, result_status);
  if (depend_status[2] == 1) {
    exp_dmg = basic_dmg*(1 + result_status[5]*result_status[6])
    *(1 + result_status[7]) * correct_coeff[8] + calculate_elmreaction_constdmg(char_parameter[1], result_status, correct_coeff, reaction_check, reaction_count_list, reaction_bonus_list);
  } else {
    exp_dmg = basic_dmg*(1 + result_status[5]*result_status[6])
    *(1 + result_status[7]) * correct_coeff[8];
  }
  result_status.push(exp_dmg);
  return result_status;
}

async function import_char_parameter()
{
  let ReactionFixValue
  let CharacterLevel = parseInt(CharLevel);
  if(CharLevel == 90)
  {
    ReactionFixValue = 1446.85
  }
  else
  {
    ReactionFixValue =  0.000000000755856 * CharacterLevel**7 - 0.000000227931736 * CharacterLevel**6 + 0.000025874407743 * CharacterLevel**5 - 0.001355874350326 * CharacterLevel**4 + 0.033618145604131 * CharacterLevel**3 - 0.264196827606430 * CharacterLevel**2 + 2.413548140527692 * CharacterLevel + 14.837426209163127;
  }
  const parameter = [CharacterLevel, ReactionFixValue, CharConstellations, CharTalentLevel[attack_method_index]];
  return parameter;
}

async function DefineMainStatus(DependStatusList, AfMainStatus) {
  let MainStatusList = [];
  let ClockMainStatus = [];
  let GobletMainStatus = [];
  let CircletMainStatus = [];

  if (DependStatusList[0] == 1) {
    ClockMainStatus.push(0);
    GobletMainStatus.push(0);
    CircletMainStatus.push(0);
  } 
  if (DependStatusList[1] == 1) {
    ClockMainStatus.push(1);
    GobletMainStatus.push(1);
    CircletMainStatus.push(1); 
  }
  if (DependStatusList[2] == 1) {
    ClockMainStatus.push(2);
    GobletMainStatus.push(2);
    CircletMainStatus.push(2); 
  }
  if (DependStatusList[3] == 1) {
    ClockMainStatus.push(3); 
  }
  if (DependStatusList[4] == 1) {
    ClockMainStatus.push(4);
    GobletMainStatus.push(4);
    CircletMainStatus.push(4); 
  }
  if (DependStatusList[5] == 1) {
    CircletMainStatus.push(5); 
  }
  if (DependStatusList[6] == 1) {
    CircletMainStatus.push(6); 
  }

  if (AfMainStatus[3] > 0)
  {
    ClockMainStatus = [3]
  }
  if(char_propaty[0] !=7)
  {
    GobletMainStatus.push(7);
  }
  else
  {
    GobletMainStatus.push(8);
  }
  MainStatusList = [ClockMainStatus, GobletMainStatus, CircletMainStatus];
  return MainStatusList;
}

async function CalculateIdealAfMainStatusBuff(status_array)
{
  const af_main_status = [0.466, 0.583, 187, 51.8, 0.466, 31.1, 62.2, 0.466, 0.583];
  let set_main_status = [0,0,0,0,0,0,0,0,0];
  let af_main_status_buff = [0,0,0,0,0,0,0,0,0];
  set_main_status[status_array[0]] += 1;
  set_main_status[status_array[1]] += 1;
  set_main_status[status_array[2]] += 1;
  for (let i = 0; i < 7; i++)
  {
    af_main_status_buff[i] = af_main_status[i] *  set_main_status[i];
  }
  if(char_propaty[0] !=7)
  {
    af_main_status_buff[7] = af_main_status[7] *  set_main_status[7];
  }
  else
  {
    af_main_status_buff[7] = af_main_status[8] *  set_main_status[8];
  }
  return af_main_status_buff;
}


async function calculateAndStoreResult(resultList) {
  // 降順にソート
  resultList.sort((a, b) => b[0] - a[0]);
  // 上位5つのみを取得
  const topFive = resultList.slice(0, 5);
  return topFive;
}

async function createAf(partsIndex) {
    let fixBuffList = [7, 8, 9];
    let rateList = [0, 1, 2, 3, 4];
    let criticalList = [5, 6];
    let subStatusList = [];
    let mainBuffList = [];
    const subStatusBaseIndex = [0.583, 0.729, 2.331, 0.648, 0.583, 0.389, 0.777, 29.875, 1.945, 2.315];

    const random_number_float = Math.random();

    if (partsIndex === 0) {
        mainBuffList = [7, 160 * subStatusBaseIndex[7]];
    } else if (partsIndex === 1) {
        mainBuffList = [8, 160 * subStatusBaseIndex[8]];
    } else if (partsIndex === 2) {
        if (random_number_float < 0.26666666) {
            mainBuffList = [0, 80 * subStatusBaseIndex[0]];
        } else if (random_number_float < 0.53333333) {
            mainBuffList = [1, 80 * subStatusBaseIndex[1]];
        } else if (random_number_float < 0.8) {
            mainBuffList = [4, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.9) {
            mainBuffList = [2, 80 * subStatusBaseIndex[2]];
        } else {
            mainBuffList = [3, 80 * subStatusBaseIndex[3]];
        }
    } else if (partsIndex === 3) {
        if (random_number_float < 0.19166666) {
            mainBuffList = [0, 80 * subStatusBaseIndex[0]];
        } else if (random_number_float < 0.38333333) {
            mainBuffList = [1, 80 * subStatusBaseIndex[1]];
        } else if (random_number_float < 0.575) {
            mainBuffList = [4, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.6) {
            mainBuffList = [2, 80 * subStatusBaseIndex[2]];
        } else if (random_number_float < 0.65) {
            mainBuffList = [10, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.7) {
            mainBuffList = [11, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.75) {
            mainBuffList = [12, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.8) {
            mainBuffList = [13, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.85) {
            mainBuffList = [14, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.9) {
            mainBuffList = [15, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.95) {
            mainBuffList = [16, 80 * subStatusBaseIndex[4]];
        } else {
            mainBuffList = [17, 100 * subStatusBaseIndex[4]];
        }
    } else if (partsIndex === 4) {
        if (random_number_float < 0.22) {
            mainBuffList = [0, 80 * subStatusBaseIndex[0]];
        } else if (random_number_float < 0.44) {
            mainBuffList = [1, 80 * subStatusBaseIndex[1]];
        } else if (random_number_float < 0.66) {
            mainBuffList = [4, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.7) {
            mainBuffList = [2, 80 * subStatusBaseIndex[2]];
        } else if (random_number_float < 0.8) {
            mainBuffList = [5, 80 * subStatusBaseIndex[5]];
        } else if (random_number_float < 0.9) {
            mainBuffList = [6, 80 * subStatusBaseIndex[6]];
        } else {
            mainBuffList = [18, 0];
        }
    }

    if (mainBuffList[0] < 7) {
        if (fixBuffList.includes(mainBuffList[0])) {
            fixBuffList.splice(fixBuffList.indexOf(mainBuffList[0]), 1);
        } else if (rateList.includes(mainBuffList[0])) {
            rateList.splice(rateList.indexOf(mainBuffList[0]), 1);
        } else if (criticalList.includes(mainBuffList[0])) {
            criticalList.splice(criticalList.indexOf(mainBuffList[0]), 1);
        }
    }

    for (let i = 0; i < 4; i++) {
        const baseNum = 6 * fixBuffList.length + 4 * rateList.length + 3 * criticalList.length;
        const randomTypeIndex = Math.floor(Math.random() * baseNum);

        if (randomTypeIndex < 6 * fixBuffList.length) {
            const randomBuffInt = 10 - Math.floor(Math.random() * 4);
            const randomBuffIndex = Math.floor(Math.random() * fixBuffList.length);
            const selectedList = [fixBuffList[randomBuffIndex], randomBuffInt];
            subStatusList.push(selectedList);
            fixBuffList.splice(randomBuffIndex, 1);
        } else if (randomTypeIndex < 6 * fixBuffList.length + 4 * rateList.length) {
            const randomBuffInt = 10 - Math.floor(Math.random() * 4);
            const randomBuffIndex = Math.floor(Math.random() * rateList.length);
            const selectedList = [rateList[randomBuffIndex], randomBuffInt];
            subStatusList.push(selectedList);
            rateList.splice(randomBuffIndex, 1);
        } else {
            const randomBuffInt = 10 - Math.floor(Math.random() * 4);
            const randomBuffIndex = Math.floor(Math.random() * criticalList.length);
            const selectedList = [criticalList[randomBuffIndex], randomBuffInt];
            subStatusList.push(selectedList);
            criticalList.splice(randomBuffIndex, 1);
        }
    }

    const optionNum = Math.random() < 0.2 ? 5 : 4;

    for (let i = 0; i < optionNum; i++) {
        const randomBuffIndex1 = Math.floor(Math.random() * 4);
        const randomBuffIndex2 = 10 - Math.floor(Math.random() * 4);
        subStatusList[randomBuffIndex1][1] += randomBuffIndex2;
    }

    for (let i = 0; i < 4; i++) {
        subStatusList[i][1] *= subStatusBaseIndex[subStatusList[i][0]];
    }

    const afInfoList = [mainBuffList, subStatusList];
    return afInfoList;
}

async function monte_carlo_calculate()
{
    const calculationMessage = document.getElementById("calculationMessage")
    calculationMessage.style.visibility = "visible";
    console.time('myTimer'); 
    const input_check = identify_condition();
    if (input_check ==1)
    {
        calculationMessage.style.visibility = "hidden";
        return;
    }

    const char_parameter = await import_char_parameter();

    const base_status = await calculate_base_status();
    const af_main_status_buff = await calculate_af_main_status_buff();
    const depend_status = await calculate_depend_status();
    const team_fix_buff = await calculate_team_fix_buff(base_status);
    const team_dynamic_buff = await calculate_team_dynamic_buff(base_status);
    const depend_status_index = await calculate_depend_status_index(depend_status);
    const TryCount = 1;
    let my_result_status = await calculate_my_exp_dmg(base_status,af_main_status_buff,depend_status);
    let my_exp_dmg = my_result_status[8];
    let response = "";
    let SumExpDmg = 0;
    let SquareExpDmg = 0;
    let MinExpDmg  = 10;
    let MaxExpDmg = 0;
    let MaxAfStatus;
    document.getElementById("response").innerHTML = response;
    if (my_exp_dmg < 0 || !Number.isFinite(my_exp_dmg))
    {
        calculationMessage.style.visibility = "hidden";
        response ="ダメージ期待値が異常値を示しています。再入力してください。"
        document.getElementById("response").innerHTML = response;
        return response;
    }
    
    if (af_score < 0 || af_score > 350 || !Number.isFinite(af_score))
    {
        calculationMessage.style.visibility = "hidden";
        response = "  聖遺物スコア: " + af_score + "<br>" + "聖遺物スコアが異常値を示しています。再入力してください。"
        document.getElementById("response").innerHTML = response;
        return response;
    }

    let base_parameter;
    let fixed_status = [0,0,0,0,0,0,0,0];
    let result_status = [0,0,0,0,0,0,0,0];

    const char_instance = await create_char_instance(base_status, char_parameter);
    const weapon_instance = await create_weapon_instance(base_status);
    const dmg_rate = await char_instance.dmg_rate_data();
    const char_debuff = await char_instance.calculate_char_debuff();
    const weapon_debuff =  await weapon_instance.calculate_weapon_debuff();
    const correct_coeff = await calculateEnemyProps(char_debuff, weapon_debuff);
    const reaction_check = document.getElementById("reactionoff_flag");
    const reaction_count_list = create_reactioncount_list();
    const reaction_bonus_list = create_reactionbonus_list();
    console.log(correct_coeff);
    let zetsuen_check = 0;
    if (selectedImageIds[0] ==17 && selectedImageIds[1] == 17 && attack_method_index == 4)
    {
        const zetsuen_checkbox = document.getElementById("af17_4");
        if(zetsuen_checkbox.checked)
        {
        zetsuen_check = 1;
        }
    }

    let fixed_buff =[0,0,0,0,0,0,0,0];
    fixed_buff[0] = await (char_instance.calculate_char_fixed_hp(fixed_status) + weapon_instance.calculate_weapon_fixed_hp(fixed_status) + team_fix_buff[0]) + AfMainFixStatus[0];
    fixed_buff[1] = await (char_instance.calculate_char_fixed_deff(fixed_status) + weapon_instance.calculate_weapon_fixed_deff(fixed_status)+ team_fix_buff[1]);
    fixed_buff[2] = await (char_instance.calculate_char_fixed_elm(fixed_status) + weapon_instance.calculate_weapon_fixed_elm(fixed_status) + team_fix_buff[2]);
    fixed_buff[3] = await (char_instance.calculate_char_fixed_elm_charge(fixed_status) + weapon_instance.calculate_weapon_fixed_elm_charge(fixed_status) + team_fix_buff[3]);
    fixed_buff[4] = await (char_instance.calculate_char_fixed_attck(fixed_status) + weapon_instance.calculate_weapon_fixed_attck(fixed_status) + team_fix_buff[4]) + AfMainFixStatus[1];
    fixed_buff[5] = await (char_instance.calculate_char_fixed_cr(fixed_status) + weapon_instance.calculate_weapon_fixed_cr(fixed_status) + team_fix_buff[5]);
    fixed_buff[6] = await (char_instance.calculate_char_fixed_cd(fixed_status) + weapon_instance.calculate_weapon_fixed_cd(fixed_status) + team_fix_buff[6]);
    fixed_buff[7] = await (char_instance.calculate_char_fixed_dmg_buff(fixed_status) + weapon_instance.calculate_weapon_fixed_dmg_buff(fixed_status) + team_fix_buff[7]);

    for (let j= 0; j < TryCount; j++)
    {
        let afStatusList = Array(19).fill(0);
        for (let i = 0; i < 5; i++) {
            let afInfo = await createAf(i);
            afStatusList[afInfo[0][0]] += afInfo[0][1];
            for (let k = 0; k < 4; k++) {
                afStatusList[afInfo[1][k][0]] += afInfo[1][k][1];
            }
        }
        base_parameter = await calculate_fixed_status(base_status,afStatusList);
        for (let g = 0; g < depend_status_index.length; g++)
            {
              fixed_status[depend_status_index[g]] = base_parameter[depend_status_index[g]] + fixed_buff[depend_status_index[g]];
              result_status[depend_status_index[g]] = fixed_status[depend_status_index[g]] + team_dynamic_buff[depend_status_index[g]];
            }
        fixed_status[7] = base_parameter[7] + fixed_buff[7];
        result_status[7] = fixed_status[7] + team_dynamic_buff[7];
        
        if (depend_status[0] == 1)
        {
            result_status[0] += await (char_instance.calculate_char_result_hp(fixed_status, result_status) + weapon_instance.calculate_weapon_result_hp(fixed_status, result_status));
        }
        
        if (depend_status[1] == 1)
        {
            result_status[1] += await (char_instance.calculate_char_result_deff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_deff(fixed_status, result_status));
        }
        
        if (depend_status[2] == 1)
        {
            result_status[2] += await (char_instance.calculate_char_result_elm(fixed_status, result_status) + weapon_instance.calculate_weapon_result_elm(fixed_status, result_status));
        }
        
        if (depend_status[3] == 1)
        {
            result_status[3] += await (char_instance.calculate_char_result_elm_charge(fixed_status, result_status) + weapon_instance.calculate_weapon_result_elm_charge(fixed_status, result_status));
        }
        
        if (depend_status[4] == 1)
        {
            result_status[4] += await (char_instance.calculate_char_result_attck(fixed_status, result_status) + weapon_instance.calculate_weapon_result_attck(fixed_status, result_status));
        }
        if (depend_status[5] == 1)
        {
            result_status[5] += await (char_instance.calculate_char_result_cr(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cr(fixed_status, result_status));
            if (result_status[5] > 1)
            {
            result_status[5] = 1;
            }
        }
        
        if (depend_status[6] == 1)
        {
            result_status[6] += await (char_instance.calculate_char_result_cd(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cd(fixed_status, result_status));
        }
        
        if(zetsuen_check == 1)
        {
            let zetsuen_dmgbuff = calc_zetsuen_buff(fixed_status[3]);
            result_status[7] += await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status) + zetsuen_dmgbuff);
        }
        else
        {
            result_status[7] += await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status));
        }
        let basic_dmg = await char_instance.calculate_basic_dmg(dmg_rate, result_status);
        let exp_dmg;
        if (depend_status[2] == 1) {
            exp_dmg = basic_dmg * (1 + result_status[5]*result_status[6])
                    * (1 + result_status[7]) * correct_coeff[8] + calculate_elmreaction_constdmg(char_parameter[1], result_status, correct_coeff, reaction_check, reaction_count_list, reaction_bonus_list);
        } else {
            exp_dmg = basic_dmg * (1 + result_status[5]*result_status[6])
                    * (1 + result_status[7]) * correct_coeff[8];
        }
        exp_dmg = Math.log(exp_dmg);

        SumExpDmg += exp_dmg;
        SquareExpDmg += exp_dmg ** 2;
        if (MinExpDmg > exp_dmg)
            {
                MinExpDmg = exp_dmg;
            }   
        if (MaxExpDmg < exp_dmg)
            {
                MaxExpDmg = exp_dmg;
                MaxAfStatus = afStatusList;
            }   
    }
    console.log(result_status);
    console.log(MinExpDmg)
    console.log(MaxExpDmg);
    console.log(MaxAfStatus)
    const AverageExpDmg = SumExpDmg / TryCount;
    const AverageSquareExpDmg = SquareExpDmg / TryCount;
    const sigma = (AverageSquareExpDmg - AverageExpDmg ** 2) ** 0.5

    console.log(my_exp_dmg);
    console.log(AverageExpDmg);
    console.log(sigma);

    const NormcdfData = ["0.0", "0.0039893563146316037017899979084636", "0.0079783137169019810263277597059309", "0.011966473414112644638879104065236", "0.015953436852830761398426308893822", "0.019938805838372461596321471772615", "0.023922182654106843963682082693748", "0.027903170180521103588436816221818", "0.031881372013987376986796494540841", "0.03585639258517210717174887567807", 
                        "0.039827837277028981465404618239182", "0.043795312542316785788047467042502", "0.04775842602058385096314688548208", "0.051716786654561138906436046661551", "0.055670004805906429084306796584074", "0.059617692370242517962261405383643", "0.063559462891432835912600608989601", "0.067494931675038416771551123555063", "0.071423715900900724454778494926549", "0.075345434734795448247849611526894", 
                        "0.0792597094391030230424379529563", "0.083166163482442312314807716621521", "0.087064422648214609433070978289072", "0.090954115142005866295043553012893", "0.094834871697795846669541589018232", "0.098706325682923724240853791581034", "0.10256811320176050150972461826546", "0.10641987319803951462675218862127", "0.11026124755579721014015023291725", "0.11409188119887733171695242567737", 
                        "0.11791142218895263730652896312142", "0.12171952182201927909419329515912", "0.12551583472332001905295805258657", "0.12930001894065352103216407584688", "0.13307173603602805518949436742392", "0.13683065117561907122325995242774", "0.14057643321799124232001277523074", "0.14430875480054675100448496026961", "0.14802729242416278015238809558841", "0.15173172653598238627244591470159", 
                        "0.15542174161032416673688067602198", "0.15909702622767738687921527720454", "0.16275727315175050571067479194116", "0.16640217940454232934497807086706", "0.17003144633940632796766051330753", "0.17364477971207997423161495923099", "0.17724188974965229718737216682879", "0.18082249121744419513875354847865", "0.18438630348377741201895688893033", "0.18793305058260945387013308085217", 
                        "0.19146246127401310363770461060834", "0.19497426910248058261222581314154", "0.19846821245303380431734696279029", "0.20194403460512357030212726716782", "0.20540148378430196599925881301974", "0.20884031321165362740857958379524", "0.21226028115097296471072632592642", "0.21566115095367584586548922504359", "0.21904269110143566066450893048616", "0.22240467524653510245518984557263", 
                        "0.22574688224992641970563721493023", "0.22906909621699430162044893834103", "0.2323711065310169700346113691523", "0.23565270788432245270783802293835", "0.23891370030713840982573747908029", "0.24215388919413527491051864429499", "0.24537308532866385238888659553429", "0.24857110490468988570871183032922", "0.25174776954642947110430369085118", "0.25490290632569054186392832832555", 
                        "0.25803634777692698525064957182749", "0.26114793191001327808441710875859", "0.26423750222074883644393732666238", "0.26730490769910256904501026450015", "0.27035000283520940167170031731451", "0.27337264762313180067293783061652", "0.2763727075624005661066980879457", "0.27935005365735038875603935732888", "0.28230456241426686911845602720053", "0.28523611583636287976852303143726", 
                        "0.2881446014166033144244682282285", "0.29102991212839840684799569435731", "0.29389194641418691963494273209954", "0.29673060817193159629993529856553", "0.29954580673955033913556572446505", "0.30233745687730761947738737501944", "0.3051054787481916455994559932694", "0.30784979789630380589852311821171", "0.31057034522328787072397435615401", "0.31326705696282737462960764512761", 
                        "0.31593987465324051144580219911856", "0.31858874510820275690927927913398", "0.32121362038562828718478073098063", "0.32381445775474208604060727771152", "0.32639121966137542829998579330686", "0.32894387369151819211462747083563", "0.33147239253316218725768276874802", "0.33397675393647039070287507800077", "0.33645694067230765396740873206064", "0.338912940489169088801024936025", 
                        "0.34134474606854294858523254563204", "0.34375235497874540207829563101259", "0.34613576962726514374605613602906", "0.34849499721165630072902736356611", "0.35083004966901858041504717081228", "0.35314094362410405454628252267493", "0.35542770033609039575097628957861", "0.35769034564406077034450674771932", "0.35992890991123094721032582216228", "0.3621434279679645065968274694401", 
                        "0.36433393905361732482694296197365", "0.36650048675725277131676311628322", "0.36864311895726928306857900745047", "0.37076188775998217910015416260979", "0.37285684943720174327999986001897", "0.37492806436284973896812366094841", "0.37697559694865662294886443290957", "0.37899951557898179964770588774561", "0.38099989254479929983251485102044", "0.38297680397689128122051051100955", 
                        "0.38493032977829173197777979304336", "0.38686055355602271236337049610188", "0.3887675625521653951120774443705", "0.39065144757430806196761603839289", "0.39251230292541308249040145635249", "0.39435022633314474231122723597425", "0.39616531887869960184285127952625", "0.39795768492518085357372751631225", "0.39972743204555790694783169720045", "0.40147467095025216499505744766058", 
                        "0.40319951541438966684799017569778", "0.4049020822047609556089037774813", "0.40658249100652819227664437804254", "0.40824086434971917418216777161868", "0.40987732753554753120305390608436", "0.41149200856259796553341327008171", "0.41308503805291497159045163682547", "0.41465654917803302236817305600303", "0.41620667758498573783848399259512", "0.41773556132233106049635579082912", 
                        "0.41924334076622895350381136936523", "0.4207301585466076087707178022316", "0.42219615947345360638960043253445", "0.42364149046326090379460776917875", "0.42506630046567295352499575263744", "0.42647074039035165322993452359417", "0.42785496303410622124740686919784", "0.42921912300831446642251725893062", "0.43056337666666828249968755250931", "0.43188788203327454613123823409208", 
                        "0.43319279873114193399550595902011", "0.43447828791108349941547801350525", "0.43574451218106416291855518787364", "0.43699163553602157508348380711476", "0.4382198232881881044844070679256", "0.43942924199794098926506388856099", "0.44062005940520696855643968762202", "0.44179244436144698028336556928284", "0.44294656676224577558043681765864", "0.44408259748053055774136832154226", 
                        "0.44520070830044200603952603342582", "0.44630107185188029255608897571354", "0.44738386154574794400496114976023", "0.4484492515099106411120944415518", "0.44949741652589628604575365473005", "0.45052853196635190434989724319495", "0.45154277373327718244318487308792", "0.45254031819705267564006031864034", "0.45352134213627995544730325643748", "0.45448602267845019919884655837105", 
                        "0.45543453724145696051256699529203", "0.45636706347596809617340331125044", "0.45728377920867106444453394397145", "0.45818486238640505204783970144947", "0.45907049102119263268988475507561", "0.45994084313618290958124265011436", "0.46079609671251734843358433460075", "0.4616364296371287664359763128533", "0.46246201965148320721149513601661", "0.463273044301273702226207684548", 
                        "0.46406968088707419603967413855778", "0.46485210641596119661027051293909", "0.4656204975541100030464454323011", "0.46637503058037166215875052414017", "0.46711588134083611233475430495904", "0.4678432252043862890326593797504", "0.46855723701924729095760439544297", "0.46925809107053404012025873208484", "0.46994596103880021283832456950588", "0.47062101995959057267068402049462", 
                        "0.47128344018399820059866303583547", "0.47193339334022749280143652644683", "0.47257105029616318240986399591855", "0.4731965811229450389465905447238", "0.47381015505954730803632473719784", "0.47441194047836137464976765468143", "0.47500210485177956586341573095916", "0.47558081471977745409589219094538", "0.47614823565849147922494656425719", "0.47670453224978817808812307911685", 
                        "0.47724986805182079279971736283347", "0.47778440557056852523756863568562", "0.47830830623235321411132341493401", "0.47882173035732773335035098163919", "0.47932483713392994626138264902974", "0.47981778459429559910584418819273", "0.48030072959062310052335764248286", "0.48077382777248270965574720626967", "0.48123723356506224596617704855916", "0.48169110014834103764841529920628", 
                        "0.48213557943718344321607575980164", "0.48257082206234291237246880664697", "0.48299697735236719759708420129033", "0.48341419331639498704092956708006", "0.48382261662783390228392810462722", "0.48422239260890949124534598814964", "0.48461366521607454701309762616696", "0.48499657702626779751868812687105", "0.4853712692240107387693078207216", "0.48573788158933112568418857078882", 
                        "0.48609655248650138938524612310476", "0.48644741885358001796853870724367", "0.48679061619274371922954362383131", "0.48712627856139797841848206012996", "0.48745453856405343173943513100332", "0.48777552734495529684737606870026", "0.48808937458145293490046166607032", "0.48839620847809646464265658547407", "0.48869615576144720736772071646588", "0.48898934167558861228585390860711", 
                        "0.48927588997832419460764451613719", "0.48955592293804891339821925156403", "0.48982956133128032275281531318876", "0.49009692444083574791225923188524", "0.49035813005464166737593319636774", "0.49061329446516142267798688894487", "0.49086253246942732906174326082279", "0.49110595736966322260439342880151", "0.49134368097448345219145824762678", "0.49157581360065430789604996987624", 
                        "0.49180246407540387055561305967893", "0.49202373973926627042877023887367", "0.49223974644944635552396848237117", "0.49245058858369079228354873611408", "0.49265636904465165254261581942391", "0.4928571892647285808201506314989", "0.49305314921137568479649812470966", "0.49324434739285934904111018324839", "0.49343088086445323743005475817236", "0.49361284523505682298583958490069", 
                        "0.49379033467422386483302189542581", "0.49396344191958734034160074073471", "0.49413225828466743607553230385389", "0.49429687366704930362484764750581", "0.49445737655691739552577749397102", "0.4946138540459333120132522433282", "0.49476639183644421105390257474631", "0.49491507425100896172572905448", "0.49505998424222935429439593795115", "0.49520120340287381903827914522923", 
                        "0.49533881197628124974900659077094", "0.49547288886703267663692460818059", "0.49560351165187868685917019303969", "0.49573075659091064882129087637091", "0.49585469863896395854328695620194", "0.49597541145724169249157758579901", "0.4960929674251472211262763041581", "0.49620743765231451076757181897326", "0.49631889199082501801807813790219", "0.49642739904760026066489006100908", 
                        "0.49653302619695933150405817312012", "0.49663583959333080666287758510168", "0.49673590418410868752678479100485", "0.49683328372264220509633934639359", "0.496928040781349507297952911668", "0.49702023676494544324570575301357", "0.49710993192377385350061610180618", "0.49719718536723497180191874762857", "0.49728205507729874136013284721645", "0.49736459792209504741595166367798", 
                        "0.49744486966957206719846863920765", "0.49752292500121413848143527848671", "0.49759881752581074846192859976508", "0.4976725997932684455011770495725", "0.49774432330845767720597545414599", "0.4978140385450867592292095611701", "0.49788179495959537987211890730935", "0.49794764100506024592620531738793", "0.49801162414510567505086216963279", "0.49807379086781213920016096236996", 
                        "0.49813418669961596204968971513496", "0.49819285621919357089740197251967", "0.49824984307132389999122460032725", "0.49830518998072273754541304236541", "0.49835893876584300272665972731771", "0.49841113035263513150366788791667", "0.49846180478826194134878299614743", "0.49851100125476253425036076045341", "0.49855875808265998523740170556798", "0.49860511276450774953564971064863", 
                        "0.49865010196836990547334818523241", "0.49869376155123053224610865152913", "0.49873612657232770154919012761915", "0.49877723130640773981156874086901", "0.49881710925689559324343925320568", "0.4988557931689773010654149830882", "0.49889331504259075305604433351938", "0.49892970614532107587083078240772", "0.49896499702519715839128422170239", "0.49899921752338598960120308257326", 
                        "0.49903239678678164310788432807549", "0.49906456328048590038064758931274", "0.49909574480017766002410609778925", "0.4991259684843684328989147098509", "0.49915526082654137261182317774084", "0.49918364768717143778688939802678", "0.4992111543056244265712938248599", "0.49923780531193276499639806124764", "0.49926362473844606908490800981831", "0.49928863603135463594889892181736", 
                        "0.49931286206208415154488229641087", "0.49933632513856003222798817636087", "0.49935904701633994376766199444085", "0.49938104890961316504492527990275", "0.49940235150206558424196351450314", "0.49942297495760923295708308068575", "0.49944293893097537833309949891113", "0.4994622625781703049787483275069", "0.49948096456679302719702012848514", "0.49949906308621427782010255946548", 
                        "0.49951657585761622279888989187037", "0.49953352014389245061906477188498", "0.49954991275940788263100311901203", "0.49956577007961834450471282717167", "0.49958110805054963027319610246755", "0.49959594219813597882943942420487", "0.4996102876374179683169266587013", "0.49962415908159991662612668854234", "0.49963757085096695620647690199103", "0.49965053688166202865320017016682", 
                        "0.4996630707343231190605902364559", "0.49967518560258112197933729329074", "0.49968689432141880000754661575099", "0.499698209375391362617102736506", "0.49970914290670925680391825189261", "0.49971970672318382258846842900952", "0.49972991230603652531898592590218", "0.49973977081757253318188522715191", "0.49974929310871946234142016505951", "0.49975848972643216375310284691359", 
                        "0.49976737092096447496365007411327", "0.49977594665300890716549848458204", "0.49978422660070528245820516041774", "0.4997922201665193787248647145511", "0.49979993648399267980207923455129", "0.49980738442436436675052025717699", "0.49981457260306672206362415971767", "0.49982150938609515262870483913143", "0.49982820289625406922227484958928", "0.49983466101927989032439293354716", 
                        "0.49984089140984246612033490290412", "0.4998469014974262447668766898354", "0.49985269849209252738012273994076", "0.49985828939012418079728136771986", "0.49986368097955419802123930803059", "0.49986887984557951541932114481822", "0.49987389237586151326123658265633", "0.49987872476571464209078032809291", "0.49988338302318463177603696293175", "0.49988787297401775291812105500326", 
                        "0.49989220026652261166306253056713", "0.49989637037632596889925357760817", "0.49990038861102408337751069169603", "0.49990426011473108550552734673575", "0.4999079898725258944861716315606", "0.49991158271479919613218224533097", "0.49991504332150200214036262591572", "0.4999183762262973138879323927833", "0.49992158582061641496334803147762", "0.49992467635762131670422321115141", 
                        "0.49992765195607488002600658742721", "0.49993051660412013482630575205813", "0.49993327416297031528010707547052", "0.49993592837051112543897484674494", "0.49993848284481674475036108255841", "0.49994094108758107745854612753858", "0.49994330648746574337295743551463", "0.49994558232336630022853639082138", "0.49994777176759817985164519192224", "0.49994987788900381161826994325034", 
                        "0.49995190365598239728285329247687", "0.49995385193944379119917228156382", "0.49995572551568792928177074341871", "0.49995752706921123879937503922763", "0.49995925919544144928158506014896", "0.49996092440340221248735653490344", "0.49996252511830892655808954055063", "0.4999640636840971461885197222472", "0.49996554236588494692337405554742", "0.49996696335237059755449544858443", 
                        "0.49996832875816688007874622924328", "0.49996964062607338180764950620936", "0.49997090092928806902089496289351", "0.49997211157355943605229523411004", "0.49997327439928050791260509287251", "0.4999743911835259585121875156204", "0.49997546364203359027051672903409", "0.4999764934311314044109510712533", "0.49997748214961147455940995903393", "0.49997843134055181941519698858817", 
                        "0.49997934249308745326120474554053", "0.49998021704413177594843471301151", "0.49998105638004944674483249296029", "0.49998186183828186909889321616857", "0.49998263470892639595171557522328", "0.49998337623627034775392720856548", "0.49998408762028091782230066384071", "0.49998477001805202212044815912527", "0.49998542454520913298364340171658", "0.49998605227727311874389638431281", 
                        "0.49998665425098409366164690788221", "0.49998723146558626504801730819358", "0.49998778488407474697908579377899", "0.49998831543440529257316939620557", "0.49998882401066787943516014137262", "0.49998931147422506557953079944219", "0.49998977865481601593619036483443", "0.49999022635162708243089004664109", "0.49999065533432980362382788667488", "0.49999106634408717299545938998058", 
                        "0.49999146009452900819580464574951", "0.49999183727269723693079926307718", "0.49999219853996189865406639219875", "0.49999254453290864487205030760247", "0.49999287586419850466148085931469", "0.49999319312340066594694849582601", "0.49999349687779900719887239240958", "0.49999378767317309849385657262224", "0.49999406603455437533548535281039", "0.49999433246695817326877319166116", 
                        "0.49999458745609229614015807902803", "0.49999483146904277586116573276199", "0.49999506495493746673138959501057", "0.49999528834558810276861698809146", "0.4999955020561114320838561311501", "0.4999957064855300281294472259182", "0.49999590201735336364184302544266", "0.49999608902013971929920441372972", "0.49999626784803948551958363381393", "0.49999643884132040243980592444765", 
                        "0.49999660232687526993959831255081", "0.49999675861871264661119559121837", "0.49999690801843104382248568938159", "0.49999705081567710848242089480625", "0.49999718728858827579138175284714", "0.4999973177042203611466928756207", "0.49999744231896054847461113183329", "0.49999756137892622057470307064051", "0.4999976751203500655902843867523", "0.49999778376995188245902064461051", 
                        "0.49999788754529749715023087567263", "0.49999798665514519065908221039441", "0.49999808129978002910175301554682", "0.49999817167133647583867075238899", "0.49999825795410965534386112225498", "0.49999834032485562853591193283287", "0.49999841895308102948857320439443", "0.49999849400132240384498570461975", "0.49999856562541557986724805687195", "0.49999863397475539386069234399445", 
                        "0.49999869919254608271794039804304", "0.49999876141604264752957065175713", "0.49999882077678348360396964761169", "0.49999887740081456382652811746046", "0.49999893140890545406555353966666", "0.49999898291675743129682874081769", "0.49999903203520396726830905077987", "0.49999907887040383285862352381991", "0.49999912352402707079538361833605", "0.49999916609343407708931502566384", 
                        "0.4999992066718480244053838529614", "0.49999924534852085362981951259267", "0.49999928220889305309964368276679", "0.49999931733474743833636966659556", "0.49999935080435713866528720671497", "0.49999938269262799080352158418197", "0.49999941307123553336116294582693", "0.49999944200875679021749901676206", "0.49999946957079702490603814446766", "0.49999949582011164246485932785497", 
                        "0.49999952081672340968014670160651", "0.49999954461803515926783177383929", "0.49999956727893813829835288459546", "0.49999958885191615606992721560788", "0.49999960938714568167370207423889", "0.49999962893259203666700375569435", "0.49999964753410182357593975781304", "0.49999966523549172638315232293417", "0.4999996820786338147179021783105", "0.49999969810353747915123190612218", 
                        "0.49999971334842812080608832624767", "0.49999972784982271441836277312016", "0.49999974164260236002724932697511", "0.49999975476008193462955949397021", "0.49999976723407695140012789565107", "0.49999977909496773045668367458259", "0.49999979037176098163006025000563", "0.49999980109214889628691381029201", "0.49999981128256584193978990696775", "0.49999982096824275016601939963668", 
                        "0.49999983017325928524017260620747", "0.49999983892059387786231855978878", "0.49999984723217170543382209384744", "0.49999985512891069749159564499323", "0.49999986263076564215836956114982", "0.499999869756770466798453025429", "0.49999987652507876348346089664005", "0.49999988295300262736844840106214", "0.49999988905704987365372971715974", "0.49999989485295969645929783076358", 
                        "0.49999990035573683066518730158371", "0.49999990557968427557034058338944", "0.49999991053843463709260032378293", "0.49999991524498014317143898909315", "0.49999991971170138504107391302727", "0.49999992395039483511285748853935", "0.49999992797229919034047203629438", "0.49999993178812058813772642459153", "0.49999993540805674017491241149486", "0.49999993884182002769403449993236", 
                        "0.49999994209865960035411517294585", "0.49999994518738251904357059447984", "0.4999999481163739815757584227366", "0.49999995089361666871466254360761", "0.49999995352670924655877731360929", "0.49999995602288405994109878580831", "0.49999995838902405018026898718931", "0.49999996063167892924093200908949", "0.4999999627570806411288612618765", "0.49999996477115814015705255568654", 
                        "0.49999996667955151457142715224383", "0.4999999684876254829177642528997", "0.49999997020048228946372699546903", "0.49999997182297402396013472511559", "0.49999997335971439003277277869114", "0.49999997481508994553885541342806", "0.49999997619327083729963392799528", "0.49999997749822105173146607261514", "0.49999997873370820204085914757866", "0.49999997990331287182352089794987", 
                        "0.49999998101043753411228061614873", "0.49999998205831506415288649518895", "0.49999998305001686344918000863473", "0.49999998398846061190905624586738", "0.49999998487641766423902905912573", "0.49999998571652010607724547320283", "0.49999998651126748472157399157895", "0.49999998726303322870008965268098", "0.49999998797407076984508241868932", "0.49999998864651938096783570996692", 
                        "0.4999999892824097416890926450391", "0.49999998988366924445860534678729", "0.49999999045212705229572609624466", "0.49999999098951891930094825888642", "0.49999999149749178452496092593845", "0.49999999197760814933648582076376", "0.49999999243135024800228001825218", "0.4999999928601240207815948233005", "0.49999999326526289844248030228339", "0.49999999364803140672803568272866", 
                        "0.49999999400962859893646557016605", "0.49999999435119132442906587768599", "0.49999999467379734054450403720546", "0.49999999497846827507546484801337", "0.4999999952661724461544120409645", "0.49999999553782754609838812693078", "0.49999999579430319547797877298155", "0.4999999960364233734023553969844", "0.49999999626496872975024824063036", "0.49999999648067878482537358243005", 
                        "0.4999999966842540216738386619733", "0.49999999687635787606998555903623", "0.49999999705761862895563315835518", "0.49999999722863120590536971041127", "0.49999999738995888798708510678642", "0.49999999754213493819197166239618", "0.49999999768566414742143652206622", "0.49999999782102430383944077633162", "0.49999999794866758922740403992305", "0.49999999806902190581469341354093", 
                        "0.49999999818249213690056762863807", "0.49999999828946134443299608026687", "0.49999999839029190656575349154159", "0.49999999848532659807734872354868", "0.49999999857488961640343454295412", "0.49999999865928755590812669315636", "0.49999999873881033289890672128828", "0.49999999881373206377427338772107", "0.49999999888431189858282991289349", "0.49999999895079481216684441530464", 
                        "0.49999999901341235496230185929914", "0.49999999907238336543088818801822", "0.49999999912791464600702868277622", "0.49999999918020160435486743945538", "0.49999999922942886164575428906326", "0.49999999927577082948623702510009", "0.4999999993193922570495841390782", "0.49999999936044874989033609465667", "0.49999999939908726185115695696782", "0.49999999943544656140419398478302", 
                        "0.49999999946965767370511702626713", "0.49999999950184429957687387361916", "0.49999999953212321258183878829867", "0.4999999995606046352853307121654", "0.49999999958739259576032141021592", "0.49999999961258526533243263559049", "0.49999999963627527851593040271006", "0.49999999965855003604526282714331", "0.49999999967949199186265900916351", "0.49999999969917892488031726427551", 
                        "0.49999999971768419629567255303475", "0.49999999973507699320005976399647", "0.49999999975142255918469956931191", "0.49999999976678241261324826711692", "0.49999999978121455319709694163874", "0.49999999979477365747810611183772", "0.49999999980751126379345049439828", "0.49999999981947594726865814712729", "0.49999999983071348535769542343921", "0.49999999984126701442301286020228", 
                        "0.49999999985117717782376890386804", "0.49999999986048226595693228052844", "0.49999999986921834867357622910962", "0.49999999987741940047136741389849", "0.49999999988511741884396997062906", "0.49999999989234253614878377839292", "0.49999999989912312533607066528422", "0.4999999999054858998650497653754", "0.49999999991145600811592242661715", "0.49999999991705712259097848942673", 
                        "0.49999999992231152418290169591442", "0.4999999999272401817740963786995", "0.49999999993186282741726592530557", "0.49999999993619802733455284472569", "0.49999999994026324896026905697235", "0.49999999994407492424057315936816", "0.49999999994764850939236010781604", "0.49999999995099854131309048269706", "0.49999999995413869082327501221348", "0.49999999995708181291382020409322", 
                        "0.49999999995983999416140882191654", "0.49999999996242459746651164906525", "0.49999999996484630426048266189776", "0.49999999996711515432045752723758", "0.49999999996924058332343534112124", "0.4999999999712314582639567394945", "0.49999999997309611085317981183049", "0.49999999997484236901088134391731", "0.49999999997647758655595831267439", "0.49999999997800867119535752358844", 
                        "0.49999999997944211090600482032387", "0.49999999998078399879922510491673", "0.49999999998204005655232685240373", "0.4999999999832156564874568912165", "0.49999999998431584237350056629339", "0.49999999998534534902269720542527", "0.49999999998630862074974982849654", "0.49999999998720982875752056467902", "0.49999999998805288750990907421244", "0.49999999998884147014920069554434", 
                        "0.49999999998957902301203480629208", "0.49999999999026877929517319238096", "0.49999999999091377191943468205026", "0.49999999999151684563749794282395", "0.4999999999920806684287515685949", "0.49999999999260774222198217758048", "0.49999999999310041298443032843104", "0.49999999999356088021360410485257", "0.49999999999399120586621500220135", "0.4999999999943933227566843610955", 
                        "0.49999999999476904245585541249127", "0.4999999999951200627188306825207", "0.4999999999954479744692319746525", "0.4999999999957542683656455743463", "0.49999999999604034097456412034868", "0.49999999999630750057276439893306", "0.4999999999965569726007630024716", "0.49999999999678990478776541910663", "0.49999999999700737196736495104623", "0.49999999999721038060215234850446", 
                        "0.49999999999739987303436182716197", "0.49999999999757673147870101250536", "0.49999999999774178177258829020199", "0.49999999999789579689814815804284", "0.49999999999803950028949073927734", "0.49999999999817356893802303663724", "0.49999999999829863630780432136823", "0.4999999999984152950722639291199", "0.49999999999852409968294446193089", "0.49999999999862556878031487459198", 
                        "0.49999999999872018745611416499562", "0.49999999999880840937613550573748", "0.49999999999889065877184086057263", "0.49999999999896733230870573010502", "0.49999999999903880083873106080798", "0.49999999999910541104412300894667", "0.49999999999916748697872973508869", "0.49999999999922533151343635058056", "0.49999999999927922769135325177953", "0.49999999999932943999828813666499", 
                        "0.49999999999937621555366684248948", "0.49999999999941978522676167491586", "0.49999999999946036468279707978976", "0.49999999999949815536323035509876", "0.49999999999953334540424868232665", "0.49999999999956611049728219292563", "0.49999999999959661469510524408382", "0.49999999999962501116688377045614", "0.49999999999965144290532475984028", "0.4999999999996760433888938661673", 
                        "0.49999999999969893720188825625128", "0.49999999999972024061498335747212", "0.49999999999974006212871363636998", "0.49999999999975850298219833007112", "0.49999999999977565762928264153168", "0.49999999999979161418413279305688", "0.49999999999980645483819903545229", "0.49999999999982025625034378378525", "0.49999999999983308991182207124645", "0.49999999999984502248769807972246", 
                        "0.49999999999985611613618424142513", "0.49999999999986642880729795337797", "0.49999999999987601452214496879737", "0.4999999999998849236340577083825", "0.49999999999989320307274077006414", "0.49999999999990089657250452458492", "0.49999999999990804488560059910028", "0.49999999999991468598161001962875", "0.49999999999992085523377556775926", "0.4999999999999265855931142831738", 
                        "0.49999999999993190775109379966815", "0.49999999999993685029160713892469", "0.49999999999994143983293451519052", "0.49999999999994570116033744789854", "0.49999999999994965734988987097946", "0.49999999999995332988411280960621", "0.4999999999999567387599434189308", "0.4999999999999599025895356051371", "0.49999999999996283869435794505962", "0.49999999999996556319302506257448", 
                        "0.49999999999996809108327089103772", "0.49999999999997043631844624112308", "0.49999999999997261187889869882197", "0.49999999999997462983857000150302", "0.49999999999997650142712458890008", "0.49999999999997823708790291421949", "0.49999999999997984653197424683195", "0.49999999999998133878854602564812", "0.49999999999998272225197025920282", "0.49999999999998400472557194689278", 
                        "0.49999999999998519346250995195291", "0.49999999999998629520386713063559", "0.49999999999998731621415375726903", "0.49999999999998826231439632837712", "0.49999999999998913891297263097765", "0.49999999999998995103434347366497", "0.49999999999999070334582166006556", "0.49999999999999140018250959132384", "0.49999999999999204557052827852091", "0.49999999999999264324865249079043", 
                        "0.49999999999999319668845922602922", "0.49999999999999370911308963624298", "0.49999999999999418351471793841848", "0.49999999999999462267081466591829", "0.49999999999999502915928583803194", "0.49999999999999540537256422140454", "0.49999999999999575353072380305005", "0.4999999999999960756936838684389", "0.49999999999999637377256465898401", "0.49999999999999664954025245166918", 
                        "0.49999999999999690464122804130455", "0.49999999999999714060070899582088", "0.4999999999999973588331526810539", "0.49999999999999756065016389854668", "0.49999999999999774726784803387449", "0.49999999999999791981364786061559", "0.4999999999999980793326995739238", "0.49999999999999822679374122605343", "0.49999999999999836309460449322142", "0.49999999999999848906731860863097", 
                        "0.49999999999999860548285334073175", "0.49999999999999871305552606986822", "0.49999999999999881244709631194727", "0.4999999999999989042705694467538", "0.49999999999999898909372992366829", "0.49999999999999906744242283187584", "0.49999999999999913980360142922271", "0.49999999999999920662815701760717", "0.49999999999999926833354642750828", "0.49999999999999932530623132464286", 
                        "0.49999999999999937790394257282159", "0.49999999999999942645778197419502", "0.49999999999999947127417285688078", "0.49999999999999951263667018637009", "0.49999999999999955080764013731011", "0.49999999999999958602981837268297", "0.49999999999999961852775563471622", "0.49999999999999964850915865294343", "0.49999999999999967616613381677136", "0.49999999999999970167634053997432", 
                        "0.49999999999999972520406076017795", "0.49999999999999974690119056523112", "0.49999999999999976690815951816942", "0.49999999999999978535478286116584", "0.49999999999999980236105141449962", "0.4999999999999998180378636473366", "0.49999999999999983248770408130766", "0.49999999999999984580527189391032", "0.49999999999999985807806331516354", "0.49999999999999986938691115633489", 
                        "0.49999999999999987980648457264213", "0.49999999999999988940575194140419", "0.49999999999999989824840953205449", "0.4999999999999999063932784536838", "0.49999999999999991389467218837111", "0.49999999999999992080273685357523", "0.4999999999999999271637661834452", "0.49999999999999993302049307626847", "0.49999999999999993841235942267045", "0.49999999999999994337576580591598", 
                        "0.49999999999999994794430255109715", "0.4999999999999999521489634935212", "0.49999999999999995601834373767641", "0.49999999999999995957882258623006", "0.49999999999999996285473273311317", "0.4999999999999999658685167354186", "0.4999999999999999686408717051575", "0.49999999999999997119088309349183", "0.4999999999999999735361483765184", "0.49999999999999997569289139268164", 
                        "0.4999999999999999776760680271195", "0.49999999999999997949946388740152", "0.49999999999999998117578456792544", "0.49999999999999998271673905643985", "0.49999999999999998413311679551735", "0.49999999999999998543485887409067", "0.49999999999999998663112378917741", "0.49999999999999998773034818546338", "0.49999999999999998874030295030994", "0.49999999999999998966814501383135", 
                        "0.49999999999999999052046517779668", "0.49999999999999999130333227310395", "0.49999999999999999202233392331679", "0.49999999999999999268261417112046", "0.49999999999999999328890820542897", "0.49999999999999999384557440914959", "0.49999999999999999435662393118441", "0.4999999999999999948257479710283", "0.49999999999999999525634295022026", "0.49999999999999999565153373184139", 
                        "0.49999999999999999601419503715183", "0.49999999999999999634697119725077", "0.49999999999999999665229436726489", "0.49999999999999999693240132095919", "0.49999999999999999718934893476577", "0.49999999999999999742502846198811", "0.49999999999999999764117869031277", "0.49999999999999999783939806870251", "0.49999999999999999802115588321279", "0.4999999999999999981878025552298", 
                        "0.49999999999999999834057913003523", "0.49999999999999999848062601842945", "0.49999999999999999860899104935901", "0.49999999999999999872663688706701", "0.49999999999999999883444786219177", "0.49999999999999999893323626245251", "0.49999999999999999902374812506118", "0.49999999999999999910666856976244", "0.49999999999999999918262670841294", "0.49999999999999999925220016424526", 
                        "0.49999999999999999931591923140644", "0.49999999999999999937427070299935", "0.49999999999999999942770139367288", "0.4999999999999999994766213807907", "0.49999999999999999952140698634601", "0.4999999999999999995624035200691", "0.49999999999999999959992780258567", "0.49999999999999999963427048601665", "0.49999999999999999966569818805485", "0.49999999999999999969445545430352", 
                        "0.49999999999999999972076656250603", "0.4999999999999999997448371812309", "0.49999999999999999976685589459141", "0.49999999999999999978699560367192", "0.4999999999999999998054148144943", "0.49999999999999999982225882158545", "0.49999999999999999983766079549299", "0.4999999999999999998517427819389", "0.49999999999999999986461661969342", "0.49999999999999999987638478369239", 
                        "0.49999999999999999988714115940462", "0.49999999999999999989697175398044", "0.49999999999999999990595534927352", "0.49999999999999999991416410142372", "0.49999999999999999992166409131609", "0.4999999999999999999285158298873", "0.49999999999999999993477472193429", "0.49999999999999999994049149178828", "0.49999999999999999994571257394836", "0.49999999999999999995048047152122", 
                        "0.49999999999999999995483408508565", "0.49999999999999999995880901439027", "0.49999999999999999996243783509952", "0.49999999999999999996575035262464", "0.49999999999999999996877383491271", "0.4999999999999999999715332259154", "0.49999999999999999997405134132038", "0.49999999999999999997634904800026", "0.49999999999999999997844542851622", "0.49999999999999999998035793190522", 
                        "0.49999999999999999998210251187986", "0.4999999999999999999836937534783", "0.49999999999999999998514498911735", "0.49999999999999999998646840492419", "0.49999999999999999998767513815064", "0.49999999999999999998877536640867", "0.49999999999999999998977838940504", "0.49999999999999999999069270379775", "0.499999999999999999991526071746", "0.49999999999999999999228558367815", 
                        "0.49999999999999999999297771575956", "0.49999999999999999999360838250218", "0.49999999999999999999418298492157", "0.49999999999999999999470645461355", "0.49999999999999999999518329409197", "0.49999999999999999999561761370093", "0.49999999999999999999601316538868", "0.4999999999999999999963733736069", "0.49999999999999999999670136357698", "0.49999999999999999999699998714502", 
                        "0.49999999999999999999727184642865", "0.49999999999999999999751931544212", "0.49999999999999999999774455987032", "0.49999999999999999999794955514837", "0.49999999999999999999813610299019", "0.49999999999999999999830584649751", "0.49999999999999999999846028396985", "0.49999999999999999999860078152574", "0.49999999999999999999872858463642", "0.4999999999999999999988448286645", 
                        "0.49999999999999999999895054849246", "0.49999999999999999999904668731875", "0.49999999999999999999913410469243", "0.49999999999999999999921358385169", "0.49999999999999999999928583842574", "0.49999999999999999999935151855469", "0.4999999999999999999994112164774", "0.49999999999999999999946547163293", "0.49999999999999999999951477531761", "0.49999999999999999999955957493578", 
                        "0.49999999999999999999960027787943", "0.49999999999999999999963725506866", "0.49999999999999999999967084418231", "0.49999999999999999999970135260556", "0.499999999999999999999729060119", "0.49999999999999999999975422135165", "0.4999999999999999999997770680183", "0.49999999999999999999979781096005", "0.49999999999999999999981664200505", "0.49999999999999999999983373566522", 
                        "0.49999999999999999999984925068312", "0.49999999999999999999986333144218", "0.49999999999999999999987610925213", "0.4999999999999999999998877035206", "0.49999999999999999999989822282086", "0.49999999999999999999990776586475", "0.49999999999999999999991642238924", "0.49999999999999999999992427396407", "0.49999999999999999999993139472748", "0.49999999999999999999993785205642", 
                        "0.49999999999999999999994370717689", "0.49999999999999999999994901571977", "0.49999999999999999999995382822701", "0.49999999999999999999995819061244", "0.49999999999999999999996214458127", "0.49999999999999999999996572801206", "0.49999999999999999999996897530427", "0.49999999999999999999997191769465", "0.4999999999999999999999745835451", "0.49999999999999999999997699860466", 
                        "0.49999999999999999999997918624781", "0.49999999999999999999998116769126", "0.49999999999999999999998296219125", "0.49999999999999999999998458722283", "0.49999999999999999999998605864307", "0.49999999999999999999998739083933", "0.49999999999999999999998859686422", "0.49999999999999999999998968855816", "0.4999999999999999999999906766609", "0.4999999999999999999999915709128", 
                        "0.49999999999999999999999238014698"]
    
    const DltDmg = Math.log(my_exp_dmg) - AverageExpDmg;
    let IntegralGauss;
    let SpendDays;
    let Nsigma;
    if (DltDmg > 0)
    {
        Nsigma = (DltDmg/ sigma * 100).toFixed(0);   
        let num1 = new Decimal('0.5');
        let num2 = new Decimal(NormcdfData[Nsigma]);
        IntegralGauss = num1.sub(num2).toString();
        SpendDays = 1/(parseFloat(IntegralGauss)) ** 0.2;
    }
    else
    {
        Nsigma = (-DltDmg/ sigma * 100).toFixed(0);   
        let num1 = new Decimal('0.5');
        let num2 = new Decimal(NormcdfData[Nsigma]);
        IntegralGauss = num1.add(num2).toString();
        SpendDays = 1/(parseFloat(IntegralGauss)) ** 0.2;
    }
    
    console.log(IntegralGauss);
    console.log(SpendDays);
    console.log(NormcdfData[Nsigma]);

    

  calculationMessage.style.visibility = "hidden";
  let result = "聖遺物厳選日数 ：" + SpendDays + "日";
  document.getElementById("result").innerHTML = result;
  console.timeEnd('myTimer'); // タイマーを終了し、経過時間をコンソールに表示
}

function DisplayCharacter()
{
  const calculationMessage = document.getElementById("calculationMessage")
  calculationMessage.style.visibility = "visible";
}


function create_radarchart(depend_index, myStatus, TheoreticalStatus) {
  let statusList = ["HP%", "防御力％", "元素熟知", "元素チャージ効率", "攻撃力％", "会心率", "会心ダメージ"];
  let itemList = [];
  let myData = [];
  let TheoreticalData = [];
  let dltScore = 0;

  for (let i = 0; i < 7; i++) {
      if (depend_index[i] == 1) {
          itemList.push(statusList[i]);
          dltScore =  100 + (myStatus[i] - TheoreticalStatus[i]);
          if (dltScore > 0)
          {
            myData.push(dltScore);
          }
          else
          {
            myData.push(0);
          }
          TheoreticalData.push(100);
      }
  }

  let maxElement = Math.max(...myData);
  let maxborder = 0;
  if (maxElement < 140)
  {
    maxborder = 140;
  }
  else
  {
    maxborder = 200;
  }

  let ctx = document.getElementById("myChart");

  // 既存のチャートを削除する
  if (window.myChart instanceof Chart) {
      window.myChart.destroy();
  }

  // 新しいチャートを作成する
  window.myChart = new Chart(ctx, {
      type: 'radar',
      data: {
          labels: itemList,
          datasets: [
              {
                  label: "ステータスバランス",
                  backgroundColor: "rgba(51,255,51,0.5)",
                  borderColor: "rgba(51,255,51,1)",
                  pointBackgroundColor: "rgba(51,255,51,1)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor: "rgba(51,255,51,1)",
                  hitRadius: 5,
                  data: myData
              },
              {
                  label: "理論値",
                  backgroundColor: "rgba(255,51,51,0.5)",
                  borderColor: "rgba(255,51,51,1)",
                  pointBackgroundColor: "rgba(255,51,51,1)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor: "rgba(255,51,51,1)",
                  hitRadius: 5,
                  data: TheoreticalData
              }
          ]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scale: {
              ticks: {
                  beginAtZero: true,
                  min: 0,
                  stepSize: 20,
                  max: maxborder,
              },
              pointLabels: {
                  fontSize: 10
              }
          },
          legend: {
              fontSize: 10,
              labels: {
                  fontSize: 14,
              }
          }
      }
  });
}
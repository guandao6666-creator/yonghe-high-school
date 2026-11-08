export interface Stat {
  value: string;
  unit?: string;
  label: string;
  note: string;
}

export interface Honor {
  title: string;
}

export interface Feature {
  title: string;
  desc: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export interface CampusTile {
  key: 'gate' | 'building' | 'track' | 'classroom' | 'autumn' | 'cat';
  title: string;
  desc: string;
}

export const school = {
  name: '固始县永和高级中学',
  shortName: '永和高中',
  shortAlt: '固始永和高级中学',
  englishName: 'Gushi Yonghe High School',
  motto: '永怀梦想，和衷共济',
  mottoAlt: '诚信 · 和谐 · 勤奋 · 创新',
  founded: '2004 年 11 月',
  nature: '民办公助 · 全日制普通高级中学',
  address: '河南省信阳市固始县城北环路中段',
  coords: { lng: 115.681674, lat: 32.201706 },
  area: '240 亩',
  classes: '92 个教学班',
  students: '在校生 6000 余人',
  teachers: '教师 332 人',
  principal: '岳少发',
  campusPlan: '本部（城北）＋ 西校区（2021 年启用，120 亩）',
  sources: [
    '百度百科「固始永和高级中学」词条（2026-11-08 读取）',
    '学校官方抖音账号及师生账号公开视频（2026-11-08 采集）',
  ],
};

export const stats: Stat[] = [
  { value: '2004', label: '创办年份', note: '2004 年 11 月建校' },
  { value: '240', unit: '亩', label: '校园占地', note: '按省级示范性高中标准建设' },
  { value: '92', unit: '个', label: '教学班', note: '宏志班 / 实验班 / 平行班分层' },
  { value: '6000', unit: '+', label: '在校学生', note: '一校两区办学' },
  { value: '332', unit: '人', label: '专任教师', note: '中高级教师为主干' },
  { value: '70', unit: '%+', label: '本科初选率', note: '自 2008 年以来保持' },
];

export const honors: Honor[] = [
  { title: '河南省优秀民办学校' },
  { title: '清华大学生源中学' },
  { title: '信阳市示范性普通高中' },
  { title: '信阳市教育先进单位' },
  { title: '固始县高考一等奖' },
];

export const features: Feature[] = [
  {
    title: '全封闭管理',
    desc: '专业保安与寝管员全天值守，安防监控覆盖重点区域；班主任「六到岗」，门卫凭胸卡准入，校园秩序稳定。',
  },
  {
    title: '小班分层教学',
    desc: '每班约 50 人，设宏志班、实验班、平行班，按学生基础分层组织教学与辅导，让不同层次的学生都有进步空间。',
  },
  {
    title: '清华附中网校',
    desc: '与清华附中网校合作，共享名校特级教师课程资源，为学有余力的学生提供更开阔的学习视野。',
  },
  {
    title: '生活配套完善',
    desc: '食堂两栋共 10000 座，学生公寓 5 栋 900 间并配空调，超市、开水、浴池等生活设施齐备。',
  },
];

export const timeline: TimelineItem[] = [
  { year: '2004', title: '建校', desc: '2004 年 11 月，由怡和控股发展有限公司投资创办，落户固始县城北环路中段。' },
  { year: '2005', title: '一期招生', desc: '2005 年秋季一期工程建成并开始招生，校园按省级示范性高中标准建设。' },
  { year: '2006', title: '市示范性高中', desc: '2006 年 6 月，学校被授予「信阳市示范性普通高中」。' },
  { year: '2021', title: '西校区启用', desc: '2021 年新增西校区，占地 120 亩、在校生近 3000 人，形成一校两区格局。' },
];

export const aboutParagraphs: string[] = [
  '固始县永和高级中学创办于 2004 年 11 月，由怡和控股发展有限公司全额投资建设，是一所民办公助的全日制普通高级中学，校址位于河南省信阳市固始县城北环路中段。',
  '学校占地 240 亩，按省级示范性普通高中标准建设，现有 92 个教学班、在校生 6000 余人、教师 332 人。校名由姜春云题写；张黎上将题写「诚信、和谐、勤奋、创新」八个小字，成为学校的精神底色。',
  '学校以「永怀梦想，和衷共济」为校训，坚持全封闭管理与小班分层教学，与清华附中网校合作共享优质课程资源；先后获评河南省优秀民办学校、清华大学生源中学、信阳市示范性普通高中等。',
  '2021 年，学校启用西校区（占地 120 亩、在校生近 3000 人），办学规模进一步扩大。目前学校正以「低进高出、多元成才」为目标，持续改善办学条件与教学质量。',
];

export const achievements = [
  { value: '70%+', label: '本科初选率', note: '自 2008 年首次高考以来保持' },
  { value: '4 人', label: '清华、北大录取', note: '累计培养' },
  { value: '2006', label: '首届高考', note: '参考 226 人，本科进线率 65.5%' },
  { value: '65.5%', label: '首届本科进线率', note: '2006 年首届高考' },
];

export const campusTiles: CampusTile[] = [
  {
    key: 'gate',
    title: '校门 · 红砖与穹顶',
    desc: '红砖主楼、银灰穹顶与石柱门楼，是永和高中最醒目的门面。',
  },
  {
    key: 'building',
    title: '红砖楼群',
    desc: '教学楼围合中央穹顶建筑，红色跑道与绿茵场铺展在楼群一旁。',
  },
  {
    key: 'track',
    title: '运动场',
    desc: '红色跑道环绕绿茵场，运动会、课间跑操都在这里进行。',
  },
  {
    key: 'classroom',
    title: '教室与课堂',
    desc: '交互白板、蓝色窗帘与红白校服，是永和课堂的日常画面。',
  },
  {
    key: 'autumn',
    title: '秋日校园',
    desc: '落叶、钢琴与秋阳——「所以你有偶尔会想起永和的秋吗？」',
  },
  {
    key: 'cat',
    title: '校园猫「永和老学长」',
    desc: '穿蓝色毛衣的常驻校猫，被师生称作「永和老学长」。',
  },
];

export const campusNote =
  '以上为根据学校官方抖音公开画面整理的示意图，正式照片素材整理中。';

export interface HonorStudent {
  name: string;
  university: string;
  batch: '录取速递（一）' | '录取速递（二）' | '录取速递（三）';
}

/**
 * 2026 年高考录取速递（节选）
 * 来源：抖音公开视频中的「2026 年高考录取速递（一）」「（三）」喜报画面，
 * 以及学校微信公众号《弦歌不辍育桃李，春华秋实结硕果——永和高中应届班高考录取速递（二）》
 * （2026-07-30 发布），按批次与出现顺序整理，仅收录姓名与录取院校。
 */
export const honorRoll: HonorStudent[] = [
  { name: '管泽奥', university: '大连理工大学', batch: '录取速递（一）' },
  { name: '蔡灵', university: '华东理工大学', batch: '录取速递（一）' },
  { name: '赵衍', university: '合肥工业大学', batch: '录取速递（一）' },
  { name: '谢中天', university: '郑州大学', batch: '录取速递（一）' },
  { name: '余泳河', university: '郑州大学', batch: '录取速递（一）' },
  { name: '陈若愚', university: '郑州大学', batch: '录取速递（一）' },
  { name: '李冠霖', university: '郑州大学', batch: '录取速递（二）' },
  { name: '叶永青', university: '郑州大学', batch: '录取速递（二）' },
  { name: '李鑫元', university: '苏州大学', batch: '录取速递（二）' },
  { name: '黄小戈', university: '陕西师范大学', batch: '录取速递（二）' },
  { name: '宋一凡', university: '江南大学', batch: '录取速递（二）' },
  { name: '钱向磊', university: '石河子大学', batch: '录取速递（二）' },
  { name: '魏乐', university: '中央财经大学', batch: '录取速递（三）' },
  { name: '席诺', university: '郑州大学', batch: '录取速递（三）' },
  { name: '张欣怡', university: '中南财经政法大学', batch: '录取速递（三）' },
  { name: '鄢冉冉', university: '中南财经政法大学', batch: '录取速递（三）' },
  { name: '傅其豪', university: '湖南师范大学', batch: '录取速递（三）' },
  { name: '程岩', university: '宁夏大学', batch: '录取速递（三）' },
];

export const honorRollSources = [
  {
    label: '2026 年高考录取速递（一）（抖音）',
    url: 'https://www.douyin.com/video/7668125434832602356',
  },
  {
    label: '2026 年高考录取速递（二）（学校公众号）',
    url: 'https://mp.weixin.qq.com/s/TM3m63MA_OYPQF_xFHsbRw',
  },
  {
    label: '2026 年高考录取速递（三）（抖音）',
    url: 'https://www.douyin.com/video/7669589407124503202',
  },
];

export const honorRollNote =
  '名单整理自学校公开的「2026 年高考录取速递（一）（二）（三）」（（一）（三）为抖音喜报画面，（二）为学校微信公众号文章），节选 18 位同学、按批次与出现顺序排列；宣传材料中的复习生招生咨询电话未在站点展示。本站为非官方整理站点，名单与院校以学校官方发布为准；如涉隐私请联系我们处理。';

export interface EventHonor {
  year: string;
  title: string;
  desc: string;
  link: string;
  linkLabel: string;
}

export const eventHonors: EventHonor[] = [
  {
    year: '2026',
    title: '县第 46 届中小学生田径运动会获奖',
    desc: '学校田径队在「固始县第四十六届中小学生田径运动会」获奖，闭幕合影里学生手捧荣誉证书。',
    link: 'https://www.douyin.com/video/7702637688532307962',
    linkLabel: '看运动会视频',
  },
  {
    year: '2026',
    title: '优质课大赛',
    desc: '2026 年 11 月，学校举行优质课大赛，青年教师借助交互白板同台展示课堂。',
    link: 'https://www.douyin.com/video/7703728135275465850',
    linkLabel: '看大赛视频',
  },
  {
    year: '2023',
    title: '体考出征',
    desc: '体考出征仪式上，考生列队穿过夹道欢呼的同学，彩带与礼花从空中落下。',
    link: 'https://www.douyin.com/video/7214048620281105675',
    linkLabel: '看出征视频',
  },
  {
    year: '2021',
    title: '运动会开幕式创意方阵',
    desc: '2021 年开幕式上的洛丽塔与 cos 方阵，是那年运动会被反复转发的一幕。',
    link: 'https://www.douyin.com/video/6958024726426045727',
    linkLabel: '看开幕式视频',
  },
];

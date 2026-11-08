export interface VideoItem {
  title: string;
  account: string;
  date: string;
  likes: string;
  desc: string;
  url: string;
  tag: string;
}

/** 已逐条观察过的公开抖音视频（2026-11-08 采集，画面内容整理） */
export const videos: VideoItem[] = [
  {
    title: '永和高中优质课大赛拉开帷幕',
    account: '永和高中（官方认证）',
    date: '2026-11-03',
    likes: '100',
    tag: '教学教研',
    desc: '黑底片头打出校徽与「永和高中优质课大赛 盛大开幕」；青年教师借助交互白板授课，多课堂群像拼成「一块黑板」。',
    url: 'https://www.douyin.com/video/7703728135275465850',
  },
  {
    title: '暖心家访润心田 · 班主任家访纪实',
    account: '永和高中（官方认证）',
    date: '2026-10-27',
    likes: '160',
    tag: '家校共育',
    desc: '晚自习的教室坐满红白校服的学生，讲台上方写着「勤学进取 博学精思」；镜头跟着班主任走进固始的夜色里家访。',
    url: 'https://www.douyin.com/video/7701184974242858426',
  },
  {
    title: '永和秋天 · 你有偶尔会想起永和的秋吗',
    account: '永和高中（官方认证）',
    date: '2026-11-06',
    likes: '101',
    tag: '校园随拍',
    desc: '落叶、钢琴与秋日阳光，还有穿蓝色毛衣的校园猫「永和老学长」出镜。',
    url: 'https://www.douyin.com/video/7704997284875398833',
  },
  {
    title: '当学生不想学习数学了怎么办',
    account: '永和·砥行高二',
    date: '2026-11-06',
    likes: '1099',
    tag: '师生日常',
    desc: '深色西装的男老师把红白校服的学生从座位上抱起来——教室上方还挂着高考备战横幅。',
    url: 'https://www.douyin.com/video/7704924609863671674',
  },
  {
    title: '宝宝怎么不想学数学了呢？',
    account: '咕咕嘎嘎（逐梦冲刺版）',
    date: '2026-11-04',
    likes: '6725',
    tag: '师生日常',
    desc: '班主任俯身哄着不想学数学的学生，字幕写着「老师我不想学数学了」；播放量之外，2.0 万次分享。',
    url: 'https://www.douyin.com/video/7704206205824116842',
  },
  {
    title: '还是永和高中的校门好看',
    account: '御观固始',
    date: '2025-02-24',
    likes: '124',
    tag: '校园风光',
    desc: '地面视角的校门正立面，接一段航拍：红砖楼群围合中央穹顶，一旁是红色跑道与绿茵场。',
    url: 'https://www.douyin.com/video/7474903367999868186',
  },
  {
    title: '别人家的老师：固始网课老师唱歌',
    account: '大象许昌（认证）',
    date: '2022-01-10',
    likes: '1.4万',
    tag: '师者温度',
    desc: '疫情网课期间，老师唱歌给学生缓解压力；直播画面里学生弹幕刷满「666666」。',
    url: 'https://www.douyin.com/video/7051483372144708901',
  },
  {
    title: '高中部运动会开幕式',
    account: '固始县城南永和高级中学（认证）',
    date: '2025-10-30',
    likes: '400',
    tag: '校园活动',
    desc: '高中部入场仪式：红白校服方阵举着印有校徽的旗子走过田径场，配文写着「永和人不追星，因为永和全明星」。',
    url: 'https://www.douyin.com/video/7566944456919570597',
  },
];

export const douyinNote =
  '视频卡片均来自抖音公开内容，点击可在抖音查看原视频；本站仅作信息整理与展示，不存储视频文件。';

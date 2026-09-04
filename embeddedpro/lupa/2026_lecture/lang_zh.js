/* ============================================================
   LUPA 강의 중국어(간체) 번역 데이터 — lang_zh.js
   본 파일은 데이터만 담고, 적용 로직은 본문 HTML의 <script> 마지막
   부분(applyLang)이 담당한다. 키 구조는 lang_en.js와 동일하다.
   - UI: 화면 문구 ({...} 플레이스홀더는 applyLang이 채운다)
   - CH_TITLE / CH_GOALS / CH_KEYS: 챕터 제목·학습목표·주요내용
   - QUIZ: 문제·보기·해설 (정답 index는 본문 QUIZ_DATA의 것을 그대로 쓴다)
   - TR: 원문 줄 (data-sec → 문장). 없는 줄은 한국어로 폴백한다.
   샘플 범위: UI 전체 + 챕터 0–1 (제목·목표·퀴즈·원문).
   챕터 2–8은 한국어로 표시된다(폴백).
   ============================================================ */
var LANG_ZH = (function() {
  'use strict';

  var UI = {
    /* 등록 모달 */
    'modal.h3': '学习者注册',
    'modal.p': '进度保存在本浏览器中。<br>输入邮件 ID 即可在其他设备上继续学习。',
    'modal.uid.ph': '邮件 ID（必填）',
    'modal.err': '请只输入邮件 ID — 例如：sophiahj.lee',
    'modal.name.ph': '姓名（必填）',
    'modal.dept.ph': '部门 / 团队（选填）',
    'modal.skip': '跳过',
    'modal.start': '开始学习',

    /* 사이드 레일 */
    'rail.course': 'LUPA LED',
    'rail.title': '[1] 了解 LUPA Studio 与开发环境',
    'rail.meta': '讲师：金伦官 主任研究员',
    'rail.progMain': '进度 {done} / {total}',
    'rail.progSubPending': '{n} 个测验未完成',
    'rail.progSubAll': '全部完成',
    'rail.progSubLeft': '剩余 {n} 个章节',
    'rail.progSubStart': '开始学习吧',
    'rail.back': '← 课程列表',
    'rail.quiz': '测验',
    'rail.min': '{n} 分钟',

    /* 상단바 */
    'topbar.prog': '进度',
    'topbar.crumb': 'CHAPTER {nn} / {total} &nbsp;·&nbsp; <b>{title}</b>',

    /* 플레이어 · 원문 */
    'player.playRange': '播放此区间',
    'player.scriptHead': '课程原文',
    'player.lines': '{n} 行',
    'player.mockNote': '从此处播放 · 部署环境中将直接在此播放',
    'player.play': '播放',

    /* 영상 폭 조절 */
    'gutter.aria': '调整视频区域宽度',
    'gutter.title': '拖动调整视频宽度 · 双击恢复默认 · 也可用 ← → 键调整',

    /* 챕터 하단 액션 */
    'actions.prev': '← 上一章',
    'actions.next': '下一章 →',
    'actions.quizNote': '测验全部答对才会<b>计入进度</b>。<br>跳过时目录中会保留<b>测验未完成</b>状态。',
    'actions.noQuizNoteLast': '本章没有测验。<br>点击完成后即<b>立即完成</b>。',
    'actions.noQuizNoteNext': '本章没有测验。<br>进入下一章即<b>立即完成</b>。',
    'actions.quizBtn': '理解度确认 {n} 题 →',
    'actions.finish': '完成学习',
    'actions.nextFinish': '下一章',
    'actions.tick': '进度 +1',

    /* 퀴즈 */
    'quiz.backToLearn': '← 学习画面',
    'quiz.checkLbl': 'CH.{nn} 理解度确认',
    'quiz.qno': 'QUESTION {n} / {m}',
    'quiz.explain': '解析',
    'quiz.replay': '重看本章区间',
    'quiz.nextQ': '下一题 →',
    'quiz.showResult': '查看结果 →',
    'quiz.perfect': '完美',
    'quiz.passed': '已通过',
    'quiz.failed': '未达到通过标准',
    'quiz.passSub': '请再次确认错题的解析，然后进入下一章。',
    'quiz.failSub': '通过标准为 {pct}%。请确认解析后重新作答。',
    'quiz.reflected': '已计入进度',
    'quiz.notReflected': '未计入进度',
    'quiz.retry': '重新作答',
    'quiz.learnScreen': '学习画面',
    'quiz.nextCh': '下一章 →',

    /* 학습자 */
    'user.change': '更改',

    /* 챕터 본문 라벨 */
    'mod.goals': '学习目标',
    'mod.keys': '主要内容',
    'ch.sub': '{m} 分钟 · 学习目标 {g} · 主要内容 {k}'
  };

  var CH_TITLE = [
    '讲师介绍与课程概要',
    'LUPA Studio 与开发环境、主要菜单和功能说明',
    'SDK Manager、Emulator、Device Manager 及串口管理',
    '快速启动器与状态栏的构成及信息显示',
    'LUPA 应用程序项目结构与 configuration 介绍',
    'LUPA 应用程序开发流程与系统应用、包名规则',
    'LUPA 开发环境中的设备连接与调试方式',
    'Non-GUI 服务模板与项目向导',
    '应用程序调试方法与 launch.json 设置'
  ];

  var CH_GOALS = {
    '0': [
      '了解 LUPA 教育的目的与整体流程',
      '确认讲师简介与课程结构',
      '掌握本课程的学习方法与评估方式'
    ],
    '1': [
      '理解 LUPA Studio 的定位与提供形态',
      '掌握主要菜单（SDK / Device / Repository）的功能',
      '了解开发者网站提供的服务',
      '搭建个人开发环境并确认运行'
    ],
    '2': [
      '使用 SDK Manager 安装与管理 SDK',
      '使用 Emulator 运行虚拟设备',
      '通过 Device Manager 连接实际设备',
      '设置串口并排查连接问题'
    ],
    '3': [
      '掌握快速启动器的构成与使用方法',
      '理解状态栏显示的各项信息',
      '利用状态栏信息排查开发问题'
    ],
    '4': [
      '理解 LUPA 应用项目的目录结构',
      '掌握 configuration 文件的作用与主要设置',
      '了解项目内各文件的职责'
    ],
    '5': [
      '掌握 LUPA 应用的开发流程',
      '理解系统应用与一般应用的区别',
      '熟悉包名（Package Name）规则'
    ],
    '6': [
      '连接实际设备并确认识别状态',
      '掌握日志查看与调试方法',
      '排查设备连接中的常见问题'
    ],
    '7': [
      '理解 Non-GUI 服务模板的结构',
      '使用项目向导生成模板代码',
      '掌握服务应用的开发要点'
    ],
    '8': [
      '掌握应用程序的调试方法',
      '编写并运用 launch.json 设置',
      '利用断点与日志分析问题'
    ]
  };

  var CH_KEYS = {
    '0': [
      'LUPA 教育的目标与预期成果',
      '课程整体流程（9 个章节）',
      '进度管理与测验通过标准',
      '学习环境准备清单',
      '问答与支持渠道'
    ],
    '1': [
      'LUPA Studio 以 VS Code Extension 形式提供',
      'SDK Manager：SDK 与模拟器管理',
      'Device Manager：设备连接与应用执行',
      'Repository：Custom SDK 注册与分发',
      '开发者网站：开发指南与社区',
      '状态栏：当前 SDK 与目标设备显示',
      '快速启动器：常用操作的快捷入口'
    ],
    '2': [
      'SDK Manager 的安装 / 删除 / 激活',
      'Emulator 生成与运行',
      'Device Manager 的设备注册',
      '串口（Serial Port）设置',
      '连接失败时的排查步骤',
      '多设备环境下的目标选择'
    ],
    '3': [
      '快速启动器按钮的构成',
      '状态栏各区域的信息含义',
      'SDK 版本与目标设备确认',
      'GUI 库版本显示位置',
      '利用状态栏进行问题诊断',
      '快速启动器的自定义'
    ],
    '4': [
      '项目根目录结构',
      'configuration 文件的主要字段',
      '资源（Resource）文件夹结构',
      'manifest 与包名的关系',
      '构建输出目录'
    ],
    '5': [
      '开发流程：生成 → 实现 → 构建 → 部署',
      '系统应用与一般应用的差异',
      '包名规则与命名规范',
      '系统应用所需的权限',
      '应用签名与部署方式'
    ],
    '6': [
      '设备连接方式（USB / 网络）',
      '设备识别状态确认',
      '日志级别与过滤',
      '调试器连接方法',
      '常见连接问题与对策'
    ],
    '7': [
      'Non-GUI 服务的角色',
      '服务模板的文件构成',
      '项目向导的使用方法',
      '服务生命周期',
      '与 GUI 应用的通信',
      '服务调试要点'
    ],
    '8': [
      'launch.json 的结构与主要设置',
      '断点设置与变量检查',
      '调用堆栈分析',
      '日志与调试器的配合使用',
      '调试会话的启动与停止',
      '远程调试设置',
      '常见调试问题与对策'
    ]
  };

  /* 정답 index는 본문 QUIZ_DATA를 그대로 쓴다 — 여기엔 담지 않는다 */
  var QUIZ = {
    '0': [
      { q: 'LUPA Studio 提供的集成开发环境（IDE）以何种形式应用于 Visual Studio Code？',
        options: ['独立可执行文件', '基于 Web 的平台', '插件形式', 'Extension 形式'],
        hint: 'LUPA Studio 以 Visual Studio Code 扩展功能的形式提供。' },
      { q: 'LUPA Studio 中负责应用安装与运行、调试、日志查看等的主要功能是什么？',
        options: ['Quick Launcher', 'SDK Manager', 'Device Manager', 'Repository'],
        hint: '由负责设备管理的功能承担。' },
      { q: '以下哪项不是 LUPA 开发者网站提供的服务？',
        options: ['应用市场', 'LUPA Studio 内聊天机器人集成', '开发指南', 'AI 聊天机器人'],
        hint: '应用市场不属于所提及的服务。' },
      { q: '以下哪项不是 LUPA Studio 支持开发、构建、调试、应用安装及运行的功能？',
        options: ['SDK Manager', 'Device Manager', 'Task Scheduler', 'Repository'],
        hint: 'Task Scheduler 不在 LUPA Studio 的主要功能列表中。' },
      { q: '通过 LUPA Studio 可以高效管理的是什么？',
        options: ['应用程序开发流程', '网络配置', '硬件设计', '操作系统安装'],
        hint: 'LUPA Studio 专注于软件开发生命周期管理。' }
    ],
    '1': [
      { q: 'SDK Manager 不提供以下哪项功能？',
        options: ['应用运行', 'SDK 安装', 'SDK 删除', 'SDK 激活'],
        hint: 'SDK Manager 专注于 SDK 与模拟器管理。' },
      { q: '以下哪项不是 Device Manager 支持的功能？',
        options: ['版本确认', '应用运行', 'GUI 库管理', '应用安装'],
        hint: 'GUI 库管理由单独的 Manager 负责。' },
      { q: '以下哪项不是 Quick Launcher 提供的功能？',
        options: ['内存转储', 'Custom SDK 注册', '构建', '寄存器转储'],
        hint: 'Custom SDK 注册由 LUPA Repository 管理。' },
      { q: '状态栏中无法确认的信息是什么？',
        options: ['当前 SDK', '项目名称', '目标设备', 'GUI 库版本'],
        hint: 'GUI 库版本不会显示在状态栏中。' }
    ]
  };

  /* 원문 줄 — data-sec 키. 샘플로 챕터 0–1 전체를 담는다. 나머지는 KO 폴백. */
  var TR = {
    /* ── CH.01 강사 소개 및 교육 개요 (19줄) ── */
    '0': '大家好，我是本次负责讲解 LUPA Studio 的金伦官。',
    '8': '我在 CTO 旗下软件中心的平台研究所，',
    '11': '并在 LUPA 开发环境任务组中负责开发 LUPA Studio。',
    '16': '这个 LUPA Studio 是用于开发 LUPA Application 或平台的',
    '22': '开发环境工具。',
    '28': '今天要介绍的内容，大家可能已经通过事先练习看过一遍，',
    '35': '这里再简单介绍一下 LUPA Studio 作为参考，',
    '40': '讲解如何将其应用于 LUPA 开发，以及 LUPA 的开发周期是怎样的，',
    '45': '并说明 LUPA Application 开发的流程，',
    '49': '重点讲解如何加以运用。',
    '54': '接下来两个小时请多多关照。',
    '57': '在进入 LUPA Studio 之前，',
    '61': '有一个提供 LUPA 开发环境说明和指南的开发者网站。',
    '69': '可以通过 lupa.lge.com 或 lupa.developer.lge.com 访问。',
    '79': '在这里可以查看 LUPA 平台开发的整体事项。',
    '87': '并且最近通过更新，开始提供 LUPA AI 聊天机器人服务。',
    '94': '看右下角有一个圆形图标，选择它之后',
    '101': '可以作为 AI agent 通过提问获取 LUPA 开发的整体信息。',
    '110': '同样，这个图标也可以通过 LUPA Studio 中 VS Code 的聊天功能来使用。',
    /* ── CH.02 LUPA Studio 및 개발 환경 (28줄) ── */
    '120': '这部分稍后在后面再详细说明。',
    '123': 'LUPA Studio 是基于 VS Code（Visual Studio Code）的开发环境，',
    '134': '拥有支持 LUPA Application 开发流程的整体开发环境和开发工具。',
    '141': '由于以 Extension 形式提供，',
    '145': '运行左侧的 VS Code 后，',
    '149': '可以在左侧 Activity Bar 中选择 LUPA Studio 图标来使用各项功能。',
    '157': '现在显示的画面是首次运行 Visual Studio Code 时看到的代表性画面。',
    '168': '大家可能通过事先资料接触过，',
    '174': '或者最近在开发工作中使用时已经比较熟悉了。',
    '181': '我们重点讲解的是左侧 Activity Bar 和 Side Bar 中的 LUPA Studio 菜单。',
    '188': '通过下方 Output Panel 的控制台或 Output Channel 可以确认输出。',
    '197': '首次运行 LUPA Studio 并选择 Activity Bar 后，',
    '207': '左侧会显示 LUPA Studio 的基本项目。',
    '213': '最上方是 SDK Manager。',
    '216': 'SDK Manager 用于在 LUPA 平台上开发时，',
    '220': '选择将哪种目标的开发库与应用一起构建。',
    '227': '第二个标签页是 Device Manager。',
    '230': 'Device Manager 在使用实际设备或 Emulator 时，',
    '234': '用于选择安装或运行 Application 时使用哪个端口、哪个设备。',
    '240': 'LUPA Repository 是在实际开发 Application 时需要参考或使用平台代码时使用的项目。',
    '253': '这部分最近虽有更新，但新版本尚未发布，因此资料暂未更新。',
    '264': 'Quick Launcher 是将 LUPA 开发中构建、安装、运行 Application 等常用命令集中在一起、便于快速访问的菜单。',
    '278': '最下方是名为 GUI 库管理器的项目。',
    '283': '本次认证教育不涉及这部分，但有一个叫 GUI Creator 的 LUPA Application UI 制作工具，这里汇集了它所使用的 GUI 库。',
    '302': '最下方是 LUPA Studio Status Bar，显示当前正在处理的项目、所选 SDK、目标设备以及所选目标平台构建名称。',
    '324': '术语可能比较陌生——目标平台是指选择由产品类别（冰箱、洗衣机等产品）和芯片组构成的目标平台的菜单。',
    '342': '最后还可以选择 Debug 与 Release 模式的构建模式。',
    '351': 'SDK Manager 如前面所说明的那样，正在由用户进行开发。'
  };

  return { UI: UI, CH_TITLE: CH_TITLE, CH_GOALS: CH_GOALS, CH_KEYS: CH_KEYS, QUIZ: QUIZ, TR: TR };
})();

// 2026年教育部本科专业目录完整数据
// 来源：教育部《普通高等学校本科专业目录（2026年）》

const majorData = {
  disciplines: [
    {
      code: "01",
      name: "哲学",
      categoryCount: 1,
      feature: "思辨与人文根基",
      color: "#8B7B8B",
      categories: [
        {
          code: "0101",
          name: "哲学类",
          majors: [
            { code: "010101", name: "哲学", description: "系统研究世界观、人生观和价值观的基础学科，培养抽象思维和逻辑推理能力，适合从事教育、研究、文化等工作。", degree: "哲学学士", tags: ["📚"] },
            { code: "010102", name: "逻辑学", description: "研究推理形式和思维规律的学科，在人工智能、计算机科学、法律论证等领域有重要应用。", degree: "哲学学士", tags: ["🧪"] },
            { code: "010103K", name: "宗教学", description: "研究宗教现象和宗教文化的学科，培养宗教研究和文化交流能力。", degree: "哲学学士", tags: ["📚"], isK: true },
            { code: "010104T", name: "伦理学", description: "研究道德规范和价值判断的学科，培养道德分析和伦理决策能力。", degree: "哲学学士", tags: ["📚"], isT: true }
          ]
        }
      ]
    },
    {
      code: "02",
      name: "经济学",
      categoryCount: 4,
      feature: "经世济民，数字金融",
      color: "#D4A574",
      categories: [
        {
          code: "0201",
          name: "经济学类",
          majors: [
            { code: "020101", name: "经济学", description: "研究资源配置和经济运行规律的核心学科，为政府决策、企业管理、金融投资提供理论支撑。", degree: "经济学学士", tags: ["📚"] },
            { code: "020102", name: "经济统计学", description: "运用统计方法分析经济数据，为经济决策提供量化依据。", degree: "经济学学士", tags: ["🧪"] },
            { code: "020103T", name: "国民经济管理", description: "研究国民经济运行和宏观调控，培养经济管理能力。", degree: "经济学学士", tags: ["📚"], isT: true },
            { code: "020104T", name: "资源与环境经济学", description: "研究资源利用和环境保护的经济机制，为可持续发展服务。", degree: "经济学学士", tags: ["📚"], isT: true },
            { code: "020105T", name: "商务经济学", description: "研究商业活动和经济规律，培养商务分析和决策能力。", degree: "经济学学士", tags: ["📚"], isT: true },
            { code: "020106T", name: "能源经济", description: "研究能源市场和能源政策，为能源产业发展服务。", degree: "经济学学士", tags: ["📚"], isT: true },
            { code: "020107T", name: "劳动经济学", description: "研究劳动力市场和劳动关系，为人力资源管理提供理论支撑。", degree: "经济学学士", tags: ["📚"], isT: true },
            { code: "020108T", name: "经济工程", description: "融合经济学和工程技术的交叉学科，培养复合型人才。", degree: "经济学学士", tags: ["🧪"], isT: true },
            { code: "020109T", name: "数字经济", description: "研究数字技术驱动下的经济形态和商业模式，涵盖大数据、平台经济、数字治理等新兴领域。", degree: "经济学学士", tags: ["💻"], isT: true },
            { code: "020110TK", name: "低空经济与管理", description: "研究低空空域资源开发和无人机应用管理的新兴学科，服务于低空经济发展。", degree: "管理学学士", tags: ["💻", "🌱"], isTK: true, isNew: true },
            { code: "020111T", name: "资源环境审计", description: "融合环境科学与审计学的交叉学科，研究生态环境保护和资源利用审计。", degree: "经济学学士", tags: ["📚", "🌱"], isT: true, isNew: true }
          ]
        },
        {
          code: "0202",
          name: "财政学类",
          majors: [
            { code: "020201K", name: "财政学", description: "研究政府收支和税收政策，培养财政管理和公共理财能力。", degree: "经济学学士", tags: ["📚"], isK: true },
            { code: "020202", name: "税收学", description: "研究政府收支和税收政策，培养财政管理和公共理财能力。", degree: "经济学学士", tags: ["📚"] },
            { code: "020203TK", name: "国际税收", description: "研究跨国税收协调、国际税收协定和跨境税务筹划的学科，培养处理国际税务争议和跨国企业税务合规的专业人才。", degree: "经济学学士", tags: ["📚"], isTK: true }
          ]
        },
        {
          code: "0203",
          name: "金融学类",
          majors: [
            { code: "020301K", name: "金融学", description: "研究资金融通和资本市场运行的学科，培养金融分析、风险管理和投资决策能力。", degree: "经济学学士", tags: ["📚"], isK: true },
            { code: "020302", name: "金融工程", description: "研究资金融通和资本市场，培养金融分析和投资管理能力。", degree: "经济学学士", tags: ["🧪"] },
            { code: "020303", name: "保险学", description: "研究资金融通和资本市场，培养金融分析和投资管理能力。", degree: "经济学学士", tags: ["📚"] },
            { code: "020304", name: "投资学", description: "研究资金融通和资本市场，培养金融分析和投资管理能力。", degree: "经济学学士", tags: ["📚"] },
            { code: "020305T", name: "金融数学", description: "研究资金融通和资本市场，培养金融分析和投资管理能力。", degree: "经济学学士", tags: ["🧪"], isT: true },
            { code: "020306T", name: "信用管理", description: "研究资金融通和资本市场，培养金融分析和投资管理能力。", degree: "经济学或管理学学士", tags: ["📚"], isT: true },
            { code: "020307T", name: "经济与金融", description: "研究资金融通和资本市场，培养金融分析和投资管理能力。", degree: "经济学学士", tags: ["📚"], isT: true },
            { code: "020308T", name: "精算学", description: "研究资金融通和资本市场，培养金融分析和投资管理能力。", degree: "经济学或理学学士", tags: ["🧪"], isT: true },
            { code: "020309T", name: "互联网金融", description: "研究互联网环境下的金融服务创新，为金融科技发展服务。", degree: "经济学学士", tags: ["💻"], isT: true },
            { code: "020310T", name: "金融科技", description: "融合金融学与信息技术的交叉学科，研究区块链、智能投顾、数字支付等金融创新。", degree: "经济学学士", tags: ["💻"], isT: true },
            { code: "020311TK", name: "金融审计", description: "研究金融机构审计和风险控制，为金融监管服务。", degree: "经济学学士", tags: ["📚"], isTK: true },
            { code: "020312TK", name: "数字金融", description: "研究数字技术驱动的金融服务创新，涵盖数字货币、智能合约、数字风控等领域。", degree: "经济学学士", tags: ["💻", "🌱"], isTK: true, isNew: true }
          ]
        },
        {
          code: "0204",
          name: "经济与贸易类",
          majors: [
            { code: "020401", name: "国际经济与贸易", description: "研究国际贸易规则和实务操作，培养外贸人才。", degree: "经济学学士", tags: ["📚"] },
            { code: "020402", name: "贸易经济", description: "研究国内贸易和商品流通，培养商贸管理能力。", degree: "经济学学士", tags: ["📚"] },
            { code: "020403T", name: "国际经济发展合作", description: "研究国际发展援助和合作项目，为对外合作服务。", degree: "经济学学士", tags: ["📚"], isT: true },
            { code: "020404TK", name: "数字贸易", description: "研究数字化背景下的国际贸易新模式，涵盖跨境电商、数字服务贸易等。", degree: "经济学学士", tags: ["💻", "🌱"], isTK: true, isNew: true }
          ]
        }
      ]
    },
    {
      code: "03",
      name: "法学",
      categoryCount: 6,
      feature: "法治社会，国家安全",
      color: "#5B7C8C",
      categories: [
        {
          code: "0301",
          name: "法学类",
          majors: [
            { code: "030101K", name: "法学", description: "系统研究法律规范和法律制度的学科，培养法律思维和实务操作能力，是法治社会建设的基础。", degree: "法学学士", tags: ["📚"], isK: true },
            { code: "030102T", name: "知识产权", description: "研究专利、商标、著作权等无形财产保护的专门学科，服务于创新驱动发展战略。", degree: "法学学士", tags: ["📚"], isT: true },
            { code: "030103T", name: "监狱学", description: "研究监狱管理和罪犯矫正，为司法行政服务。", degree: "法学学士", tags: ["📚"], isT: true },
            { code: "030104T", name: "信用风险管理与法律防控", description: "研究信用风险和法律防控机制，为金融安全服务。", degree: "法学学士", tags: ["📚"], isT: true },
            { code: "030105T", name: "国际经贸规则", description: "研究国际贸易规则和法律制度，为对外经贸服务。", degree: "法学学士", tags: ["📚"], isT: true },
            { code: "030106TK", name: "司法警察学", description: "培养司法警察专业人才，为司法系统服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030107TK", name: "社区矫正", description: "研究社区服刑人员矫正方法，为社会治理服务。", degree: "法学学士", tags: ["📚"], isTK: true },
            { code: "030108TK", name: "纪检监察", description: "研究党风廉政建设和反腐败工作，为纪检监察系统服务。", degree: "法学学士", tags: ["📚"], isTK: true },
            { code: "030109TK", name: "国际法", description: "研究国际法律规则和国际争端解决，为涉外法律服务。", degree: "法学学士", tags: ["📚"], isTK: true },
            { code: "030110TK", name: "司法鉴定学", description: "研究司法鉴定技术和方法，为司法实践提供技术支持。", degree: "法学学士", tags: ["🧪"], isTK: true },
            { code: "030111TK", name: "国家安全学", description: "研究国家安全和风险管理，为国家安全工作服务。", degree: "法学学士", tags: ["📚"], isTK: true },
            { code: "030112TK", name: "海外利益安全", description: "研究保护中国公民和企业在海外合法权益的学科，培养海外安全风险评估、领事保护与应急处置能力。", degree: "法学学士", tags: ["📚"], isTK: true }
          ]
        },
        {
          code: "0302",
          name: "政治学类",
          majors: [
            { code: "030201", name: "政治学与行政学", description: "研究政治制度和行政管理，培养公共管理人才。", degree: "法学学士", tags: ["📚"] },
            { code: "030202", name: "国际政治", description: "研究国际政治关系和国际组织，培养国际事务分析能力。", degree: "法学学士", tags: ["📚"] },
            { code: "030203", name: "外交学", description: "研究外交理论和实务，培养外交外事人才。", degree: "法学学士", tags: ["📚"] },
            { code: "030204T", name: "国际事务与国际关系", description: "研究国际事务处理和跨国合作，培养国际事务管理能力。", degree: "法学学士", tags: ["📚"], isT: true },
            { code: "030205T", name: "政治学、经济学与哲学", description: "融合政治学、经济学和哲学的跨学科专业，培养复合型人才。", degree: "法学学士", tags: ["📚"], isT: true },
            { code: "030206TK", name: "国际组织与全球治理", description: "研究国际组织运行机制和全球治理理论与实践的学科，培养能在联合国等国际机构从事全球事务管理的复合型人才。", degree: "法学学士", tags: ["📚"], isTK: true }
          ]
        },
        {
          code: "0303",
          name: "社会学类",
          majors: [
            { code: "030301", name: "社会学", description: "研究社会结构和社会问题，培养社会调查和政策分析能力。", degree: "法学学士", tags: ["📚"] },
            { code: "030302", name: "社会工作", description: "研究社会服务和社会福利，培养社会工作者。", degree: "法学学士", tags: ["📚"] },
            { code: "030303T", name: "人类学", description: "研究人类文化和社会结构，培养文化研究和田野调查能力。", degree: "法学学士", tags: ["📚"], isT: true },
            { code: "030304T", name: "女性学", description: "研究女性发展和性别平等，为妇女工作服务。", degree: "法学学士", tags: ["📚"], isT: true },
            { code: "030305T", name: "家政学", description: "研究家庭管理和生活科学，培养家政服务人才。", degree: "法学学士", tags: ["📚"], isT: true },
            { code: "030306T", name: "老年学", description: "研究老龄化社会和老年服务，为养老产业服务。", degree: "法学学士", tags: ["📚"], isT: true },
            { code: "030307T", name: "社会政策", description: "研究社会政策制定和评估，为社会治理提供决策依据。", degree: "法学学士", tags: ["📚"], isT: true }
          ]
        },
        {
          code: "0304",
          name: "民族学类",
          majors: [
            { code: "030401", name: "民族学", description: "研究民族文化和社会发展，培养民族事务管理和文化保护能力。", degree: "法学学士", tags: ["📚"] }
          ]
        },
        {
          code: "0305",
          name: "马克思主义理论类",
          majors: [
            { code: "030501", name: "科学社会主义", description: "研究科学社会主义理论，培养理论教育和宣传人才。", degree: "法学学士", tags: ["📚"] },
            { code: "030502", name: "中国共产党历史", description: "研究中共党史和党的建设，为党史研究和党建工作服务。", degree: "法学学士", tags: ["📚"] },
            { code: "030503", name: "思想政治教育", description: "研究思想政治教育理论和方法，培养思政教育人才。", degree: "法学学士", tags: ["📚"] },
            { code: "030504T", name: "马克思主义理论", description: "研究马克思主义基本原理，培养理论研究和教育人才。", degree: "法学学士", tags: ["📚"], isT: true },
            { code: "030505TK", name: "工会学", description: "研究工会组织建设和劳动关系协调的学科，培养工会管理、集体协商和职工权益维护方面的专业人才。", degree: "法学学士", tags: ["📚"], isTK: true }
          ]
        },
        {
          code: "0306",
          name: "公安学类",
          majors: [
            { code: "030601K", name: "治安学", description: "研究社会治安管理和防控，培养治安管理人才。", degree: "法学学士", tags: ["🏥"], isK: true },
            { code: "030602K", name: "侦查学", description: "研究刑事侦查技术和方法，培养侦查办案能力。", degree: "法学学士", tags: ["🏥"], isK: true },
            { code: "030603K", name: "边防管理", description: "研究边境管理和边防检查，为边防工作服务。", degree: "法学学士", tags: ["🏥"], isK: true },
            { code: "030604TK", name: "禁毒学", description: "研究毒品预防和禁毒执法，为禁毒工作服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030605TK", name: "警犬技术", description: "研究警犬训练和使用技术，为公安实战服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030606TK", name: "经济犯罪侦查", description: "研究经济犯罪特点和侦查方法，为打击经济犯罪服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030607TK", name: "边防指挥", description: "研究边防作战和指挥调度，为边防部队服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030608TK", name: "消防指挥", description: "研究灭火救援和应急指挥，为消防救援服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030609TK", name: "警卫学", description: "研究警卫工作和安全保卫，为重要目标警卫服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030610TK", name: "公安情报学", description: "研究情报收集和分析方法，为公安决策服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030611TK", name: "犯罪学", description: "研究犯罪原因和预防对策，为犯罪防控服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030612TK", name: "公安管理学", description: "研究公安组织和管理方法，培养公安管理人才。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030613TK", name: "涉外警务", description: "研究涉外案件处理和警务合作，为涉外警务服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030614TK", name: "国内安全保卫", description: "研究国内安全威胁和防范措施，为国家安全服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030615TK", name: "警务指挥与战术", description: "研究警务指挥和战术运用，为警务实战服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030616TK", name: "技术侦查学", description: "研究技术侦查手段和方法，为案件侦破服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030617TK", name: "海警执法", description: "研究海上执法和维权执法，为海警工作服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030618TK", name: "公安政治工作", description: "研究公安队伍思想政治工作，为公安队伍建设服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030619TK", name: "移民管理", description: "研究出入境管理和移民政策，为移民管理服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030620TK", name: "出入境管理", description: "研究出入境边防检查和证件管理，为口岸管理服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030621TK", name: "反恐警务", description: "研究反恐理论和实战技能，为反恐工作服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030622TK", name: "消防政治工作", description: "研究消防救援队伍政治工作，为消防队伍建设服务。", degree: "法学学士", tags: ["🏥"], isTK: true },
            { code: "030623TK", name: "铁路警务", description: "研究铁路治安管理和案件侦查，为铁路安全服务。", degree: "法学学士", tags: ["🏥", "🌱"], isTK: true, isNew: true },
            { code: "030624TK", name: "森林消防", description: "研究森林火灾预防和扑救，为森林消防服务。", degree: "法学学士", tags: ["🏥", "🌱"], isTK: true, isNew: true },
            { code: "030625TK", name: "政治安全保卫", description: "研究政治安全威胁和防范措施，为维护国家安全服务。", degree: "法学学士", tags: ["🏥", "🌱"], isTK: true, isNew: true }
          ]
        }
      ]
    },
    {
      code: "04",
      name: "教育学",
      categoryCount: 2,
      feature: "立德树人，智能教育",
      color: "#7BA085",
      categories: [
        {
          code: "0401",
          name: "教育学类",
          majors: [
            { code: "040101", name: "教育学", description: "研究教育现象、教育规律和教育方法的学科，培养教育教学和教育管理能力。", degree: "教育学学士", tags: ["📚"] },
            { code: "040102", name: "科学教育", description: "研究科学教学和科学普及，培养科学教育人才。", degree: "教育学学士", tags: ["🧪"] },
            { code: "040103", name: "人文教育", description: "研究人文素养教育和文化传承，培养人文教育人才。", degree: "教育学学士", tags: ["📚"] },
            { code: "040104", name: "教育技术学", description: "研究教育信息化和技术应用，为教育现代化服务。", degree: "教育学或理学或工学学士", tags: ["💻"] },
            { code: "040105", name: "艺术教育", description: "研究艺术教育和审美培养，培养艺术教育人才。", degree: "教育学或艺术学学士", tags: ["📚"] },
            { code: "040106", name: "学前教育", description: "研究0-6岁儿童发展与教育的学科，培养幼儿园教师和早教机构专业人才。", degree: "教育学学士", tags: ["📚"] },
            { code: "040107", name: "小学教育", description: "研究小学教学和学生发展，培养小学教师。", degree: "教育学学士", tags: ["📚"] },
            { code: "040108", name: "特殊教育", description: "研究特殊儿童教育和康复，培养特殊教育教师。", degree: "教育学学士", tags: ["📚"] },
            { code: "040109T", name: "华文教育", description: "研究海外华文教学和文化传播，为华文教育服务。", degree: "教育学学士", tags: ["📚"], isT: true },
            { code: "040110TK", name: "教育康复学", description: "研究教育康复理论和方法，为特殊儿童康复服务。", degree: "教育学学士", tags: ["📚"], isTK: true },
            { code: "040111T", name: "卫生教育", description: "研究学校卫生和健康教育，培养健康教育人才。", degree: "教育学学士", tags: ["📚"], isT: true },
            { code: "040112T", name: "认知科学与技术", description: "研究认知过程和智能技术，为教育科技服务。", degree: "教育学学士", tags: ["🧪"], isT: true },
            { code: "040113T", name: "融合教育", description: "研究融合教育理论和实践，促进教育公平。", degree: "教育学学士", tags: ["📚"], isT: true },
            { code: "040114TK", name: "劳动教育", description: "研究劳动教育和实践教学，培养劳动素养。", degree: "教育学学士", tags: ["📚"], isTK: true },
            { code: "040115T", name: "家庭教育", description: "研究家庭教育理论和指导方法，为家庭教育服务。", degree: "教育学学士", tags: ["📚"], isT: true },
            { code: "040116TK", name: "孤独症儿童教育", description: "研究孤独症儿童教育和干预，为特殊教育服务。", degree: "教育学学士", tags: ["📚"], isTK: true },
            { code: "040117TK", name: "人工智能教育", description: "研究人工智能在教育中的应用，为教育智能化服务。", degree: "教育学学士", tags: ["💻"], isTK: true },
            { code: "040118T", name: "婴幼儿发展与健康管理", description: "研究婴幼儿发展和健康照护，为托育服务提供专业支持。", degree: "教育学或管理学学士", tags: ["📚"], isT: true }
          ]
        },
        {
          code: "0402",
          name: "体育学类",
          majors: [
            { code: "040201", name: "体育教育", description: "研究体育教学和运动训练，培养体育教师。", degree: "教育学学士", tags: ["📚"] },
            { code: "040202K", name: "运动训练", description: "研究运动技能和竞技训练，培养教练员和运动员。", degree: "教育学学士", tags: ["🏥"], isK: true },
            { code: "040203", name: "社会体育指导与管理", description: "研究社会体育组织和管理，培养社会体育指导员。", degree: "教育学学士", tags: ["📚"] },
            { code: "040204K", name: "武术与民族传统体育", description: "研究武术和传统体育项目，传承民族体育文化。", degree: "教育学学士", tags: ["📚"], isK: true },
            { code: "040205", name: "运动人体科学", description: "研究运动与人体机能关系，为运动训练和健康管理服务。", degree: "教育学学士", tags: ["🧪"] },
            { code: "040206T", name: "运动康复", description: "研究运动损伤康复和理疗技术，为运动医学服务。", degree: "教育学或理学学士", tags: ["🏥"], isT: true },
            { code: "040207T", name: "休闲体育", description: "研究休闲体育项目和产业运营，为休闲体育服务。", degree: "教育学学士", tags: ["📚"], isT: true },
            { code: "040208T", name: "体能训练", description: "研究体能训练理论和方法，为竞技体育和健身服务。", degree: "教育学学士", tags: ["🏥"], isT: true },
            { code: "040209T", name: "冰雪运动", description: "研究冰雪运动技能和教学，为冰雪产业服务。", degree: "教育学学士", tags: ["📚"], isT: true },
            { code: "040210TK", name: "电子竞技运动与管理", description: "研究电子竞技运动和赛事运营，为电竞产业服务。", degree: "教育学学士", tags: ["💻"], isTK: true },
            { code: "040211TK", name: "智能体育工程", description: "融合体育和信息技术，研究智能体育设备和系统。", degree: "教育学或工学学士", tags: ["💻"], isTK: true },
            { code: "040212TK", name: "体育旅游", description: "研究体育旅游产品和赛事旅游，为体育旅游服务。", degree: "教育学学士", tags: ["📚"], isTK: true },
            { code: "040213T", name: "运动能力开发", description: "研究运动能力评估和开发，为运动训练服务。", degree: "教育学或理学学士", tags: ["🧪"], isT: true },
            { code: "040214TK", name: "足球运动", description: "研究足球训练和竞赛组织，培养足球专业人才。", degree: "教育学学士", tags: ["🏥"], isTK: true },
            { code: "040215TK", name: "马术运动与管理", description: "研究马术技能和赛事管理，为马术产业服务。", degree: "教育学学士", tags: ["🏥"], isTK: true },
            { code: "040216T", name: "体育康养", description: "研究体育健康养生和康复，为康养产业服务。", degree: "教育学学士", tags: ["📚"], isT: true },
            { code: "040217TK", name: "航空运动", description: "研究航空运动项目和安全管理，为航空体育服务。", degree: "教育学学士", tags: ["🏥"], isTK: true },
            { code: "040218TK", name: "太极拳", description: "研究太极拳理论和技法，传承太极文化，培养太极拳教学和推广人才。", degree: "教育学学士", tags: ["📚", "🌱"], isTK: true, isNew: true }
          ]
        }
      ]
    },
    {
      code: "05",
      name: "文学",
      categoryCount: 3,
      feature: "中外文化，传播传媒",
      color: "#C78D6B",
      categories: [
        {
          code: "0501",
          name: "中国语言文学类",
          majors: [
            { code: "050101", name: "汉语言文学", description: "研究汉语和中国文学的基础学科，培养语言文字运用和文学创作批评能力。", degree: "文学学士", tags: ["📚"] },
            { code: "050102", name: "汉语言", description: "研究汉语理论和语言应用，培养语言文字工作能力。", degree: "文学学士", tags: ["📚"] },
            { code: "050103", name: "汉语国际教育", description: "研究对外汉语教学和文化传播，培养国际汉语教师。", degree: "文学学士", tags: ["📚"] },
            { code: "050104", name: "中国少数民族语言文学", description: "研究少数民族语言和文学，传承民族文化。", degree: "文学学士", tags: ["📚"] },
            { code: "050105", name: "古典文献学", description: "研究古代文献整理和考证，培养古籍整理人才。", degree: "文学学士", tags: ["📚"] },
            { code: "050106T", name: "应用语言学", description: "研究语言应用和语言教学，为语言教育服务。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050107T", name: "秘书学", description: "研究秘书工作和办公管理，培养秘书专业人才。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050108T", name: "中国语言与文化", description: "研究中国语言和文化传承，培养文化传播人才。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050109T", name: "手语翻译", description: "研究手语翻译理论和技能，为聋人沟通服务。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050110T", name: "数字人文", description: "融合人文研究和数字技术，研究人文数据分析和可视化。", degree: "文学学士", tags: ["💻"], isT: true },
            { code: "050111T", name: "中国古典学", description: "研究中国古代经典和文化，培养古典学研究人才。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050112T", name: "汉学与中国学", description: "研究海外汉学和中国文化，为中外文化交流服务。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050113T", name: "应用中文", description: "研究中文应用和中文教育，培养中文应用人才。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050114TK", name: "语言科学", description: "研究语言结构和语言规律，培养语言研究和教学能力。", degree: "文学学士", tags: ["🧪", "🌱"], isTK: true, isNew: true }
          ]
        },
        {
          code: "0502",
          name: "外国语言文学类",
          majors: [
            { code: "050201", name: "英语", description: "培养英语语言能力和跨文化交际能力，可从事翻译、教育、外贸、国际交流等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050202", name: "俄语", description: "培养俄语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050203", name: "德语", description: "培养德语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050204", name: "法语", description: "培养法语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050205", name: "西班牙语", description: "培养西班牙语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050206", name: "阿拉伯语", description: "培养阿拉伯语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050207", name: "日语", description: "培养日语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050208", name: "波斯语", description: "培养波斯语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050209", name: "朝鲜语", description: "培养朝鲜语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050210", name: "菲律宾语", description: "培养菲律宾语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050211", name: "梵语巴利语", description: "研究梵语和巴利语古典文献，为佛教研究和南亚研究服务。", degree: "文学学士", tags: ["📚"] },
            { code: "050212", name: "印度尼西亚语", description: "培养印尼语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050213", name: "印地语", description: "培养印地语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050214", name: "柬埔寨语", description: "培养柬埔寨语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050215", name: "老挝语", description: "培养老挝语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050216", name: "缅甸语", description: "培养缅甸语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050217", name: "马来语", description: "培养马来语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050218", name: "蒙古语", description: "培养蒙古语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050219", name: "僧伽罗语", description: "培养僧伽罗语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050220", name: "泰语", description: "培养泰语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050221", name: "乌尔都语", description: "培养乌尔都语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050222", name: "希伯来语", description: "培养希伯来语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050223", name: "越南语", description: "培养越南语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050224", name: "豪萨语", description: "培养豪萨语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050225", name: "斯瓦希里语", description: "培养斯瓦希里语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050226", name: "阿尔巴尼亚语", description: "培养阿尔巴尼亚语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050227", name: "保加利亚语", description: "培养保加利亚语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050228", name: "波兰语", description: "培养波兰语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050229", name: "捷克语", description: "培养捷克语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050230", name: "斯洛伐克语", description: "培养斯洛伐克语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050231", name: "罗马尼亚语", description: "培养罗马尼亚语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050232", name: "葡萄牙语", description: "培养葡萄牙语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050233", name: "瑞典语", description: "培养瑞典语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050234", name: "塞尔维亚语", description: "培养塞尔维亚语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050235", name: "土耳其语", description: "培养土耳其语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050236", name: "希腊语", description: "培养希腊语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050237", name: "匈牙利语", description: "培养匈牙利语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050238", name: "意大利语", description: "培养意大利语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050239", name: "泰米尔语", description: "培养泰米尔语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050240", name: "普什图语", description: "培养普什图语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050241", name: "世界语", description: "培养世界语语言能力和跨文化交际能力，可从事翻译、国际交流等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050242", name: "孟加拉语", description: "培养孟加拉语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050243", name: "尼泊尔语", description: "培养尼泊尔语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050244", name: "克罗地亚语", description: "培养克罗地亚语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050245", name: "荷兰语", description: "培养荷兰语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050246", name: "芬兰语", description: "培养芬兰语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050247", name: "乌克兰语", description: "培养乌克兰语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050248", name: "挪威语", description: "培养挪威语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050249", name: "丹麦语", description: "培养丹麦语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050250", name: "冰岛语", description: "培养冰岛语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050251", name: "爱尔兰语", description: "培养爱尔兰语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050252", name: "拉脱维亚语", description: "培养拉脱维亚语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050253", name: "立陶宛语", description: "培养立陶宛语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050254", name: "斯洛文尼亚语", description: "培养斯洛文尼亚语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050255", name: "爱沙尼亚语", description: "培养爱沙尼亚语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050256", name: "马耳他语", description: "培养马耳他语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050257", name: "哈萨克语", description: "培养哈萨克语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050258", name: "乌兹别克语", description: "培养乌兹别克语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050259", name: "祖鲁语", description: "培养祖鲁语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050260", name: "拉丁语", description: "研究拉丁语古典文献和西方古典文化，为古典学研究服务。", degree: "文学学士", tags: ["📚"] },
            { code: "050261", name: "翻译", description: "培养翻译理论和实践能力，可从事口笔译、本地化等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050262", name: "商务英语", description: "培养商务英语能力和跨文化商务沟通能力，可从事外贸、商务等工作。", degree: "文学学士", tags: ["📚"] },
            { code: "050263T", name: "阿姆哈拉语", description: "培养阿姆哈拉语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050264T", name: "吉尔吉斯语", description: "培养吉尔吉斯语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050265T", name: "索马里语", description: "培养索马里语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050266T", name: "土库曼语", description: "培养土库曼语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050267T", name: "加泰罗尼亚语", description: "培养加泰罗尼亚语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050268T", name: "约鲁巴语", description: "培养约鲁巴语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050269T", name: "亚美尼亚语", description: "培养亚美尼亚语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050270T", name: "马达加斯加语", description: "培养马达加斯加语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050271T", name: "格鲁吉亚语", description: "培养格鲁吉亚语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050272T", name: "阿塞拜疆语", description: "培养阿塞拜疆语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050273T", name: "阿非利卡语", description: "培养阿非利卡语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050274T", name: "马其顿语", description: "培养马其顿语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050275T", name: "塔吉克语", description: "培养塔吉克语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050276T", name: "茨瓦纳语", description: "培养茨瓦纳语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050277T", name: "恩德贝莱语", description: "培养恩德贝莱语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050278T", name: "科摩罗语", description: "培养科摩罗语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050279T", name: "克里奥尔语", description: "培养克里奥尔语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050280T", name: "绍纳语", description: "培养绍纳语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050281T", name: "提格雷尼亚语", description: "培养提格雷尼亚语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050282T", name: "白俄罗斯语", description: "培养白俄罗斯语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050283T", name: "毛利语", description: "培养毛利语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050284T", name: "汤加语", description: "培养汤加语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050285T", name: "萨摩亚语", description: "培养萨摩亚语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050286T", name: "库尔德语", description: "培养库尔德语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050287T", name: "比斯拉马语", description: "培养比斯拉马语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050288T", name: "达里语", description: "培养达里语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050289T", name: "德顿语", description: "培养德顿语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050290T", name: "迪维希语", description: "培养迪维希语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050291T", name: "斐济语", description: "培养斐济语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050292T", name: "库克群岛毛利语", description: "培养库克群岛毛利语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050293T", name: "隆迪语", description: "培养隆迪语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050294T", name: "卢森堡语", description: "培养卢森堡语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050295T", name: "卢旺达语", description: "培养卢旺达语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050296T", name: "纽埃语", description: "培养纽埃语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050297T", name: "皮金语", description: "培养皮金语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050298T", name: "切瓦语", description: "培养切瓦语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050299T", name: "塞苏陀语", description: "培养塞苏陀语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050200T", name: "桑戈语", description: "培养桑戈语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050300T", name: "语言学", description: "研究语言结构和语言规律，培养语言研究和教学能力。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050301T", name: "塔玛齐格特语", description: "培养塔玛齐格特语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050302T", name: "爪哇语", description: "培养爪哇语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050303T", name: "旁遮普语", description: "培养旁遮普语语言能力和跨文化交际能力，可从事翻译、外贸等工作。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050304TK", name: "区域国别学", description: "研究特定区域和国家的政治经济文化，为对外合作服务。", degree: "文学学士", tags: ["📚"], isTK: true },
            { code: "050305T", name: "法律英语", description: "培养外语能力和跨文化交际能力，可从事翻译、教育、外贸等工作。", degree: "文学学士", tags: ["📚", "🌱"], isT: true, isNew: true },
            { code: "050306TK", name: "计算语言学", description: "培养外语能力和跨文化交际能力，可从事翻译、教育、外贸等工作。", degree: "文学学士", tags: ["💻", "🌱"], isTK: true, isNew: true },
            { code: "050307TK", name: "语言智能", description: "融合语言学和人工智能，研究自然语言处理和智能语言技术。", degree: "文学学士", tags: ["💻", "🌱"], isTK: true, isNew: true }
          ]
        },
        {
          code: "0503",
          name: "新闻传播学类",
          majors: [
            { code: "050301", name: "新闻学", description: "研究新闻传播规律和媒介运作的学科，培养新闻采编、媒体运营和舆论分析能力。", degree: "文学学士", tags: ["📚"] },
            { code: "050302", name: "广播电视学", description: "研究广播电视节目制作和传播，培养广电媒体人才。", degree: "文学学士", tags: ["📚"] },
            { code: "050303", name: "广告学", description: "研究广告策划和创意设计，培养广告行业人才。", degree: "文学学士", tags: ["📚"] },
            { code: "050304", name: "传播学", description: "研究传播理论和传播效果，培养传播策划和分析能力。", degree: "文学学士", tags: ["📚"] },
            { code: "050305", name: "编辑出版学", description: "研究编辑工作和出版管理，培养出版行业人才。", degree: "文学学士", tags: ["📚"] },
            { code: "050306T", name: "网络与新媒体", description: "研究新媒体运营和网络传播，培养新媒体人才。", degree: "文学学士", tags: ["💻"], isT: true },
            { code: "050307T", name: "数字出版", description: "研究数字内容生产和发布，为数字出版产业服务。", degree: "文学学士", tags: ["💻"], isT: true },
            { code: "050308T", name: "时尚传播", description: "研究时尚产业传播和营销，为时尚产业服务。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050309T", name: "国际新闻与传播", description: "研究国际新闻传播和跨文化传播，培养国际传播人才。", degree: "文学学士", tags: ["📚"], isT: true },
            { code: "050310T", name: "会展", description: "研究会展策划和运营管理，为会展产业培养专业人才。", degree: "文学或管理学学士", tags: ["📚"], isT: true }
          ]
        }
      ]
    },
    {
      code: "06",
      name: "历史学",
      categoryCount: 1,
      feature: "鉴古知今，文化遗产",
      color: "#A68B6B",
      categories: [
        {
          code: "0601",
          name: "历史学类",
          majors: [
            { code: "060101", name: "历史学", description: "研究人类社会发展历程的学科，培养史料分析、历史解释和文化传承能力。", degree: "历史学学士", tags: ["📚"] },
            { code: "060102", name: "世界史", description: "研究世界各国历史发展，培养世界历史研究能力。", degree: "历史学学士", tags: ["📚"] },
            { code: "060103", name: "考古学", description: "研究古代遗存和历史文化，培养考古发掘和研究能力。", degree: "历史学学士", tags: ["📚"] },
            { code: "060104", name: "文物与博物馆学", description: "研究文物保护和博物馆管理，培养文博行业人才。", degree: "历史学学士", tags: ["📚"] },
            { code: "060105T", name: "文物保护技术", description: "研究文物保护修复技术，为文化遗产保护服务。", degree: "历史学学士", tags: ["🧪"], isT: true },
            { code: "060106T", name: "外国语言与外国历史", description: "融合外语和历史研究，培养跨文化历史研究能力。", degree: "历史学或文学学士", tags: ["📚"], isT: true },
            { code: "060107T", name: "文化遗产", description: "研究文化遗产保护和利用，为文化遗产事业服务。", degree: "历史学学士", tags: ["📚"], isT: true },
            { code: "060108T", name: "古文字学", description: "研究古代文字和文献，培养古文字研究和释读能力。", degree: "历史学学士", tags: ["📚"], isT: true },
            { code: "060109T", name: "科学史", description: "研究科学发展和科学文化，培养科学史研究和科学传播能力。", degree: "历史学学士", tags: ["🧪"], isT: true }
          ]
        }
      ]
    },
    {
      code: "07",
      name: "理学",
      categoryCount: 12,
      feature: "基础科学，探索自然",
      color: "#6B8E9B",
      categories: [
        {
          code: "0701",
          name: "数学类",
          majors: [
            { code: "070101", name: "数学与应用数学", description: "研究数量关系和空间形式的基础学科，为自然科学、工程技术和社会科学提供数学工具。", degree: "理学学士", tags: ["🧪"] },
            { code: "070102", name: "信息与计算科学", description: "研究信息处理和计算方法，为信息技术服务。", degree: "理学学士", tags: ["🧪", "💻"] },
            { code: "070103T", name: "数理基础科学", description: "研究数学和物理基础理论，培养基础科学研究能力。", degree: "理学学士", tags: ["🧪"], isT: true },
            { code: "070104T", name: "数据计算及应用", description: "研究数据计算方法和应用，为大数据产业服务。", degree: "理学学士", tags: ["🧪", "💻"], isT: true },
            { code: "070105TK", name: "智能计算", description: "融合计算数学和人工智能，研究智能计算理论和应用技术。", degree: "理学学士", tags: ["🧪", "💻", "🌱"], isTK: true, isNew: true }
          ]
        },
        {
          code: "0702",
          name: "物理学类",
          majors: [
            { code: "070201", name: "物理学", description: "研究物质基本结构和运动规律的基础学科，是工程技术、信息技术的重要理论基础。", degree: "理学学士", tags: ["🧪"] },
            { code: "070202", name: "应用物理学", description: "研究物理原理和技术应用，为工程技术提供物理支撑。", degree: "理学学士", tags: ["🧪"] },
            { code: "070203", name: "核物理", description: "研究原子核结构和核反应，为核能和核技术应用服务。", degree: "理学学士", tags: ["🧪"] },
            { code: "070204T", name: "声学", description: "研究声波产生和传播规律，为声学和音频产业服务。", degree: "理学学士", tags: ["🧪"], isT: true },
            { code: "070205T", name: "系统科学与工程", description: "研究系统分析和工程设计，为复杂系统优化服务。", degree: "理学学士", tags: ["🧪"], isT: true },
            { code: "070206T", name: "量子信息科学", description: "研究量子计算和量子通信，为量子科技发展和信息安全服务。", degree: "理学学士", tags: ["🧪", "💻"], isT: true }
          ]
        },
        {
          code: "0703",
          name: "化学类",
          majors: [
            { code: "070301", name: "化学", description: "研究物质组成、结构和变化规律的学科，在材料、医药、能源、环境等领域有广泛应用。", degree: "理学学士", tags: ["🧪"] },
            { code: "070302", name: "应用化学", description: "研究化学原理和技术应用，为化工和材料产业服务。", degree: "理学或工学学士", tags: ["🧪"] },
            { code: "070303T", name: "化学生物学", description: "研究化学和生物学交叉领域，为生物医药服务。", degree: "理学学士", tags: ["🧪"], isT: true },
            { code: "070304T", name: "分子科学与工程", description: "研究分子设计和工程应用，为新材料开发服务。", degree: "理学学士", tags: ["🧪"], isT: true },
            { code: "070305T", name: "能源化学", description: "研究能源转化和储存化学，为新能源产业服务。", degree: "理学学士", tags: ["🧪"], isT: true },
            { code: "070306T", name: "化学测量学与技术", description: "研究化学分析测量技术，为质量检测服务。", degree: "理学学士", tags: ["🧪"], isT: true },
            { code: "070307T", name: "资源化学", description: "研究资源利用和循环化学，为资源高效利用和绿色化学服务。", degree: "理学学士", tags: ["🧪"], isT: true }
          ]
        },
        {
          code: "0704",
          name: "天文学类",
          majors: [
            { code: "070401", name: "天文学", description: "研究天体和宇宙演化，培养天文观测和科学研究能力。", degree: "理学学士", tags: ["🧪"] }
          ]
        },
        {
          code: "0705",
          name: "地理科学类",
          majors: [
            { code: "070501", name: "地理科学", description: "研究地理环境和空间分布，培养地理调查和区域分析能力。", degree: "理学学士", tags: ["🧪"] },
            { code: "070502", name: "自然地理与资源环境", description: "研究自然地理和资源环境，为资源管理服务。", degree: "理学或管理学学士", tags: ["🧪"] },
            { code: "070503", name: "人文地理与城乡规划", description: "研究人文地理和城乡发展，为城乡规划服务。", degree: "理学或管理学学士", tags: ["📚"] },
            { code: "070504", name: "地理信息科学", description: "研究地理信息采集、处理和分析，为空间信息服务。", degree: "理学学士", tags: ["🧪", "💻"] }
          ]
        },
        {
          code: "0706",
          name: "大气科学类",
          majors: [
            { code: "070601", name: "大气科学", description: "研究大气运动和天气变化，为气象预报和气候研究服务。", degree: "理学学士", tags: ["🧪"] },
            { code: "070602", name: "应用气象学", description: "研究气象预报和气候应用，为气象服务。", degree: "理学学士", tags: ["🧪"] },
            { code: "070603T", name: "气象技术与工程", description: "研究气象技术和装备，为气象现代化服务。", degree: "理学或工学学士", tags: ["🧪"], isT: true },
            { code: "070604T", name: "地球系统科学", description: "研究地球各圈层相互作用和系统演化，为地球科学综合研究服务。", degree: "理学学士", tags: ["🧪"], isT: true }
          ]
        },
        {
          code: "0707",
          name: "海洋科学类",
          majors: [
            { code: "070701", name: "海洋科学", description: "研究海洋环境和资源开发，培养海洋调查和科学研究能力。", degree: "理学学士", tags: ["🧪"] },
            { code: "070702", name: "海洋技术", description: "研究海洋探测和开发技术，为海洋产业服务。", degree: "理学或工学学士", tags: ["🧪"] },
            { code: "070703T", name: "海洋资源与环境", description: "研究海洋资源开发和环境保护，为海洋经济服务。", degree: "理学学士", tags: ["🧪"], isT: true },
            { code: "070704T", name: "军事海洋学", description: "研究海洋环境对军事活动影响，为国防建设服务。", degree: "理学学士", tags: ["🏥"], isT: true },
            { code: "070705T", name: "海洋科学与技术", description: "研究海洋科学理论和应用技术，为海洋资源开发和海洋强国建设服务。", degree: "理学学士", tags: ["🧪"], isT: true }
          ]
        },
        {
          code: "0708",
          name: "地球物理学类",
          majors: [
            { code: "070801", name: "地球物理学", description: "研究地球物理场和内部结构，为资源勘探和防灾减灾服务。", degree: "理学学士", tags: ["🧪"] },
            { code: "070802", name: "空间科学与技术", description: "研究空间环境和航天技术，为航天产业服务。", degree: "理学或工学学士", tags: ["🧪"] },
            { code: "070803T", name: "防灾减灾科学与工程", description: "研究灾害预警和减灾技术，为防灾减灾服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "070804TK", name: "行星科学", description: "研究太阳系行星及地外天体的形成演化和物质组成的学科，服务于深空探测和行星科学研究。", degree: "理学学士", tags: ["🧪"], isTK: true }
          ]
        },
        {
          code: "0709",
          name: "地质学类",
          majors: [
            { code: "070901", name: "地质学", description: "研究地球物质和地质过程，培养地质调查和矿产勘探能力。", degree: "理学学士", tags: ["🧪"] },
            { code: "070902", name: "地球化学", description: "研究地球化学过程和元素分布，为资源勘探服务。", degree: "理学学士", tags: ["🧪"] },
            { code: "070903T", name: "地球信息科学与技术", description: "研究地球信息采集和处理，为地球科学服务。", degree: "理学或工学学士", tags: ["🧪"], isT: true },
            { code: "070904T", name: "古生物学", description: "研究古生物化石和生命演化，为地质学和生物学交叉研究服务。", degree: "理学学士", tags: ["🧪"], isT: true }
          ]
        },
        {
          code: "0710",
          name: "生物科学类",
          majors: [
            { code: "071001", name: "生物科学", description: "研究生命现象和生物活动规律的学科，是现代医学、农业、生物技术的基础。", degree: "理学学士", tags: ["🧪"] },
            { code: "071002", name: "生物技术", description: "研究生物技术开发和应用，为生物产业服务。", degree: "理学或工学学士", tags: ["🧪"] },
            { code: "071003", name: "生物信息学", description: "研究生物数据分析和计算，为生命科学研究服务。", degree: "理学或工学学士", tags: ["🧪", "💻"] },
            { code: "071004", name: "生态学", description: "研究生物与环境相互关系，为生态保护服务。", degree: "理学学士", tags: ["🧪"] },
            { code: "071005T", name: "整合科学", description: "融合多学科知识和方法，培养跨学科研究能力。", degree: "理学学士", tags: ["🧪"], isT: true },
            { code: "071006T", name: "神经科学", description: "研究神经系统结构和功能，为脑科学研究和神经疾病治疗服务。", degree: "理学学士", tags: ["🧪"], isT: true }
          ]
        },
        {
          code: "0711",
          name: "心理学类",
          majors: [
            { code: "071101", name: "心理学", description: "研究心理现象和行为规律的学科，在教育、医疗、企业管理等领域有广泛应用。", degree: "理学或教育学学士", tags: ["🧪"] },
            { code: "071102", name: "应用心理学", description: "研究心理学应用和实践，为心理咨询和人力资源服务。", degree: "理学或教育学学士", tags: ["🧪"] },
            { code: "071103TK", name: "心理、脑与认知科学", description: "研究心理过程、脑机制和认知功能，为心理健康和脑科学服务。", degree: "理学学士", tags: ["🧪", "🌱"], isTK: true, isNew: true }
          ]
        },
        {
          code: "0712",
          name: "统计学类",
          majors: [
            { code: "071201", name: "统计学", description: "研究数据收集和分析方法，为决策提供量化依据。", degree: "理学学士", tags: ["🧪"] },
            { code: "071202", name: "应用统计学", description: "研究统计方法应用，为数据分析和决策服务。", degree: "理学学士", tags: ["🧪"] },
            { code: "071203T", name: "生物统计学", description: "研究生物数据统计分析，为生物医学研究服务。", degree: "理学学士", tags: ["🧪"], isT: true },
            { code: "071204T", name: "数据科学", description: "研究数据采集、分析和可视化的跨学科领域，为数据驱动决策服务。", degree: "理学学士", tags: ["🧪", "💻"], isT: true }
          ]
        }
      ]
    },
    {
      code: "08",
      name: "工学",
      categoryCount: 31,
      feature: "工程技术，产业支撑",
      color: "#5A7A8C",
      categories: [
        {
          code: "0801",
          name: "力学类",
          majors: [
            { code: "080101", name: "理论与应用力学", description: "研究力学理论和工程应用，为工程设计服务。", degree: "工学或理学学士", tags: ["🧪"] },
            { code: "080102", name: "工程力学", description: "研究工程结构力学分析和计算，为工程设计提供力学理论支撑。", degree: "工学学士", tags: ["🔧"] }
          ]
        },
        {
          code: "0802",
          name: "机械类",
          majors: [
            { code: "080201", name: "机械工程", description: "研究机械设计和制造技术的传统工科，在智能制造、机器人、航空航天等领域有广泛应用。", degree: "工学学士", tags: ["🔧"] },
            { code: "080202", name: "机械设计制造及其自动化", description: "研究机械设计和制造技术，为制造业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "080203", name: "材料成型及控制工程", description: "研究材料成型工艺和控制技术，为制造业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "080204", name: "机械电子工程", description: "融合机械和电子技术，研究机电一体化系统。", degree: "工学学士", tags: ["🔧"] },
            { code: "080205", name: "工业设计", description: "研究产品设计和用户体验，为制造业创新服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "080206", name: "过程装备与控制工程", description: "研究化工过程装备和控制，为化工产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "080207", name: "车辆工程", description: "研究汽车设计和制造技术，为汽车产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "080208", name: "汽车服务工程", description: "研究汽车服务和运营管理，为汽车后市场服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "080209T", name: "机械工艺技术", description: "研究机械加工工艺和技术，为制造业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080210T", name: "微机电系统工程", description: "研究微机电系统设计和制造，为微电子产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080211T", name: "机电技术教育", description: "研究机电技术教学和培训，培养机电技术人才。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080212T", name: "汽车维修工程教育", description: "研究汽车维修技术和教育，培养维修人才。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080213T", name: "智能制造工程", description: "研究智能制造技术和系统，为制造业转型升级服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "080214T", name: "智能车辆工程", description: "研究智能网联汽车技术，为汽车产业服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "080215T", name: "仿生科学与工程", description: "研究生物仿生原理和工程应用，为创新设计服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080216T", name: "新能源汽车工程", description: "研究新能源汽车技术，为新能源汽车产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080217T", name: "增材制造工程", description: "研究3D打印技术和应用，为先进制造服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080218T", name: "智能交互设计", description: "研究人机交互和智能产品设计，为智能产品服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "080219T", name: "应急装备技术与工程", description: "研究应急救援装备和技术，为应急管理服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080220T", name: "农林智能装备工程", description: "研究农业智能装备和技术，为智慧农业服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "080221T", name: "真空工程与技术", description: "研究真空技术和真空设备，为半导体制造和航空航天服务。", degree: "工学学士", tags: ["🔧", "🌱"], isT: true, isNew: true }
          ]
        },
        {
          code: "0803",
          name: "仪器类",
          majors: [
            { code: "080301", name: "测控技术与仪器", description: "研究测量控制技术和精密仪器，为制造业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "080302T", name: "精密仪器", description: "研究精密仪器设计和制造，为高端装备服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080303T", name: "智能感知工程", description: "研究智能传感器和感知技术，为物联网和智能制造服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true }
          ]
        },
        {
          code: "0804",
          name: "材料类",
          majors: [
            { code: "080401", name: "材料科学与工程", description: "研究材料性能和工程应用，为材料产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "080402", name: "材料物理", description: "研究材料物理性质和机理，为新材料开发服务。", degree: "工学或理学学士", tags: ["🧪"] },
            { code: "080403", name: "材料化学", description: "研究材料化学组成和结构，为新材料开发服务。", degree: "工学或理学学士", tags: ["🧪"] },
            { code: "080404", name: "冶金工程", description: "研究金属冶炼和加工技术，为冶金产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "080405", name: "金属材料工程", description: "研究金属材料性能和加工，为材料产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "080406", name: "无机非金属材料工程", description: "研究无机非金属材料，为建材和电子产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "080407", name: "高分子材料与工程", description: "研究高分子材料和加工，为化工和材料产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "080408", name: "复合材料与工程", description: "研究复合材料和结构设计，为航空航天等产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "080409T", name: "粉体材料科学与工程", description: "研究粉体材料和加工技术，为材料产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080410T", name: "宝石及材料工艺学", description: "研究宝石材料和加工工艺，为珠宝产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080411T", name: "焊接技术与工程", description: "研究焊接工艺和工程技术，为制造业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080412T", name: "功能材料", description: "研究功能材料和特性应用，为高新技术服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080413T", name: "纳米材料与技术", description: "研究纳米材料和制备技术，为纳米科技服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080414T", name: "新能源材料与器件", description: "研究新能源材料和器件，为新能源产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080415T", name: "材料设计科学与工程", description: "研究材料设计和计算，为新材料开发服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080416T", name: "复合材料成型工程", description: "研究复合材料成型工艺，为制造业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080417T", name: "智能材料与结构", description: "研究智能材料和自适应结构，为智能制造服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "080418T", name: "光电信息材料与器件", description: "研究光电材料和器件，为光电子产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080419T", name: "生物材料", description: "研究生物医用材料，为医疗器械产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080420T", name: "材料智能技术", description: "融合材料科学和人工智能，研究智能材料技术。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "080421T", name: "电子信息材料", description: "研究电子信息功能材料，为电子产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080422T", name: "软物质科学与工程", description: "研究软物质材料和性能，为新材料产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080423T", name: "稀土材料科学与工程", description: "研究稀土材料性能和开发应用，为稀土战略资源服务。", degree: "工学学士", tags: ["🔧"], isT: true }
          ]
        },
        {
          code: "0805",
          name: "能源动力类",
          majors: [
            { code: "080501", name: "能源与动力工程", description: "研究能源转换和动力机械，为能源产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "080502T", name: "能源与环境系统工程", description: "研究能源利用和环境保护，为可持续发展服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080503T", name: "新能源科学与工程", description: "研究太阳能、风能等清洁能源开发和利用的学科，服务于碳达峰碳中和目标。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080504T", name: "储能科学与工程", description: "研究储能技术和系统，为能源存储服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080505T", name: "能源服务工程", description: "研究能源系统优化和服务，为能源管理服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080506TK", name: "氢能科学与工程", description: "研究氢能开发和利用，为氢能产业服务。", degree: "工学学士", tags: ["🔧"], isTK: true },
            { code: "080507TK", name: "可持续能源", description: "研究可持续能源技术和政策，为能源转型服务。", degree: "工学学士", tags: ["🔧"], isTK: true },
            { code: "080508T", name: "能源科学与工程", description: "研究能源转换和利用技术，为能源转型和可持续发展服务。", degree: "工学学士", tags: ["🔧", "🌱"], isT: true, isNew: true }
          ]
        },
        {
          code: "0806",
          name: "电气类",
          majors: [
            { code: "080601", name: "电气工程及其自动化", description: "研究电气系统和自动化技术，为电力行业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "080602T", name: "智能电网信息工程", description: "研究智能电网和信息技术，为电力现代化服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "080603T", name: "光源与照明", description: "研究光源技术和照明设计，为照明产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080604T", name: "电气工程与智能控制", description: "研究电气系统和智能控制，为智能制造服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "080605T", name: "电机电器智能化", description: "研究电机电器智能化技术，为电气产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080606T", name: "电缆工程", description: "研究电缆设计和制造技术，为电力行业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080607T", name: "能源互联网工程", description: "研究能源互联网技术和应用，为能源互联网服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "080608TK", name: "智慧能源工程", description: "研究智慧能源系统和技术，为能源智能化服务。", degree: "工学学士", tags: ["🔧", "💻"], isTK: true },
            { code: "080609T", name: "电动载运工程", description: "研究电动载运工具和技术，为电动交通服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080610TK", name: "大功率半导体科学与工程", description: "研究高压大功率半导体器件的设计、制造与应用，服务于新能源汽车、轨道交通和智能电网等战略性产业。", degree: "工学学士", tags: ["🔧"], isTK: true }
          ]
        },
        {
          code: "0807",
          name: "电子信息类",
          majors: [
            { code: "080701", name: "电子信息工程", description: "研究电子系统和信息传输技术的学科，涵盖通信、集成电路、物联网等领域。", degree: "工学或理学学士", tags: ["🔧", "💻"] },
            { code: "080702", name: "电子科学与技术", description: "研究电子器件和电路设计，为电子产业服务。", degree: "工学或理学学士", tags: ["🔧"] },
            { code: "080704", name: "微电子科学与工程", description: "研究微电子器件和集成电路，为芯片产业服务。", degree: "工学或理学学士", tags: ["🔧"] },
            { code: "080705", name: "光电信息科学与工程", description: "研究光电技术和信息处理，为光电子产业服务。", degree: "工学或理学学士", tags: ["🔧"] },
            { code: "080706", name: "信息工程", description: "研究信息系统设计和集成，为信息产业服务。", degree: "工学学士", tags: ["💻"] },
            { code: "080707T", name: "广播电视工程", description: "研究广播电视技术和系统，为广电行业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080708T", name: "水声工程", description: "研究水下声学技术和应用，为海洋探测服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080709T", name: "电子封装技术", description: "研究电子器件封装技术，为电子制造服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080710T", name: "集成电路设计与集成系统", description: "研究芯片设计和集成电路制造的学科，是信息技术产业的核心。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "080711T", name: "医学信息工程", description: "研究医学信息系统和技术，为医疗信息化服务。", degree: "工学学士", tags: ["💻"], isT: true },
            { code: "080712T", name: "电磁场与无线技术", description: "研究电磁场理论和无线通信，为通信产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080713T", name: "电波传播与天线", description: "研究电波传播和天线设计，为无线通信服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080714T", name: "电子信息科学与技术", description: "研究电子信息基础理论和技术，为电子产业服务。", degree: "工学或理学学士", tags: ["🔧"], isT: true },
            { code: "080715T", name: "电信工程及管理", description: "研究电信系统和工程管理，为通信行业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080716T", name: "应用电子技术教育", description: "研究电子技术教学和培训，培养电子技术人才。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080717T", name: "人工智能", description: "研究智能系统设计和机器学习算法的学科，是当前科技发展的前沿领域。", degree: "工学学士", tags: ["💻"], isT: true },
            { code: "080718T", name: "海洋信息工程", description: "研究海洋信息采集和处理，为海洋开发服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080719T", name: "柔性电子学", description: "研究柔性电子器件和技术，为可穿戴设备服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080720T", name: "智能测控工程", description: "研究智能测量和控制技术，为智能制造服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "080721T", name: "智能视觉工程", description: "研究计算机视觉和图像处理，为人工智能服务。", degree: "工学学士", tags: ["💻"], isT: true },
            { code: "080722T", name: "智能视听工程", description: "研究智能音视频处理和传播技术的学科，服务于新媒体和数字内容产业。", degree: "工学学士", tags: ["💻"], isT: true },
            { code: "080723TK", name: "半导体工艺与装备", description: "研究半导体制造工艺和关键装备，为芯片产业自主可控服务。", degree: "工学学士", tags: ["🔧", "🌱"], isTK: true, isNew: true }
          ]
        },
        {
          code: "0808",
          name: "自动化类",
          majors: [
            { code: "080801", name: "自动化", description: "研究自动控制和智能系统，为工业自动化和智能制造服务。", degree: "工学学士", tags: ["🔧", "💻"] },
            { code: "080802T", name: "轨道交通信号与控制", description: "研究轨道交通信号系统，为铁路交通服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080803T", name: "机器人工程", description: "研究机器人系统设计、控制和应用的学科，是智能制造的核心技术领域。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "080804T", name: "邮政工程", description: "研究邮政系统和物流技术，为邮政行业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080805T", name: "核电技术与控制工程", description: "研究核电站技术和控制，为核电产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "080806T", name: "智能装备与系统", description: "研究智能装备设计和集成，为智能制造服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "080807T", name: "工业智能", description: "研究工业人工智能应用，为工业智能化服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "080808T", name: "智能工程与创意设计", description: "融合智能技术和创意设计，培养跨学科创新设计人才。", degree: "工学学士", tags: ["🔧", "💻"], isT: true }
          ]
        },
        {
          code: "0809",
          name: "计算机类",
          majors: [
            { code: "080901", name: "计算机科学与技术", description: "研究计算机系统和信息处理技术的核心学科，培养编程开发和系统架构能力。", degree: "工学或理学学士", tags: ["💻"] },
            { code: "080902", name: "软件工程", description: "研究软件开发和项目管理的工程学科，培养软件设计、测试和工程管理能力。", degree: "工学学士", tags: ["💻"] },
            { code: "080903", name: "网络工程", description: "研究网络设计和网络安全，为网络建设服务。", degree: "工学学士", tags: ["💻"] },
            { code: "080904K", name: "信息安全", description: "研究信息安全和密码技术，为网络安全服务。", degree: "工学或理学或管理学学士", tags: ["💻"], isK: true },
            { code: "080905", name: "物联网工程", description: "研究物联网技术和应用，为物联网产业服务。", degree: "工学学士", tags: ["💻"] },
            { code: "080906", name: "数字媒体技术", description: "研究数字媒体处理和制作，为数字内容产业服务。", degree: "工学学士", tags: ["💻"] },
            { code: "080907T", name: "智能科学与技术", description: "研究人工智能理论和技术，为AI产业服务。", degree: "工学或理学学士", tags: ["💻"], isT: true },
            { code: "080908T", name: "空间信息与数字技术", description: "研究空间信息采集和数字处理，为地理信息服务。", degree: "工学学士", tags: ["💻"], isT: true },
            { code: "080909T", name: "电子与计算机工程", description: "融合电子和计算机技术，培养复合型人才。", degree: "工学学士", tags: ["💻"], isT: true },
            { code: "080910T", name: "数据科学与大数据技术", description: "研究数据采集、存储、分析和可视化的学科，服务于各行各业的数字化转型。", degree: "工学或理学学士", tags: ["💻"], isT: true },
            { code: "080911TK", name: "网络空间安全", description: "研究网络安全防护和信息对抗技术的学科，保障国家网络安全和信息安全。", degree: "工学学士", tags: ["💻"], isTK: true },
            { code: "080912T", name: "新媒体技术", description: "研究新媒体技术和平台开发，为新媒体产业服务。", degree: "工学学士", tags: ["💻"], isT: true },
            { code: "080913T", name: "电影制作", description: "研究电影拍摄和后期制作，为影视产业服务。", degree: "工学学士", tags: ["💻"], isT: true },
            { code: "080914TK", name: "保密技术", description: "研究信息保密和安全技术，为国家安全服务。", degree: "工学学士", tags: ["💻"], isTK: true },
            { code: "080915T", name: "服务科学与工程", description: "研究服务系统设计和优化，为服务业服务。", degree: "工学学士", tags: ["💻"], isT: true },
            { code: "080916T", name: "虚拟现实技术", description: "研究VR/AR技术和应用，为虚拟现实产业服务。", degree: "工学学士", tags: ["💻"], isT: true },
            { code: "080917T", name: "区块链工程", description: "研究区块链技术和应用，为数字经济服务。", degree: "工学学士", tags: ["💻"], isT: true },
            { code: "080918TK", name: "密码科学与技术", description: "研究密码理论和密码工程，为信息安全服务。", degree: "工学学士", tags: ["💻"], isTK: true },
            { code: "080919T", name: "工业软件", description: "研究工业领域专用软件开发和应用，为智能制造和工业数字化转型服务。", degree: "工学学士", tags: ["💻"], isT: true }
          ]
        },
        {
          code: "0810",
          name: "土木类",
          majors: [
            { code: "081001", name: "土木工程", description: "研究建筑结构和基础设施建设的学科，是城镇化建设和工程建设的支柱专业。", degree: "工学学士", tags: ["🔧"] },
            { code: "081002", name: "建筑环境与能源应用工程", description: "研究建筑环境和节能技术，为绿色建筑服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081003", name: "给排水科学与工程", description: "研究给排水系统和工程设计，为市政建设服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081004", name: "建筑电气与智能化", description: "研究建筑电气和智能系统，为智能建筑服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081005T", name: "城市地下空间工程", description: "研究地下空间开发和利用，为城市建设服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081006T", name: "道路桥梁与渡河工程", description: "研究道路桥梁设计和施工，为交通建设服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081007T", name: "铁道工程", description: "研究铁路线路和工程设计，为铁路建设服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081008T", name: "智能建造", description: "融合土木工程与信息技术的交叉学科，研究智能建筑和数字建造技术。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "081009T", name: "土木、水利与海洋工程", description: "研究土木水利和海洋工程，为工程建设服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081010T", name: "土木、水利与交通工程", description: "研究土木水利和交通工程，为工程建设服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081011T", name: "城市水系统工程", description: "研究城市水务系统和管理，为城市供水服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081012T", name: "智能建造与智慧交通", description: "研究智能建造和交通技术，为智慧交通服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "081013T", name: "工程软件", description: "研究工程领域软件开发，为工程建设服务。", degree: "工学学士", tags: ["💻"], isT: true },
            { code: "081014T", name: "城市更新", description: "研究城市空间改造和功能提升，为城市可持续发展服务。", degree: "工学学士", tags: ["🔧", "🌱"], isT: true, isNew: true }
          ]
        },
        {
          code: "0811",
          name: "水利类",
          majors: [
            { code: "081101", name: "水利水电工程", description: "研究水资源开发和水利工程，为防洪抗旱和水资源管理服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081102", name: "水文与水资源工程", description: "研究水文规律和水资源管理，为水利建设服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081103", name: "港口航道与海岸工程", description: "研究港口航道和海岸工程，为水运建设服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081104T", name: "水务工程", description: "研究水务管理和工程技术，为城市水务服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081105T", name: "水利科学与工程", description: "研究水利理论和工程技术，为水利建设服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081106T", name: "智慧水利", description: "融合水利和信息技术，研究智能水务和数字水利系统。", degree: "工学学士", tags: ["🔧", "💻"], isT: true }
          ]
        },
        {
          code: "0812",
          name: "测绘类",
          majors: [
            { code: "081201", name: "测绘工程", description: "研究地理信息采集和处理，为城乡规划和资源管理提供数据支撑。", degree: "工学学士", tags: ["🔧"] },
            { code: "081202", name: "遥感科学与技术", description: "研究遥感技术和数据处理，为资源调查服务。", degree: "工学学士", tags: ["🔧", "💻"] },
            { code: "081203T", name: "导航工程", description: "研究导航定位技术和系统，为导航产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081204T", name: "地理国情监测", description: "研究地理国情调查和监测，为国情分析服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081205T", name: "地理空间信息工程", description: "研究地理空间信息采集和处理，为地理信息服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "081206TK", name: "时空信息工程", description: "研究时空数据的采集、处理与智能分析的学科，融合卫星导航、遥感与地理信息技术，服务于智慧城市和精准定位领域。", degree: "工学学士", tags: ["🔧", "💻"], isTK: true }
          ]
        },
        {
          code: "0813",
          name: "化工与制药类",
          majors: [
            { code: "081301", name: "化学工程与工艺", description: "研究化学工程和药物制造，为化工和医药产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081302", name: "制药工程", description: "研究药物生产和工艺设计，为制药产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081303T", name: "资源循环科学与工程", description: "研究资源循环利用技术，为循环经济服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081304T", name: "能源化学工程", description: "研究能源化工技术和工艺，为能源产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081305T", name: "化学工程与工业生物工程", description: "研究化工和生物工程交叉技术，为生物化工服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081306T", name: "化工安全工程", description: "研究化工安全技术和管理，为安全生产服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081307T", name: "涂料工程", description: "研究涂料配方和生产工艺，为涂料产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081308T", name: "精细化工", description: "研究精细化学品和技术，为精细化工产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081309T", name: "智能分子工程", description: "研究分子设计和智能合成，为新材料和药物开发服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true }
          ]
        },
        {
          code: "0814",
          name: "地质类",
          majors: [
            { code: "081401", name: "地质工程", description: "研究地质工程和资源勘探，为矿产开发和工程建设服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081402", name: "勘查技术与工程", description: "研究地质勘查技术和方法，为资源勘探服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081403K", name: "资源勘查工程", description: "研究矿产资源勘查和评价，为矿产开发服务。", degree: "工学学士", tags: ["🔧"], isK: true },
            { code: "081404T", name: "地下水科学与工程", description: "研究地下水资源和工程，为水资源管理服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081405T", name: "旅游地学与规划工程", description: "研究旅游地质和景区规划，为旅游开发服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081406T", name: "智能地球探测", description: "研究地球物理探测技术，为资源勘探服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "081407T", name: "资源环境大数据工程", description: "研究资源环境数据采集和分析，为环境治理提供数据支撑。", degree: "工学学士", tags: ["🔧", "💻"], isT: true }
          ]
        },
        {
          code: "0815",
          name: "矿业类",
          majors: [
            { code: "081501", name: "采矿工程", description: "研究矿产开发和资源利用，为能源和原材料产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081502", name: "石油工程", description: "研究石油开采和工程技术，为石油产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081503", name: "矿物加工工程", description: "研究矿物分选和加工技术，为矿业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081504", name: "油气储运工程", description: "研究油气储存和运输技术，为能源输送服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081505T", name: "矿物资源工程", description: "研究矿产资源开发和管理，为矿业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081506T", name: "海洋油气工程", description: "研究海洋油气开发技术，为海洋能源服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081507T", name: "智能采矿工程", description: "研究智能化采矿技术，为矿业现代化服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "081508TK", name: "碳储科学与工程", description: "研究碳捕集和储存技术，为碳中和服务。", degree: "工学学士", tags: ["🔧"], isTK: true },
            { code: "081509TK", name: "稀土科学与工程", description: "研究稀土资源开发和稀土材料，为国家战略资源服务。", degree: "工学学士", tags: ["🔧", "🌱"], isTK: true, isNew: true }
          ]
        },
        {
          code: "0816",
          name: "纺织类",
          majors: [
            { code: "081601", name: "纺织工程", description: "研究纺织工艺和工程技术，为纺织产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081602", name: "服装设计与工程", description: "研究服装设计和生产工艺，为服装产业服务。", degree: "工学或艺术学学士", tags: ["🔧"] },
            { code: "081603T", name: "非织造材料与工程", description: "研究非织造材料和技术，为产业用纺织品服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081604T", name: "服装设计与工艺教育", description: "研究服装技术教育和培训，培养服装技术人才。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081605T", name: "丝绸设计与工程", description: "研究丝绸设计和生产工艺，为丝绸产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081606T", name: "纤维科学与智能制造", description: "研究纤维材料科学和智能制造技术，为纺织产业升级服务。", degree: "工学学士", tags: ["🔧", "🌱"], isT: true, isNew: true }
          ]
        },
        {
          code: "0817",
          name: "轻工类",
          majors: [
            { code: "081701", name: "轻化工程", description: "研究轻工业化学加工技术，为轻工产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081702", name: "包装工程", description: "研究包装设计和材料，为包装产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081703", name: "印刷工程", description: "研究印刷技术和工艺，为印刷产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081704T", name: "香料香精技术与工程", description: "研究香料香精配方和工艺，为日化产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081705T", name: "化妆品技术与工程", description: "研究化妆品配方和生产，为化妆品产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081706TK", name: "生物质能源与材料", description: "研究生物质能源和材料，为绿色产业服务。", degree: "工学学士", tags: ["🔧"], isTK: true },
            { code: "081707T", name: "智能包装工程", description: "融合包装工程和智能技术，研究智能包装设计和功能包装。", degree: "工学学士", tags: ["🔧", "💻"], isT: true }
          ]
        },
        {
          code: "0818",
          name: "交通运输类",
          majors: [
            { code: "081801", name: "交通运输", description: "研究交通运输组织和管理，为交通行业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081802", name: "交通工程", description: "研究交通规划和工程设计，为交通建设服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081803K", name: "航海技术", description: "研究船舶驾驶和航行技术，为航运业服务。", degree: "工学学士", tags: ["🏥"], isK: true },
            { code: "081804K", name: "轮机工程", description: "研究船舶动力装置和维护，为航运业服务。", degree: "工学学士", tags: ["🏥"], isK: true },
            { code: "081805K", name: "飞行技术", description: "研究飞机驾驶和飞行技术，为航空运输服务。", degree: "工学学士", tags: ["🏥"], isK: true },
            { code: "081806T", name: "交通设备与控制工程", description: "研究交通设备和控制系统，为智能交通服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081807T", name: "救助与打捞工程", description: "研究海上救助和打捞技术，为海上安全服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081808TK", name: "船舶电子电气工程", description: "研究船舶电子电气系统，为船舶制造服务。", degree: "工学学士", tags: ["🔧"], isTK: true },
            { code: "081809T", name: "轨道交通电气与控制", description: "研究轨道交通电气系统，为铁路交通服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081810T", name: "邮轮工程与管理", description: "研究邮轮设计和管理，为邮轮产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081811T", name: "智慧交通", description: "研究智能交通系统和技术，为交通智能化服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "081812T", name: "智能运输工程", description: "研究智能运输系统和技术，为物流智能化服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "081813T", name: "交通能源融合工程", description: "研究交通和能源系统融合技术，为绿色交通和能源转型服务。", degree: "工学学士", tags: ["🔧", "🌱"], isT: true, isNew: true }
          ]
        },
        {
          code: "0819",
          name: "海洋工程类",
          majors: [
            { code: "081901", name: "船舶与海洋工程", description: "研究船舶设计和海洋工程，为造船业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "081902T", name: "海洋工程与技术", description: "研究海洋工程装备和技术，为海洋开发服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081903T", name: "海洋资源开发技术", description: "研究海洋资源开发技术，为海洋经济服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "081904T", name: "海洋机器人", description: "研究海洋机器人和智能装备，为海洋探测服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "081905T", name: "智慧海洋技术", description: "研究海洋信息技术和智能应用，为智慧海洋服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "081906T", name: "智能海洋装备", description: "研究海洋工程装备和技术，为海洋开发和利用服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "081907T", name: "海洋智能与无人技术", description: "研究海洋智能装备和无人系统，为海洋开发和海洋安全服务。", degree: "工学学士", tags: ["🔧", "💻", "🌱"], isT: true, isNew: true }
          ]
        },
        {
          code: "0820",
          name: "航空航天类",
          majors: [
            { code: "082001", name: "航空航天工程", description: "研究航空航天器总体设计，为航空航天产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082002", name: "飞行器设计与工程", description: "研究飞行器结构设计，为航空产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082003", name: "飞行器制造工程", description: "研究飞行器制造工艺，为航空制造服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082004", name: "飞行器动力工程", description: "研究航空发动机设计，为航空动力服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082005", name: "飞行器环境与生命保障工程", description: "研究飞行器环境控制，为载人航天服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082006T", name: "飞行器质量与可靠性", description: "研究飞行器质量管理和可靠性，为航空质量服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082007T", name: "飞行器适航技术", description: "研究飞行器适航审定技术，为航空安全服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082008T", name: "飞行器控制与信息工程", description: "研究飞行器控制和信息系统，为航空电子服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "082009T", name: "无人驾驶航空器系统工程", description: "研究无人机系统设计，为无人机产业服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "082010T", name: "智能飞行器技术", description: "研究智能飞行器和自主控制，为航空智能化服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "082011T", name: "空天智能电推进技术", description: "研究空天飞行器电推进技术，为航空航天动力系统服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true }
          ]
        },
        {
          code: "0821",
          name: "兵器类",
          majors: [
            { code: "082101", name: "武器系统与工程", description: "研究武器系统设计，为国防建设服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082102", name: "武器发射工程", description: "研究武器发射技术，为国防建设服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082103", name: "探测制导与控制技术", description: "研究探测制导技术，为精确打击服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082104", name: "弹药工程与爆炸技术", description: "研究弹药设计和爆炸技术，为国防建设服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082105", name: "特种能源技术与工程", description: "研究特种能源技术，为国防建设服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082106", name: "装甲车辆工程", description: "研究装甲车辆设计，为国防建设服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082107", name: "信息对抗技术", description: "研究信息对抗技术，为网络安全服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082108T", name: "智能无人系统技术", description: "研究无人系统智能控制和自主决策，为国防和民用无人装备服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true }
          ]
        },
        {
          code: "0822",
          name: "核工程类",
          majors: [
            { code: "082201", name: "核工程与核技术", description: "研究核能开发和核技术应用，为核电产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082202", name: "辐射防护与核安全", description: "研究辐射防护技术，为核安全服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082203", name: "工程物理", description: "研究核物理工程技术，为核技术应用服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082204", name: "核化工与核燃料工程", description: "研究核燃料循环和核化工技术，为核能和平利用服务。", degree: "工学学士", tags: ["🔧"] }
          ]
        },
        {
          code: "0823",
          name: "农业工程类",
          majors: [
            { code: "082301", name: "农业工程", description: "研究农业机械化和信息化，为现代农业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082302", name: "农业机械化及其自动化", description: "研究农业机械和自动化技术，为农业现代化服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082303", name: "农业电气化", description: "研究农业电气技术，为农业电气化服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082304", name: "农业建筑环境与能源工程", description: "研究农业建筑和能源，为农业设施服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082305", name: "农业水利工程", description: "研究农业灌溉和排水，为农业生产服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082306T", name: "土地整治工程", description: "研究土地整理和复垦，为土地管理服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082307T", name: "智能制造与机器人", description: "研究农业机械化和信息化，为现代农业服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "082308T", name: "农业机器人", description: "研究农业机器人和智能装备，为智慧农业和农业现代化服务。", degree: "工学学士", tags: ["🔧", "💻", "🌱"], isT: true, isNew: true }
          ]
        },
        {
          code: "0824",
          name: "林业工程类",
          majors: [
            { code: "082401", name: "森林工程", description: "研究森林采运和工程技术，为林业生产服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082402", name: "木材科学与工程", description: "研究木材加工和利用，为木材产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082403", name: "林产化工", description: "研究林产品化学加工，为林产工业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082404T", name: "家具设计与工程", description: "研究家具设计和制造，为家具产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082405T", name: "木结构建筑与材料", description: "研究木结构建筑设计和木材材料，为绿色建筑和低碳建筑服务。", degree: "工学学士", tags: ["🔧"], isT: true }
          ]
        },
        {
          code: "0825",
          name: "环境科学与工程类",
          majors: [
            { code: "082501", name: "环境科学与工程", description: "研究环境保护和污染治理的学科，服务于生态文明建设和可持续发展。", degree: "工学学士", tags: ["🔧"] },
            { code: "082502", name: "环境工程", description: "研究环境工程技术，为污染治理服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082503", name: "环境科学", description: "研究环境科学理论，为环境管理提供科学依据。", degree: "工学或理学学士", tags: ["🧪"] },
            { code: "082504", name: "环境生态工程", description: "研究生态修复工程技术，为生态建设服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082505T", name: "环保设备工程", description: "研究环保设备设计和制造，为环保产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082506T", name: "资源环境科学", description: "研究资源环境综合管理，为可持续发展服务。", degree: "工学或理学学士", tags: ["🧪"], isT: true },
            { code: "082507T", name: "水质科学与技术", description: "研究水质分析检测和处理技术，为水环境保护和饮用水安全服务。", degree: "工学学士", tags: ["🔧"], isT: true }
          ]
        },
        {
          code: "0826",
          name: "生物医学工程类",
          majors: [
            { code: "082601", name: "生物医学工程", description: "研究生物医学技术和器械，为医疗健康服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082602T", name: "康复工程", description: "研究康复辅助器具和康复技术，为残疾人和老年人康复服务。", degree: "工学学士", tags: ["🔧"], isT: true }
          ]
        },
        {
          code: "0827",
          name: "食品科学与工程类",
          majors: [
            { code: "082701", name: "食品科学与工程", description: "研究食品加工、安全和营养的学科，保障食品安全和公众健康。", degree: "工学学士", tags: ["🔧"] },
            { code: "082702", name: "食品质量与安全", description: "研究食品安全检测和控制，为食品安全服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082703", name: "粮食工程", description: "研究粮食加工和储藏，为粮食产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082704", name: "乳品工程", description: "研究乳制品加工技术，为乳品产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082705", name: "酿酒工程", description: "研究酿酒技术和工艺，为酿酒产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082706T", name: "葡萄与葡萄酒工程", description: "研究葡萄种植和葡萄酒酿造，为葡萄酒产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082707T", name: "食品营养与检验教育", description: "研究食品营养和检验技术，培养食品检验人才。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082708T", name: "烹饪与营养教育", description: "研究烹饪技术和营养搭配，培养烹饪教育人才。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082709T", name: "食品安全与检测", description: "研究食品安全检测技术，为食品安全服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082710T", name: "食品营养与健康", description: "研究食品营养和健康促进，为健康产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082711T", name: "食用菌科学与工程", description: "研究食用菌栽培和加工，为食用菌产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082712T", name: "白酒酿造工程", description: "研究白酒酿造技术，为白酒产业服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082713T", name: "生物制造", description: "融合生物技术和制造工程，研究生物基产品制造和生物加工技术。", degree: "工学学士", tags: ["🔧", "🌱"], isT: true, isNew: true }
          ]
        },
        {
          code: "0828",
          name: "建筑类",
          majors: [
            { code: "082801", name: "建筑学", description: "研究建筑设计和城市规划的学科，融合工程技术与人文艺术，培养建筑设计人才。", degree: "工学学士", tags: ["🔧"] },
            { code: "082802", name: "城乡规划", description: "研究城乡空间规划和发展，为城乡建设服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082803", name: "风景园林", description: "研究风景园林设计和生态规划，为园林建设服务。", degree: "工学或艺术学学士", tags: ["🔧"] },
            { code: "082804T", name: "历史建筑保护工程", description: "研究历史建筑保护和修复，为文化遗产服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082805T", name: "人居环境科学与技术", description: "研究人居环境优化，为城市规划服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082806T", name: "城市设计", description: "研究城市空间设计，为城市发展服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082807T", name: "智慧建筑与建造", description: "研究智能建筑技术，为建筑智能化服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "082808T", name: "智慧景观营造", description: "融合风景园林和信息技术，研究智慧景观设计和营造技术。", degree: "工学学士", tags: ["🔧", "🌱"], isT: true, isNew: true }
          ]
        },
        {
          code: "0829",
          name: "安全科学与工程类",
          majors: [
            { code: "082901", name: "安全工程", description: "研究安全技术和风险管理，为安全生产服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "082902T", name: "应急技术与管理", description: "研究应急救援技术和管理，为应急管理服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082903T", name: "职业卫生工程", description: "研究职业健康防护技术，为职业安全服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "082904T", name: "安全生产监管", description: "研究安全生产监督和管理技术，为安全生产和应急管理服务。", degree: "工学学士", tags: ["🔧"], isT: true }
          ]
        },
        {
          code: "0830",
          name: "生物工程类",
          majors: [
            { code: "083001", name: "生物工程", description: "研究生物技术开发和工程应用，为生物产业服务。", degree: "工学学士", tags: ["🔧"] },
            { code: "083002T", name: "生物制药", description: "研究生物药物开发和生产，为生物医药服务。", degree: "工学学士", tags: ["🔧"], isT: true },
            { code: "083003T", name: "合成生物学", description: "研究生物系统设计和合成，为生物制造和生物医药服务。", degree: "工学学士", tags: ["🔧"], isT: true }
          ]
        },
        {
          code: "0831",
          name: "公安技术类",
          majors: [
            { code: "083101K", name: "刑事科学技术", description: "研究刑事技术鉴定，为司法实践服务。", degree: "工学学士", tags: ["🏥"], isK: true },
            { code: "083102K", name: "消防工程", description: "研究消防技术和工程，为消防安全服务。", degree: "工学学士", tags: ["🏥"], isK: true },
            { code: "083103TK", name: "交通管理工程", description: "研究交通管理和控制，为交通安全服务。", degree: "工学学士", tags: ["🏥"], isTK: true },
            { code: "083104TK", name: "安全防范工程", description: "研究安全防范技术，为公共安全服务。", degree: "工学学士", tags: ["🏥"], isTK: true },
            { code: "083105TK", name: "公安视听技术", description: "研究公安视听技术，为案件侦破服务。", degree: "工学学士", tags: ["🏥"], isTK: true },
            { code: "083106TK", name: "抢险救援指挥与技术", description: "研究抢险救援技术，为应急救援服务。", degree: "工学学士", tags: ["🏥"], isTK: true },
            { code: "083107TK", name: "火灾勘查", description: "研究火灾原因调查，为火灾预防服务。", degree: "工学学士", tags: ["🏥"], isTK: true },
            { code: "083108TK", name: "网络安全与执法", description: "研究网络安全和执法技术，为网络治理服务。", degree: "工学学士", tags: ["🏥"], isTK: true },
            { code: "083109TK", name: "核生化消防", description: "研究核生化事故处置，为特殊消防服务。", degree: "工学学士", tags: ["🏥"], isTK: true },
            { code: "083110TK", name: "海警舰艇指挥与技术", description: "研究海警舰艇指挥，为海警执法服务。", degree: "工学学士", tags: ["🏥"], isTK: true },
            { code: "083111TK", name: "数据警务技术", description: "研究警务数据分析，为智慧警务服务。", degree: "工学学士", tags: ["🏥"], isTK: true },
            { code: "083112TK", name: "食品药品环境犯罪侦查技术", description: "研究食品药品和环境领域犯罪侦查方法与检验技术的学科，培养具备司法鉴定和执法办案能力的公安专业人才。", degree: "工学学士", tags: ["🏥"], isTK: true }
          ]
        }
      ]
    },
    {
      code: "09",
      name: "农学",
      categoryCount: 7,
      feature: "乡村振兴，智慧农业",
      color: "#7A9B6B",
      categories: [
        {
          code: "0901",
          name: "植物生产类",
          majors: [
            { code: "090101", name: "农学", description: "研究作物栽培和遗传育种，为农业生产服务。", degree: "农学学士", tags: ["🔧"] },
            { code: "090102", name: "园艺", description: "研究果树蔬菜花卉栽培，为园艺产业服务。", degree: "农学学士", tags: ["🔧"] },
            { code: "090103", name: "植物保护", description: "研究植物病虫害防治，为农业植保服务。", degree: "农学学士", tags: ["🔧"] },
            { code: "090104", name: "植物科学与技术", description: "研究植物科学和技术，为农业科研服务。", degree: "农学学士", tags: ["🔧"] },
            { code: "090105", name: "种子科学与工程", description: "研究种子生产和加工，为种业发展服务。", degree: "农学学士", tags: ["🔧"] },
            { code: "090106", name: "设施农业科学与工程", description: "研究设施农业技术，为现代农业服务。", degree: "农学或工学学士", tags: ["🔧"] },
            { code: "090107T", name: "茶学", description: "研究茶树栽培和茶叶加工，为茶产业服务。", degree: "农学学士", tags: ["🔧"], isT: true },
            { code: "090108T", name: "烟草", description: "研究烟草栽培和加工，为烟草产业服务。", degree: "农学学士", tags: ["🔧"], isT: true },
            { code: "090109T", name: "应用生物科学", description: "研究生物技术应用，为生物产业服务。", degree: "农学或理学学士", tags: ["🧪"], isT: true },
            { code: "090110T", name: "农艺教育", description: "研究农艺技术教育，培养农业技术人才。", degree: "农学学士", tags: ["📚"], isT: true },
            { code: "090111T", name: "园艺教育", description: "研究园艺技术教育，培养园艺技术人才。", degree: "农学学士", tags: ["📚"], isT: true },
            { code: "090112T", name: "智慧农业", description: "研究农业智能化技术，为智慧农业服务。", degree: "农学学士", tags: ["🔧", "💻"], isT: true },
            { code: "090113T", name: "菌物科学与工程", description: "研究菌物栽培和加工，为菌物产业服务。", degree: "农学学士", tags: ["🔧"], isT: true },
            { code: "090114T", name: "农药化肥", description: "研究农药化肥使用和管理，为农业投入品服务。", degree: "农学学士", tags: ["🔧"], isT: true },
            { code: "090115T", name: "生物农药科学与工程", description: "研究生物农药开发，为绿色农业服务。", degree: "农学学士", tags: ["🔧"], isT: true },
            { code: "090116TK", name: "生物育种科学", description: "研究作物栽培和植物保护，为农业生产服务。", degree: "农学学士", tags: ["🧪"], isTK: true },
            { code: "090117TK", name: "生物育种技术", description: "运用基因编辑、分子标记和智能育种等现代技术培育动植物新品种的学科，服务于国家种业安全和粮食安全战略。", degree: "农学学士", tags: ["🧪"], isTK: true }
          ]
        },
        {
          code: "0902",
          name: "自然保护与环境生态类",
          majors: [
            { code: "090201", name: "农业资源与环境", description: "研究农业资源和环境保护，为可持续农业服务。", degree: "农学学士", tags: ["🔧"] },
            { code: "090202", name: "野生动物与自然保护区管理", description: "研究野生动物保护和自然保护管理，为生态保护服务。", degree: "农学学士", tags: ["🔧"] },
            { code: "090203", name: "水土保持与荒漠化防治", description: "研究水土保持技术，为生态建设服务。", degree: "农学学士", tags: ["🔧"] },
            { code: "090204T", name: "生物质科学与工程", description: "研究生物质资源利用，为绿色能源服务。", degree: "农学学士", tags: ["🔧"], isT: true },
            { code: "090205T", name: "土地科学与技术", description: "研究土地资源管理和技术，为土地管理服务。", degree: "农学学士", tags: ["🔧"], isT: true },
            { code: "090206T", name: "湿地保护与恢复", description: "研究湿地保护和生态修复，为湿地保护服务。", degree: "农学学士", tags: ["🔧"], isT: true },
            { code: "090207T", name: "国家公园建设与管理", description: "研究生态保护和环境治理，为生态文明建设服务。", degree: "农学学士", tags: ["🔧"], isT: true },
            { code: "090208T", name: "生态修复学", description: "研究生态保护和环境治理，为生态文明建设服务。", degree: "农学学士", tags: ["🔧"], isT: true },
            { code: "090209T", name: "盐碱地科学与工程", description: "研究盐碱地改良和利用技术，为耕地保护和粮食安全服务。", degree: "农学学士", tags: ["🔧", "🌱"], isT: true, isNew: true }
          ]
        },
        {
          code: "0903",
          name: "动物生产类",
          majors: [
            { code: "090301", name: "动物科学", description: "研究动物营养和繁殖，为畜牧业服务。", degree: "农学学士", tags: ["🔧"] },
            { code: "090302T", name: "蚕学", description: "研究蚕桑养殖和蚕丝加工，为蚕桑产业服务。", degree: "农学学士", tags: ["🔧"], isT: true },
            { code: "090303T", name: "蜂学", description: "研究蜜蜂养殖和蜂产品加工，为蜂产业服务。", degree: "农学学士", tags: ["🔧"], isT: true },
            { code: "090304T", name: "经济动物学", description: "研究经济动物养殖，为特种养殖服务。", degree: "农学学士", tags: ["🔧"], isT: true },
            { code: "090305T", name: "饲料工程", description: "研究饲料配方和加工，为饲料产业服务。", degree: "农学学士", tags: ["🔧"], isT: true },
            { code: "090306T", name: "智慧牧业科学与工程", description: "融合畜牧和信息技术，研究智慧牧业和精准养殖技术。", degree: "农学学士", tags: ["🔧", "💻"], isT: true }
          ]
        },
        {
          code: "0904",
          name: "动物医学类",
          majors: [
            { code: "090401", name: "动物医学", description: "研究动物疾病防治，为兽医临床服务。", degree: "农学学士", tags: ["🏥"] },
            { code: "090402", name: "动物药学", description: "研究动物药物开发，为动物医药服务。", degree: "农学学士", tags: ["🏥"] },
            { code: "090403T", name: "动植物检疫", description: "研究动植物疫病检疫，为生物安全服务。", degree: "农学或理学学士", tags: ["🏥"], isT: true },
            { code: "090404T", name: "实验动物学", description: "研究实验动物培育和管理，为科研实验服务。", degree: "农学学士", tags: ["🏥"], isT: true },
            { code: "090405T", name: "中兽医学", description: "研究中兽医理论和诊疗，为动物中医药服务。", degree: "农学学士", tags: ["🏥"], isT: true },
            { code: "090406TK", name: "兽医公共卫生", description: "研究人兽共患病防控和动物源性食品安全监管的学科，培养保障公共卫生和动物健康的专业人才。", degree: "农学学士", tags: ["🏥"], isTK: true }
          ]
        },
        {
          code: "0905",
          name: "林学类",
          majors: [
            { code: "090501", name: "林学", description: "研究森林培育和保护，为林业发展服务。", degree: "农学学士", tags: ["🔧"] },
            { code: "090502", name: "园林", description: "研究园林设计和植物配置，为园林建设服务。", degree: "农学学士", tags: ["🔧"] },
            { code: "090503", name: "森林保护", description: "研究森林病虫害防治，为森林保护服务。", degree: "农学学士", tags: ["🔧"] },
            { code: "090504T", name: "经济林", description: "研究经济林栽培和加工，为林业产业服务。", degree: "农学学士", tags: ["🔧"], isT: true },
            { code: "090505T", name: "智慧林业", description: "融合林业和信息技术，研究智慧林业和数字林业管理技术。", degree: "农学学士", tags: ["🔧", "💻"], isT: true }
          ]
        },
        {
          code: "0906",
          name: "水产类",
          majors: [
            { code: "090601", name: "水产养殖学", description: "研究水产养殖技术，为水产产业服务。", degree: "农学学士", tags: ["🔧"] },
            { code: "090602", name: "海洋渔业科学与技术", description: "研究海洋渔业资源和技术，为海洋渔业服务。", degree: "农学学士", tags: ["🔧"] },
            { code: "090603T", name: "水族科学与技术", description: "研究水族生物和观赏水产，为水族产业服务。", degree: "农学学士", tags: ["🔧"], isT: true },
            { code: "090604TK", name: "水生动物医学", description: "研究水生动物疾病防治，为水产健康服务。", degree: "农学学士", tags: ["🏥"], isTK: true },
            { code: "090605T", name: "智慧渔业", description: "融合水产和信息技术，研究智慧养殖和渔业资源管理技术。", degree: "农学学士", tags: ["🔧", "💻", "🌱"], isT: true, isNew: true }
          ]
        },
        {
          code: "0907",
          name: "草学类",
          majors: [
            { code: "090701", name: "草业科学", description: "研究草地资源和管理，为畜牧业和生态建设服务。", degree: "农学学士", tags: ["🔧"] },
            { code: "090702T", name: "草坪科学与工程", description: "研究草坪建植和管理技术，为园林绿化和运动场地服务。", degree: "农学学士", tags: ["🔧"], isT: true }
          ]
        }
      ]
    },
    {
      code: "10",
      name: "医学",
      categoryCount: 11,
      feature: "生命健康，救死扶伤",
      color: "#8B6B6B",
      categories: [
        {
          code: "1001",
          name: "基础医学类",
          majors: [
            { code: "100101K", name: "基础医学", description: "研究医学基础理论，为临床医学提供理论基础。", degree: "医学学士", tags: ["🏥"], isK: true },
            { code: "100102TK", name: "生物医学", description: "研究生物医学基础，为医学研究服务。", degree: "理学学士", tags: ["🧪"], isTK: true },
            { code: "100103T", name: "生物医学科学", description: "研究生物医学基础理论和前沿技术，为医学创新和精准医疗服务。", degree: "理学学士", tags: ["🧪"], isT: true }
          ]
        },
        {
          code: "1002",
          name: "临床医学类",
          majors: [
            { code: "100201K", name: "临床医学", description: "培养具备诊断、治疗和预防疾病能力的医学人才，是医疗卫生系统的核心专业。", degree: "医学学士", tags: ["🏥"], isK: true },
            { code: "100202TK", name: "麻醉学", description: "研究临床麻醉和疼痛治疗，为手术麻醉服务。", degree: "医学学士", tags: ["🏥"], isTK: true },
            { code: "100203TK", name: "医学影像学", description: "研究医学影像诊断技术，为临床诊断服务。", degree: "医学学士", tags: ["🏥"], isTK: true },
            { code: "100204TK", name: "眼视光医学", description: "研究眼科疾病和视光矫正，为眼健康服务。", degree: "医学学士", tags: ["🏥"], isTK: true },
            { code: "100205TK", name: "精神医学", description: "研究精神疾病诊断和治疗，为精神卫生服务。", degree: "医学学士", tags: ["🏥"], isTK: true },
            { code: "100206TK", name: "放射医学", description: "研究放射诊断和治疗技术，为肿瘤治疗服务。", degree: "医学学士", tags: ["🏥"], isTK: true },
            { code: "100207TK", name: "儿科学", description: "研究婴幼儿和青少年生长发育规律及疾病防治的医学学科，培养儿科临床诊疗和儿童保健专业人才。", degree: "医学学士", tags: ["🏥"], isTK: true }
          ]
        },
        {
          code: "1003",
          name: "口腔医学类",
          majors: [
            { code: "100301K", name: "口腔医学", description: "研究口腔疾病预防、诊断和治疗，培养口腔临床医师。", degree: "医学学士", tags: ["🏥"], isK: true }
          ]
        },
        {
          code: "1004",
          name: "公共卫生与预防医学类",
          majors: [
            { code: "100401K", name: "预防医学", description: "研究疾病预防和健康促进，为公共卫生服务。", degree: "医学学士", tags: ["🏥"], isK: true },
            { code: "100402", name: "食品卫生与营养学", description: "研究食品营养和卫生，为营养健康服务。", degree: "理学学士", tags: ["🧪"] },
            { code: "100403TK", name: "妇幼保健医学", description: "研究妇女儿童保健，为妇幼保健服务。", degree: "医学学士", tags: ["🏥"], isTK: true },
            { code: "100404TK", name: "卫生监督", description: "研究卫生监督和管理，为公共卫生执法服务。", degree: "医学学士", tags: ["🏥"], isTK: true },
            { code: "100405TK", name: "全球健康学", description: "研究全球健康问题，为国际卫生合作服务。", degree: "理学学士", tags: ["🧪"], isTK: true },
            { code: "100406T", name: "运动与公共健康", description: "研究运动促进健康和公共健康政策，为全民健身服务。", degree: "理学学士", tags: ["🧪"], isT: true }
          ]
        },
        {
          code: "1005",
          name: "中医学类",
          majors: [
            { code: "100501K", name: "中医学", description: "研究中医理论和诊疗技术，传承中医药文化。", degree: "医学学士", tags: ["🏥"], isK: true },
            { code: "100502K", name: "针灸推拿学", description: "研究针灸推拿技术，为中医临床服务。", degree: "医学学士", tags: ["🏥"], isK: true },
            { code: "100503K", name: "藏医学", description: "研究藏医药理论和诊疗，传承藏医药文化。", degree: "医学学士", tags: ["🏥"], isK: true },
            { code: "100504K", name: "蒙医学", description: "研究蒙医药理论和诊疗，传承蒙医药文化。", degree: "医学学士", tags: ["🏥"], isK: true },
            { code: "100505K", name: "维医学", description: "研究维医药理论和诊疗，传承维医药文化。", degree: "医学学士", tags: ["🏥"], isK: true },
            { code: "100506K", name: "壮医学", description: "研究壮医药理论和诊疗，传承壮医药文化。", degree: "医学学士", tags: ["🏥"], isK: true },
            { code: "100507K", name: "哈医学", description: "研究哈医药理论和诊疗，传承哈医药文化。", degree: "医学学士", tags: ["🏥"], isK: true },
            { code: "100508TK", name: "傣医学", description: "研究傣医药理论和诊疗，传承傣医药文化。", degree: "医学学士", tags: ["🏥"], isTK: true },
            { code: "100509TK", name: "回医学", description: "研究回医药理论和诊疗，传承回医药文化。", degree: "医学学士", tags: ["🏥"], isTK: true },
            { code: "100510TK", name: "中医康复学", description: "研究中医康复技术，为康复医学服务。", degree: "医学学士", tags: ["🏥"], isTK: true },
            { code: "100511TK", name: "中医养生学", description: "研究中医养生理论和方法，为健康管理服务。", degree: "医学学士", tags: ["🏥"], isTK: true },
            { code: "100512TK", name: "中医儿科学", description: "研究中医儿科诊疗，为儿童健康服务。", degree: "医学学士", tags: ["🏥"], isTK: true },
            { code: "100513TK", name: "中医骨伤科学", description: "研究中医骨伤诊疗，为骨伤康复服务。", degree: "医学学士", tags: ["🏥"], isTK: true },
            { code: "100514TK", name: "中医养生学", description: "研究中医养生理论和保健方法的学科，培养运用中医药理论进行健康管理和疾病预防的专业人才。", degree: "医学学士", tags: ["🏥"], isTK: true }
          ]
        },
        {
          code: "1006",
          name: "中西医结合类",
          majors: [
            { code: "100601K", name: "中西医临床医学", description: "融合中西医理论和诊疗方法，培养中西医结合临床人才。", degree: "医学学士", tags: ["🏥"], isK: true }
          ]
        },
        {
          code: "1007",
          name: "药学类",
          majors: [
            { code: "100701", name: "药学", description: "研究药物研发、生产和合理使用的学科，是医药产业和健康服务的重要支撑。", degree: "理学学士", tags: ["🧪"] },
            { code: "100702", name: "药物制剂", description: "研究药物制剂技术，为制药产业服务。", degree: "理学学士", tags: ["🧪"] },
            { code: "100703TK", name: "临床药学", description: "研究临床合理用药，为药物治疗服务。", degree: "理学学士", tags: ["🧪"], isTK: true },
            { code: "100704T", name: "药事管理", description: "研究药品管理和政策，为药品监管服务。", degree: "理学学士", tags: ["📚"], isT: true },
            { code: "100705T", name: "药物分析", description: "研究药物质量分析，为药品质量控制服务。", degree: "理学学士", tags: ["🧪"], isT: true },
            { code: "100706T", name: "药物化学", description: "研究药物分子设计，为新药研发服务。", degree: "理学学士", tags: ["🧪"], isT: true },
            { code: "100707T", name: "海洋药学", description: "研究海洋药物开发，为海洋医药服务。", degree: "理学学士", tags: ["🧪"], isT: true },
            { code: "100708T", name: "化妆品科学与技术", description: "研究化妆品配方、生产和安全评价，为化妆品产业服务。", degree: "理学学士", tags: ["🧪"], isT: true }
          ]
        },
        {
          code: "1008",
          name: "中药学类",
          majors: [
            { code: "100801", name: "中药学", description: "研究中药资源和制剂，传承中药文化。", degree: "理学学士", tags: ["🧪"] },
            { code: "100802", name: "中药资源与开发", description: "研究中药资源保护和开发，为中药产业服务。", degree: "理学学士", tags: ["🧪"] },
            { code: "100803T", name: "藏药学", description: "研究藏药理论和制剂，传承藏药文化。", degree: "理学学士", tags: ["🧪"], isT: true },
            { code: "100804T", name: "蒙药学", description: "研究蒙药理论和制剂，传承蒙药文化。", degree: "理学学士", tags: ["🧪"], isT: true },
            { code: "100805T", name: "中药制药", description: "研究中药制药技术，为中药产业服务。", degree: "理学学士", tags: ["🧪"], isT: true },
            { code: "100806T", name: "中草药栽培与鉴定", description: "研究中草药种植、加工和品质鉴定，为中药资源服务。", degree: "理学学士", tags: ["🧪"], isT: true }
          ]
        },
        {
          code: "1009",
          name: "法医学类",
          majors: [
            { code: "100901K", name: "法医学", description: "研究法医鉴定技术和司法检验，为司法实践和案件侦破服务。", degree: "医学学士", tags: ["🏥"], isK: true }
          ]
        },
        {
          code: "1010",
          name: "医学技术类",
          majors: [
            { code: "101001", name: "医学检验技术", description: "研究医学检验技术，为临床诊断服务。", degree: "理学学士", tags: ["🧪"] },
            { code: "101002", name: "医学实验技术", description: "研究医学实验技术，为医学研究服务。", degree: "理学学士", tags: ["🧪"] },
            { code: "101003", name: "医学影像技术", description: "研究医学影像技术，为临床诊断服务。", degree: "理学学士", tags: ["🧪"] },
            { code: "101004", name: "眼视光学", description: "研究视光矫正技术，为视力健康服务。", degree: "理学学士", tags: ["🧪"] },
            { code: "101005", name: "康复治疗学", description: "研究康复治疗技术，为康复医学服务。", degree: "理学学士", tags: ["🏥"] },
            { code: "101006", name: "口腔医学技术", description: "研究口腔修复技术，为口腔临床服务。", degree: "理学学士", tags: ["🧪"] },
            { code: "101007", name: "卫生检验与检疫", description: "研究卫生检验技术，为公共卫生服务。", degree: "理学学士", tags: ["🧪"] },
            { code: "101008T", name: "听力与言语康复学", description: "研究听力言语康复，为残障康复服务。", degree: "理学学士", tags: ["🏥"], isT: true },
            { code: "101009T", name: "康复物理治疗", description: "研究物理康复技术，为康复治疗服务。", degree: "理学学士", tags: ["🏥"], isT: true },
            { code: "101010T", name: "康复作业治疗", description: "研究作业康复技术，为康复治疗服务。", degree: "理学学士", tags: ["🏥"], isT: true },
            { code: "101011T", name: "智能医学工程", description: "研究医学人工智能技术，为智慧医疗服务。", degree: "工学学士", tags: ["💻"], isT: true },
            { code: "101012T", name: "生物医药数据科学", description: "研究生物医药数据分析，为精准医学服务。", degree: "理学学士", tags: ["💻"], isT: true },
            { code: "101013T", name: "智能影像工程", description: "研究医学影像智能分析，为影像诊断服务。", degree: "工学学士", tags: ["💻"], isT: true },
            { code: "101014TK", name: "医工学", description: "融合医学和工程技术，研究医疗器械和技术。", degree: "工学学士", tags: ["🔧"], isTK: true },
            { code: "101015T", name: "核医学工程", description: "研究核医学技术和核素治疗，为肿瘤诊疗和核医学服务。", degree: "工学学士", tags: ["🔧", "🌱"], isT: true, isNew: true }
          ]
        },
        {
          code: "1011",
          name: "护理学类",
          majors: [
            { code: "101101", name: "护理学", description: "研究护理理论和护理技术的学科，培养临床护理和护理管理专业人才。", degree: "理学学士", tags: ["🏥"] },
            { code: "101102TK", name: "助产学", description: "研究妊娠、分娩和产褥期护理理论与技术的学科，培养具备临床助产和母婴保健能力的专业助产人才。", degree: "理学学士", tags: ["🏥"], isTK: true }
          ]
        }
      ]
    },
    {
      code: "12",
      name: "管理学",
      categoryCount: 9,
      feature: "经世致用，数字治理",
      color: "#7B8B9B",
      categories: [
        {
          code: "1201",
          name: "管理科学与工程类",
          majors: [
            { code: "120101", name: "管理科学", description: "研究管理方法和工程技术，为管理决策提供量化支持。", degree: "管理学或理学学士", tags: ["🧪"] },
            { code: "120102", name: "信息管理与信息系统", description: "研究信息管理和系统开发，为信息化建设服务。", degree: "管理学或工学学士", tags: ["💻"] },
            { code: "120103", name: "工程管理", description: "研究工程项目管理，为工程建设服务。", degree: "管理学或工学学士", tags: ["🔧"] },
            { code: "120104", name: "房地产开发与管理", description: "研究房地产开发和经营管理，为房地产行业服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120105", name: "工程造价", description: "研究工程成本计算和控制，为工程经济管理服务。", degree: "管理学或工学学士", tags: ["🔧"] },
            { code: "120106TK", name: "保密管理", description: "研究保密管理和信息安全，为国家安全服务。", degree: "管理学学士", tags: ["🏥"], isTK: true },
            { code: "120107T", name: "邮政管理", description: "研究邮政运营和管理，为邮政行业服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120108T", name: "大数据管理与应用", description: "研究大数据管理和应用，为数据产业服务。", degree: "管理学学士", tags: ["💻"], isT: true },
            { code: "120109T", name: "工程审计", description: "研究工程审计和监督，为工程建设服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120110T", name: "计算金融", description: "研究计算金融技术，为金融科技服务。", degree: "管理学学士", tags: ["💻"], isT: true },
            { code: "120111T", name: "应急管理", description: "研究应急管理和救援技术，为防灾减灾和应急管理服务。", degree: "管理学学士", tags: ["📚"], isT: true }
          ]
        },
        {
          code: "1202",
          name: "工商管理类",
          majors: [
            { code: "120201K", name: "工商管理", description: "研究企业战略、运营管理和市场营销的学科，培养企业管理综合人才。", degree: "管理学学士", tags: ["📚"], isK: true },
            { code: "120202", name: "市场营销", description: "研究市场分析和营销策略，培养营销管理人才。", degree: "管理学学士", tags: ["📚"] },
            { code: "120203K", name: "会计学", description: "研究财务信息记录、分析和报告的学科，是企业财务管理和审计监督的基础。", degree: "管理学学士", tags: ["📚"], isK: true },
            { code: "120204", name: "财务管理", description: "研究企业资金管理和财务决策，为企业财务服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120205", name: "国际商务", description: "研究国际商务运营和管理，培养国际商务人才。", degree: "管理学学士", tags: ["📚"] },
            { code: "120206", name: "人力资源管理", description: "研究人力资源开发和管理，为企业人才服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120207", name: "审计学", description: "研究审计理论和实务，为经济监督服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120208", name: "资产评估", description: "研究资产价值评估，为产权交易服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120209", name: "物业管理", description: "研究物业运营和管理，为物业服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120210", name: "文化产业管理", description: "研究文化产业运营和管理，为文化产业发展服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120211T", name: "劳动关系", description: "研究企业管理和市场营销，培养企业管理人才。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120212T", name: "体育经济与管理", description: "研究体育产业经济和管理，为体育产业发展服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120213T", name: "财务会计教育", description: "研究财务会计教育，培养财会教育人才。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120214T", name: "市场营销教育", description: "研究市场营销教育，培养营销教育人才。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120215T", name: "零售业管理", description: "研究零售运营和管理，为零售产业服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120216T", name: "创业管理", description: "研究创业理论和实践，培养创业创新能力。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120217T", name: "海关稽查", description: "研究海关稽查技术，为海关监管服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120218T", name: "内部审计", description: "研究内部审计理论和实务，为企业内控服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120219TK", name: "商业人工智能", description: "研究人工智能在商业领域的应用，为商业智能化和数字化转型服务。", degree: "管理学学士", tags: ["💻", "🌱"], isTK: true, isNew: true }
          ]
        },
        {
          code: "1203",
          name: "农业经济管理类",
          majors: [
            { code: "120301", name: "农林经济管理", description: "研究农业经济和管理，为农业农村发展服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120302", name: "农村区域发展", description: "研究农村发展规划，为乡村振兴服务。", degree: "管理学或农学学士", tags: ["📚"] },
            { code: "120303T", name: "乡村治理", description: "研究乡村治理和乡村振兴，为农业农村现代化服务。", degree: "管理学学士", tags: ["📚"], isT: true }
          ]
        },
        {
          code: "1204",
          name: "公共管理类",
          majors: [
            { code: "120401", name: "公共事业管理", description: "研究公共事业运营和管理，为公共服务服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120402", name: "行政管理", description: "研究政府管理和公共政策，为公共部门服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120403", name: "劳动与社会保障", description: "研究劳动就业和社会保障，为社会民生服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120404", name: "土地资源管理", description: "研究土地资源管理和规划，为土地管理 service。", degree: "管理学学士", tags: ["📚"] },
            { code: "120405", name: "城市管理", description: "研究城市运营和管理，为城市发展服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120406TK", name: "海关管理", description: "研究海关业务和管理，为海关工作服务。", degree: "管理学学士", tags: ["🏥"], isTK: true },
            { code: "120407T", name: "交通管理", description: "研究交通运营和管理，为交通行业服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120408T", name: "海事管理", description: "研究海事业务和管理，为海事工作服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120409T", name: "公共关系学", description: "研究公共关系理论和实务，为组织形象服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120410T", name: "健康服务与管理", description: "研究健康服务运营和管理，为健康产业服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120411TK", name: "海警后勤管理", description: "研究海警后勤保障，为海警工作服务。", degree: "管理学学士", tags: ["🏥"], isTK: true },
            { code: "120412T", name: "医疗产品管理", description: "研究医疗产品管理，为医疗器械产业服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120413T", name: "医疗保险", description: "研究医疗保险运营，为医疗保障服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120414T", name: "养老服务管理", description: "研究养老服务运营，为养老产业服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120415T", name: "海关检验检疫安全", description: "研究公共事务和政府管理，为公共部门服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120416TK", name: "海外安全管理", description: "研究公共事务和政府管理，为公共部门服务。", degree: "管理学学士", tags: ["🏥"], isTK: true },
            { code: "120417T", name: "自然资源登记与管理", description: "研究公共事务和政府管理，为公共部门服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120418T", name: "慈善管理", description: "研究公共事务和政府管理，为公共部门服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120419T", name: "航空安防管理", description: "研究公共事务和政府管理，为公共部门服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120420T", name: "无障碍管理", description: "研究公共事务和政府管理，为公共部门服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120421T", name: "人才发展与管理", description: "研究公共事务和政府管理，为公共部门服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120422TK", name: "数字公共治理", description: "研究数字技术在公共治理中的应用，为数字政府和智慧城市服务。", degree: "管理学学士", tags: ["💻", "🌱"], isTK: true, isNew: true }
          ]
        },
        {
          code: "1205",
          name: "图书情报与档案管理类",
          majors: [
            { code: "120501", name: "图书馆学", description: "研究图书馆管理和服务，为图书情报机构服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120502", name: "档案学", description: "研究档案管理和保护，为档案机构服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120503", name: "信息资源管理", description: "研究信息资源开发和利用，为知识管理和信息服务服务。", degree: "管理学学士", tags: ["📚"] }
          ]
        },
        {
          code: "1206",
          name: "物流管理与工程类",
          majors: [
            { code: "120601", name: "物流管理", description: "研究物流运营和管理，为物流产业服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120602", name: "物流工程", description: "研究物流系统设计和工程，为物流产业服务。", degree: "工学或管理学学士", tags: ["🔧"] },
            { code: "120603T", name: "采购管理", description: "研究采购运营和管理，为企业采购服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120604T", name: "供应链管理", description: "研究供应链优化和管理，为企业供应链服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120605T", name: "智能物流工程", description: "融合物流和信息技术，研究智能物流系统和供应链优化技术。", degree: "工学学士", tags: ["💻"], isT: true }
          ]
        },
        {
          code: "1207",
          name: "工业工程类",
          majors: [
            { code: "120701", name: "工业工程", description: "研究生产系统优化，为制造业服务。", degree: "工学或管理学学士", tags: ["🔧"] },
            { code: "120702T", name: "标准化工程", description: "研究标准制定和实施，为质量管理服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120703T", name: "质量管理工程", description: "研究质量管理体系和控制技术，为产品质量和服务质量服务。", degree: "管理学学士", tags: ["📚"], isT: true }
          ]
        },
        {
          code: "1208",
          name: "电子商务类",
          majors: [
            { code: "120801", name: "电子商务", description: "研究电商运营和网络营销，为数字经济服务。", degree: "管理学或经济学或工学学士", tags: ["💻"] },
            { code: "120802T", name: "电子商务及法律", description: "研究电商运营和法律规范，为电商合规服务。", degree: "管理学学士", tags: ["📚"], isT: true },
            { code: "120803T", name: "跨境电子商务", description: "研究跨境电商运营和国际贸易规则，为跨境电商产业服务。", degree: "管理学学士", tags: ["💻"], isT: true }
          ]
        },
        {
          code: "1209",
          name: "旅游管理类",
          majors: [
            { code: "120901K", name: "旅游管理", description: "研究旅游服务和景区管理，为旅游产业服务。", degree: "管理学学士", tags: ["📚"], isK: true },
            { code: "120902", name: "酒店管理", description: "研究酒店运营和管理，为酒店产业服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120903", name: "会展经济与管理", description: "研究会展经济和管理，为会展产业服务。", degree: "管理学学士", tags: ["📚"] },
            { code: "120904T", name: "旅游管理与服务教育", description: "研究旅游管理教学和培训，培养旅游管理教育人才。", degree: "管理学学士", tags: ["📚"], isT: true }
          ]
        }
      ]
    },
    {
      code: "13",
      name: "艺术学",
      categoryCount: 5,
      feature: "美育浸润，数字艺术",
      color: "#9B7B8B",
      categories: [
        {
          code: "1301",
          name: "艺术学理论类",
          majors: [
            { code: "130101", name: "艺术史论", description: "系统研究中外艺术发展历史和理论的学科，培养艺术评论、策展和艺术研究能力。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130102T", name: "艺术管理", description: "研究艺术机构运营和文化产业管理规律的学科，培养艺术策划、文化项目管理和演艺经纪人才。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130103T", name: "非物质文化遗产保护", description: "研究非物质文化遗产的认定、保护和传承方法的学科，培养文化遗产保护与开发利用的专业人才。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130104T", name: "艺术管理教育", description: "研究艺术管理教学和培训，培养艺术管理教育人才。", degree: "艺术学学士", tags: ["📚"], isT: true }
          ]
        },
        {
          code: "1302",
          name: "音乐与舞蹈学类",
          majors: [
            { code: "130201", name: "音乐表演", description: "研究音乐表演艺术，培养音乐表演人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130202", name: "音乐学", description: "研究音乐理论和音乐表演的学科，培养音乐创作、表演和教育人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130203", name: "作曲与作曲技术理论", description: "研究音乐创作和作曲技术，培养作曲人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130204", name: "舞蹈表演", description: "研究舞蹈表演艺术，培养舞蹈表演人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130205", name: "舞蹈学", description: "研究舞蹈理论和舞蹈文化，培养舞蹈研究人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130206", name: "舞蹈编导", description: "研究舞蹈编排和创作，培养舞蹈编导人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130207T", name: "舞蹈教育", description: "研究舞蹈教学方法，培养舞蹈教育人才。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130208TK", name: "航空服务艺术与管理", description: "研究航空服务艺术和管理，为空乘服务。", degree: "艺术学学士", tags: ["📚"], isTK: true },
            { code: "130209T", name: "流行音乐", description: "研究流行音乐表演和创作，培养流行音乐人才。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130210T", name: "音乐治疗", description: "研究音乐治疗技术，为心理健康服务。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130211T", name: "舞蹈治疗", description: "研究音乐舞蹈理论和表演，培养艺术表演人才。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130212T", name: "音乐科技", description: "研究音乐舞蹈理论和表演，培养艺术表演人才。", degree: "艺术学学士", tags: ["💻"], isT: true },
            { code: "130213T", name: "音乐教育", description: "研究音乐教学方法，培养音乐教育人才。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130214TK", name: "冰雪舞蹈表演", description: "研究音乐舞蹈理论和表演，培养艺术表演人才。", degree: "艺术学学士", tags: ["📚"], isTK: true },
            { code: "130215T", name: "舞蹈科学", description: "研究音乐舞蹈理论和表演，培养艺术表演人才。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130216T", name: "乐器智造", description: "研究音乐舞蹈理论和表演，培养艺术表演人才。", degree: "艺术学学士", tags: ["🔧", "🌱"], isT: true, isNew: true },
            { code: "130217TK", name: "艺术治疗", description: "融合艺术和心理学，研究艺术干预和心理治疗技术。", degree: "艺术学学士", tags: ["📚", "🌱"], isTK: true, isNew: true }
          ]
        },
        {
          code: "1303",
          name: "戏剧与影视学类",
          majors: [
            { code: "130301", name: "表演", description: "研究戏剧影视表演，培养表演艺术人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130302", name: "戏剧学", description: "研究戏剧理论和戏剧文化，培养戏剧研究人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130303", name: "电影学", description: "研究电影理论和电影文化，培养电影研究人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130304", name: "戏剧影视文学", description: "研究戏剧影视剧本创作，培养编剧人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130305", name: "广播电视编导", description: "研究广播电视节目编导，培养编导人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130306", name: "戏剧影视导演", description: "研究戏剧影视导演艺术，培养导演人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130307", name: "戏剧影视美术设计", description: "研究戏剧影视美术设计，培养美术设计人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130308", name: "录音艺术", description: "研究音频录制和制作，培养录音人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130309", name: "播音与主持艺术", description: "研究播音主持艺术，培养播音主持人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130310", name: "动画", description: "研究动画设计和制作，培养动画创作人才。", degree: "艺术学学士", tags: ["💻"] },
            { code: "130311T", name: "影视摄影与制作", description: "研究影视拍摄和后期制作，培养影视制作人才。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130312T", name: "影视技术", description: "研究影视技术开发和应用，为影视产业服务。", degree: "艺术学学士", tags: ["💻"], isT: true },
            { code: "130313T", name: "戏剧教育", description: "研究戏剧教学方法，培养戏剧教育人才。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130314TK", name: "曲艺", description: "研究曲艺表演艺术，传承曲艺文化。", degree: "艺术学学士", tags: ["📚"], isTK: true },
            { code: "130315TK", name: "音乐剧", description: "融合音乐、戏剧和舞蹈表演的综合艺术学科，培养能在音乐剧舞台上进行演唱、表演和舞蹈的复合型演艺人才。", degree: "艺术学学士", tags: ["📚"], isTK: true }
          ]
        },
        {
          code: "1304",
          name: "美术学类",
          majors: [
            { code: "130401", name: "美术学", description: "研究美术创作和美术理论的学科，培养绘画、雕塑等艺术创作能力。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130402", name: "绘画", description: "研究绘画技法和创作，培养绘画艺术人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130403", name: "雕塑", description: "研究雕塑技法和创作，培养雕塑艺术人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130404", name: "摄影", description: "研究摄影技术和艺术创作，培养摄影人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130405T", name: "书法学", description: "研究书法艺术和创作，传承书法文化。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130406T", name: "中国画", description: "研究中国画技法和创作，传承国画艺术。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130407T", name: "实验艺术", description: "研究实验艺术创作，培养当代艺术人才。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130408T", name: "跨媒体艺术", description: "研究跨媒介艺术创作，培养新媒体艺术人才。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130409T", name: "文物保护与修复", description: "研究文物保护修复技术，为文化遗产保护服务。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130410T", name: "漫画", description: "研究漫画创作和叙事，培养漫画创作人才。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130411T", name: "科技艺术", description: "融合科技和艺术创作，培养科技艺术人才。", degree: "艺术学学士", tags: ["💻"], isT: true },
            { code: "130412T", name: "美术教育", description: "研究美术教学方法和课程设计，培养美术教育人才。", degree: "艺术学学士", tags: ["📚"], isT: true }
          ]
        },
        {
          code: "1305",
          name: "设计学类",
          majors: [
            { code: "130501", name: "艺术设计学", description: "研究艺术设计理论，培养设计研究人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130502", name: "视觉传达设计", description: "研究视觉设计和传播，培养平面设计人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130503", name: "环境设计", description: "研究环境空间设计，培养环境设计人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130504", name: "产品设计", description: "研究产品造型和功能设计，培养产品设计人才。", degree: "艺术学学士", tags: ["🔧"] },
            { code: "130505", name: "服装与服饰设计", description: "研究服装设计和服饰搭配，培养服装设计人才。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130506", name: "公共艺术", description: "研究公共艺术创作，为城市公共空间服务。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130507", name: "工艺美术", description: "研究传统工艺和美术创作，传承工艺文化。", degree: "艺术学学士", tags: ["📚"] },
            { code: "130508", name: "数字媒体艺术", description: "研究数字媒体艺术创作，培养数字艺术人才。", degree: "艺术学学士", tags: ["💻"] },
            { code: "130509T", name: "艺术与科技", description: "融合艺术和科技创作，培养跨界艺术人才。", degree: "艺术学学士", tags: ["💻"], isT: true },
            { code: "130510T", name: "陶瓷艺术设计", description: "研究陶瓷艺术创作，传承陶瓷文化。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130511T", name: "新媒体艺术", description: "研究新媒体艺术创作，培养新媒体艺术人才。", degree: "艺术学学士", tags: ["💻"], isT: true },
            { code: "130512T", name: "包装设计", description: "研究包装结构和视觉设计，为产品包装服务。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130513T", name: "珠宝首饰设计与工艺", description: "研究珠宝设计和制作工艺，为珠宝产业服务。", degree: "艺术学学士", tags: ["📚"], isT: true },
            { code: "130514T", name: "智能工程与创意设计", description: "融合智能技术和创意设计，培养创新设计人才。", degree: "艺术学学士", tags: ["💻"], isT: true },
            { code: "130515T", name: "虚拟空间艺术", description: "研究设计理论和创意方法，培养设计创新人才。", degree: "艺术学学士", tags: ["💻"], isT: true },
            { code: "130516T", name: "数字文旅", description: "融合数字技术和文化旅游，研究数字文旅产品开发和运营。", degree: "艺术学学士", tags: ["💻", "🌱"], isT: true, isNew: true }
          ]
        }
      ]
    },
    {
      code: "14",
      name: "交叉学科",
      categoryCount: 1,
      feature: "新兴融合，未来产业",
      color: "#8B6B9B",
      categories: [
        {
          code: "1401",
          name: "交叉工程类",
          majors: [
            { code: "140001T", name: "未来机器人", description: "研究面向未来应用场景的智能机器人系统设计与控制的学科，融合人工智能、机械工程和材料科学等前沿技术。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "140002T", name: "交叉工程", description: "打破传统工程学科边界，融合多学科知识解决复杂工程问题的学科，培养具有跨学科视野的系统工程人才。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "140003TK", name: "低空技术与工程", description: "研究低空飞行器设计、低空空域管理和无人机系统工程的新兴学科，服务于低空经济和城市空中交通发展。", degree: "工学学士", tags: ["🔧", "💻"], isTK: true },
            { code: "140004T", name: "智能建造", description: "融合土木工程与信息技术的交叉学科，研究智能建筑和数字建造技术。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "140005T", name: "智能交通", description: "融合交通工程与人工智能技术的学科，研究智能网联汽车、自动驾驶和智慧交通系统，培养交通智能化领域人才。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "140006T", name: "智慧能源", description: "研究能源系统数字化和智能化技术的学科，涵盖智能电网、新能源优化调度和综合能源管理，服务能源转型发展。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "140007T", name: "智慧农业", description: "研究农业智能化技术，为智慧农业服务。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "140008T", name: "智慧医学", description: "融合医学与人工智能、大数据技术的交叉学科，研究智能辅助诊断、精准医疗和健康大数据分析，培养智慧医疗领域人才。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "140009T", name: "智慧海洋", description: "融合海洋科学与信息技术的交叉学科，研究海洋大数据、智能海洋装备和海洋牧场智能化，服务海洋强国战略。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "140010T", name: "智慧环境", description: "融合环境科学与数字技术的交叉学科，研究环境智能监测、污染溯源和生态修复数字化，培养生态环境智慧治理人才。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "140011T", name: "智能材料", description: "研究具有感知、响应和自适应功能的先进材料，涵盖形状记忆合金、自修复材料和智能传感材料等前沿领域。", degree: "工学学士", tags: ["🔧", "💻"], isT: true },
            { code: "140012TK", name: "具身智能", description: "研究具身智能系统，为人工智能服务。", degree: "工学学士", tags: ["🔧", "💻", "🌱"], isTK: true, isNew: true },
            { code: "140013TK", name: "脑机科学与技术", description: "研究脑机接口技术，为神经工程服务。", degree: "工学学士", tags: ["🔧", "💻", "🌱"], isTK: true, isNew: true },
            { code: "140014T", name: "工程互联网", description: "研究工业互联网技术，为智能制造服务。", degree: "工学学士", tags: ["🔧", "💻", "🌱"], isT: true, isNew: true },
            { code: "140015T", name: "数据资源与数据智能", description: "研究数据资源管理和智能分析，为数据产业服务。", degree: "工学学士", tags: ["💻", "🌱"], isT: true, isNew: true },
            { code: "140016TK", name: "深地科学与工程", description: "研究深地资源开发和深部地质过程，为深地探测和资源开发服务。", degree: "工学学士", tags: ["🔧", "🌱"], isTK: true, isNew: true }
          ]
        }
      ]
    }
  ]
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = majorData;
}
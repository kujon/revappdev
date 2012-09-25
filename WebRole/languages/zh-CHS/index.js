// ==================================================== //
// Revolution Mobile App Localization File              //
// ==================================================== //

// Overview:    Contains definitions for localizable text properties in all scripts.
// Culture:     "zh-CHS" (Simplified Chinese, China)

// ------------------------------------------
// CLIENT SIDE DEFINITIONS
// ------------------------------------------

exports.client = {
    hello: '你好',

    // CultureInfo object from the date.js source for the zh-CN culture,
    // which we've appropriated for use as Simplified Chinese.
    cultureInfo: {
        name: "zh-CN",
        englishName: "Chinese (People's Republic of China)",
        nativeName: "中文(中华人民共和国)",
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        abbreviatedDayNames: ["日", "一", "二", "三", "四", "五", "六"],
        shortestDayNames: ["日", "一", "二", "三", "四", "五", "六"],
        firstLetterDayNames: ["日", "一", "二", "三", "四", "五", "六"],
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        abbreviatedMonthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        amDesignator: "上午",
        pmDesignator: "下午",
        firstDayOfWeek: 0,
        twoDigitYearMax: 2029,
        dateElementOrder: "ymd",
        formatPatterns: {
            shortDate: "yyyy/M/d",
            longDate: "yyyy'年'M'月'd'日'",
            shortTime: "H:mm",
            longTime: "H:mm:ss",
            fullDateTime: "yyyy'年'M'月'd'日' H:mm:ss",
            sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
            universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
            rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
            monthDay: "M'月'd'日'",
            yearMonth: "yyyy'年'M'月'"
        },
        regexPatterns: {
            jan: /^一月/i,
            feb: /^二月/i,
            mar: /^三月/i,
            apr: /^四月/i,
            may: /^五月/i,
            jun: /^六月/i,
            jul: /^七月/i,
            aug: /^八月/i,
            sep: /^九月/i,
            oct: /^十月/i,
            nov: /^十一月/i,
            dec: /^十二月/i,
            sun: /^星期日/i,
            mon: /^星期一/i,
            tue: /^星期二/i,
            wed: /^星期三/i,
            thu: /^星期四/i,
            fri: /^星期五/i,
            sat: /^星期六/i,
            future: /^next/i,
            past: /^last|past|prev(ious)?/i,
            add: /^(\+|after|from)/i,
            subtract: /^(\-|before|ago)/i,        
            yesterday: /^yesterday/i,
            today: /^t(oday)?/i,
            tomorrow: /^tomorrow/i,
            now: /^n(ow)?/i,        
            millisecond: /^ms|milli(second)?s?/i,
            second: /^sec(ond)?s?/i,
            minute: /^min(ute)?s?/i,
            hour: /^h(ou)?rs?/i,
            week: /^w(ee)?k/i,
            month: /^m(o(nth)?s?)?/i,
            day: /^d(ays?)?/i,
            year: /^y((ea)?rs?)?/i,		
            shortMeridian: /^(a|p)/i,
            longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
            timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
            ordinalSuffix: /^\s*(st|nd|rd|th)/i,
            timeContext: /^\s*(\:|a|p)/i
        },
        abbreviatedTimeZoneStandard: { 
            GMT: "-000", 
            EST: "-0400", 
            CST: "-0500", 
            MST: "-0600", 
            PST: "-0700" 
        },
        abbreviatedTimeZoneDST: { 
            GMT: "-000", 
            EDT: "-0500", 
            CDT: "-0600", 
            MDT: "-0700", 
            PDT: "-0800" 
        }    
    },

    // ------------------------------------------------------------------ | C |

    chart: {
        performanceBarTitle                 : '分部回报',
        riskBarTitle                        : '权重对比对风险值的贡献',
        allocationbarTitle                  : '相对权重',
        contributionBarTitle                : '证券层面的贡献',
        attributionBarTitle                 : '相对权重对比总效应',
        fixedIncomeContributionBarTitle     : '固定收益贡献',
        carryContributionBarTitle           : '结转贡献',
        yieldCurveContributionBarTitle      : '收益曲线贡献',
        riskNumbersBarTitle                 : '风险数字',
        performanceBubbleTitle              : '投资组合回报对比波幅',
        riskBubbleTitle                     : '投资组合回报对比风险值',
        contributionColumnTitle             : '投资组合贡献对比基准贡献',
        interestRatesExposureColumnTitle    : '利率风险承担',
        creditSpreadsExposureColumnTitle    : '信贷利差风险承担',
        dv01ExposureColumnTitle             : 'DV01风险承担',
        attributionColumnTitle              : '归因效应',
        allocationPieTitle                  : '投资组合权重',
        contributionPieTitle                : '投资组合权重对比对回报的贡献',
        riskPietitle                        : '投资组合权重对比对风险值的贡献',
        performanceGridTitle                : '表现统计数据',
        attributionGridTitle                : '总水平归因效应',
        fixedIncomeGridTitle                : '固定收益统计数据',
        fixedIncomeContributionGridTitle    : '固定收益贡献',
        fixedIncomeExposureGridTitle        : '固定收益风险承担',
        performanceTopTenGridTitle          : '十只最高权重证券',
        contributionTopTenGridTitle         : '五只最大／最小贡献证券',
        riskTopTenGridTitle                 : '十只最大风险权重证券',
        performanceTreemapTitle             : '投资组合权重对比回报',
        riskTreemapTitle                    : '个别证券权重对比风险值',
        performanceLineTitle                : '期内回报',
        fixedIncomeContributionsGroupTitle  : '固定收益贡献',
        fixedIncomeExposuresGroupTitle      : '固定收益风险承担',
        fixedIncomeRiskNumbersGroupTitle    : '固定收益风险数字',
        performanceMasterTitle              : 'Key Performance Numbers',
        fixedIncomeMasterTitle              : 'Key Fixed Income Numbers',
        riskMasterTitle                     : 'Key Risk Numbers',
        allocationMasterTitle               : 'Key Allocation Numbers',
        contributionMasterTitle             : 'Key Contribution Numbers',
        attributionKeyNumbersTitle          : 'Key Attribution Numbers',
        allocationLongShortGridTitle        : 'Long/Short Allocation'
    },

    chartTypes: {
        AreaChart                           : '区域',
        BarChart                            : '柱状图',
        BubbleChart                         : '泡沫',
        ColumnChart                         : '纵列',
        CustomNumber                        : 'Custom Number',
        Group                               : '组别',
        LineChart                           : '线状图',
        PieChart                            : '饼状图',
        ScatterChart                        : '散点图',
        SteppedAreaChart                    : 'Stepped Area',
        Table                               : '网格图',
        TreeMap                             : '热度图'
    },

    chartTexts: {
        addNewPage                          : '加载新页面……'
    },

    // ------------------------------------------------------------------ | E |

    errors: {
        noCredentialsProvidedText   : 'Please enter your email address and password.',
        chartFailedText             : '无法载入图表。',
        accountEmptyText            : '本账户不含投资组合数据。',
        portfolioNotFoundText       : '无法找到所查询的投资组合。',
        portfolioNotFoundReasonText : 'The portfolio you selected either does not exist, has ' + 
                                      'been deleted, or may have had sharing rights removed.',
        analysisFailedText          : '无法检索所查询的投资组合数据。',
        analysisFailedReasonText    : 'The analysis you selected may still be calculating, ' + 
                                      'or may not have any results to display. Please also ' + 
                                      'ensure that the account associated with this portfolio ' + 
                                      'is active by logging on via the StatPro Revolution website.'
    },

    // ------------------------------------------------------------------ | S |

    shared: {
        decimalSymbol               : '.',
        groupingSymbol              : ','        
    }, 

    spinningWheel: {
        noPortfolioSlotAvailable    : '无相关投资组合。',
        noAnalysisSlotAvailable     : '无相关分析。',
        noTimePeriodSlotAvailable   : '无相关期间。',
        noFavouritesSlotAvailable   : '无收藏',
        done                        : '完成',
        cancel                      : '取消'
    },

    // ------------------------------------------------------------------ | T |
    
    tabbar: {
        favourites                  : '收藏夹',
        home                        : '主页',
        portfolios                  : '投资组合',
        analysis                    : '分析',
        timePeriods                 : '期间',
        infos                       : '信息',
        more                        : '更多',
        settings                    : '设置'
    },

    // -------------------------- | END OF FILE | -------------------------- \\
    //                     A way to avoid missing comma                      \\

    eof                             : '再见'
};

// ------------------------------------------
// SERVER SIDE DEFINITIONS
// ------------------------------------------

exports.server = {
    hello: '你好',

    // ------------------------------------------------------------------ | A |
    
    aboutPage: {
        aboutText                   : '关于',
        mobileText                  : 'StatPro Revolution Mobile',
        openSourceText              : 'This project is made possible by open source software.',
        poweredText                 : 'Powered by the StatPro Revolution Web API.'        
    },

    analysisPage: {
        analysisText                : '分析',        
        endDate                     : '结束日期',
        startDate                   : '开始日期'        
    },
    
    // ------------------------------------------------------------------ | E |

    errorPage: {
        errorText                   : '错误'
    },

    errors: {
        unknownErrorText            : '出现一个未知错误。',
        invalidCredentialsText      : '您输入的用户名称或密码错误。'
    },

    eulaPage: {
        eulaText                    : 'EULA（终端用户许可协议）'
    },

    // ------------------------------------------------------------------ | H |
    
    homePage: {        
        portfoliosText              : '投资组合',
        viewEulaText                : '显示EULA'
    },

    // ------------------------------------------------------------------ | L |

    languageSettingsPage: {
        settingsText                : '语言'
    },

    loginPage: {
        loginText                   : '登录',
        signUpText                  : '注册',        
        supportText                 : '支持',
        userNamePlaceholderText     : '用户姓名',
        passwordPlaceholderText     : '密码'
    },

    // ------------------------------------------------------------------ | M |

    measures: {
        adjustedsharpe              : '经调整夏普比率',
        alpha                       : '阿尔法',
        annavetomaxloss             : '年化平均数：最大亏损',
        annualalpha                 : '年化阿尔法',
        bearbeta                    : '熊市贝他',
        bearcaptureratio            : '熊市捕捉比率',
        bearcorrelation             : '熊市相关性',
        bearcovariance              : '熊市协方差',
        bearmeanreturn              : '熊市中位数回报',
        beta                        : '贝他',
        bpresenceflag               : '整期持有-基准',
        bullbeta                    : '牛市贝他',
        bullcaptureratio            : '牛市捕捉比率',
        bullcorrelation             : '牛市相关性',
        bullcovariance              : '牛市协方差',
        bullmeanreturn              : '牛市中位数回报',
        calmar                      : 'Calmar比率',
        contributiones              : '对预期短缺的贡献',
        contributioneu              : '对预期上涨的贡献',
        contributionpu              : '对潜在上涨的贡献',
        contributionvar             : '对风险值的贡献',
        contributionvolatility      : '对波幅的贡献',
        correlation                 : '相关性',
        covariance                  : '协方差',
        creditspreadsdown100        : '信贷利差下跌100个基点([CUR])',
        creditspreadsdown100percent : '信贷利差下跌100个基点',
        creditspreadsdown50         : '信贷利差下跌50个基点([CUR])',
        creditspreadsdown50percent  : '信贷利差下跌50个基点',
        creditspreadsdv01           : '信贷利差DV01 ([CUR])',
        creditspreadsdv01percent    : '信贷利差DV01',
        creditspreadsup100          : '信贷利差上涨100个基点([CUR])',
        creditspreadsup100percent   : '信贷利差上涨100个基点',
        creditspreadsup50           : '信贷利差上涨50个基点([CUR])',
        creditspreadsup50percent    : '信贷利差上涨50个基点',
        ctb                         : '贡献- 基准([CUR])',
        ctbcur                      : '贡献货币 - 基准 ([CUR])',
        ctblocal                    : '贡献 - 基准（本地）',
        ctbreconcile                : '贡献 – 基准对账([CUR])',
        ctp                         : '贡献 ([CUR])',
        ctpbutterfly                : '蝴蝶贡献',
        ctpcarry                    : '结转贡献',
        ctpcashflow                 : '现金流贡献 ([CUR])',
        ctpcur                      : '贡献货币([CUR])',
        ctplocal                    : '贡献（本地）',
        ctpother                    : '其他贡献',
        ctpresidual                 : '剩余贡献',
        ctprolldown                 : '向下滚动贡献',
        ctpshift                    : '转移贡献',
        ctpspeccarry                : '特定结转贡献',
        ctpspread                   : '利差贡献',
        ctpsystcarry                : '系统化结转贡献',
        ctptrading                  : '交易贡献([CUR])',
        ctptwist                    : '扭转贡献',
        ctpyc                       : '收益曲线贡献',
        diversificationgrade        : '多元化级别',
        downsiderisk                : '下跌风险',
        downsideriskannualised      : '年化下跌风险',
        durwpend                    : '存续期权重终值',
        durwpstart                  : '存续期权重初值',
        ealloc                      : '市场配置效应',
        eallocc                     : '货币配置效应([CUR])',
        ealloclocal                 : '市场配置效应（本地）',
        ecompoundc                  : '货币复合效应([CUR])',
        egalloc                     : '市场配置效应（几何数据）',
        egallocc                    : '货币配置效应（几何数据） ([CUR])',
        egalloclocal                : '市场配置效应（几何数据）（本地）',
        egcompoundc                 : '货币复合效应（几何数据）([CUR])',
        egselec                     : '选股效应（几何数据）',
        egseleclocal                : '选股效应（几何数据）（本地）',
        egtimingc                   : '货币时机效应（几何数据）([CUR])',
        egtotal                     : '总归因效应（几何数据）([CUR])',
        egtotalc                    : '总货币效应（几何数据）([CUR])',
        egtotallocal                : '总市场效应（几何数据）（本地）',
        egtotalmca                  : '总归因效应（几何数据）([CUR])',
        einter                      : '相互影响效应',
        einterlocal                 : '相互影响效应（本地）',
        eselec                      : '选股效应',
        eselecinter                 : '选股效应（包括相互影响）',
        eselecinterlocal            : '选股效应（包括相互影响）（本地）',
        eseleclocal                 : '选股效应（本地）',
        etimingc                    : '货币时机效应([CUR])',
        etotal                      : '总归因效应([CUR])',
        etotalc                     : '总货币效应([CUR])',
        etotallocal                 : '总市场效应（本地）',
        etotalmca                   : '总归因效应([CUR])',
        expectedshortfall           : '预期短缺 ([CUR])',
        expectedshortfallpercent    : '预期短缺（%）',
        expectedupside              : '预期上涨([CUR])',
        expectedupsidepercent       : '预期上涨（%）',
        expectedvolatility          : '预期波幅 ([CUR])',
        expectedvolatilitypercent   : '预期波幅(%)',
        expostconditionalsharpe     : '事后有条件夏普比率',
        expostexpectedshortfall     : '事后预期短缺',
        expostexpectedshortfallrel  : '事后相对预期短缺',
        expostvar                   : '事后风险值',
        expostvarrel                : '事后相对风险值',
        fromdate                    : '起始日期',
        gainstolosses               : '收益：亏损',
        gainstolossesgeometric      : '收益：亏损（几何数据）',
        grossexposureend            : '总风险承担终值([CUR])',
        grossexposurestart          : '总风险承担初值([CUR])',
        indexedreturnatend          : '指数化回报终值',
        indexedreturnatstart        : '指数化回报初值',
        inflationratesdown50        : '通胀率下跌50个基点([CUR])',
        inflationratesdown50percent : '通胀率下跌50个基点',
        inflationratesdv01          : '通胀率DV01 ([CUR])',
        inflationratesdv01percent   : '通胀率DV01',
        inflationratesup50          : '通胀率上升50个基点([CUR])',
        inflationratesup50percent   : '通胀率上升50个基点',
        inforatiorel                : '信息比率（几何数据）',
        inforatioxs                 : '信息比率',
        interestratesdown100        : '利率下跌100个基点([CUR])',
        interestratesdown100percent : '利率下跌100个基点',
        interestratesdown50         : '利率下跌50个基点([CUR])',
        interestratesdown50percent  : '利率下跌50个基点',
        interestratesdv01           : '利率DV01 ([CUR])',
        interestratesdv01percent    : '利率DV01',
        interestratesup100          : '利率上升100个基点([CUR])',
        interestratesup100percent   : '利率上升100个基点',
        interestratesup50           : '利率上升50个基点([CUR])',
        interestratesup50percent    : '利率上升50个基点',
        jensensalpha                : 'Jensen阿尔法',
        kurtosis                    : '峰度',
        leverage                    : '杠杆中位数',
        leveragebeg                 : '杠杆初值',
        leverageend                 : '杠杆终值',
        longexposureend             : '多头仓风险承担终值([CUR])',
        longexposurestart           : '多头仓风险承担初值([CUR])',
        marginales                  : '边际预期短缺',
        marginaleu                  : '边际预期上涨',
        marginalpu                  : '边际潜在上涨',
        marginalvar                 : '边际风险值',
        marginalvolatility          : '边际波幅',
        marketvaluecomputableassets : '市值可计算资产([CUR])',
        maxloss                     : '最大亏损',
        maxlossrel                  : '最小亏损（相对）',
        mdpend                      : '经修订存续期终值',
        mdpstart                    : '经修订存续期初值',
        msquared                    : 'M平方',
        msquaredann                 : 'M平方',
        msquaredexcessann           : 'M平方超额',
        mvend                       : '市值终值([CUR])',
        mvstart                     : '市值初值([CUR])',
        netexposureend              : '净风险承担终值([CUR])',
        netexposurestart            : '净风险承担初值([CUR])',
        numberofsubperiods          : '[SUBPERIODS]数目',
        oneperiodhigh               : '最高[SUBPERIOD]回报',
        oneperiodlow                : '最低[SUBPERIOD]回报',
        outstanding                 : '市值',
        pandl                       : '损益([CUR])',
        percentnegativeperiods      : '[SUBPERIOD]负值（%）',
        percentnegativeperiodsrel   : '[SUBPERIOD]负值超额（%）',
        percentpositiveperiods      : '[SUBPERIOD]正值（%）',
        percentpositiveperiodsrel   : '[SUBPERIOD]正值超额%',
        periodaverage               : '[SUBPERIOD]回报',
        periodinforatiorel          : '[SUBPERIOD]信息比率（几何数据）',
        periodinforatioxs           : '[SUBPERIOD]信息比率',
        periodname                  : '期间名称',
        periodsharpe                : '[SUBPERIOD]夏普比率',
        periodsharpegeo             : '[SUBPERIOD]夏普比率（几何数据）',
        periodtrackerrrel           : '[SUBPERIOD]追踪误差（几何数据',
        periodtrackerrxs            : '[SUBPERIOD]追踪误差',
        periodtreynor               : '[SUBPERIOD]特雷诺比率',
        potentialupside             : '潜在收益 ([CUR])',
        potentialupsidepercent      : '潜在收益 (%)',
        ppresenceflag               : '整期持有',
        rb                          : '回报 – 基准([CUR])',
        rbcur                       : '回报货币 – 基准([CUR])',
        rblocal                     : '回报 – 基准（本地）',
        recoveryperiod              : '最大亏损后恢复日数',
        recoveryperiodrel           : '最大相对亏损后恢复日数',
        rel1periodhigh              : '最高[SUBPERIOD]相对回报',
        rel1periodlow               : '最低[SUBPERIOD]相对回报',
        relannualaverage            : '年化相对回报',
        relperiodaverage            : '相对回报（[SUBPERIOD]平均数）',
        relr                        : '相对回报 ([CUR])',
        relreturnannifgtyr          : '相对回报（超过1年的为年化数字）',
        relrgeom                    : '相对回报（几何数据）([CUR])',
        relrgeomlocal               : '相对回报（几何数据）（本地）',
        relrlocal                   : '相对回报（本地）',
        returnann                   : '年化[SUBPERIOD]回报',
        returnannifgtyr             : '回报（超过1年的为年化数字）',
        riskfreereturnann           : '年化无风险回报',
        riskfreereturnout           : '无风险回报',
        riskfreereturnperiod        : '[SUBPERIOD]无风险回报',
        riskweight                  : '风险权重',
        rp                          : '回报([CUR])',
        rpbutterfly                 : '蝴蝶回报',
        rpcarry                     : '结转回报',
        rpcur                       : '回报货币([CUR])',
        rplocal                     : '回报（本地）',
        rpother                     : '其他回报',
        rpresidual                  : '剩余回报',
        rprolldown                  : '向下滚动回报',
        rpshift                     : '转移回报',
        rpspeccarry                 : '特定结转回报',
        rpspread                    : '利差回报',
        rpsystcarry                 : '系统化结转回报',
        rptwist                     : '扭转回报',
        rpyc                        : '收益曲线回报',
        rsquared                    : 'R平方',
        segmentname                 : '分部名称',
        sharperatio                 : '夏普比率',
        sharperatiogeo              : '夏普比率（几何数据）',
        shortexposureend            : '空头仓风险承担终值([CUR])',
        shortexposurestart          : '空头仓风险承担初值([CUR])',
        skewness                    : '斜度',
        sortinoratio                : '[SUBPERIOD]索提诺比率',
        sortinoratioannualised      : '索提诺比率 ',
        spreadpend                  : '利差终值',
        spreadpstart                : '利差初值',
        standarderror               : '标准误差',
        stddevann                   : '年化波幅',
        stddevperiod                : '[SUBPERIOD]波幅',
        stresstest10cash            : '压力测试10 – 现金',
        stresstest10percent         : '压力测试10 – 百分比',
        stresstest1cash             : '压力测试1 - 现金',
        stresstest1percent          : '压力测试1 -百分比',
        stresstest2cash             : '压力测试2 - 现金',
        stresstest2percent          : '压力测试2 -百分比',
        stresstest3cash             : '压力测试3 - 现金',
        stresstest3percent          : '压力测试3 -百分比',
        stresstest4cash             : '压力测试4 - 现金',
        stresstest4percent          : '压力测试4 -百分比',
        stresstest5cash             : '压力测试5 - 现金',
        stresstest5percent          : '压力测试5 -百分比',
        stresstest6cash             : '压力测试6 - 现金',
        stresstest6percent          : '压力测试6 -百分比',
        stresstest7cash             : '压力测试7 - 现金',
        stresstest7percent          : '压力测试7 -百分比',
        stresstest8cash             : '压力测试8 - 现金',
        stresstest8percent          : '压力测试8 -百分比',
        stresstest9cash             : '压力测试9 - 现金',
        stresstest9percent          : '压力测试9 -百分比',
        testedbeta                  : '贝他（经测试）',
        testedcorrelation           : '相关性（经测试）',
        todate                      : '至今',
        trackingerrorrel            : '追踪误差',
        trackingerrorxs             : '追踪误差',
        treynorratio                : '特雷诺比率',
        tstatbeta2                  : 'T-stat（贝他-2）',
        tstatcorrel2                : 'T-stat（相关性-2）',
        ttmpend                     : '距到期日终值',
        ttmpstart                   : '距到期日初值',
        valueatrisk                 : '风险值 ([CUR])',
        valueatriskpercent          : '风险值 (%)',
        variance                    : '协方差',
        wb                          : '权重中位数 - 基准',
        wbbeg                       : '权重初值 - 基准',
        wbegover                    : '超额权重初值',
        wbend                       : '权重终值 - 基准',
        wendover                    : '超额权重终值',
        wover                       : '超额权重中位数',
        wp                          : '权重中位数',
        wpabsolute                  : '绝对权重中位数',
        wpabsolutebeg               : '绝对权重初值',
        wpabsoluteend               : '绝对权重终值',
        wpbeg                       : '权重初值',
        wpend                       : '权重终值',
        wpgross                     : '总权重中位数',
        wpgrossbeg                  : '总权重初值',
        wpgrossend                  : '总权重终值',
        xs1periodhigh               : '最高[SUBPERIOD]相对回报',
        xs1periodlow                : '最低[SUBPERIOD]相对回报',
        xsannualaverage             : '年化相对回报',
        xsperiodaverage             : '相对[SUBPERIOD]回报',
        xsreturnannifgtyr           : '相对回报（超过1年的为年化数字）',
        ytmpend                     : '到期收益率终值',
        ytmpstart                   : '到期收益率初值'
    },

    // ------------------------------------------------------------------ | P |

    portfoliosAnalysisPage: {
        portfoliosAnalysisText      : '投资组合分析'
    },

    portfoliosPage: {
        portfoliosText              : '投资组合'
    },

    // ------------------------------------------------------------------ | S |

    settingsPages: {
        settingsText                : '设置',
        applicationSettingsText     : '应用程序设置',
        userPreferencesText         : '用户偏好项目',
        languagesText               : '语言',
        autoLoginText               : '自动登录',
        licenseText                 : '许可',
        themesText                  : '主题（风格）',
        reloadText                  : '重新载入应用程序',
        analysisPageText            : '分析页面',
        analysisPagesText           : 'Custom Pages',
        userPageText                : '用户页面',
        userPagesText               : '用户页面',
        defaultPagesText            : '默认页面',
        pageNameText                : '页面名称',
        saveText                    : '存檔',
        resetText                   : '重置',
        aboutText                   : '关于',
        resetCurrentSettingsText    : '重置当前设置',
        resetAllSettingsText        : '重置所有设置',
        logOutText                  : '退出'
    },

    shared: {
        backText                    : '后退',
        statProText                 : 'StatPro International SARL',
        versionText                 : '版本',
        Monthly                     : '每月',
        Weekly                      : '每周',
        Quarterly                   : '每季'        
    },

    // -------------------------- | END OF FILE | -------------------------- \\
    //                     A way to avoid missing comma                      \\

    eof                             : '再见'
};
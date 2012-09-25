// ==================================================== //
// Revolution Mobile App Localization File              //
// ==================================================== //

// Overview:    Contains definitions for localizable text properties in all scripts.
// Culture:     "zh-CHT" (Traditional Chinese, China)

// ------------------------------------------
// CLIENT SIDE DEFINITIONS
// ------------------------------------------

exports.client = {
    hello: '你好',

    // CultureInfo object from the date.js source for the zh-TW culture,
    // which we've appropriated for use as Traditional Chinese.
    cultureInfo: {
        name: "zh-TW",
        englishName: "Chinese (Taiwan)",
        nativeName: "中文(台灣)",
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        abbreviatedDayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
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
            shortTime: "tt hh:mm",
            longTime: "tt hh:mm:ss",
            fullDateTime: "yyyy'年'M'月'd'日' tt hh:mm:ss",
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
        performanceBarTitle                 : '分部回報',
        riskBarTitle                        : '權重對比對風險值的貢獻',
        allocationbarTitle                  : '相對權重',
        contributionBarTitle                : '證券層面的貢獻',
        attributionBarTitle                 : '相對權重對比總效應',
        fixedIncomeContributionBarTitle     : '固定收益貢獻',
        carryContributionBarTitle           : '結轉貢獻',
        yieldCurveContributionBarTitle      : '收益曲線貢獻',
        riskNumbersBarTitle                 : '風險數字',
        performanceBubbleTitle              : '投資組合回報對比波幅',
        riskBubbleTitle                     : '投資組合回報對比風險值',
        contributionColumnTitle             : '投資組合貢獻對比基準貢獻',
        interestRatesExposureColumnTitle    : '利率風險承擔',
        creditSpreadsExposureColumnTitle    : '信貸利差風險承擔',
        dv01ExposureColumnTitle             : 'DV01風險承擔',
        attributionColumnTitle              : '歸因效應',
        allocationPieTitle                  : '投資組合權重',
        contributionPieTitle                : '投資組合權重對比對回報的貢獻',
        riskPietitle                        : '投資組合權重對比對風險值的貢獻',
        performanceGridTitle                : '表現統計數據',
        attributionGridTitle                : '總水平歸因效應',
        fixedIncomeGridTitle                : '固定收益統計數據',
        fixedIncomeContributionGridTitle    : '固定收益貢獻',
        fixedIncomeExposureGridTitle        : '固定收益風險承擔',
        performanceTopTenGridTitle          : '十隻最高權重證券',
        contributionTopTenGridTitle         : '五隻最大／最小貢獻證券',
        riskTopTenGridTitle                 : '十隻最大風險權重證券',
        performanceTreemapTitle             : '投資組合權重對比回報',
        riskTreemapTitle                    : '個別證券權重對比風險值',
        performanceLineTitle                : '期內回報',
        fixedIncomeContributionsGroupTitle  : '固定收益貢獻',
        fixedIncomeExposuresGroupTitle      : '固定收益風險承擔',
        fixedIncomeRiskNumbersGroupTitle    : '固定收益風險數字',
        performanceMasterTitle              : 'Key Performance Numbers',
        fixedIncomeMasterTitle              : 'Key Fixed Income Numbers',
        riskMasterTitle                     : 'Key Risk Numbers',
        allocationMasterTitle               : 'Key Allocation Numbers',
        contributionMasterTitle             : 'Key Contribution Numbers',
        attributionKeyNumbersTitle          : 'Key Attribution Numbers',
        allocationLongShortGridTitle        : 'Long/Short Allocation'
    },

    chartTypes: {
        AreaChart                           : '區域',
        BarChart                            : '柱狀圖',
        BubbleChart                         : '泡沫',
        ColumnChart                         : '縱列',
        CustomNumber                        : 'Custom Number',
        Group                               : '組別',
        LineChart                           : '線狀圖',
        PieChart                            : '圓餅圖',
        ScatterChart                        : '散點圖',
        SteppedAreaChart                    : 'Stepped Area',
        Table                               : '網格圖',
        TreeMap                             : '熱度圖'
    },

    chartTexts: {
        addNewPage                          : '加載新頁面……'
    },

    // ------------------------------------------------------------------ | E |

    errors: {
        noCredentialsProvidedText   : 'Please enter your email address and password.',
        chartFailedText             : '無法載入圖表。',
        accountEmptyText            : '本賬戶並不包含投資組合數據。',
        portfolioNotFoundText       : '無法找到所查詢的投資組合。',
        portfolioNotFoundReasonText : 'The portfolio you selected either does not exist, has ' + 
                                      'been deleted, or may have had sharing rights removed.',
        analysisFailedText          : '無法檢索所查詢的投資組合數據。',
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
        noPortfolioSlotAvailable    : '無相關投資組合。',
        noAnalysisSlotAvailable     : '無相關分析。',
        noTimePeriodSlotAvailable   : '無相關期間。',
        noFavouritesSlotAvailable   : '無我的最愛',
        done                        : '完成',
        cancel                      : '取消'
    },

    // ------------------------------------------------------------------ | T |
    
    tabbar: {
        favourites                  : '我的最愛',
        home                        : '主頁',
        portfolios                  : '投資組合',
        analysis                    : '分析',
        timePeriods                 : '期間',
        infos                       : '資訊',
        more                        : '更多',
        settings                    : '設定'
    },

    // -------------------------- | END OF FILE | -------------------------- \\
    //                     A way to avoid missing comma                      \\

    eof                             : '再見'
};

// ------------------------------------------
// SERVER SIDE DEFINITIONS
// ------------------------------------------

exports.server = {
    hello: '你好',

    // ------------------------------------------------------------------ | A |
    
    aboutPage: {
        aboutText                   : '關於',
        mobileText                  : 'StatPro Revolution Mobile',
        openSourceText              : 'This project is made possible by open source software.',
        poweredText                 : 'Powered by the StatPro Revolution Web API.'        
    },

    analysisPage: {
        analysisText                : '分析',        
        endDate                     : '結束日期',
        startDate                   : '開始日期'        
    },
    
    // ------------------------------------------------------------------ | E |

    errorPage: {
        errorText                   : '錯誤'
    },

    errors: {
        unknownErrorText            : '出現一個不明錯誤。',
        invalidCredentialsText      : '您輸入的用戶名稱或密碼不正確。'
    },

    eulaPage: {
        eulaText                    : 'EULA（終端用戶許可協議）'
    },

    // ------------------------------------------------------------------ | H |
    
    homePage: {        
        portfoliosText              : '投資組合',
        viewEulaText                : '檢閱EULA'
    },

    // ------------------------------------------------------------------ | L |

    languageSettingsPage: {
        settingsText                : '語言'
    },

    loginPage: {
        loginText                   : '登入',
        signUpText                  : '註冊',        
        supportText                 : '支持',
        userNamePlaceholderText     : '用戶名稱',
        passwordPlaceholderText     : '密碼'
    },

    // ------------------------------------------------------------------ | M |

    measures: {
        adjustedsharpe              : '經調整夏普比率',
        alpha                       : '阿爾法',
        annavetomaxloss             : '年化平均數：最大虧損',
        annualalpha                 : '年化阿爾法',
        bearbeta                    : '熊市貝他',
        bearcaptureratio            : '熊市捕捉比率',
        bearcorrelation             : '熊市相關性',
        bearcovariance              : '熊市協方差',
        bearmeanreturn              : '熊市中位數回報',
        beta                        : '貝他',
        bpresenceflag               : '全期持有-基準',
        bullbeta                    : '牛市貝他',
        bullcaptureratio            : '牛市捕捉比率',
        bullcorrelation             : '牛市相關性',
        bullcovariance              : '牛市協方差',
        bullmeanreturn              : '牛市中位數回報',
        calmar                      : 'Calmar比率',
        contributiones              : '對預期短缺的貢獻',
        contributioneu              : '對預期上漲的貢獻',
        contributionpu              : '對潛在上漲的貢獻',
        contributionvar             : '對風險值的貢獻',
        contributionvolatility      : '對波幅的貢獻',
        correlation                 : '相關性',
        covariance                  : '協方差',
        creditspreadsdown100        : '信貸利差下跌100個基點([CUR])',
        creditspreadsdown100percent : '信貸利差下跌100個基點',
        creditspreadsdown50         : '信貸利差下跌50個基點([CUR])',
        creditspreadsdown50percent  : '信貸利差下跌50個基點',
        creditspreadsdv01           : '信貸利差DV01 ([CUR])',
        creditspreadsdv01percent    : '信貸利差DV01',
        creditspreadsup100          : '信貸利差上漲100個基點([CUR])',
        creditspreadsup100percent   : '信貸利差上漲100個基點',
        creditspreadsup50           : '信貸利差上漲50個基點([CUR])',
        creditspreadsup50percent    : '信貸利差上漲50個基點',
        ctb                         : '貢獻- 基準([CUR])',
        ctbcur                      : '貢獻貨幣 - 基準 ([CUR])',
        ctblocal                    : '貢獻 - 基準（本地）',
        ctbreconcile                : '貢獻 – 基準對賬([CUR])',
        ctp                         : '貢獻([CUR])',
        ctpbutterfly                : '蝴蝶貢獻',
        ctpcarry                    : '結轉貢獻',
        ctpcashflow                 : '現金流貢獻 ([CUR])',
        ctpcur                      : '貢獻貨幣([CUR])',
        ctplocal                    : '貢獻（本地）',
        ctpother                    : '其他貢獻',
        ctpresidual                 : '剩餘貢獻',
        ctprolldown                 : '向下滾動貢獻',
        ctpshift                    : '轉移貢獻',
        ctpspeccarry                : '特定結轉貢獻',
        ctpspread                   : '利差貢獻',
        ctpsystcarry                : '系統化結轉貢獻',
        ctptrading                  : '交易貢獻([CUR])',
        ctptwist                    : '扭轉貢獻',
        ctpyc                       : '收益曲線貢獻',
        diversificationgrade        : '多元化級別',
        downsiderisk                : '下跌風險',
        downsideriskannualised      : '年化下跌風險',
        durwpend                    : '存續期權重終值',
        durwpstart                  : '存續期權重初值',
        ealloc                      : '市場配置效應',
        eallocc                     : '貨幣配置效應([CUR])',
        ealloclocal                 : '市場配置效應（本地）',
        ecompoundc                  : '貨幣複合效應([CUR])',
        egalloc                     : '市場配置效應（幾何數據）',
        egallocc                    : '貨幣配置效應（幾何數據）([CUR])',
        egalloclocal                : '市場配置效應（幾何數據）（本地）',
        egcompoundc                 : '貨幣複合效應（幾何數據）([CUR])',
        egselec                     : '選股效應（幾何數據）',
        egseleclocal                : '選股效應（幾何數據）（本地）',
        egtimingc                   : '貨幣時機效應（幾何數據）([CUR])',
        egtotal                     : '總歸因效應（幾何數據）([CUR])',
        egtotalc                    : '總貨幣效應（幾何數據）([CUR])',
        egtotallocal                : '總市場效應（幾何數據）（本地）',
        egtotalmca                  : '總歸因效應（幾何數據）([CUR])',
        einter                      : '相互影響效應',
        einterlocal                 : '相互影響效應（本地）',
        eselec                      : '選股效應',
        eselecinter                 : '選股效應（包括相互影響）',
        eselecinterlocal            : '選股效應（包括相互影響）（本地）',
        eseleclocal                 : '選股效應（本地）',
        etimingc                    : '貨幣時機效應([CUR])',
        etotal                      : '總歸因效應([CUR])',
        etotalc                     : '總貨幣效應([CUR])',
        etotallocal                 : '總市場效應（本地）',
        etotalmca                   : '總歸因效應([CUR])',
        expectedshortfall           : '預期短缺 ([CUR])',
        expectedshortfallpercent    : '預期短缺（%）',
        expectedupside              : '預期上漲([CUR])',
        expectedupsidepercent       : '預期上漲（%）',
        expectedvolatility          : '預期波幅 ([CUR])',
        expectedvolatilitypercent   : '預期波幅（%）',
        expostconditionalsharpe     : '事後有條件夏普比率',
        expostexpectedshortfall     : '事後預期短缺',
        expostexpectedshortfallrel  : '事後相對預期短缺',
        expostvar                   : '事後風險值',
        expostvarrel                : '事後相對風險值',
        fromdate                    : '起始日期',
        gainstolosses               : '收益：虧損',
        gainstolossesgeometric      : '收益：虧損（幾何數據）',
        grossexposureend            : '總風險承擔終值([CUR])',
        grossexposurestart          : '總風險承擔初值([CUR])',
        indexedreturnatend          : '指數化回報終值',
        indexedreturnatstart        : '指數化回報初值',
        inflationratesdown50        : '通脹率下跌50個基點([CUR])',
        inflationratesdown50percent : '通脹率下跌50個基點',
        inflationratesdv01          : '通脹率DV01 ([CUR])',
        inflationratesdv01percent   : '通脹率DV01',
        inflationratesup50          : '通脹率上升50個基點([CUR])',
        inflationratesup50percent   : '通脹率上升50個基點',
        inforatiorel                : '資訊比率（幾何數據）',
        inforatioxs                 : '資訊比率',
        interestratesdown100        : '利率下跌100個基點([CUR])',
        interestratesdown100percent : '利率下跌100個基點',
        interestratesdown50         : '利率下跌50個基點([CUR])',
        interestratesdown50percent  : '利率下跌50個基點',
        interestratesdv01           : '利率DV01 ([CUR])',
        interestratesdv01percent    : '利率DV01',
        interestratesup100          : '利率上升100個基點([CUR])',
        interestratesup100percent   : '利率上升100個基點',
        interestratesup50           : '利率上升50個基點([CUR])',
        interestratesup50percent    : '利率上升50個基點',
        jensensalpha                : 'Jensens阿爾法',
        kurtosis                    : '峰度',
        leverage                    : '槓桿中位數',
        leveragebeg                 : '槓桿初值',
        leverageend                 : '槓桿終值',
        longexposureend             : '長倉風險承擔終值([CUR])',
        longexposurestart           : '長倉風險承擔初值([CUR])',
        marginales                  : '邊際預期短缺',
        marginaleu                  : '邊際預期上漲',
        marginalpu                  : '邊際潛在上漲',
        marginalvar                 : '邊際風險值',
        marginalvolatility          : '邊際波幅',
        marketvaluecomputableassets : '市值可計算資產([CUR])',
        maxloss                     : '最大虧損',
        maxlossrel                  : '最大虧損（相對）',
        mdpend                      : '經修訂存續期終值',
        mdpstart                    : '經修訂存續期初值',
        msquared                    : 'M平方',
        msquaredann                 : 'M平方',
        msquaredexcessann           : 'M平方超額',
        mvend                       : '市值終值([CUR])',
        mvstart                     : '市值初值([CUR])',
        netexposureend              : '淨風險承擔終值([CUR])',
        netexposurestart            : '淨風險承擔初值([CUR])',
        numberofsubperiods          : '[SUBPERIODS]數目',
        oneperiodhigh               : '最高[SUBPERIOD]回報',
        oneperiodlow                : '最低[SUBPERIOD]回報',
        outstanding                 : '市值([CUR])',
        pandl                       : '損益([CUR])',
        percentnegativeperiods      : '[SUBPERIOD]負值（%）',
        percentnegativeperiodsrel   : '[SUBPERIOD]負值超額（%）',
        percentpositiveperiods      : '[SUBPERIOD]正值（%）',
        percentpositiveperiodsrel   : '[SUBPERIOD]正值超額（%）',
        periodaverage               : '[SUBPERIOD]回報',
        periodinforatiorel          : '[SUBPERIOD]資訊比率（幾何數據）',
        periodinforatioxs           : '[SUBPERIOD]資訊比率',
        periodname                  : '期間名稱',
        periodsharpe                : '[SUBPERIOD]夏普比率',
        periodsharpegeo             : '[SUBPERIOD]夏普比率（幾何數據）',
        periodtrackerrrel           : '[SUBPERIOD]追蹤誤差（幾何數據）',
        periodtrackerrxs            : '[SUBPERIOD]追蹤誤差',
        periodtreynor               : '[SUBPERIOD]特雷諾比率',
        potentialupside             : '潛在上漲([CUR])',
        potentialupsidepercent      : '潛在上漲（%）',
        ppresenceflag               : '全期持有',
        rb                          : '回報 – 基準([CUR])',
        rbcur                       : '回報貨幣 – 基準([CUR])',
        rblocal                     : '回報 – 基準（本地）',
        recoveryperiod              : '最大虧損後恢復日數',
        recoveryperiodrel           : '最大相對虧損後恢復日數',
        rel1periodhigh              : '最高[SUBPERIOD]相對回報',
        rel1periodlow               : '最低[SUBPERIOD]相對回報',
        relannualaverage            : '年化相對回報',
        relperiodaverage            : '相對回報（[SUBPERIOD]平均數）',
        relr                        : '相對回報 ([CUR])',
        relreturnannifgtyr          : '相對回報（超過1年的為年化數字）',
        relrgeom                    : '相對回報（幾何數據）([CUR])',
        relrgeomlocal               : '相對回報（幾何數據）（本地）',
        relrlocal                   : '相對回報（本地）',
        returnann                   : '年化[SUBPERIOD]回報',
        returnannifgtyr             : '回報（超過1年的為年化數字）',
        riskfreereturnann           : '年化無風險回報',
        riskfreereturnout           : '無風險回報',
        riskfreereturnperiod        : '[SUBPERIOD]無風險回報',
        riskweight                  : '風險權重',
        rp                          : '回報([CUR])',
        rpbutterfly                 : '蝴蝶回報',
        rpcarry                     : '結轉回報',
        rpcur                       : '回報貨幣([CUR])',
        rplocal                     : '回報（本地）',
        rpother                     : '其他回報',
        rpresidual                  : '剩餘回報',
        rprolldown                  : '向下滾動回報',
        rpshift                     : '轉移回報',
        rpspeccarry                 : '特定結轉回報',
        rpspread                    : '利差回報',
        rpsystcarry                 : '系統化結轉回報',
        rptwist                     : '扭轉回報',
        rpyc                        : '收益曲線回報',
        rsquared                    : 'R平方',
        segmentname                 : '分部名稱',
        sharperatio                 : '夏普比率',
        sharperatiogeo              : '夏普比率（幾何數據）',
        shortexposureend            : '短倉風險承擔終值([CUR])',
        shortexposurestart          : '短倉風險承擔初值([CUR])',
        skewness                    : '斜度',
        sortinoratio                : '[SUBPERIOD]索提諾比率',
        sortinoratioannualised      : '索提諾比率',
        spreadpend                  : '利差終值',
        spreadpstart                : '利差初值',
        standarderror               : '標準誤差',
        stddevann                   : '年化波幅',
        stddevperiod                : '[SUBPERIOD]波幅',
        stresstest10cash            : '壓力測試10 – 現金',
        stresstest10percent         : '壓力測試10 – 百分比',
        stresstest1cash             : '壓力測試1 – 現金',
        stresstest1percent          : '壓力測試1 – 百分比',
        stresstest2cash             : '壓力測試2 – 現金',
        stresstest2percent          : '壓力測試2 – 百分比',
        stresstest3cash             : '壓力測試3 – 現金',
        stresstest3percent          : '壓力測試3 – 百分比',
        stresstest4cash             : '壓力測試4 – 現金',
        stresstest4percent          : '壓力測試4 – 百分比',
        stresstest5cash             : '壓力測試5 – 現金',
        stresstest5percent          : '壓力測試5 – 百分比',
        stresstest6cash             : '壓力測試6 – 現金',
        stresstest6percent          : '壓力測試6 – 百分比',
        stresstest7cash             : '壓力測試7 – 現金',
        stresstest7percent          : '壓力測試7 – 百分比',
        stresstest8cash             : '壓力測試8 – 現金',
        stresstest8percent          : '壓力測試8 – 百分比',
        stresstest9cash             : '壓力測試9 – 現金',
        stresstest9percent          : '壓力測試9 – 百分比',
        testedbeta                  : '貝他（經測試）',
        testedcorrelation           : '相關性（經測試）',
        todate                      : '至今',
        trackingerrorrel            : '追蹤誤差',
        trackingerrorxs             : '追蹤誤差',
        treynorratio                : '特雷諾比率',
        tstatbeta2                  : 'T-stat（貝他-2）',
        tstatcorrel2                : 'T-stat（相關性-2）',
        ttmpend                     : '距到期日終值',
        ttmpstart                   : '距到期日初值',
        valueatrisk                 : '風險值([CUR])',
        valueatriskpercent          : '風險值（%）',
        variance                    : '方差',
        wb                          : '權重中位數 - 基準',
        wbbeg                       : '權重初值 - 基準',
        wbegover                    : '超額權重初值',
        wbend                       : '權重終值 - 基準',
        wendover                    : '超額權重終值',
        wover                       : '超額權重中位數',
        wp                          : '權重中位數',
        wpabsolute                  : '絕對權重中位數',
        wpabsolutebeg               : '絕對權重初值',
        wpabsoluteend               : '絕對權重終值',
        wpbeg                       : '權重初值',
        wpend                       : '權重終值',
        wpgross                     : '總權重中位數',
        wpgrossbeg                  : '總權重初值',
        wpgrossend                  : '總權重終值',
        xs1periodhigh               : '最高[SUBPERIOD]相對回報',
        xs1periodlow                : '最低[SUBPERIOD]相對回報',
        xsannualaverage             : '年化相對回報',
        xsperiodaverage             : '相對[SUBPERIOD]回報',
        xsreturnannifgtyr           : '相對回報（超過1年的為年化數字）',
        ytmpend                     : '到期收益率終值',
        ytmpstart                   : '到期收益率初值'
    },

    // ------------------------------------------------------------------ | P |

    portfoliosAnalysisPage: {
        portfoliosAnalysisText      : '投資組合分析'
    },

    portfoliosPage: {
        portfoliosText              : '投資組合'
    },

    // ------------------------------------------------------------------ | S |

    settingsPages: {
        settingsText                : '設定',
        applicationSettingsText     : '應用程式設定',
        userPreferencesText         : '用戶偏好項目',
        languagesText               : '語言',
        autoLoginText               : '自動登入',
        licenseText                 : '許可',
        themesText                  : '主題',
        reloadText                  : '重新載入應用程式',
        analysisPageText            : '分析頁面',
        analysisPagesText           : 'Custom Pages',
        userPageText                : '用戶頁面',
        userPagesText               : '用戶頁面',
        defaultPagesText            : '預設頁面',
        pageNameText                : '頁面名稱',
        saveText                    : '存檔',
        resetText                   : '重設',
        aboutText                   : '關於',
        resetCurrentSettingsText    : '重設當前設定',
        resetAllSettingsText        : '重設所有設定',
        logOutText                  : '登出'
    },

    shared: {
        backText                    : '退回',
        statProText                 : 'StatPro International SARL',
        versionText                 : '版本',
        Monthly                     : '每月',
        Weekly                      : '每週',
        Quarterly                   : '每季'        
    },

    // -------------------------- | END OF FILE | -------------------------- \\
    //                     A way to avoid missing comma                      \\

    eof                             : '再見'
};
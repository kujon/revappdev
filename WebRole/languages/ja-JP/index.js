// ==================================================== //
// Revolution Mobile App Localization File              //
// ==================================================== //

// Overview:    Contains definitions for localizable text properties in all scripts.
// Culture:     "ja-JP" (Japanese, Japan)

// ------------------------------------------
// CLIENT SIDE DEFINITIONS
// ------------------------------------------

exports.client = {
    hello: 'こんにちは',

    // CultureInfo object from the date.js source for the ja-JP culture.
    cultureInfo: {
        name: "ja-JP",
        englishName: "Japanese (Japan)",
        nativeName: "日本語 (日本)",
        dayNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
        abbreviatedDayNames: ["日", "月", "火", "水", "木", "金", "土"],
        shortestDayNames: ["日", "月", "火", "水", "木", "金", "土"],
        firstLetterDayNames: ["日", "月", "火", "水", "木", "金", "土"],
        monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        abbreviatedMonthNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        amDesignator: "午前",
        pmDesignator: "午後",
        firstDayOfWeek: 0,
        twoDigitYearMax: 2029,    
        dateElementOrder: "ymd",
        formatPatterns: {
            shortDate: "yyyy/MM/dd",
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
            jan: /^1(月)?/i,
            feb: /^2(月)?/i,
            mar: /^3(月)?/i,
            apr: /^4(月)?/i,
            may: /^5(月)?/i,
            jun: /^6(月)?/i,
            jul: /^7(月)?/i,
            aug: /^8(月)?/i,
            sep: /^9(月)?/i,
            oct: /^10(月)?/i,
            nov: /^11(月)?/i,
            dec: /^12(月)?/i,
            sun: /^日曜日/i,
            mon: /^月曜日/i,
            tue: /^火曜日/i,
            wed: /^水曜日/i,
            thu: /^木曜日/i,
            fri: /^金曜日/i,
            sat: /^土曜日/i,
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
        performanceBarTitle                 : 'セグメントリターン',
        riskBarTitle                        : '加重 対 VaR寄与度',
        allocationbarTitle                  : '相対加重',
        contributionBarTitle                : '証券レベル寄与度',
        attributionBarTitle                 : '相対加重 対 総効果',
        fixedIncomeContributionBarTitle     : '債券の寄与度',
        carryContributionBarTitle           : 'キャリー寄与度',
        yieldCurveContributionBarTitle      : 'イールドカーブ寄与度',
        riskNumbersBarTitle                 : 'リスク数',
        performanceBubbleTitle              : 'ポートフォリオリターン 対 ボラティリティ',
        riskBubbleTitle                     : 'ポートフォリオリターン 対 VaR',
        contributionColumnTitle             : 'ポートフォリオ寄与度 対 ベンチマーク寄与度',
        interestRatesExposureColumnTitle    : '金利エクスポージャー',
        creditSpreadsExposureColumnTitle    : '信用スプレッドエクスポージャー',
        dv01ExposureColumnTitle             : 'DV01エクスポージャー',
        attributionColumnTitle              : 'アトリビューション効果',
        allocationPieTitle                  : 'ポートフォリオ加重',
        contributionPieTitle                : 'ポートフォリオ加重 対 リターン寄与度',
        riskPietitle                        : 'ポートフォリオ加重 対 VaR寄与度',
        performanceGridTitle                : 'パフォーマンス統計',
        attributionGridTitle                : '全体的なアトリビューション効果',
        fixedIncomeGridTitle                : '債券統計',
        fixedIncomeContributionGridTitle    : '債券寄与度',
        fixedIncomeExposureGridTitle        : '債券エクスポージャー',
        performanceTopTenGridTitle          : '加重別証券上位10',
        contributionTopTenGridTitle         : '寄与度別証券上位5／下位5',
        riskTopTenGridTitle                 : 'リスク加重別証券上位10',
        performanceTreemapTitle             : 'ポートフォリオ加重 対 リターン',
        riskTreemapTitle                    : '各証券加重 対 VaR',
        performanceLineTitle                : '期間中のリターン',
        fixedIncomeContributionsGroupTitle  : '債券寄与度',
        fixedIncomeExposuresGroupTitle      : '債券エクスポージャー',
        fixedIncomeRiskNumbersGroupTitle    : '債券リスク数',
        performanceMasterTitle              : 'Key Performance Numbers',
        fixedIncomeMasterTitle              : 'Key Fixed Income Numbers',
        riskMasterTitle                     : 'Key Risk Numbers',
        allocationMasterTitle               : 'Key Allocation Numbers',
        contributionMasterTitle             : 'Key Contribution Numbers',
        attributionKeyNumbersTitle          : 'Key Attribution Numbers',
        allocationLongShortGridTitle        : 'Long/Short Allocation'
    },

    chartTypes: {
        AreaChart                           : '面',
        BarChart                            : '棒',
        BubbleChart                         : 'バブル',
        ColumnChart                         : '列',
        CustomNumber                        : 'Custom Number',
        Group                               : 'グループ',
        LineChart                           : '折れ線',
        PieChart                            : '円',
        ScatterChart                        : '散布図',
        SteppedAreaChart                    : 'Stepped Area',
        Table                               : '座標',
        TreeMap                             : 'ヒートマップ'
    },

    chartTexts: {
        addNewPage                          : '新規ぺージを追加'
    },

    // ------------------------------------------------------------------ | E |

    errors: {
        noCredentialsProvidedText   : 'Please enter your email address and password.',
        chartFailedText             : 'チャートを読み込めませんでした。',
        accountEmptyText            : 'この口座にはポートフォリオデータがありません。',
        portfolioNotFoundText       : '要求されたポートフォリオが見つかりませんでした。',
        portfolioNotFoundReasonText : 'The portfolio you selected either does not exist, has ' + 
                                      'been deleted, or may have had sharing rights removed.',
        analysisFailedText          : '要求されたポートフォリオデータを取得できませんでした。',
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
        noPortfolioSlotAvailable    : 'ポートフォリオがありません。',
        noAnalysisSlotAvailable     : '分析がありません。',
        noTimePeriodSlotAvailable   : '期間がありません。',
        noFavouritesSlotAvailable   : 'お気に入りがありません。',
        done                        : '行わ',
        cancel                      : 'キャンセル'
    },

    // ------------------------------------------------------------------ | T |
    
    tabbar: {
        favourites                  : 'お気に入り',
        home                        : 'ホーム',
        portfolios                  : 'ポートフォリオ',
        analysis                    : '分析',
        timePeriods                 : '期間',
        infos                       : '情報',
        more                        : '詳細',
        settings                    : '設定'
    },

    // -------------------------- | END OF FILE | -------------------------- \\
    //                     A way to avoid missing comma                      \\

    eof                             : 'さようなら'
};

// ------------------------------------------
// SERVER SIDE DEFINITIONS
// ------------------------------------------

exports.server = {
    hello: 'こんにちは',

    // ------------------------------------------------------------------ | A |
    
    aboutPage: {
        aboutText                   : '説明',
        mobileText                  : 'StatPro Revolution Mobile',
        openSourceText              : 'This project is made possible by open source software.',
        poweredText                 : 'Powered by the StatPro Revolution Web API.'        
    },

    analysisPage: {
        analysisText                : '分析',        
        endDate                     : '終了日',
        startDate                   : '開始日'        
    },
    
    // ------------------------------------------------------------------ | E |

    errorPage: {
        errorText                   : 'エラー'
    },

    errors: {
        unknownErrorText            : '不明なエラーが発生しました。',
        invalidCredentialsText      : '入力したユーザー名またはパスワードが正しくありません。'
    },

    eulaPage: {
        eulaText                    : 'EULA（エンドユーザー使用許諾契約書）'
    },

    // ------------------------------------------------------------------ | H |
    
    homePage: {        
        portfoliosText              : 'ポートフォリオ',
        viewEulaText                : 'EULAを表示'
    },

    // ------------------------------------------------------------------ | L |

    languageSettingsPage: {
        settingsText                : '言語'
    },

    loginPage: {
        loginText                   : 'ログイン',
        signUpText                  : 'サインアップ',        
        supportText                 : 'サポート',
        userNamePlaceholderText     : 'ユーザーネーム',
        passwordPlaceholderText     : 'パスワード'
    },

    // ------------------------------------------------------------------ | M |

    measures: {
        adjustedsharpe              : '調整済みシャープ',
        alpha                       : 'アルファ',
        annavetomaxloss             : '年平均：最大損失',
        annualalpha                 : '年間アルファ',
        bearbeta                    : 'ベアベータ',
        bearcaptureratio            : 'ベア－市場獲得レシオ',
        bearcorrelation             : 'ベア－市場相関性',
        bearcovariance              : 'ベア－市場共分散',
        bearmeanreturn              : 'ベア－市場平均リターン',
        beta                        : 'ベータ',
        bpresenceflag               : '全期間保持した場合－ベンチマーク',
        bullbeta                    : 'ブルベータ',
        bullcaptureratio            : 'ブル－市場獲得レシオ',
        bullcorrelation             : 'ブル－市場相関性',
        bullcovariance              : 'ブル－市場共分散',
        bullmeanreturn              : 'ブル－市場平均リターン',
        calmar                      : 'カルマー',
        contributiones              : '期待ショートフォール寄与度',
        contributioneu              : '期待アップサイド寄与度',
        contributionpu              : '潜在的アップサイド寄与度',
        contributionvar             : 'VaR寄与度',
        contributionvolatility      : 'ボラティリティ寄与度',
        correlation                 : '相関性',
        covariance                  : '共分散',
        creditspreadsdown100        : '100bps低下の信用スプレッド（[CUR]）',
        creditspreadsdown100percent : '100bps低下の信用スプレッド',
        creditspreadsdown50         : '50bps低下の信用スプレッド（[CUR]）',
        creditspreadsdown50percent  : '50bps低下の信用スプレッド',
        creditspreadsdv01           : 'DV01の信用スプレッド（[CUR]）',
        creditspreadsdv01percent    : 'DV01の信用スプレッド',
        creditspreadsup100          : '100bps上昇の信用スプレッド（[CUR]）',
        creditspreadsup100percent   : '100bps上昇の信用スプレッド',
        creditspreadsup50           : '50bps上昇の信用スプレッド（[CUR]）',
        creditspreadsup50percent    : '50bps上昇の信用スプレッド',
        ctb                         : '寄与－ベンチマーク（[CUR]）',
        ctbcur                      : '寄与通貨－ベンチマーク（[CUR]）',
        ctblocal                    : '寄与－ベンチマーク（ローカル）',
        ctbreconcile                : '寄与－ベンチマーク調整（[CUR]）',
        ctp                         : '寄与（[CUR]）',
        ctpbutterfly                : 'バタフライ寄与度',
        ctpcarry                    : 'キャリー寄与度',
        ctpcashflow                 : 'キャッシュフロー寄与度（[CUR]）',
        ctpcur                      : '寄与通貨（[CUR]）',
        ctplocal                    : '寄与（ローカル）',
        ctpother                    : 'その他の寄与度',
        ctpresidual                 : '残余寄与度',
        ctprolldown                 : 'ロールダウン寄与度',
        ctpshift                    : 'シフト寄与度',
        ctpspeccarry                : '特定キャリー寄与度',
        ctpspread                   : 'スプレッド寄与度',
        ctpsystcarry                : '体系的キャリー寄与度',
        ctptrading                  : 'トレーディング寄与度（[CUR]）',
        ctptwist                    : 'ツイスト寄与度',
        ctpyc                       : 'イールドカーブ寄与度',
        diversificationgrade        : '分散グレード',
        downsiderisk                : 'ダウンサイドリスク',
        downsideriskannualised      : '年間ダウンサイドリスク',
        durwpend                    : 'デュレーション加重終了',
        durwpstart                  : 'デュレーション加重開始',
        ealloc                      : '有効市場割当',
        eallocc                     : '有効通貨割当（[CUR]）',
        ealloclocal                 : '有効市場割当（ローカル）',
        ecompoundc                  : '有効通貨要素（[CUR]）',
        egalloc                     : '有効市場割当（幾何学的）',
        egallocc                    : '有効通貨割当（幾何学的）（[CUR]）',
        egalloclocal                : '有効市場割当（幾何学的）（ローカル）',
        egcompoundc                 : '有効通貨複利（幾何学的）（[CUR]）',
        egselec                     : '有効選択（幾何学的）',
        egseleclocal                : '有効選択（幾何学的）（ローカル）',
        egtimingc                   : '有効通貨タイミング（幾何学的）（[CUR]）',
        egtotal                     : '有効合計アトリビューション（幾何学的）（[CUR]）',
        egtotalc                    : '有効合計通貨（幾何学的）（[CUR]）',
        egtotallocal                : '有効合計市場（幾何学的）（ローカル）',
        egtotalmca                  : '有効合計アトリビューション（幾何学的）（[CUR]）',
        einter                      : '有効相互作用',
        einterlocal                 : '有効相互作用（ローカル）',
        eselec                      : '有効選択',
        eselecinter                 : '有効選択（相互作用を含む）',
        eselecinterlocal            : '有効選択（相互作用を含む）（ローカル）',
        eseleclocal                 : '有効選択（ローカル）',
        etimingc                    : '有効通貨タイミング（[CUR]）',
        etotal                      : '有効合計アトリビューション（[CUR]）',
        etotalc                     : '有効合計通貨（[CUR]）',
        etotallocal                 : '有効合計市場（ローカル）',
        etotalmca                   : '有効合計アトリビューション（[CUR]）',
        expectedshortfall           : '予想ショートフォール（[CUR]）',
        expectedshortfallpercent    : '予想ショートフォール%',
        expectedupside              : '予想アップサイド（[CUR]）',
        expectedupsidepercent       : '予想アップサイド%',
        expectedvolatility          : '予想ボラティリティ（[CUR]）',
        expectedvolatilitypercent   : '予想ボラティリティ%',
        expostconditionalsharpe     : '事後条件付きシャープ',
        expostexpectedshortfall     : '事後予想ショートフォール',
        expostexpectedshortfallrel  : '事後相対予想ショートフォール',
        expostvar                   : '事後VaR',
        expostvarrel                : '事後相対VaR',
        fromdate                    : '開始日',
        gainstolosses               : '利益：損失',
        gainstolossesgeometric      : '利益：損失（幾何学的）',
        grossexposureend            : '終了時総エクスポージャー（[CUR]）',
        grossexposurestart          : '開始時総エクスポージャー（[CUR]）',
        indexedreturnatend          : '終了時の指標リターン',
        indexedreturnatstart        : '開始時の指標リターン',
        inflationratesdown50        : '50bps低下のインフレ率（[CUR]）',
        inflationratesdown50percent : '50bps低下のインフレ率',
        inflationratesdv01          : 'インフレ率DV01（[CUR]）',
        inflationratesdv01percent   : 'インフレ率DV01',
        inflationratesup50          : '50bps上昇のインフレ率（[CUR]）',
        inflationratesup50percent   : '50bps上昇のインフレ率',
        inforatiorel                : '情報レシオ（幾何学的）',
        inforatioxs                 : '情報レシオ',
        interestratesdown100        : '100bps低下の金利（[CUR]）',
        interestratesdown100percent : '100bps低下の金利',
        interestratesdown50         : '50bps低下の金利（[CUR]）',
        interestratesdown50percent  : '50bps低下の金利）',
        interestratesdv01           : '金利DV01（[CUR]）',
        interestratesdv01percent    : '金利DV01',
        interestratesup100          : '100bps上昇の金利（[CUR]）',
        interestratesup100percent   : '100bps上昇の金利',
        interestratesup50           : '50bps上昇の金利（[CUR]）',
        interestratesup50percent    : '50bps上昇の金利',
        jensensalpha                : 'ジェンセンのα',
        kurtosis                    : '尖度',
        leverage                    : 'レバレッジ平均',
        leveragebeg                 : '開始時レバレッジ',
        leverageend                 : '終了時レバレッジ',
        longexposureend             : '終了時ロングエクスポージャー（[CUR]）',
        longexposurestart           : '開始時ロングエクスポージャー（[CUR]）',
        marginales                  : '限界予想ショートフォール',
        marginaleu                  : '限界予想アップサイド',
        marginalpu                  : '限界潜在的アップサイド',
        marginalvar                 : '限界VaR',
        marginalvolatility          : '限界ボラティリティ',
        marketvaluecomputableassets : '市場価値算出可能資産（[CUR]）',
        maxloss                     : '最大損失',
        maxlossrel                  : '最大損失、相対的',
        mdpend                      : '修正期間終了',
        mdpstart                    : '修正期間開始',
        msquared                    : 'M-二乗',
        msquaredann                 : 'M-二乗',
        msquaredexcessann           : 'M-二乗超過',
        mvend                       : '終了時市場価値（[CUR]）',
        mvstart                     : '開始時市場価値（[CUR]）',
        netexposureend              : '終了時純エクスポージャー（[CUR]）',
        netexposurestart            : '開始時純エクスポージャー（[CUR]）',
        numberofsubperiods          : '[SUBPERIODS]の数',
        oneperiodhigh               : '最高[SUBPERIOD]リターン',
        oneperiodlow                : '最低[SUBPERIOD]リターン',
        outstanding                 : '市場価値（[CUR]）',
        pandl                       : '利益と損失（[CUR]）',
        percentnegativeperiods      : 'ネガティブ%[SUBPERIODS]',
        percentnegativeperiodsrel   : 'ネガティブ超過%[SUBPERIODS]',
        percentpositiveperiods      : 'ポジティブ%[SUBPERIODS]',
        percentpositiveperiodsrel   : 'ポジティブの超過%[SUBPERIODS]',
        periodaverage               : '[SUBPERIOD]リターン',
        periodinforatiorel          : '[SUBPERIOD]情報レシオ（幾何学的）',
        periodinforatioxs           : '[SUBPERIOD]情報レシオ',
        periodname                  : '期間名',
        periodsharpe                : '[SUBPERIOD]シャープレシオ',
        periodsharpegeo             : '[SUBPERIOD]シャープレシオ（幾何学的）',
        periodtrackerrrel           : '[SUBPERIOD]トラッキングエラー（幾何学的）',
        periodtrackerrxs            : '[SUBPERIOD]トラッキングエラー',
        periodtreynor               : '[SUBPERIOD]トレイナーレシオ',
        potentialupside             : '潜在的アップサイド（[CUR]）',
        potentialupsidepercent      : '潜在的アップサイド%',
        ppresenceflag               : '全期間保持した場合',
        rb                          : 'リターン－ベンチマ－ク（[CUR]）',
        rbcur                       : '通貨リターン－ベンチマーク（[CUR]）',
        rblocal                     : 'リターン－ベンチマーク（ローカル）',
        recoveryperiod              : '最大損失後の回復日数',
        recoveryperiodrel           : '最大相対損失後の回復日数',
        rel1periodhigh              : '最高[SUBPERIOD]相対リターン',
        rel1periodlow               : '最低[SUBPERIOD]相対リターン',
        relannualaverage            : '年間相対リターン',
        relperiodaverage            : '相対リターン（[SUBPERIOD]平均）',
        relr                        : '相対リターン（[CUR]）',
        relreturnannifgtyr          : '相対リターン（1年超は年率）',
        relrgeom                    : '相対リターン（幾何学的）（[CUR]）',
        relrgeomlocal               : '相対リターン（幾何学的）（ローカル）',
        relrlocal                   : '相対リターン（ローカル）',
        returnann                   : '年間[SUBPERIOD]リターン',
        returnannifgtyr             : 'リターン（1年超は年率）',
        riskfreereturnann           : 'リスクなし年間リターン',
        riskfreereturnout           : 'リスクなしリターン',
        riskfreereturnperiod        : '[SUBPERIOD]リスクなしリターン',
        riskweight                  : 'リスク加重',
        rp                          : 'リターン（[CUR]）',
        rpbutterfly                 : 'バタフライリターン',
        rpcarry                     : 'キャリーリターン',
        rpcur                       : 'リターン通貨（[CUR]）',
        rplocal                     : 'リターン（ローカル）',
        rpother                     : 'その他のリターン',
        rpresidual                  : '残余リターン',
        rprolldown                  : 'ロールダウンリターン',
        rpshift                     : 'シフトリターン',
        rpspeccarry                 : '特定キャリーリターン',
        rpspread                    : 'スプレッドリターン',
        rpsystcarry                 : '体系的キャリーリターン',
        rptwist                     : 'ツイストリターン',
        rpyc                        : 'イールドカーブリターン',
        rsquared                    : 'R－二乗',
        segmentname                 : 'セグメント名',
        sharperatio                 : 'シャープレシオ',
        sharperatiogeo              : 'シャープレシオ（幾何学的）',
        shortexposureend            : '終了時ショートエクスポージャー（[CUR]）',
        shortexposurestart          : '開始時ショートエクスポージャー（[CUR]）',
        skewness                    : '歪度',
        sortinoratio                : '[SUBPERIOD]ソルティノレシオ',
        sortinoratioannualised      : 'ソルティノレシオ',
        spreadpend                  : 'スプレッド終了',
        spreadpstart                : 'スプレッド開始',
        standarderror               : '標準誤差',
        stddevann                   : '年間ボラティリティ',
        stddevperiod                : '[SUBPERIOD]ボラティリティ',
        stresstest10cash            : 'ストレステスト10－キャッシュ',
        stresstest10percent         : 'ストレステスト10－パーセント',
        stresstest1cash             : 'ストレステスト1－キャッシュ',
        stresstest1percent          : 'ストレステスト1－パーセント',
        stresstest2cash             : 'ストレステスト2－キャッシュ',
        stresstest2percent          : 'ストレステスト2－パーセント',
        stresstest3cash             : 'ストレステスト3－キャッシュ',
        stresstest3percent          : 'ストレステスト3－パーセント',
        stresstest4cash             : 'ストレステスト4－キャッシュ',
        stresstest4percent          : 'ストレステスト4－パーセント',
        stresstest5cash             : 'ストレステスト5－キャッシュ',
        stresstest5percent          : 'ストレステスト5－パーセント',
        stresstest6cash             : 'ストレステスト6－キャッシュ',
        stresstest6percent          : 'ストレステスト6－パーセント',
        stresstest7cash             : 'ストレステスト7－キャッシュ',
        stresstest7percent          : 'ストレステスト7－パーセント',
        stresstest8cash             : 'ストレステスト8－キャッシュ',
        stresstest8percent          : 'ストレステスト8－パーセント',
        stresstest9cash             : 'ストレステスト9－キャッシュ',
        stresstest9percent          : 'ストレステスト9－パーセント',
        testedbeta                  : 'ベータ（テスト済み）',
        testedcorrelation           : '相関性（テスト済み）',
        todate                      : '現時点まで',
        trackingerrorrel            : 'トラッキングエラー',
        trackingerrorxs             : 'トラッキングエラー',
        treynorratio                : 'トレイナーレシオ',
        tstatbeta2                  : 'T－統計（ベータ－2）',
        tstatcorrel2                : 'T－統計（相関性－2）',
        ttmpend                     : '満期日までの時間終了',
        ttmpstart                   : '満期日までの時間開始',
        valueatrisk                 : 'VaR（[CUR]）',
        valueatriskpercent          : 'VaR%',
        variance                    : '分散',
        wb                          : '加重平均－ベンチマーク',
        wbbeg                       : '開始時加重 － ベンチマーク',
        wbegover                    : '開始時超過加重',
        wbend                       : '終了時加重 － ベンチマーク',
        wendover                    : '終了時超過加重',
        wover                       : '超過加重平均',
        wp                          : '加重平均',
        wpabsolute                  : '絶対加重平均',
        wpabsolutebeg               : '開始時絶対加重',
        wpabsoluteend               : '終了時絶対加重',
        wpbeg                       : '開始時加重',
        wpend                       : '終了時加重',
        wpgross                     : '総加重平均',
        wpgrossbeg                  : '開始時総加重',
        wpgrossend                  : '終了時総加重',
        xs1periodhigh               : '最高[SUBPERIOD]相対リターン',
        xs1periodlow                : '最低[SUBPERIOD]相対リターン',
        xsannualaverage             : '年相対リターン',
        xsperiodaverage             : '相対[SUBPERIOD]リターン',
        xsreturnannifgtyr           : '相対リターン（1年超は年率）',
        ytmpend                     : '最終利回り終了',
        ytmpstart                   : '最終利回り開始'
    },

    // ------------------------------------------------------------------ | P |

    portfoliosAnalysisPage: {
        portfoliosAnalysisText      : 'ポートフォリオ分析'
    },

    portfoliosPage: {
        portfoliosText              : 'ポートフォリオ'
    },

    // ------------------------------------------------------------------ | S |

    settingsPages: {
        settingsText                : '設定',
        applicationSettingsText     : 'アプリケーション設定',
        userPreferencesText         : 'ユーザー設定',
        languagesText               : '言語',
        autoLoginText               : '自動ログイン',
        licenseText                 : 'ライセンス',
        themesText                  : 'テーマ',
        reloadText                  : 'アプリケーションを再ロード',
        analysisPageText            : '分析ページ',
        analysisPagesText           : 'Custom Pages',
        userPageText                : 'ユーザーページ',
        userPagesText               : 'ユーザーページ',
        defaultPagesText            : 'デフォルトページ',
        pageNameText                : 'ページ名',
        saveText                    : '保存',
        resetText                   : 'リセット',
        aboutText                   : '説明',
        resetCurrentSettingsText    : '現在の設定をリセット',
        resetAllSettingsText        : 'すべての設定をリセット',
        logOutText                  : 'ログアウト'
    },

    shared: {
        backText                    : '戻る',
        statProText                 : 'StatPro International SARL',
        versionText                 : 'バージョン情報',
        Monthly                     : '月',
        Weekly                      : '週',
        Quarterly                   : '四半期'        
    },

    // -------------------------- | END OF FILE | -------------------------- \\
    //                     A way to avoid missing comma                      \\

    eof                             : 'さようなら'
};
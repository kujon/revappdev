// ==================================================== //
// Revolution Mobile App Localization File              //
// ==================================================== //

// Overview:    Contains definitions for localizable text properties in all scripts.
// Culture:     "ko-KR" (Korean, Korea)

// ------------------------------------------
// CLIENT SIDE DEFINITIONS
// ------------------------------------------

exports.client = {
    hello: '안녕하세요',

    // CultureInfo object from the date.js source for the ko-KR culture.
    cultureInfo: {
        name: "ko-KR",
        englishName: "Korean (Korea)",
        nativeName: "한국어 (대한민국)",
        dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        abbreviatedDayNames: ["일", "월", "화", "수", "목", "금", "토"],
        shortestDayNames: ["일", "월", "화", "수", "목", "금", "토"],
        firstLetterDayNames: ["일", "월", "화", "수", "목", "금", "토"],
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        abbreviatedMonthNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        amDesignator: "오전",
        pmDesignator: "오후",
        firstDayOfWeek: 0,
        twoDigitYearMax: 2029,
        dateElementOrder: "ymd",
        formatPatterns: {
            shortDate: "yyyy-MM-dd",
            longDate: "yyyy'년' M'월' d'일' dddd",
            shortTime: "tt h:mm",
            longTime: "tt h:mm:ss",
            fullDateTime: "yyyy'년' M'월' d'일' dddd tt h:mm:ss",
            sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
            universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
            rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
            monthDay: "M'월' d'일'",
            yearMonth: "yyyy'년' M'월'"
        },
        regexPatterns: {
            jan: /^1(월)?/i,
            feb: /^2(월)?/i,
            mar: /^3(월)?/i,
            apr: /^4(월)?/i,
            may: /^5(월)?/i,
            jun: /^6(월)?/i,
            jul: /^7(월)?/i,
            aug: /^8(월)?/i,
            sep: /^9(월)?/i,
            oct: /^10(월)?/i,
            nov: /^11(월)?/i,
            dec: /^12(월)?/i,
            sun: /^일요일/i,
            mon: /^월요일/i,
            tue: /^화요일/i,
            wed: /^수요일/i,
            thu: /^목요일/i,
            fri: /^금요일/i,
            sat: /^토요일/i,
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
        performanceBarTitle                 : '세그먼트 수익률',
        riskBarTitle                        : '비중 vs. VaR에의 기여',
        allocationbarTitle                  : '상대 비중',
        contributionBarTitle                : '증권 레벨에서의 기여',
        attributionBarTitle                 : '상대 비중 vs. 총 영향',
        fixedIncomeContributionBarTitle     : '채권 기여',
        carryContributionBarTitle           : '캐리 기여',
        yieldCurveContributionBarTitle      : '수익률곡선 기여',
        riskNumbersBarTitle                 : '리스크 수치',
        performanceBubbleTitle              : '포트폴리오 수익률 vs. 변동성',
        riskBubbleTitle                     : '포트폴리오 수익률 vs. VaR',
        contributionColumnTitle             : '포트폴리오 기여 vs. 벤치마크 기여',
        interestRatesExposureColumnTitle    : '금리 익스포저',
        creditSpreadsExposureColumnTitle    : '신용스프레드 익스포저',
        dv01ExposureColumnTitle             : 'DV01 익스포저 ',
        attributionColumnTitle              : '귀인분석 효과',
        allocationPieTitle                  : '포트폴리오 비중',
        contributionPieTitle                : '포트폴리오 비중 vs. 수익률에의 기여',
        riskPietitle                        : '포트폴리오 비중 vs. VaR에의 기여',
        performanceGridTitle                : '실적 통계',
        attributionGridTitle                : '전체 레벨에서의 귀인분석 효과',
        fixedIncomeGridTitle                : '채권 통계',
        fixedIncomeContributionGridTitle    : '채권 기여',
        fixedIncomeExposureGridTitle        : '채권 익스포저 ',
        performanceTopTenGridTitle          : '비중에 따른 상위 10개의 증권',
        contributionTopTenGridTitle         : '실적기여도에 따른 상위 5개 / 하위 5개 증권',
        riskTopTenGridTitle                 : '리스크 비중에 따른 상위 10개의 증권',
        performanceTreemapTitle             : '포트폴리오 비중 vs. 수익률',
        riskTreemapTitle                    : '개별증권 비중 vs. VaR ',
        performanceLineTitle                : '기간 수익률',
        fixedIncomeContributionsGroupTitle  : '채권 기여',
        fixedIncomeExposuresGroupTitle      : '채권 익스포저',
        fixedIncomeRiskNumbersGroupTitle    : '채권 리스크 수치',
        performanceMasterTitle              : 'Key Performance Numbers',
        fixedIncomeMasterTitle              : 'Key Fixed Income Numbers',
        riskMasterTitle                     : 'Key Risk Numbers',
        allocationMasterTitle               : 'Key Allocation Numbers',
        contributionMasterTitle             : 'Key Contribution Numbers',
        attributionKeyNumbersTitle          : 'Key Attribution Numbers',
        allocationLongShortGridTitle        : 'Long/Short Allocation'
    },

    chartTypes: {
        AreaChart                           : '면적',
        BarChart                            : '막대',
        BubbleChart                         : '거품',
        ColumnChart                         : '열',
        CustomNumber                        : 'Custom Number',
        Group                               : '그룹',
        LineChart                           : '라인',
        PieChart                            : '파이',
        ScatterChart                        : '산재',
        SteppedAreaChart                    : 'Stepped Area',
        Table                               : '그리드',
        TreeMap                             : '히트 맵'
    },

    chartTexts: {
        addNewPage                          : '새 페이지 추가…'
    },

    // ------------------------------------------------------------------ | E |

    errors: {
        noCredentialsProvidedText   : 'Please enter your email address and password.',
        chartFailedText             : '차트를 올릴 수 없습니다.',
        accountEmptyText            : '이 계정에는 포트폴리오 데이터가 없습니다.',
        portfolioNotFoundText       : '요청하신 포트폴리오를 찾을 수 없습니다.',
        portfolioNotFoundReasonText : 'The portfolio you selected either does not exist, has ' + 
                                      'been deleted, or may have had sharing rights removed.',
        analysisFailedText          : '요청하신 포트폴리오 데이터를 검색할 수 없습니다.',
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
        noPortfolioSlotAvailable    : '포트폴리오가 없습니다.',
        noAnalysisSlotAvailable     : '분석자료가 없습니다.',
        noTimePeriodSlotAvailable   : '기간이 없습니다.',
        noFavouritesSlotAvailable   : '즐겨찾기 없음',
        done                        : '끝난',
        cancel                      : '취소'
    },

    // ------------------------------------------------------------------ | T |
    
    tabbar: {
        favourites                  : '즐겨찾기',
        home                        : '홈',
        portfolios                  : '포트폴리오',
        analysis                    : '분석',
        timePeriods                 : '기간',
        infos                       : '정보',
        more                        : '추가',
        settings                    : '설정'
    },

    // -------------------------- | END OF FILE | -------------------------- \\
    //                     A way to avoid missing comma                      \\

    eof                             : '안녕히 가세요'
};

// ------------------------------------------
// SERVER SIDE DEFINITIONS
// ------------------------------------------

exports.server = {
    hello: '안녕하세요',

    // ------------------------------------------------------------------ | A |
    
    aboutPage: {
        aboutText                   : '소개',
        mobileText                  : 'StatPro Revolution Mobile',
        openSourceText              : 'This project is made possible by open source software.',
        poweredText                 : 'Powered by the StatPro Revolution Web API.'        
    },

    analysisPage: {
        analysisText                : '분석',        
        endDate                     : '종료일',
        startDate                   : '시작일'        
    },
    
    // ------------------------------------------------------------------ | E |

    errorPage: {
        errorText                   : '오류'
    },

    errors: {
        unknownErrorText            : '알 수 없는 오류가 발생했습니다.',
        invalidCredentialsText      : '입력하신 사용자명 또는 비밀번호가 부정확합니다. '
    },

    eulaPage: {
        eulaText                    : 'EULA (최종사용자 라이선스계약)'
    },

    // ------------------------------------------------------------------ | H |
    
    homePage: {        
        portfoliosText              : '포트폴리오',
        viewEulaText                : 'EULA 보기'
    },

    // ------------------------------------------------------------------ | L |

    languageSettingsPage: {
        settingsText                : '언어'
    },

    loginPage: {
        loginText                   : '로그인',
        signUpText                  : '가입',        
        supportText                 : '지원',
        userNamePlaceholderText     : '사용자명',
        passwordPlaceholderText     : '비밀번호'
    },

    // ------------------------------------------------------------------ | M |

    measures: {
        adjustedsharpe              : '조정 샤프',
        alpha                       : '알파',
        annavetomaxloss             : '연환산 평균: 최대 손실',
        annualalpha                 : '연환산 알파',
        bearbeta                    : '베어 베타',
        bearcaptureratio            : '베어마켓 캡처 비율',
        bearcorrelation             : '베어마켓 상관관계',
        bearcovariance              : '베어마켓 공분산',
        bearmeanreturn              : '베어마켓 중간수익률',
        beta                        : '베타',
        bpresenceflag               : '전 기간 보유 – 벤치마크',
        bullbeta                    : '불 베타',
        bullcaptureratio            : '불마켓 캡처 비율',
        bullcorrelation             : '불마켓 상관관계',
        bullcovariance              : '불마켓 공분산',
        bullmeanreturn              : '불마켓 중간수익률',
        calmar                      : '칼마(Calmar)',
        contributiones              : '예상 부족분에 대한 기여',
        contributioneu              : '기대 상승분에 대한 기여',
        contributionpu              : '잠재적 상승분에 대한 기여',
        contributionvar             : 'VaR에의 기여',
        contributionvolatility      : '변동성에의 기여',
        correlation                 : '상관관계',
        covariance                  : '공분산',
        creditspreadsdown100        : '신용스프레드 100bps ([CUR]) 하락',
        creditspreadsdown100percent : '신용스프레드 100bps 하락',
        creditspreadsdown50         : '신용스프레드 50bps ([CUR]) 하락',
        creditspreadsdown50percent  : '신용스프레드 50bps 하락',
        creditspreadsdv01           : '신용스프레드 DV01 ([CUR])',
        creditspreadsdv01percent    : '신용스프레드 DV01',
        creditspreadsup100          : '신용스프레드 100bps ([CUR]) 상승',
        creditspreadsup100percent   : '신용스프레드 100bps 상승',
        creditspreadsup50           : '신용스프레드 50bps ([CUR]) 상승',
        creditspreadsup50percent    : '신용스프레드 50bps 상승',
        ctb                         : '기여 – 벤치마크 ([CUR])',
        ctbcur                      : '기여 통화 – 벤치마크 ([CUR])',
        ctblocal                    : '기여 – 벤치마크 (현지)',
        ctbreconcile                : '기여 – 벤치마크 조정',
        ctp                         : '기여 ([CUR])',
        ctpbutterfly                : '버터플라이 기여',
        ctpcarry                    : '캐리 기여',
        ctpcashflow                 : '현금흐름 기여 ([CUR])',
        ctpcur                      : '기여 통화 ([CUR])',
        ctplocal                    : '기여 (현지)',
        ctpother                    : '기타 기여',
        ctpresidual                 : '벤치마크와 무관한 기여',
        ctprolldown                 : '롤다운 기여',
        ctpshift                    : '시프트 기여',
        ctpspeccarry                : '특정 캐리 기여',
        ctpspread                   : '스프레드 기여',
        ctpsystcarry                : '체계적 캐리 기여',
        ctptrading                  : '트레이딩 기여 ([CUR])',
        ctptwist                    : '트위스트 기여',
        ctpyc                       : '수익률곡선 기여',
        diversificationgrade        : '다각화 등급',
        downsiderisk                : '하락 리스크',
        downsideriskannualised      : '연환산 하락 리스크',
        durwpend                    : '듀레이션 비중 (마지막)',
        durwpstart                  : '듀레이션 비중 (처음)',
        ealloc                      : '시장 분배 실행',
        eallocc                     : '통화 분배 실행 ([CUR])',
        ealloclocal                 : '시장 분배 실행 (현지)',
        ecompoundc                  : '통화 조합 실행 ([CUR])',
        egalloc                     : '시장 분배 실행 (기하학적)',
        egallocc                    : '통화 분배 실행 (기하학적) ([CUR])',
        egalloclocal                : '시장 분배 실행 (기하학적) (현지)',
        egcompoundc                 : '통화 조합 실행 (기하학적) ([CUR])',
        egselec                     : '선정 실행 (기하학적)',
        egseleclocal                : '선정 실행 (기하학적) (현지)',
        egtimingc                   : '통화 타이밍 실행 (기하학적) ([CUR])',
        egtotal                     : '전체 귀인분석 실행 (기하학적) ([CUR])',
        egtotalc                    : '전체 통화 실행 (기하학적) ([CUR])',
        egtotallocal                : '전체 시장 실행 (기하학적) (현지)',
        egtotalmca                  : '전체 귀인분석 실행 (기하학적) ([CUR])',
        einter                      : '상호작용 실행',
        einterlocal                 : '상호작용 실행 (현지)',
        eselec                      : '선정 실행',
        eselecinter                 : '선정 실행 (상호작용 포함)',
        eselecinterlocal            : '선정 실행 (상호작용 포함) (현지)',
        eseleclocal                 : '선정 실행 (현지)',
        etimingc                    : '통화 타이밍 실행 ([CUR])',
        etotal                      : '전체 귀인분석 실행 ([CUR])',
        etotalc                     : '전체 통화 실행 ([CUR])',
        etotallocal                 : '전체 시장 실행 (현지)',
        etotalmca                   : '전체 귀인분석 실행 ([CUR])',
        expectedshortfall           : '예상 부족분 ([CUR])',
        expectedshortfallpercent    : '예상 부족분 %',
        expectedupside              : '기대 상승분 ([CUR])',
        expectedupsidepercent       : '기대 상승분 %',
        expectedvolatility          : '기대 변동성 ([CUR])',
        expectedvolatilitypercent   : '기대 변동성 %',
        expostconditionalsharpe     : '사후 조건부 샤프 ',
        expostexpectedshortfall     : '사후 예상 부족분',
        expostexpectedshortfallrel  : '사후 상대적 예상 부족분',
        expostvar                   : '사후 VaR',
        expostvarrel                : '사후 상대 VaR',
        fromdate                    : '날짜부터',
        gainstolosses               : '수익:손실',
        gainstolossesgeometric      : '수익:손실 (기하학적)',
        grossexposureend            : '마지막 시점의 총 익스포저 ([CUR])',
        grossexposurestart          : '처음 시점의 총 익스포저 ([CUR])',
        indexedreturnatend          : '마지막 시점의 지수화 수익률',
        indexedreturnatstart        : '처음 시점의 지수화 수익률',
        inflationratesdown50        : '물가상승률 50bps 하락 ([CUR])',
        inflationratesdown50percent : '물가상승률 50bps 하락',
        inflationratesdv01          : '물가상승률 DV01 ([CUR])',
        inflationratesdv01percent   : '물가상승률 DV01',
        inflationratesup50          : '물가상승률 50bps 상승 ([CUR])',
        inflationratesup50percent   : '물가상승률 50bps 상승',
        inforatiorel                : '정보비율 (기하학적)',
        inforatioxs                 : '정보비율',
        interestratesdown100        : '금리 100bps 하락 ([CUR])',
        interestratesdown100percent : '금리 100bps 하락',
        interestratesdown50         : '금리 50bps 하락 ([CUR])',
        interestratesdown50percent  : '금리 50bps 하락 ',
        interestratesdv01           : '금리 DV01 ([CUR])',
        interestratesdv01percent    : '금리 DV01 ',
        interestratesup100          : '금리 100bps 상승 ([CUR])',
        interestratesup100percent   : '금리 100bps 상승',
        interestratesup50           : '금리 50bps 상승 ([CUR])',
        interestratesup50percent    : '금리 50bps 상승',
        jensensalpha                : '젠센(Jensens)의 알파',
        kurtosis                    : '첨도',
        leverage                    : '레버리지 중간값',
        leveragebeg                 : '처음 시점의 레버리지',
        leverageend                 : '마지막 시점의 레버리지',
        longexposureend             : '마지막 시점의 롱 익스포저 ([CUR])',
        longexposurestart           : '처음 시점의 롱 익스포저 ([CUR])',
        marginales                  : '한계 예상 부족분',
        marginaleu                  : '한계 기대 상승분',
        marginalpu                  : '한계 잠재 상승분',
        marginalvar                 : '한계 VaR',
        marginalvolatility          : '한계 변동성',
        marketvaluecomputableassets : '시장가치 계산가능자산 ([CUR])',
        maxloss                     : '최대손실',
        maxlossrel                  : '최대손실 (상대적)',
        mdpend                      : '조정 듀레이션 (마지막)',
        mdpstart                    : '조정 듀레이션 (처음)',
        msquared                    : 'M제곱',
        msquaredann                 : 'M제곱',
        msquaredexcessann           : 'M제곱 초과분',
        mvend                       : '마지막 시점의 시장가치 ([CUR])',
        mvstart                     : '처음 시점의 시장가치 ([CUR])',
        netexposureend              : '마지막 시점의 순 익스포저 ([CUR])',
        netexposurestart            : '처음 시점의 순 익스포저 ([CUR])',
        numberofsubperiods          : '[SUBPERIODS] 개수',
        oneperiodhigh               : '[SUBPERIOD] 최대 수익률',
        oneperiodlow                : '[SUBPERIOD] 최소 수익률',
        outstanding                 : '시장가치 ([CUR])',
        pandl                       : '수익 및 손실 ([CUR])',
        percentnegativeperiods      : '음의 % [SUBPERIODS]',
        percentnegativeperiodsrel   : '음의 초과 % [SUBPERIODS]',
        percentpositiveperiods      : '양의 % [SUBPERIODS]',
        percentpositiveperiodsrel   : '양의 초과 % [SUBPERIODS]',
        periodaverage               : '[SUBPERIOD] 수익률',
        periodinforatiorel          : '[SUBPERIOD] 정보비율 (기하학적)',
        periodinforatioxs           : '[SUBPERIOD] 정보비율',
        periodname                  : '기간 이름',
        periodsharpe                : '[SUBPERIOD] 샤프지수',
        periodsharpegeo             : '[SUBPERIOD] 샤프지수 (기하학적)',
        periodtrackerrrel           : '[SUBPERIOD] 추적오차 (기하학적)',
        periodtrackerrxs            : '[SUBPERIOD] 추적오차',
        periodtreynor               : '[SUBPERIOD] 트레이너지수 ',
        potentialupside             : '잠재적 상승분 ([CUR])',
        potentialupsidepercent      : '잠재적 상승분 %',
        ppresenceflag               : '전 기간 보유',
        rb                          : '수익률 – 벤치마크 ([CUR])',
        rbcur                       : '수익률 통화 – 벤치마크 ([CUR])',
        rblocal                     : '수익률 – 벤치마크 (현지)',
        recoveryperiod              : '최대 손실 이후의 회복기간',
        recoveryperiodrel           : '최대 상대 손실 이후의 회복기간',
        rel1periodhigh              : '최대 [SUBPERIOD] 상대수익률',
        rel1periodlow               : '최소 [SUBPERIOD] 상대수익률',
        relannualaverage            : '연환산 상대수익률',
        relperiodaverage            : '상대수익률 ([SUBPERIOD] 평균)',
        relr                        : '상대수익률 ([CUR])',
        relreturnannifgtyr          : '상대수익률 (1년 초과인 경우 연환산)',
        relrgeom                    : '상대수익률 (기하학적) ([CUR])',
        relrgeomlocal               : '상대수익률 (기하학적) (현지)',
        relrlocal                   : '상대수익률 (현지)',
        returnann                   : '연환산 [SUBPERIOD] 수익률',
        returnannifgtyr             : '수익률 (1년 초과인 경우 연환산)',
        riskfreereturnann           : '연환산 무위험 수익률',
        riskfreereturnout           : '무위험 수익률',
        riskfreereturnperiod        : '[SUBPERIOD] 무위험 수익률',
        riskweight                  : '리스크 비중',
        rp                          : '수익률 ([CUR])',
        rpbutterfly                 : '버터플라이 수익률 ',
        rpcarry                     : '캐리 수익률',
        rpcur                       : '수익률 통화 ([CUR])',
        rplocal                     : '수익률 (현지)',
        rpother                     : '기타 수익률',
        rpresidual                  : '벤치마크와 무관한 수익률',
        rprolldown                  : '롤다운 수익률',
        rpshift                     : '시프트 수익률',
        rpspeccarry                 : '특정 캐리 수익률',
        rpspread                    : '스프레드 수익률',
        rpsystcarry                 : '체계적 캐리 수익률',
        rptwist                     : '트위스트 수익률',
        rpyc                        : '수익률곡선 수익률',
        rsquared                    : '결정계수',
        segmentname                 : '세그먼트 이름',
        sharperatio                 : '샤프지수',
        sharperatiogeo              : '샤프지수 (기하학적)',
        shortexposureend            : '마지막 시점의 쇼트 익스포저 ([CUR])',
        shortexposurestart          : '처음 시점의 쇼트 익스포저 ([CUR])',
        skewness                    : '왜도',
        sortinoratio                : '[SUBPERIOD] 소르티노 지수',
        sortinoratioannualised      : '소르티노 지수',
        spreadpend                  : '스프레드 (마지막)',
        spreadpstart                : '스프레드 (처음)',
        standarderror               : '표준편차',
        stddevann                   : '연환산 변동성',
        stddevperiod                : '[SUBPERIOD] 변동성',
        stresstest10cash            : '스트레스 테스트 10 – 현금',
        stresstest10percent         : '스트레스 테스트 10 – 퍼센트',
        stresstest1cash             : '스트레스 테스트 1 – 현금',
        stresstest1percent          : '스트레스 테스트 1 – 퍼센트',
        stresstest2cash             : '스트레스 테스트 2 – 현금',
        stresstest2percent          : '스트레스 테스트 2 – 퍼센트',
        stresstest3cash             : '스트레스 테스트 3 – 현금',
        stresstest3percent          : '스트레스 테스트 3 – 퍼센트',
        stresstest4cash             : '스트레스 테스트 4 – 현금',
        stresstest4percent          : '스트레스 테스트 4 – 퍼센트',
        stresstest5cash             : '스트레스 테스트 5 – 현금',
        stresstest5percent          : '스트레스 테스트 5 – 퍼센트',
        stresstest6cash             : '스트레스 테스트 6 – 현금',
        stresstest6percent          : '스트레스 테스트 6 – 퍼센트',
        stresstest7cash             : '스트레스 테스트 7 – 현금',
        stresstest7percent          : '스트레스 테스트 7 – 퍼센트',
        stresstest8cash             : '스트레스 테스트 8 – 현금',
        stresstest8percent          : '스트레스 테스트 8 – 퍼센트',
        stresstest9cash             : '스트레스 테스트 9 – 현금',
        stresstest9percent          : '스트레스 테스트 9 – 퍼센트',
        testedbeta                  : '베타 (테스트 필)',
        testedcorrelation           : '상관관계 (테스트 필)',
        todate                      : '현재까지',
        trackingerrorrel            : '추적오차',
        trackingerrorxs             : '추적오차',
        treynorratio                : '트레이너 지수',
        tstatbeta2                  : 'T-stat (베타-2)',
        tstatcorrel2                : 'T-stat (상관관계-2)',
        ttmpend                     : '잔존만기 (마지막)',
        ttmpstart                   : '잔존만기 (처음)',
        valueatrisk                 : 'VaR ([CUR])',
        valueatriskpercent          : 'VaR %',
        variance                    : '분산',
        wb                          : '비중 중간값 – 벤치마크',
        wbbeg                       : '처음 시점의 비중 – 벤치마크',
        wbegover                    : '처음 시점의 초과비중',
        wbend                       : '마지막 시점의 비중 – 벤치마크 ',
        wendover                    : '마지막 시점의 초과비중',
        wover                       : '초과비중 중간값',
        wp                          : '비중 중간값',
        wpabsolute                  : '절대 비중 중간값',
        wpabsolutebeg               : '처음 시점의 절대 비중',
        wpabsoluteend               : '마지막 시점의 절대 비중',
        wpbeg                       : '처음 시점의 비중',
        wpend                       : '마지막 시점의 비중',
        wpgross                     : '총 비중 중간값',
        wpgrossbeg                  : '처음 시점의 총 비중',
        wpgrossend                  : '마지막 시점의 총 비중',
        xs1periodhigh               : '최고 [SUBPERIOD] 상대수익률',
        xs1periodlow                : '최저 [SUBPERIOD] 상대수익률',
        xsannualaverage             : '연환산 상대수익률',
        xsperiodaverage             : '[SUBPERIOD] 상대수익률',
        xsreturnannifgtyr           : '상대수익률 (1년 초과인 경우 연환산)',
        ytmpend                     : '만기수익률 (마지막)',
        ytmpstart                   : '만기수익률 (처음)'
    },

    // ------------------------------------------------------------------ | P |

    portfoliosAnalysisPage: {
        portfoliosAnalysisText      : '포트폴리오 분석'
    },

    portfoliosPage: {
        portfoliosText              : '포트폴리오'
    },

    // ------------------------------------------------------------------ | S |

    settingsPages: {
        settingsText                : '설정',
        applicationSettingsText     : '애플리케이션 설정 ',
        userPreferencesText         : '사용자 취향',
        languagesText               : '언어',
        autoLoginText               : '자동 로그인',
        licenseText                 : '라이선스',
        themesText                  : '테마',
        reloadText                  : '애플리케이션 리로드',
        analysisPageText            : '분석 페이지',
        analysisPagesText           : 'Custom Pages',
        userPageText                : '사용자 페이지',
        userPagesText               : '사용자 페이지들',
        defaultPagesText            : '기본 페이지들',
        pageNameText                : '페이지 이름',
        saveText                    : '저장',
        resetText                   : '리셋',
        aboutText                   : '소개',
        resetCurrentSettingsText    : '현재 설정 리셋',
        resetAllSettingsText        : '모든 설정 리셋',
        logOutText                  : '로그아웃'
    },

    shared: {
        backText                    : '뒤로',
        statProText                 : 'StatPro International SARL',
        versionText                 : '버전',
        Monthly                     : '월간',
        Weekly                      : '주간',
        Quarterly                   : '분기별'        
    },

    // -------------------------- | END OF FILE | -------------------------- \\
    //                     A way to avoid missing comma                      \\

    eof                             : '안녕히 가세요'
};
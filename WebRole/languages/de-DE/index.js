// ==================================================== //
// Revolution Mobile App Localization File              //
// ==================================================== //

// Overview:    Contains definitions for localizable text properties in all scripts.
// Culture:     "de_DE" (German, Germany)

// ------------------------------------------
// CLIENT SIDE DEFINITIONS
// ------------------------------------------

exports.client = {
    hello: 'Hallo!',

    // CultureInfo object from the date.js source for the de-DE culture.
    cultureInfo: {
        name: "de-DE",
        englishName: "German (Germany)",
        nativeName: "Deutsch (Deutschland)",
        dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        abbreviatedDayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        shortestDayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        firstLetterDayNames: ["S", "M", "D", "M", "D", "F", "S"],
        monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        abbreviatedMonthNames: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        amDesignator: "",
        pmDesignator: "",
        firstDayOfWeek: 1,
        twoDigitYearMax: 2029,
        dateElementOrder: "dmy",
        formatPatterns: {
            shortDate: "dd.MM.yyyy",
            longDate: "dddd, d. MMMM yyyy",
            shortTime: "HH:mm",
            longTime: "HH:mm:ss",
            fullDateTime: "dddd, d. MMMM yyyy HH:mm:ss",
            sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
            universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
            rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
            monthDay: "dd MMMM",
            yearMonth: "MMMM yyyy"
        },
        regexPatterns: {
            jan: /^jan(uar)?/i,
            feb: /^feb(ruar)?/i,
            mar: /^märz/i,
            apr: /^apr(il)?/i,
            may: /^mai/i,
            jun: /^jun(i)?/i,
            jul: /^jul(i)?/i,
            aug: /^aug(ust)?/i,
            sep: /^sep(t(ember)?)?/i,
            oct: /^okt(ober)?/i,
            nov: /^nov(ember)?/i,
            dec: /^dez(ember)?/i,
            sun: /^sonntag/i,
            mon: /^montag/i,
            tue: /^dienstag/i,
            wed: /^mittwoch/i,
            thu: /^donnerstag/i,
            fri: /^freitag/i,
            sat: /^samstag/i,
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
        performanceBarTitle                 : 'Segment Rendite',
        riskBarTitle                        : 'Gewicht vs. VaR-Beitrag',
        allocationbarTitle                  : 'Relatives Gewicht',
        contributionBarTitle                : 'Security Level Contribution',
        attributionBarTitle                 : 'Relative Weight vs. Total Effects',
        fixedIncomeContributionBarTitle     : 'Fixed Income Beitrag',
        carryContributionBarTitle           : 'Carry Beitrag',
        yieldCurveContributionBarTitle      : 'Zinsenkurve Beitrag',
        riskNumbersBarTitle                 : 'Risiko Nummern',
        performanceBubbleTitle              : 'Portfolio Rendite vs. Volatilität',
        riskBubbleTitle                     : 'Portfolio Rendite vs. VaR',
        contributionColumnTitle             : 'Portfolio Beitrag vs. Benchmark Beitrag',
        interestRatesExposureColumnTitle    : 'Zinsen Exposure',
        creditSpreadsExposureColumnTitle    : 'Credit Spread Exposure',
        dv01ExposureColumnTitle             : 'DV01 Exposure',
        attributionColumnTitle              : 'Attributionseffekte',
        allocationPieTitle                  : 'Portfolio Gewicht',
        contributionPieTitle                : 'Portfolio Gewicht vs. Renditenbeitrag',
        riskPietitle                        : 'Portfolio Gewicht vs. VaR-Beitrag',
        performanceGridTitle                : 'Performance Kennzahlen',
        attributionGridTitle                : 'Totalniveau Attributionseffekte',
        fixedIncomeGridTitle                : 'Fixed Income Kennzahlen',
        fixedIncomeContributionGridTitle    : 'Fixed Income Beitrag',
        fixedIncomeExposureGridTitle        : 'Fixed Income Exposure',
        performanceTopTenGridTitle          : 'Top 10 Wertpapiere nach Gewicht',
        contributionTopTenGridTitle         : 'Top 5 / Bottom 5 Wertpapiere nach Beitrag',
        riskTopTenGridTitle                 : 'Top 10 Wertpapiere nach Risk Weight',
        performanceTreemapTitle             : 'Portfolio Gewicht vs. Rendite',
        riskTreemapTitle                    : 'Individuelles Wertpapier Gewicht vs. VaR',
        performanceLineTitle                : 'Return Over Period',
        fixedIncomeContributionsGroupTitle  : 'Fixed Income Beiträge',
        fixedIncomeExposuresGroupTitle      : 'Fixed Income Exposures',
        fixedIncomeRiskNumbersGroupTitle    : 'Fixed Income Risiko Nummern',
        performanceMasterTitle              : 'Key Performance Numbers',
        fixedIncomeMasterTitle              : 'Key Fixed Income Numbers',
        riskMasterTitle                     : 'Key Risk Numbers',
        allocationMasterTitle               : 'Key Allocation Numbers',
        contributionMasterTitle             : 'Key Contribution Numbers',
        attributionKeyNumbersTitle          : 'Key Attribution Numbers',
        allocationLongShortGridTitle        : 'Long/Short Allocation'
    },

    chartTypes: {
        AreaChart                           : 'Flächendiagramm',
        BarChart                            : 'Balkendiagramm',
        BubbleChart                         : 'Blasendiagramm',
        ColumnChart                         : 'Säulendiagramm',
        CustomNumber                        : 'Custom Number',
        Group                               : 'Gruppe',
        LineChart                           : 'Liniendiagramm',
        PieChart                            : 'Kreisdiagramm',
        ScatterChart                        : 'Punktdiagramm',
        SteppedAreaChart                    : 'Stepped Area',
        Table                               : 'Tabelle',
        TreeMap                             : 'Heatmap'
    },

    chartTexts: {
        addNewPage                          : 'Neue Seite hinzufügen...'
    },

    // ------------------------------------------------------------------ | E |

    errors: {
        chartFailedText             : 'Das Diagramm konnte nicht geladen werden.',
        accountEmptyText            : 'Dieser Konto enthält keine Portfoliodaten.',
        portfolioNotFoundText       : 'Das angeforderte Portfolio wurde nicht gefunden.',        
        portfolioNotFoundReasonText : 'The portfolio you selected either does not exist, has ' + 
                                      'been deleted, or may have had sharing rights removed.',
        analysisFailedText          : 'Die angeforderte Portfolio-Analyse wurde nicht abgerufen.',
        analysisFailedReasonText    : 'The analysis you selected may still be calculating, ' + 
                                      'or may not have any results to display. Please also ' + 
                                      'ensure that the account associated with this portfolio ' + 
                                      'is active by logging on via the StatPro Revolution website.'
    },

    // ------------------------------------------------------------------ | S |

    shared: {
        decimalSymbol               : ',',
        groupingSymbol              : '.'        
    }, 

    spinningWheel: {
        noPortfolioSlotAvailable    : 'Keine Portfolios verfügbar.',
        noAnalysisSlotAvailable     : 'Keine Analysen verfügbar.',
        noTimePeriodSlotAvailable   : 'Keine Perioden verfügbar.',
        noFavouritesSlotAvailable   : 'Keine Favoriten',
        done                        : 'Fertig',
        cancel                      : 'Abbrechen'
    },

    // ------------------------------------------------------------------ | T |
    
    tabbar: {
        favourites                  : 'Favoriten',
        home                        : 'Startseite',
        portfolios                  : 'Portfolios',
        analysis                    : 'Analysen',
        timePeriods                 : 'Perioden',
        infos                       : 'Info',
        more                        : 'Mehr',
        settings                    : 'Einstellungen'
    },

    // -------------------------- | END OF FILE | -------------------------- \\
    //                     A way to avoid missing comma                      \\

    eof                             : 'Auf Wiedersehen'
};

// ------------------------------------------
// SERVER SIDE DEFINITIONS
// ------------------------------------------

exports.server = {
    hello: 'Hallo!',

    // ------------------------------------------------------------------ | A |
    
    aboutPage: {
        aboutText                   : 'Über StatPro Revolution Mobile',
        githubText                  : 'Fork our app repository on <a href="https://github.com/statprorevolution/revappdev">github</a>.',
        mobileText                  : 'StatPro Revolution Mobile',
        openSourceText              : 'This project is made possible by open source software.',
        poweredText                 : 'Powered by the StatPro Revolution Web API.'        
    },

    analysisPage: {
        analysisText                : 'Analyse',        
        endDate                     : 'Enddatum',
        startDate                   : 'Startdatum'        
    },
    
    // ------------------------------------------------------------------ | E |

    errorPage: {
        errorText                   : 'Fehler'
    },

    errors: {
        unknownErrorText            : 'Ein unbekannter Fehler ist aufgetreten.',
        invalidCredentialsText      : 'Der Benutzername oder das eingegebene Passwort ist falsch.'
    },

    eulaPage: {
        eulaText                    : 'EULA Lizenz'
    },

    // ------------------------------------------------------------------ | H |
    
    homePage: {
        logOutText                  : 'Abmelden',
        portfoliosText              : 'Portfolios',
        viewEulaText                : 'EULA übersehen',
        testText                    : 'Test'
    },

    // ------------------------------------------------------------------ | L |

    languageSettingsPage: {
        settingsText                : 'Sprachen'
    },

    loginPage: {
        loginText                   : 'Anmelden',
        signUpText                  : 'Registrieren',        
        supportText                 : 'Hilfebereich',
        userNamePlaceholderText     : 'Benutzername',
        passwordPlaceholderText     : 'Passwort'
    },

    // ------------------------------------------------------------------ | M |

    measures: {
        adjustedsharpe              : 'Angepasste Sharpe Ratio',
        alpha                       : 'Alpha',
        annavetomaxloss             : 'Annualisierter Durchschnitt:Max Verlust',
        annualalpha                 : 'Annualisiertes Alpha',
        bearbeta                    : 'Bear Beta',
        bearcaptureratio            : 'Bear-Market Capture Ratio',
        bearcorrelation             : 'Bear Korrelation',
        bearcovariance              : 'Bear-Market Kovarianz',
        bearmeanreturn              : 'Bear-Market Mittelrendite',
        beta                        : 'Beta',
        bpresenceflag               : 'Die ganze Zeit gehaltet - Benchmark',
        bullbeta                    : 'Bull Beta',
        bullcaptureratio            : 'Bull-Market Capture Ratio',
        bullcorrelation             : 'Bull Korrelation',
        bullcovariance              : 'Bull-Market Kovarianz',
        bullmeanreturn              : 'Bull-Market Mittelrendite',
        calmar                      : 'Calmar',
        contributiones              : 'Expected Shortfall Beitrag',
        contributioneu              : 'Expected Upside Beitrag',
        contributionpu              : 'Potential Upside Beitrag',
        contributionvar             : 'VaR-Beitrag',
        contributionvolatility      : 'Volatilität Beitrag',
        correlation                 : 'Korrelation',
        covariance                  : 'Kovarianz',
        creditspreadsdown100        : 'Credit Spreads 100bps Niedriger ([CUR])',
        creditspreadsdown100percent : 'Credit Spreads 100bps Niedriger',
        creditspreadsdown50         : 'Credit Spreads 50bps Niedriger ([CUR])',
        creditspreadsdown50percent  : 'Credit Spreads 50bps Niedriger',
        creditspreadsdv01           : 'Credit Spreads DV01 ([CUR])',
        creditspreadsdv01percent    : 'Credit Spreads DV01',
        creditspreadsup100          : 'Credit Spreads 100bps Höher ([CUR])',
        creditspreadsup100percent   : 'Credit Spreads 100bps Höher',
        creditspreadsup50           : 'Credit Spreads 50bps Höher ([CUR])',
        creditspreadsup50percent    : 'Credit Spreads 50bps Höher',
        ctb                         : 'Beitrag - Benchmark ([CUR])',
        ctbcur                      : 'Währungsbeitrag - Benchmark ([CUR])',
        ctblocal                    : 'Beitrag - Benchmark (Lokal)',
        ctbreconcile                : 'Beitrag - Benchmark Beilegung ([CUR])',
        ctp                         : 'Beitrag ([CUR])',
        ctpbutterfly                : 'Butterfly Beitrag',
        ctpcarry                    : 'Carry Beitrag',
        ctpcashflow                 : 'Cashflow Beitrag ([CUR])',
        ctpcur                      : 'Währungsbeitrag ([CUR])',
        ctplocal                    : 'Beitrag (Local)',
        ctpother                    : 'Sonstiger Beitrag',
        ctpresidual                 : 'Residual Beitrag',
        ctprolldown                 : 'Roll-Down Beitrag',
        ctpshift                    : 'Shift Beitrag',
        ctpspeccarry                : 'Spezifischer Carry Beitrag',
        ctpspread                   : 'Spread Beitrag',
        ctpsystcarry                : 'Systematischer Carry Beitrag',
        ctptrading                  : 'Trading Beitrag ([CUR])',
        ctptwist                    : 'Twist Beitrag',
        ctpyc                       : 'Zinskurve Beitrag',
        diversificationgrade        : 'Diversifikationsgrad',
        downsiderisk                : 'Downside Risk',
        downsideriskannualised      : 'Downside Risk Annualisiert',
        durwpend                    : 'Duration Endgewicht',
        durwpstart                  : 'Duration Startgewicht',
        ealloc                      : 'Effekt Marktallokation',
        eallocc                     : 'Effekt Währungsallokation ([CUR])',
        ealloclocal                 : 'Effekt Marktallokation (Lokal)',
        ecompoundc                  : 'Effekt Währung Compoundierung ([CUR])',
        egalloc                     : 'Effekt Marktallokation (Geometrisch)',
        egallocc                    : 'Effekt Währungsallokation (Geometrisch) ([CUR])',
        egalloclocal                : 'Effekt Marktallokation (Geometrisch) (Lokal)',
        egcompoundc                 : 'Effekt Währung Compoundierung (Geometrisch) ([CUR])',
        egselec                     : 'Effekt Selektion (Geometrisch)',
        egseleclocal                : 'Effekt Selektion (Geometrisch) (Lokal)',
        egtimingc                   : 'Effekt Währung Timing (Geometrisch) ([CUR])',
        egtotal                     : 'Effect Gesamt Attribution (Geometrisch) ([CUR])',
        egtotalc                    : 'Effect Gesamt Währung (Geometrisch) ([CUR])',
        egtotallocal                : 'Effect Gesamt Markt (Geometrisch) (Local)',
        egtotalmca                  : 'Effect Gesamt Attribution (Geometrisch) ([CUR])',
        einter                      : 'Effect Interaktion',
        einterlocal                 : 'Effect Interaktion (Lokal)',
        eselec                      : 'Effect Selektion',
        eselecinter                 : 'Effect Selektion (Incl. Interaktion)',
        eselecinterlocal            : 'Effect Selektion (Incl. Interaktion) (Lokal)',
        eseleclocal                 : 'Effect Selektion (Lokal)',
        etimingc                    : 'Effect Currency Timing ([CUR])',
        etotal                      : 'Effekte Gesamt Attribution ([CUR])',
        etotalc                     : 'Effekt Gesamt Währung ([CUR])',
        etotallocal                 : 'Effekt Gesamt Markt (Lokal)',
        etotalmca                   : 'Effekte Gesamt Attribution ([CUR])',
        expectedshortfall           : 'Expected Shortfall ([CUR])',
        expectedshortfallpercent    : '% Expected Shortfall',
        expectedupside              : 'Expected Upside ([CUR])',
        expectedupsidepercent       : '% Expected Upside',
        expectedvolatility          : 'Expected Volatility ([CUR])',
        expectedvolatilitypercent   : '% Expected Volatility',
        expostconditionalsharpe     : 'Ex-Post Konditional-Sharpe',
        expostexpectedshortfall     : 'Ex-Post Expected Shortfall',
        expostexpectedshortfallrel  : 'Ex-Post Relativer Expected Shortfall',
        expostvar                   : 'Ex-Post VaR',
        expostvarrel                : 'Ex-Post Relativer VaR',
        fromdate                    : 'Vom Datum',
        gainstolosses               : 'Gewinn:Verlust',
        gainstolossesgeometric      : 'Gewinn:Verlust (Geometrisch)',
        grossexposureend            : 'Gross Exposure am Ende ([CUR])',
        grossexposurestart          : 'Gross Exposure am Start ([CUR])',
        indexedreturnatend          : 'Indizierte Rendite am Ende',
        indexedreturnatstart        : 'Indizierte Rendite am Start',
        inflationratesdown50        : 'Inflationsraten 50bps Niedriger ([CUR])',
        inflationratesdown50percent : 'Inflationsraten 50bps Niedriger',
        inflationratesdv01          : 'Inflationsraten DV01 ([CUR])',
        inflationratesdv01percent   : 'Inflationsraten DV01',
        inflationratesup50          : 'Inflationsraten 50bps Höher ([CUR])',
        inflationratesup50percent   : 'Inflationsraten 50bps Höher',
        inforatiorel                : 'Information Ratio (Geometrisch)',
        inforatioxs                 : 'Information Ratio',
        interestratesdown100        : 'Zinssätze 100bps Niedriger ([CUR])',
        interestratesdown100percent : 'Zinssätze 100bps Niedriger',
        interestratesdown50         : 'Zinssätze 50bps Niedriger ([CUR])',
        interestratesdown50percent  : 'Zinssätze 50bps Niedriger',
        interestratesdv01           : 'Zinssätze DV01 ([CUR])',
        interestratesdv01percent    : 'Zinssätze DV01',
        interestratesup100          : 'Zinssätze 100bps Höher ([CUR])',
        interestratesup100percent   : 'Zinssätze 100bps Höher',
        interestratesup50           : 'Zinssätze 50bps Höher ([CUR])',
        interestratesup50percent    : 'Zinssätze 50bps Höher',
        jensensalpha                : 'Jensens Alpha',
        kurtosis                    : 'Kurtosis',
        leverage                    : 'Hebel Durchschnitt',
        leveragebeg                 : 'Hebel am Start',
        leverageend                 : 'Hebel am Ende',
        longexposureend             : 'Long Exposure am Ende ([CUR])',
        longexposurestart           : 'Long Exposure am Start ([CUR])',
        marginales                  : 'Marginaler Expected Shortfall',
        marginaleu                  : 'Marginaler Expected Upside',
        marginalpu                  : 'Marginaler Potential Upside',
        marginalvar                 : 'Marginaler Value At Risk',
        marginalvolatility          : 'Marginale Volatilität',
        marketvaluecomputableassets : 'Marktwert Berechenbare Assets ([CUR])',
        maxloss                     : 'Maximaler Verlust',
        maxlossrel                  : 'Maximaler Relativer Verlust',
        mdpend                      : 'Modified Duration Ende',
        mdpstart                    : 'Modified Duration Start',
        msquared                    : 'M-Quadrat',
        msquaredann                 : 'M-Quadrat',
        msquaredexcessann           : 'M-Quadrat Excess',
        mvend                       : 'Marktwert am Ende ([CUR])',
        mvstart                     : 'Marktwert am Start ([CUR])',
        netexposureend              : 'Net Exposure am Ende ([CUR])',
        netexposurestart            : 'Net Exposure am Start ([CUR])',
        numberofsubperiods          : 'Nummer von [SUBPERIODS]',
        oneperiodhigh               : 'Höchste [SUBPERIOD] Rendite',
        oneperiodlow                : 'Niedrigste [SUBPERIOD] Rendite',
        outstanding                 : 'Marktwert ([CUR])',
        pandl                       : 'Gewinn und Verlust ([CUR])',
        percentnegativeperiods      : '% Negative [SUBPERIODS]',
        percentnegativeperiodsrel   : 'Excess % of Negative [SUBPERIODS]',
        percentpositiveperiods      : '% Positive [SUBPERIODS]',
        percentpositiveperiodsrel   : 'Excess % of Positive [SUBPERIODS]',
        periodaverage               : '[SUBPERIOD] Rendite',
        periodinforatiorel          : '[SUBPERIOD] Information Ratio (Geometrisch)',
        periodinforatioxs           : '[SUBPERIOD] Information Ratio',
        periodname                  : 'Periodenname',
        periodsharpe                : '[SUBPERIOD] Sharpe Ratio',
        periodsharpegeo             : '[SUBPERIOD] Sharpe Ratio (Geometrisch)',
        periodtrackerrrel           : '[SUBPERIOD] Tracking Error (Geometrisch)',
        periodtrackerrxs            : '[SUBPERIOD] Tracking Error',
        periodtreynor               : '[SUBPERIOD] Treynor Ratio',
        potentialupside             : 'Potential Upside ([CUR])',
        potentialupsidepercent      : '% Potential Upside',
        ppresenceflag               : 'Die ganze Zeit gehaltet',
        rb                          : 'Rendite - Benchmark ([CUR])',
        rbcur                       : 'Rendite Währung - Benchmark ([CUR])',
        rblocal                     : 'Rendite - Benchmark (Lokal)',
        recoveryperiod              : 'Erholungstage nach Max Verlust',
        recoveryperiodrel           : 'Erholungstage nach Max Relativen Verlust',
        rel1periodhigh              : 'Höchste [SUBPERIOD] Relative Rendite',
        rel1periodlow               : 'Niedrigste [SUBPERIOD] Relative Rendite',
        relannualaverage            : 'Annualisierte Relative Rendite',
        relperiodaverage            : 'Relative Rendite ([SUBPERIOD] Mittelwert)',
        relr                        : 'Relative Rendite ([CUR])',
        relreturnannifgtyr          : 'Relative Rendite (Annualisiert falls > 1 Jahr)',
        relrgeom                    : 'Relative Rendite (Geometrisch) ([CUR])',
        relrgeomlocal               : 'Relative Rendite (Geometrisch) (Lokal)',
        relrlocal                   : 'Relative Rendite (Lokal)',
        returnann                   : 'Annualisierte  [SUBPERIOD] Rendite',
        returnannifgtyr             : 'Rendite (Annualisiert falls > 1 Jahr)',
        riskfreereturnann           : 'Annualisierte Risikolose Rendite',
        riskfreereturnout           : 'Risikolose Rendite',
        riskfreereturnperiod        : '[SUBPERIOD] Risikolose Rendite',
        riskweight                  : 'Risk Weight',
        rp                          : 'Rendite ([CUR])',
        rpbutterfly                 : 'Butterfly Rendite',
        rpcarry                     : 'Carry Rendite',
        rpcur                       : 'Rendite Währung ([CUR])',
        rplocal                     : 'Rendite (Lokal)',
        rpother                     : 'Sonstige Rendite',
        rpresidual                  : 'Residuale Rendite',
        rprolldown                  : 'Roll-Down Rendite',
        rpshift                     : 'Shift Rendite',
        rpspeccarry                 : 'Specifisch Carry Rendite',
        rpspread                    : 'Spread Rendite',
        rpsystcarry                 : 'Systematisch Carry Rendite',
        rptwist                     : 'Twist Rendite',
        rpyc                        : 'Zinskurve Rendite',
        rsquared                    : 'R-Quadrat',
        segmentname                 : 'Segment Name',
        sharperatio                 : 'Sharpe Ratio',
        sharperatiogeo              : 'Sharpe Ratio (Geometrisch)',
        shortexposureend            : 'Short Exposure am Ende ([CUR])',
        shortexposurestart          : 'Short Exposure am Start ([CUR])',
        skewness                    : 'Skewness',
        sortinoratio                : '[SUBPERIOD] Sortino Ratio',
        sortinoratioannualised      : 'Sortino Ratio',
        spreadpend                  : 'Spreadwert Ende',
        spreadpstart                : 'Spreadwert Start',
        standarderror               : 'Standardfehler',
        stddevann                   : 'Annualisierte Volatilität',
        stddevperiod                : '[SUBPERIOD] Volatilität',
        stresstest10cash            : 'Stress Test 10 - Cash',
        stresstest10percent         : 'Stress Test 10 - Prozent',
        stresstest1cash             : 'Stress Test 1 - Cash',
        stresstest1percent          : 'Stress Test 1 - Prozent',
        stresstest2cash             : 'Stress Test 2 - Cash',
        stresstest2percent          : 'Stress Test 2 - Prozent',
        stresstest3cash             : 'Stress Test 3 - Cash',
        stresstest3percent          : 'Stress Test 3 - Prozent',
        stresstest4cash             : 'Stress Test 4 - Cash',
        stresstest4percent          : 'Stress Test 4 - Prozent',
        stresstest5cash             : 'Stress Test 5 - Cash',
        stresstest5percent          : 'Stress Test 5 - Prozent',
        stresstest6cash             : 'Stress Test 6 - Cash',
        stresstest6percent          : 'Stress Test 6 - Prozent',
        stresstest7cash             : 'Stress Test 7 - Cash',
        stresstest7percent          : 'Stress Test 7 - Prozent',
        stresstest8cash             : 'Stress Test 8 - Cash',
        stresstest8percent          : 'Stress Test 8 - Prozent',
        stresstest9cash             : 'Stress Test 9 - Cash',
        stresstest9percent          : 'Stress Test 9 - Prozent',
        testedbeta                  : 'Getestetes Beta',
        testedcorrelation           : 'Getestete Korrelation',
        todate                      : 'Zum Datum',
        trackingerrorrel            : 'Tracking Error',
        trackingerrorxs             : 'Tracking Error',
        treynorratio                : 'Treynor Ratio',
        tstatbeta2                  : 'T-stat (Beta-2)',
        tstatcorrel2                : 'T-stat (Korrelation-2)',
        ttmpend                     : 'Zeit bis zur Fälligkeit Ende',
        ttmpstart                   : 'Zeit bis zur Fälligkeit Start',
        valueatrisk                 : 'Value At Risk ([CUR])',
        valueatriskpercent          : '% Value At Risk',
        variance                    : 'Varianz',
        wb                          : 'Gewicht Mittelwert - Benchmark',
        wbbeg                       : 'Gewicht am Start - Benchmark',
        wbegover                    : 'Übergewicht am Start',
        wbend                       : 'Gewicht am Ende - Benchmark',
        wendover                    : 'Übergewicht am Ende',
        wover                       : 'Übergewicht Mittelwert',
        wp                          : 'Gewicht Mittelwert',
        wpabsolute                  : 'Absoluter Gewicht Mittelwert',
        wpabsolutebeg               : 'Absoluter Gewicht am Start',
        wpabsoluteend               : 'Absoluter Gewicht am Ende',
        wpbeg                       : 'Gewicht am Start',
        wpend                       : 'Gewicht am Ende',
        wpgross                     : 'Bruttogewicht Mittelwert',
        wpgrossbeg                  : 'Bruttogewicht am Start',
        wpgrossend                  : 'Bruttogewicht am Ende',
        xs1periodhigh               : 'Höchste [SUBPERIOD] Relative Rendite',
        xs1periodlow                : 'Niedrigste [SUBPERIOD] Relative Rendite',
        xsannualaverage             : 'Annualisierte Relative Rendite',
        xsperiodaverage             : 'Relative [SUBPERIOD] Rendite',
        xsreturnannifgtyr           : 'Relative Rendite (Annualisiert falls > 1 Jahr)',
        ytmpend                     : 'Rückzahlungsrendite am Ende',
        ytmpstart                   : 'Rückzahlungsrendite am Start'
    },

    // ------------------------------------------------------------------ | P |

    portfoliosAnalysisPage: {
        portfoliosAnalysisText      : 'Portfolio-Analyse'
    },

    portfoliosPage: {
        portfoliosText              : 'Portfolios'
    },

    // ------------------------------------------------------------------ | S |

    settingsPages: {
        settingsText                : 'Einstellungen',
        applicationSettingsText     : 'Applikationeinstellungen',
        userPreferencesText         : 'Benutzereinstellungen',
        languagesText               : 'Sprachen',
        autoLoginText               : 'Automatische Anmeldung',
        licenseText                 : 'Lizenz',
        themesText                  : 'Themen',
        reloadText                  : 'Zurücksetzen',
        analysisPageText            : 'Analysenseite',
        analysisPagesText           : 'Analysenseiten',
        userPageText                : 'Benutzerseite',
        userPagesText               : 'Benutzerseiten',
        defaultPagesText            : 'Defaultseiten',
        pageNameText                : 'Seitenname',
        saveText                    : 'Speichern',
        resetText                   : 'Zurücksetzen',
        aboutText                   : 'Über StatPro Revolution Mobile',
        resetCurrentSettingsText    : 'Aktuelle Einstellungen zurücksetzen',
        resetAllSettingsText        : 'Alle Einstellungen zurücksetzen'
    },

    shared: {
        backText                    : 'Zurück',
        statProText                 : 'StatPro International SARL',
        versionText                 : 'Version',
        Monthly                     : 'Monatlich',
        Weekly                      : 'Wöchentlich',
        Quarterly                   : 'Vierteljährlich'        
    },

    // -------------------------- | END OF FILE | -------------------------- \\
    //                     A way to avoid missing comma                      \\

    eof                             : 'Auf Wiedersehen'
};
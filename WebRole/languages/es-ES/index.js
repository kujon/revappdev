// ==================================================== //
// Revolution Mobile App Localization File              //
// ==================================================== //

// Overview:    Contains definitions for localizable text properties in all scripts.
// Culture:     "es_ES" (Spanish, Spain)

// ------------------------------------------
// CLIENT SIDE DEFINITIONS
// ------------------------------------------

exports.client = {
    hello: 'Hola',

    // CultureInfo object from the date.js source for the es-ES culture.
    cultureInfo: {
        name: "es-ES",
        englishName: "Spanish (Spain)",
        nativeName: "español (España)",
        dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
        abbreviatedDayNames: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
        shortestDayNames: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
        firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"],
        monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
        abbreviatedMonthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
        amDesignator: "",
        pmDesignator: "",
        firstDayOfWeek: 1,
        twoDigitYearMax: 2029,
        dateElementOrder: "dmy",
        formatPatterns: {
            shortDate: "dd/MM/yyyy",
            longDate: "dddd, dd' de 'MMMM' de 'yyyy",
            shortTime: "H:mm",
            longTime: "H:mm:ss",
            fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
            sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
            universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
            rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
            monthDay: "dd MMMM",
            yearMonth: "MMMM' de 'yyyy"
        },
        regexPatterns: {
            jan: /^ene(ro)?/i,
            feb: /^feb(rero)?/i,
            mar: /^mar(zo)?/i,
            apr: /^abr(il)?/i,
            may: /^may(o)?/i,
            jun: /^jun(io)?/i,
            jul: /^jul(io)?/i,
            aug: /^ago(sto)?/i,
            sep: /^sep(tiembre)?/i,
            oct: /^oct(ubre)?/i,
            nov: /^nov(iembre)?/i,
            dec: /^dic(iembre)?/i,
            sun: /^do(m(ingo)?)?/i,
            mon: /^lu(n(es)?)?/i,
            tue: /^ma(r(tes)?)?/i,
            wed: /^mi(é(rcoles)?)?/i,
            thu: /^ju(e(ves)?)?/i,
            fri: /^vi(e(rnes)?)?/i,
            sat: /^sá(b(ado)?)?/i,
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
        performanceBarTitle                 : 'Retorno del Segmento',
        riskBarTitle                        : 'Peso versus Contribución al VaR',
        allocationbarTitle                  : 'Peso Relativo',
        contributionBarTitle                : 'Contribución a nivel de Título',
        attributionBarTitle                 : 'Peso Relativo vs Efecto total',
        fixedIncomeContributionBarTitle     : 'Contribución de Renta Fija',
        carryContributionBarTitle           : 'Contribución de acarreo',
        yieldCurveContributionBarTitle      : 'Contribución de la Curva de Rendimiento',
        riskNumbersBarTitle                 : 'Números de Riesgo',
        performanceBubbleTitle              : 'Retorno del Portafolio vs Volatilidad',
        riskBubbleTitle                     : 'Retorno del Portafolio vs VaR',
        contributionColumnTitle             : 'Contribución del Portafolio vs Contribución de la Cota de Referencia',
        interestRatesExposureColumnTitle    : 'Exposición de la tasa de interés',
        creditSpreadsExposureColumnTitle    : 'Exposición de Créditos Distribuidos',
        dv01ExposureColumnTitle             : 'Exposición DV01',
        attributionColumnTitle              : 'Efecto de Atribución',
        allocationPieTitle                  : 'Peso del Portafolio',
        contributionPieTitle                : 'Peso del Portafolio vs Contribución al Retorno',
        riskPietitle                        : 'Peso del Portafolio vs Contribución al VaR',
        performanceGridTitle                : 'Estadísticas de Rendimiento',
        attributionGridTitle                : 'Efecto de Atribución a nivel total',
        fixedIncomeGridTitle                : 'Estadísticas de la Renta Fija',
        fixedIncomeContributionGridTitle    : 'Contribución de la Renta Fija',
        fixedIncomeExposureGridTitle        : 'Exposición de la Renta Fija',
        performanceTopTenGridTitle          : '10 Mejores Títulos por Peso',
        contributionTopTenGridTitle         : '5 Mejores/ 5 Peores Títulos por Contribución',
        riskTopTenGridTitle                 : '10 mejores Títulos por Peso del Riesgo',
        performanceTreemapTitle             : 'Peso del Portafolio vs Retorno',
        riskTreemapTitle                    : 'Peso del Título individual vs VaR',
        performanceLineTitle                : 'Retorno sobre el Período',
        fixedIncomeContributionsGroupTitle  : 'Contribuciones de la Renta Fija',
        fixedIncomeExposuresGroupTitle      : 'Exposición de la Renta Fija',
        fixedIncomeRiskNumbersGroupTitle    : 'Números de Riesgo de la Renta Fija',
        performanceMasterTitle              : 'Key Performance Numbers',
        attributionMasterTitle              : 'Key Attribution Numbers',
        fixedIncomeMasterTitle              : 'Key Fixed Income Numbers',
        riskMasterTitle                     : 'Key Risk Numbers',
        allocationMasterTitle               : 'Key Allocation Numbers',
        contributionMasterTitle             : 'Key Contribution Numbers',
        allocationLongShortGridTitle        : 'Long/Short Allocation'
    },

    chartTypes: {
        AreaChart                           : 'Area',
        BarChart                            : 'Barra',
        BubbleChart                         : 'Burbuja',
        ColumnChart                         : 'Columna',
        Group                               : 'Grupo',
        LineChart                           : 'Línea',
        PieChart                            : 'Circular',
        ScatterChart                        : 'Dispersión',
        SteppedAreaChart                    : 'Stepped Area',
        Table                               : 'Cuadrícula',
        TreeMap                             : 'Mapa de Calor'
    },

    chartTexts: {
        addNewPage                          : 'Añadir Página nueva...'
    },

    // ------------------------------------------------------------------ | E |

    errors: {
        chartFailedText             : 'No es posible cargar el gráfico.',
        accountEmptyText            : 'Esta cuenta no contiene datos del portafolio.',
        portfolioNotFoundText       : 'El portafolio solicitado no pudo ser encontrado.',        
        portfolioNotFoundReasonText : 'The portfolio you selected either does not exist, has ' + 
                                      'been deleted, or may have had sharing rights removed.',
        analysisFailedText          : 'No es posible obtener los datos del portafolio solicitado.',
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
        noPortfolioSlotAvailable    : 'No hay portafolios disponibles.',
        noAnalysisSlotAvailable     : 'No hay analisis disponible.',
        noTimePeriodSlotAvailable   : 'No hay periodos de tiempo disponibles.',
        noFavouritesSlotAvailable   : 'No hay favoritos',
        done                        : 'Done',
        cancel                      : 'Cancel'
    },

    // ------------------------------------------------------------------ | T |
    
    tabbar: {
        favourites                  : 'Favoritos',
        home                        : 'Inicio',
        portfolios                  : 'Portafolios',
        analysis                    : 'Análisis',
        timePeriods                 : 'Períodos',
        infos                       : 'Información',
        more                        : 'Más',
        settings                    : 'Configuración'
    },

    // -------------------------- | END OF FILE | -------------------------- \\
    //                     A way to avoid missing comma                      \\

    eof                             : 'Adiós'
};

// ------------------------------------------
// SERVER SIDE DEFINITIONS
// ------------------------------------------

exports.server = {
    hello: 'Hola',

    // ------------------------------------------------------------------ | A |
    
    aboutPage: {
        aboutText                   : 'Acerca de',
        githubText                  : 'Fork our app repository on <a href="https://github.com/statprorevolution/revappdev">github</a>.',
        mobileText                  : 'StatPro Revolution Mobile',
        openSourceText              : 'This project is made possible by open source software.',
        poweredText                 : 'Powered by the StatPro Revolution Web API.'        
    },

    analysisPage: {
        analysisText                : 'Análisis',        
        endDate                     : 'Fecha final',
        startDate                   : 'Fecha de Inicio'        
    },
    
    // ------------------------------------------------------------------ | E |

    errorPage: {
        errorText                   : 'Error'
    },

    errors: {
        unknownErrorText            : 'Ha ocurrido un error inesperado.',
        invalidCredentialsText      : 'El usuario o clave ingresado es incorrecto.'
    },

    eulaPage: {
        eulaText                    : 'EULA'
    },

    // ------------------------------------------------------------------ | H |
    
    homePage: {
        logOutText                  : 'Salida',
        portfoliosText              : 'Portafolios',
        viewEulaText                : 'Ver EULA',
        testText                    : 'Test'
    },

    // ------------------------------------------------------------------ | L |

    languageSettingsPage: {
        settingsText                : 'Lenguajes'
    },

    loginPage: {
        loginText                   : 'Ingreso',
        signUpText                  : 'Registro',        
        supportText                 : 'Soporte',
        userNamePlaceholderText     : 'Nombre de Usuario',
        passwordPlaceholderText     : 'Clave'
    },

    // ------------------------------------------------------------------ | M |

    measures: {
        adjustedsharpe              : 'Sharpe Ajustado',
        alpha                       : 'Alfa',
        annavetomaxloss             : 'Media anual: Pérdida máxima',
        annualalpha                 : 'Alfa annual',
        bearbeta                    : 'Beta Bajista',
        bearcaptureratio            : 'Radio de Captura del Mercado Bajista',
        bearcorrelation             : 'Correlación del Mercado Bajista',
        bearcovariance              : 'Covarianza del Mercado Bajista',
        bearmeanreturn              : 'Retorno de la Media del Mercado Bajista',
        beta                        : 'Beta',
        bpresenceflag               : 'Mantenido todo el Periodo - Cota de Referencia',
        bullbeta                    : 'Bull Beta',
        bullcaptureratio            : 'Radio de Captura del Mercado Alcista',
        bullcorrelation             : 'Correlación del Mercado Alcista',
        bullcovariance              : 'Covarianza del Mercado Alcista',
        bullmeanreturn              : 'Retorno Medio del Mercado Alcista',
        calmar                      : 'Calmar',
        contributiones              : 'Contribución al Déficit Esperado',
        contributioneu              : 'Contribución al Revés Esperado',
        contributionpu              : 'Contribución al Revés Potencial',
        contributionvar             : 'Contribución al Valor al Riesgo',
        contributionvolatility      : 'Contribución a la Volatilidad',
        correlation                 : 'Correlación',
        covariance                  : 'Covarianza',
        creditspreadsdown100        : 'Reducción de Diferencia de Valor por 100bps ([CUR])',
        creditspreadsdown100percent : 'Reducción de Diferencia de Valor por 100bps',
        creditspreadsdown50         : 'Reducción de Diferencia de Valor por 50bps ([CUR])',
        creditspreadsdown50percent  : 'Reducción de Diferencia de Valor por 50bps',
        creditspreadsdv01           : 'Direcencia de Valor DV01 ([CUR])',
        creditspreadsdv01percent    : 'Diferencia de Valor DV01',
        creditspreadsup100          : 'Incremento de Diferencia de Valor por 100bps ([CUR])',
        creditspreadsup100percent   : 'Incremento de Diferencia de Valor por 100bps',
        creditspreadsup50           : 'Incremento de Diferencia de Valor por 50bps ([CUR])',
        creditspreadsup50percent    : 'Incremento de Diferencia de Valor por 50bps',
        ctb                         : 'Contribución - Cota de Referencia ([CUR])',
        ctbcur                      : 'Contribución Divisa - Cota de Referencia ([CUR])',
        ctblocal                    : 'Contribución - Cota de Referencia (Local)',
        ctbreconcile                : 'Contribución - Reconciliación de la Cota de Referencia ([CUR])',
        ctp                         : 'Contribución ([CUR])',
        ctpbutterfly                : 'Contribución Mariposa',
        ctpcarry                    : 'Contribución de Acarreo',
        ctpcashflow                 : 'Contribución de flujo de efectivo ([CUR])',
        ctpcur                      : 'Contribución de la Divisa ([CUR])',
        ctplocal                    : 'Contribución (Local)',
        ctpother                    : 'Otras Contribuciones',
        ctpresidual                 : 'Contribución Residual',
        ctprolldown                 : 'Roll-Down Contribución',
        ctpshift                    : 'Contribución Shift',
        ctpspeccarry                : 'Contribución de Acarreo Específica',
        ctpspread                   : 'Contribución Distribuida',
        ctpsystcarry                : 'Contribución de Acarreo Sistematico',
        ctptrading                  : 'Contribución de Intercambio ([CUR])',
        ctptwist                    : 'Contribución de Giro',
        ctpyc                       : 'Contribución de la Curva de Rendimiento',
        diversificationgrade        : 'Grado de Diversificación',
        downsiderisk                : 'Riesgo de baja',
        downsideriskannualised      : 'Riesgo de período de baja Anualizado',
        durwpend                    : 'Fin de Peso de Duración',
        durwpstart                  : 'Inicio de Pero de Duración',
        ealloc                      : 'Efecto de Asignación de Mercado',
        eallocc                     : 'Efecto de Asignación de Divisa ([CUR])',
        ealloclocal                 : 'Efecto de Asignación de Mercado (Local)',
        ecompoundc                  : 'Efecto de Composición de Divisa ([CUR])',
        egalloc                     : 'Efecto de Asignación de Mercado (Geométrico)',
        egallocc                    : 'Efecto de Asignación de Divisa (Geométrico) ([CUR])',
        egalloclocal                : 'Efecto de Asignación de Mercado (Geométrico) (Local)',
        egcompoundc                 : 'Efecto de Composición de Divisa (Geométrica) ([CUR])',
        egselec                     : 'Efecto de Selección (Geométrica)',
        egseleclocal                : 'Efecto de Selección (Geométrica) (Local)',
        egtimingc                   : 'Efecto de la fecha de selección de Divisa (Geométrica) ([CUR])',
        egtotal                     : 'Efecto de Atribución total (Geométrica) ([CUR])',
        egtotalc                    : 'Efecto de la Divisa Total (Geométrica) ([CUR])',
        egtotallocal                : 'Efecto del Mercado Total (Geométrica) ([CUR])',
        egtotalmca                  : 'Efecto de Atribución total (Geométrica) ([CUR])',
        einter                      : 'Efecto de Interacción',
        einterlocal                 : 'Efecto de Interacción (Local)',
        eselec                      : 'Efecto de Selección',
        eselecinter                 : 'Efecto de Selección (Incl. Interacción)',
        eselecinterlocal            : 'Efecto de Selección (Incl. Interacción) (Local)',
        eseleclocal                 : 'Efecto de Selección (Local)',
        etimingc                    : 'Efecto de la fecha de selección de Divisa ([CUR])',
        etotal                      : 'Efecto de Atribución total ([CUR])',
        etotalc                     : 'Efecto de la Divisa Total ([CUR])',
        etotallocal                 : 'Efecto del Mercado Total ([CUR])',
        etotalmca                   : 'Efectos de Atribución Total ([CUR])',
        expectedshortfall           : 'Déficit Esperado ([CUR])',
        expectedshortfallpercent    : '% de Déficit Esperado',
        expectedupside              : 'Incremento Esperado ([CUR])',
        expectedupsidepercent       : '% Esperado de Incremento',
        expectedvolatility          : 'Volatilidad Esperada ([CUR])',
        expectedvolatilitypercent   : '% Esperado de Volatilidad',
        expostconditionalsharpe     : 'Sharpe Ex-Post Condicional',
        expostexpectedshortfall     : 'Déficit Ex-Post Esperado',
        expostexpectedshortfallrel  : 'Déficit Relativo Ex-Post Esperado',
        expostvar                   : 'VaR Ex-Post',
        expostvarrel                : 'VaR Relativo Ex-Post',
        fromdate                    : 'Desde',
        gainstolosses               : 'Ganancias:Pérdidas',
        gainstolossesgeometric      : 'Ganancias:Pérdidas (Geométrica)',
        grossexposureend            : 'Exposición Neta Final',
        grossexposurestart          : 'Exposición Neta Inicio',
        indexedreturnatend          : 'Indice de Retorno Final',
        indexedreturnatstart        : 'Indice de Retorno Inicio',
        inflationratesdown50        : 'Tasas de Inflación debajo 50pbs ([CUR])',
        inflationratesdown50percent : 'Tasas de Inflación debajo 50bps',
        inflationratesdv01          : 'Tasas de Inflación DV01 ([CUR])',
        inflationratesdv01percent   : 'Tasas de Inflación DV01',
        inflationratesup50          : 'Tasas de Inflación sobre 50pbs ([CUR])',
        inflationratesup50percent   : 'Tasas de Inflación sobre 50pbs',
        inforatiorel                : 'Razón Info (Geométrica)',
        inforatioxs                 : 'Razón Info',
        interestratesdown100        : 'Tasas de Interés debajo 100bps ([CUR])',
        interestratesdown100percent : 'Tasas de Interés debajo 100 bps',
        interestratesdown50         : 'Tasas de Interés debajo 50bps ([CUR])',
        interestratesdown50percent  : 'Tasas de Interés debajo 50bps',
        interestratesdv01           : 'Tasas de Interés DV01 ([CUR])',
        interestratesdv01percent    : 'Tasas de Interés DV01',
        interestratesup100          : 'Tasas de Interés sobre 100bps ([CUR])',
        interestratesup100percent   : 'Tasas de Interés sobre 100bps',
        interestratesup50           : 'Tasas de Interés sobre 50bps ([CUR])',
        interestratesup50percent    : 'Tasas de Interés sobre 50bps',
        jensensalpha                : 'Alfa Jensen',
        kurtosis                    : 'Kurtosis',
        leverage                    : 'Palanca Promedio',
        leveragebeg                 : 'Palanca Inicio',
        leverageend                 : 'Palanca Final',
        longexposureend             : 'Exposición Larga Final ([CUR])',
        longexposurestart           : 'Exposición Larga Inicio ([CUR])',
        marginales                  : 'Déficit Marginal Esperado',
        marginaleu                  : 'Incremento Marginal Esperado',
        marginalpu                  : 'Incremento Marginal Potencial',
        marginalvar                 : 'Valor al Riesgo Marginal',
        marginalvolatility          : 'Volatilidad Marginal',
        marketvaluecomputableassets : 'Valor de Mercado de Activos Calculables ([CUR])',
        maxloss                     : 'Pérdida máxima',
        maxlossrel                  : 'Pérdida máxima relativa',
        mdpend                      : 'Duración Modificada Final',
        mdpstart                    : 'Duración Modificada Inicio',
        msquared                    : 'M-Cuadrado',
        msquaredann                 : 'M-Cuadrado',
        msquaredexcessann           : 'Exceso de M-Cuadrado',
        mvend                       : 'Valor de Mercado Final ([CUR])',
        mvstart                     : 'Valor de Mercado Inicio ([CUR])',
        netexposureend              : 'Exposición Neta Final ([CUR])',
        netexposurestart            : 'Exposición Neta Inicio ([CUR])',
        numberofsubperiods          : 'Número de [SUBPERIODS]',
        oneperiodhigh               : 'Retorno más alto [SUBPERIOD]',
        oneperiodlow                : 'Retorno más bajo [SUBPERIOD]',
        outstanding                 : 'Valor de Mercado ([CUR])',
        pandl                       : 'Ganancias y Pérdidas ([CUR])',
        percentnegativeperiods      : '% Negativo [SUBPERIODS]',
        percentnegativeperiodsrel   : '% de Exceso de [SUBPERIODS] negativos',
        percentpositiveperiods      : '% Positivo [SUBPERIODS]',
        percentpositiveperiodsrel   : '% de Exceso de [SUBPERIODS] positivos',
        periodaverage               : 'Retorno [SUBPERIOD]',
        periodinforatiorel          : 'Razón de Información (Geometrica) [SUBPERIOD]',
        periodinforatioxs           : 'Razón de Información [SUBPERIOD]',
        periodname                  : 'Nombre del Periodo',
        periodsharpe                : 'Razón Sharpe [SUBPERIOD]',
        periodsharpegeo             : 'Razón Sharpe (Geometrica) [SUBPERIOD]',
        periodtrackerrrel           : 'Error Tracking (Geometrico) [SUBPERIOD]',
        periodtrackerrxs            : 'Error Tracking [SUBPERIOD]',
        periodtreynor               : 'Razón Treynor [SUBPERIOD]',
        potentialupside             : 'Subida Potencial ([CUR])',
        potentialupsidepercent      : '% de Subida Potencial',
        ppresenceflag               : 'Mantenida todo el periodo',
        rb                          : 'Retorno - Benchmark ([CUR])',
        rbcur                       : 'Retorno de Divisa - Benchmark ([CUR])',
        rblocal                     : 'Retorno - Benchmark (Local)',
        recoveryperiod              : 'Dias derecuperación despues de Pérdida máxima',
        recoveryperiodrel           : 'Dias de recuperación despues de pérdida máxima relativa',
        rel1periodhigh              : 'Retorno Relativo más alto [SUBPERIOD]',
        rel1periodlow               : 'Retorno Relativo más bajo [SUBPERIOD]',
        relannualaverage            : 'Retorno Relativo Anualizado',
        relperiodaverage            : 'Retorno Relativo (Promedio [SUBPERIOD])',
        relr                        : 'Retorno Relativo ([CUR])',
        relreturnannifgtyr          : 'Retorno Relativo (Anualizado si > 1 año)',
        relrgeom                    : 'Retorno Relativo (Geometrico) ([CUR])',
        relrgeomlocal               : 'Retorno Relativo (Geometrico) (Local)',
        relrlocal                   : 'Retorno Relativo (Local)',
        returnann                   : 'Retorno [SUBPERIOD] Anualizado',
        returnannifgtyr             : 'Retorno (Anualizado si > 1 año)',
        riskfreereturnann           : 'Retorno Libre de Riesgo Anualizado',
        riskfreereturnout           : 'Retorno Libre de Riesgo',
        riskfreereturnperiod        : 'Retorno Libre de Riesgo [SUBPERIOD]',
        riskweight                  : 'Peso de Riesgo',
        rp                          : 'Retorno ([CUR])',
        rpbutterfly                 : 'Retorno Mariposa',
        rpcarry                     : 'Retorno de Acarreo',
        rpcur                       : 'Divisa Retorno ([CUR])',
        rplocal                     : 'Retorno (Local)',
        rpother                     : 'Otros Retornos',
        rpresidual                  : 'Retorno Residual',
        rprolldown                  : 'Retorno Roll-Down',
        rpshift                     : 'Retorno Shift',
        rpspeccarry                 : 'Retorno específico de Acarreo',
        rpspread                    : 'Retorno Distribuído',
        rpsystcarry                 : 'Retorno de Acarreo Systematico',
        rptwist                     : 'Retorno de Giro',
        rpyc                        : 'Retorno de la Curva de Rendimiento',
        rsquared                    : 'R-Cuadrado',
        segmentname                 : 'Nombre de Segmento',
        sharperatio                 : 'Razón Sharpe',
        sharperatiogeo              : 'Razón Sharpe (Geometrica)',
        shortexposureend            : 'Exposición corta final ([CUR])',
        shortexposurestart          : 'Exposició corta inicial ([CUR])',
        skewness                    : 'Oblicuidad',
        sortinoratio                : 'Razón Sortino [SUBPERIOD]',
        sortinoratioannualised      : 'Razón Sortino',
        spreadpend                  : 'Distribución final',
        spreadpstart                : 'Distribución inicial',
        standarderror               : 'Error estándar',
        stddevann                   : 'Volatiladad anualizada',
        stddevperiod                : 'Volatilidad [SUBPERIOD]',
        stresstest10cash            : 'Test de Estrés 10 - Efectivo',
        stresstest10percent         : 'Test de Estrés 10 - Porcentaje',
        stresstest1cash             : 'Test de Estrés 1 - Efectivo',
        stresstest1percent          : 'Test de Estrés 1 - Porcentaje',
        stresstest2cash             : 'Test de Estrés 2 - Efectivo',
        stresstest2percent          : 'Test de Estrés 2 - Porcentaje',
        stresstest3cash             : 'Test de Estrés 3 - Efectivo',
        stresstest3percent          : 'Test de Estrés 3 - Porcentaje',
        stresstest4cash             : 'Test de Estrés 4 - Efectivo',
        stresstest4percent          : 'Test de Estrés 4 - Porcentaje',
        stresstest5cash             : 'Test de Estrés 5 - Efectivo',
        stresstest5percent          : 'Test de Estrés 5 - Porcentaje',
        stresstest6cash             : 'Test de Estrés 6 - Efectivo',
        stresstest6percent          : 'Test de Estrés 6 - Porcentaje',
        stresstest7cash             : 'Test de Estrés 7 - Efectivo',
        stresstest7percent          : 'Test de Estrés 7 - Porcentaje',
        stresstest8cash             : 'Test de Estrés 8 - Efectivo',
        stresstest8percent          : 'Test de Estrés 8 - Porcentaje',
        stresstest9cash             : 'Test de Estrés 9 - Efectivo',
        stresstest9percent          : 'Test de Estrés 9 - Porcentaje',
        testedbeta                  : 'Beta (probada)',
        testedcorrelation           : 'Correlación (probada)',
        todate                      : 'A la fecha',
        trackingerrorrel            : 'Error de Tracking',
        trackingerrorxs             : 'Error de Tracking',
        treynorratio                : 'Razón Treynor',
        tstatbeta2                  : 'T-estadístico (Beta-2)',
        tstatcorrel2                : 'T-estadístico (Correlación-2)',
        ttmpend                     : 'Tiempo a Madurez final',
        ttmpstart                   : 'Tiempo a Madurez inicial',
        valueatrisk                 : 'Valor al Riesgo ([CUR])',
        valueatriskpercent          : '% de Valor al Riesgo',
        variance                    : 'Varianza',
        wb                          : 'Peso Medio - Benchmark',
        wbbeg                       : 'Peso Inicial - Benchmark',
        wbegover                    : 'Peso excedente inicial',
        wbend                       : 'Peso final - Benchmark',
        wendover                    : 'Peso excedente final',
        wover                       : 'Peso excedente medio',
        wp                          : 'Peso Medio',
        wpabsolute                  : 'Peso medio absoluto',
        wpabsolutebeg               : 'Peso medio absoluto inicial',
        wpabsoluteend               : 'Peso medio absoluto final',
        wpbeg                       : 'Peso inicial',
        wpend                       : 'Peso final',
        wpgross                     : 'Peso bruto medio',
        wpgrossbeg                  : 'Peso bruto inicial',
        wpgrossend                  : 'Peso bruto final',
        xs1periodhigh               : 'Retorno relativo más alto [SUBPERIOD]',
        xs1periodlow                : 'Retorno relativo más bajo [SUBPERIOD]',
        xsannualaverage             : 'Retorno relativo anualizado',
        xsperiodaverage             : 'Retorno relativo [SUBPERIOD]',
        xsreturnannifgtyr           : 'Retorno Relativo (Anualizado si > 1 año)',
        ytmpend                     : 'Rendimiento al final de madurez',
        ytmpstart                   : 'Rendimiento al inicio de madurez'
    },

    // ------------------------------------------------------------------ | P |

    portfoliosAnalysisPage: {
        portfoliosAnalysisText      : 'Análisis de Portafolio'
    },

    portfoliosPage: {
        portfoliosText              : 'Portafolios'
    },

    // ------------------------------------------------------------------ | S |

    settingsPages: {
        settingsText                : 'Configuración',
        applicationSettingsText     : 'Configuración de la Aplicación',
        userPreferencesText         : 'Preferencias del Usuario',
        languagesText               : 'Lenguajes',
        autoLoginText               : 'Ingreso Automático',
        licenseText                 : 'Licencia',
        themesText                  : 'Diseño',
        reloadText                  : 'Recargar Aplicación',
        analysisPageText            : 'Página de Análisis',
        analysisPagesText           : 'Páginas de Análisis',
        userPageText                : 'Página de Usuario',
        userPagesText               : 'Páginas de Usuarios',
        defaultPagesText            : 'Páginas por Defecto',
        pageNameText                : 'Nombre de la Página',
        saveText                    : 'Guardar',
        resetText                   : 'Reponer Valor',
        aboutText                   : 'Acerca de',
        resetCurrentSettingsText    : 'Reponer Valor de Ajustes Actuales',
        resetAllSettingsText        : 'Reponer Valor de todos los Ajustes'
    },

    shared: {
        backText                    : 'Regresar',
        statProText                 : 'StatPro internacional SARL',
        versionText                 : 'Versión',
        Monthly                     : 'Mensual',
        Weekly                      : 'Semanal',
        Quarterly                   : 'Trimestral'        
    },

    // -------------------------- | END OF FILE | -------------------------- \\
    //                     A way to avoid missing comma                      \\

    eof                             : 'Adiós'
};
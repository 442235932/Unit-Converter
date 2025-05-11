// App State
let currentLanguage = 'en';
let currentCategory = null;
let currentTheme = 'light';

// Translation Data
const translations = {
  en: {
    appTitle: 'Unit Converter',
    language: 'Select Language',
    categoriesTitle: 'Select a Category',
    tagline: 'Convert between different units with ease',
    startNow: 'Start Now',
    aboutDev: 'About the Developer',
    footerText: 'Created by Ali Alqahtani',
    back: 'Back',
    enterValue: 'Please Enter Value',
    resultsTitle: 'Results',
    categories: {
      length: {
        name: 'Length',
        icon: '📏',
        history:
          'Length measurement dates back to ancient civilizations. The Egyptian cubit was one of the earliest known units, based on the length of the forearm from the elbow to the tip of the middle finger.',
      },
      area: {
        name: 'Area',
        icon: '📐',
        history:
          'Area measurement was crucial for land ownership and taxation in ancient societies. The acre originally represented the area a yoke of oxen could plow in one day.',
      },
      volume: {
        name: 'Volume',
        icon: '🧪',
        history:
          'Early volume measurements were based on common containers. The gallon was originally defined as the volume of 8 pounds of wheat in medieval England.',
      },
      speed: {
        name: 'Speed',
        icon: '🚀',
        history:
          "Speed measurement became important with the development of transportation. The knot, used in maritime navigation, originates from the practice of counting the number of knots in a rope that passed through a sailor's hands in a certain time.",
      },
      weight: {
        name: 'Weight',
        icon: '⚖️',
        history:
          'Early weight standards were based on seeds or grains. The carat, used for gemstones, comes from the carob seed which was remarkably uniform in weight.',
      },
      temperature: {
        name: 'Temperature',
        icon: '🌡️',
        history:
          'Temperature scales were developed in the 18th century. Daniel Gabriel Fahrenheit invented the mercury thermometer and the Fahrenheit scale in 1724.',
      },
      power: {
        name: 'Power',
        icon: '🔌',
        history:
          "James Watt coined the term 'horsepower' to compare the output of steam engines to the power of draft horses, helping market his improved steam engine.",
      },
      pressure: {
        name: 'Pressure',
        icon: '🧯',
        history:
          'Blaise Pascal made important contributions to the study of pressure. The pascal unit honors his work in fluid mechanics and pressure measurement.',
      },
    },
    units: {
      length: {
        meter: {
          name: 'Meter',
          history:
            'Originally defined in 1793 as 1/10,000,000 of the distance from the equator to the North Pole.',
        },
        kilometer: {
          name: 'Kilometer',
          history:
            'Adopted during the French Revolution as part of the metric system.',
        },
        centimeter: {
          name: 'Centimeter',
          history: 'Common in everyday measurements, derived from the meter.',
        },
        millimeter: {
          name: 'Millimeter',
          history: 'Used for precise measurements in engineering and science.',
        },
        inch: {
          name: 'Inch',
          history:
            "Traditionally the width of a man's thumb. Standardized in 1959 to exactly 25.4 mm.",
        },
        foot: {
          name: 'Foot',
          history:
            'Based on the length of the human foot, used since ancient times.',
        },
        yard: {
          name: 'Yard',
          history:
            "Said to be the distance from King Henry I's nose to his outstretched thumb.",
        },
        mile: {
          name: 'Mile',
          history:
            "Roman origin, from 'mille passus' meaning 1,000 paces (about 5,000 Roman feet).",
        },
      },
      area: {
        squareMeter: {
          name: 'Square Meter',
          history: 'Fundamental unit of area in the metric system.',
        },
        squareKilometer: {
          name: 'Square Kilometer',
          history: 'Used for large areas like cities or countries.',
        },
        squareFoot: {
          name: 'Square Foot',
          history: 'Common in real estate in the US and UK.',
        },
        squareInch: {
          name: 'Square Inch',
          history: 'Used for small areas in engineering.',
        },
        acre: {
          name: 'Acre',
          history:
            'Originally the amount of land tillable by one man behind one ox in one day.',
        },
        hectare: {
          name: 'Hectare',
          history:
            'Metric unit equal to 10,000 square meters, commonly used in agriculture.',
        },
      },
      volume: {
        liter: {
          name: 'Liter',
          history: "Introduced in France in 1795 as a new 'republican unit'.",
        },
        milliliter: {
          name: 'Milliliter',
          history:
            'Common for small liquid quantities in medicine and cooking.',
        },
        gallon: {
          name: 'Gallon',
          history: 'Has different definitions in US (3.785L) and UK (4.546L).',
        },
        quart: {
          name: 'Quart',
          history: 'One quarter of a gallon, used in liquid measurements.',
        },
        pint: {
          name: 'Pint',
          history: 'Common for beverages, especially beer in the UK.',
        },
        cup: {
          name: 'Cup',
          history:
            'Used in cooking, varies between countries (US: 240ml, UK: 284ml).',
        },
        fluidOunce: {
          name: 'Fluid Ounce',
          history: 'Originally the volume occupied by one ounce of water.',
        },
        cubicMeter: {
          name: 'Cubic Meter',
          history: 'Standard SI unit for volume, used for large quantities.',
        },
      },
      speed: {
        meterPerSecond: {
          name: 'Meter/Second',
          history: 'SI unit for speed, fundamental in physics.',
        },
        kilometerPerHour: {
          name: 'Kilometer/Hour',
          history: 'Common for vehicle speeds in most countries.',
        },
        milePerHour: {
          name: 'Mile/Hour',
          history: 'Used in the US and UK for vehicle speeds.',
        },
        knot: {
          name: 'Knot',
          history:
            'Used in maritime and aviation contexts, equal to one nautical mile per hour.',
        },
        footPerSecond: {
          name: 'Foot/Second',
          history: 'Used in some engineering applications in the US.',
        },
      },
      weight: {
        gram: {
          name: 'Gram',
          history:
            'Originally defined as the mass of one cubic centimeter of water.',
        },
        kilogram: {
          name: 'Kilogram',
          history:
            'Only SI unit still defined by a physical artifact (International Prototype Kilogram).',
        },
        milligram: {
          name: 'Milligram',
          history: 'Used for small quantities in medicine and chemistry.',
        },
        pound: {
          name: 'Pound',
          history: "Roman 'libra' is the origin of the abbreviation 'lb'.",
        },
        ounce: {
          name: 'Ounce',
          history: 'Originally based on the weight of a barleycorn.',
        },
        ton: {
          name: 'Ton',
          history:
            'Several definitions exist (metric ton, short ton, long ton).',
        },
      },
      temperature: {
        celsius: {
          name: 'Celsius',
          history:
            'Developed by Anders Celsius in 1742, originally had boiling at 0° and freezing at 100°.',
        },
        fahrenheit: {
          name: 'Fahrenheit',
          history: "Daniel Fahrenheit's scale was based on three fixed points.",
        },
        kelvin: {
          name: 'Kelvin',
          history:
            'Absolute temperature scale developed by Lord Kelvin in 1848.',
        },
      },
      power: {
        watt: {
          name: 'Watt',
          history:
            'Named after James Watt for his contributions to steam engine development.',
        },
        kilowatt: {
          name: 'Kilowatt',
          history: 'Common unit for electrical power and engine output.',
        },
        horsepower: {
          name: 'Horsepower',
          history:
            "James Watt's marketing tool to compare steam engines to horses.",
        },
        megawatt: {
          name: 'Megawatt',
          history: 'Used for large power plants and industrial applications.',
        },
      },
      pressure: {
        pascal: {
          name: 'Pascal',
          history: 'Named after Blaise Pascal, the SI unit for pressure.',
        },
        kilopascal: {
          name: 'Kilopascal',
          history: 'Common for tire pressures and meteorological data.',
        },
        bar: {
          name: 'Bar',
          history:
            'Originally defined as the pressure of one standard atmosphere.',
        },
        psi: {
          name: 'PSI',
          history: 'Pounds per square inch, common in US engineering.',
        },
        atmosphere: {
          name: 'Atmosphere',
          history: 'Based on the average pressure at sea level on Earth.',
        },
      },
    },
  },
  ar: {
    appTitle: 'محول الوحدات',
    language: 'اختر اللغة',
    categoriesTitle: 'اختر فئة',
    tagline: 'التحويل بين مختلف الوحدات بسهولة',
    startNow: 'ابدأ الآن',
    aboutDev: 'عن المطور',
    footerText: 'تم التنفيذ بواسطة علي القحطاني',
    back: 'رجوع',
    enterValue: 'أدخل قيمة من فضلك',
    resultsTitle: 'النتائج',
    categories: {
      length: {
        name: 'الطول',
        icon: '📏',
        history:
          'يعود قياس الطول إلى الحضارات القديمة. كان الذراع المصري من أوائل الوحدات المعروفة، بناءً على طول الساعد من الكوع إلى طرف الإصبع الأوسط.',
      },
      area: {
        name: 'المساحة',
        icon: '📐',
        history:
          'كان قياس المساحة أمرًا بالغ الأهمية لملكية الأرض والضرائب في المجتمعات القديمة. كان الفدان يمثل في الأصل المساحة التي يمكن لزوج من الثيران حرثها في يوم واحد.',
      },
      volume: {
        name: 'الحجم',
        icon: '🧪',
        history:
          'كانت قياسات الحجم المبكرة تعتمد على الحاويات الشائعة. تم تعريف الجالون في الأصل على أنه حجم 8 أرطال من القمح في إنجلترا في العصور الوسطى.',
      },
      speed: {
        name: 'السرعة',
        icon: '🚀',
        history:
          'أصبح قياس السرعة مهمًا مع تطور وسائل النقل. نشأت العقدة، المستخدمة في الملاحة البحرية، من ممارسة عد عدد العقد في حبل يمر عبر يدي البحار في وقت معين.',
      },
      weight: {
        name: 'الوزن',
        icon: '⚖️',
        history:
          'كانت معايير الوزن المبكرة تعتمد على البذور أو الحبوب. القيراط، المستخدم للأحجار الكريمة، يأتي من بذور الخروب التي كانت موحدة بشكل ملحوظ في الوزن.',
      },
      temperature: {
        name: 'درجة الحرارة',
        icon: '🌡️',
        history:
          'تم تطوير مقاييس درجة الحرارة في القرن الثامن عشر. اخترع دانيال غابرييل فهرنهايت مقياس الحرارة الزئبقي ومقياس فهرنهايت في عام 1724.',
      },
      power: {
        name: 'القدرة',
        icon: '🔌',
        history:
          "صاغ جيمس وات مصطلح 'القدرة الحصانية' لمقارنة إنتاج المحركات البخارية بقوة الخيول الجر، مما ساعد في تسويق محركه البخاري المحسن.",
      },
      pressure: {
        name: 'الضغط',
        icon: '🧯',
        history:
          'قدم بليز باسكال مساهمات مهمة في دراسة الضغط. تكرم وحدة الباسكال عمله في ميكانيكا الموائع وقياس الضغط.',
      },
    },
    units: {
      length: {
        meter: {
          name: 'متر',
          history:
            'تم تعريفه في الأصل في عام 1793 على أنه 1/10,000,000 من المسافة من خط الاستواء إلى القطب الشمالي.',
        },
        kilometer: {
          name: 'كيلومتر',
          history: 'تم اعتماده خلال الثورة الفرنسية كجزء من النظام المتري.',
        },
        centimeter: {
          name: 'سنتيمتر',
          history: 'شائع في القياسات اليومية، مشتق من المتر.',
        },
        millimeter: {
          name: 'ملليمتر',
          history: 'يستخدم للقياسات الدقيقة في الهندسة والعلوم.',
        },
        inch: {
          name: 'بوصة',
          history:
            'تقليديًا عرض إبهام الرجل. تم توحيده في عام 1959 إلى 25.4 مم بالضبط.',
        },
        foot: {
          name: 'قدم',
          history: 'بناءً على طول قدم الإنسان، مستخدم منذ العصور القديمة.',
        },
        yard: {
          name: 'ياردة',
          history:
            'يقال إنها المسافة من أنف الملك هنري الأول إلى إبهامه الممدود.',
        },
        mile: {
          name: 'ميل',
          history:
            "أصل روماني، من 'ميل باسوس' بمعنى 1,000 خطوة (حوالي 5,000 قدم رومانية).",
        },
      },
      area: {
        squareMeter: {
          name: 'متر مربع',
          history: 'وحدة المساحة الأساسية في النظام المتري.',
        },
        squareKilometer: {
          name: 'كيلومتر مربع',
          history: 'يستخدم للمساحات الكبيرة مثل المدن أو البلدان.',
        },
        squareFoot: {
          name: 'قدم مربع',
          history: 'شائع في العقارات في الولايات المتحدة والمملكة المتحدة.',
        },
        squareInch: {
          name: 'بوصة مربعة',
          history: 'يستخدم للمساحات الصغيرة في الهندسة.',
        },
        acre: {
          name: 'فدان',
          history:
            'في الأصل كمية الأرض التي يمكن لرجل واحد حرثها خلف ثور واحد في يوم واحد.',
        },
        hectare: {
          name: 'هكتار',
          history:
            'وحدة مترية تساوي 10,000 متر مربع، شائعة الاستخدام في الزراعة.',
        },
      },
      volume: {
        liter: {
          name: 'لتر',
          history: "تم تقديمه في فرنسا في عام 1795 كـ 'وحدة جمهورية' جديدة.",
        },
        milliliter: {
          name: 'ملليلتر',
          history: 'شائع للكميات الصغيرة من السوائل في الطب والطبخ.',
        },
        gallon: {
          name: 'غالون',
          history:
            'له تعريفات مختلفة في الولايات المتحدة (3.785 لتر) والمملكة المتحدة (4.546 لتر).',
        },
        quart: {
          name: 'كوارت',
          history: 'ربع غالون، يستخدم في قياسات السوائل.',
        },
        pint: {
          name: 'باينت',
          history: 'شائع للمشروبات، خاصة البيرة في المملكة المتحدة.',
        },
        cup: {
          name: 'كوب',
          history:
            'يستخدم في الطبخ، يختلف بين البلدان (الولايات المتحدة: 240 مل، المملكة المتحدة: 284 مل).',
        },
        fluidOunce: {
          name: 'أونصة سائلة',
          history: 'في الأصل الحجم الذي تشغله أونصة واحدة من الماء.',
        },
        cubicMeter: {
          name: 'متر مكعب',
          history: 'وحدة SI القياسية للحجم، تستخدم للكميات الكبيرة.',
        },
      },
      speed: {
        meterPerSecond: {
          name: 'متر/ثانية',
          history: 'وحدة SI للسرعة، أساسية في الفيزياء.',
        },
        kilometerPerHour: {
          name: 'كيلومتر/ساعة',
          history: 'شائع لسرعات المركبات في معظم البلدان.',
        },
        milePerHour: {
          name: 'ميل/ساعة',
          history:
            'يستخدم في الولايات المتحدة والمملكة المتحدة لسرعات المركبات.',
        },
        knot: {
          name: 'عقدة',
          history:
            'يستخدم في السياقات البحرية والجوية، يساوي ميل بحري واحد في الساعة.',
        },
        footPerSecond: {
          name: 'قدم/ثانية',
          history: 'يستخدم في بعض التطبيقات الهندسية في الولايات المتحدة.',
        },
      },
      weight: {
        gram: {
          name: 'جرام',
          history:
            'تم تعريفه في الأصل على أنه كتلة سنتيمتر مكعب واحد من الماء.',
        },
        kilogram: {
          name: 'كيلوجرام',
          history:
            'وحدة SI الوحيدة التي لا تزال محددة بواسطة قطعة أثرية مادية (النموذج الأولي الدولي للكيلوجرام).',
        },
        milligram: {
          name: 'ملليجرام',
          history: 'يستخدم للكميات الصغيرة في الطب والكيمياء.',
        },
        pound: {
          name: 'رطل',
          history: "'الليبرا' الرومانية هي أصل الاختصار 'lb'.",
        },
        ounce: { name: 'أونصة', history: 'في الأصل تعتمد على وزن حبة الشعير.' },
        ton: {
          name: 'طن',
          history: 'يوجد عدة تعريفات (طن متري، طن قصير، طن طويل).',
        },
      },
      temperature: {
        celsius: {
          name: 'سلسيوس',
          history:
            'تم تطويره بواسطة أندرس سلسيوس في عام 1742، كان في الأصل يغلي عند 0° ويتجمد عند 100°.',
        },
        fahrenheit: {
          name: 'فهرنهايت',
          history: 'كان مقياس دانيال فهرنهايت يعتمد على ثلاث نقاط ثابتة.',
        },
        kelvin: {
          name: 'كلفن',
          history:
            'مقياس درجة الحرارة المطلقة الذي طوره اللورد كلفن في عام 1848.',
        },
      },
      power: {
        watt: {
          name: 'واط',
          history: 'سمي على اسم جيمس وات لمساهماته في تطوير المحرك البخاري.',
        },
        kilowatt: {
          name: 'كيلوواط',
          history: 'وحدة شائعة للطاقة الكهربائية وإنتاج المحرك.',
        },
        horsepower: {
          name: 'حصان',
          history: 'أداة تسويقية لجيمس وات لمقارنة المحركات البخارية بالخيول.',
        },
        megawatt: {
          name: 'ميجاواط',
          history: 'يستخدم لمحطات الطاقة الكبيرة والتطبيقات الصناعية.',
        },
      },
      pressure: {
        pascal: {
          name: 'باسكال',
          history: 'سمي على اسم بليز باسكال، وحدة SI للضغط.',
        },
        kilopascal: {
          name: 'كيلوباسكال',
          history: 'شائع لضغوط الإطارات والبيانات الجوية.',
        },
        bar: {
          name: 'بار',
          history: 'تم تعريفه في الأصل على أنه ضغط جو قياسي واحد.',
        },
        psi: {
          name: 'رطل لكل بوصة مربعة',
          history: 'شائع في الهندسة في الولايات المتحدة.',
        },
        atmosphere: {
          name: 'جو',
          history: 'بناءً على متوسط الضغط عند مستوى سطح البحر على الأرض.',
        },
      },
    },
  },
};

// Conversion Formulas
const conversionFormulas = {
  length: {
    meter: {
      kilometer: (val) => val / 1000,
      centimeter: (val) => val * 100,
      millimeter: (val) => val * 1000,
      inch: (val) => val * 39.3701,
      foot: (val) => val * 3.28084,
      yard: (val) => val * 1.09361,
      mile: (val) => val / 1609.34,
    },
    kilometer: {
      meter: (val) => val * 1000,
      centimeter: (val) => val * 100000,
      millimeter: (val) => val * 1000000,
      inch: (val) => val * 39370.1,
      foot: (val) => val * 3280.84,
      yard: (val) => val * 1093.61,
      mile: (val) => val / 1.60934,
    },
    centimeter: {
      meter: (val) => val / 100,
      kilometer: (val) => val / 100000,
      millimeter: (val) => val * 10,
      inch: (val) => val / 2.54,
      foot: (val) => val / 30.48,
      yard: (val) => val / 91.44,
      mile: (val) => val / 160934,
    },
    millimeter: {
      meter: (val) => val / 1000,
      kilometer: (val) => val / 1000000,
      centimeter: (val) => val / 10,
      inch: (val) => val / 25.4,
      foot: (val) => val / 304.8,
      yard: (val) => val / 914.4,
      mile: (val) => val / 1.609e6,
    },
    inch: {
      meter: (val) => val / 39.3701,
      kilometer: (val) => val / 39370.1,
      centimeter: (val) => val * 2.54,
      millimeter: (val) => val * 25.4,
      foot: (val) => val / 12,
      yard: (val) => val / 36,
      mile: (val) => val / 63360,
    },
    foot: {
      meter: (val) => val / 3.28084,
      kilometer: (val) => val / 3280.84,
      centimeter: (val) => val * 30.48,
      millimeter: (val) => val * 304.8,
      inch: (val) => val * 12,
      yard: (val) => val / 3,
      mile: (val) => val / 5280,
    },
    yard: {
      meter: (val) => val / 1.09361,
      kilometer: (val) => val / 1093.61,
      centimeter: (val) => val * 91.44,
      millimeter: (val) => val * 914.4,
      inch: (val) => val * 36,
      foot: (val) => val * 3,
      mile: (val) => val / 1760,
    },
    mile: {
      meter: (val) => val * 1609.34,
      kilometer: (val) => val * 1.60934,
      centimeter: (val) => val * 160934,
      millimeter: (val) => val * 1.609e6,
      inch: (val) => val * 63360,
      foot: (val) => val * 5280,
      yard: (val) => val * 1760,
    },
  },
  area: {
    squareMeter: {
      squareKilometer: (val) => val / 1e6,
      squareFoot: (val) => val * 10.7639,
      squareInch: (val) => val * 1550,
      acre: (val) => val / 4046.86,
      hectare: (val) => val / 10000,
    },
    squareKilometer: {
      squareMeter: (val) => val * 1e6,
      squareFoot: (val) => val * 1.076e7,
      squareInch: (val) => val * 1.55e9,
      acre: (val) => val * 247.105,
      hectare: (val) => val * 100,
    },
    squareFoot: {
      squareMeter: (val) => val / 10.7639,
      squareKilometer: (val) => val / 1.076e7,
      squareInch: (val) => val * 144,
      acre: (val) => val / 43560,
      hectare: (val) => val / 107639,
    },
    squareInch: {
      squareMeter: (val) => val / 1550,
      squareKilometer: (val) => val / 1.55e9,
      squareFoot: (val) => val / 144,
      acre: (val) => val / 6.273e6,
      hectare: (val) => val / 1.55e7,
    },
    acre: {
      squareMeter: (val) => val * 4046.86,
      squareKilometer: (val) => val / 247.105,
      squareFoot: (val) => val * 43560,
      squareInch: (val) => val * 6.273e6,
      hectare: (val) => val / 2.47105,
    },
    hectare: {
      squareMeter: (val) => val * 10000,
      squareKilometer: (val) => val / 100,
      squareFoot: (val) => val * 107639,
      squareInch: (val) => val * 1.55e7,
      acre: (val) => val * 2.47105,
    },
  },
  volume: {
    liter: {
      milliliter: (val) => val * 1000,
      gallon: (val) => val / 3.78541,
      quart: (val) => val * 1.05669,
      pint: (val) => val * 2.11338,
      cup: (val) => val * 4.22675,
      fluidOunce: (val) => val * 33.814,
      cubicMeter: (val) => val / 1000,
    },
    milliliter: {
      liter: (val) => val / 1000,
      gallon: (val) => val / 3785.41,
      quart: (val) => val / 946.353,
      pint: (val) => val / 473.176,
      cup: (val) => val / 236.588,
      fluidOunce: (val) => val / 29.5735,
      cubicMeter: (val) => val / 1e6,
    },
    gallon: {
      liter: (val) => val * 3.78541,
      milliliter: (val) => val * 3785.41,
      quart: (val) => val * 4,
      pint: (val) => val * 8,
      cup: (val) => val * 16,
      fluidOunce: (val) => val * 128,
      cubicMeter: (val) => val / 264.172,
    },
    quart: {
      liter: (val) => val * 0.946353,
      milliliter: (val) => val * 946.353,
      gallon: (val) => val / 4,
      pint: (val) => val * 2,
      cup: (val) => val * 4,
      fluidOunce: (val) => val * 32,
      cubicMeter: (val) => val / 1056.69,
    },
    pint: {
      liter: (val) => val * 0.473176,
      milliliter: (val) => val * 473.176,
      gallon: (val) => val / 8,
      quart: (val) => val / 2,
      cup: (val) => val * 2,
      fluidOunce: (val) => val * 16,
      cubicMeter: (val) => val / 2113.38,
    },
    cup: {
      liter: (val) => val * 0.236588,
      milliliter: (val) => val * 236.588,
      gallon: (val) => val / 16,
      quart: (val) => val / 4,
      pint: (val) => val / 2,
      fluidOunce: (val) => val * 8,
      cubicMeter: (val) => val / 4226.75,
    },
    fluidOunce: {
      liter: (val) => val * 0.0295735,
      milliliter: (val) => val * 29.5735,
      gallon: (val) => val / 128,
      quart: (val) => val / 32,
      pint: (val) => val / 16,
      cup: (val) => val / 8,
      cubicMeter: (val) => val / 33814,
    },
    cubicMeter: {
      liter: (val) => val * 1000,
      milliliter: (val) => val * 1e6,
      gallon: (val) => val * 264.172,
      quart: (val) => val * 1056.69,
      pint: (val) => val * 2113.38,
      cup: (val) => val * 4226.75,
      fluidOunce: (val) => val * 33814,
    },
  },
  speed: {
    meterPerSecond: {
      kilometerPerHour: (val) => val * 3.6,
      milePerHour: (val) => val * 2.23694,
      knot: (val) => val * 1.94384,
      footPerSecond: (val) => val * 3.28084,
    },
    kilometerPerHour: {
      meterPerSecond: (val) => val / 3.6,
      milePerHour: (val) => val / 1.60934,
      knot: (val) => val / 1.852,
      footPerSecond: (val) => val / 1.09728,
    },
    milePerHour: {
      meterPerSecond: (val) => val / 2.23694,
      kilometerPerHour: (val) => val * 1.60934,
      knot: (val) => val / 1.15078,
      footPerSecond: (val) => val * 1.46667,
    },
    knot: {
      meterPerSecond: (val) => val / 1.94384,
      kilometerPerHour: (val) => val * 1.852,
      milePerHour: (val) => val * 1.15078,
      footPerSecond: (val) => val * 1.68781,
    },
    footPerSecond: {
      meterPerSecond: (val) => val / 3.28084,
      kilometerPerHour: (val) => val * 1.09728,
      milePerHour: (val) => val / 1.46667,
      knot: (val) => val / 1.68781,
    },
  },
  weight: {
    gram: {
      kilogram: (val) => val / 1000,
      milligram: (val) => val * 1000,
      pound: (val) => val / 453.592,
      ounce: (val) => val / 28.3495,
      ton: (val) => val / 907185,
    },
    kilogram: {
      gram: (val) => val * 1000,
      milligram: (val) => val * 1e6,
      pound: (val) => val * 2.20462,
      ounce: (val) => val * 35.274,
      ton: (val) => val / 907.185,
    },
    milligram: {
      gram: (val) => val / 1000,
      kilogram: (val) => val / 1e6,
      pound: (val) => val / 453592,
      ounce: (val) => val / 28349.5,
      ton: (val) => val / 9.072e8,
    },
    pound: {
      gram: (val) => val * 453.592,
      kilogram: (val) => val / 2.20462,
      milligram: (val) => val * 453592,
      ounce: (val) => val * 16,
      ton: (val) => val / 2000,
    },
    ounce: {
      gram: (val) => val * 28.3495,
      kilogram: (val) => val / 35.274,
      milligram: (val) => val * 28349.5,
      pound: (val) => val / 16,
      ton: (val) => val / 32000,
    },
    ton: {
      gram: (val) => val * 907185,
      kilogram: (val) => val * 907.185,
      milligram: (val) => val * 9.072e8,
      pound: (val) => val * 2000,
      ounce: (val) => val * 32000,
    },
  },
  temperature: {
    celsius: {
      fahrenheit: (val) => (val * 9) / 5 + 32,
      kelvin: (val) => val + 273.15,
    },
    fahrenheit: {
      celsius: (val) => ((val - 32) * 5) / 9,
      kelvin: (val) => ((val - 32) * 5) / 9 + 273.15,
    },
    kelvin: {
      celsius: (val) => val - 273.15,
      fahrenheit: (val) => ((val - 273.15) * 9) / 5 + 32,
    },
  },
  power: {
    watt: {
      kilowatt: (val) => val / 1000,
      horsepower: (val) => val / 745.7,
      megawatt: (val) => val / 1e6,
    },
    kilowatt: {
      watt: (val) => val * 1000,
      horsepower: (val) => val * 1.34102,
      megawatt: (val) => val / 1000,
    },
    horsepower: {
      watt: (val) => val * 745.7,
      kilowatt: (val) => val / 1.34102,
      megawatt: (val) => val / 1341.02,
    },
    megawatt: {
      watt: (val) => val * 1e6,
      kilowatt: (val) => val * 1000,
      horsepower: (val) => val * 1341.02,
    },
  },
  pressure: {
    pascal: {
      kilopascal: (val) => val / 1000,
      bar: (val) => val / 1e5,
      psi: (val) => val / 6894.76,
      atmosphere: (val) => val / 101325,
    },
    kilopascal: {
      pascal: (val) => val * 1000,
      bar: (val) => val / 100,
      psi: (val) => val / 6.89476,
      atmosphere: (val) => val / 101.325,
    },
    bar: {
      pascal: (val) => val * 1e5,
      kilopascal: (val) => val * 100,
      psi: (val) => val * 14.5038,
      atmosphere: (val) => val / 1.01325,
    },
    psi: {
      pascal: (val) => val * 6894.76,
      kilopascal: (val) => val * 6.89476,
      bar: (val) => val / 14.5038,
      atmosphere: (val) => val / 14.6959,
    },
    atmosphere: {
      pascal: (val) => val * 101325,
      kilopascal: (val) => val * 101.325,
      bar: (val) => val * 1.01325,
      psi: (val) => val * 14.6959,
    },
  },
};

// Available Units for Each Category
const availableUnits = {
  length: [
    'meter',
    'kilometer',
    'centimeter',
    'millimeter',
    'inch',
    'foot',
    'yard',
    'mile',
  ],
  area: [
    'squareMeter',
    'squareKilometer',
    'squareFoot',
    'squareInch',
    'acre',
    'hectare',
  ],
  volume: [
    'liter',
    'milliliter',
    'gallon',
    'quart',
    'pint',
    'cup',
    'fluidOunce',
    'cubicMeter',
  ],
  speed: [
    'meterPerSecond',
    'kilometerPerHour',
    'milePerHour',
    'knot',
    'footPerSecond',
  ],
  weight: ['gram', 'kilogram', 'milligram', 'pound', 'ounce', 'ton'],
  temperature: ['celsius', 'fahrenheit', 'kelvin'],
  power: ['watt', 'kilowatt', 'horsepower', 'megawatt'],
  pressure: ['pascal', 'kilopascal', 'bar', 'psi', 'atmosphere'],
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function () {
  // Load saved preferences
  loadPreferences();

  // Check if we're on the home page or converter page
  if (document.querySelector('.categories-grid')) {
    initCategoriesPage();
  } else if (document.querySelector('.converter-container')) {
    initConverterPage();
  } else if (document.querySelector('.container')) {
    initHomePage();
  }
  // Set up theme toggle
  setupThemeToggle();
});

function loadPreferences() {
  // Load language preference
  const savedLanguage = localStorage.getItem('unitConverterLanguage');
  if (savedLanguage) {
    currentLanguage = savedLanguage;
  }

  // Load theme preference
  const savedTheme = localStorage.getItem('unitConverterTheme');
  if (savedTheme) {
    currentTheme = savedTheme;
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  // Apply language
  applyLanguage();
}

function savePreferences() {
  localStorage.setItem('unitConverterLanguage', currentLanguage);
  localStorage.setItem('unitConverterTheme', currentTheme);
}

function applyLanguage() {
  // Set document direction
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLanguage;

  // Update all translatable elements
  const translatableElements = document.querySelectorAll('[data-translate]');
  translatableElements.forEach((el) => {
    const key = el.getAttribute('data-translate');
    el.textContent = getTranslation(key);
  });

  // Update title
  document.title = getTranslation('appTitle');

  // Update placeholders
  const inputValue = document.getElementById('input-value');
  if (inputValue) {
    inputValue.placeholder = getTranslation('enterValue');
  }
}

function getTranslation(key) {
  // Split key by dots to navigate through the translation object
  const keys = key.split('.'); // for example categories.area.history = [categories, area, history]
  let value = translations[currentLanguage];

  for (const k of keys) {
    if (value && value.hasOwnProperty(k)) {
      value = value[k];
    } else {
      return key; // Return the key if translation not found
    }
  }

  return value;
}

function initHomePage() {
  document
    .getElementById('language-toggle')
    .addEventListener('click', function () {
      // Create language selection modal
      const modal = document.createElement('div');
      modal.style.position = 'fixed';
      modal.style.top = '0';
      modal.style.left = '0';
      modal.style.width = '100%';
      modal.style.height = '100%';
      modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
      modal.style.display = 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';
      modal.style.zIndex = '1000';

      // Create language selection content
      const content = document.createElement('div');
      content.style.backgroundColor = 'white';
      content.style.padding = '2rem';
      content.style.borderRadius = '10px';
      content.style.width = '300px';

      // Add language options
      const languages = [
        { code: 'en', name: 'English' },
        { code: 'ar', name: 'العربية' },
      ];

      languages.forEach((lang) => {
        const btn = document.createElement('button');
        btn.textContent = lang.name;
        btn.style.display = 'block';
        btn.style.width = '100%';
        btn.style.padding = '0.8rem';
        btn.style.margin = '0.5rem 0';
        btn.style.border = '1px solid #ddd';
        btn.style.borderRadius = '5px';
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', function () {
          // Store selected language (could use localStorage for persistence)
          document.documentElement.lang = lang.code;
          currentLanguage = lang.code;
          savePreferences();
          modal.remove();
          showActionButtons();
          applyLanguage();
        });
        content.appendChild(btn);
      });

      modal.appendChild(content);
      document.body.appendChild(modal);
    });

  function showActionButtons() {
    const actionButtons = document.getElementById('action-buttons');
    actionButtons.style.display = 'flex';
  }

  document.getElementById('start-now').addEventListener('click', function () {
    window.location.href = 'categories.html';
  });

  document
    .getElementById('start-now')
    .setAttribute('data-translate', 'startNow');
  document
    .getElementById('about-dev')
    .setAttribute('data-translate', 'aboutDev');
  document
    .getElementById('language-toggle')
    .setAttribute('data-translate', 'language');
  document
    .getElementById('app-title')
    .setAttribute('data-translate', 'appTitle');
  document.getElementById('tagline').setAttribute('data-translate', 'tagline');
  document
    .getElementById('footer-text')
    .setAttribute('data-translate', 'footerText');
  applyLanguage();
}

function initCategoriesPage() {
  // Create category cards
  const categoriesGrid = document.querySelector('.categories-grid');
  categoriesGrid.innerHTML = '';

  for (const category in translations.en.categories) {
    const categoryData = translations.en.categories[category];
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
            <i class="fas">${categoryData.icon}</i>
            <h3 data-translate="categories.${category}.name">${categoryData.name}</h3>
        `;
    card.addEventListener('click', () => {
      window.location.href = `converter.html?category=${category}`;
    });
    categoriesGrid.appendChild(card);
  }

  // Set up language toggle
  const languageToggle = document.getElementById('language-toggle');
  languageToggle.addEventListener('click', toggleLanguage);

  // Apply translations
  document
    .getElementById('app-title')
    .setAttribute('data-translate', 'appTitle');
  document
    .getElementById('categories-title')
    .setAttribute('data-translate', 'categoriesTitle');
  document
    .getElementById('footer-text')
    .setAttribute('data-translate', 'footerText');

  applyLanguage();
}

function initConverterPage() {
  // Get category from URL
  const urlParams = new URLSearchParams(window.location.search);
  currentCategory = urlParams.get('category');

  if (!currentCategory || !translations.en.categories[currentCategory]) {
    window.location.href = 'index.html';
    return;
  }

  // Set up back button
  const backButton = document.getElementById('back-button');
  backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  // Set up language toggle
  const languageToggle = document.getElementById('language-toggle');
  languageToggle.addEventListener('click', toggleLanguage);

  // Apply translations
  document
    .getElementById('converter-title')
    .setAttribute('data-translate', 'categories.' + currentCategory + '.name');
  document
    .getElementById('category-name')
    .setAttribute('data-translate', 'categories.' + currentCategory + '.name');
  document
    .getElementById('results-title')
    .setAttribute('data-translate', 'resultsTitle');
  document
    .getElementById('footer-text')
    .setAttribute('data-translate', 'footerText');
  // Load category data
  loadCategoryData();

  // Set up input event
  const inputValue = document.getElementById('input-value');
  const fromUnit = document.getElementById('from-unit');

  inputValue.addEventListener('input', () => {
    convertUnits(inputValue.value, fromUnit.value);
  });

  fromUnit.addEventListener('change', () => {
    convertUnits(inputValue.value, fromUnit.value);
  });
}

function loadCategoryData() {
  // Set category history
  const categoryHistory = document.getElementById('category-history');
  categoryHistory.textContent =
    translations[currentLanguage].categories[currentCategory].history;

  const categoryTitle = document.getElementById('converter-title');
  categoryTitle.textContent =
    translations[currentLanguage].categories[currentCategory].name;

  const categoryName = document.getElementById('category-name');
  categoryName.textContent =
    translations[currentLanguage].categories[currentCategory].name;

  // Populate unit dropdown
  const fromUnit = document.getElementById('from-unit');
  fromUnit.innerHTML = '';

  availableUnits[currentCategory].forEach((unit) => {
    const option = document.createElement('option');
    option.value = unit;
    option.textContent =
      translations[currentLanguage].units[currentCategory][unit].name;
    fromUnit.appendChild(option);
  });
}

function convertUnits(value, fromUnit) {
  if (!value || isNaN(value)) {
    // Clear results if input is empty or not a number
    document.getElementById('results-grid').innerHTML = '';
    return;
  }

  const numValue = parseFloat(value);
  const resultsGrid = document.getElementById('results-grid');
  resultsGrid.innerHTML = '';

  // Get all available units for this category
  const units = availableUnits[currentCategory];

  // Convert to all other units
  units.forEach((unit) => {
    if (unit !== fromUnit) {
      let convertedValue;

      convertedValue =
        conversionFormulas[currentCategory][fromUnit][unit](numValue);

      // Create result card
      const resultCard = document.createElement('div');
      resultCard.className = 'result-card';

      const unitName =
        translations[currentLanguage].units[currentCategory][unit].name;
      const unitHistory =
        translations[currentLanguage].units[currentCategory][unit].history;

      resultCard.innerHTML = `
                <h4>${unitName}</h4>
                <p class="result-value">${convertedValue.toFixed(2)}</p>
                <p class="unit-history">${unitHistory}</p>
            `;

      resultsGrid.appendChild(resultCard);
    }
  });
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
  savePreferences();
  applyLanguage();

  // Reload category data if on converter page
  if (document.querySelector('.converter-container')) {
    loadCategoryData();
    const inputValue = document.getElementById('input-value');
    const fromUnit = document.getElementById('from-unit');
    convertUnits(inputValue.value, fromUnit.value);
  }
}

function setupThemeToggle() {
  const themeToggle = document.createElement('div');
  themeToggle.className = 'theme-toggle';
  themeToggle.innerHTML = currentTheme === 'dark' ? '🌞' : '🌙';
  themeToggle.addEventListener('click', toggleTheme);
  document.body.appendChild(themeToggle);
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.querySelector('.theme-toggle').innerHTML =
    currentTheme === 'dark' ? '🌞' : '🌙';
  savePreferences();
}

import Flag from 'react-native-flags';
import React from 'react';

export const countries = [
    {
        country_code: "AF",
        emoji: "\ud83c\udde6\ud83c\uddeb",
        phohe_code_int: 93,
        phone_code_str: "+93",
        translations: {
            ar: "أفغانستان",
            en: "Afghanistan",
            fr: "Afghanistan",
        },
    },
    {
        country_code: "AX",
        emoji: "🇦🇽",
        phohe_code_int: 358,
        phone_code_str: "+358",
        translations: {
            ar: "جزر آلاند",
            en: "Aland Islands",
            fr: "Iles Aland",
        },
    },
    {
        country_code: "AL",
        emoji: "\ud83c\udde6\ud83c\uddf1",
        phohe_code_int: 355,
        phone_code_str: "+355",
        translations: {
            ar: "ألبانيا",
            en: "Albania",
            fr: "Albanie",
        },
    },
    {
        country_code: "DZ",
        phohe_code_int: 213,
        phone_code_str: "+213",
        translations: {
            ar: "الجزائر",
            en: "Algeria",
            fr: "Algérie",
        },
    },
    {
        country_code: "AS",
        phohe_code_int: 1684,
        phone_code_str: "+1684",
        translations: {
            ar: "ساموا الأمريكية",
            en: "American Samoa",
            fr: "Samoa américaines",
        },
    },
    {
        country_code: "AD",
        phohe_code_int: 376,
        phone_code_str: "+376",
        translations: {
            ar: "أندورا",
            en: "Andorra",
            fr: "Andorre",
        },
    },
    {
        country_code: "AO",
        phohe_code_int: 244,
        phone_code_str: "+244",
        translations: {
            ar: "أنغولا",
            en: "Angola",
            fr: "Angola",
        },
    },
    {
        country_code: "AI",
        phohe_code_int: 1264,
        phone_code_str: "+1264",
        translations: {
            ar: "أنغيلا",
            en: "Anguilla",
            fr: "Anguilla",
        },
    },
    {
        country_code: "AQ",
        phohe_code_int: 672,
        phone_code_str: "+672",
        translations: {
            ar: "أنتاركتيكا",
            en: "Antarctica",
            fr: "Antarctique",
        },
    },
    {
        country_code: "AG",
        phohe_code_int: 1268,
        phone_code_str: "+1268",
        translations: {
            ar: "أنتيغوا وبربودا",
            en: "Antigua and Barbuda",
            fr: "Antigua-et-Barbuda",
        },
    },
    {
        country_code: "AR",
        phohe_code_int: 54,
        phone_code_str: "+54",
        translations: {
            ar: "الأرجنتين",
            en: "Argentina",
            fr: "Argentine",
        },
    },
    {
        country_code: "AM",
        phohe_code_int: 374,
        phone_code_str: "+374",
        translations: {
            ar: "أرمينيا",
            en: "Armenia",
            fr: "Arménie",
        },
    },
    {
        country_code: "AW",
        phohe_code_int: 297,
        phone_code_str: "+297",
        translations: {
            ar: "أروبا",
            en: "Aruba",
            fr: "Aruba",
        },
    },
    {
        country_code: "AU",
        phohe_code_int: 61,
        phone_code_str: "+61",
        translations: {
            ar: "أستراليا",
            en: "Australia",
            fr: "Australie",
        },
    },
    {
        country_code: "AT",
        phohe_code_int: 43,
        phone_code_str: "+43",
        translations: {
            ar: "النمسا",
            en: "Austria",
            fr: "L'Autriche",
        },
    },
    {
        country_code: "AZ",
        phohe_code_int: 994,
        phone_code_str: "+994",
        translations: {
            ar: "أذربيجان",
            en: "Azerbaijan",
            fr: "Azerbaïdjan",
        },
    },
    {
        country_code: "BS",
        phohe_code_int: 1242,
        phone_code_str: "+1242",
        translations: {
            ar: "جزر البهاما",
            en: "Bahamas",
            fr: "Bahamas",
        },
    },
    {
        country_code: "BH",
        phohe_code_int: 973,
        phone_code_str: "+973",
        translations: {
            ar: "البحرين",
            en: "Bahrain",
            fr: "Bahreïn",
        },
    },
    {
        country_code: "BD",
        phohe_code_int: 880,
        phone_code_str: "+880",
        translations: {
            ar: "بنغلاديش",
            en: "Bangladesh",
            fr: "Bangladesh",
        },
    },
    {
        country_code: "BB",
        phohe_code_int: 1246,
        phone_code_str: "+1246",
        translations: {
            ar: "بربادوس",
            en: "Barbados",
            fr: "Barbade",
        },
    },
    {
        country_code: "BY",
        phohe_code_int: 375,
        phone_code_str: "+375",
        translations: {
            ar: "بيلاروسيا",
            en: "Belarus",
            fr: "Biélorussie",
        },
    },
    {
        country_code: "BE",
        phohe_code_int: 32,
        phone_code_str: "+32",
        translations: {
            ar: "بلجيكا",
            en: "Belgium",
            fr: "Belgique",
        },
    },
    {
        country_code: "BZ",
        phohe_code_int: 501,
        phone_code_str: "+501",
        translations: {
            ar: "بليز",
            en: "Belize",
            fr: "Belize",
        },
    },
    {
        country_code: "BJ",
        phohe_code_int: 229,
        phone_code_str: "+229",
        translations: {
            ar: "بنين",
            en: "Benin",
            fr: "Bénin",
        },
    },
    {
        country_code: "BM",
        phohe_code_int: 1441,
        phone_code_str: "+1441",
        translations: {
            ar: "برمودا",
            en: "Bermuda",
            fr: "Bermudes",
        },
    },
    {
        country_code: "BT",
        phohe_code_int: 975,
        phone_code_str: "+975",
        translations: {
            ar: "بوتان",
            en: "Bhutan",
            fr: "Bhoutan",
        },
    },
    {
        country_code: "BO",
        phohe_code_int: 591,
        phone_code_str: "+591",
        translations: {
            ar: "بوليفيا",
            en: "Bolivia",
            fr: "Bolivie",
        },
    },
    {
        country_code: "BW",
        phohe_code_int: 267,
        phone_code_str: "+267",
        translations: {
            ar: "بوتسوانا",
            en: "Botswana",
            fr: "Botswana",
        },
    },
    {
        country_code: "BV",
        phohe_code_int: 47,
        phone_code_str: "+47",
        translations: {
            ar: "جزيرة بوفيت",
            en: "Bouvet Island",
            fr: "Île Bouvet",
        },
    },
    {
        country_code: "BR",
        phohe_code_int: 55,
        phone_code_str: "+55",
        translations: {
            ar: "البرازيل",
            en: "Brazil",
            fr: "Brésil",
        },
    },
    {
        country_code: "BG",
        phohe_code_int: 359,
        phone_code_str: "+359",
        translations: {
            ar: "بلغاريا",
            en: "Bulgaria",
            fr: "Bulgarie",
        },
    },
    {
        country_code: "BF",
        phohe_code_int: 226,
        phone_code_str: "+226",
        translations: {
            ar: "بوركينا فاسو",
            en: "Burkina Faso",
            fr: "Burkina Faso",
        },
    },
    {
        country_code: "BI",
        phohe_code_int: 257,
        phone_code_str: "+257",
        translations: {
            ar: "بوروندي",
            en: "Burundi",
            fr: "Burundi",
        },
    },
    {
        country_code: "KH",
        phohe_code_int: 855,
        phone_code_str: "+855",
        translations: {
            ar: "كمبوديا",
            en: "Cambodia",
            fr: "Cambodge",
        },
    },
    {
        country_code: "CM",
        phohe_code_int: 237,
        phone_code_str: "+237",
        translations: {
            ar: "الكاميرون",
            en: "Cameroon",
            fr: "Cameroun",
        },
    },
    {
        country_code: "CA",
        phohe_code_int: 1,
        phone_code_str: "+1",
        translations: {
            ar: "كندا",
            en: "Canada",
            fr: "Canada",
        },
    },
    {
        country_code: "CV",
        phohe_code_int: 238,
        phone_code_str: "+238",
        translations: {
            ar: "الرأس الأخضر",
            en: "Cape Verde",
            fr: "Cap-Vert",
        },
    },
    {
        country_code: "CF",
        phohe_code_int: 236,
        phone_code_str: "+236",
        translations: {
            ar: "افريقيا الوسطى",
            en: "Central African",
            fr: "République centrafricaine",
        },
    },
    {
        country_code: "TD",
        phohe_code_int: 235,
        phone_code_str: "+235",
        translations: {
            ar: "تشاد",
            en: "Chad",
            fr: "Tchad",
        },
    },
    {
        country_code: "CL",
        phohe_code_int: 56,
        phone_code_str: "+56",
        translations: {
            ar: "تشيلي",
            en: "Chile",
            fr: "Chili",
        },
    },
    {
        country_code: "CN",
        phohe_code_int: 86,
        phone_code_str: "+86",
        translations: {
            ar: "الصين",
            en: "China",
            fr: "Chine",
        },
    },
    {
        country_code: "CO",
        phohe_code_int: 57,
        phone_code_str: "+57",
        translations: {
            ar: "كولومبيا",
            en: "Colombia",
            fr: "Colombie",
        },
    },
    {
        country_code: "KM",
        phohe_code_int: 269,
        phone_code_str: "+269",
        translations: {
            ar: "جزر القمر",
            en: "Comoros",
            fr: "Comores",
        },
    },
    {
        country_code: "CG",
        phohe_code_int: 242,
        phone_code_str: "+242",
        translations: {
            ar: "الكونغو",
            en: "Congo",
            fr: "Congo",
        },
    },
    {
        country_code: "CD",
        phohe_code_int: 243,
        phone_code_str: "+243",
        translations: {
            ar: "الكونغو الديمقراطية",
            en: "DR Congo",
            fr: "RD Congo",
        },
    },
    {
        country_code: "CR",
        phohe_code_int: 506,
        phone_code_str: "+506",
        translations: {
            ar: "كوستا ريكا",
            en: "Costa Rica",
            fr: "Costa Rica",
        },
    },
    {
        country_code: "CI",
        phohe_code_int: 225,
        phone_code_str: "+225",
        translations: {
            ar: "ساحل العاج",
            en: "Cote D'Ivoire",
            fr: "Côte d'Ivoire",
        },
    },
    {
        country_code: "HR",
        phohe_code_int: 385,
        phone_code_str: "+385",
        translations: {
            ar: "كرواتيا",
            en: "Croatia",
            fr: "Croatie",
        },
    },
    {
        country_code: "CU",
        phohe_code_int: 53,
        phone_code_str: "+53",
        translations: {
            ar: "كوبا",
            en: "Cuba",
            fr: "Cuba",
        },
    },
    {
        country_code: "CW",
        phohe_code_int: 5999,
        phone_code_str: "+5999",
        translations: {
            ar: "كوراكاو",
            en: "Curacao",
            fr: "Curacao",
        },
    },
    {
        country_code: "CY",
        phohe_code_int: 357,
        phone_code_str: "+357",
        translations: {
            ar: "قبرص",
            en: "Cyprus",
            fr: "Chypre",
        },
    },
    {
        country_code: "CZ",
        phohe_code_int: 420,
        phone_code_str: "+420",
        translations: {
            ar: "الجمهورية التشيكية",
            en: "Czech Republic",
            fr: "République Tchèque",
        },
    },
    {
        country_code: "DK",
        phohe_code_int: 45,
        phone_code_str: "+45",
        translations: {
            ar: "الدنمارك",
            en: "Denmark",
            fr: "Danemark",
        },
    },
    {
        country_code: "DJ",
        phohe_code_int: 253,
        phone_code_str: "+253",
        translations: {
            ar: "جيبوتي",
            en: "Djibouti",
            fr: "Djibouti",
        },
    },
    {
        country_code: "DM",
        phohe_code_int: 1767,
        phone_code_str: "+1767",
        translations: {
            ar: "دومينيكا",
            en: "Dominica",
            fr: "Dominique",
        },
    },
    {
        country_code: "DO",
        phohe_code_int: 1809,
        phone_code_str: "+1809",
        translations: {
            ar: "جمهورية الدومينيكان",
            en: "Dominican Republic",
            fr: "République dominicaine",
        },
    },
    {
        country_code: "EC",
        phohe_code_int: 593,
        phone_code_str: "+593",
        translations: {
            ar: "الاكوادور",
            en: "Ecuador",
            fr: "Équateur",
        },
    },
    {
        country_code: "EG",
        phohe_code_int: 20,
        phone_code_str: "+20",
        translations: {
            ar: "مصر",
            en: "Egypt",
            fr: "Egypte",
        },
    },
    {
        country_code: "SV",
        phohe_code_int: 503,
        phone_code_str: "+503",
        translations: {
            ar: "السلفادور",
            en: "El Salvador",
            fr: "Le Salvador",
        },
    },
    {
        country_code: "CQ",
        phohe_code_int: 240,
        phone_code_str: "+240",
        translations: {
            ar: "غينيا الإستوائية",
            en: "Equatorial Guinea",
            fr: "Guinée Équatoriale",
        },
    },
    {
        country_code: "ER",
        phohe_code_int: 291,
        phone_code_str: "+291",
        translations: {
            ar: "إريتريا",
            en: "Eritrea",
            fr: "Érythrée",
        },
    },
    {
        country_code: "EE",
        phohe_code_int: 372,
        phone_code_str: "+372",
        translations: {
            ar: "إستونيا",
            en: "Estonia",
            fr: "Estonie",
        },
    },
    {
        country_code: "ET",
        phohe_code_int: 251,
        phone_code_str: "+251",
        translations: {
            ar: "أثيوبيا",
            en: "Ethiopia",
            fr: "Ethiopie",
        },
    },
    {
        country_code: "FO",
        phohe_code_int: 298,
        phone_code_str: "+298",
        translations: {
            ar: "جزر فاروس",
            en: "Faroe Islands",
            fr: "Îles Féroé",
        },
    },
    {
        country_code: "FJ",
        phohe_code_int: 679,
        phone_code_str: "+679",
        translations: {
            ar: "فيجي",
            en: "Fiji",
            fr: "Fidji",
        },
    },
    {
        country_code: "FI",
        phohe_code_int: 358,
        phone_code_str: "+358",
        translations: {
            ar: "فنلندا",
            en: "Finland",
            fr: "Finlande",
        },
    },
    {
        country_code: "FR",
        phohe_code_int: 33,
        phone_code_str: "+33",
        translations: {
            ar: "فرنسا",
            en: "France",
            fr: "France",
        },
    },
    {
        country_code: "GF",
        phohe_code_int: 594,
        phone_code_str: "+594",
        translations: {
            ar: "غيانا الفرنسية",
            en: "French Guiana",
            fr: "Guyane Française",
        },
    },
    {
        country_code: "PF",
        phohe_code_int: 689,
        phone_code_str: "+689",
        translations: {
            ar: "بولينيزيا الفرنسية",
            en: "French Polynesia",
            fr: "Polynésie française",
        },
    },
    {
        country_code: "GA",
        phohe_code_int: 241,
        phone_code_str: "+241",
        translations: {
            ar: "الجابون",
            en: "Gabon",
            fr: "Gabon",
        },
    },
    {
        country_code: "GM",
        phohe_code_int: 220,
        phone_code_str: "+220",
        translations: {
            ar: "غامبيا",
            en: "Gambia",
            fr: "Gambie",
        },
    },
    {
        country_code: "GE",
        phohe_code_int: 995,
        phone_code_str: "+995",
        translations: {
            ar: "جورجيا",
            en: "Georgia",
            fr: "Géorgie",
        },
    },
    {
        country_code: "DE",
        phohe_code_int: 49,
        phone_code_str: "+49",
        translations: {
            ar: "ألمانيا",
            en: "Germany",
            fr: "Allemagne",
        },
    },
    {
        country_code: "GH",
        phohe_code_int: 233,
        phone_code_str: "+233",
        translations: {
            ar: "غانا",
            en: "Ghana",
            fr: "Ghana",
        },
    },
    {
        country_code: "GI",
        phohe_code_int: 350,
        phone_code_str: "+350",
        translations: {
            ar: "جبل طارق",
            en: "Gibraltar",
            fr: "Gibraltar",
        },
    },
    {
        country_code: "GR",
        phohe_code_int: 30,
        phone_code_str: "+30",
        translations: {
            ar: "اليونان",
            en: "Greece",
            fr: "Grèce",
        },
    },
    {
        country_code: "GL",
        phohe_code_int: 299,
        phone_code_str: "+299",
        translations: {
            ar: "جرينلاند",
            en: "Greenland",
            fr: "Groenland",
        },
    },
    {
        country_code: "GD",
        phohe_code_int: 1473,
        phone_code_str: "+1473",
        translations: {
            ar: "غرينادا",
            en: "Grenada",
            fr: "Grenade",
        },
    },
    {
        country_code: "GP",
        phohe_code_int: 590,
        phone_code_str: "+590",
        translations: {
            ar: "جوادلوب",
            en: "Guadeloupe",
            fr: "Guadeloupe",
        },
    },
    {
        country_code: "GU",
        phohe_code_int: 1671,
        phone_code_str: "+1671",
        translations: {
            ar: "غوام",
            en: "Guam",
            fr: "Guam",
        },
    },
    {
        country_code: "GT",
        phohe_code_int: 502,
        phone_code_str: "+502",
        translations: {
            ar: "غواتيمالا",
            en: "Guatemala",
            fr: "Guatemala",
        },
    },
    {
        country_code: "GG",
        phohe_code_int: 44,
        phone_code_str: "+44",
        translations: {
            ar: "غيرنسي",
            en: "Guernsey",
            fr: "Guernesey",
        },
    },
    {
        country_code: "GN",
        phohe_code_int: 224,
        phone_code_str: "+224",
        translations: {
            ar: "غينيا",
            en: "Guinea",
            fr: "Guinée",
        },
    },
    {
        country_code: "GW",
        phohe_code_int: 245,
        phone_code_str: "+245",
        translations: {
            ar: "غينيا بيساو",
            en: "Guinea-Bissau",
            fr: "Guinée-Bissau",
        },
    },
    {
        country_code: "GY",
        phohe_code_int: 592,
        phone_code_str: "+592",
        translations: {
            ar: "غيانا",
            en: "Guyana",
            fr: "Guyane",
        },
    },
    {
        country_code: "HT",
        phohe_code_int: 509,
        phone_code_str: "+509",
        translations: {
            ar: "هايتي",
            en: "Haiti",
            fr: "Haïti",
        },
    },
    {
        country_code: "HN",
        phohe_code_int: 504,
        phone_code_str: "+504",
        translations: {
            ar: "هندوراس",
            en: "Honduras",
            fr: "Honduras",
        },
    },
    {
        country_code: "HK",
        phohe_code_int: 852,
        phone_code_str: "+852",
        translations: {
            ar: "هونج كونج",
            en: "Hong Kong",
            fr: "Hong Kong",
        },
    },
    {
        country_code: "HU",
        phohe_code_int: 36,
        phone_code_str: "+36",
        translations: {
            ar: "هنغاريا",
            en: "Hungary",
            fr: "Hongrie",
        },
    },
    {
        country_code: "IS",
        phohe_code_int: 354,
        phone_code_str: "+354",
        translations: {
            ar: "أيسلندا",
            en: "Iceland",
            fr: "Islande",
        },
    },
    {
        country_code: "IN",
        phohe_code_int: 91,
        phone_code_str: "+91",
        translations: {
            ar: "الهند",
            en: "India",
            fr: "Inde",
        },
    },
    {
        country_code: "ID",
        phohe_code_int: 62,
        phone_code_str: "+68",
        translations: {
            ar: "إندونيسيا",
            en: "Indonesia",
            fr: "Indonésie",
        },
    },
    {
        country_code: "IR",
        phohe_code_int: 98,
        phone_code_str: "+98",
        translations: {
            ar: "إيران",
            en: "Iran",
            fr: "Iran",
        },
    },
    {
        country_code: "IQ",
        phohe_code_int: 964,
        phone_code_str: "+964",
        translations: {
            ar: "العراق",
            en: "Iraq",
            fr: "Irak",
        },
    },
    {
        country_code: "IE",
        phohe_code_int: 353,
        phone_code_str: "+353",
        translations: {
            ar: "أيرلندا",
            en: "Ireland",
            fr: "Irlande",
        },
    },
    {
        country_code: "IM",
        phohe_code_int: 44,
        phone_code_str: "+44",
        translations: {
            ar: "آيل أوف مان",
            en: "Isle of Man",
            fr: "île de Man",
        },
    },
    {
        country_code: "IT",
        phohe_code_int: 39,
        phone_code_str: "+39",
        translations: {
            ar: "إيطاليا",
            en: "Italy",
            fr: "Italie",
        },
    },
    {
        country_code: "JM",
        phohe_code_int: 1876,
        phone_code_str: "+1876",
        translations: {
            ar: "جامايكا",
            en: "Jamaica",
            fr: "Jamaïque",
        },
    },
    {
        country_code: "JP",
        phohe_code_int: 81,
        phone_code_str: "+81",
        translations: {
            ar: "اليابان",
            en: "Japan",
            fr: "Japon",
        },
    },
    {
        country_code: "JE",
        phohe_code_int: 44,
        phone_code_str: "+44",
        translations: {
            ar: "جيرسي",
            en: "Jersey",
            fr: "Jersey",
        },
    },
    {
        country_code: "JO",
        phohe_code_int: 962,
        phone_code_str: "+962",
        translations: {
            ar: "الأردن",
            en: "Jordan",
            fr: "Jordan",
        },
    },
    {
        country_code: "KZ",
        phohe_code_int: 76,
        phone_code_str: "+76",
        translations: {
            ar: "كازاخستان",
            en: "Kazakhstan",
            fr: "Kazakhstan",
        },
    },
    {
        country_code: "KE",
        phohe_code_int: 254,
        phone_code_str: "+254",
        translations: {
            ar: "كينيا",
            en: "Kenya",
            fr: "Kenya",
        },
    },
    {
        country_code: "KI",
        phohe_code_int: 686,
        phone_code_str: "+686",
        translations: {
            ar: "كيريباتي",
            en: "Kiribati",
            fr: "Kiribati",
        },
    },
    {
        country_code: "XK",
        phohe_code_int: 377,
        phone_code_str: "+377",
        translations: {
            ar: "كوسوفو",
            en: "Kosovo",
            fr: "Kosovo",
        },
    },
    {
        country_code: "KW",
        phohe_code_int: 965,
        phone_code_str: "+965",
        translations: {
            ar: "الكويت",
            en: "Kuwait",
            fr: "Koweit",
        },
    },
    {
        country_code: "KG",
        phohe_code_int: 996,
        phone_code_str: "+996",
        translations: {
            ar: "قيرغيزستان",
            en: "Kyrgyzstan",
            fr: "Kirghizistan",
        },
    },
    {
        country_code: "LV",
        phohe_code_int: 371,
        phone_code_str: "+371",
        translations: {
            ar: "لاتفيا",
            en: "Latvia",
            fr: "Lettonie",
        },
    },
    {
        country_code: "LB",
        phohe_code_int: 961,
        phone_code_str: "+961",
        translations: {
            ar: "لبنان",
            en: "Lebanon",
            fr: "Liban",
        },
    },
    {
        country_code: "LR",
        phohe_code_int: 231,
        phone_code_str: "+231",
        translations: {
            ar: "ليبيريا",
            en: "Liberia",
            fr: "Libéria",
        },
    },
    {
        country_code: "LY",
        phohe_code_int: 218,
        phone_code_str: "+218",
        translations: {
            ar: "ليبيا",
            en: "Libya",
            fr: "Libye",
        },
    },
    {
        country_code: "LT",
        phohe_code_int: 370,
        phone_code_str: "+370",
        translations: {
            ar: "ليتوانيا",
            en: "Lithuania",
            fr: "Lituanie",
        },
    },
    {
        country_code: "LU",
        phohe_code_int: 352,
        phone_code_str: "+352",
        translations: {
            ar: "لوكسمبورغ",
            en: "Luxembourg",
            fr: "Luxembourg",
        },
    },
    {
        country_code: "MO",
        phohe_code_int: 853,
        phone_code_str: "+853",
        translations: {
            ar: "ماكاو",
            en: "Macao",
            fr: "Macao",
        },
    },
    {
        country_code: "MK",
        phohe_code_int: 389,
        phone_code_str: "+389",
        translations: {
            ar: "مقدونيا",
            en: "Macedonia",
            fr: "Macédoine",
        },
    },
    {
        country_code: "MG",
        phohe_code_int: 261,
        phone_code_str: "+261",
        translations: {
            ar: "مدغشقر",
            en: "Madagascar",
            fr: "Madagascar",
        },
    },
    {
        country_code: "MW",
        phohe_code_int: 265,
        phone_code_str: "+265",
        translations: {
            ar: "ملاوي",
            en: "Malawi",
            fr: "Malawi",
        },
    },
    {
        country_code: "MY",
        phohe_code_int: 60,
        phone_code_str: "+60",
        translations: {
            ar: "ماليزيا",
            en: "Malaysia",
            fr: "Malaisie",
        },
    },
    {
        country_code: "MV",
        phohe_code_int: 960,
        phone_code_str: "+960",
        translations: {
            ar: "جزر المالديف",
            en: "Maldives",
            fr: "Maldives",
        },
    },
    {
        country_code: "ML",
        phohe_code_int: 223,
        phone_code_str: "+223",
        translations: {
            ar: "مالي",
            en: "Mali",
            fr: "Mali",
        },
    },
    {
        country_code: "MT",
        phohe_code_int: 356,
        phone_code_str: "+356",
        translations: {
            ar: "مالطا",
            en: "Malta",
            fr: "Malte",
        },
    },
    {
        country_code: "MH",
        phohe_code_int: 692,
        phone_code_str: "+692",
        translations: {
            ar: "جزر مارشال",
            en: "Marshall Islands",
            fr: "Iles Marshall",
        },
    },
    {
        country_code: "MQ",
        phohe_code_int: 596,
        phone_code_str: "+596",
        translations: {
            ar: "مارتينيك",
            en: "Martinique",
            fr: "Martinique",
        },
    },
    {
        country_code: "MR",
        phohe_code_int: 222,
        phone_code_str: "+222",
        translations: {
            ar: "موريتانيا",
            en: "Mauritania",
            fr: "Mauritanie",
        },
    },
    {
        country_code: "MU",
        phohe_code_int: 230,
        phone_code_str: "+230",
        translations: {
            ar: "موريشيوس",
            en: "Mauritius",
            fr: "Maurice",
        },
    },
    {
        country_code: "YT",
        phohe_code_int: 262,
        phone_code_str: "+262",
        translations: {
            ar: "مايوت",
            en: "Mayotte",
            fr: "Mayotte",
        },
    },
    {
        country_code: "MX",
        phohe_code_int: 52,
        phone_code_str: "+52",
        translations: {
            ar: "المكسيك",
            en: "Mexico",
            fr: "Mexique",
        },
    },
    {
        country_code: "MD",
        phohe_code_int: 373,
        phone_code_str: "+373",
        translations: {
            ar: "مولدوفا",
            en: "Moldova",
            fr: "Moldavie",
        },
    },
    {
        country_code: "MC",
        phohe_code_int: 377,
        phone_code_str: "+377",
        translations: {
            ar: "موناكو",
            en: "Monaco",
            fr: "Monaco",
        },
    },
    {
        country_code: "MN",
        phohe_code_int: 976,
        phone_code_str: "+976",
        translations: {
            ar: "منغوليا",
            en: "Mongolia",
            fr: "Mongolie",
        },
    },
    {
        country_code: "ME",
        phohe_code_int: 382,
        phone_code_str: "+382",
        translations: {
            ar: "الجبل الأسود",
            en: "Montenegro",
            fr: "Monténégro",
        },
    },
    {
        country_code: "MS",
        phohe_code_int: 1664,
        phone_code_str: "+1664",
        translations: {
            ar: "مونتسيرات",
            en: "Montserrat",
            fr: "Montserrat",
        },
    },
    {
        country_code: "MA",
        phohe_code_int: 212,
        phone_code_str: "+212",
        translations: {
            ar: "المغرب",
            en: "Morocco",
            fr: "Maroc",
        },
    },
    {
        country_code: "MZ",
        phohe_code_int: 258,
        phone_code_str: "+258",
        translations: {
            ar: "موزمبيق",
            en: "Mozambique",
            fr: "Mozambique",
        },
    },
    {
        country_code: "MM",
        phohe_code_int: 95,
        phone_code_str: "+95",
        translations: {
            ar: "ميانمار",
            en: "Myanmar",
            fr: "Birmanie",
        },
    },
    {
        country_code: "NA",
        phohe_code_int: 264,
        phone_code_str: "+264",
        translations: {
            ar: "ناميبيا",
            en: "Namibia",
            fr: "Namibie",
        },
    },
    {
        country_code: "NR",
        phohe_code_int: 674,
        phone_code_str: "+674",
        translations: {
            ar: "ناورو",
            en: "Nauru",
            fr: "Nauru",
        },
    },
    {
        country_code: "NP",
        phohe_code_int: 977,
        phone_code_str: "+977",
        translations: {
            ar: "نيبال",
            en: "Nepal",
            fr: "Népal",
        },
    },
    {
        country_code: "NL",
        phohe_code_int: 31,
        phone_code_str: "+31",
        translations: {
            ar: "هولندا",
            en: "Netherlands",
            fr: "Pays-Bas",
        },
    },
    {
        country_code: "NC",
        phohe_code_int: 687,
        phone_code_str: "+687",
        translations: {
            ar: "كاليدونيا الجديدة",
            en: "New Caledonia",
            fr: "Nouvelle Calédonie",
        },
    },
    {
        country_code: "NZ",
        phohe_code_int: 64,
        phone_code_str: "+64",
        translations: {
            ar: "نيوزيلاندا",
            en: "New Zealand",
            fr: "Nouvelle-Zélande",
        },
    },
    {
        country_code: "NI",
        phohe_code_int: 505,
        phone_code_str: "+505",
        translations: {
            ar: "نيكاراغوا",
            en: "Nicaragua",
            fr: "Nicaragua",
        },
    },
    {
        country_code: "NE",
        phohe_code_int: 227,
        phone_code_str: "+227",
        translations: {
            ar: "النيجر",
            en: "Niger",
            fr: "Niger",
        },
    },
    {
        country_code: "NG",
        phohe_code_int: 234,
        phone_code_str: "+234",
        translations: {
            ar: "نيجيريا",
            en: "Nigeria",
            fr: "Nigeria",
        },
    },
    {
        country_code: "NU",
        phohe_code_int: 683,
        phone_code_str: "+683",
        translations: {
            ar: "نيوي",
            en: "Niue",
            fr: "Nioué",
        },
    },
    {
        country_code: "NF",
        phohe_code_int: 672,
        phone_code_str: "+672",
        translations: {
            ar: "جزيرة نورفولك",
            en: "Norfolk Island",
            fr: "l'ile de Norfolk",
        },
    },
    {
        country_code: "KP",
        phohe_code_int: 850,
        phone_code_str: "+850",
        translations: {
            ar: "كوريا الشمالية",
            en: "North Korea",
            fr: "Corée du Nord",
        },
    },
    {
        country_code: "NO",
        phohe_code_int: 47,
        phone_code_str: "+47",
        translations: {
            ar: "النرويج",
            en: "Norway",
            fr: "Norvège",
        },
    },
    {
        country_code: "OM",
        phohe_code_int: 968,
        phone_code_str: "+968",
        translations: {
            ar: "سلطنة عمان",
            en: "Oman",
            fr: "Oman",
        },
    },
    {
        country_code: "PK",
        phohe_code_int: 92,
        phone_code_str: "+92",
        translations: {
            ar: "باكستان",
            en: "Pakistan",
            fr: "Pakistan",
        },
    },
    {
        country_code: "PW",
        phohe_code_int: 680,
        phone_code_str: "+680",
        translations: {
            ar: "بالاو",
            en: "Palau",
            fr: "Palaos",
        },
    },
    {
        country_code: "PS",
        phohe_code_int: 970,
        phone_code_str: "+970",
        translations: {
            ar: "فلسطين",
            en: "Palestine",
            fr: "Palestine",
        },
    },
    {
        country_code: "PA",
        phohe_code_int: 507,
        phone_code_str: "+507",
        translations: {
            ar: "بنما",
            en: "Panama",
            fr: "Panama",
        },
    },
    {
        country_code: "PY",
        phohe_code_int: 595,
        phone_code_str: "+595",
        translations: {
            ar: "باراغواي",
            en: "Paraguay",
            fr: "Paraguay",
        },
    },
    {
        country_code: "PE",
        phohe_code_int: 51,
        phone_code_str: "+51",
        translations: {
            ar: "بيرو",
            en: "Peru",
            fr: "Pérou",
        },
    },
    {
        country_code: "PH",
        phohe_code_int: 63,
        phone_code_str: "+63",
        translations: {
            ar: "الفلبين",
            en: "Philippines",
            fr: "Philippines",
        },
    },
    {
        country_code: "PL",
        phohe_code_int: 48,
        phone_code_str: "+48",
        translations: {
            ar: "بولندا",
            en: "Poland",
            fr: "Pologne",
        },
    },
    {
        country_code: "PT",
        phohe_code_int: 351,
        phone_code_str: "+351",
        translations: {
            ar: "البرتغال",
            en: "Portugal",
            fr: "Portugal",
        },
    },
    {
        country_code: "PR",
        phohe_code_int: 1787,
        phone_code_str: "+1787",
        translations: {
            ar: "بورتو ريكو",
            en: "Puerto Rico",
            fr: "Porto Rico",
        },
    },
    {
        country_code: "QA",
        phohe_code_int: 974,
        phone_code_str: "+974",
        translations: {
            ar: "قطر",
            en: "Qatar",
            fr: "Qatar",
        },
    },
    {
        country_code: "RO",
        phohe_code_int: 40,
        phone_code_str: "+40",
        translations: {
            ar: "رومانيا",
            en: "Romania",
            fr: "Roumanie",
        },
    },
    {
        country_code: "RU",
        phohe_code_int: 7,
        phone_code_str: "+7",
        translations: {
            ar: "روسيا",
            en: "Russia",
            fr: "Russie",
        },
    },
    {
        country_code: "RW",
        phohe_code_int: 250,
        phone_code_str: "+250",
        translations: {
            ar: "رواندا",
            en: "Rwanda",
            fr: "Rwanda",
        },
    },
    {
        country_code: "WS",
        phohe_code_int: 685,
        phone_code_str: "+685",
        translations: {
            ar: "ساموا",
            en: "Samoa",
            fr: "Samoa",
        },
    },
    {
        country_code: "SM",
        phohe_code_int: 378,
        phone_code_str: "+378",
        translations: {
            ar: "سان مارينو",
            en: "San Marino",
            fr: "Saint Marin",
        },
    },
    {
        country_code: "SA",
        phohe_code_int: 966,
        phone_code_str: "+966",
        translations: {
            ar: "المملكة العربية السعودية",
            en: "Saudi Arabia",
            fr: "Arabie Saoudite",
        },
    },
    {
        country_code: "SN",
        phohe_code_int: 221,
        phone_code_str: "+221",
        translations: {
            ar: "السنغال",
            en: "Senegal",
            fr: "Sénégal",
        },
    },
    {
        country_code: "RS",
        phohe_code_int: 381,
        phone_code_str: "+381",
        translations: {
            ar: "صربيا",
            en: "Serbia",
            fr: "Serbie",
        },
    },
    {
        country_code: "SC",
        phohe_code_int: 248,
        phone_code_str: "+248",
        translations: {
            ar: "سيشيل",
            en: "Seychelles",
            fr: "Seychelles",
        },
    },
    {
        country_code: "SL",
        phohe_code_int: 232,
        phone_code_str: "+232",
        translations: {
            ar: "سيرا ليون",
            en: "Sierra Leone",
            fr: "Sierra Leone",
        },
    },
    {
        country_code: "SG",
        phohe_code_int: 65,
        phone_code_str: "+65",
        translations: {
            ar: "سنغافورة",
            en: "Singapore",
            fr: "Singapour",
        },
    },
    {
        country_code: "SK",
        phohe_code_int: 421,
        phone_code_str: "+421",
        translations: {
            ar: "سلوفاكيا",
            en: "Slovakia",
            fr: "Slovaquie",
        },
    },
    {
        country_code: "SI",
        phohe_code_int: 386,
        phone_code_str: "+386",
        translations: {
            ar: "سلوفينيا",
            en: "Slovenia",
            fr: "Slovénie",
        },
    },
    {
        country_code: "SB",
        phohe_code_int: 677,
        phone_code_str: "+677",
        translations: {
            ar: "جزر سليمان",
            en: "Solomon Islands",
            fr: "Les îles Salomon",
        },
    },
    {
        country_code: "SO",
        phohe_code_int: 252,
        phone_code_str: "+252",
        translations: {
            ar: "الصومال",
            en: "Somalia",
            fr: "Somalie",
        },
    },
    {
        country_code: "ZA",
        phohe_code_int: 27,
        phone_code_str: "+27",
        translations: {
            ar: "جنوب أفريقيا",
            en: "South Africa",
            fr: "Afrique du Sud",
        },
    },
    {
        country_code: "KR",
        phohe_code_int: 82,
        phone_code_str: "+82",
        translations: {
            ar: "كوريا الجنوبية",
            en: "South Korea",
            fr: "Corée du Sud",
        },
    },
    {
        country_code: "SS",
        phohe_code_int: 211,
        phone_code_str: "+211",
        translations: {
            ar: "جنوب السودان",
            en: "South Sudan",
            fr: "Soudan du sud",
        },
    },
    {
        country_code: "ES",
        phohe_code_int: 34,
        phone_code_str: "+34",
        translations: {
            ar: "إسبانيا",
            en: "Spain",
            fr: "Espagne",
        },
    },
    {
        country_code: "LK",
        phohe_code_int: 94,
        phone_code_str: "+94",
        translations: {
            ar: "سيريلانكا",
            en: "Sri Lanka",
            fr: "Sri Lanka",
        },
    },
    {
        country_code: "SD",
        phohe_code_int: 249,
        phone_code_str: "+249",
        translations: {
            ar: "السودان",
            en: "Sudan",
            fr: "Soudan",
        },
    },
    {
        country_code: "ZR",
        phohe_code_int: 597,
        phone_code_str: "+597",
        translations: {
            ar: "سورينام",
            en: "Suriname",
            fr: "Surinam",
        },
    },
    {
        country_code: "SZ",
        phohe_code_int: 268,
        phone_code_str: "+268",
        translations: {
            ar: "سوازيلاند",
            en: "Swaziland",
            fr: "Swaziland",
        },
    },
    {
        country_code: "SE",
        phohe_code_int: 46,
        phone_code_str: "+46",
        translations: {
            ar: "السويد",
            en: "Sweden",
            fr: "Suède",
        },
    },
    {
        country_code: "CH",
        phohe_code_int: 41,
        phone_code_str: "+41",
        translations: {
            ar: "سويسرا",
            en: "Switzerland",
            fr: "Suisse",
        },
    },
    {
        country_code: "SY",
        phohe_code_int: 963,
        phone_code_str: "+963",
        translations: {
            ar: "سوريا",
            en: "Syria",
            fr: "Syrie",
        },
    },
    {
        country_code: "TW",
        phohe_code_int: 886,
        phone_code_str: "+886",
        translations: {
            ar: "تايوان",
            en: "Taiwan",
            fr: "Taïwan",
        },
    },
    {
        country_code: "TJ",
        phohe_code_int: 992,
        phone_code_str: "+992",
        translations: {
            ar: "طاجيكستان",
            en: "Tajikistan",
            fr: "Tadjikistan",
        },
    },
    {
        country_code: "TZ",
        phohe_code_int: 255,
        phone_code_str: "+255",
        translations: {
            ar: "تنزانيا",
            en: "Tanzania",
            fr: "Tanzanie",
        },
    },
    {
        country_code: "TH",
        phohe_code_int: 66,
        phone_code_str: "+66",
        translations: {
            ar: "تايلاند",
            en: "Thailand",
            fr: "Thaïlande",
        },
    },
    {
        country_code: "TL",
        phohe_code_int: 670,
        phone_code_str: "+670",
        translations: {
            ar: "تيمور ليشتي",
            en: "Timor-Leste",
            fr: "Timor-Leste",
        },
    },
    {
        country_code: "TG",
        phohe_code_int: 228,
        phone_code_str: "+228",
        translations: {
            ar: "توغو",
            en: "Togo",
            fr: "Togo",
        },
    },
    {
        country_code: "TK",
        phohe_code_int: 690,
        phone_code_str: "+690",
        translations: {
            ar: "توكيلاو",
            en: "Tokelau",
            fr: "Tokélaou",
        },
    },
    {
        country_code: "TO",
        phohe_code_int: 676,
        phone_code_str: "+676",
        translations: {
            ar: "تونغا",
            en: "Tonga",
            fr: "Tonga",
        },
    },
    {
        country_code: "TT",
        phohe_code_int: 1868,
        phone_code_str: "+1868",
        translations: {
            ar: "ترينداد وتوباغو",
            en: "Trinidad and Tobago",
            fr: "Trinité-et-Tobago",
        },
    },
    {
        country_code: "TN",
        phohe_code_int: 216,
        phone_code_str: "+216",
        translations: {
            ar: "تونس",
            en: "Tunisia",
            fr: "Tunisie",
        },
    },
    {
        country_code: "TR",
        phohe_code_int: 90,
        phone_code_str: "+90",
        translations: {
            ar: "تركيا",
            en: "Turkey",
            fr: "Turquie",
        },
    },
    {
        country_code: "TM",
        phohe_code_int: 993,
        phone_code_str: "+993",
        translations: {
            ar: "تركمانستان",
            en: "Turkmenistan",
            fr: "Turkménistan",
        },
    },
    {
        country_code: "TV",
        phohe_code_int: 688,
        phone_code_str: "+688",
        translations: {
            ar: "توفالو",
            en: "Tuvalu",
            fr: "Tuvalu",
        },
    },
    {
        country_code: "UG",
        phohe_code_int: 256,
        phone_code_str: "+256",
        translations: {
            ar: "أوغندا",
            en: "Uganda",
            fr: "Ouganda",
        },
    },
    {
        country_code: "UA",
        phohe_code_int: 380,
        phone_code_str: "+380",
        translations: {
            ar: "أوكرانيا",
            en: "Ukraine",
            fr: "Ukraine",
        },
    },
    {
        country_code: "AE",
        phohe_code_int: 971,
        phone_code_str: "+971",
        translations: {
            ar: "الإمارات العربية المتحدة",
            en: "United Arab Emirates",
            fr: "Emirats Arabes Unis",
        },
    },
    {
        country_code: "GB",
        phohe_code_int: 44,
        phone_code_str: "+44",
        translations: {
            ar: "المملكة المتحدة",
            en: "United Kingdom",
            fr: "Royaume-Uni",
        },
    },
    {
        country_code: "US",
        phohe_code_int: 1,
        phone_code_str: "+1",
        translations: {
            ar: "الولايات المتحدة الأمريكية",
            en: "United States",
            fr: "États Unis",
        },
    },
    {
        country_code: "UY",
        phohe_code_int: 598,
        phone_code_str: "+598",
        translations: {
            ar: "أوروغواي",
            en: "Uruguay",
            fr: "Uruguay",
        },
    },
    {
        country_code: "UZ",
        phohe_code_int: 998,
        phone_code_str: "+998",
        translations: {
            ar: "أوزبكستان",
            en: "Uzbekistan",
            fr: "Ouzbékistan",
        },
    },
    {
        country_code: "VU",
        phohe_code_int: 678,
        phone_code_str: "+678",
        translations: {
            ar: "فانواتو",
            en: "Vanuatu",
            fr: "Vanuatu",
        },
    },
    {
        country_code: "VE",
        phohe_code_int: 58,
        phone_code_str: "+58",
        translations: {
            ar: "فنزويلا",
            en: "Venezuela",
            fr: "Venezuela",
        },
    },
    {
        country_code: "VN",
        phohe_code_int: 84,
        phone_code_str: "+84",
        translations: {
            ar: "فييت نام",
            en: "Viet Nam",
            fr: "Viet Nam",
        },
    },
    {
        country_code: "YE",
        phohe_code_int: 967,
        phone_code_str: "+967",
        translations: {
            ar: "اليمن",
            en: "Yemen",
            fr: "Yémen",
        },
    },
    {
        country_code: "ZM",
        phohe_code_int: 260,
        phone_code_str: "+260",
        translations: {
            ar: "زامبيا",
            en: "Zambia",
            fr: "Zambie",
        },
    },
    {
        country_code: "ZW",
        phohe_code_int: 263,
        phone_code_str: "+263",
        translations: {
            ar: "زيمبابوي",
            en: "Zimbabwe",
            fr: "Zimbabwe",
        },
    },
];

export const get_countries = (current_language) => {
    var countries_ = countries.sort((a, b) => {
        return a.translations[current_language] < b.translations[current_language] ? -1 : 1;
    });
    return countries_;
};

export const get_contries_select_options = (current_language) => {
    var countries_ = countries.sort((a, b) => {
        return a.translations[current_language] < b.translations[current_language] ? -1 : 1;
    });
    var countries_options = [];
    countries_.map(country => {
        countries_options.push({
          label: country.translations[current_language],
          value: country.country_code,
          icon: () => <Flag code={country.country_code} size={32} />,
        });
    });
    return countries_options;
};

export const get_contry_by_code = (country_code) => {
    return countries.filter(country => {
        return country.country_code == country_code || country.phone_code_int == country_code || country.phone_code_str == country_code;
    })[0];
};

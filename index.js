const express = require("express");
const app = express();

// ✅ All channels organized by category
const categories = {
  

  "NEPALI": [
    {
      "id": 224,
      "name": "AVENEWS TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Avenues_TV_2021-05-03_11:05:44.png"
    },
    {
      "id": 516,
      "name": "KANTIPUR",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Kantipur_HD_2021-05-03_10:05:22.png"
    },
    {
      "id": 225,
      "name": "NTV NEPAL",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Nepal_TV_HD_2021-05-03_11:05:44.png"
    },
    {
      "id": 226,
      "name": "SAGARMATHA TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sagarmatha_TV_2021-05-03_11:05:18.png"
    },
    {
      "id": 587,
      "name": "IMAGE",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Image_Channel_2021-09-13_10:09:42.jpg"
    },
    {
      "id": 235,
      "name": "MOUNTAIN TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Mountain_TV_HD_2022-03-10_10:03:26.png"
    },
    {
      "id": 238,
      "name": "HIMALAYA TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Himalaya_TV_HD_2021-05-03_10:05:55.png"
    },
    {
      "id": 1297,
      "name": "Global Tv Nep",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Global_TV_2022-03-10_10:03:47.png"
    },
    {
      "id": 237,
      "name": "NEWS 24",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/News_24_2021-05-03_11:05:54.png"
    },
    {
      "id": 1312,
      "name": "Makalu Tv HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Makalu_TV_HD_2021-01-31_07:01:58.jpg"
    },
    {
      "id": 590,
      "name": "ABC",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/ABC_NEWS_2021-05-03_11:05:24.png"
    },
    {
      "id": 262,
      "name": "NTVPLUS",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/NTV_Plus_HD_2021-05-03_11:05:27.png"
    },
    {
      "id": 263,
      "name": "Nari TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Nari_HD_2023-07-07_10:07:58.jpeg"
    },
    {
      "id": 265,
      "name": "NTVNEWS",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/NTV_News_HD_2021-05-03_11:05:04.png"
    },
    {
      "id": 460,
      "name": "Times HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Times_TV_HD_2021-05-05_08:05:45.png"
    },
    {
      "id": 1162,
      "name": "NTV Itahari",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/NTV_Itahari_HD_2020-08-23_08:08:37.png"
    },
    {
      "id": 578,
      "name": "NTV KOHALPUR",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/NTV_Kohalpur_HD_2021-05-03_11:05:21.png"
    },
    {
      "id": 775,
      "name": "Arena TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/ARENA_TV_2021-05-05_08:05:06.png"
    },
    {
      "id": 778,
      "name": "PRIME TV HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Prime_Times_2020-10-02_06:10:33.png"
    },
    {
      "id": 1396,
      "name": "SPACE 4K TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Space_4K_2023-04-16_09:04:03.png"
    },
    {
      "id": 836,
      "name": "AP1HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/AP1_HD_2021-05-03_10:05:59.png"
    },
    {
      "id": 422,
      "name": "Business Plus TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Business_Plus_HD_2022-03-10_10:03:20.png"
    },
    {
      "id": 1087,
      "name": "OSN Nepal",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Everest_Tv_HD_2021-01-21_05:01:23.png"
    },
    {
      "id": 1090,
      "name": "News Nepal",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/News_Nepal_2021-05-03_11:05:04.png"
    },
    {
      "id": 1045,
      "name": "Yoho TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Yoho_TV_HD_2022-03-10_10:03:53.png"
    },
    {
      "id": 1196,
      "name": "Bagmati TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Bagmati_TV_HD_2021-07-09_10:07:56.png"
    },
    {
      "id": 429,
      "name": "JANTA TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Janata_HD_2021-05-03_11:05:25.png"
    },
    {
      "id": 454,
      "name": "TV TODAY HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/TV_Today_HD_2021-10-21_09:10:05.png"
    },
    {
      "id": 1238,
      "name": "Me Tv HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/METV_2020-11-01_03:11:03.jpg"
    },
    {
      "id": 288,
      "name": "BTV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/BTV_Business_2022-03-10_10:03:58.png"
    },
    {
      "id": 790,
      "name": "Kalika TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/KALIKA_HD_2021-05-03_11:05:10.png"
    },
    {
      "id": 1333,
      "name": "GNN TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/GNNHD_2022-12-09_04:12:18.png"
    },
    {
      "id": 799,
      "name": "Newa TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Newa_TV_2021-05-05_07:05:27.png"
    },
    {
      "id": 892,
      "name": "Namaste TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Namaste_TV_2018-12-02_04:12:39.jpg"
    },
    {
      "id": 1357,
      "name": "Him Shikhar TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Him_Shikhar_TV_2021-09-20_06:09:29.png"
    },
    {
      "id": 1408,
      "name": "Srokar TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sarokar_TV_2024-01-14_12:01:03.png"
    },
    {
      "id": 997,
      "name": "Gandaki Tv",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Gandaki_Tv_2019-02-27_04:02:19.png"
    },
    {
      "id": 1330,
      "name": "GALAXY TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Galaxy_4K_2021-06-01_02:06:48.jpg"
    },
    {
      "id": 1132,
      "name": "Lumbini Tv",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Lumbini_TV_HD_2021-05-03_11:05:56.png"
    },
    {
      "id": 1242,
      "name": "Capital Tv HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/_Capital_TV_HD_2022-03-10_10:03:23.png"
    },
    {
      "id": 1291,
      "name": "Dharma Tv Nep",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/DHARMA_Television_2020-12-27_06:12:40.png"
    },
    {
      "id": 1267,
      "name": "A1 TV1",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/A1_TV_2021-05-03_11:05:29.png"
    },
    {
      "id": 1270,
      "name": "National Gold Tv",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/National_Gold_2020-11-13_07:11:05.jpg"
    },
    {
      "id": 1273,
      "name": "Buddha Aawaz Tv",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/BUDDHA_AWAAZ_2020-11-20_03:11:29.jpg"
    },
    {
      "id": 534,
      "name": "Yes BC",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Yes_Tv__2018-01-11_10:01:07.png"
    },
    {
      "id": 1327,
      "name": "Aam Nepal TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Aam_Nepali_TV_HD_2021-05-04_02:05:28.png"
    },
    {
      "id": 537,
      "name": "Kastamandap TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Kastamandap_Telivision_2021-05-03_11:05:15.png"
    },
    {
      "id": 937,
      "name": "Lifeok Nepal",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Life_Ok_Nepal_2021-05-05_07:05:27.png"
    },
    {
      "id": 1012,
      "name": "RAPTITV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Rapti_Darpan_HD_2021-05-05_06:05:56.png"
    },
    {
      "id": 1315,
      "name": "Jana Sanchar",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Jansanchar_TV_HD_2021-03-08_05:03:37.png"
    },
    {
      "id": 1324,
      "name": "Ray TV HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/BIJAYKILLA_HD_2021-05-04_02:05:00.png"
    },
    {
      "id": 961,
      "name": "Bhadgaun",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Bhadgaun_Television_2021-05-05_07:05:40.png"
    },
    {
      "id": 898,
      "name": "Tv Today Jkpr",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Tv_Today_Janakpur_2021-05-05_07:05:37.png"
    },
    {
      "id": 1015,
      "name": "Ohoom TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Omkar_Television_2021-05-05_06:05:21.png"
    },
    {
      "id": 1036,
      "name": "Rajya TV HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Rajya_Television_2019-05-03_05:05:20.jpg"
    }
  ],
  "SPORTS": [
    {
      "id": 1318,
      "name": "KANTIPUR MAX",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Kantipur_Max_HD_2024-01-01_05:01:02.png"
    },
    {
      "id": 1114,
      "name": "ACTION SPORTS1 HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Action_Sports__HD_1_2021-09-13_10:09:21.jpg"
    },
    {
      "id": 299,
      "name": "TEN SPORTS 2",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sony_Ten_2_2023-05-29_04:05:18.png"
    },
    {
      "id": 350,
      "name": "NHK PREMIUM",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/NHK_World_HD_2021-05-05_08:05:07.png"
    },
    {
      "id": 336,
      "name": "TEN SPORTS3",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sony_Ten_3_2023-05-29_04:05:36.png"
    },
    {
      "id": 346,
      "name": " SONY TEN1 HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sony_Ten_1_HD_2022-11-06_09:11:20.png"
    },
    {
      "id": 365,
      "name": "STAR SPORTS1 HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Star_Sports_1_HD_2021-05-05_08:05:14.png"
    },
    {
      "id": 366,
      "name": "STAR SPORTS2 HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Star_Sports_2_HD_2021-05-05_08:05:28.png"
    },
    {
      "id": 739,
      "name": "STAR SPORTS3 HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sony_Ten_3_HD_2022-11-06_09:11:56.png"
    },
    {
      "id": 397,
      "name": "STAR SELECT2 HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Star_Sports_Select_2_HD_2021-05-05_08:05:44.png"
    },
    {
      "id": 398,
      "name": "STAR SELECT1 HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Star_Sports_Select_1_HD_2021-05-05_08:05:25.png"
    },
    {
      "id": 399,
      "name": "STAR SPORTS1 SD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Star_Sports_1_2021-05-05_08:05:08.png"
    },
    {
      "id": 412,
      "name": "SONY SPORTS 5 HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sony_Ten_5_HD_2022-11-06_09:11:31.png"
    },
    {
      "id": 552,
      "name": "DDSPORTS",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/DD_SPORTS_2021-05-05_08:05:53.png"
    },
    {
      "id": 1391,
      "name": "A SPORTS HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/A_Sports_HD_2023-02-05_04:02:30.png"
    }
  ],
  "BHAKTI BHAJAN": [
    {
      "id": 230,
      "name": "SANSKAR",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sanskar_TV_2021-05-05_08:05:57.png"
    },
    {
      "id": 481,
      "name": "Bodhi",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Bodhi_TV_HD_2021-05-03_11:05:28.png"
    },
    {
      "id": 490,
      "name": "Dibya Darsan",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Divya_Darshan_HD_2022-03-10_10:03:37.png"
    },
    {
      "id": 1157,
      "name": "Deep Tv",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/DEEP_TV_2020-01-29_11:01:20.jpg"
    },
    {
      "id": 239,
      "name": "BHAKTIDARSAN",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Bhakti_Darshan_2021-05-05_08:05:16.png"
    }
  ],
  "ENTERTAINMENT": [
    {
      "id": 243,
      "name": "COLORS HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Colors_HD_2022-03-10_10:03:51.png"
    },
    {
      "id": 249,
      "name": "MTV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/MTV_2020-11-02_12:11:00.png"
    },
    {
      "id": 253,
      "name": "SONYPAL",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sony_Pal_2021-05-05_08:05:16.png"
    },
    {
      "id": 279,
      "name": "SONY",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sony_Entertainment_2023-05-29_04:05:28.png"
    },
    {
      "id": 341,
      "name": "ZEETVHD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Zee_TV_HD_2025-06-10_12:06:59.png"
    },
    {
      "id": 343,
      "name": "ANDTV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/AND_TV_HD_2025-06-10_12:06:47.png"
    },
    {
      "id": 358,
      "name": "STAR PLUS HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Star_Plus_HD_2021-05-05_08:05:40.png"
    },
    {
      "id": 371,
      "name": "Star Bharat HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Star_Bharat_HD_2021-05-05_08:05:27.png"
    },
    {
      "id": 916,
      "name": "SONY SAB HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sony_Sab_HD_2022-11-06_09:11:49.png"
    },
    {
      "id": 425,
      "name": "SONY TV HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sony_Entertainment_HD_2022-11-06_09:11:07.png"
    },
    {
      "id": 468,
      "name": "ZEE TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/ZEE_Anmol_2020-10-24_08:10:24.png"
    },
    {
      "id": 673,
      "name": "RISHTEY",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/RISHTEY_2021-05-05_08:05:08.png"
    }
  ],
  "MOVIES": [
    {
      "id": 1361,
      "name": "BM TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/BM_HD_2021-12-17_10:12:50.png"
    },
    {
      "id": 1144,
      "name": "Tv Birgunj HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/_TV_BIRGUNJ_2020-01-03_03:01:53.jpg"
    },
    {
      "id": 280,
      "name": "SETMAX",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sony_Max_2022-11-06_09:11:13.png"
    },
    {
      "id": 342,
      "name": "ZEE CINEMA HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Zee_Cinema_HD_2025-06-10_12:06:38.png"
    },
    {
      "id": 344,
      "name": " & PICTURES HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/AND_Pictures_HD_2025-06-10_12:06:15.png"
    },
    {
      "id": 359,
      "name": "STAR GOLD HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Star_Gold_HD_2022-03-10_10:03:11.png"
    },
    {
      "id": 363,
      "name": "HBOSIGNATURE",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/HBO_Signature_HD_2021-05-05_08:05:16.png"
    },
    {
      "id": 373,
      "name": "MOVIES OK",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Star_Gold_2_2021-05-05_08:05:29.png"
    },
    {
      "id": 374,
      "name": "STAR GOLD SELECT",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Star_Gold_Select_2022-03-10_10:03:42.png"
    },
    {
      "id": 427,
      "name": "CINEMAXHD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/CINEMAX_HD_2021-05-05_08:05:41.png"
    },
    {
      "id": 464,
      "name": "STARMOVIES",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Star_Utsav_Movies_2021-05-05_08:05:55.png"
    },
    {
      "id": 483,
      "name": "STAR GOLD SELECT HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Star_Gold_Select_HD_2021-05-05_08:05:46.png"
    },
    {
      "id": 787,
      "name": "CINEPLEXHD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/COLORS_CINEPLEX_HD_2021-05-05_08:05:36.png"
    },
    {
      "id": 919,
      "name": "SONY MAX HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sony_Max_HD_2022-11-06_09:11:22.png"
    },
    {
      "id": 1009,
      "name": "Mithila TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Mithila_TV_HD_2021-05-05_06:05:36.png"
    },
    {
      "id": 1227,
      "name": "Disney Int HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Disney_International_HD_2021-05-03_11:05:15.png"
    },
    {
      "id": 1237,
      "name": "Red TV HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/RED_TV_2020-11-02_12:11:43.png"
    },
    {
      "id": 1253,
      "name": "STAR GOLD SD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Star_Gold_2020-10-29_01:10:12.png"
    },
    {
      "id": 1282,
      "name": "Sapta Ranghi TV HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Saptarangi_2021-05-03_11:05:15.png"
    },
    {
      "id": 1285,
      "name": "Star Movies HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Star_Movies_HD_2020-12-17_10:12:31.png"
    },
    {
      "id": 1288,
      "name": "Star Movies Select HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Star_Movies_Select_HD_2020-12-18_09:12:58.png"
    }
  ],
  "KIDS": [
    {
      "id": 362,
      "name": "HBOFAMILY",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/HBO_Family_HD_2021-05-05_08:05:36.png"
    },
    {
      "id": 246,
      "name": "NICKJR",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Nick_Jr_2021-05-05_08:05:12.png"
    },
    {
      "id": 380,
      "name": "POGO",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/380.png"
    },
    {
      "id": 394,
      "name": "Cartoon Network",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Cartoon_Network_2018-08-15_11:08:44.png"
    },
    {
      "id": 413,
      "name": "Super Hungama",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Super_Hungama_2022-03-07_06:03:52.jpg"
    },
    {
      "id": 414,
      "name": "DISNEY CHANNEL",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Disney_Channel_2021-05-05_08:05:54.png"
    },
    {
      "id": 415,
      "name": "DISNEY JR",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Disney_Junior_2021-05-05_08:05:31.png"
    },
    {
      "id": 418,
      "name": "SONYPIX",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sony_Pix_2022-11-06_09:11:54.png"
    },
    {
      "id": 940,
      "name": "NICK",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Nick_India_2021-05-05_07:05:02.png"
    },
    {
      "id": 1110,
      "name": "DISCOVERY KIDS",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Discovery_Kids_2019-11-06_08:11:28.png"
    }
  ],
  "SONGS": [
    {
      "id": 472,
      "name": "Chanel Nepal 4",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Channel_4_Nepal_2021-05-03_11:05:59.png"
    },
    {
      "id": 1399,
      "name": "Sangeet TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sanghu_TV_HD_2023-07-16_11:07:20.png"
    },
    {
      "id": 525,
      "name": "Indigenous tv",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Indegenous_Telivision_2021-05-03_11:05:41.png"
    },
    {
      "id": 465,
      "name": "SANGEET BHOJPURI",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Sangeet_Bhojpuri_2018-02-05_06:02:01.png"
    },
    {
      "id": 943,
      "name": "Fewa tv",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Fewa_Television_2019-01-21_06:01:52.jpg"
    },
    {
      "id": 1027,
      "name": "Channel Ace",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Channel_ACE_2021-05-03_11:05:57.png"
    },
    {
      "id": 1063,
      "name": "Universal TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Universal_TV_HD_2022-07-25_06:07:19.png"
    },
    {
      "id": 1117,
      "name": "BIRATTV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Birat_Television_2022-03-10_10:03:07.png"
    },
    {
      "id": 1222,
      "name": "Tharu TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/THARU_TELEVISION_2020-07-11_10:07:20.jpg"
    }
  ],
  "INTERNATIONAL NEWS": [
    {
      "id": 309,
      "name": "BUSINESS",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Zee_Business_2021-05-05_08:05:05.png"
    },
    {
      "id": 319,
      "name": "ZEENEWS",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Zee_News_2025-06-10_12:06:41.png"
    },
    {
      "id": 339,
      "name": "ARIRANG",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Arirang_HD_2021-05-05_08:05:19.png"
    },
    {
      "id": 351,
      "name": "ALJAZEERA",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Al_Jazeera_HD_2021-05-05_08:05:14.png"
    },
    {
      "id": 391,
      "name": "AAJTAK",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/391.png"
    },
    {
      "id": 393,
      "name": "News 18 India",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/News18_India_2021-05-30_07:05:00.jpg"
    },
    {
      "id": 558,
      "name": "DD NEWS",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/DD_NEWS_2018-02-05_06:02:56.png"
    },
    {
      "id": 395,
      "name": "CNN",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/CNN_2021-05-05_08:05:27.png"
    },
    {
      "id": 436,
      "name": "FRANCE24",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/France_24_English_HD_2021-05-05_08:05:09.png"
    },
    {
      "id": 479,
      "name": "BBC NEWS",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/BBC_News_2021-05-05_08:05:16.png"
    },
    {
      "id": 973,
      "name": "CGTN HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/CGTN_HD_2021-05-05_06:05:03.png"
    }
  ],
  "NATURE": [
    {
      "id": 381,
      "name": "Animal Planet",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Animal_Planet_HD_2022-03-10_10:03:16.png"
    },
    {
      "id": 387,
      "name": "DISCOVERY HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Discovery_HD_2022-03-10_10:03:42.png"
    },
    {
      "id": 396,
      "name": "National Geography HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Nat_Geo__HD_2021-05-05_08:05:05.png"
    },
    {
      "id": 580,
      "name": "NATGEO WILD HD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/NAT_GEO_WILD_HD_2021-05-05_08:05:28.png"
    },
    {
      "id": 931,
      "name": "TLC INDIA",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/TLC_India_2019-01-08_11:01:24.png"
    },
    {
      "id": 976,
      "name": "CGTN DOC",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/CGTN_Documentary_HD_2021-05-05_06:05:59.png"
    },
    {
      "id": 1405,
      "name": "Dis Science",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Discovery_Science_2023-08-02_01:08:38.jpg"
    }
  ],
  "OTHERS": [
    {
      "id": 251,
      "name": "HISTORYTV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/History_TV_18_2021-05-05_08:05:45.png"
    },
    {
      "id": 383,
      "name": "TLC",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/TLC_HD_World_2021-05-05_08:05:00.png"
    },
    {
      "id": 266,
      "name": "DWTV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/DW-TV_HD_2021-05-05_08:05:32.png"
    },
    {
      "id": 291,
      "name": "TV5MONDE",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/TV_5_Monde_2022-03-10_10:03:10.png"
    },
    {
      "id": 313,
      "name": "LOTUSMACAU",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Lotus_Macau_HD_2021-05-05_08:05:41.png"
    },
    {
      "id": 348,
      "name": "ZEECAFEHD",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Zee_Cafe_HD_2025-06-10_12:06:19.png"
    },
    {
      "id": 384,
      "name": "Turbo",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Discovery_Turbo_2021-05-05_08:05:35.png"
    },
    {
      "id": 435,
      "name": "FASHION",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Fashion_TV_Asia_HD_2021-05-05_08:05:19.png"
    },
    {
      "id": 655,
      "name": "ZING",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/ZING_2021-05-05_08:05:47.png"
    },
    {
      "id": 1066,
      "name": "Edu TV",
      "imgSrc": "https://nettv1.nettv.com.np//channel_logo/Education_TV_2022-03-10_10:03:01.png"
    }
  ]
};

const movieLinks = [
  {
    name: "Tantra (2024)",
    url: "http://ftp.ctgfun.com/Indian/Hindi%20Movies/Tantra%20%282024%29%20Hindi%20720p%20WEBRip%20x264%20ESub%20%5BDDN%5D/Tantra%20%282024%29%20Hindi%20720p%20WEBRip%20x264%20ESub%20%5BDDN%5D.mp4",
    logo: "https://sudesh.info.np/images/sudesh.jpeg",
  },
    {
    name: "fifa",
    url: "https://c822c659.wurl.com/manifest/f36d25e7e52f1ba8d7e56eb859c636563214f541/U2Ftc3VuZy1pbl9GSUZBUGx1c0VuZ2xpc2hfSExT/6fc23070-4f02-430f-92b7-1aa6d71e8c4d/2.m3u8",
   
  },
   {
    name: "The Buckingham Murders",
    url: "http://ftp.ctgfun.com/Indian/Hindi%20Movies/The%20Buckingham%20Murders%20%282024%29%20Hindi%20720p%20WEBRip%20x264%20ESub%20%5BDDN%5D/The%20Buckingham%20Murders%20%282024%29%20Hindi%20720p%20WEBRip%20x264%20ESub%20%5BDDN%5D.mp4",
    logo: "https://sudesh.info.np/images/sudesh.jpeg",
  },
 
];

// ✅ Route: Generate playlist dynamically with category grouping
app.get("/getplaylist", async (req, res) => {
  let playlist = "#EXTM3U\n";
  

  for (const [group, items] of Object.entries(categories)) {
    for (const ch of items) {
      playlist += `#EXTINF:-1 tvg-id="${ch.id}" tvg-logo="${ch.imgSrc || ""}" group-title="${group}", ${ch.name}\n`;
      playlist += `http://${req.headers.host}/channel/${ch.id}.m3u8\n\n`;
    }
  }

  for (const m of movieLinks) {
    playlist += `#EXTINF:-1 group-title="Movies" tvg-logo="${m.logo || ""}", ${m.name}\n`;
    playlist += `${m.url}\n\n`;
  }
  

 
    try {
    const sportsM3u = await fetch(
      "https://iptv-org.github.io/iptv/categories/sports.m3u"
    ).then(r => r.text());

    playlist += "\n# IPTV-ORG SPORTS\n";
    playlist += sportsM3u.replace("#EXTM3U", "");
  } catch (err) {
    console.error("Sports playlist error:", err);
  }

  res.setHeader("Content-Type", "audio/x-mpegurl");
  res.send(playlist);
  
});

// ✅ Route: Fetch signed link and redirect
app.get("/channel/:id.m3u8", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(
      `https://techjail.net/aamshd/huritv9/getlink.php?vv=1&CHID=${id}`
    );
    const realUrl = (await response.text()).trim();

    if (!realUrl.startsWith("http")) throw new Error("Invalid stream URL");
    res.redirect(realUrl);
  } catch (error) {
    console.error("Error fetching channel:", error);
    res.status(500).send("#EXTM3U\n#EXTINF:-1,Error Loading Channel\n");
  }
});

// 🚀 Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ IPTV playlist running on port ${PORT}`));

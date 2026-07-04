const express = require("express");
const app = express();

// ✅ All channels organized by category
const categories = {
  "NEPALI": [
  {
    "id": "1413",
    "name": "Kantipur Max 2 HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Kantipur_Max_HD_2024-01-01_05:01:02.png"
  },
  {
    "id": "516",
    "name": "Kantipur HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Kantipur_HD_2021-05-03_10:05:22.png"
  },
  {
    "id": "836",
    "name": "AP1 HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/AP1_HD_2021-05-03_10:05:59.png"
  },
  {
    "id": "238",
    "name": "Himalaya TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Himalaya_TV_HD_2021-05-03_10:05:55.png"
  },
  {
    "id": "225",
    "name": "Nepal TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Nepal_TV_HD_2021-05-03_11:05:44.png"
  },
  {
    "id": "265",
    "name": "NTV News HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/NTV_News_HD_2021-05-03_11:05:04.png"
  },
  {
    "id": "262",
    "name": "NTV Plus HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/NTV_Plus_HD_2021-05-03_11:05:27.png"
  },
  {
    "id": "778",
    "name": "Prime Times HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Prime_Times_2020-10-02_06:10:33.png"
  },
  {
    "id": "1312",
    "name": "Makalu TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Makalu_TV_HD_2021-01-31_07:01:58.jpg"
  },
  {
    "id": "429",
    "name": "Janata HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Janata_HD_2021-05-03_11:05:25.png"
  },
  {
    "id": "235",
    "name": "Mountain TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Mountain_TV_HD_2022-03-10_10:03:26.png"
  },
  {
    "id": "1330",
    "name": "Galaxy 4K",
    "img": "https://nettv1.nettv.com.np//channel_logo/Galaxy_4K_2021-06-01_02:06:48.jpg"
  },
  {
    "id": "1318",
    "name": "Kantipur Max HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Kantipur_Max_HD_2024-01-01_05:01:02.png"
  },
  {
    "id": "1412",
    "name": "NPL Live",
    "img": "https://nettv1.nettv.com.np//channel_logo/Kantipur_Max_HD_2024-01-01_05:01:02.png"
  },
  {
    "id": "1238",
    "name": "METV | HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/METV_2020-11-01_03:11:03.jpg"
  },
  {
    "id": "1162",
    "name": "NTV Itahari HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/NTV_Itahari_HD_2020-08-23_08:08:37.png"
  },
  {
    "id": "578",
    "name": "NTV Kohalpur HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/NTV_Kohalpur_HD_2021-05-03_11:05:21.png"
  },
  {
    "id": "1045",
    "name": "Yoho TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Yoho_TV_HD_2022-03-10_10:03:53.png"
  },
  {
    "id": "422",
    "name": "Business Plus HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Business_Plus_HD_2022-03-10_10:03:20.png"
  },
  {
    "id": "1297",
    "name": "Global TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Global_TV_2022-03-10_10:03:47.png"
  },
  {
    "id": "237",
    "name": "News 24",
    "img": "https://nettv1.nettv.com.np//channel_logo/News_24_2021-05-03_11:05:54.png"
  },
  {
    "id": "587",
    "name": "Image HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Image_Channel_2021-09-13_10:09:42.jpg"
  },
  {
    "id": "226",
    "name": "Sagarmatha TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sagarmatha_TV_2021-05-03_11:05:18.png"
  },
  {
    "id": "590",
    "name": "ABC NEWS",
    "img": "https://nettv1.nettv.com.np//channel_logo/ABC_NEWS_2021-05-03_11:05:24.png"
  },
  {
    "id": "224",
    "name": "Avenues TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Avenues_TV_2021-05-03_11:05:44.png"
  },
  {
    "id": "454",
    "name": "TV Today HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/TV_Today_HD_2021-10-21_09:10:05.png"
  },
  {
    "id": "288",
    "name": "BTV Business",
    "img": "https://nettv1.nettv.com.np//channel_logo/BTV_Business_2022-03-10_10:03:58.png"
  },
  {
    "id": "263",
    "name": "Nari HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Nari_HD_2023-07-07_10:07:58.jpeg"
  },
  {
    "id": "1357",
    "name": "Him Shikhar TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Him_Shikhar_TV_2021-09-20_06:09:29.png"
  },
  {
    "id": "1396",
    "name": "Space 4K",
    "img": "https://nettv1.nettv.com.np//channel_logo/Space_4K_2023-04-16_09:04:03.png"
  },
  {
    "id": "1389",
    "name": "Himalaya Premium HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Himalaya_Premium_HD_2022-11-03_05:11:49.jpg"
  },
  {
    "id": "1361",
    "name": "BM HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/BM_HD_2021-12-17_10:12:50.png"
  },
  {
    "id": "543",
    "name": "HEALTH TELEVISION",
    "img": "https://nettv1.nettv.com.np//channel_logo/Health_Television_2018-01-19_05:01:58.png"
  },
  {
    "id": "1206",
    "name": "विद्यालय शिक्षा",
    "img": "https://nettv1.nettv.com.np//channel_logo/School_Education_HD_2020-06-14_03:06:33.jpg"
  },
  {
    "id": "481",
    "name": "Bodhi TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Bodhi_TV_HD_2021-05-03_11:05:28.png"
  },
  {
    "id": "472",
    "name": "Channel 4 Nepal",
    "img": "https://nettv1.nettv.com.np//channel_logo/Channel_4_Nepal_2021-05-03_11:05:59.png"
  },
  {
    "id": "453",
    "name": "Krishi TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Krishi_TV_HD_2021-05-03_11:05:27.png"
  },
  {
    "id": "537",
    "name": "Kastamandap Telivision",
    "img": "https://nettv1.nettv.com.np//channel_logo/Kastamandap_Telivision_2021-05-03_11:05:15.png"
  },
  {
    "id": "525",
    "name": "Indegenous Telivision",
    "img": "https://nettv1.nettv.com.np//channel_logo/Indegenous_Telivision_2021-05-03_11:05:41.png"
  },
  {
    "id": "790",
    "name": "Kalika HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/KALIKA_HD_2021-05-03_11:05:10.png"
  },
  {
    "id": "584",
    "name": "Nice Television HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/NICE_TELEVISION_HD_2021-05-05_08:05:06.png"
  },
  {
    "id": "937",
    "name": "Life Ok Nepal",
    "img": "https://nettv1.nettv.com.np//channel_logo/Life_Ok_Nepal_2021-05-05_07:05:27.png"
  },
  {
    "id": "485",
    "name": "Mega TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Mega_TV_2022-03-10_10:03:02.png"
  },
  {
    "id": "1063",
    "name": "Universal TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Universal_TV_HD_2022-07-25_06:07:19.png"
  },
  {
    "id": "799",
    "name": "Newa TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Newa_TV_2021-05-05_07:05:27.png"
  },
  {
    "id": "961",
    "name": "Bhadgaun Television",
    "img": "https://nettv1.nettv.com.np//channel_logo/Bhadgaun_Television_2021-05-05_07:05:40.png"
  },
  {
    "id": "428",
    "name": "Nepal Mandal",
    "img": "https://nettv1.nettv.com.np//channel_logo/Nepal_Mandal_2021-05-05_08:05:15.png"
  },
  {
    "id": "1087",
    "name": "Everest Tv HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Everest_Tv_HD_2021-01-21_05:01:23.png"
  },
  {
    "id": "1009",
    "name": "Mithila TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Mithila_TV_HD_2021-05-05_06:05:36.png"
  },
  {
    "id": "769",
    "name": "Deuti HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Deuti_HD_2018-08-07_06:08:10.jpg"
  },
  {
    "id": "1105",
    "name": "Kisan TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Kisan_TV_2019-10-15_01:10:38.png"
  },
  {
    "id": "949",
    "name": "Paryawaran TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Paryawaran_TV_2022-03-10_10:03:24.png"
  },
  {
    "id": "1036",
    "name": "Rajya Television",
    "img": "https://nettv1.nettv.com.np//channel_logo/Rajya_Television_2019-05-03_05:05:20.jpg"
  },
  {
    "id": "1196",
    "name": "Bagmati TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Bagmati_TV_HD_2021-07-09_10:07:56.png"
  },
  {
    "id": "1090",
    "name": "News Nepal",
    "img": "https://nettv1.nettv.com.np//channel_logo/News_Nepal_2021-05-03_11:05:04.png"
  },
  {
    "id": "1245",
    "name": "Araniko HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Araniko_HD_2021-05-03_11:05:55.png"
  },
  {
    "id": "1066",
    "name": "Education TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Education_TV_2022-03-10_10:03:01.png"
  },
  {
    "id": "1012",
    "name": "Rapti Darpan HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Rapti_Darpan_HD_2021-05-05_06:05:56.png"
  },
  {
    "id": "1242",
    "name": "Capital TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/_Capital_TV_HD_2022-03-10_10:03:23.png"
  },
  {
    "id": "1279",
    "name": "Mukundasen HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/MUKUNDASEN_HD_2020-12-03_06:12:28.png"
  },
  {
    "id": "1270",
    "name": "National Gold",
    "img": "https://nettv1.nettv.com.np//channel_logo/National_Gold_2020-11-13_07:11:05.jpg"
  },
  {
    "id": "1315",
    "name": "Jansanchar TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Jansanchar_TV_HD_2021-03-08_05:03:37.png"
  },
  {
    "id": "1027",
    "name": "Channel ACE",
    "img": "https://nettv1.nettv.com.np//channel_logo/Channel_ACE_2021-05-03_11:05:57.png"
  },
  {
    "id": "943",
    "name": "Fewa TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Fewa_Television_2019-01-21_06:01:52.jpg"
  },
  {
    "id": "775",
    "name": "Arena TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/ARENA_TV_2021-05-05_08:05:06.png"
  },
  {
    "id": "1117",
    "name": "Birat Television",
    "img": "https://nettv1.nettv.com.np//channel_logo/Birat_Television_2022-03-10_10:03:07.png"
  },
  {
    "id": "478",
    "name": "Appan TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Appan_TV_2021-05-05_08:05:33.png"
  },
  {
    "id": "1107",
    "name": "My TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/My_TV_2019-10-22_03:10:19.png"
  },
  {
    "id": "1144",
    "name": "TV Birgunj",
    "img": "https://nettv1.nettv.com.np//channel_logo/_TV_BIRGUNJ_2020-01-03_03:01:53.jpg"
  },
  {
    "id": "850",
    "name": "Janakpur TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Janakpur_TV_2022-03-10_10:03:39.png"
  },
  {
    "id": "898",
    "name": "Tv Today Janakpur",
    "img": "https://nettv1.nettv.com.np//channel_logo/Tv_Today_Janakpur_2021-05-05_07:05:37.png"
  },
  {
    "id": "910",
    "name": "Zee Nepal TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Zee_Nepal_TV_2021-05-05_07:05:08.png"
  },
  {
    "id": "1222",
    "name": "Tharu Television",
    "img": "https://nettv1.nettv.com.np//channel_logo/THARU_TELEVISION_2020-07-11_10:07:20.jpg"
  },
  {
    "id": "460",
    "name": "Times TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Times_TV_HD_2021-05-05_08:05:45.png"
  },
  {
    "id": "1212",
    "name": "TEAM TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/TEAM_TV_2020-07-02_12:07:04.jpg"
  },
  {
    "id": "1211",
    "name": "Sajha TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/SAJHA_TV_2020-06-17_11:06:16.jpg"
  },
  {
    "id": "1048",
    "name": "Moonlight TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/MOONLIGHT_TV_2020-06-11_12:06:16.jpg"
  },
  {
    "id": "892",
    "name": "Namaste TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Namaste_TV_2018-12-02_04:12:39.jpg"
  },
  {
    "id": "859",
    "name": "Buddha  TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Buddha__TV_2018-11-13_04:11:26.jpg"
  },
  {
    "id": "985",
    "name": "Bhairahawa TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Bhairahawa_TV_2021-05-05_06:05:23.png"
  },
  {
    "id": "1054",
    "name": "TV 1 HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/TV_1_HD_2022-03-10_10:03:03.png"
  },
  {
    "id": "1132",
    "name": "Lumbini TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Lumbini_TV_HD_2021-05-03_11:05:56.png"
  },
  {
    "id": "1273",
    "name": "Buddha Awaaz",
    "img": "https://nettv1.nettv.com.np//channel_logo/BUDDHA_AWAAZ_2020-11-20_03:11:29.jpg"
  },
  {
    "id": "1123",
    "name": "Samaya HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Samaya_HD_2019-12-18_12:12:32.png"
  },
  {
    "id": "1137",
    "name": "Suryodaya Television",
    "img": "https://nettv1.nettv.com.np//channel_logo/Suryodaya_2019-12-28_02:12:31.jpg"
  },
  {
    "id": "1327",
    "name": "Aam Nepali TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Aam_Nepali_TV_HD_2021-05-04_02:05:28.png"
  },
  {
    "id": "1333",
    "name": "GNNHD",
    "img": "https://nettv1.nettv.com.np//channel_logo/GNNHD_2022-12-09_04:12:18.png"
  },
  {
    "id": "1191",
    "name": "AKASH TELEVISION",
    "img": "https://nettv1.nettv.com.np//channel_logo/AKASH_TELEVISION_2021-05-03_11:05:55.png"
  },
  {
    "id": "1267",
    "name": "A1 TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/A1_TV_2021-05-03_11:05:29.png"
  },
  {
    "id": "1229",
    "name": "Subhayatra TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/KARUWA_TV_2021-01-26_04:01:23.jpg"
  },
  {
    "id": "1282",
    "name": "Saptarangi",
    "img": "https://nettv1.nettv.com.np//channel_logo/Saptarangi_2021-05-03_11:05:15.png"
  },
  {
    "id": "1237",
    "name": "Red TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/RED_TV_2020-11-02_12:11:43.png"
  },
  {
    "id": "534",
    "name": "YES TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Yes_Tv__2018-01-11_10:01:07.png"
  },
  {
    "id": "1202",
    "name": "Gorkha TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Gorkha_TV_HD_2020-11-02_03:11:01.jpg"
  },
  {
    "id": "1262",
    "name": "Indreni TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/INDRENI_TV_2020-11-02_12:11:19.jpg"
  },
  {
    "id": "1265",
    "name": "Prithivi TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Prithivi_TV_2020-11-04_11:11:14.png"
  },
  {
    "id": "1309",
    "name": "M Star",
    "img": "https://nettv1.nettv.com.np//channel_logo/M_Star_2021-01-26_09:01:52.jpg"
  },
  {
    "id": "1324",
    "name": "Bijaykilla HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/BIJAYKILLA_HD_2021-05-04_02:05:00.png"
  },
  {
    "id": "1342",
    "name": "Siddhababa",
    "img": "https://nettv1.nettv.com.np//channel_logo/Siddhababa_2021-07-09_10:07:00.png"
  },
  {
    "id": "1345",
    "name": "Janaki TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Janaki_TV_HD_2021-07-09_10:07:36.png"
  },
  {
    "id": "1348",
    "name": "Tilotamma HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Tilotamma_HD_2023-08-23_11:08:46.png"
  },
  {
    "id": "1364",
    "name": "Devdaha TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Devdaha_TV_2021-12-17_10:12:02.png"
  },
  {
    "id": "1351",
    "name": "City One HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/City_One_HD_2021-09-20_06:09:13.png"
  },
  {
    "id": "1354",
    "name": "Samata TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Samata_TV_2021-09-20_06:09:29.png"
  },
  {
    "id": "1367",
    "name": "Pokhara TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Pokhara_TV_HD_2022-01-12_11:01:08.png"
  },
  {
    "id": "1384",
    "name": "Earth News HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Earth_News_HD_2022-08-18_10:08:08.png"
  },
  {
    "id": "1394",
    "name": "Satya Tathya TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Satya_Tathya_TV_2023-03-30_05:03:14.png"
  },
  {
    "id": "1408",
    "name": "Sarokar TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sarokar_TV_2024-01-14_12:01:03.png"
  },
  {
    "id": "1399",
    "name": "Sanghu TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sanghu_TV_HD_2023-07-16_11:07:20.png"
  },
  {
    "id": "351",
    "name": "Al Jazeera HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Al_Jazeera_HD_2021-05-05_08:05:14.png"
  },
  {
    "id": "496",
    "name": "TRT World HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/TRT_WORLD_HD_2021-05-05_08:05:19.png"
  },
  {
    "id": "436",
    "name": "France 24 English HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/France_24_English_HD_2021-05-05_08:05:09.png"
  },
  {
    "id": "386",
    "name": "News Asia HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/News_Asia_HD_2021-05-05_08:05:54.png"
  },
  {
    "id": "461",
    "name": "RT English HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/RT_English_HD_2021-05-05_08:05:21.png"
  },
  {
    "id": "907",
    "name": "Times Now HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Times_Now_HD_2021-05-05_07:05:38.png"
  },
  {
    "id": "973",
    "name": "CGTN HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/CGTN_HD_2021-05-05_06:05:03.png"
  },
  {
    "id": "479",
    "name": "BBC News",
    "img": "https://nettv1.nettv.com.np//channel_logo/BBC_News_2021-05-05_08:05:16.png"
  },
  {
    "id": "395",
    "name": "CNN",
    "img": "https://nettv1.nettv.com.np//channel_logo/CNN_2021-05-05_08:05:27.png"
  },
  {
    "id": "474",
    "name": "Euro News",
    "img": "https://nettv1.nettv.com.np//channel_logo/Euro_News_2022-03-10_10:03:26.png"
  },
  {
    "id": "676",
    "name": "REPUBLIC TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Republic_TV_2018-05-09_02:05:28.jpg"
  },
  {
    "id": "389",
    "name": "News X",
    "img": "https://nettv1.nettv.com.np//channel_logo/News_X_HD_2018-08-15_03:08:10.png"
  },
  {
    "id": "982",
    "name": "PTV WORLD",
    "img": "https://nettv1.nettv.com.np//channel_logo/PTV_WORLD_2019-02-17_06:02:52.png"
  },
  {
    "id": "988",
    "name": "NDTV 24x7",
    "img": "https://nettv1.nettv.com.np//channel_logo/NDTV_24x7_2019-02-27_05:02:16.png"
  },
  {
    "id": "391",
    "name": "Aajtak",
    "img": "https://nettv1.nettv.com.np//channel_logo/391.png"
  },
  {
    "id": "218",
    "name": "ABP News",
    "img": "https://nettv1.nettv.com.np//channel_logo/ABP_News_2021-05-04_02:05:40.png"
  },
  {
    "id": "393",
    "name": "News18 India",
    "img": "https://nettv1.nettv.com.np//channel_logo/News18_India_2021-05-30_07:05:00.jpg"
  },
  {
    "id": "319",
    "name": "Zee News",
    "img": "https://nettv1.nettv.com.np//channel_logo/Zee_News_2025-06-10_12:06:41.png"
  },
  {
    "id": "388",
    "name": "India News",
    "img": "https://nettv1.nettv.com.np//channel_logo/388.png"
  },
  {
    "id": "392",
    "name": "India TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/392.png"
  },
  {
    "id": "558",
    "name": "DD NEWS HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/DD_NEWS_2018-02-05_06:02:56.png"
  },
  {
    "id": "568",
    "name": "ARY NEWS",
    "img": "https://nettv1.nettv.com.np//channel_logo/ARY_News_2018-01-31_12:01:29.jpg"
  },
  {
    "id": "446",
    "name": "Sahara Shamay",
    "img": "https://nettv1.nettv.com.np//channel_logo/446.gif"
  },
  {
    "id": "309",
    "name": "Zee Business",
    "img": "https://nettv1.nettv.com.np//channel_logo/Zee_Business_2021-05-05_08:05:05.png"
  },
  {
    "id": "556",
    "name": "DD KISHAN",
    "img": "https://nettv1.nettv.com.np//channel_logo/DD_KISHAN_2018-01-25_04:01:53.jpg"
  },
  {
    "id": "991",
    "name": "NDTV INDIA",
    "img": "https://nettv1.nettv.com.np//channel_logo/NDTV_INDIA_2019-02-27_05:02:31.png"
  },
  {
    "id": "994",
    "name": "NDTV Profit",
    "img": "https://nettv1.nettv.com.np//channel_logo/NDTV_Profit_2019-02-27_05:02:49.png"
  },
  {
    "id": "425",
    "name": "Sony Entertainment HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Entertainment_HD_2022-11-06_09:11:07.png"
  },
  {
    "id": "243",
    "name": "Colors HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Colors_HD_2022-03-10_10:03:51.png"
  },
  {
    "id": "341",
    "name": "Zee TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Zee_TV_HD_2025-06-10_12:06:59.png"
  },
  {
    "id": "358",
    "name": "Star Plus HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Plus_HD_2021-05-05_08:05:40.png"
  },
  {
    "id": "343",
    "name": "AND TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/AND_TV_HD_2025-06-10_12:06:47.png"
  },
  {
    "id": "371",
    "name": "Star Bharat HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Bharat_HD_2021-05-05_08:05:27.png"
  },
  {
    "id": "916",
    "name": "Sony Sab HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Sab_HD_2022-11-06_09:11:49.png"
  },
  {
    "id": "370",
    "name": "Star World HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_World_HD_2018-08-15_03:08:59.png"
  },
  {
    "id": "348",
    "name": "Zee Cafe HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Zee_Cafe_HD_2025-06-10_12:06:19.png"
  },
  {
    "id": "784",
    "name": "COLORS INFINITY HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/COLORS_INFINITY_HD_2019-01-29_05:01:26.png"
  },
  {
    "id": "904",
    "name": "Star Life HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Fox_Life_HD_2022-03-10_10:03:23.png"
  },
  {
    "id": "1227",
    "name": "Disney International HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Disney_International_HD_2021-05-03_11:05:15.png"
  },
  {
    "id": "1259",
    "name": "Star Plus",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Plus_2020-10-29_01:10:08.png"
  },
  {
    "id": "1303",
    "name": "Star Bharat",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Bharat_2021-01-20_07:01:58.jpg"
  },
  {
    "id": "349",
    "name": "Comedy Central",
    "img": "https://nettv1.nettv.com.np//channel_logo/Comedy_Central_2022-03-10_10:03:49.png"
  },
  {
    "id": "302",
    "name": "AXN",
    "img": "https://nettv1.nettv.com.np//channel_logo/302.png"
  },
  {
    "id": "1256",
    "name": "Colors Infinity",
    "img": "https://nettv1.nettv.com.np//channel_logo/Colors_Infinity__2020-10-29_01:10:38.png"
  },
  {
    "id": "1250",
    "name": "Colors SD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Colors_SD_2020-10-25_08:10:28.png"
  },
  {
    "id": "279",
    "name": "Sony Entertainment",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Entertainment_2023-05-29_04:05:28.png"
  },
  {
    "id": "406",
    "name": "Sony Sab",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Sab_2021-05-05_08:05:26.png"
  },
  {
    "id": "253",
    "name": "Sony Pal",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Pal_2021-05-05_08:05:16.png"
  },
  {
    "id": "468",
    "name": "ZEE Anmol",
    "img": "https://nettv1.nettv.com.np//channel_logo/ZEE_Anmol_2020-10-24_08:10:24.png"
  },
  {
    "id": "332",
    "name": "Star Utsav",
    "img": "https://nettv1.nettv.com.np//channel_logo/332.png"
  },
  {
    "id": "554",
    "name": "DD NATIONAL HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/DD_NATIONAL_2018-01-25_04:01:48.jpg"
  },
  {
    "id": "1167",
    "name": "DD Bharati",
    "img": "https://nettv1.nettv.com.np//channel_logo/DD_Bharati_2020-03-30_11:03:16.jpg"
  },
  {
    "id": "724",
    "name": "DANGAL",
    "img": "https://nettv1.nettv.com.np//channel_logo/Dangal_2018-05-27_04:05:38.png"
  },
  {
    "id": "444",
    "name": "Sahara One",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sahara_One_2018-08-14_04:08:44.png"
  },
  {
    "id": "499",
    "name": "Hum Sitaray",
    "img": "https://nettv1.nettv.com.np//channel_logo/499.jpg"
  },
  {
    "id": "574",
    "name": "ARY FAMILY",
    "img": "https://nettv1.nettv.com.np//channel_logo/ARY_Family_2018-01-31_12:01:02.jpg"
  },
  {
    "id": "570",
    "name": "ARY ZINDAGI",
    "img": "https://nettv1.nettv.com.np//channel_logo/ARY_Zindagi_2018-01-31_12:01:56.jpg"
  },
  {
    "id": "572",
    "name": "ARY DIGITAL",
    "img": "https://nettv1.nettv.com.np//channel_logo/ARY_Digital_2018-01-31_12:01:18.jpg"
  },
  {
    "id": "673",
    "name": "Colors Rishtey",
    "img": "https://nettv1.nettv.com.np//channel_logo/RISHTEY_2021-05-05_08:05:08.png"
  },
  {
    "id": "375",
    "name": "Anjan TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/375.png"
  },
  {
    "id": "964",
    "name": "Star Jalsha",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Jalsha_2019-02-11_11:02:57.png"
  },
  {
    "id": "967",
    "name": "PTC Punjabi",
    "img": "https://nettv1.nettv.com.np//channel_logo/PTC_Punjabi_2019-02-07_12:02:16.png"
  },
  {
    "id": "1000",
    "name": "NDTV Good Times",
    "img": "https://nettv1.nettv.com.np//channel_logo/NDTV_Good_Times_2019-02-27_05:02:45.png"
  },
  {
    "id": "426",
    "name": "HBO HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/HBO_HD_2021-05-05_08:05:02.png"
  },
  {
    "id": "363",
    "name": "HBO Signature HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/HBO_Signature_HD_2021-05-05_08:05:16.png"
  },
  {
    "id": "362",
    "name": "HBO Family HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/HBO_Family_HD_2021-05-05_08:05:36.png"
  },
  {
    "id": "361",
    "name": "HBO Hits HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/HBO_Hits_HD_2021-05-05_08:05:51.png"
  },
  {
    "id": "427",
    "name": "Cinemax HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/CINEMAX_HD_2021-05-05_08:05:41.png"
  },
  {
    "id": "1164",
    "name": "CinemaWorld",
    "img": "https://nettv1.nettv.com.np//channel_logo/CinemaWorld_2020-03-11_04:03:06.jpg"
  },
  {
    "id": "1285",
    "name": "Star Movies HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Movies_HD_2020-12-17_10:12:31.png"
  },
  {
    "id": "1288",
    "name": "Star Movies Select HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Movies_Select_HD_2020-12-18_09:12:58.png"
  },
  {
    "id": "919",
    "name": "Sony Max HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Max_HD_2022-11-06_09:11:22.png"
  },
  {
    "id": "787",
    "name": "Color Cineplex HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/COLORS_CINEPLEX_HD_2021-05-05_08:05:36.png"
  },
  {
    "id": "344",
    "name": "AND Pictures HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/AND_Pictures_HD_2025-06-10_12:06:15.png"
  },
  {
    "id": "359",
    "name": "Star Gold HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Gold_HD_2022-03-10_10:03:11.png"
  },
  {
    "id": "342",
    "name": "Zee Cinema HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Zee_Cinema_HD_2025-06-10_12:06:38.png"
  },
  {
    "id": "483",
    "name": "Star Gold Select HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Gold_Select_HD_2021-05-05_08:05:46.png"
  },
  {
    "id": "1306",
    "name": "Star Movies",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Movies_2021-01-20_07:01:12.jpg"
  },
  {
    "id": "1253",
    "name": "Star Gold",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Gold_2020-10-29_01:10:12.png"
  },
  {
    "id": "1129",
    "name": "B4U Kadak",
    "img": "https://nettv1.nettv.com.np//channel_logo/B4U_Kadak_2019-12-18_04:12:12.png"
  },
  {
    "id": "1217",
    "name": "B4U Movies APAC",
    "img": "https://nettv1.nettv.com.np//channel_logo/B4U_Movies_APAC_2020-07-05_02:07:10.png"
  },
  {
    "id": "331",
    "name": "AND Pictures",
    "img": "https://nettv1.nettv.com.np//channel_logo/AND_Pictures_2025-06-10_12:06:46.png"
  },
  {
    "id": "280",
    "name": "Sony Max",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Max_2022-11-06_09:11:13.png"
  },
  {
    "id": "308",
    "name": "Zee Bollywood",
    "img": "https://nettv1.nettv.com.np//channel_logo/Zee_Bollywood_2025-06-10_12:06:45.png"
  },
  {
    "id": "373",
    "name": "Star Gold 2",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Gold_2_2021-05-05_08:05:29.png"
  },
  {
    "id": "317",
    "name": "Sony Max 2",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Max_2_2022-11-06_09:11:55.png"
  },
  {
    "id": "374",
    "name": "Star Gold Select",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Gold_Select_2022-03-10_10:03:42.png"
  },
  {
    "id": "303",
    "name": "Zee Action",
    "img": "https://nettv1.nettv.com.np//channel_logo/Zee_Action_2025-06-10_12:06:22.png"
  },
  {
    "id": "321",
    "name": "B4U Movies",
    "img": "https://nettv1.nettv.com.np//channel_logo/321.png"
  },
  {
    "id": "418",
    "name": "Sony Pix",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Pix_2022-11-06_09:11:54.png"
  },
  {
    "id": "379",
    "name": "WB",
    "img": "https://nettv1.nettv.com.np//channel_logo/379.png"
  },
  {
    "id": "313",
    "name": "Lotus Macau HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Lotus_Macau_HD_2021-05-05_08:05:41.png"
  },
  {
    "id": "455",
    "name": "Cinema TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Cinema_TV_2019-10-24_10:10:22.png"
  },
  {
    "id": "616",
    "name": "FILMY",
    "img": "https://nettv1.nettv.com.np//channel_logo/Filmy_2018-03-05_11:03:56.png"
  },
  {
    "id": "466",
    "name": "Bhojpuri Cinema",
    "img": "https://nettv1.nettv.com.np//channel_logo/466.png"
  },
  {
    "id": "439",
    "name": "Dabangg",
    "img": "https://nettv1.nettv.com.np//channel_logo/439.png"
  },
  {
    "id": "462",
    "name": "Manoranjan TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Manoranjan_TV_2018-02-05_06:02:31.png"
  },
  {
    "id": "463",
    "name": "Enterr10 Movies",
    "img": "https://nettv1.nettv.com.np//channel_logo/Enterr10_Movies_2020-10-02_05:10:58.png"
  },
  {
    "id": "464",
    "name": "Star Utsav Movies",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Utsav_Movies_2021-05-05_08:05:55.png"
  },
  {
    "id": "416",
    "name": "UTV Movies",
    "img": "https://nettv1.nettv.com.np//channel_logo/416.png"
  },
  {
    "id": "432",
    "name": "HOUSE FULL MOVIES",
    "img": "https://nettv1.nettv.com.np//channel_logo/432.png"
  },
  {
    "id": "952",
    "name": "Manoranjan Movies",
    "img": "https://nettv1.nettv.com.np//channel_logo/Manoranjan_Movies_2019-02-03_01:02:31.png"
  },
  {
    "id": "316",
    "name": "Zee Classic",
    "img": "https://nettv1.nettv.com.np//channel_logo/Zee_Classic_2025-06-10_12:06:01.png"
  },
  {
    "id": "1411",
    "name": "Sports18",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sports18_2024-08-18_11:08:10.png"
  },
  {
    "id": "346",
    "name": "Sony Sports Ten 1 HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Ten_1_HD_2022-11-06_09:11:20.png"
  },
  {
    "id": "661",
    "name": "Sony Sports Ten 2 HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Ten_2_HD_2022-11-06_09:11:37.png"
  },
  {
    "id": "739",
    "name": "Sony Sports Ten 3 HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Ten_3_HD_2022-11-06_09:11:56.png"
  },
  {
    "id": "412",
    "name": "Sony Sports Ten 5 HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Ten_5_HD_2022-11-06_09:11:31.png"
  },
  {
    "id": "694",
    "name": "SONY ESPN HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/SONY_ESPN_HD_2018-08-15_03:08:06.png"
  },
  {
    "id": "365",
    "name": "Star Sports 1 HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Sports_1_HD_2021-05-05_08:05:14.png"
  },
  {
    "id": "366",
    "name": "Star Sports 2 HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Sports_2_HD_2021-05-05_08:05:28.png"
  },
  {
    "id": "367",
    "name": "Star Sports 1 HD Hindi",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Sports_1_HD_Hindi_2022-03-10_10:03:52.png"
  },
  {
    "id": "398",
    "name": "Star Sports Select 1 HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Sports_Select_1_HD_2021-05-05_08:05:25.png"
  },
  {
    "id": "397",
    "name": "Star Sports Select 2 HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Sports_Select_2_HD_2021-05-05_08:05:44.png"
  },
  {
    "id": "502",
    "name": "Star Sports Select 1 sd",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Sports_Select_1_sd_2021-05-05_08:05:39.png"
  },
  {
    "id": "469",
    "name": "Star Sports Select 2",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Sports_Select_2__2018-09-23_01:09:15.jpg"
  },
  {
    "id": "576",
    "name": "Setanta HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/SETANTA_SPORTS_ASIA_HD_2018-08-15_03:08:43.png"
  },
  {
    "id": "622",
    "name": "1 Sports",
    "img": "https://nettv1.nettv.com.np//channel_logo/1_Sports_2020-07-26_01:07:38.png"
  },
  {
    "id": "298",
    "name": "Sony Sports Ten 1",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Ten_1_2023-05-29_04:05:58.png"
  },
  {
    "id": "299",
    "name": "Sony Sports Ten 2",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Ten_2_2023-05-29_04:05:18.png"
  },
  {
    "id": "336",
    "name": "Sony Sports Ten 3",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Ten_3_2023-05-29_04:05:36.png"
  },
  {
    "id": "242",
    "name": "Sony Sports Ten 5",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_Ten_5__2023-05-29_04:05:53.png"
  },
  {
    "id": "286",
    "name": "Sony ESPN",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_ESPN_2018-08-15_03:08:31.png"
  },
  {
    "id": "399",
    "name": "Star Sports 1 SD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Sports_1_2021-05-05_08:05:08.png"
  },
  {
    "id": "522",
    "name": "Star Sports 2 SD",
    "img": "https://nettv1.nettv.com.np//channel_logo/STAR_SPORTS_2_2021-05-05_08:05:13.png"
  },
  {
    "id": "946",
    "name": "Star Sports 1Hindi",
    "img": "https://nettv1.nettv.com.np//channel_logo/Star_Sports_1Hindi_2022-03-10_10:03:10.png"
  },
  {
    "id": "552",
    "name": "DD Sports",
    "img": "https://nettv1.nettv.com.np//channel_logo/DD_SPORTS_2021-05-05_08:05:53.png"
  },
  {
    "id": "979",
    "name": "PTV SPORTS",
    "img": "https://nettv1.nettv.com.np//channel_logo/PTV_SPORTS_2019-02-17_05:02:48.png"
  },
  {
    "id": "1114",
    "name": "Action Sports  HD 1",
    "img": "https://nettv1.nettv.com.np//channel_logo/Action_Sports__HD_1_2021-09-13_10:09:21.jpg"
  },
  {
    "id": "1391",
    "name": "A Sports HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/A_Sports_HD_2023-02-05_04:02:30.png"
  },
  {
    "id": "748",
    "name": "J MUSIC HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/J_Music_HD_2018-08-14_04:08:48.png"
  },
  {
    "id": "599",
    "name": "NAT GEO MUSIC HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Nat_Geo_Music_HD_2018-02-14_09:02:16.png"
  },
  {
    "id": "248",
    "name": "VH1 HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/VH1_HD_2019-04-03_05:04:40.png"
  },
  {
    "id": "1337",
    "name": "MTV HD +",
    "img": "https://nettv1.nettv.com.np//channel_logo/MTV_HD_+_2021-06-13_06:06:41.jpg"
  },
  {
    "id": "1018",
    "name": "MTV Beats HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/MTV_Beats_HD__2022-03-10_10:03:54.png"
  },
  {
    "id": "1057",
    "name": "M Tunes Plus",
    "img": "https://nettv1.nettv.com.np//channel_logo/M_Tunes_Plus_2022-03-10_10:03:21.png"
  },
  {
    "id": "970",
    "name": "B4U Music APAC",
    "img": "https://nettv1.nettv.com.np//channel_logo/B4U_Music_APAC_2022-02-22_06:02:56.jpg"
  },
  {
    "id": "1021",
    "name": "VH1",
    "img": "https://nettv1.nettv.com.np//channel_logo/VH1__2022-03-10_10:03:51.png"
  },
  {
    "id": "440",
    "name": "9X O",
    "img": "https://nettv1.nettv.com.np//channel_logo/9X_O_2018-02-05_06:02:57.png"
  },
  {
    "id": "231",
    "name": "9X Tashan",
    "img": "https://nettv1.nettv.com.np//channel_logo/9X_Tashan_2019-09-15_01:09:34.jpg"
  },
  {
    "id": "304",
    "name": "9x Jalwa",
    "img": "https://nettv1.nettv.com.np//channel_logo/304.png"
  },
  {
    "id": "311",
    "name": "B4U Music",
    "img": "https://nettv1.nettv.com.np//channel_logo/311.png"
  },
  {
    "id": "477",
    "name": "MASTIII",
    "img": "https://nettv1.nettv.com.np//channel_logo/Mastiii_2018-01-08_04:01:54.png"
  },
  {
    "id": "249",
    "name": "MTV",
    "img": "https://nettv1.nettv.com.np//channel_logo/MTV_2020-11-02_12:11:00.png"
  },
  {
    "id": "245",
    "name": "Sony MIX",
    "img": "https://nettv1.nettv.com.np//channel_logo/245.png"
  },
  {
    "id": "315",
    "name": "Zee ETC Bollywood",
    "img": "https://nettv1.nettv.com.np//channel_logo/Zee_ETC_Bollywood_2019-08-07_05:08:45.png"
  },
  {
    "id": "655",
    "name": "Zing",
    "img": "https://nettv1.nettv.com.np//channel_logo/ZING_2021-05-05_08:05:47.png"
  },
  {
    "id": "232",
    "name": "Zoom",
    "img": "https://nettv1.nettv.com.np//channel_logo/Zoom_2021-05-05_08:05:36.png"
  },
  {
    "id": "452",
    "name": "E 24",
    "img": "https://nettv1.nettv.com.np//channel_logo/452.png"
  },
  {
    "id": "1147",
    "name": "I Love",
    "img": "https://nettv1.nettv.com.np//channel_logo/I_Love__2020-01-12_02:01:21.png"
  },
  {
    "id": "566",
    "name": "ARY Musik",
    "img": "https://nettv1.nettv.com.np//channel_logo/ARY_Musik_2018-01-31_12:01:53.png"
  },
  {
    "id": "868",
    "name": "INSYNC",
    "img": "https://nettv1.nettv.com.np//channel_logo/INSYNC_2018-11-23_05:11:38.png"
  },
  {
    "id": "465",
    "name": "Sangeet Bhojpuri",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sangeet_Bhojpuri_2018-02-05_06:02:01.png"
  },
  {
    "id": "417",
    "name": "Bindass",
    "img": "https://nettv1.nettv.com.np//channel_logo/Bindass_2020-05-21_11:05:39.jpg"
  },
  {
    "id": "913",
    "name": "CBeebies HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/CBeebies_Asia_HD_2018-12-30_05:12:45.png"
  },
  {
    "id": "596",
    "name": "BABY TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/BABY_TV_HD_2018-08-15_11:08:33.png"
  },
  {
    "id": "540",
    "name": "NICKELODEON HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/NICKELODEON_HD_2018-08-15_04:08:37.png"
  },
  {
    "id": "394",
    "name": "Cartoon Network",
    "img": "https://nettv1.nettv.com.np//channel_logo/Cartoon_Network_2018-08-15_11:08:44.png"
  },
  {
    "id": "246",
    "name": "Nick Jr",
    "img": "https://nettv1.nettv.com.np//channel_logo/Nick_Jr_2021-05-05_08:05:12.png"
  },
  {
    "id": "1298",
    "name": "Hungama TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Hungama_TV_2021-01-13_09:01:15.png"
  },
  {
    "id": "940",
    "name": "Nick India",
    "img": "https://nettv1.nettv.com.np//channel_logo/Nick_India_2021-05-05_07:05:02.png"
  },
  {
    "id": "413",
    "name": "Super Hungama",
    "img": "https://nettv1.nettv.com.np//channel_logo/Super_Hungama_2022-03-07_06:03:52.jpg"
  },
  {
    "id": "415",
    "name": "Disney Junior",
    "img": "https://nettv1.nettv.com.np//channel_logo/Disney_Junior_2021-05-05_08:05:31.png"
  },
  {
    "id": "414",
    "name": "Disney Channel",
    "img": "https://nettv1.nettv.com.np//channel_logo/Disney_Channel_2021-05-05_08:05:54.png"
  },
  {
    "id": "1110",
    "name": "Discovery Kids",
    "img": "https://nettv1.nettv.com.np//channel_logo/Discovery_Kids_2019-11-06_08:11:28.png"
  },
  {
    "id": "1126",
    "name": "Lolly Kids HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Lolly_Kids_2019-12-18_01:12:28.png"
  },
  {
    "id": "1294",
    "name": "Sonic Nickelodeon",
    "img": "https://nettv1.nettv.com.np//channel_logo/Nickelodeon_Sonic_2021-01-05_05:01:29.png"
  },
  {
    "id": "380",
    "name": "Pogo",
    "img": "https://nettv1.nettv.com.np//channel_logo/380.png"
  },
  {
    "id": "593",
    "name": "NAT GEO PEOPLE HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/NAT_GEO_PEOPLE_HD_2018-08-15_03:08:21.png"
  },
  {
    "id": "580",
    "name": "NAT GEO WILD HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/NAT_GEO_WILD_HD_2021-05-05_08:05:28.png"
  },
  {
    "id": "381",
    "name": "Animal Planet HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Animal_Planet_HD_2022-03-10_10:03:16.png"
  },
  {
    "id": "396",
    "name": "Nat Geo  HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Nat_Geo__HD_2021-05-05_08:05:05.png"
  },
  {
    "id": "387",
    "name": "Discovery HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Discovery_HD_2022-03-10_10:03:42.png"
  },
  {
    "id": "383",
    "name": "TLC HD World",
    "img": "https://nettv1.nettv.com.np//channel_logo/TLC_HD_World_2021-05-05_08:05:00.png"
  },
  {
    "id": "934",
    "name": "Sony BBC Earth HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sony_BBC_Earth_HD_2021-05-05_07:05:50.png"
  },
  {
    "id": "1334",
    "name": "History TV 18 HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/History_TV_18_HD_2021-06-13_06:06:47.png"
  },
  {
    "id": "976",
    "name": "CGTN Documentary HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/CGTN_Documentary_HD_2021-05-05_06:05:59.png"
  },
  {
    "id": "1300",
    "name": "National Geographic",
    "img": "https://nettv1.nettv.com.np//channel_logo/National_Geographic_2021-01-19_07:01:27.png"
  },
  {
    "id": "251",
    "name": "History TV 18",
    "img": "https://nettv1.nettv.com.np//channel_logo/History_TV_18_2021-05-05_08:05:45.png"
  },
  {
    "id": "471",
    "name": "Sony BBC Earth",
    "img": "https://nettv1.nettv.com.np//channel_logo/471.jpg"
  },
  {
    "id": "384",
    "name": "Discovery Turbo",
    "img": "https://nettv1.nettv.com.np//channel_logo/Discovery_Turbo_2021-05-05_08:05:35.png"
  },
  {
    "id": "925",
    "name": "Investigation Discovery",
    "img": "https://nettv1.nettv.com.np//channel_logo/Investigation_Discovery_2020-06-26_11:06:00.png"
  },
  {
    "id": "928",
    "name": "Discovery Channel",
    "img": "https://nettv1.nettv.com.np//channel_logo/Discovery_Channel_2023-07-25_05:07:49.jpg"
  },
  {
    "id": "931",
    "name": "TLC India",
    "img": "https://nettv1.nettv.com.np//channel_logo/TLC_India_2019-01-08_11:01:24.png"
  },
  {
    "id": "1402",
    "name": "Animal Planet",
    "img": "https://nettv1.nettv.com.np//channel_logo/Animal_Planet_2023-07-25_05:07:30.jpg"
  },
  {
    "id": "1405",
    "name": "Discovery Science",
    "img": "https://nettv1.nettv.com.np//channel_logo/Discovery_Science_2023-08-02_01:08:38.jpg"
  },
  {
    "id": "922",
    "name": "Kangba TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sichuan_Kangba_Tibetan_TV_2019-01-05_05:01:55.png"
  },
  {
    "id": "820",
    "name": "ABC Australia",
    "img": "https://nettv1.nettv.com.np//channel_logo/ABC_Australia_Asia_2018-09-09_01:09:55.jpg"
  },
  {
    "id": "350",
    "name": "NHK World HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/NHK_World_HD_2021-05-05_08:05:07.png"
  },
  {
    "id": "327",
    "name": "NHK Premium HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/NHK_Premium_HD_2021-05-05_08:05:07.png"
  },
  {
    "id": "339",
    "name": "Arirang HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Arirang_HD_2021-05-05_08:05:19.png"
  },
  {
    "id": "266",
    "name": "DW-TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/DW-TV_HD_2021-05-05_08:05:32.png"
  },
  {
    "id": "811",
    "name": "Xizang TV Tibetan",
    "img": "https://nettv1.nettv.com.np//channel_logo/Xizang_TV_Tibetan_2018-08-29_05:08:52.png"
  },
  {
    "id": "808",
    "name": "Xizang TV Chinese",
    "img": "https://nettv1.nettv.com.np//channel_logo/Xizang_TV_Chinese_2018-08-29_05:08:25.png"
  },
  {
    "id": "839",
    "name": "Cuba Vision",
    "img": "https://nettv1.nettv.com.np//channel_logo/Cubavision_International\t_2018-10-03_11:10:55.png"
  },
  {
    "id": "829",
    "name": "TVE Internacional",
    "img": "https://nettv1.nettv.com.np//channel_logo/TVE_Internacional_2018-09-28_08:09:07.png"
  },
  {
    "id": "546",
    "name": "BBS",
    "img": "https://nettv1.nettv.com.np//channel_logo/BBS_2018-01-23_07:01:26.png"
  },
  {
    "id": "548",
    "name": "BBS 2",
    "img": "https://nettv1.nettv.com.np//channel_logo/BBS_2_2018-01-23_07:01:09.jpg"
  },
  {
    "id": "1039",
    "name": "GTV",
    "img": "https://nettv1.nettv.com.np//channel_logo/GTV_2019-05-05_09:05:54.png"
  },
  {
    "id": "378",
    "name": "Hum Masala",
    "img": "https://nettv1.nettv.com.np//channel_logo/378.png"
  },
  {
    "id": "847",
    "name": "Akash Bangla",
    "img": "https://nettv1.nettv.com.np//channel_logo/_Akash_Bangla_2018-10-30_11:10:59.png"
  },
  {
    "id": "291",
    "name": "TV 5 Monde",
    "img": "https://nettv1.nettv.com.np//channel_logo/TV_5_Monde_2022-03-10_10:03:10.png"
  },
  {
    "id": "435",
    "name": "Fashion TV Asia HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Fashion_TV_Asia_HD_2021-05-05_08:05:19.png"
  },
  {
    "id": "877",
    "name": "UA TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/UA_TV_2018-12-02_05:12:45.png"
  },
  {
    "id": "880",
    "name": "KBS Korea",
    "img": "https://nettv1.nettv.com.np//channel_logo/KBS_Korea_2021-10-21_07:10:19.jpg"
  },
  {
    "id": "507",
    "name": "VOA HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/VOA_ASIA_2017-12-20_03:12:00.png"
  },
  {
    "id": "239",
    "name": "Bhakti Darshan",
    "img": "https://nettv1.nettv.com.np//channel_logo/Bhakti_Darshan_2021-05-05_08:05:16.png"
  },
  {
    "id": "490",
    "name": "Divya Darshan HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Divya_Darshan_HD_2022-03-10_10:03:37.png"
  },
  {
    "id": "1157",
    "name": "Deep TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/DEEP_TV_2020-01-29_11:01:20.jpg"
  },
  {
    "id": "1291",
    "name": "Dharma Television",
    "img": "https://nettv1.nettv.com.np//channel_logo/DHARMA_Television_2020-12-27_06:12:40.png"
  },
  {
    "id": "1015",
    "name": "Omkar Television",
    "img": "https://nettv1.nettv.com.np//channel_logo/Omkar_Television_2021-05-05_06:05:21.png"
  },
  {
    "id": "408",
    "name": "Satsang",
    "img": "https://nettv1.nettv.com.np//channel_logo/Satsang_2021-05-05_08:05:03.png"
  },
  {
    "id": "448",
    "name": "Shadhna",
    "img": "https://nettv1.nettv.com.np//channel_logo/Shadhna__2018-02-05_06:02:52.png"
  },
  {
    "id": "324",
    "name": "Aastha",
    "img": "https://nettv1.nettv.com.np//channel_logo/Aastha_2022-03-10_10:03:59.png"
  },
  {
    "id": "230",
    "name": "Sanskar TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/Sanskar_TV_2021-05-05_08:05:57.png"
  },
  {
    "id": "430",
    "name": "Peace of Mind",
    "img": "https://nettv1.nettv.com.np//channel_logo/PEACE_OF_MIND_2021-05-05_08:05:39.png"
  },
  {
    "id": "424",
    "name": "Peace TV Urdu HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Peace_Tv_Urdu_2021-05-05_08:05:34.png"
  },
  {
    "id": "487",
    "name": "Madani Channel",
    "img": "https://nettv1.nettv.com.np//channel_logo/Madani_Channel_2021-05-05_08:05:11.png"
  },
  {
    "id": "560",
    "name": "Daystar Television",
    "img": "https://nettv1.nettv.com.np//channel_logo/DAYSTAR_2021-05-05_08:05:14.png"
  },
  {
    "id": "564",
    "name": "TBN ASIA",
    "img": "https://nettv1.nettv.com.np//channel_logo/TBN_ASIA_2018-01-31_10:01:30.png"
  },
  {
    "id": "853",
    "name": "Angel TV HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Angel_TV_India_2018-11-02_02:11:59.png"
  },
  {
    "id": "1182",
    "name": "WOW",
    "img": "https://nettv1.nettv.com.np//channel_logo/WOW__2020-04-06_01:04:55.png"
  },
  {
    "id": "1177",
    "name": "Cinemachi HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Cinemachi_HD_2020-04-06_01:04:25.png"
  },
  {
    "id": "1187",
    "name": "Health and Wellness  HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Health_and_Wellness__HD_2020-04-06_01:04:26.png"
  },
  {
    "id": "1172",
    "name": "Smile",
    "img": "https://nettv1.nettv.com.np//channel_logo/Smile__2020-04-06_01:04:24.jpg"
  },
  {
    "id": "326",
    "name": "GO TO LUXE TV",
    "img": "https://nettv1.nettv.com.np//channel_logo/GO_TO_LUXE_TV__2021-05-05_08:05:37.png"
  },
  {
    "id": "826",
    "name": "TV TRISHULI",
    "img": "https://nettv1.nettv.com.np//channel_logo/TV_TRISHULI_2018-09-28_05:09:16.png"
  },
  {
    "id": "1339",
    "name": "test1",
    "img": "https://nettv1.nettv.com.np//channel_logo/default_livetv.png"
  },
  {
    "id": "610",
    "name": "test",
    "img": "https://nettv1.nettv.com.np//channel_logo/test_2020-12-21_05:12:46.png"
  },
  {
    "id": "1375",
    "name": "TEST SELECT HD 2",
    "img": "https://nettv1.nettv.com.np//channel_logo/TEST_SELECT_HD_2_2022-02-10_10:02:49.jpg"
  },
  {
    "id": "1372",
    "name": "TEST TEN 1 HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/TEST_TEN_1_HD_2022-02-10_10:02:34.jpg"
  },
  {
    "id": "997",
    "name": "Gandaki Tv",
    "img": "https://nettv1.nettv.com.np//channel_logo/Gandaki_Tv_2019-02-27_04:02:19.png"
  },
  {
    "id": "1276",
    "name": "ITV Nepal",
    "img": "https://nettv1.nettv.com.np//channel_logo/ITV_NEPAL_2020-12-02_09:12:13.jpg"
  },
  {
    "id": "1120",
    "name": "Travel XP HD",
    "img": "https://nettv1.nettv.com.np//channel_logo/Travel_XP_HD_2019-12-08_07:12:12.png"
  },
  {
    "id": "325",
    "name": "FOOD FOOD",
    "img": "https://nettv1.nettv.com.np//channel_logo/FOOD_FOOD_2019-09-15_01:09:10.jpg"
  },
  {
    "id": "619",
    "name": "ARY QTV",
    "img": "https://nettv1.nettv.com.np//channel_logo/ARY_QTV_2018-03-08_11:03:18.jpg"
  },
  {
    "id": "528",
    "name": "GOD TV ASIA",
    "img": "https://nettv1.nettv.com.np//channel_logo/GOD_TV_ASIA_2018-01-03_04:01:34.png"
  },
  {
    "id": "1084",
    "name": "Care World",
    "img": "https://nettv1.nettv.com.np//channel_logo/Care_World_2019-09-15_11:09:13.jpg"
  }
]
};

const movieLinks = [
  {
    name: "Tantra (2024)",
    url: "http://ftp.ctgfun.com/Indian/Hindi%20Movies/Tantra%20%282024%29%20Hindi%20720p%20WEBRip%20x264%20ESub%20%5BDDN%5D/Tantra%20%282024%29%20Hindi%20720p%20WEBRip%20x264%20ESub%20%5BDDN%5D.mp4",
    logo: "https://manishghimire.info.np/images/my2.webp",
  },
   {
    name: "The Buckingham Murders",
    url: "http://ftp.ctgfun.com/Indian/Hindi%20Movies/The%20Buckingham%20Murders%20%282024%29%20Hindi%20720p%20WEBRip%20x264%20ESub%20%5BDDN%5D/The%20Buckingham%20Murders%20%282024%29%20Hindi%20720p%20WEBRip%20x264%20ESub%20%5BDDN%5D.mp4",
    logo: "https://manishghimire.info.np/images/my2.webp",
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

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Dashboard } from "@/components/custom-component/Dashboard"
export const Pdrs = (() => {
    /*const predictions = {
        "predictions": {
            "1": {
                "confidence": [
                    0.014648794196546078,
                    0.9853512048721313
                ],
                "hashtags": [],
                "mentions": [
                    "@SanjayK53544321",
                    "@MrSinha_"
                ],
                "prediction": 1,
                "text": "Sanjay Karan @SanjayK53544321 \u00b7 53s Replying to @MrSinha_ Modi means disaster , people of Gujarat have seen and now India is witnessing 1"
            },
            "2": {
                "confidence": [
                    0.9866368174552917,
                    0.013363257050514221
                ],
                "hashtags": [],
                "mentions": [
                    "@chokRcb",
                    "@admirer_avm"
                ],
                "prediction": 0,
                "text": "Praboss @chokRcb \u00b7 1m Replying to @admirer_avm BB disaster talk tho south industry hit. All India top 3. Dream for poraMBoku kojja 1"
            },
            "3": {
                "confidence": [
                    0.9522449970245361,
                    0.04775500297546387
                ],
                "hashtags": [],
                "mentions": [
                    "@mi_parth225",
                    "@fabialps"
                ],
                "prediction": 0,
                "text": "Odbhut \u09aa\u09be\u09b0\u09cd\u09a5 @mi_parth225 \u00b7 2m Replying to @fabialps In India we have 6: Vasanta (\u0935\u0938\u0902\u0924): Spring Grishma (\u0917\u094d\u0930\u0940\u0937\u094d\u092e): Summer Varsha (\u0935\u0930\u094d\u0937\u093e): Monsoon Sharad (\u0936\u0930\u0926): Autumn Hemanta (\u0939\u0947\u092e\u0902\u0924): Prewinter Shishira (\u0936\u093f\u0936\u093f\u0930): Winter In Marathi you can replace \u0909\u0928\u094d\u0939\u093e\u0933\u093e (Unhala) - summer \u092a\u093e\u0935\u0938\u093e\u0933\u093e (Pavsaala) - monsoon \u0939\u093f\u0935\u093e\u0933\u093e - (winter), the main 3. Show more 3"
            },
            "4": {
                "confidence": [
                    0.004667973145842552,
                    0.9953320622444153
                ],
                "hashtags": [
                    "#monsoon",
                    "#Faridabad",
                    "#DelhiNCR"
                ],
                "mentions": [
                    "@TheTechocrat"
                ],
                "prediction": 1,
                "text": "Prof RV @TheTechocrat \u00b7 10m The #monsoon situation over N India is not encouraging since last 2-3 days except sporadic local rain. Heat and humidity is rising steadily over Delhi NCR making life miserable again.. Hope there is a change soon. #Faridabad #DelhiNCR 1 15"
            },
            "5": {
                "confidence": [
                    0.8692552447319031,
                    0.13074474036693573
                ],
                "hashtags": [],
                "mentions": [
                    "@adamjam99",
                    "@PhilJenningsFX",
                    "@NateSilver538",
                    "@NateSilver538"
                ],
                "prediction": 0,
                "text": "Adam Goldberg @adamjam99 \u00b7 13m Replying to @PhilJenningsFX and @NateSilver538 Polling has been awful in every western democracy this year and going back to 22 overstating the right. The red wave and gop flood of polls hoodwinked @NateSilver538 in 2022 before polls overestimated the right in India, the EU, UK and France just this year 1 12"
            },
            "6": {
                "confidence": [
                    0.46784132719039917,
                    0.532158613204956
                ],
                "hashtags": [],
                "mentions": [
                    "@smritivan",
                    "@incredibleindia",
                    "@MyGovGujarati"
                ],
                "prediction": 1,
                "text": "Smritivan Earthquake Museum @smritivan \u00b7 14m Embark on a journey through time and nature at Smritivan, Bhuj. This 470-acre marvel offers unique experiences that blend history, technology, and natural beauty. Explore, learn, and create lasting memories in India's largest memorial museum. @incredibleindia @MyGovGujarati 10"
            },
            "7": {
                "confidence": [
                    0.8594375252723694,
                    0.14056241512298584
                ],
                "hashtags": [
                    "#IndianArmy",
                    "#Engineers",
                    "#IndianArmy",
                    "#Engineers"
                ],
                "mentions": [
                    "@kishanchand_89",
                    "@adgpi"
                ],
                "prediction": 0,
                "text": "Technical Astra @kishanchand_89 \u00b7 38m #IndianArmy inducts 40 Heavy Duty Hydraulic Mobile Cranes from M/s Tractor India Limited. These versatile, new age and high-tech Cranes will enhance the operational preparedness of Combat #Engineers and also enable them to undertake arduous tasks during disaster management. ADG PI - INDIAN ARMY @adgpi \u00b7 1h #IndianArmy inducts 40 Heavy Duty Hydraulic Mobile Cranes from M/s Tractor India Limited. These versatile, new age and high-tech Cranes will enhance the operational preparedness of Combat #Engineers and also enable them to undertake arduous tasks during disaster management. Show more 33"
            },
            "8": {
                "confidence": [
                    0.0022517647594213486,
                    0.9977481961250305
                ],
                "hashtags": [],
                "mentions": [
                    "@In_AnkitSingla"
                ],
                "prediction": 1,
                "text": "Ankit Singla @In_AnkitSingla \u00b7 38m FLOOD AND RAIN TOTALLY DISTORT MANY STATES OF INDIA. HIMACHAL IS WORSE AFFECTED. WHETHER DEPT. ISSUED MANY RED AND ORANGE ALERT IN DIFFERENT REGIONS OF INDIA. 7"
            },
            "9": {
                "confidence": [
                    0.004375414457172155,
                    0.9956246018409729
                ],
                "hashtags": [
                    "#umarpada",
                    "#rainforecast",
                    "#rainfall",
                    "#flood",
                    "#indianewsgujarat",
                    "#gujaratnews",
                    "#todaygujratinews"
                ],
                "mentions": [
                    "@in_gujarati"
                ],
                "prediction": 1,
                "text": "India News Gujarat @in_gujarati \u00b7 42m Umarpada Rain: \u0a89\u0a82\u0aae\u0ab0\u0aaa\u0abe\u0aa1\u0abe\u0aae\u0abe\u0a82 \u0aad\u0abe\u0ab0\u0ac7 \u0ab5\u0ab0\u0ab8\u0abe\u0aa6\u0aa8\u0ac7 \u0ab2\u0a88 \u0aae\u0abe\u0ab0\u0acd\u0a97\u0acb \u0aa7\u0acb\u0ab5\u0abe\u0aaf\u0abe | Flood | Heavy Rainfall #umarpada #rainforecast #rainfall #flood #indianewsgujarat #gujaratnews #todaygujratinews 18"
            },
            "10": {
                "confidence": [
                    0.5292167067527771,
                    0.4707833230495453
                ],
                "hashtags": [
                    "#MonsoonDiaries",
                    "#Belgaum",
                    "#NatureLovers"
                ],
                "mentions": [
                    "@WeatherRadar_IN"
                ],
                "prediction": 0,
                "text": "Weather & Radar India @WeatherRadar_IN \u00b7 46m Monsoon magic in Belgaum, Karnataka! Serene views and refreshing vibes captured by our user TausifAhmed. Send your monsoon photos/videos! Nature at its best! #MonsoonDiaries #Belgaum #NatureLovers 0:14 1 5 223"
            },
            "11": {
                "confidence": [
                    0.7969270348548889,
                    0.20307296514511108
                ],
                "hashtags": [],
                "mentions": [
                    "@VivekSi85847001"
                ],
                "prediction": 0,
                "text": "Vivek Singh @VivekSi85847001 \u00b7 46m Indian Army inducts 40 Heavy Duty Hydraulic Mobile Cranes from M/s Tractor India Limited. These versatile, modern Cranes will enhance the Ops preparedness of Combat Engineers & also enable them to do arduous tasks during disaster management. 6 49 399"
            },
            "12": {
                "confidence": [
                    0.0022191680036485195,
                    0.9977808594703674
                ],
                "hashtags": [
                    "#Tokyo"
                ],
                "mentions": [
                    "@uniindianews"
                ],
                "prediction": 1,
                "text": "United News of India @uniindianews \u00b7 52m 4.2-magnitude earthquake struck near #Tokyo: JMA 36"
            },
            "13": {
                "confidence": [
                    0.20236602425575256,
                    0.797633945941925
                ],
                "hashtags": [
                    "#Orange",
                    "#Redalert",
                    "#Gujarat",
                    "#Monsoon"
                ],
                "mentions": [
                    "@vibesofindia_"
                ],
                "prediction": 1,
                "text": "Vibes of India @vibesofindia_ \u00b7 52m Red and Orange Alerts Issued Over Various Parts of Gujarat #Orange #Redalert #Gujarat #Monsoon Red and Orange Alerts Issued Over Various Parts of Gujarat From vibesofindia.com 29"
            },
            "14": {
                "confidence": [
                    0.450836718082428,
                    0.5491632223129272
                ],
                "hashtags": [],
                "mentions": [
                    "@NIKHILR02779806",
                    "@old_cricketer"
                ],
                "prediction": 1,
                "text": "Fourier @NIKHILR02779806 \u00b7 1h Replying to @old_cricketer Bjp gave India to congress in 2004 in very good condition and congress used it to win in 2009 again but can't capitalize over it and 5 years were disaster ..May be bjp know that in 2029 they r not going to win so ay be don't want to repeat the mistake of 2004. 77"
            },
            "15": {
                "confidence": [
                    0.09106811136007309,
                    0.9089319109916687
                ],
                "hashtags": [
                    "#India"
                ],
                "mentions": [
                    "@Sv4599",
                    "@gujratsamachar",
                    "@RahulGandhi",
                    "@kharge",
                    "@Jairam_Ramesh",
                    "@INCIndia",
                    "@GretaThunberg"
                ],
                "prediction": 1,
                "text": "Vichar Swadeshi @Sv4599 \u00b7 1h #India Disaster in the name of development . Gujarat Samachar @gujratsamachar \u00b7 1h How the Nicobar Project will spell doom for the eco-rich island @RahulGandhi @kharge @Jairam_Ramesh @INCIndia @GretaThunberg Show more 3"
            },
            "16": {
                "confidence": [
                    0.9356208443641663,
                    0.06437912583351135
                ],
                "hashtags": [
                    "#WATCH"
                ],
                "mentions": [
                    "@ANI"
                ],
                "prediction": 0,
                "text": "ANI @ANI \u00b7 1h #WATCH | Indian Army inducts 40 Heavy Duty Hydraulic Mobile Cranes from Tractor India Limited. These versatile, new age and high-tech Cranes will enhance the operational preparedness of Combat Engineers and also enable them to undertake arduous tasks during disaster management: Show more 1 5 41 8.2K"
            },
            "17": {
                "confidence": [
                    0.6541842222213745,
                    0.34581583738327026
                ],
                "hashtags": [
                    "#EducationForAll",
                    "#SupportEducation",
                    "#MonsoonDonation",
                    "#CommunitySupport",
                    "#TheBetterIndia"
                ],
                "mentions": [
                    "@thebetterindia",
                    "@thebetterindia",
                    "@hopepariwar"
                ],
                "prediction": 0,
                "text": "The Better India @thebetterindia \u00b7 1h Replying to @thebetterindia and @hopepariwar #EducationForAll #SupportEducation #MonsoonDonation #CommunitySupport #TheBetterIndia [ Education For All, Support Education, Help Children, Monsoon Donation, Donate Now, Community Support, Varanasi, Heroes of Humanity, Changemakers, Real Life Heroes, Donate A Roof Campaign ] 1 698"
            },
            "18": {
                "confidence": [
                    0.004002170637249947,
                    0.9959977865219116
                ],
                "hashtags": [],
                "mentions": [
                    "@schandrakumar30"
                ],
                "prediction": 1,
                "text": "chandra kumar s Ediga @schandrakumar30 \u00b7 1h Nepal landslide tragedy: India's technical assistance sought to search missing passengers Nepal landslide tragedy: India's technical assistance sought to search missing passengers From ainews.net.in 3"
            },
            "19": {
                "confidence": [
                    0.9074379801750183,
                    0.09256201982498169
                ],
                "hashtags": [
                    "#IndianArmy",
                    "#Engineers"
                ],
                "mentions": [
                    "@adgpi"
                ],
                "prediction": 0,
                "text": "ADG PI - INDIAN ARMY @adgpi \u00b7 1h #IndianArmy inducts 40 Heavy Duty Hydraulic Mobile Cranes from M/s Tractor India Limited. These versatile, new age and high-tech Cranes will enhance the operational preparedness of Combat #Engineers and also enable them to undertake arduous tasks during disaster management. Show more 0:27 11 73 405 6.5K"
            },
            "20": {
                "confidence": [
                    0.005828140303492546,
                    0.9941717982292175
                ],
                "hashtags": [],
                "mentions": [
                    "@clashreport"
                ],
                "prediction": 1,
                "text": "Clash Report @clashreport \u00b7 1h Oopsie: Back in 2017, India's first nuclear-powered ballistic missile submarine, INS Arihant, was left inoperative for nearly a year after a hatch was left open, allowing seawater to flood the propulsion compartment. \u2014 The $2.9 billion submarine suffered substantial damage, Show more 3 12 51 9.2K"
            }
        },
        "tweets": [
            {
                "hashtags": [],
                "mentions": [
                    "@SanjayK53544321",
                    "@MrSinha_"
                ],
                "text": "Sanjay Karan @SanjayK53544321 \u00b7 53s Replying to @MrSinha_ Modi means disaster , people of Gujarat have seen and now India is witnessing 1"
            },
            {
                "hashtags": [],
                "mentions": [
                    "@chokRcb",
                    "@admirer_avm"
                ],
                "text": "Praboss @chokRcb \u00b7 1m Replying to @admirer_avm BB disaster talk tho south industry hit. All India top 3. Dream for poraMBoku kojja 1"
            },
            {
                "hashtags": [],
                "mentions": [
                    "@mi_parth225",
                    "@fabialps"
                ],
                "text": "Odbhut \u09aa\u09be\u09b0\u09cd\u09a5 @mi_parth225 \u00b7 2m Replying to @fabialps In India we have 6: Vasanta (\u0935\u0938\u0902\u0924): Spring Grishma (\u0917\u094d\u0930\u0940\u0937\u094d\u092e): Summer Varsha (\u0935\u0930\u094d\u0937\u093e): Monsoon Sharad (\u0936\u0930\u0926): Autumn Hemanta (\u0939\u0947\u092e\u0902\u0924): Prewinter Shishira (\u0936\u093f\u0936\u093f\u0930): Winter In Marathi you can replace \u0909\u0928\u094d\u0939\u093e\u0933\u093e (Unhala) - summer \u092a\u093e\u0935\u0938\u093e\u0933\u093e (Pavsaala) - monsoon \u0939\u093f\u0935\u093e\u0933\u093e - (winter), the main 3. Show more 3"
            },
            {
                "hashtags": [
                    "#monsoon",
                    "#Faridabad",
                    "#DelhiNCR"
                ],
                "mentions": [
                    "@TheTechocrat"
                ],
                "text": "Prof RV @TheTechocrat \u00b7 10m The #monsoon situation over N India is not encouraging since last 2-3 days except sporadic local rain. Heat and humidity is rising steadily over Delhi NCR making life miserable again.. Hope there is a change soon. #Faridabad #DelhiNCR 1 15"
            },
            {
                "hashtags": [],
                "mentions": [
                    "@adamjam99",
                    "@PhilJenningsFX",
                    "@NateSilver538",
                    "@NateSilver538"
                ],
                "text": "Adam Goldberg @adamjam99 \u00b7 13m Replying to @PhilJenningsFX and @NateSilver538 Polling has been awful in every western democracy this year and going back to 22 overstating the right. The red wave and gop flood of polls hoodwinked @NateSilver538 in 2022 before polls overestimated the right in India, the EU, UK and France just this year 1 12"
            },
            {
                "hashtags": [],
                "mentions": [
                    "@smritivan",
                    "@incredibleindia",
                    "@MyGovGujarati"
                ],
                "text": "Smritivan Earthquake Museum @smritivan \u00b7 14m Embark on a journey through time and nature at Smritivan, Bhuj. This 470-acre marvel offers unique experiences that blend history, technology, and natural beauty. Explore, learn, and create lasting memories in India's largest memorial museum. @incredibleindia @MyGovGujarati 10"
            },
            {
                "hashtags": [
                    "#IndianArmy",
                    "#Engineers",
                    "#IndianArmy",
                    "#Engineers"
                ],
                "mentions": [
                    "@kishanchand_89",
                    "@adgpi"
                ],
                "text": "Technical Astra @kishanchand_89 \u00b7 38m #IndianArmy inducts 40 Heavy Duty Hydraulic Mobile Cranes from M/s Tractor India Limited. These versatile, new age and high-tech Cranes will enhance the operational preparedness of Combat #Engineers and also enable them to undertake arduous tasks during disaster management. ADG PI - INDIAN ARMY @adgpi \u00b7 1h #IndianArmy inducts 40 Heavy Duty Hydraulic Mobile Cranes from M/s Tractor India Limited. These versatile, new age and high-tech Cranes will enhance the operational preparedness of Combat #Engineers and also enable them to undertake arduous tasks during disaster management. Show more 33"
            },
            {
                "hashtags": [],
                "mentions": [
                    "@In_AnkitSingla"
                ],
                "text": "Ankit Singla @In_AnkitSingla \u00b7 38m FLOOD AND RAIN TOTALLY DISTORT MANY STATES OF INDIA. HIMACHAL IS WORSE AFFECTED. WHETHER DEPT. ISSUED MANY RED AND ORANGE ALERT IN DIFFERENT REGIONS OF INDIA. 7"
            },
            {
                "hashtags": [
                    "#umarpada",
                    "#rainforecast",
                    "#rainfall",
                    "#flood",
                    "#indianewsgujarat",
                    "#gujaratnews",
                    "#todaygujratinews"
                ],
                "mentions": [
                    "@in_gujarati"
                ],
                "text": "India News Gujarat @in_gujarati \u00b7 42m Umarpada Rain: \u0a89\u0a82\u0aae\u0ab0\u0aaa\u0abe\u0aa1\u0abe\u0aae\u0abe\u0a82 \u0aad\u0abe\u0ab0\u0ac7 \u0ab5\u0ab0\u0ab8\u0abe\u0aa6\u0aa8\u0ac7 \u0ab2\u0a88 \u0aae\u0abe\u0ab0\u0acd\u0a97\u0acb \u0aa7\u0acb\u0ab5\u0abe\u0aaf\u0abe | Flood | Heavy Rainfall #umarpada #rainforecast #rainfall #flood #indianewsgujarat #gujaratnews #todaygujratinews 18"
            },
            {
                "hashtags": [
                    "#MonsoonDiaries",
                    "#Belgaum",
                    "#NatureLovers"
                ],
                "mentions": [
                    "@WeatherRadar_IN"
                ],
                "text": "Weather & Radar India @WeatherRadar_IN \u00b7 46m Monsoon magic in Belgaum, Karnataka! Serene views and refreshing vibes captured by our user TausifAhmed. Send your monsoon photos/videos! Nature at its best! #MonsoonDiaries #Belgaum #NatureLovers 0:14 1 5 223"
            },
            {
                "hashtags": [],
                "mentions": [
                    "@VivekSi85847001"
                ],
                "text": "Vivek Singh @VivekSi85847001 \u00b7 46m Indian Army inducts 40 Heavy Duty Hydraulic Mobile Cranes from M/s Tractor India Limited. These versatile, modern Cranes will enhance the Ops preparedness of Combat Engineers & also enable them to do arduous tasks during disaster management. 6 49 399"
            },
            {
                "hashtags": [
                    "#Tokyo"
                ],
                "mentions": [
                    "@uniindianews"
                ],
                "text": "United News of India @uniindianews \u00b7 52m 4.2-magnitude earthquake struck near #Tokyo: JMA 36"
            },
            {
                "hashtags": [
                    "#Orange",
                    "#Redalert",
                    "#Gujarat",
                    "#Monsoon"
                ],
                "mentions": [
                    "@vibesofindia_"
                ],
                "text": "Vibes of India @vibesofindia_ \u00b7 52m Red and Orange Alerts Issued Over Various Parts of Gujarat #Orange #Redalert #Gujarat #Monsoon Red and Orange Alerts Issued Over Various Parts of Gujarat From vibesofindia.com 29"
            },
            {
                "hashtags": [],
                "mentions": [
                    "@NIKHILR02779806",
                    "@old_cricketer"
                ],
                "text": "Fourier @NIKHILR02779806 \u00b7 1h Replying to @old_cricketer Bjp gave India to congress in 2004 in very good condition and congress used it to win in 2009 again but can't capitalize over it and 5 years were disaster ..May be bjp know that in 2029 they r not going to win so ay be don't want to repeat the mistake of 2004. 77"
            },
            {
                "hashtags": [
                    "#India"
                ],
                "mentions": [
                    "@Sv4599",
                    "@gujratsamachar",
                    "@RahulGandhi",
                    "@kharge",
                    "@Jairam_Ramesh",
                    "@INCIndia",
                    "@GretaThunberg"
                ],
                "text": "Vichar Swadeshi @Sv4599 \u00b7 1h #India Disaster in the name of development . Gujarat Samachar @gujratsamachar \u00b7 1h How the Nicobar Project will spell doom for the eco-rich island @RahulGandhi @kharge @Jairam_Ramesh @INCIndia @GretaThunberg Show more 3"
            },
            {
                "hashtags": [
                    "#WATCH"
                ],
                "mentions": [
                    "@ANI"
                ],
                "text": "ANI @ANI \u00b7 1h #WATCH | Indian Army inducts 40 Heavy Duty Hydraulic Mobile Cranes from Tractor India Limited. These versatile, new age and high-tech Cranes will enhance the operational preparedness of Combat Engineers and also enable them to undertake arduous tasks during disaster management: Show more 1 5 41 8.2K"
            },
            {
                "hashtags": [
                    "#EducationForAll",
                    "#SupportEducation",
                    "#MonsoonDonation",
                    "#CommunitySupport",
                    "#TheBetterIndia"
                ],
                "mentions": [
                    "@thebetterindia",
                    "@thebetterindia",
                    "@hopepariwar"
                ],
                "text": "The Better India @thebetterindia \u00b7 1h Replying to @thebetterindia and @hopepariwar #EducationForAll #SupportEducation #MonsoonDonation #CommunitySupport #TheBetterIndia [ Education For All, Support Education, Help Children, Monsoon Donation, Donate Now, Community Support, Varanasi, Heroes of Humanity, Changemakers, Real Life Heroes, Donate A Roof Campaign ] 1 698"
            },
            {
                "hashtags": [],
                "mentions": [
                    "@schandrakumar30"
                ],
                "text": "chandra kumar s Ediga @schandrakumar30 \u00b7 1h Nepal landslide tragedy: India's technical assistance sought to search missing passengers Nepal landslide tragedy: India's technical assistance sought to search missing passengers From ainews.net.in 3"
            },
            {
                "hashtags": [
                    "#IndianArmy",
                    "#Engineers"
                ],
                "mentions": [
                    "@adgpi"
                ],
                "text": "ADG PI - INDIAN ARMY @adgpi \u00b7 1h #IndianArmy inducts 40 Heavy Duty Hydraulic Mobile Cranes from M/s Tractor India Limited. These versatile, new age and high-tech Cranes will enhance the operational preparedness of Combat #Engineers and also enable them to undertake arduous tasks during disaster management. Show more 0:27 11 73 405 6.5K"
            },
            {
                "hashtags": [],
                "mentions": [
                    "@clashreport"
                ],
                "text": "Clash Report @clashreport \u00b7 1h Oopsie: Back in 2017, India's first nuclear-powered ballistic missile submarine, INS Arihant, was left inoperative for nearly a year after a hatch was left open, allowing seawater to flood the propulsion compartment. \u2014 The $2.9 billion submarine suffered substantial damage, Show more 3 12 51 9.2K"
            }
        ]
    }*/
    const [predictions, setPredictions] = useState({})
    const [runButtonClicked, setRunButtonClicked] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [tweetCount, setTweetCount] = useState('')
    const generateReportHandler = (async (tweet)=>{
        const res = await axios.post('http://192.168.137.152:8080/api_validation/location_finder_twitter',{
            "tweet":tweet
        },{
            headers:{
                "Content-Type":"application/json"
            }
        });
        const firstResponse = res.data
        const getPopulation = await axios.post('http://192.168.137.152:8080/api_validation/get_population', {
            location_name: firstResponse.locations.location,
            is_urban: firstResponse.locations.is_urban
        });
        console.log(getPopulation.data)
    })
    const runFunction = (async () => {
        const res = await axios.post('http://192.168.137.152:8080/api_twitter/scrape_twitter', {

            "username": username,
            "password": password,
            "tweet_count": parseInt(tweetCount)

        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        setPredictions(res.data)
        console.log(res.data)
        setRunButtonClicked(!runButtonClicked);
    })

    let filter, predictionArray;
    console.log((Object.keys(predictions).length))
    if (Object.keys(predictions).length !== 0) {
        filter = Object.values(predictions)[0]
        predictionArray = Object.values(filter)
    }
    // predictionArray.forEach((ele) => {
    //     console.log(ele)
    // })

    return (
        <div>
            <Dashboard screenTitle="Preventive Disaster Management System">
                <div className="px-4 w-full">
                    <div className="mb-3 py-3 text-xl font-semibold">Account to Use</div>
                    <div className="lg:flex flex-row justify-evenly items-center lg:space-x-5">
                        <div className="mb-3 flex flex-row justify-center items-center space-x-5">
                            <Label>Username</Label>
                            <Input onChange={(e) => setUsername(e.target.value)}></Input>
                        </div>
                        <div className="mb-3 flex flex-row justify-center items-center space-x-5">
                            <Label>Password</Label>
                            <Input onChange={(e) => setPassword(e.target.value)}></Input>
                        </div>
                        <div className="mb-3 flex flex-row justify-center items-center space-x-5">
                            <Label>Tweet Count</Label>
                            <Input onChange={(e) => setTweetCount(e.target.value)}></Input>
                        </div>
                        <div>
                            <Button className="mb-3 px-5 w-full" onClick={runFunction}>Run</Button>
                        </div>
                    </div>
                    {runButtonClicked ? (
                        <div className="px-3 mt-5 h-[440px] overflow-y-auto scrollBar">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Tweet</TableHead>
                                        <TableHead>Prediction</TableHead>
                                        <TableHead>Hashtag</TableHead>
                                        <TableHead className="text-right w-[300px]">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {predictionArray.map((item, key) => (
                                        <TableRow className="h-[150px]" key={key}>
                                            <TableCell className="font-medium">{item.text}</TableCell>
                                            <TableCell>{item.prediction}</TableCell>
                                            <TableCell>Hashtag</TableCell>
                                            <TableCell className="text-right">
                                                <Button className="mr-3">Show more</Button>
                                                <Button onClick={()=>generateReportHandler(item.text)}>Generate Report</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    ) : null}
                </div>
            </Dashboard>
        </div>
    );
})
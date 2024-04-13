





const translation={
    english:{
        maintitle:"Kedah",
        Langkawi:"Langkawi 4 Days 3 Nights Trip",
        View_More:'View More',
        Day1:"Day 1",
        Jetty:"Jetty / Airport Transfer",
        Sunset:"Sunset Cruise with Buffet Dinner (Entry Fee Included)",
        Day2:"Day 2",
        Mangrove:"Mangrove tour featuring Bat Cave, Fish Farm, Eagle Feeding, Shoes Island, Gorilla Mount, Andaman Sea, Crocodile Cave, Snorkelling at Private Island, Oriental Village, Cable Car experience (Includes: Standard Gondola, 3D Art Langkawi, SkyRex, SkyDome and Sky Bidge), Chenang Beach",
        Day3:"Day 3",
        Splash:"Splash",
        Day4:"Day 4",
        ReturntoJetty:"Return to Jetty / Airport",



        About:"About",
        aboutbold:"Us",
        abouttext:"At PRO TEAM HOLIDAY SDN BHD, we are passionate about transforming ordinary journeys into extraordinary adventures. Our mission is to provide you with seamless travel experiences that can save our customers time but can create lasting memories. We take the stress out of planning and let you focus on the joy of exploring the world. Our dedicated team of travel experts works tirelessly to curate seamless travel packages that cater to your unique preferences,interests, and desires.",
  
        Term:"Term and Condition:",
        Timing: "Timing and itinerary may be subject to change based on circumstances.",
        removeitems: "You can add or remove items from the itinerary at your discretion.",
        Prices: "Prices will vary based on changes to the itinerary.",
        Cancellations:"Cancellations made at least 24 hours in advance will receive a full refund.",
        reservation:"If a reservation is cancelled within 24 hours, the deposit will not be refunded but will be retained for a future booking.",
        Photography:"Photography services require a reservation at least 2 months in advance.",
        Extra:"Extra cost 30% from Chinese New Year’s Eve to the fifth day of the Chinese New Year.",
      
    
    },
    chineese:{
        maintitle:"吉打州",
        Langkawi:"兰卡威4天3夜之旅",
        View_More:"查看更多",
        Day1:"第一天",
        Jetty:"码头/机场接送",
        Sunset:"日落巡游含自助晚餐（含入场费）",
        Day2:"第二天",
        Mangrove:"红树林之旅，包括蝙蝠洞、养鱼场、喂鹰、鞋子岛、大猩猩山、安达曼海、鳄鱼洞、私人岛屿浮潜、东方村、缆车体验（包括：标准缆车、兰卡威 3D 艺术、SkyRex、SkyDome 和 Sky比奇），珍南海滩",
        Day3:"第三天",
        Splash:"溅",
        Day4:"第 4 天",
        ReturntoJetty:"返回码头/机场",
        About:"关于",
        aboutbold:"我们",
        abouttext:"在 PRO TEAM HOLIDAY SDN BHD，我们热衷于将平凡的旅程转变为非凡的冒险。我们的使命是为您提供无缝的旅行体验，不仅可以节省客户的时间，还可以创造持久的回忆。我们消除了规划的压力，让您专注于探索世界的乐趣。我们的专业旅行专家团队孜孜不倦地努力策划无缝旅行套餐，以满足您独特的喜好、兴趣和愿望。",
     
        Term:"规则与条例：",
        Timing:"时间和行程可能会根据情况发生变化。",
        removeitems: "您可以自行决定在行程中添加或删除项目。",
        Prices:"价格会根据行程的变化而有所不同。",
        Cancellations:"至少提前 24 小时取消将获得全额退款。",
        reservation:"如果在 24 小时内取消预订，押金将不予退还，但将保留以供将来预订使用。",
        Photography:"摄影服务需要至少提前2个月预约。",
        Extra:"除夕至初五加收30%费用。",
      
    }
}

const setLanguage=(lang)=>{
   
    const elements = document.querySelectorAll('[data-i18n]')
    // console.log(elements)
    elements.forEach((ele)=>{
      
        const translationKey=ele.getAttribute('data-i18n')
        // console.log(translationKey)
        // console.log(translation[lang][translationKey])
        ele.textContent=translation[lang][translationKey]
    })

}
setLanguage("chineese")
const getLang=localStorage.getItem("lang")
console.log(getLang)
setLanguage(getLang)
if(localStorage.getItem("lang")=="english"){
  
    window.top.document.title ="Malaysoa travel made easy"
  }
  else{
    window.top.document.title = "马来西亚旅行变得轻松"
    console.log("hel")
  }






const translation={
    english:{
        maintitle:"Perak",
        title1:"Ipoh 1 Day Trip",
        title2:"Setiawan,Kuala Selangor, Sekinchan, Teluk intan 1 Day Trip",
        View_More:'View More',
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
       
        Kellie:"Kellie's Castle (Ticket)",
        Tasik:"Tasik Cermin (Ticket)",
        Sam:"Sam Poh Tong (Free Entry)",
        Qing:"Qing Xin Ling Leisure (Ticket)",
        Fruits:"Fruits Talk Pomelo Tambun (Free Entry)",
        Window:"Window Shopping at Concubine Lane",
        Famous:"Famous Food in Ipoh",

       Chicken:"Best Chicken Rice",
       YuKong:"Yu Kong Hor (Noodles)",
       Beansprouts:"Beansprouts",
       BabyOctopus:"Baby Octopus",
       Soybean:"Soybean",
       Peanut:"Peanut Candy",
       Kaya:"Kaya Puff",
       AmmanTemple:"Amman Temple, Bukit Rotan",
       BukitMelawati:"Bukit Melawati",
       Sekinchan:"Sekinchan Pantai Redang",
       Paddy:"Paddy Gallery",
       BernamBakery:"Bernam Bakery",
       TelukIntan:"Teluk Intan Menara Condong",
       TelukIntan:"Teluk Intan Queen food street",
       FamousTiger:"Famous Tiger Head BISCUIT",






    },
    chineese:{
        maintitle:"霹雳州",
        title1:"怡保一日游",
        title2:"实兆远,瓜拉雪兰莪,适耕庄,安顺 1日游",
        View_More:"查看更多",
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
    
        Kellie:"凯利城堡（门票）",
        Tasik:"Tasik Cermin (门票)",
        Sam:"三宝堂（免费入场）",
        Qing:"清 ▪ NL ing 休闲（门票）",
        Fruits:"水果谈柚子淡文（免费入场）",
        Window:"二奶巷橱窗购物",
        Famous:"怡保著名美食",
        Chicken:"最好的鸡饭",
        YuKong:"玉江河（面条）",
        Beansprouts:"豆芽",
        BabyOctopus:"章鱼宝宝",
        Soybean:"大豆",
        Peanut:"花生糖",
        Kaya:"咖椰泡芙",
        AmmanTemple:"安曼寺, 武吉罗丹",
        BukitMelawati:"武吉美拉华蒂",
        Sekinchan:"适耕庄热浪岛班台",
        Paddy:"稻田画廊",
        BernamBakery:"伯南面包店",
        TelukIntan:"安顺梅纳拉康东",
        TelukIntan:"安顺皇后美食街",
        FamousTiger:"著名虎头饼干",

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






const translation={
    english:{
        romantictitle:"Romantic Dating",
        socialtitle:"Social Media Hotspot",
       
       About:"About",
        aboutbold:"Us",
        abouttext:"At PRO TEAM HOLIDAY SDN BHD, we are passionate about transforming ordinary journeys into extraordinary adventures. Our mission is to provide you with seamless travel experiences that can save our customers time but can create lasting memories. We take the stress out of planning and let you focus on the joy of exploring the world. Our dedicated team of travel experts works tirelessly to curate seamless travel packages that cater to your unique preferences,interests, and desires.",
      
    },
    chineese:{
        romantictitle:"浪漫约会",
        socialtitle:"社交媒体热点",
       
        About:"关于",
        aboutbold:"我们",
        abouttext:"在 PRO TEAM HOLIDAY SDN BHD，我们热衷于将平凡的旅程转变为非凡的冒险。我们的使命是为您提供无缝的旅行体验，不仅可以节省客户的时间，还可以创造持久的回忆。我们消除了规划的压力，让您专注于探索世界的乐趣。我们的专业旅行专家团队孜孜不倦地努力策划无缝旅行套餐，以满足您独特的喜好、兴趣和愿望。",
        
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

// window.addEventListener(("load"),()=>{
//     setLanguage("chineese")
// })

if(localStorage.getItem("lang")=="english"){
  
    window.top.document.title ="Malaysoa travel made easy"
  }
  else{
    window.top.document.title = "马来西亚旅行变得轻松"
    console.log("hel")
  }
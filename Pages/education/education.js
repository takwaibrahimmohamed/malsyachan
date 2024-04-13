





const translation={
    english:{
        maintitle:"Education",
        title1:"Kuala Lumpur Study Abroad Consultation + Educational Enrollment Agency Program Vehicle Rental",
       View_More:"View More",
        About:"About",
        aboutbold:"Us",
        abouttext:"At PRO TEAM HOLIDAY SDN BHD, we are passionate about transforming ordinary journeys into extraordinary adventures. Our mission is to provide you with seamless travel experiences that can save our customers time but can create lasting memories. We take the stress out of planning and let you focus on the joy of exploring the world. Our dedicated team of travel experts works tirelessly to curate seamless travel packages that cater to your unique preferences,interests, and desires.",
        text1:"Option 1: School Visits Service (2 Schools/Day)",
        text2:"Full translation",
        text3:"private car transportation",
        text4:"school appointment scheduling",
        text5:"translation of documents",
      
        text6:"Option 2: Application Services",
        text7:"Translate Application Materials",
        text8:"Provide Full Guidance On The Application Process",
        text9:"Assist With Visa Processing",
        text10:"Arrange Interviews",
        text11:"Provide Accompanying Consultations",
        text12:"Assist In Selecting Study Options",
        Flexible:"Flexible Timing",
       person4:"4-Person Small Car: MYR 48 per hours",
        person6:"6-Person Medium Car: MYR 68 per hours",
       personBusiness:"6-Person Business Car: MYR 88 per hours",
        Luxury:"5-Person Luxury Business Car: MYR 118 per hours",
    },
    chineese:{
        maintitle:"教育",
        title1:"吉隆坡留学咨询+教育招生机构计划车辆租赁",
        View_More:"查看更多",
        Singapore:"新加坡、东甲、麻坡、马六甲3天2夜之旅",
        About:"关于",
        aboutbold:"我们",
        abouttext:"在 PRO TEAM HOLIDAY SDN BHD，我们热衷于将平凡的旅程转变为非凡的冒险。我们的使命是为您提供无缝的旅行体验，不仅可以节省客户的时间，还可以创造持久的回忆。我们消除了规划的压力，让您专注于探索世界的乐趣。我们的专业旅行专家团队孜孜不倦地努力策划无缝旅行套餐，以满足您独特的喜好、兴趣和愿望。",
        text1:"选项 1：学校参观服务（2 所学校/天）",
        text2:"完整翻译",
        text3:"私家车交通",
        text4:"学校预约安排",
        text5:"文件翻译",
      
        text6:"选项 2：应用程序服务",
        text7:"翻译申请材料",
        text8:"提供申请流程的全面指导",
        text9:"协助签证处理",
        text10:"安排面试",
        text11:"提供陪同咨询",
        text12:"协助选择学习选项",
        Flexible:"灵活的时间安排",
       person4:"4 人小型车：每小时 MYR 48",
        person6:"6 人中型车：每小时 MYR 68",
       personBusiness:"6人商务车：每小时 MYR 88",
        Luxury:"5人豪华商务车：每小时 MYR 118",
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

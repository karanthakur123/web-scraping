const request=require("request-promise");
const cheerio=require("cheerio");
const fs=require("fs");
const json2csv=require("json2csv").Parser;
var arr ={};

const movie ="https://www.amazon.in/Duracell-Alkaline-Battery-Duralock-Technology/dp/B014SZO90Y/ref=sr_1_2_sspa?crid=1ERJXNSLSL5I6&dchild=1&keywords=duracell+battery+aa&qid=1597932842&s=electronics&sprefix=dura%2Celectronics%2C651&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUDZLMTZZMFJPSVFWJmVuY3J5cHRlZElkPUEwNjUwNzc2RkxGVVBIOFg5WUEwJmVuY3J5cHRlZEFkSWQ9QTAyNDIyNDMyNzZCUFpMQjhHMlFIJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==";


(async()=>{
    let imdbData=[]
    const response =await request({
        uri:movie,
        headers:{
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
        
        },
      
        gzip:true,
        deflate:true,
        br:true
    });

    let $=cheerio.load(response)
   
let title2=$('div[class="a-section a-spacing-none"] >h1[class="a-size-large a-spacing-none"]>span[class="a-size-large product-title-word-break"]').text().trim();
let rating=$('span[class="a-declarative"]>a[class="a-link-normal"]>span[class="a-size-base"]').text().trim();
let unavailability=$('div[ class="a-box"]>div[  class="a-box-inner"]>div[class="a-section a-spacing-small a-text-center"]>span[class="a-color-price a-text-bold"]').text().trim();

imdbData.push({
    title2,
    rating,unavailability
    // title,rating,summary,releaseData
   });

const j2cp =new json2csv()
const csv=j2cp.parse(imdbData);
arr=csv;
console.log("arr "+arr);
if(!arr.unavailability)
{
    console.log("available");
}

// console.log("yoyo......." +csv);

fs.writeFileSync("./imdb1.csv",csv,"utf-8")
}
)();

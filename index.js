const request=require("request-promise");
const cheerio=require("cheerio");
const fs=require("fs");
const json2csv=require("json2csv").Parser;
var arr ={};


const movie ="https://www.imdb.com/title/tt0242519/?ref_=fn_al_tt_1";

(async()=>{
    let imdbData=[]
    const response =await request({
        uri:movie,
        headers:{
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
        },
      
        gzip:true
    });

    let $=cheerio.load(response)
   let title=$('div[class="title_wrapper"] >h1').text().trim();
   let rating=$('div[class="ratingValue"]>strong>span').text();
   let summary=$('div[class="summary_text"]').text().trim();
   let releaseData=$('a[title="See more release dates"]').text().trim();

   imdbData.push({
       title,rating,summary,releaseData,
   });

const j2cp =new json2csv()
const csv=j2cp.parse(imdbData);
arr=csv;
console.log("arr "+arr);

console.log("hgvhg" +csv);

fs.writeFileSync("./imdb.csv",csv,"utf-8")
}
)();

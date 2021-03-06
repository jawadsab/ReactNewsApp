import "./NewsContainerStyles.css";

import ArticleCard from "../ArticleCard/ArticleCard";

const Container = () => {
    const articles = [
        {
            "source": {
              "id": "engadget",
              "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "AMC theaters will accept cryptocurrencies beyond Bitcoin",
            "description": "You won't have to stick to Bitcoin if you're determined to pay for your movie ticket with cryptocurrency. AMC chief Adam Aron has revealed his theater chain will also accept Ethereum, Litecoin and Bitcoin Cash when crypto payments are available. He didn't hav…",
            "url": "https://www.engadget.com/amc-theaters-accept-ethereum-litecoin-bitcoin-cash-132642183.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/4a01cb80-16eb-11ec-abfe-c7b840dd48ca",
            "publishedAt": "2021-09-16T13:26:42Z",
            "content": "You won't have to stick to Bitcoin if you're determined to pay for your movie ticket with cryptocurrency. AMC chief Adam Aron has revealed his theater chain will also accept Ethereum, Litecoin and Bi… [+1198 chars]"
          },
          {
            "source": {
              "id": "techcrunch",
              "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "PayPal expands the ability to buy, hold and sell cryptocurrency to the U.K.",
            "description": "PayPal will now allow users outside the U.S. to buy, hold and sell cryptocurrency for the first time. The company announced today the launch of a new service that will allow customers in the U.K. to select between four types of cryptocurrencies — including Bi…",
            "url": "http://techcrunch.com/2021/08/23/paypal-expands-the-ability-to-buy-hold-and-sell-cryptocurrency-to-the-u-k/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/11/GettyImages-887657568.jpg?w=600",
            "publishedAt": "2021-08-23T13:49:45Z",
            "content": "PayPal will now allow users outside the U.S. to buy, hold and sell cryptocurrency for the first time. The company announced today the launch of a new service that will allow customers in the U.K. to … [+4420 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Jon Porter",
            "title": "El Salvador becomes first country to adopt Bitcoin as an official currency",
            "description": "Bitcoin is an official currency of El Salvador alongside the US dollar, after it became the first country to adopt the cryptocurrency as legal tender. The country has purchased 400 bitcoins, or around $20.9 million.",
            "url": "https://www.theverge.com/2021/9/7/22660457/el-salvador-bitcoin-legal-tender-currency-cryptocurrency-chivo-wallet",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/Dhfc5cLJNCuuG46W9mwfEt0dmwE=/0x436:3929x2493/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22831008/1234925847.jpg",
            "publishedAt": "2021-09-07T08:58:53Z",
            "content": "A recently-installed Bitcoin ATM.\r\n\n \n\n As of today, Bitcoin is an official currency of El Salvador alongside the US dollar, after the Central American country became the first to adopt the cryptocur… [+2716 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "El Salvador Buys 400 Bitcoin as Crypto Officially Becomes Currency on Tuesday",
            "description": "The government of El Salvador purchased at least 200 bitcoin recently, ahead of the country officially recognizing bitcoin as a form of legal currency on Tuesday. The purchase brings the government’s total holdings to at least 400, the equivalent of roughly $…",
            "url": "https://gizmodo.com/el-salvador-buys-400-bitcoin-as-crypto-officially-becom-1847627336",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/76d032e0fcc21b55eb71174dc0ac74c2.jpg",
            "publishedAt": "2021-09-07T10:00:00Z",
            "content": "The government of El Salvador purchased at least 200 bitcoin recently, ahead of the country officially recognizing bitcoin as a form of legal currency on Tuesday. The purchase brings the governments … [+3142 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Lifehacker.com"
            },
            "author": "Mike Winters",
            "title": "How to Pay For Your Vacation With Crypto",
            "description": "Retailers are increasingly accepting cryptocurrency for physical items, but did you know you can spend crypto on ephemeral experiences like travel too? As more cryptocurrency holders indicate a willingness to spend, travel retailers are rushing to meet the de…",
            "url": "https://lifehacker.com/how-to-pay-for-your-vacation-with-crypto-1847518942",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a4348cee9b0d852317783c7102377cf9.jpg",
            "publishedAt": "2021-08-19T20:00:00Z",
            "content": "Retailers are increasingly accepting cryptocurrency for physical items, but did you know you can spend crypto on ephemeral experiences like travel too? As more cryptocurrency holders indicate a willi… [+2783 chars]"
          },
          {
            "source": {
              "id": "engadget",
              "name": "Engadget"
            },
            "author": "Daniel Cooper",
            "title": "PayPal brings cryptocurrency trading to the UK",
            "description": "PayPal is bringing the ability to buy, hold and sell cryptocurrencies across to the other side of the pond, the better part of a year after it launched in the US. In a statement, the company said that UK-based users would be able to buy, hold and sell Bitcoin…",
            "url": "https://www.engadget.com/paypal-cryptocurrency-uk-101407842.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-08/bf2cff60-03f9-11ec-99cb-501a3ec6e7a8",
            "publishedAt": "2021-08-23T10:14:07Z",
            "content": "PayPal is bringing the ability to buy, hold and sell cryptocurrencies across to the other side of the pond, the better part of a year after it launched in the US. In a statement, the company said tha… [+850 chars]"
          },
          {
            "source": {
              "id": "bbc-news",
              "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Bitcoin protests in El Salvador against cryptocurrency as legal tender",
            "description": "The demonstrators burn Bitcoin machines, a week after the cryptocurrency became legal tender.",
            "url": "https://www.bbc.co.uk/news/world-latin-america-58579415",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7CA4/production/_120580913_gettyimages-1235276291.jpg",
            "publishedAt": "2021-09-16T00:55:53Z",
            "content": "image captionProtesters held signs reading \"no to Bitcoin\"\r\nThousands of protesters have taken to the streets in El Salvador, angry at the introduction of Bitcoin as its legal tender.\r\nPresident Nayi… [+1352 chars]"
          },
          {
            "source": {
              "id": "bbc-news",
              "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "The real victims of mass crypto-hacks that keep happening",
            "description": "Millions in Bitcoin and other digital coins are being stolen by hackers with victims left in limbo.",
            "url": "https://www.bbc.co.uk/news/technology-58331959",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5F04/production/_120242342_tidypicture.jpg",
            "publishedAt": "2021-08-25T23:21:05Z",
            "content": "By Joe TidyCyber reporter \r\nTaxi driver Chris is obsessively checking his phone for updates.\r\n\"I'm set to lose almost 2,500 euros (£2,100) worth of cryptocurrency coins,\" he says.\r\nChris describes hi… [+6584 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Anneken Tappe",
            "title": "Bitcoin drops below $43,000 on El Salvador's first day using it",
            "description": "It's a volatile day for bitcoin, which briefly fell by about 10% Tuesday — below the $43,000 mark.",
            "url": "https://www.cnn.com/2021/09/07/investing/bitcoin-selloff-crypto-today/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210219081655-02-bitcoin-file-super-tease.jpg",
            "publishedAt": "2021-09-07T17:41:32Z",
            "content": "New York (CNN Business)It's a volatile day for bitcoin, which briefly fell by about 10% Tuesday below the $43,000 mark.\r\nThe drop comes after El Salvador made good on a plan announced in June and ado… [+1279 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "New York Times"
            },
            "author": "Remy Tumin",
            "title": "Extreme Weather, Bitcoin, Spring Gardening: Your Weekend Briefing",
            "description": "Here’s what you need to know about the week’s top stories.",
            "url": "https://www.nytimes.com/2021/09/05/briefing/extreme-weather-bitcoin-spring-gardening.html",
            "urlToImage": "https://static01.nyt.com/images/2021/09/05/multimedia/05weekender-storms-promo/merlin_194189808_c3db593f-b5ff-482a-b95e-082b91849f9c-facebookJumbo.jpg",
            "publishedAt": "2021-09-05T10:14:50Z",
            "content": "8. Were just days into September, and its time to start thinking about your spring garden.\r\nRather than following the common practice of planting and transplanting in spring, Rebecca McMackin, the di… [+494 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Crypto platform Bitso working with El Salvador on Chivo digital wallet - Reuters",
            "description": "Fintech Bitso, a cryptocurrency platform, said on Tuesday it will be the core service provider for Chivo, the bitcoin digital wallet launched in El Salvador as it becomes the first country in the world to <a href=\"https://www.reuters.com/business/finance/el-s…",
            "url": "https://www.reuters.com/technology/crypto-platform-bitso-working-with-el-salvador-chivo-digital-wallet-2021-09-07/",
            "urlToImage": "https://www.reuters.com/resizer/nrP-KTAfCsWqzyMXEkhl8U9ez5o=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QJ5TJE4E45K65B22ENEC7NWOEI.jpg",
            "publishedAt": "2021-09-07T16:38:00Z",
            "content": "A representation of cryptocurrency Bitcoin is seen in this illustration taken August 6, 2021. REUTERS/Dado Ruvic/Illustration/File Photo/File Photo/File Photo/File PhotoSept 7 (Reuters) - Fintech Bit… [+1978 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Guardian"
            },
            "author": "Agencies and staff",
            "title": "PayPal to allow UK users to buy and sell cryptocurrencies",
            "description": "Payment platform offers service for bitcoin, ethereum, litecoin and bitcoin cashPayPal is to allow users in the UK to buy, hold and sell cryptocurrencies through the payment platform for the first time.The firm said it would allow customers to choose from fou…",
            "url": "https://amp.theguardian.com/technology/2021/aug/23/paypal-uk-buy-sell-cryptocurrencies-bitcoin-ethereum-litecoin",
            "urlToImage": "https://i.guim.co.uk/img/media/9cc3755117074a7ad081b2f74a3d5223732e973c/0_300_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=60b96ea8c4342dd260580796b02553dd",
            "publishedAt": "2021-08-23T10:49:35Z",
            "content": "PayPal is to allow users in the UK to buy, hold and sell cryptocurrencies through the payment platform for the first time.\r\nThe firm said it would allow customers to choose from four types of cryptoc… [+3160 chars]"
          },
          
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": "Reuters Editorial",
            "title": "El Salvador beach town hopes to ride bitcoin wave - Reuters",
            "description": "El Zonte, El Salvador, home to 'Bitcoin Beach,' is looking to ride the cryptocurrency wave as bitcoin becomes legal tender in the Central  American country.  Conway G. Gittens reports.",
            "url": "https://www.reuters.com/video/watch/idOVETQ71CB",
            "urlToImage": "https://static.reuters.com/resources/r/?d=20210907&i=OVETQ71CB&r=OVETQ71CB&t=2",
            "publishedAt": "2021-09-07T17:46:01Z",
            "content": "Posted \r\nEl Zonte, El Salvador, home to 'Bitcoin Beach,' is looking to ride the cryptocurrency wave as bitcoin becomes legal tender in the Central American country. Conway G. Gittens reports."
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": "Diego Oré",
            "title": "Bitcoin fever reaches Honduras with first cryptocurrency ATM - Reuters",
            "description": "The first cryptocurrency ATM in Honduras opened this week as bitcoin backers sought to spur demand for virtual assets after neighboring El Salvador became the first country to establish bitcoin as legal tender.",
            "url": "https://www.reuters.com/business/finance/bitcoin-fever-reaches-honduras-with-first-cryptocurrency-atm-2021-08-27/",
            "urlToImage": "https://www.reuters.com/resizer/yNRgg-xK5JYL7WA6wUfsoadS1rE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PHYLK2RW6RI6PGVAFQCQNQ6UEM.jpg",
            "publishedAt": "2021-08-27T19:04:00Z",
            "content": "Aug 27 (Reuters) - The first cryptocurrency ATM in Honduras opened this week as bitcoin backers sought to spur demand for virtual assets after neighboring El Salvador became the first country to esta… [+1733 chars]"
          }
    ]
    return (
        <div className="article__container">
         {

           articles.map((article,index) => {
           const {urlToImage,title,description} = article;
           return (<ArticleCard key={index} >
              <div className="article__image">
                <img src={urlToImage} alt="..." />
              </div>
              <div className="article__content">
                <h3>{title}</h3>
                <p>{description} <br /> <span>Read more</span></p>
              </div>
           </ArticleCard>)
           })
         }
            
        </div>
    )
}

export default Container;
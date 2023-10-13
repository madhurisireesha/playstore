import {Component} from 'react'
import Tabitem  from './Tabitem'
import Appitem from './Appitem'
import './App.css'
const tablist=[
  {
    tabid:"Games",
    displaytext:"Games"
  },
  {
    tabid:"News",
    displaytext:"News"
  },
  {
    tabid:"Social",
    displaytext:"Social"
  },
  {
    tabid:"Food",
    displaytext:"Food"
  },
]
const applist=[
  {
    appid:0,
    appname:"Subway Surfers",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png",
    category:"Games"
  },
  {
    appid:1,
    appname:"Crossy Road'",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png",
    category:"Games"
  },
  {
    appid:2,
    appname:"Super Chef",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png",
    category:"Games"
  },
  {
    appid:3,
    appname:"Angry Birds",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png",
    category:"Games"
  },
  {
    appid:4,
    appname:"Hill Climb 2",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png",
    category:"Games"
  },
  {
    appid:5,
    appname:"Temple Run",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png",
    category:"Games"
  },
  {
    appid:6,
    appname:"Dr. Driving",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png",
    category:"Games"
  },
  {
    appid:7,
    appname:"Smurfs Bubble",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png",
    category:"Games"
  },
  {
    appid:8,
    appname:"Grade Learning",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png",
    category:"Games"
  },
  {
    appid:9,
    appname:"My Talking Tom",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png",
    category:"Games"
  },
  {
    appid:10,
    appname:"Inshorts",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png",
    category:"News"
  },
  {
    appid:11,
    appname:"Way2News",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png",
    category:"News"
  },
  {
    appid:12,
    appname:"Google News",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png",
    category:"News"
  },
  {
    appid:13,
    appname:"Flipboard",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png",
    category:"News"
  },
  {
    appid:14,
    appname:"SmartNews",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png",
    category:"News"
  },
  {
    appid:15,
    appname:"BBC News",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png",
    category:"News"
  },
  {
    appid:16,
    appname:"CNN News",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png",
    category:"News"
  },
  {
    appid:17,
    appname:"Daily Wire",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png",
    category:"News"
  },
  {
    appid:18,
    appname:"AP News",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png",
    category:"News"
  },
  {
    appid:19,
    appname:"News Break",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png",
    category:"News"
  },
  
  {
    appid:20,
    appname:"Instagram",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png",
    category:"Social"
  },
  {
    appid:21,
    appname:"Facebook",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png",
    category:"Social"
  },
  {
    appid:22,
    appname:"Messenger",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png",
    category:"Social"
  },
  {
    appid:23,
    appname:"Whatsapp",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png",
    category:"Social"
  },
  {
    appid:24,
    appname:"Snapchat",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png",
    category:"Social"
  },
  {
    appid:25,
    appname:"Twitter",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png",
    category:"Social"
  },
  {
    appid:26,
    appname:"Pinterest",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png",
    category:"Social"
  },
  {
    appid:27,
    appname:"We Chat",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png",
    category:"Social"
  },
  {
    appid:28,
    appname:"LinkedIn",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png",
    category:"Social"
  },
  {
    appid:29,
    appname:"Telegram",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png",
    category:"Social"
  },
  {
    appid:30,
    appname:"Zomato",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png",
    category:"Food"
  },
  {
    appid:31,
    appname:"Swiggy",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png",
    category:"Food"
  },
  {
    appid:32,
    appname:"Domino's Pizza",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png",
    category:"Food"
  },
  {
    appid:33,
    appname:"'All in One",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png",
    category:"Food"
  },
  {
    appid:34,
    appname:"Instacart",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png",
    category:"Food"
  },
  {
    appid:35,
    appname:"Saucey",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png",
    category:"Food"
  },
  {
    appid:36,
    appname:"Waitr",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png",
    category:"Food"
  },
  {
    appid:37,
    appname:"'Grubhub",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png",
    category:"Food"
  },
  {
    appid:38,
    appname:"Mercato",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png",
    category:"Food"
  },
  {
    appid:39,
    appname:"DOT",
    imageurl:"https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png",
    category:"Food"
  },
  
  
  
]
class App extends Component{
  state={
    activeTabId:tablist[0].tabid,
    searchInput:"",
    
  }
  clickOnActiveTab=(tabvalue)=>{
    this.setState({
      activeTabId:tabvalue
   })}
   onChangeSearchInput=(event)=>{
    this.setState({
      searchInput:event.target.value
    })
   }
   getFilteredapps=()=>{
    const{activeTabId}=this.state
    const filteredapps=applist.filter((getapps)=>(
      getapps.category===activeTabId
    ))
    return filteredapps
     }
     render(){
      const{activeTabId,searchInput,filteredapps}=this.state
      const getapps=this.getFilteredapps()
      
      const searchresults=getapps.filter((eachapp)=>(
        eachapp.appname.toLowerCase().includes(searchInput.toLowerCase())
      ))
  
      return(
        <div className="container">
          <h1>App Store</h1>
          <div className='one'>
          <input type="search" onChange={this.onChangeSearchInput}  value="Search"/>
          </div>
          <div className='two'>
          {tablist.map((tabdetails)=>(
            <Tabitem tabid={tabdetails.tabid} tabdetails={tabdetails} clickOnActiveTab={this.clickOnActiveTab} activeTabId={activeTabId===tabdetails.tabid}/>
          )
          )}
          </div>
          <div className='three'>
          {searchresults.map((appdetails)=>(
            <Appitem appid={appdetails.appid} appdetails={appdetails}/>
          ))}
          </div>
        </div>
      )
     }
  
}
export default App
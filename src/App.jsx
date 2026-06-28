import { Bookmark } from 'lucide-react'
import Card from './component/Card'

const App = () => {

const jobListings = [
  {
    brandLogo: "https://s3-alpha.figma.com/hub/file/2729744958/2a5758d6-4edb-4047-87bb-e6b94dbbbab0-cover.png",
    company: "Google",
    datePosted: "2 days ago",
    post: "Senior Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 95,
    location: "Mountain View, USA",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    company: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 85,
    location: "Menlo Park, USA",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg",
    company: "Apple",
    datePosted: "1 day ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 105,
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651091.jpg",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    location: "Seattle, USA",
  },
  {
    brandLogo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    company: "Netflix",
    datePosted: "7 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 70,
    location: "Los Gatos, USA",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png",
    company: "Microsoft",
    datePosted: "10 days ago",
    post: "Azure DevOps Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: 65,
    location: "Redmond, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS85n77QiM6FSEf8UQ03Vt6uWR6ajRhkPsvDt8IOE3SKAWGHp91_--dew&s=10",
    company: "NVIDIA",
    datePosted: "4 days ago",
    post: "ML Infrastructure Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 110,
    location: "Santa Clara, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpSaXk4A6lQZniEuW0tzeL8TLj40-JVVhwGIPoBSN-laLjwHYu6HplsuQ&s=10",
    company: "OpenAI",
    datePosted: "6 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 120,
    location: "San Francisco, USA",
  },
  {
    brandLogo: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg",
    company: "Salesforce",
    datePosted: "8 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 55,
    location: "San Francisco, USA",
  },
  {
    brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
    company: "Adobe",
    datePosted: "12 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 60,
    location: "San Jose, USA",
  },
];

  return (
    <div className="parent">
      {jobListings.map(function(elem,idx){
        return <div key={idx}>
          <Card brandlogo={elem.brandLogo} company={elem.company} date={elem.datePosted} post={elem.post}
        tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
        </div>
      })}
    </div>
  )
}

export default App

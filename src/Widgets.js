import React from 'react';
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h3>{heading}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Shah Portfolio LinkedIn Completed!", "Top news- 9899 readers")}
      {newsArticle("The Future of Artificial Intelligence: Trends and Predictions", "Top news - 5000 readers")}
      {newsArticle("Unlocking Creativity: Tips and Techniques for Inspiring Innovation", "Top news - 7500 readers")}
      {newsArticle("Navigating the Gig Economy: Pros and Cons for Freelancers", "Top news - 3000 readers")}
      {newsArticle("The Rise of Remote Work: Transforming the Way We Work", "Top news - 10000 readers")}
      {newsArticle("Sustainable Living: Simple Steps for a Greener Future", "Top news - 4000 readers")}
    </div>
    
  )
}

export default Widgets

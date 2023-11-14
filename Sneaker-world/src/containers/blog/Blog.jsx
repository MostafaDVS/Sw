import React from 'react';
import Article from '../../components/article/Article';
import { art1, art2, art3, art4, art5 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="sw__art section__padding" id="blog">
    <div className="sw__art-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are your gateway for it.</h1>
    </div>
    <div className="sw__blog-container">
      <div className="sw__blog-container_groupA">
        <Article imgUrl={art1} date="Sep 20, 2023" text="Classic VANS IS BACK !!" />
      </div>
      <div className="sw__blog-container_groupB">
        <Article imgUrl={art2} date="Sep 26, 2023" text="Brand new AIR JORDANS dropped " />
        <Article imgUrl={art3} date="Sep 30, 2021" text="Red Convers ?" />
        <Article imgUrl={art4} date="Oct 04, 2021" text="NIKE is ready for the winter drop and so are we" />
        <Article imgUrl={art5} date="Oct 10, 2021" text="Black and Yellow AIR ONES never get oudated " />
      </div>
    </div>
  </div>
);

export default Blog;
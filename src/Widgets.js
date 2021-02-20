import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1287863723936239616"} />
        <TwitterTweetEmbed tweetId={"1338462304803942402"} />
        <TwitterTweetEmbed tweetId={"1338451962464002048"} />
        <TwitterTweetEmbed tweetId={"1338130629515415553"} />
        <TwitterTweetEmbed tweetId={"1333791215674740736"} />
        <TwitterTweetEmbed tweetId={"1326847889633632257"} />
        <TwitterTweetEmbed tweetId={"1326847889633632257"} />
      

        

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Austine Blaise"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
}

export default Widgets;

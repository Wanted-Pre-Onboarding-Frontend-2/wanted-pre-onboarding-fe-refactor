import React, { useEffect, useState } from 'react';
import Feed from './Feed';

const Feeds = (props) => {
  const [feedData, setFeedData] = useState(props.data);

  useEffect(() => {
    if (!props.data) {
      return;
    }
    const data = props.data.feeds;

    setFeedData(data);
  }, [props.data]);

  //삭제
  const removeHandler = id => {
    setFeedData(feedData.filter(d => d.id !== id));
  };

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  return (
    <>
      {feedData !== undefined &&
        shuffle(feedData.map((feed, idx) => (
          <Feed
            key={idx}
            feed={feed}
            id={feed.id}
            onRemove={removeHandler}
          />
        )))}
    </>
  );
};

export default Feeds;

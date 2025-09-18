import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const timelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, marks} = item;
  let score = '';
  if (marks) {
    score = (marks / 10 < 1) ? `CGPA: ${marks} / 10` : `Percentile: ${marks} %`;
  }
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
        <span className='flex-1 text-sm sm:flex-none'>{score}</span>
      </div>
      {content}
    </div>
  );
});

timelineItem.displayName = 'TimelineItem';
export default timelineItem;

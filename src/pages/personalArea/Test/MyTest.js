import { Avatar, List, message } from 'antd';
import VirtualList from 'rc-virtual-list';
import { useEffect, useState } from 'react';



const ContainerHeight = 600;
const MyTest = () => {
  const [data, setData] = useState([]);
  const appendData = () => {
 
      setData(data.concat([1,2,3,4,5,6]));
  };
  useEffect(() => {
    appendData();
  }, []);
  const onScroll = (e) => {
    // if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
    //   appendData();
    // }
  };
  return (
    <div style={{margin:200}}>
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item) => (
          <List.Item key={item}>
            <List.Item.Meta
              avatar={<Avatar />}
              title={<a href="https://ant.design">{item}</a>}
              description={"3434"}
            />
            <div>Content</div>
          </List.Item>
        )}
      </VirtualList>
    </List></div>
  );
};
export default MyTest;
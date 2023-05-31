import { Avatar, List, message } from 'antd';
import VirtualList from 'rc-virtual-list';
import { useEffect, useState } from 'react';
import axios from "axios";

import { MDBTypography } from 'mdb-react-ui-kit';


  

const ContainerHeight = 500;
const MyTest = () => {
  const [tests, setTests] = useState([]);
  const appendData = async() => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
      }
    }
    const { data } = await axios.get(`http://localhost:3600/api/achievements/test`, config)
    console.log(data)
    let x=Object.entry(data)
    console.log(x)
    setTests([1,3,3,4,5,6,8]);
  };
  useEffect(() => {
    appendData();
  }, []);

  return (
    <>
   
    <div style={{margin:'10%'}}> 
    <figure className='text-center mb-0'>
    <MDBTypography blockquote  >
      <p>My Test</p>
    </MDBTypography>
    <figcaption className='blockquote-footer mb-0'>
      here you can watch and imporve your tests
    </figcaption>
  </figure>

    <List>
      <VirtualList
        data={tests}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
    
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
    </List></div></>
  );
};
export default MyTest;
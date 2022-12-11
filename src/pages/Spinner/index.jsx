import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';



const Spinner = ({color,size=24}) => {

const antIcon = <LoadingOutlined style={{ fontSize: size ,color:color}} spin />


return <Spin indicator={antIcon} />

};

export default Spinner;
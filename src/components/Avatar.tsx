import { UserOutlined } from '@ant-design/icons';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import React from 'react';

type AvatarType = {
    name:string,
    image:string,
    description:string
}

const Av: React.FC <AvatarType> = ({name,image, description}: AvatarType) => (
    <Avatar
    style={{ width: 200 }}
        />
        
        
          






);

export default Av;


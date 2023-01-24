import React from 'react';
import { Layout, Space, Row, Col, Divider } from 'antd';
import Navigator from '../component/Navigator.js'
import Shape from '../component/Shape.js'

const { Header, Footer, Sider, Content } = Layout;

// const headerStyle: React.CSSProperties = {
//     textAlign: 'center',
//     color: '#fff',
//     height: 100,
//     paddingInline: 50,
//     lineHeight: '100px',
//     backgroundColor: '#7dbcea',
// };

// const contentStyle: React.CSSProperties = {
//     textAlign: 'center',
//     minHeight: 200,
//     lineHeight: '200px',
//     color: '#fff',
//     backgroundColor: '#108ee9',
// };

function SecondPage() {
    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 100]}>
            <Layout style={{ backgroundColor: 'transparent' }}>
                <Navigator />
            </Layout>
            <Layout style={{ backgroundColor: 'transparent' }}>
                <Shape />
            </Layout>
        </Space>
    )
};

export default SecondPage;
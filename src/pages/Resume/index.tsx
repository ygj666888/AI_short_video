import React from 'react'

import {PageContainer,ProTable} from '@ant-design/pro-components'
import  columns_table from './columns'
const Resume:React.FC =()=>{

    return <PageContainer>
        <ProTable  columns={columns_table}  rowKey="key"></ProTable>
    </PageContainer>
}

export default Resume
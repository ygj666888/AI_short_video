import React ,{useState}from 'react'
import {PageContainer,ProForm,
    ProFormCheckbox,
    ProFormRadio,
    ProCard,ProFormText,ProFormTextArea} from '@ant-design/pro-components'
import RcResizeObserver from 'rc-resize-observer';

import {Button,message} from 'antd'

const Ai:React.FC =()=>{


    const [responsive, setResponsive] = useState(false);

    return  <PageContainer>

        <RcResizeObserver
            key="resize-observer"
            onResize={(offset) => {
                setResponsive(offset.width < 596);
            }}
        >
            <ProCard

                split={responsive ? 'horizontal' : 'vertical'}
                bordered
                headerBordered
            >
                <ProCard title="短视频文案" colSpan="50%">
                   <ProForm

                       style={{ margin: 'auto', marginTop: 8, maxWidth: 600 }}
                       layout="vertical"
                       submitter={
                        {
                            searchConfig: {
                                resetText: '重置',
                                submitText: '生成文案',
                            },
                            resetButtonProps: {
                                style: {
                                    // 隐藏重置按钮
                                    display: 'none',
                                },
                            },
                        }
                       }
                       onFinish={(values)=>{
                           console.log(1111)
                           message.success("生成成功")
                       }
                       }
                   >
                       <ProFormText
                           name="text"
                           label="主题"
                           required
                           placeholder="请输入名称"

                       />

                           <ProFormTextArea
                               name="text"
                               label="关键字"
                               placeholder="物流快递,三班倒"
                               required

                           />
                       <ProFormRadio.Group
                           name="radio-group"
                           label="风格"
                            required
                           fieldProps={
                               {
                                   optionType:'button'
                               }

                           }
                           options={[
                               {
                                   label: '新闻稿',
                                   value: 'news',
                               },
                               {
                                   label: '正式',
                                   value: 'b',
                               },
                               {
                                   label: '专业',
                                   value: '通俗易懂',
                               },
                           ]}
                       />
                       <ProFormRadio.Group
                           name="radio-group"
                           label="字数"
                           required
                           fieldProps={
                               {
                                   optionType:'button'
                               }

                           }
                           options={[
                               {
                                   label: '100',
                                   value: 'd',
                               },
                               {
                                   label: '200',
                                   value: 'e',
                               },
                               {
                                   label: '300',
                                   value: 'f',
                               },
                           ]}
                       />
                   </ProForm>
                </ProCard>
                <div >
                    <Button onClick={()=>{
                        message.success("复制成功")
                    }
                    }> 复制 </Button>  <Button onClick={()=>{
                    message.success("生成成功")
                    }
                }> 生成视频 </Button>
                    <ProCard >
                        <div style={{ height: '100%' }}>
                            这是一个简单的文案

                        </div>
                    </ProCard>
                </div>
            </ProCard>
        </RcResizeObserver>
    </PageContainer>
}

export default Ai
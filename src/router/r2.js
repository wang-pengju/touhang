export default [
    {
        path: 'schedule', //home/日程页
        name: 'schedule',
        component: resolve => require(['../views/office/schedule.vue'], resolve)
    },
    {
        path: 'contacts', //home/通讯录页
        name: 'contacts',
        component: resolve => require(['../views/office/Contacts.vue'], resolve)
    },
    {
        path: 'messageShow', //home/消息公告页
        name: 'messageShow',
        component: resolve => require(['../views/office/messageShow.vue'], resolve)
    } ,
    {
        path: '/message/:userId', //home/详情页
        name: 'message',
        component: resolve => require(['../views/assistant/message.vue'], resolve)
    },
]
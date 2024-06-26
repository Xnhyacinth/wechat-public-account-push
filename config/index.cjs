/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe7952f02f042182a',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '3a16e23586033baba2471424c379b1dc',

  PROVINCE: '北京',
  CITY: '石景山',
  TO_NAME: '小庄宝贝儿&大人&夫人&老婆&最爱的人&anyone everyone',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝儿&夫人&老婆&最爱的人&anyone everyone',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o1sO_6lBVWOqRsUs3n2DX9XvzHIE',
      // id: 'o1sO_6gMlAfHuUhBznoKnjtnCw_Q',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'jRcXLp-TyD4CsVMxwf9rRzfeqFQDVmuT3HdtvkyYz4U',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-07',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: 'Xn的宝贝儿', year: '2003', date: '03-07',
        },
        {
          type: '生日', name: 'Zn独属男友', year: '2001', date: '07-04',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '节日', name: '相识两年', year: '2022', date: '04-26',
        // },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-07-15' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-04-26' },
      ],
    },
    
    {
      // 想要发送的人的名字
      name: 'xnhyacinth',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o1sO_6gMlAfHuUhBznoKnjtnCw_Q',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'jRcXLp-TyD4CsVMxwf9rRzfeqFQDVmuT3HdtvkyYz4U',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '我的美丽老婆', year: '2003', date: '03-07',
        },
        {
          type: '生日', name: 'xnhyacinth', year: '2001', date: '07-04',
        },
//         // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '节日', name: '相识两年', year: '2022', date: '04-26',
        // },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-07-15' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-04-26' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'SdFMlMVzjvQPmEPGvlvtqmrYiLvb75P5fbSCxJhw2tk',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o1sO_6gMlAfHuUhBznoKnjtnCw_Q',
    }
  ],

}

module.exports = USER_CONFIG

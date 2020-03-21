import Mock from 'mockjs'

Mock.mock('http://www.qmtech.com/getBannerList', {
  'list|1-10': [
    {
      'id|+1': 1,
      // 'title': Random.cname(),
      'status|1': true
    }
  ]
})
// import
const Mock = require('mockjs')
// 获取mock.Random对象
const Random = Mock.Random
// mock一组数据
const produceNewsData = function () {
  let articles = []
  for (let i = 0; i < 100; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30),
      thumbnail_pic_s: Random.dataImage('300*250', 'mock的图片'),
      author_name: Random.cname(),
      date: Random.date() + '' + Random.time()
    }
    articles.push(newArticleObject)
  }
  return {
    articles: articles
  }
}
Mock.mock('news/api', 'post', produceNewsData)

import request from '../utils/request'

export function getWordCloud() {
  return request({
    url: '/screen/wordcloud',
    method: 'get',
    // params: {icode: 'C2CE489D152F6DD7'}
    params: {icode: '13926EAFCAA16CC3'}
  })
}
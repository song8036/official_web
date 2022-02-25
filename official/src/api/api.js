import request from '@/api/https'

export function apiHome (data) {
  return request({
    url: '/api/home',
    method: 'post',
    data
  })
}

// api/example_list 案例列表 参数 id 所属分类id page 页码 limit 每页记录条数
export function apiExampleList (data) {
  return request({
    url: '/api/example_list',
    method: 'post',
    data
  })
}

export function apiGetExampleInfo (params) {
  return request({
    url: '/api/get_example_info',
    method: 'get',
    params
  })
}


/* api/home 主页
api/example_list 案例列表 参数 id 所属分类id page 页码 limit 每页记录条数
api/get_example_info 案例详情 参数 id 案例的id */

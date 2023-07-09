import request from '@/utils/request'
// 注册接口
export const login = data => {
  return request.post('/user/login', data)
}
export const register = data => {
  return request.post('/user/registered', data)
}
export const swiper = () => {
  return request.get('/home/swiper')
}
export const groups = id => {
  return request.get('/home/groups', id)
}
export const city = () => {
  return request.get('/area/city', {
    params: {
      level: 1
    }
  })
}
export const hot = () => {
  return request.get('/area/hot')
}
export const area = id => {
  return request.get('/area', {
    params: {
      id
    }
  })
}
export const map = id => {
  return request.get('/area/map', {
    params: {
      id
    }
  })
}
export const houses = obj => {
  return request.get('/houses', {
    params: {
      id: obj.id,
      area: obj.area,
      subway: obj.subway,
      rentType: obj.rentType,
      price: obj.price,
      more: obj.more
    }
  })
}
export const maphouses = id => {
  return request.get('/houses', id)
}
export const housesid = id => {
  return request.get('/houses/' + id)
}
export const condition = id => {
  return request.get('/houses/condition', {
    params: {
      id
    }
  })
}
export const user = id => {
  return request.get('/user', id)
}
export const userhouses = body => {
  return request.post('/user/houses', body)
}
export const userhses = () => {
  return request.get('/user/houses', )
}
export const collect = id => {
  return request.post('/user/favorites/' + id)
}
export const delcoll = id => {
  return request.delete('/user/favorites/' + id)
}
export const image = formData => {
  return request.post('/houses/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
export const view = () => {
  return request.get('/houses/image')
}
export const ckcollect = () => {
  return request.get('/user/favorites')
}
export const community = (name, id) => {
  return request.get('/area/community', {
    params: {
      name,
      id
    }
  })
}
export const params = () => {
  return request.get('/houses/params')
}

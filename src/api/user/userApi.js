import axios from 'axios'

export function api_getUser(data) {
    return axios({
      method: "post",
      url: `https://stg.api.deacourse.com/v1/get/member/id`,
      headers: {
        Authorization: `Bearer 3949b1c47a538ac303a5e06d8dc2c5c7580a72f716e1f05aa354d9c136bcd404f85dbb811fe6efbbea1dc09d0c8d36dc7e42fc5eb7960a60425ed93cf280108a86b254a83246e06631140c4f0412b52c83bfa8f4`,
        AccessControlAllowOrigin: true,
        ContentType: "application/json",
        Accept: "application/json",
      },
      data: {
        data: data
      }
    });
}
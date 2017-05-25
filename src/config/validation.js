import Vue from 'vue'
import Validator from 'vue-validator'
Vue.use(Validator)

// 检查手机号码
Vue.validator('tel', (val) => {
  return /^[0-9]{11}$/.test(val)
})

//检查密码是否合格
Vue.validator('pass', function (val) {
 return /^(\w){6,20}$/.test(val)
});


import './css/index.css'
import $ from 'jquery'
console.log($);
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-CN')
console.log(moment().format('dddd'));   
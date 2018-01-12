//combineReducers将多个Reducer合并成一个大的函数，即产生一个整体的reducer函数，
//该函数根据state的key去执行相应的子reducer，并将返回结果合并成一个大的state对象
import { combineReducers } from 'redux'
import home from './home'
import details from './details'

export default combineReducers({
    home,
    details
})

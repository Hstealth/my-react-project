import React,{ Component } from 'react'
import Footer from '../../component/footer/footer'

require('./index.css')

class User extends Component{

    render(){
        return(
            <div className="wrapper">
                个人中心

                <Footer />
            </div>
        )
    }
}
export default User

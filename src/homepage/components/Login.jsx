import React, {useState} from 'react';
import { Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import { Link, Router, Switch, useHistory, Route } from 'react-router-dom';
import Layout from '../../adminpage/layout/LayoutAdmin';

// 
import FormControl from '../../allcomponents/formcontrol/FormControl';
import LayoutAdmin from '../../adminpage/layout/LayoutAdmin';



function Login(props) {

    const [errorTitle, setError] = useState("");


    const adminUser = 
        {
            email: "admin@gmail.com",
            password: "admin123"
        }
    const userAccount = {
        email: "Milen@gmail.com",
        password: "Milen123"
    }


    const history = useHistory();
    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object ({
        email: Yup.string()
        .email('Email không hợp lệ')
        .required('Vui lòng nhập email!'),
        password: Yup.string()
        .min(6, 'Mật khẩu phải lớn hơn 6 chữ số')
        .required('Vui lòng nhập mật khẩu!')
    })
    const onSubmit = values => {
       console.log('data', values)

       if (values.email === adminUser.email && values.password === adminUser.password)
       {
           console.log("Đăng nhập thành công");
           history.push("/admin");
        
           
          
       }
       else if (values.email === userAccount.email && values.password === userAccount.password) {
            console.log("Đăng nhập thành công");
            history.push("/home");
            
       }
       else {
           console.log("Đăng nhập thất bại");
           setError("Vui lòng kiểm tra lại tài khoản!");
           
       }
    }
    
   
    
    return (
        <div className='Login'>       
            <Formik 
                initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={onSubmit}
            >
                { 
                    formik => {
                        return <Form className="formLogin" >
                            <h2 className="formLogin-inner__title">ĐĂNG NHẬP</h2>
                            {(errorTitle != "") ? (<div className="errorTitle">{errorTitle}</div>) : ""}
                            <FormControl 
                                control='input'
                                type='email'
                                label='Email'
                                name='email'
                                

                                />
                            <FormControl 
                                control='input'
                                type='password'
                                label='Password'
                                name='password'
                               
                                />
                            <Link to="/register">
                                    <a className="formLogin__register">Chưa có tài khoản? Đăng Ký ngay!</a>
                            </Link>
                            <button 
                                className="formLogin__btn" 
                                type="submit"
                            >Đăng Nhập</button>
                        </Form>
                }
                }
            </Formik>
        </div>


    )
}

export default Login


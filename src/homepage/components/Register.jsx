import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Field, Form, Formik} from 'formik';

import FormControl from '../../allcomponents/formcontrol/FormControl';


function Register() {

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: ''
    }
    const validationSchema = Yup.object ({
        email: Yup.string().email('Email không hợp lệ!').required('Vui lòng nhập email!'),
        password: Yup.string()
        .min(6, 'Mật khẩu phải lớn hơn 6 chữ số')
        .required('Vui lòng nhập mật khẩu'),
        confirmPassword: Yup.string()
        .min(6, 'Mật khẩu phải lớn hơn 6 chữ số')
        .oneOf([Yup.ref('password'), ''], 'Mật khẩu nhập lại không chính xác')
        .required('Vui lòng nhập mật khẩu!')
    })
    const onSubmit = values => {
        console.log('Form data', values)
        alert("Đăng Ký thành công!")
    }
   
    return <div className="Login">

      <Formik 

            initialValues={initialValues} 
            validationSchema={validationSchema} 
            onSubmit={onSubmit}>
        { 
            formik => {
                return <Form className="formLogin">
                    <h2 className="formLogin-inner__title">ĐĂNG KÝ</h2>
                    {/* Truong hop dang nhap sai */}
                    <FormControl 
                        control='input'
                        type='email'
                        label='Email:'
                        name='email'
                        
                        />
                    <FormControl 
                        control='input'
                        type='password'
                        label='Mật khẩu:'
                        name='password'
                        />
                     <FormControl 
                        control='input'
                        type='password'
                        label='Nhập lại mật khẩu:'
                        name='confirmPassword'
                        />
                    <Link to="/login">
                            <a className="formLogin__logged">Đăng nhập ngay!</a>
                    </Link>
                    <input className="formLogin__btn" type="submit" value="Đăng Ký"  />
                </Form>
        }
        }
    </Formik>
    </div>
        
}

export default Register


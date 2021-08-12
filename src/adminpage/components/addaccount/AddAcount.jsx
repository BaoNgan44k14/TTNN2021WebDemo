import React from 'react'
import * as Yup from 'yup'
import {Form, Formik} from 'formik'

import FormControl from '../../../allcomponents/formcontrol/FormControl'

function AddAccount() {

    // Select
    const radioGender = [
        {key: 'Nam', value: 'nam'},
        {key: 'Nữ', value: 'nữ'}

    ]

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        phone: '',
        address: ''
    }
    const validationSchema = Yup.object ({
        name: Yup.string().required('Nhập tên của bạn!'),
        email: Yup.string()
        .email('Email không hợp lệ')
        .required('Vui lòng nhập email!'),
        password: Yup.string()
        .min(6, 'Mật khẩu phải lớn hơn 6 chữ số')
        .required('Vui lòng nhập mật khẩu!'),
        confirmPassword: Yup.string()
        .min(6, 'Mật khẩu phải lớn hơn 6 chữ số')
        .oneOf([Yup.ref('password'), ''], 'Mật khẩu nhập lại không chính xác')
        .required('Vui lòng nhập mật khẩu!'),
        gender: Yup.string().required('Chọn giới tính của bạn'),
        phone: Yup.string(),
        address: Yup.string()

    })
    const onSubmit = values => {
       console.log(values)
    }
    return (
        <div className='Product-new'>
            <div className="row">
                <div className="col-12">
                    <Formik 
                        initialValues={initialValues} 
                        validationSchema={validationSchema} 
                        onSubmit={onSubmit}
                    >
                        {
                            formik => {
                                return <Form className='New-Product'>
                                    <h2 className="page-header">THÊM MỚI TÀI KHOẢN</h2>
                                    
                                    <FormControl 
                                        control='input'
                                        type='text'
                                        label='Tên'
                                        name='name'
                                    />
                                    <FormControl 
                                        control='input'
                                        type='text'
                                        label='Email'
                                        name='email'
                                    />
                                    <FormControl 
                                        control='input'
                                        type='password'
                                        label='Mật khẩu'
                                        name='password'
                                    />
                                    <FormControl 
                                        control='input'
                                        type='password'
                                        label='Nhập lại mật khẩu'
                                        name='confirmPassword'
                                    />
                                    <FormControl 
                                        control='radio'
                                        label='Giới tính'
                                        name='gender'
                                        options={radioGender}
                                    />
                                    <FormControl 
                                        control='input'
                                        type='text'
                                        label='Số điện thoại'
                                        name='phone'
                                    />
                                    <FormControl 
                                        control='input'
                                        type='text'
                                        label='Địa chỉ'
                                        name='address'
                                    />
                                    <div className="btn__submit">
                                        <button className="btn__submit-button" type="submit">
                                            Lưu
                                        </button>
                                    </div>
                                </Form>
                            }
                        }
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default AddAccount

import React from 'react'
import * as Yup from 'yup'
import {Form, Formik} from 'formik'

import FormControl from '../../../allcomponents/formcontrol/FormControl'

function AddProduct() {

    // Select
    const dropdownColor = [
        {key: 'Chọn màu', value: ''},
        {key: 'Đỏ', value: 'đỏ'},
        {key: 'Vàng', value: 'vàng'},
        {key: 'Cam', value: 'cam'}

    ]

    const dropdownSize = [
        {key: 'Chọn size', value: ''},
        {key: 'S', value: 's'},
        {key: 'M', value: 's'},
        {key: 'L', value: 'm'},
        {key: 'XS', value: 'xs'},
        {key: 'XL', value: 'xl'},

    ]
    // 
    const radioTypeProduct = [
        {key: 'Áo', value: 'Clothes'},
        {key: 'Giày', value: 'Shoe'},
        {key: 'Phụ Kiện', value: 'accessory'}

    ]

    const initialValues = {
        id: '',
        img: '',
        type: '',
        description: '',
        color: '',
        size: '',
        number: '',
        price: ''
    }
    const validationSchema = Yup.object ({
        id: Yup.string().required('Vui lòng nhập mã sản phẩm!'),
        img: Yup.object(),
        type: Yup.string().required('Vui lòng chọn thể loại'),
        description: Yup.string()
        .max(50, 'Mô tả không quá 50 từ')
        .required('Vui lòng mô tả sản phẩm!'),
        color: Yup.string().required('Vui lòng chọn màu'),
        size: Yup.string().required('Vui lòng chọn size!'),
        number: Yup.number().required('Vui lòng nhập số lượng!'),
        price: Yup.number().required('Vui lòng thêm giá sản phẩm!')
    })
    const onSubmit = values => {
       console.log(values)
       alert("Thêm sản phẩm thành công!")
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
                                    <h2 className="page-header">THÊM MỚI SẢN PHẨM</h2>
                                    
                                    <FormControl 
                                        control='input'
                                        type='text'
                                        label='ID Sản phẩm'
                                        name='id'
                                    />
                                    <FormControl 
                                        control='input'
                                        type='file'
                                        label='Hình ảnh'
                                        name='img'
                                    />
                                    <FormControl 
                                        control='radio'
                                        label='Thể loại'
                                        name='type'
                                        options={radioTypeProduct}
                                    />
                                    <FormControl 
                                        control='textarea'
                                        label='Mô tả'
                                        name='description'
                                    />
                                    <FormControl
                                        control='select'
                                        label='Màu sắc'
                                        name='color'
                                        options={dropdownColor}
                                    />
                                    <FormControl 
                                        control='select'
                                        label='Size'
                                        name='size'
                                        options={dropdownSize}
                                    />
                                    <FormControl 
                                        control='input'
                                        type='text'
                                        label='Số lượng'
                                        name='number'
                                    />
                                    <FormControl 
                                        control='input'
                                        type='text'
                                        label='Đơn giá'
                                        name='price'
                                    />
                                    <div className="btn__submit">
                                        <button className="btn__submit-button" 
                                        type="submit"
                                        onClick="alert('Thêm tài khoản thành công!')">
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

export default AddProduct

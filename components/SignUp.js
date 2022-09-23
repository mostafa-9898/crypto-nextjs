
// react icon
import { FaGoogle } from 'react-icons/fa';

// formik
import { useFormik } from 'formik';
import * as Yup from 'yup'

const SignUp = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            accepted: false
        },

        validationSchema: Yup.object({
            name: Yup.string().required('Name is Required!').max(15, 'Name must be less than 15 characters.'),
            email: Yup.string().required('Email is Required!').email('Invalid E-mail adress.'),
            password: Yup.string().required('Password is Required!').min(8, 'Password must be more than 8 characters.'),
            confirmPassword: Yup.string().required('Confirm Password is Required!').oneOf([Yup.ref('password'), ''], 'Password must match.'),
            accepted: Yup.bool().oneOf([true], 'You need to accept the terms and conditions'),
        }),
    })

    return (
        <div>

            <form onSubmit={formik.handleSubmit} className='mt-10 pb-5'>

                <div className='mb-4'>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full p-2 py-3 border rounded-md outline-none
                         bg-gray-50 focus:bg-white focus:border-gray-500 text-[14px]"
                    />
                    {formik.touched.name && formik.errors.name ?
                        <p style={{
                            backgroundColor: '#f42b03', borderRadius: '10px', fontSize: '13px',
                            width: 'max-content', color: 'white', padding: '5px', margin: '0', marginTop: '5px'
                        }}>{formik.errors.name}</p>
                        : null
                    }
                </div>

                <div className='mb-4'>
                    <input
                        type="text"
                        name='email'
                        id='email'
                        placeholder='E-mail'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full p-2 py-3 border rounded-md outline-none
                         bg-gray-50 focus:bg-white focus:border-gray-500 text-[14px]"
                    />
                    {formik.touched.email && formik.errors.email ?
                        <p style={{
                            backgroundColor: '#f42b03', borderRadius: '10px', fontSize: '13px',
                            width: 'max-content', color: 'white', padding: '5px', margin: '0', marginTop: '5px'
                        }}>{formik.errors.email}</p>
                        : null
                    }
                </div>

                <div className='mb-4'>
                    <input
                        type="password"
                        name='password'
                        id='password'
                        placeholder='Password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full p-2 py-3 border rounded-md outline-none
                         bg-gray-50 focus:bg-white focus:border-gray-500 text-[14px]"
                    />
                    {formik.touched.password && formik.errors.password ?
                        <p style={{
                            backgroundColor: '#f42b03', borderRadius: '10px', fontSize: '13px',
                            width: 'max-content', color: 'white', padding: '5px', margin: '0', marginTop: '5px'
                        }}>{formik.errors.password}</p>
                        : null
                    }
                </div>

                <div className='mb-5'>
                    <input
                        type="password"
                        name='confirmPassword'
                        id='confirmPassword'
                        placeholder='Confirm Password'
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full p-2 py-3 border rounded-md outline-none
                         bg-gray-50 focus:bg-white focus:border-gray-500 text-[14px]"
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ?
                        <p style={{
                            backgroundColor: '#f42b03', borderRadius: '10px', fontSize: '13px',
                            width: 'max-content', color: 'white', padding: '5px', margin: '0', marginTop: '5px'
                        }}>{formik.errors.confirmPassword}</p>
                        : null
                    }
                </div>

                <div className='mb-4'>
                    <div className="form-control text-start">
                        <label className="label cursor-pointer flex items-center">
                            <span className="label-text mr-2 text-gray-500 dark:text-gray-200">I accept term of privacy policy</span>
                            <input
                                type="checkbox"
                                name='accepted'
                                id='accepted'
                                className="checkbox w-4 h-4 cursor-pointer"
                                value={formik.values.accepted}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </label>
                    </div>
                    {formik.touched.accepted && formik.errors.accepted ?
                        <p style={{
                            backgroundColor: '#f42b03', borderRadius: '10px', fontSize: '13px',
                            width: 'max-content', color: 'white', padding: '5px', margin: '0', marginTop: '5px'
                        }}>{formik.errors.accepted}</p>
                        : null
                    }
                </div>


                <div className="items-center gap-2 mt-3">

                    <button type='submit' className="w-full mt-2 p-2.5 flex-1 text-white bg-blue-500 rounded-md
                     outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                    >
                        Create
                    </button>

                    <button type='button' className="flex justify-center items-center gap-2 w-full mt-2 p-2.5 text-[14px] flex-1
                     text-blue-500 rounded-md outline-none border ring-offset-2 ring-blue-500 focus:ring-2 dark:bg-gray-300"
                    >
                        Continue with
                        <FaGoogle size={17} />
                    </button>

                </div>



            </form>

        </div>

    );
}

export default SignUp;
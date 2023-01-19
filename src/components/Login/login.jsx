import React from 'react'
// import module from './Login.module.scss'
import { Field, Form } from 'react-final-form'
import {Input} from "../common/FormsControls/FormsControls";
import {composeValidators, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
// import { FORM_ERROR } from "final-form"

const LoginFinalForm = (props) => {
    return (
        <div>
            <Form onSubmit={props.onSubmit}
                  render={({handleSubmit}) => (
                      <form onSubmit={handleSubmit}>
                              <div>
                                      <Field placeholder={'Email'} name={"email"} component ={Input}
                                             validate={composeValidators(required)}/>
                              </div>
                              <div>
                                  <Field placeholder={'Password'} name={"password"} component ={Input}
                                         validate={composeValidators(required)} type={"password"}/>
                              </div>
                              <div>
                                  <Field type={'checkbox'} name={"rememberMe"} component ={Input} /> remember me
                              </div>
                              <div>
                                  <button type="submit">Login</button>
                              </div>
                      </form>
                  )}
            />
        </div>
    )
}

const Login = (props) =>{
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginFinalForm onSubmit={onSubmit}  />
        {/*captchaUrl={props.captchaUrl}*/}
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect( mapStateToProps,  {login} )(Login);


// const LoginFinalForm = ({ onSubmit, captchaUrl }) => {
//     return (
//         <div>
//             <Form
//                 onSubmit={onSubmit}
//                 render={({ handleSubmit, submitError }) => (
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <Field placeholder={'Email'} name={"email"} component={Input} validate={composeValidators(required)} />
//                         </div>
//                         <div>
//                             <Field placeholder={'Password'} name={"password"} component={Input} validate={composeValidators(required)} type={"password"} />
//                         </div>
//                         <div>
//                             <Field type={'checkbox'} name={"rememberMe"} component={Input} /> remember me
//                         </div>
//
//                         {captchaUrl && <img src={captchaUrl} />}
//                         {captchaUrl &&
//                             <div>
//                                 <Field placeholder={'Symbols from image'} name={"captcha"} component={Input} validate={composeValidators(required)} />
//                             </div>
//                         }
//
//                         <div>
//                             <button type="submit">Login</button>
//                         </div>
//                         {submitError && <div className={module.submitError}>{submitError}</div>}
//                     </form>
//                 )}
//             />
//         </div>
//     )
// }
//
// const Login = (props) => {
//     const sleep = ms => new Promise(resolve => setTimeout(resolve, ms)) //это из final form документации
//
//     const onSubmit = async formData => {
//         props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
//         await sleep(300)
//         if (!props.isAuth) {
//             return { [FORM_ERROR]: 'Login Failed' }
//         }
//     }
//
//     if (props.isAuth) {
//         return <Navigate to={"/profile"} />
//     }
//
//     return (
//         <div>
//             <h1>Login</h1>
//             <LoginFinalForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
//         </div>
//     )
// }
//
// const mapStateToProps = (state) => ({
//     captchaUrl: state.auth.captchaUrl,
//     isAuth: state.auth.isAuth
// })
//
// export default connect(mapStateToProps, { login })(Login)
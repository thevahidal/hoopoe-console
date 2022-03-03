import { Form, FormControl } from "react-bootstrap"
import useSetState from 'react-use-setstate'
import { useDispatch } from "react-redux"
import Joi from 'joi'
import { useTheme } from "styled-components"

import { Heading, Text } from "../../components/typography"
import Button from '../../components/button'
import { obtainTokenAPI } from "../../apis/auth"
import { login } from "../../actions/auth"
import { schemaValidator } from "../../utils"

const Login = props => {
    const [state, setState] = useSetState({
        username: '',
        password: '',
        error: {},
        submitLoading: false,
    })

    const dispatch = useDispatch()
    const theme = useTheme()

    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(2)
            .max(30)
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    });

    const handleSubmit = e => {
        e.preventDefault()

        const { value, error, isInvalid } = schemaValidator({
            username: state.username,
            password: state.password,
        }, schema);
        setState({ error });
        if (isInvalid) return;

        setState({ submitLoading: true })
        obtainTokenAPI(value).then(res => {
            const { access, refresh } = res.data
            dispatch(login(access, refresh))
            setState({ submitLoading: false })
        }).catch(err => {
            setState({ submitLoading: false })
        })
    }

    return (
        <>
            <Heading className='mb-5'>Welcome Back!</Heading>
            <Form onSubmit={handleSubmit}>
                <Form.Group
                    className='mb-2'
                >
                    <FormControl
                        placeholder='Username'
                        value={state.username}
                        onChange={e => setState({ username: e.target.value })}
                        isInvalid={state.error.username}
                    />
                    <Form.Control.Feedback type="invalid">
                        {state.error.username}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                    className='mb-4'
                >
                    <FormControl
                        placeholder='Password'
                        type='password'
                        value={state.password}
                        onChange={e => setState({ password: e.target.value })}
                        isInvalid={state.error.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {state.error.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button type='submit' className={'mb-3'} fullWidth={true} variant='dark' color={theme.colors.white}
                    loadingText={'Logging in...'}
                    loading={state.submitLoading}
                >Login</Button>
            </Form>
            <Text type='link' href='/auth/register'>Not a member yet? Sign up here!</Text>
        </>
    )
}

export default Login
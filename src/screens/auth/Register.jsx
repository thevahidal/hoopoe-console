import { Form, FormControl } from "react-bootstrap"
import useSetState from 'react-use-setstate'
import { useDispatch } from "react-redux"
import Joi from 'joi'

import { Heading, Text } from "../../components/typography"
import Button from '../../components/button'
import { registerAPI } from "../../apis/auth"
import { schemaValidator } from "../../utils"
import { login } from "../../actions/auth"

const Register = props => {
    const [state, setState] = useSetState({
        username: '',
        email: '',
        password: '',
        error: {},
        submitLoading: false,
    })

    const dispatch = useDispatch()

    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(2)
            .max(30)
            .required(),

        email: Joi.string()
            .email({ tlds: { allow: false } })
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    });

    const handleSubmit = e => {
        e.preventDefault()

        const { value, error, isInvalid } = schemaValidator({
            username: state.username,
            email: state.email,
            password: state.password,
        }, schema);
        setState({ error });
        if (isInvalid) return;

        setState({ submitLoading: true })
        registerAPI(value).then(res => {
            const { access, refresh } = res.data
            dispatch(login(access, refresh))            
            setState({ submitLoading: false })
        }).catch(err => {
            setState({ submitLoading: false })
        })
    }

    return (
        <>
            <Heading className='mb-5'>Welcome to Hoopoe!</Heading>
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
                    className='mb-2'
                >
                    <FormControl
                        placeholder='Email Address'
                        value={state.email}
                        onChange={e => setState({ email: e.target.value })}
                        isInvalid={state.error.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {state.error.email}
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
                <Button type='submit' className={'mb-3'} fullWidth={true} variant='dark'
                    loading={state.submitLoading}
                >Register</Button>
            </Form>
            <Text type='link' href='/auth/login'>Already a member? Sign in here!</Text>
        </>
    )
}

export default Register
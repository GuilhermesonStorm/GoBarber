import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Button from '../../components/button/index';
import Input from '../../components/input/index';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';

interface SignInFormData {
    email: string,
    password: string,
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { signIn } = useAuth();
    const { addToast } = useToast();

    const handleSubmit = useCallback(async (data: SignInFormData) => { 
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('Digite um endereço de e-mail válido'),
                password: Yup.string()
                    .required('Senha obrigatória')
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            await signIn({
                email: data.email,
                password: data.password,
            });
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const errors = getValidationErrors(error)
                formRef.current?.setErrors(errors)
            }
            
            addToast({
                type: 'success',
                title: 'Erro de autenticação',
                description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
            });
        }
    }, [ signIn, addToast ]);
    return (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarber" />
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Faça seu login</h1>

                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                <Button type="submit">Entrar</Button>
                <a href="forgot">Esqueci minha senha</a>
            </Form>
            <Link to='/signup'>
                <FiLogIn />
                Criar uma conta
            </Link>
        </Content>
        <Background />
            
    </Container>
    )
}

export default SignIn
import React, { useCallback, useRef } from 'react'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import { Container, Content, Background } from './styles'
import Button from '../../components/button/index'
import Input from '../../components/input/index'
import getValidationErrors from '../../utils/getValidationErrors'
import * as Yup from 'yup';
import { Link } from 'react-router-dom';


const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const handleSubmit = useCallback(async (data: object) => { 
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('Digite um endereço de e-mail válido'),
                password: Yup.string()
                    .required('Digite uma senha')
                    .min(6, 'Mínimo de 6 dígitos')
            });
            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (error) {
            // console.log(error)
            
            const errors = getValidationErrors(error)

            formRef.current?.setErrors(errors)
        }
    }, []);
    return (
        <Container>
            <Background />

            <Content>
                <img src={logoImg} alt="GoBarber" />
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input name="name" icon={FiUser} placeholder="Nome" />
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <Link to='/'>
                    <FiArrowLeft />
                    Voltar para o Login
                </Link>
            </Content>
        </Container>
    )
};

export default SignUp;

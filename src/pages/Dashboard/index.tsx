import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Button from '../../components/button/index';
import Input from '../../components/input/index';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import { FiAward, FiCalendar, FiClock } from 'react-icons/fi';


const Dashboard: React.FC = () => {
    const formRef = useRef<FormHandles>(null);


    return (
        <Container>
            <Content>
                <img src={logo} alt='logo' />
                <Form ref={formRef} onSubmit={() => {}}>
                <h1>Cadastre sua aula:</h1>

                <Input name="teacher" id='teacher' icon={FiAward} placeholder="Professor" />
                <Input name="grade" id='grade' placeholder="Aula" />
                <Input name="day" id='day'  icon={FiCalendar} placeholder="Dia da Semana" />
                <Input name="time" id='time'  icon={FiClock} placeholder="Horário" />
                <Button type="submit" >Confirmar</Button>
            </Form>
            </Content>

            <Background />
        </Container>
    )
};

export default Dashboard;

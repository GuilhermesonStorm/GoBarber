import React from 'react';

import { ToastMessage } from '../../hooks/ToastContext'

import { Container } from './styles';
import Toast from './Toasts'

interface ToastContainerProps {
    messages: ToastMessage[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
    return (
    <Container>
        {messages.map((message) => (
            <Toast key={message.id}  message={message} />
        ))}
    </Container>
    );
};

export default ToastContainer;
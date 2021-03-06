import styled from 'styled-components';
import { MdAutorenew } from 'react-icons/md';
import { rotateSpinner } from '../../styles/Animation';

export const Form = styled.form`
	padding: 0 16px;
	margin-bottom: 1rem;
`;
export const Input = styled.input`
	border: 1px solid #ccc;
	border-radius: 3px;
	margin-bottom: 8px;
	padding: 8px 8px;
	display: block;
	width: 100%;
	outline-color: #8d00ff;
	&[disabled] {
		opacity: 0.6;
	}
`;
export const Button = styled.button`
	background: #8d00ff;
	border-radius: 3px;
	color: #fff;
	height: 32px;
	display: block;
	width: 100%;
	text-align: center;
	cursor: pointer;
	&[disabled] {
		opacity: 0.6;
	}
`;

export const FormTitle = styled.h2`
	margin: 8px 0;
`;

export const Error = styled.span`
	font-size: 14px;
	color: red;
`;

export const LoadingIcon = styled(MdAutorenew)`
	${rotateSpinner({ time: '1s', type: 'ease-in-out infinite' })}
`;

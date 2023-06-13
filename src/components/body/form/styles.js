import styled from "styled-components";

const FormSection = styled.section`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const FormContainer = styled.form`
    
    width: 381px;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;
const Inputs = styled.div`
    
    width: 381px;
    display: flex;
    flex-direction: column;
    gap: 26px;
`;
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
`;
const InputLastContainer = styled.div`
    display: flex;
    gap: 20px;
`;
const InputExpContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 170px;
    gap: 10px;
`;
const LabelInput = styled.label`
    
    font-size: 12px;
    font-weight: 500;
    color: #21092F;
`;
const Input = styled.input`
    
    width: 100%;
    height: 45px;
    border-radius: 8px;
    border: 1px solid #DFDEE0;
    font-size: 18px;
    font-weight: 500;
    color: #21092F;
    padding-left: 16px;


    
    
`;
const FormButton = styled.input`
    
    width: 100%;
    height: 53px;
    border-radius: 8px;
    background: #21092F;
    font-size: 18px;
    font-weight: 500;
    color: white;
    border: none;
    
`;


export {FormSection,FormContainer,Input,InputContainer,LabelInput,Inputs,InputLastContainer,InputExpContainer,FormButton};
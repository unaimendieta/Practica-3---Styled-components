import { FormContainer, FormSection, InputContainer, Inputs, LabelInput, Input, InputLastContainer, InputExpContainer, FormButton } from "./styles";

const Form = ({ cardData, setCardData }) => {
	console.log(cardData);
	return (
		<>
            <FormSection>
				<FormContainer>
					<Inputs>
						<InputContainer>
							<LabelInput>Cardholder Name</LabelInput>
							<Input name="name" onChange={e => handleChange(e.target, cardData, setCardData)} placeholder="e.g. Jane Appleseed"></Input>
						</InputContainer>
						<InputContainer>
							<LabelInput>Card Number</LabelInput>
							<Input name="cardNumber" onChange={e => handleChange(e.target, cardData, setCardData)} placeholder="e.g. 1234 5678 9123 0000"></Input>
						</InputContainer>
						<InputLastContainer>
							<InputContainer>
								<LabelInput>Exp. Date (MM/YY)</LabelInput>
								<InputExpContainer>
									<Input name="month" onChange={e => handleChange(e.target, cardData, setCardData)} placeholder="MM"></Input>
									<Input name="year" onChange={e => handleChange(e.target, cardData, setCardData)} placeholder="YY"></Input>
								</InputExpContainer>
								
							</InputContainer>
							<InputContainer>
							<LabelInput>CVC</LabelInput>
							<Input name="cvc" onChange={e => handleChange(e.target, cardData, setCardData)} placeholder="e.g. 123"></Input>
						</InputContainer>
						</InputLastContainer>
					</Inputs>
					<FormButton type="submit" value="Confirm"></FormButton>
				</FormContainer>
			</FormSection> 
            
		</>
	);
};

const handleChange = (input, cardData, setCardData) => {
	setCardData({ ...cardData, [input.name]: input.value });
};
export default Form;
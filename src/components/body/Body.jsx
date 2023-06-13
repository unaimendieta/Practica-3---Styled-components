import { useState } from "react";
import Card from "./card/Card";
import Form from "./form/Form";
import { MainContainer } from "./styles";

const Body = () => {
	
	const [cardData, setCardData] = useState({
		name: 'JANE APPLESEED',
		cardNumber: '0000 0000 0000 0000',
		month: '00',
		year: '00',
		cvc: '000'
	});


	return (
	<>
		<MainContainer>
			<Card cardData={cardData}/>
			<Form
				cardData={cardData}
				setCardData={setCardData}
			/>
		
		</MainContainer>
	</>
	);
};
 export default Body;

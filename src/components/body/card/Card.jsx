import { CARD_DATA } from '../../../constants/card-data';
import { CardContaier, CardCvc, CardNameAndExpContainer, CardNameAndExpText, CardNumberText, CardSection } from "./styles";


const Card = ({cardData}) => {
    const { name, cardNumber, month, year, cvc } = cardData;
	return (
		<>
            <CardSection>
				<CardContaier>
                    <div>
                        <img src="./images/card-logo.svg" alt=""  />
                    </div>
                    <div>
                        <CardNumberText>{cardNumber || CARD_DATA.cardNumber}</CardNumberText>
                        <CardNameAndExpContainer>
                            <CardNameAndExpText>{name || CARD_DATA.name}</CardNameAndExpText>
                            <CardNameAndExpText>{month || CARD_DATA.month}/{year || CARD_DATA.year}</CardNameAndExpText>
                        </CardNameAndExpContainer>
                    </div>
                </CardContaier>
				<CardContaier>
                    <CardCvc>{cvc || CARD_DATA.cvc}</CardCvc>
                </CardContaier>
			</CardSection> 
            
		</>
	);
};

export default Card;
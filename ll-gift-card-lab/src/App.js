import { useEffect, useState } from "react";

function GiftCard() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    setGiftCard(prevState => { return {...prevState, text: 'Your coupon has been used.', valid: false, instructions: 'Please visit our restaurant to renew your gift card.'}})
  }

  return (
    <>
        <h1>
          Gift Card Page
        </h1>
        <h2>
          Customer: {giftCard.firstName} {giftCard.lastName}
        </h2>
        <h3>
          {giftCard.text}
        </h3>
        <p>
          {giftCard.instructions}
        </p>
        {
          giftCard.valid && (
            <button onClick={spendGiftCard}>
              Spend Gift Card
            </button>
          )
        }
    </>
  )
}

function UseEffectExample()  {
  const [toggle, setToggle] = useState(false);
  const clickHandler = () => {
    setToggle(!toggle);
  }

  useEffect(()=>{
    document.title = toggle ? 'Welcome to Little Lemon' : 'Using the useEffect hook'
  }, [toggle])

  return (
    <>
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>
        Toggle Message
      </button>
      {toggle && <h2>Welcom to Little Lemon</h2>}
    </>
  )
}

export default function App() {
  return (
    <div style={{padding: '40px'}}>
      <section>
        <GiftCard />
      </section>
      <section>
        <UseEffectExample />
      </section>
    </div>
  );
}

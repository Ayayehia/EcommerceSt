import Classes from "../assets/Css/DiscountPromoNav.module.css"

const DiscountPromoNav = ({textOne,textTwo,textThree,style}) => {
  return ( 
    <div className={Classes.PromoTextContainer} >
   {/* reusing the component, so I am using props to set different Styling and texts */}
    <div className={`${Classes[style]}`}>
      <p className={Classes.promoText}>{textOne}</p>
      <p className={Classes.promoText}>{textTwo}</p>
    <p className={Classes.promoText}>{textThree}</p>
    </div>
    </div>
  )
}

export default DiscountPromoNav

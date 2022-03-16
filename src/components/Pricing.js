import React from 'react'

const Pricing = () => {
  return (
    <div id="pricing">
      <img src={require("../assets/img/Tarif1.png")} alt="Home" style={{width: '100%'}} />
      <form id="command-form">
        <div>
          <label for="">NOM DE VOTRE ENTREPRISE: </label>
          <input type="text" name="" id="" required/>
        </div>

        <div>
          <label for="">NOM DU CONTACT: </label>
          <input type="text" name="" id="" required/>
        </div>

        <div>
          <label for="">ADRESSE DE FACTURATION: </label>
          <input type="text" name="" id="" required/>
        </div>

        <div>
          <label for="">CP/VILLE: </label>
          <input type="text" name="" id="" required/>
        </div>

        <div>
          <label for="">MAIL (obligatoire): </label>
          <input type="text" name="" id="" required/>
        </div>

        <div>
          <label for="">TELEPHONE: </label>
          <input type="text" name="" id="" required/>
        </div>

        <div>
          <input id="submit" type="submit" value="Finaliser la commande"/>
        </div>
      </form>
      <img src={require("../assets/img/Tarif2.png")} alt="Home" style={{width: '100%'}} />
    </div>
  )
}

export default Pricing
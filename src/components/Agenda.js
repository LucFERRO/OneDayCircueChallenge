import React from 'react'

const Agenda = () => {

  var seats = document.querySelectorAll('input.seats');
  var totalSeats = 0;
  var seatArray = [];

  function updatePrice() {
    totalSeats = 0;
    seatArray = [];
  
    seats.forEach(element => {
      seatArray.push(element.value)
    })

    seatArray.forEach(element => {
      if (element !== '') {
        totalSeats += parseInt(element)
      }
    })

    document.getElementById('reserved-seats').innerText = `${totalSeats}`
    document.getElementById('total-price').innerText = `${totalSeats * 8} €`
  }

  return (
    <div id="reservation">
      <div>
        <div>
          <h1>VENDREDI 22 OCTOBRE</h1>
          <form id="reservation-form">
            <div>
              <p class="hour">9h15</p>
              <label>></label>
              <input type="number" min="0" max="100" class="seats" onChange={updatePrice} required/>
              <p class="dont">Dont</p>
              <input type="number"  required/>
              <p class="fauteuils"> FAUTEUILS ROULANTS</p>
              <label class="A">(A)</label>
            </div>

            <div>
              <p class="hour">13h45</p>
              <label>></label>
              <input type="number" min="0" max="100" class="seats" onChange={updatePrice} required/>
              <p class="dont">Dont</p>
              <input type="number" required/>
              <p class="fauteuils"> FAUTEUILS ROULANTS</p>
              <label class="A">(A)</label>
            </div>

            <div>
              <p class="hour">20h00</p>
              <label>></label>
              <input type="number" min="0" max="100" class="seats" onChange={updatePrice} required/>
              <p class="dont">Dont</p>
              <input type="number" required/>
              <p class="fauteuils"> FAUTEUILS ROULANTS</p>
              <label class="A">(A)</label>
            </div>
          </form>
        </div>
        <div>
        <h1>SAMEDI 23 OCTOBRE</h1>
          <form id="reservation-form">
            <div>
              <p class="hour">13h25</p>
              <label>></label>
              <input type="number" min="0" max="100" class="seats" onChange={updatePrice} required/>
              <p class="dont">Dont</p>
              <input type="number" required/>
              <p class="fauteuils"> FAUTEUILS ROULANTS</p>
              <label class="A">(A)</label>
            </div>

            <div>
              <p class="hour">15h55</p>
              <label>></label>
              <input type="number" min="0" max="100" class="seats" onChange={updatePrice} required/>
              <p class="dont">Dont</p>
              <input type="number" required/>
              <p class="fauteuils"> FAUTEUILS ROULANTS</p>
              <label class="A">(A)</label>
            </div>

            <div>
              <p class="hour">18h25</p>
              <label>></label>
              <input type="number" min="0" max="100" class="seats" onChange={updatePrice} required/>
              <p class="dont">Dont</p>
              <input type="number" required/>
              <p class="fauteuils"> FAUTEUILS ROULANTS</p>
              <label class="A">(A)</label>
            </div>

            <div>
              <p class="hour">20h55</p>
              <label>></label>
              <input type="number" min="0" max="100" class="seats" onChange={updatePrice} required/>
              <p class="dont">Dont</p>
              <input type="number" required/>
              <p class="fauteuils"> FAUTEUILS ROULANTS</p>
              <label class="A">(A)</label>
            </div>
          </form>
        </div>
        <div>
        <h1>DIMANCHE 24 OCTOBRE</h1>
          <form id="reservation-form">
            <div>
              <p class="hour">10h45</p>
              <label>></label>
              <input type="number" min="0" max="100" class="seats" onChange={updatePrice} required/>
              <p class="dont">Dont</p>
              <input type="number" required/>
              <p class="fauteuils"> FAUTEUILS ROULANTS</p>
              <label class="A">(A)</label>
            </div>

            <div>
              <p class="hour">13h45</p>
              <label>></label>
              <input type="number" min="0" max="100" class="seats" onChange={updatePrice} required/>
              <p class="dont">Dont</p>
              <input type="number" required/>
              <p class="fauteuils"> FAUTEUILS ROULANTS</p>
              <label class="A">(A)</label>
            </div>

            <div>
              <p class="hour">16h15</p>
              <label>></label>
              <input type="number" min="0" max="100" class="seats" onChange={updatePrice} required/>
              <p class="dont">Dont</p>
              <input type="number" required/>
              <p class="fauteuils"> FAUTEUILS ROULANTS</p>
              <label class="A">(A)</label>
            </div>

            <div>
              <p class="hour">18h45</p>
              <label>></label>
              <input type="number" min="0" max="100" class="seats" onChange={updatePrice} required/>
              <p class="dont">Dont</p>
              <input type="number" required/>
              <p class="fauteuils"> FAUTEUILS ROULANTS</p>
              <label class="A">(A)</label>
            </div>
          </form>
        </div>
      </div>

      <div>
        <div>
          <h1>>INFOS IMPORTANTES</h1>
          <p>Attention si vous avez plusieurs entités, pensez à remplir plusieurs bons de commance car 1 BON DE COMMANDE = 1 FACTURE</p>
          <p>(A) ATTENTION le nombre de fauteuils roulants est limité à 15 par séance. Merci d'appeler au 03 21 12 18 28 pour connaître les diposnibilités.</p>
        </div>
        <div>
          <h1>>MODE DE REGLEMENT</h1>
          <form id="paiement">
            <div>
              <input type="checkbox" name="cheque" value="cheque"/>
              <label for="cheque">Chèque (à l'ordre de KOMEVENEMENTIEL)</label>
            </div>
            <div>
              <input type="checkbox" name="virement" value="virement"/>
              <label for="virement">CREDIT MUTUEL : FR76 1562 9026 2700 0369 8684 599 qsdqsdqsd</label>
            </div>
            <div>
              <input type="checkbox" name="especes" value="especes" />
              <label for="especes">Espèces (Uniquement chez ICOM Longuenesse)</label>
            </div>
            <div>
              <input type="checkbox" name="mandat" value="mandat" />
              <label for="mandat">Mandat administratif</label>
            </div>
            <div>
              <input type="checkbox" name="vad" value="vad" />
              <label for="vad">VAD</label>
            </div>
          </form>
        </div>
        <div class="total">
          <div>
            <h1>>NBRE TOTAL DE PLACES</h1>
            <h2>(CLASSIQUE + FAUTEUIL ROULANT)</h2>
          </div>
          <span type="number" id="reserved-seats" onChange={updatePrice}></span>
        </div>
        <div class="total">
          <div>
            <h1>>TOTAL TCC A PAYER</h1>
            <h2>(PLACES + FRAIS D'ENVOI)</h2>
          </div>
          <span id="total-price"></span>
        </div>
        <img src={require("../assets/img/NOREFUND.png")} alt="NOREFUND" style={{width: '100%'}} />

      </div>
    </div>
  )
}

export default Agenda
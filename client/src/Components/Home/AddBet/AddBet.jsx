import { useState} from 'react';

import styles from "./AddBet.module.css";

export default function AddBet({ window, handleWindow }) {

    const [selectedOption, setOption] = useState(null);
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState({ value: false, msg: ''});
    const [checked, setCheck] = useState({ homeBet: false, awayBet: false});

    function handleSubmit(e){
        e.preventDefault();

        if(selectedOption){
            if(amount){
                handleClose();
            }else  setError({ value: true, msg: 'No se selecciono un monto'});
        }else setError({ value: true, msg: 'No se selecciono un tipo de apuesta'});
    }

    function handleClose(){
        handleWindow();
        setOption(null)
        setAmount(0);
        setCheck({ homeBet: false, awayBet: false});
        setError({ value: false, msg: ''});
    }

    function handleCheck(e){
      if(e.target.id === 'homeBet') setCheck({ homeBet: true, awayBet: false});
      if(e.target.id === 'awayBet') setCheck({ homeBet: false, awayBet: true});
      setOption(e.target.id)
    }

  return (
    <div class={`${styles.container} ${window ? styles.isActive : null}`}>
      <form className={`${styles.window} ${ error.value ? styles.error : null}`} onSubmit={ handleSubmit }>
        <div className={styles.closeContainer}>
            <button type="button" class="btn-close" aria-label="Close" onClick={ handleClose }></button>
        </div>
        <div className="mb-3">
          <label className="form-label">Elije un monto</label>
          <input className="form-control" type="number" name="amount" value={amount} onChange={ (e) => setAmount(e.target.value) } />
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="typeBet" id="homeBet" checked={checked.homeBet} onClick={handleCheck}/>
          <label class="form-check-label" for="flexRadioDefault1">
            Apuesta al equipo local
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="typeBet" id="awayBet" checked={checked.awayBet} onClick={handleCheck}/>
          <label class="form-check-label" for="flexRadioDefault2">
            Apuesta al equipo visitante
          </label>
        </div>
        { error.value ? <span className={styles.spanError}>{error.msg}</span> : null}
        <button className="btn btn-success" type="submit" >Agregar apuesta</button>
      </form>
    </div>
  );
}
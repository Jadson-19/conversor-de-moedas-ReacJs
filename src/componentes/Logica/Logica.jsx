import { useState, useEffect } from 'react';
import axios from 'axios';

import EUA from "../Images/bandeira_eua.png"
import UE from "../Images/ue_bandeira.jpg"
import reinoUnido from "../Images/bandeira_reino_unido.png"
import BTC from "../Images/bitcoin_image.webp"
// import angola from "../Images/angola_bandeira.png"

const Logica = () => {

  const [moedaSelecionada, setMoedaSelecionada] = useState([]);
  const [inputValor, setInputValor] = useState("");
  const [state, setState] = useState([])
  const [mensagem, setMensagem] = useState("")


  useEffect(() => {

    async function consumirApi() {

      const url = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL')

      setState(url)

    }
    consumirApi();

  }, []);

  function converterMoeda() {

    let DADOS = {

      dolar: state?.data?.USDBRL.ask,
      euro: state?.data?.EURBRL.ask,
      libra: state?.data?.GBPBRL.ask,
      bitcoin: state?.data?.BTCBRL.ask,

    }

    let valorDolar = DADOS.dolar;
    let valorEuro = DADOS.euro;
    let valorLibra = DADOS.libra;
    let valorBitcoin = DADOS.bitcoin;
    let valorReal = 0;

    let moedaConvertida = 0.00;

    console.log("Valor escolhido " + "R$" + inputValor)

    function mensagemFormatada(moedaConvertida) {
      
      console.log("Moeda Convertida " + moedaConvertida)
      setMensagem("O valor " + (valorReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " convertido em " + moedaSelecionada + " é " + moedaConvertida + ".")
    return(
    isNaN(valorReal) ? valorReal = 0 : ""
    )
    }

    valorReal = parseFloat(inputValor)

    console.log('Escolha a moeda estrangeira')

    console.log(moedaSelecionada)
   
    switch (moedaSelecionada) {

      case 'dolar':
        moedaConvertida = valorReal / valorDolar
        mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        break

      case 'euro':
        moedaConvertida = valorReal / valorEuro
        mensagemFormatada(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
        break

      case 'libra':
        moedaConvertida = valorReal / valorLibra
        mensagemFormatada(moedaConvertida.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }))
        break

      case 'bitcoin':
        moedaConvertida = valorReal / valorBitcoin
        mensagemFormatada(parseFloat(moedaConvertida).toFixed(5))
        break

      // case 'Kwanza':
      //     moedaConvertida = valorReal / valorKwanza
      //     mensagemFormatada(parseFloat(moedaConvertida).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }))
      // break

      default:
        setMensagem("Escolha uma moeda estrangeira.")
        console.log("O usuário não procedeu corretamente!")
    }



    if (moedaSelecionada && inputValor == "") {
      setMensagem("Digite um valor antes de escolher uma moeda estrangeira.")
      console.log("O usuário não procedeu corretamente.")
    }
    setInputValor("")
    setMoedaSelecionada("")
return (
    isNaN(moedaConvertida) ? moedaConvertida = 0 : ""
)

  }



   
    return (


        <div className="container">

            <section>

                <div className="painel">

                    <form id="formulario">

                        <input
                            className="valor"
                            name="inputValor"
                            type="number"
                            value={inputValor}
                            onChange={(e) => setInputValor(e.target.value)}
                            placeholder="Valor em Real R$"
                            required
                        /> <br></br>

                        <img id="bandeiraEUA" src={EUA} />
                        <img id="bandeiraUniaoEuropeia" src={UE} />
                        <img id="bandeiraReinoUnido" src={reinoUnido} />
                        <img id="bandeiraBitcoin" src={BTC} /> <br></br><br></br> <br></br><br></br>


                        <select onChange={(e) => setMoedaSelecionada(e.target.value)}>
                            <option></option>
                            <option value="dolar">Dolar</option>
                            <option value="euro">Euro</option>
                            <option value="libra">Libra</option>

                            <option value="bitcoin" >Bitcoin</option>
                        </select><br></br><br></br>



                        {/* <img id="bandeiraAngola" src={angola} /> */}



                        <input
                            className="button"
                            type="button"
                            name="converter"
                            value="CONVERTER"
                            onClick={() => converterMoeda()}
                        />

                    </form>

   <div id="verificarCotacao">
        {mensagem}
      </div>

                </div>

            </section>

        </div>

    )
}

export default Logica;

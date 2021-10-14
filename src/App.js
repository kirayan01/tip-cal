import { Header } from './Styled.components/Header';
import { DisplayBox } from './Styled.components/DisplayBox';
import TipCalc from './Components/TipCalc';
import { useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState('');
  const [divisor, setDiviosr] = useState(1);

  const calculateValues = () => {
    setTotal(parseFloat(bill * (tip / 100) + bill));
  };

  const tipBtnClick = (tip, billAmount, divisor) => {
    setDiviosr(parseInt(divisor));
    setBill(parseFloat(billAmount));
    setTip(parseFloat((tip / 100) * 100));
    console.log((tip / 100) * billAmount);
    calculateValues();
  };

  return (
    <div className='App'>
      <Header>spli</Header>
      <Header>tter</Header>
      <DisplayBox>
        <TipCalc
          handleClick={tipBtnClick}
          bill={bill}
          totalPerPerson={total / divisor}
          groupSize={divisor}
          total={total}
          tip={total - bill}
          percent={tip}
        />
      </DisplayBox>
    </div>
  );
}

export default App;

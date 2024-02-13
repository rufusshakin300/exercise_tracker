
import './App.css';
import { Header } from './compotents/Header';
import { Balance } from './compotents/Balance';
import { IncomeExpenses } from './compotents/IncomeExpenses';
import { TransactionList } from './compotents/TransactionList';
import { AddTransaction } from './compotents/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />

      </div>
      
    </GlobalProvider>
  );
}

export default App;

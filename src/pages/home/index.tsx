// 定义一个数据数组，模拟钱包中的加密货币信息
const cryptoCurrencies = [
  {
    name: 'Basic Attention Token',
    symbol: 'BAT',
    amount: 67.87517775,
    valueInUsd: 18.20
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    amount: 0.06001,
    valueInUsd: 14.24
  },
  {
    name: 'Tether',
    symbol: 'USDT',
    amount: 4.221346,
    valueInUsd: 4.24
  },
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    amount: 0,
    valueInUsd: 0
  },
  {
    name: 'Crypto.com Coin',
    symbol: 'CRO',
    amount: 0,
    valueInUsd: 0
  },
  {
    name: 'MCO',
    symbol: 'MCO',
    amount: 0,
    valueInUsd: 0
  }
];

function Home() {
  const total = cryptoCurrencies.reduce((acc, currency) => acc + currency.valueInUsd, 0);
  return (
    <div>
      <div style={{ margin: '20px', textAlign: 'center' }}>${total}USD</div>
      {cryptoCurrencies.map((currency, index) => (
        <div key={index} style={{ border: '1px solid #ccc', borderRadius:'5px',padding: '10px', margin: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'  }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '20px', height: '20px', background: 'gray', marginRight: '10px' }}></div>
            <span>{currency.name}</span>
          </div>
          <div style={{ textAlign: 'right'}}>
            <p>{currency.amount} {currency.symbol}</p>
            <p style={{color: 'gray',fontSize: '12px' }}>${currency.valueInUsd}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
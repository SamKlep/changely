import CryptoCompare from 'react-crypto-compare'

const HomeScreen = () => {
  return (
    <>
      <h1>Conv3rt</h1>
      <CryptoCompare
        from='USD'
        to='BTC'
        amount={10}
        apikey='407ce028abe941a672ad85f05150bc2b5794946edb2240e32d61e2e64f57d21e'
      />
    </>
  )
}

export default HomeScreen

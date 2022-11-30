const OddEvenResult = ({count}) => {
  return (
    <>
      {count % 2 === 1? 'Even' : 'Odd'}
    </>
  )
}

export default OddEvenResult
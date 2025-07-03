import {useState} from 'react' 

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutal] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    //console.log('good count: ', updatedGood)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutal(updatedNeutral)
    //console.log('neutral count:', updatedNeutral)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    //console.log('bad count:', updatedBad)
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Header text="statistics" />
      <Statistics totals={[good, neutral, bad]} />
    </div>
  )
}

const Header = (props) => <h1>{props.text}</h1>

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
  
const Statistics = (props) => {
  const [good, neutral, bad] = props.totals
  const all = good + neutral + bad
  //console.log(all)
  if (all === 0) return 'No feedback given'

  const average = all ? (good - bad) / all : 0
  const positive = all ? (good / all) * 100 : 0
  return (
    <table>
      <thead></thead>
      <tbody>
        <StatisticsLine text='good' stat={good} />
        <StatisticsLine text='neutral' stat={neutral} />
        <StatisticsLine text='bad' stat={bad} />
        <StatisticsLine text='all' stat={all} />
        <StatisticsLine text='average' stat={average} />
        <StatisticsLine text='positive' stat={`${positive} %`} />
      </tbody>
    </table>
  )
}

const StatisticsLine = ({text, stat}) => 
  <>
    <tr>
      <td>{text}</td>
      <td>{stat}</td>
    </tr>
  </>

export default App
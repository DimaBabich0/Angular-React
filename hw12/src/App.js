import './App.css';
import { getRandomStyle } from './components/Football';
import { ClubInfo } from './components/Football';
import { ClubAchievements } from './components/Football';
import { CurrentTeam } from './components/Football';

import { PersonInfo } from './components/Bio'; 
import { PersonPortrait } from './components/Bio'; 


export default function App()
{
  const style = getRandomStyle();
  const players =
  [
    {name:'1', position:'1'},
    {name:'2', position:'2'},
    {name:'3', position:'3'},
    {name:'4', position:'4'}
  ]

  return (
    <div className="App" >

      <div style={style}>
        <ClubInfo clubName='Барселона' city='Барселона' year='1899' imgURL='https://upload.wikimedia.org/wikipedia/ru/2/24/FC_Barcelona.svg'/>
        <ClubAchievements goldMedals={1} silverMedals={2} bronzeMedals={3} internationalCups={4} nationalCups={5} goals={6}/>
        <CurrentTeam items={players}/>
      </div>

      {/* <div>
        <PersonInfo/>
        <PersonPortrait/>
      </div> */}
    </div>
  );
}
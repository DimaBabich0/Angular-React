const styles =
[
  { 
   	color: '#00203FFF', 
   	backgroundColor: '#ADEFD1FF' 
  },
  { 
   	color: '#101820FF', 
   	backgroundColor: '#FEE715FF' 
  },
  { 
   	color: '#101820FF', 
   	backgroundColor: '#F2AA4CFF' 
  }
];

const styleLogo =
{
  width: '150px',
  height: '150px',
};

export function getRandomStyle ()
{
  return styles[Math.floor(Math.random() * styles.length)];
};

export function ClubInfo(props)
{
  return (
    <div>
      <h2>Футбольный клуб</h2>
      <p>Название: {props.clubName}</p>
      <p>Город: {props.city}</p>
      <p>Основан в: {props.year}</p>
      <p>Логотип:</p>
      <img style={styleLogo} src={props.imgURL}/>
    </div>
  );
}

export function ClubAchievements(props)
{
  return (
    <div>
			<h2>Достижения клуба</h2>
			<ul>
        <li>Медали: {props.goldMedals} золотых, {props.silverMedals} серебренных, {props.bronzeMedals} бронзовых</li>
        <li>Кубки: {props.internationalCups} международных, {props.nationalCups} национальных</li>
        <li>Забитые голы: {props.goals} голов в последнии 10 сезонов</li>
      </ul>
    </div>
  );
}


const ListItem = props =>
{
  const value = props.value;
  return <li>{`${props.name}: (${props.position})`}</li>
}

export function CurrentTeam (props)
{
  return (
    <div>
      <h2>Текущий состав команды</h2>
      <ul>
				{
					props.items.map(item => <ListItem key={item.toString()} name={item.name} position={item.position}/>)
				}
      </ul>
   </div>
  );
}
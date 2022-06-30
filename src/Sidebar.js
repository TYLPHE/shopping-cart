import './styles/Sidebar.css';

function Sidebar(
  {
    tribe,
    setTribe,
    teeth,
    setTeeth,
    health,
    setHealth,
    power,
    setPower,
    cost,
    setCost,
    type,
    setType,
  }
) {

  function Tribe() {
    const types = ['All', 'Avian', 'Canine', 'Hooved', 'Insect', 'Reptile', 'Misc'];
    const arr = [];
    for (let i = 0; i < types.length; i += 1) {
      const div = (
        <div key={types[i]}>
          <input 
            value={tribe}
            checked={tribe === types[i]}
            onChange={() => setTribe(types[i])}
            type={`radio`} 
            id={types[i]} 
            name='tribe'
          />
          <label className={'label-filter'} htmlFor={types[i]}>{types[i]}</label>
        </div>
      )
      arr.push(div);
    }
    return arr;
  }
  
  function Teeth() {
    const types = ['All', 1, 2, 3, 4, 5, 6, 7];
    const arr = [];
    for (let i = 0; i < types.length; i += 1) {
      const div = (
        <div key={`teeth${i}`}>
          <input 
            value={teeth}
            checked={teeth === types[i]}
            onChange={() => setTeeth(types[i])}
            type={`radio`} 
            id={`teeth${i}`} 
            name='teeth' 
          />
          <label className={'label-filter'} htmlFor={`teeth${i}`}>{types[i]}</label>
        </div>
      );
      arr.push(div);
    }
    return arr;
  }
  
  function Health() {
    const types = ['All', 1, 2, 3, 4, 5, 6, 7];
    const arr = [];
    for (let i = 0; i < types.length; i += 1) {
      const div = (
        <div key={`health${i}`}>
          <input
            value={health}
            checked={health === types[i]}
            onChange={() => setHealth(types[i])}
            type={`radio`} 
            id={`health${i}`} 
            name='health' 
          />
          <label className={'label-filter'} htmlFor={`health${i}`}>{types[i]}</label>
        </div>
      );
      arr.push(div);
    }
    return arr;
  }
  
  function Power() {
    const types = ['All', 1, 2, 3, 4, 5, 6, 7];
    const arr = [];
    for (let i = 0; i < types.length; i += 1) {
      const div = (
        <div key={`power${i}`}>
          <input
            value={power}
            checked={power === types[i]}
            onChange={() => setPower(types[i])}
            type={`radio`} 
            id={`power${i}`} 
            name='power' 
          />
          <label className={'label-filter'} htmlFor={`power${i}`}>{types[i]}</label>
        </div>
      );
      arr.push(div);
    }
    return arr;
  }
  
  function Cost() {
    const types = ['All', 1, 2, 3, 4, 5, 6, 7, 8];
    const arr = [];
    for (let i = 0; i < types.length; i += 1) {
      const div = (
        <div key={`cost${i}`}>
          <input
            value={cost}
            checked={cost === types[i]}
            onChange={() => setCost(types[i])}
            type={`radio`} 
            id={`cost${i}`} 
            name='cost' 
          />
          <label className={'label-filter'} htmlFor={`cost${i}`}>{types[i]}</label>
        </div>
      );
      arr.push(div);
    }
    return arr;
  }
  
  function CostType() {
    const types = ['All', 'blood', 'bone'];
    const arr = [];
    for (let i = 0; i < types.length; i += 1) {
      const div = (
        <div key={`costType${i}`}>
          <input
            value={type}
            checked={type === types[i]}
            onChange={() => setType(types[i])}
            type={`radio`} 
            id={`costType${i}`} 
            name='costType'
          />
          <label className={'label-filter'} htmlFor={`costType${i}`}>{types[i]}</label>
        </div>
      );
      arr.push(div);
    }
    return arr;
  }

  function ResetButton() {
    return (
      <button onClick={
        () => {
          setTribe('All')
          setTeeth('All')
          setHealth('All')
          setPower('All')
          setCost('All')
          setType('All')
        }
      }
      >
        Reset filters
      </button>
    );
  }
  return (
    <div className="sidebar">
      <ResetButton />
      <fieldset>
        <legend className='bold'>Tribes</legend>
        <Tribe />
      </fieldset>
      <fieldset>
        <legend className='bold'>Teeth</legend>
        <Teeth />
      </fieldset>
      <fieldset>
        <legend className='bold'>Health</legend>
        <Health />
      </fieldset>
      <fieldset>
        <legend className='bold'>Power</legend>
        <Power />
      </fieldset>
      <fieldset>
        <legend className='bold'>Cost</legend>
        <Cost />
      </fieldset>
      <fieldset>
        <legend className='bold'>Cost Type</legend>
        <CostType />
      </fieldset>
    </div>
  );
};

export default Sidebar

import './styles/Sidebar.css';

function Sidebar(
  {
    tribe,
    setTribe,
    teeth,
    setTeeth,
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
    const types = ['All', 1, 2, 3, 4, 5, 6, 7]
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
    const arr = [];
    for (let i = 0; i <= 7; i += 1) {
      const div = (
        <div key={`health${i}`}>
          <input 
            type={`checkbox`} 
            id={`health${i}`} 
            name='health' 
          />
          <label className={'label-filter'} htmlFor={`health${i}`}>{i}</label>
        </div>
      );
      arr.push(div);
    }
    return arr;
  }
  
  function Power() {
    const arr = [];
    for (let i = 0; i <= 7; i += 1) {
      const div = (
        <div key={`power${i}`}>
          <input 
            type={`checkbox`} 
            id={`power${i}`} 
            name='power' 
          />
          <label className={'label-filter'} htmlFor={`power${i}`}>{i}</label>
        </div>
      );
      arr.push(div);
    }
    return arr;
  }
  
  function Cost() {
    const arr = [];
    for (let i = 0; i <= 8; i += 1) {
      const div = (
        <div key={`cost${i}`}>
          <input 
            type={`checkbox`} 
            id={`cost${i}`} 
            name='cost' 
          />
          <label className={'label-filter'} htmlFor={`cost${i}`}>{i}</label>
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
  return (
    <div className="sidebar">
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

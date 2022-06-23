import './styles/Sidebar.css';

function Tribe() {
  const types = ['Avian', 'Canine', 'Hooved', 'Insect', 'Reptile', 'Miscellaneous'];
  const arr = [];
  for (let i = 0; i < types.length; i += 1) {
    const div = (
      <div>
        <input type={`checkbox`} id={types[i]} name='tribe' />
        <label className={'label-filter'} htmlFor={types[i]}>{types[i]}</label>
      </div>
    )
    arr.push(div);
  }
  return arr;
}

function Teeth() {
  const arr = [];
  for (let i = 0; i <= 7; i += 1) {
    const div = (
      <div>
        <input type={`checkbox`} id={`teeth${i}`} name='teeth' />
        <label className={'label-filter'} htmlFor={`teeth${i}`}>{i}</label>
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
      <div>
        <input type={`checkbox`} id={`health${i}`} name='health' />
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
      <div>
        <input type={`checkbox`} id={`power${i}`} name='power' />
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
      <div>
        <input type={`checkbox`} id={`cost${i}`} name='cost' />
        <label className={'label-filter'} htmlFor={`cost${i}`}>{i}</label>
      </div>
    );
    arr.push(div);
  }
  return arr;
}

function CostType() {
  const types = ['blood', 'bone'];
  const arr = [];
  for (let i = 0; i < types.length; i += 1) {
    const div = (
      <div>
        <input type={`checkbox`} id={`costType${i}`} name='costType' />
        <label className={'label-filter'} htmlFor={`costType${i}`}>{types[i]}</label>
      </div>
    );
    arr.push(div);
  }
  return arr;
}

function Sidebar() {
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

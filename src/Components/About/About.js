import React from 'react';

const About = () => {
    return (
        <div>
            <h2 className='my-2 text-center font-bold text-accent text-2xl'> All About everything is here </h2>
            
            <div className="grid grid-flow-col gap-5 py-6 justify-center auto-cols-max my-12">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{value:'15'}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{value:'10'}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{value:'24'}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{value:'52'}}></span>
    </span>
    sec
  </div>
</div>
  </div>
    );
};

export default About;
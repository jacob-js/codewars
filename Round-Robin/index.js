function roundRobin(jobs, slice, index){
    let clockCycles = 0;
    while(jobs[index] > 0){
      for(const i in jobs){
        if(jobs[index] === 0) break;
        const job = jobs[i];
        if(job >= slice){
          jobs[i] = job - slice;
          clockCycles += slice
        }else{
          jobs[i] = 0;
          clockCycles += job
        };
      }
    };
    return clockCycles;
  }
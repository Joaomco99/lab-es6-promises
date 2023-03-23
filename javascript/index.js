// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

// Iteration 1 - using callbacks
// ...
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          getInstruction("mashedPotatoes", 5, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          });
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
        });
      });
    });
  });
});



// Iteration 2 - using promises
// ...
// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction("steak", 1);
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction("steak", 2);
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction("steak", 3);
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction("steak", 4);
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction("steak", 5);
    })
    .then( (step5) => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
      document.querySelector("#steakImg").removeAttribute("hidden");
      document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
      })

// Iteration 3 using async/await
// ...
const loadInstructions = async (step) => {
  const instruction = await obtainInstruction("broccoli", step);
  document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
};

async function makeBroccoli() {
  for (let i = 0; i < broccoli.length; i++) await loadInstructions(i);

  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli();

// Bonus 2 - Promise all
// ...
const stepsArray = [];
for (let i = 0; i < brusselsSprouts.length; i++) {
  stepsArray.push(obtainInstruction("brusselsSprouts", i));
}

Promise.all(stepsArray).then((step) => {
  step.forEach((step) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
  });

  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});
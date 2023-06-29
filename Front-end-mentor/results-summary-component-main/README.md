
HTML: 


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
  
  <title>Frontend Mentor | Results summary component</title>
  <link rel="stylesheet" href="style.css">
  <link rel="shortcut icon" href="assets/images/favicon-32x32.png" type="image/x-icon">

</head>
<body>

  <div class="result-summary">

    <div class="results-grid-flow"
          data-spacing="large">
          <div class="grid-flow">
      
      <h1 class="title-1">
        Your Result
      </h1>

      <p class="result-score">
        <span>76</span> of 100
      </p>

      
        <p class="result-rank">
          <span>Great</span>
        </p>

        <p class="result-t">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>

    <div class="summary-grid-flow"
          data-spacing="large">

      <h2 class="section-title">Summary</h2>
        
      <div class="grid-flow">

        <div class="summary-item"
             data-item-type="accent-1">

              <div class="flex-group">
                <svg class="summary-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#F55" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"/></svg>

                <h3 class="summary-item-titler"> Reaction </h3>
                  
              </div>

            <p class="summary-score">
              <span>80</span> / 100
            </p>
          </div>

        <div class="summary-item"
             data-item-type="accent-2">
          <div class="flex-group">

            <svg class="summary-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"/><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"/><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"/></svg>

            <h3 class="summary-item-titlem"> Memory </h3>

          </div>

          <p class="summary-score">
            <span>92</span> / 100
          </p>
        </div>

        <div class="summary-item"
             data-item-type="accent-3">
          <div class="flex-group">

            <svg class="summary-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#00BB8F" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"/></svg>

            <h3 class="summary-item-titlev"> Verbal </h3>

          </div>

          <p class="summary-score">
            <span>61</span> / 100
          </p>
        </div>

        <div class="summary-item"
             data-item-type="accent-4">
          <div class="flex-group">

            <svg class="summary-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#1125D6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"/><path stroke="#1125D6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"/></svg>

            <h3 class="summary-item-titlevi"> Visual </h3>

          </div>

          <p class="summary-score">
            <span>72</span> / 100
          </p>
        </div>

        <button class="button1" onclick ="location.href='https://www.frontendmentor.io/profile/Cabr1to';">Continue</button>
        </div>

          

      </div>


    </div>

        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a target="_self" href ="https://github.com/Cabr1to" >Luis Eduardo Brito</a>.
          </div>

</body>

</html>


CSS part:



@font-face {
    font-family: 'HankenGrotesk';
    font-display: swap;
    font-weight: 100 900;
    src: url(assets/fonts/HankenGrotesk-VariableFont_wght.ttf) format('truetype');

    
}

*::after{
    box-sizing: border-box;
}

*{
    margin:0;
    font: inherit;
}

img,
svg{
    display: block;
    max-width: 100%;
}

body{
    font-family: 'HankenGrotesk';
    font-size: 16px;
    
}


@media (min-width:600px){
    body{
        min-height: 100vh;
        display: grid;
        place-items: center;
    }
}   

.title-1{
    font-size: 24px;
    font-weight: bold;
    margin-top: 6px;
    margin-bottom: 1em;
    color: rgba(255, 255, 255, 0.582);

}

.section-title{
    font-size: 24px;
    font-weight: bold;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-right: 17px;
    color: rgba(6, 25, 77, 0.925)
}


.attribution {
    font-size: 12px; text-align: center;
    
}

.attribution a {
    color: rgb(62, 62, 168)
}

.flex-group{
    display: flex;
    align-items: center;
    gap: .5rem;
    flex-wrap: wrap;

}

.grid-flow{
    display: grid;
    align-content: start;
    gap: 1rem;
}

.grid-flow[data-spacing="large"] {
    gap: 2rem;
}

.result-summary{
    max-width: 46rem;
    display: grid;
    
}

@media (min-width: 600px){
    .result-summary{
        margin-inline: 1rem;
        grid-template-columns: 1fr 1fr;
        border-radius: 2rem ;
        overflow: hidden;
        box-shadow: 1px 1px 1rem;
    }


    .results-grid-flow{
        border-radius: 0 0 2rem 2rem;
        padding: 2.5em;
        
    }


}
.results-grid-flow{

    padding: 2.5em;
    color: aliceblue ;
    max-width: 46rem;
    text-align: center;
    background: rgb(45,52,206);
    background: linear-gradient(0deg, rgba(45,52,206,1) 10%, rgba(113,0,255,1) 91%);
    border-radius: 0 0 2rem 2rem;
}

.result-rank span{
    font-size: 2em;
    font-weight: 600;
    color: white;
    
}
.result-t {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.356);
}

.result-score{
    display: grid;
    place-content: center;

    width: 12rem;
    margin-inline: auto;
    margin-bottom: 1em;

    background: rgb(72,1,133);
    background: linear-gradient(0deg, rgba(72,1,133,0.48363095238095233) 5%, rgba(7,10,98,0.7945553221288515) 95%);

    
    aspect-ratio: 1 / 1;
    border-radius: 50%;
}

.result-score span{
    display: block;
    font-size: 4em;
    font-weight: 900;
    line-height: 1;
    color: white;

}

.summary-grid-flow{

    margin: auto;
    align-items: center;

}

.summary-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: .5rem;    
}

.summary-item-titler{
    font-weight: 600;
    color: red;  
}

.summary-item-titlem{
    font-weight: 600;
    color: rgb(255, 166, 0);  
}

.summary-item-titlev{
    font-weight: 600;
    color: rgb(50, 211, 136);  
}

.summary-item-titlevi{
    font-weight: 600;
    color: blue;  
}

.summary-item[data-item-type="accent-1"] {
    background: rgba(255, 0, 0, 0.062);
} 

.summary-item[data-item-type="accent-2"] {
    background: rgba(255, 166, 0, 0.062);
} 

.summary-item[data-item-type="accent-3"] {
    background: rgba(50, 211, 136, 0.075);
} 

.summary-item[data-item-type="accent-4"] {
    background: rgba(0, 0, 255, 0.068);
} 


.summary-score span{
    font-size: 1em;
    font-weight: 900;
    color: rgba(6, 25, 77, 0.925);

}

.summary-score {
    font-size: 1em;
    font-weight: 900;
    color: rgba(6, 25, 77, 0.459);

}

.button1{
    color: rgb(233, 233, 255);
    line-height: 1;

    background: rgb(14,0,255);
    background: linear-gradient(0deg, rgba(14,0,255,1) 0%, rgba(45,52,206,1) 10%); 
    

    padding: 1rem 2rem;
    border: 0;
    margin: 2.2em;
    

    border-radius: 100vw;
    cursor: pointer;
    width: 14em;
    
}

.button1:hover,
.button1:focus-visible{
    
    background: linear-gradient(0deg, rgba(0,93,255,1) 0%, rgba(45,52,206,1) 10%, rgba(64, 18, 158, 0.87) 100%);
}



- Github - [Luis Eduardo Brito](https://github.com/Cabr1to)
- Frontend Mentor - [@Cabr1to](https://www.frontendmentor.io/profile/Cabr1to)




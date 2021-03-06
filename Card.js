class Card  {
    constructor(prop,name){
    this.temp = prop.temp;
    this.cloudsURL = prop.cloudsURL;
    this.howToWear = prop.howToWear;
    this.cloudsDescription = prop.cloudsDescription;
    this.additional = prop.additional;
    this.mainPictureURL = prop.mainPictureURL;
    this.cardName = name;
    this.humidity = prop.humidity;
    this.wind_speed = prop.wind_speed;
    this.wind_deg = prop.wind_deg;
    this.feels_like = prop.feels_like;
    this.pressure = prop.pressure;
    
  }
  

  returnMethod(){
    //создание основной дивки для карточки
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('cardDiv');
    const pCardName = document.createElement('p');
    pCardName.classList.add('descriptionClass');
    cardDiv.appendChild(pCardName);
    pCardName.id = 'pCardClass';
    pCardName.innerHTML = `${this.cardName}`


    //создание дивки для картинки с осадками
    const cloudsDiv = document.createElement('div');
    cloudsDiv.classList.add('inCardDiv');
    const clouds = document.createElement('img');
    clouds.src = this.cloudsURL;
    clouds.style.height = '50px';
    cloudsDiv.appendChild(clouds);
    const cloudsDescription = document.createElement('p');
    cloudsDiv.appendChild(cloudsDescription);
    
    cloudsDescription.innerHTML = `${this.cloudsDescription}`;
    
    //создание дивки для основной картинки 
    const funnyPictureDiv = document.createElement('div');
    funnyPictureDiv.classList.add('inCardDiv');
    const funnyPicture = document.createElement('img');
    funnyPicture.src = this.mainPictureURL;
    funnyPictureDiv.appendChild(funnyPicture);
    funnyPicture.id='funnyPicture';


    //создание дивки для температуры
    let tempDiv = document.createElement('div');
    tempDiv.classList.add('inCardDiv');
    let pTempDiv = document.createElement('p');
    tempDiv.appendChild(pTempDiv);
    pTempDiv.classList.add('descriptionClass');
    pTempDiv.innerHTML = `${this.temp}`;
    
    //создание дивки для доп информации. 

    let additionalInfSpan = document.createElement('span');
    let additionalInfSpanRight = document.createElement('span');
    additionalInfSpan.classList.add('additionalInfSpan');
    additionalInfSpanRight.classList.add('additionalInfSpanRight')
    let additionalContainer = document.createElement('div');
    additionalContainer.classList.add('additionalContainer'); 
    let additionalInfDiv = document.createElement('div');
    additionalInfDiv.classList.add('inCardDiv');
    additionalInfDiv.innerHTML = `${this.additional}`;
    
    let windDirectionImg = `<img src='./imgs/arrow.png' style='transform:rotate(${this.wind_deg}deg)'/>`;
    
    let additionalInfData = [['скорость ветра', this.wind_speed], ['направление ветра', windDirectionImg], ['влажность', this.humidity],
    ['ощущается как', this.feels_like], ['давление', this.pressure]];
    let hiddenDiv = document.createElement('div');
    hiddenDiv.classList.add('hiddenDiv');
    additionalInfDiv.appendChild(hiddenDiv);
    additionalContainer.appendChild(additionalInfSpan);
    additionalContainer.appendChild(additionalInfDiv);
    additionalContainer.appendChild(additionalInfSpanRight);

     for(let n=0;n<additionalInfData.length;n++){
       let newField = document.createElement('div');
       newField.classList.add('newField');
        let newFieldName = document.createElement('span');
        newFieldName.id = 'newFieldName';
        newFieldName.classList.add('newFieldSpan');
        newFieldName.innerHTML = `${additionalInfData[n][0]}`;
        let newFieldValue = document.createElement('span');
        newFieldValue.id = 'newFieldValue';
        newFieldValue.classList.add('newFieldSpan');
        newFieldValue.insertAdjacentHTML('beforeEnd', additionalInfData[n][1]);
        hiddenDiv.appendChild(newField);
        newField.appendChild(newFieldName);
        newField.appendChild(newFieldValue);

     }
     
     additionalContainer.addEventListener('click',function(){
        hiddenDiv.classList.toggle('visible');
        additionalInfSpan.classList.toggle('active');
     })  



    // добавление всех дивок в основную карточки
    cloudsDiv.appendChild(clouds);
    cardDiv.appendChild(cloudsDiv);
    cardDiv.appendChild(funnyPictureDiv);
    cardDiv.appendChild(tempDiv);
    cardDiv.appendChild(additionalContainer);

    
    return cardDiv;
  }
}



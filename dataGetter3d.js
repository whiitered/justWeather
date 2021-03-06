class dataGetter3d {
  constructor(props,skin){
     this.temp_max = Math.round(props.temp.max-273);
     this.temp_min = Math.round(props.temp.min-273);
     this.cloudURL = props.weather[0].icon;
     
     this.humidity = props.humidity;
     this.wind_speed = props.wind_speed;
     this.wind_deg = props.wind_deg;
     this.pressure = Math.round(props.pressure/1.33322387415);
     this.feels_like_day = Math.round(props.feels_like.day-273);
     this.feels_like_night = Math.round(props.feels_like.night-273);
     this.feels_like = (this.feels_like_day + this.feels_like_night)/2;
     
     this.skin = skin;
     
     }
//метод для отрисовки карточки
  returnActualData(){
    let cloudsData = 0;
    let cloudsDescription = '';
    let mainPictureURL = '';

    if(this.feels_like<-30){
      mainPictureURL = `${this.skin}/1.png`
      console.log(this.feels_like)
    }else if(this.feels_like>-31&&this.feels_like<-20){
      mainPictureURL = `${this.skin}/2.png`
      console.log(this.feels_like)
    }else if(this.feels_like>-21&&this.feels_like<-10){
      mainPictureURL = `${this.skin}/3.png`
      console.log(this.feels_like)
    } else if(this.feels_like>-11&&this.feels_like<0){
      mainPictureURL = `${this.skin}/4.png`
      console.log(this.feels_like)
    } else if(this.feels_like>-1&&this.feels_like<10){
      mainPictureURL = `${this.skin}/5.png`
      console.log(this.feels_like)
    } else if(this.feels_like>9&&this.feels_like<20){
      mainPictureURL = `${this.skin}/6.png`
      console.log(this.feels_like)
    } else if(this.feels_like>19&&this.feels_like<30){
        mainPictureURL = `${this.skin}/7.png`
        console.log(this.feels_like)
    }else if(this.feels_like>29&&this.feels_like<50){
          mainPictureURL = `${this.skin}/8.png`
          console.log(this.feels_like)
      } else{mainPictureURL = `${this.skin}/12.png`
      console.log(this.feels_like)}   


    switch(this.cloudURL){
        case '01d':
          cloudsData = './imgs/sunny.png'
          cloudsDescription = 'ясно'
         break
        case '01n':
          cloudsData = './imgs/sunny.png'
          cloudsDescription = 'ясно'
         break 
        case '02d':
          cloudsData = './imgs/sunny.png'
          cloudsDescription = 'малооблачно'
         break
        case '02n':
          cloudsData = './imgs/sunny.png'
          cloudsDescription = 'малооблачно'
         break 
        case '03d':
          cloudsData = './imgs/sunnycloudy.png'
          cloudsDescription = 'переменная облачность'
         break
        
        case '03n':
          cloudsData = './imgs/sunnycloudy.png'
          cloudsDescription = 'переменная облачность'
         break

        case '04d':
          cloudsData = './imgs/cloudy.png'
          cloudsDescription = 'облачно'
         break 

        case '04n':
          cloudsData = './imgs/cloudy.png'
          cloudsDescription = 'облачно'
         break  
        
         case '10d':
          cloudsData = './imgs/rainy.png'
          cloudsDescription = 'дождь'
         break 

        case '10n':
          cloudsData = './imgs/rainy.png'
          cloudsDescription = 'дождь'
         break   
        case '13d':
          cloudsData = './imgs/litsnow.png'
          cloudsDescription = 'снег'
         break   

         case '13n':
          cloudsData = './imgs/litsnow.png'
          cloudsDescription = 'снег'
         break   
 
    }
    let actualData = {
      temp: `${this.temp_max}&deg; /${this.temp_min}&deg;`,
      cloudsURL : cloudsData,
      cloudsDescription: cloudsDescription,
      howToWear: './imgs/sunny.png',
      additional : 'больше данных  ',
      mainPictureURL: mainPictureURL,
      humidity: `${this.humidity}&#37;`,
      feels_like: `${this.feels_like_day}&#176; д. / ${this.feels_like_night}&#176; н.`,
      pressure: `${this.pressure}мм. р/с`,
      wind_speed: `${this.wind_speed}м/с`,
      wind_deg: this.wind_deg
     }
    return actualData;
  }    
}
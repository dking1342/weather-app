export const testForecastData = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1661871600,
      main: {
        temp: 296.76,
        feels_like: 296.98,
        temp_min: 296.76,
        temp_max: 297.87,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 933,
        humidity: 69,
        temp_kf: -1.11,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.62,
        deg: 349,
        gust: 1.18,
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        '3h': 0.26,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-30 15:00:00',
    },
    {
      dt: 1661882400,
      main: {
        temp: 295.45,
        feels_like: 295.59,
        temp_min: 292.84,
        temp_max: 295.45,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 931,
        humidity: 71,
        temp_kf: 2.61,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 1.97,
        deg: 157,
        gust: 3.39,
      },
      visibility: 10000,
      pop: 0.33,
      rain: {
        '3h': 0.57,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-30 18:00:00',
    },
    {
      dt: 1661893200,
      main: {
        temp: 292.46,
        feels_like: 292.54,
        temp_min: 290.31,
        temp_max: 292.46,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 931,
        humidity: 80,
        temp_kf: 2.15,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 2.66,
        deg: 210,
        gust: 3.58,
      },
      visibility: 10000,
      pop: 0.7,
      rain: {
        '3h': 0.49,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-30 21:00:00',
    },
    {
      dt: 1662292800,
      main: {
        temp: 294.93,
        feels_like: 294.83,
        temp_min: 294.93,
        temp_max: 294.93,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 935,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 1.14,
        deg: 17,
        gust: 1.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-04 12:00:00',
    },
  ],
  city: {
    id: 3163858,
    name: 'Zocca',
    coord: {
      lat: 44.34,
      lon: 10.99,
    },
    country: 'IT',
    population: 4593,
    timezone: 7200,
    sunrise: 1661834187,
    sunset: 1661882248,
  },
};

// const data = {cod:"200",message:0,cnt:40,list:[{dt:1717545600,main:{temp:25.33,feels_like:25.82,temp_min:22.91,temp_max:25.33,pressure:1005,sea_level:1005,grnd_level:976,humidity:73,temp_kf:2.42},weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],clouds:{all:83},wind:{speed:4.22,deg:148,gust:9.8},visibility:10000,pop:0.35,rain:{3h:0.44},sys:{pod:"d"},dt_txt:"2024-06-05 00:00:00"},{dt:1717556400,main:{temp:21.51,feels_like:21.96,temp_min:19,temp_max:21.51,pressure:1004,sea_level:1004,"grnd_level":975,"humidity":86,"temp_kf":2.51},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":4.32,"deg":168,"gust":13.54},"visibility":10000,"pop":1,"rain":{"3h":1.14},"sys":{"pod":"n"},"dt_txt":"2024-06-05 03:00:00"},{"dt":1717567200,"main":{"temp":19.4,"feels_like":19.75,"temp_min":19.4,"temp_max":19.4,"pressure":1000,"sea_level":1000,"grnd_level":973,"humidity":90,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":4.67,"deg":176,"gust":13.82},"visibility":10000,"pop":1,"rain":{"3h":0.11},"sys":{"pod":"n"},"dt_txt":"2024-06-05 06:00:00"},{"dt":1717578000,"main":{"temp":18.25,"feels_like":18.66,"temp_min":18.25,"temp_max":18.25,"pressure":998,"sea_level":998,"grnd_level":970,"humidity":97,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":4.53,"deg":186,"gust":10.48},"visibility":10000,"pop":0.66,"rain":{"3h":0.32},"sys":{"pod":"n"},"dt_txt":"2024-06-05 09:00:00"},{"dt":1717588800,"main":{"temp":17.9,"feels_like":18.17,"temp_min":17.9,"temp_max":17.9,"pressure":999,"sea_level":999,"grnd_level":971,"humidity":93,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":5.1,"deg":263,"gust":9.9},"visibility":10000,"pop":0.33,"sys":{"pod":"d"},"dt_txt":"2024-06-05 12:00:00"},{"dt":1717599600,"main":{"temp":18.95,"feels_like":18.99,"temp_min":18.95,"temp_max":18.95,"pressure":999,"sea_level":999,"grnd_level":972,"humidity":80,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":93},"wind":{"speed":5.76,"deg":271,"gust":8.07},"visibility":10000,"pop":0.36,"rain":{"3h":0.28},"sys":{"pod":"d"},"dt_txt":"2024-06-05 15:00:00"},{"dt":1717610400,"main":{"temp":22.1,"feels_like":21.8,"temp_min":22.1,"temp_max":22.1,"pressure":1000,"sea_level":1000,"grnd_level":972,"humidity":55,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":61},"wind":{"speed":5.83,"deg":266,"gust":8.78},"visibility":10000,"pop":0.03,"sys":{"pod":"d"},"dt_txt":"2024-06-05 18:00:00"},{"dt":1717621200,"main":{"temp":23.71,"feels_like":23.57,"temp_min":23.71,"temp_max":23.71,"pressure":999,"sea_level":999,"grnd_level":971,"humidity":55,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":2},"wind":{"speed":6.94,"deg":240,"gust":12.99},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-06-05 21:00:00"},{"dt":1717632000,"main":{"temp":18,"feels_like":17.63,"temp_min":18,"temp_max":18,"pressure":999,"sea_level":999,"grnd_level":971,"humidity":68,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":39},"wind":{"speed":7.64,"deg":259,"gust":15.49},"visibility":10000,"pop":0.29,"rain":{"3h":0.46},"sys":{"pod":"d"},"dt_txt":"2024-06-06 00:00:00"},{"dt":1717642800,"main":{"temp":15.06,"feels_like":14.76,"temp_min":15.06,"temp_max":15.06,"pressure":999,"sea_level":999,"grnd_level":971,"humidity":82,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":87},"wind":{"speed":6.03,"deg":235,"gust":13.66},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-06-06 03:00:00"},{"dt":1717653600,"main":{"temp":14.47,"feels_like":14.14,"temp_min":14.47,"temp_max":14.47,"pressure":999,"sea_level":999,"grnd_level":971,"humidity":83,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":58},"wind":{"speed":5.52,"deg":246,"gust":13.55},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-06-06 06:00:00"},{"dt":1717664400,"main":{"temp":13.53,"feels_like":13.11,"temp_min":13.53,"temp_max":13.53,"pressure":998,"sea_level":998,"grnd_level":970,"humidity":83,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":5.46,"deg":250,"gust":13.51},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-06-06 09:00:00"},{"dt":1717675200,"main":{"temp":13.54,"feels_like":13.01,"temp_min":13.54,"temp_max":13.54,"pressure":999,"sea_level":999,"grnd_level":971,"humidity":79,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":2},"wind":{"speed":6.68,"deg":275,"gust":12.36},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-06-06 12:00:00"},{"dt":1717686000,"main":{"temp":13.88,"feels_like":13.26,"temp_min":13.88,"temp_max":13.88,"pressure":1001,"sea_level":1001,"grnd_level":972,"humidity":74,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":44},"wind":{"speed":7.66,"deg":278,"gust":12.2},"visibility":10000,"pop":0.2,"rain":{"3h":0.15},"sys":{"pod":"d"},"dt_txt":"2024-06-06 15:00:00"},{"dt":1717696800,"main":{"temp":15.31,"feels_like":14.7,"temp_min":15.31,"temp_max":15.31,"pressure":1001,"sea_level":1001,"grnd_level":973,"humidity":69,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":70},"wind":{"speed":8.26,"deg":284,"gust":12.09},"visibility":10000,"pop":0.2,"rain":{"3h":0.31},"sys":{"pod":"d"},"dt_txt":"2024-06-06 18:00:00"},{"dt":1717707600,"main":{"temp":16.23,"feels_like":15.66,"temp_min":16.23,"temp_max":16.23,"pressure":1002,"sea_level":1002,"grnd_level":974,"humidity":67,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":99},"wind":{"speed":7.13,"deg":293,"gust":12.44},"visibility":10000,"pop":1,"rain":{"3h":0.37},"sys":{"pod":"d"},"dt_txt":"2024-06-06 21:00:00"},{"dt":1717718400,"main":{"temp":13.69,"feels_like":13.13,"temp_min":13.69,"temp_max":13.69,"pressure":1003,"sea_level":1003,"grnd_level":975,"humidity":77,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":93},"wind":{"speed":7.19,"deg":291,"gust":12.49},"visibility":10000,"pop":1,"rain":{"3h":0.4},"sys":{"pod":"d"},"dt_txt":"2024-06-07 00:00:00"},{"dt":1717729200,"main":{"temp":12.3,"feels_like":11.31,"temp_min":12.3,"temp_max":12.3,"pressure":1004,"sea_level":1004,"grnd_level":976,"humidity":66,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":70},"wind":{"speed":6.41,"deg":289,"gust":12.72},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-06-07 03:00:00"},{"dt":1717740000,"main":{"temp":10.98,"feels_like":10.04,"temp_min":10.98,"temp_max":10.98,"pressure":1005,"sea_level":1005,"grnd_level":976,"humidity":73,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":84},"wind":{"speed":6.51,"deg":307,"gust":10.99},"visibility":10000,"pop":0.2,"rain":{"3h":0.14},"sys":{"pod":"n"},"dt_txt":"2024-06-07 06:00:00"},{"dt":1717750800,"main":{"temp":8.88,"feels_like":6.07,"temp_min":8.88,"temp_max":8.88,"pressure":1006,"sea_level":1006,"grnd_level":977,"humidity":74,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":51},"wind":{"speed":5.31,"deg":304,"gust":11.21},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-06-07 09:00:00"},{"dt":1717761600,"main":{"temp":9.44,"feels_like":7.2,"temp_min":9.44,"temp_max":9.44,"pressure":1008,"sea_level":1008,"grnd_level":979,"humidity":74,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":29},"wind":{"speed":4.24,"deg":295,"gust":11.2},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-06-07 12:00:00"},{"dt":1717772400,"main":{"temp":13.84,"feels_like":12.95,"temp_min":13.84,"temp_max":13.84,"pressure":1009,"sea_level":1009,"grnd_level":980,"humidity":64,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":8},"wind":{"speed":6.19,"deg":298,"gust":8.2},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-06-07 15:00:00"},{"dt":1717783200,"main":{"temp":15.95,"feels_like":15.22,"temp_min":15.95,"temp_max":15.95,"pressure":1009,"sea_level":1009,"grnd_level":981,"humidity":62,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":32},"wind":{"speed":6.29,"deg":302,"gust":10.28},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-06-07 18:00:00"},{"dt":1717794000,"main":{"temp":19.57,"feels_like":18.91,"temp_min":19.57,"temp_max":19.57,"pressure":1009,"sea_level":1009,"grnd_level":981,"humidity":51,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":49},"wind":{"speed":6.13,"deg":301,"gust":9.88},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-06-07 21:00:00"},{"dt":1717804800,"main":{"temp":17.86,"feels_like":17.4,"temp_min":17.86,"temp_max":17.86,"pressure":1009,"sea_level":1009,"grnd_level":981,"humidity":65,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":41},"wind":{"speed":4.82,"deg":270,"gust":9.08},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-06-08 00:00:00"},{"dt":1717815600,"main":{"temp":14.22,"feels_like":13.73,"temp_min":14.22,"temp_max":14.22,"pressure":1010,"sea_level":1010,"grnd_level":982,"humidity":78,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":33},"wind":{"speed":2.86,"deg":277,"gust":7.25},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-06-08 03:00:00"},{"dt":1717826400,"main":{"temp":14.1,"feels_like":13.58,"temp_min":14.1,"temp_max":14.1,"pressure":1009,"sea_level":1009,"grnd_level":981,"humidity":77,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":62},"wind":{"speed":1.37,"deg":250,"gust":2.32},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-06-08 06:00:00"},{"dt":1717837200,"main":{"temp":12.38,"feels_like":12.21,"temp_min":12.38,"temp_max":12.38,"pressure":1010,"sea_level":1010,"grnd_level":981,"humidity":97,"temp_kf":0},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10n"}],"clouds":{"all":99},"wind":{"speed":2.29,"deg":261,"gust":3.54},"visibility":5810,"pop":1,"rain":{"3h":3.67},"sys":{"pod":"n"},"dt_txt":"2024-06-08 09:00:00"},{"dt":1717848000,"main":{"temp":11.39,"feels_like":11.12,"temp_min":11.39,"temp_max":11.39,"pressure":1009,"sea_level":1009,"grnd_level":981,"humidity":97,"temp_kf":0},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":2.79,"deg":159,"gust":7.22},"visibility":10000,"pop":1,"rain":{"3h":10.4},"sys":{"pod":"d"},"dt_txt":"2024-06-08 12:00:00"},{"dt":1717858800,"main":{"temp":11.72,"feels_like":11.45,"temp_min":11.72,"temp_max":11.72,"pressure":1010,"sea_level":1010,"grnd_level":981,"humidity":96,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":1.27,"deg":109,"gust":2.85},"visibility":10000,"pop":1,"rain":{"3h":2.8},"sys":{"pod":"d"},"dt_txt":"2024-06-08 15:00:00"},{"dt":1717869600,"main":{"temp":13.4,"feels_like":13.12,"temp_min":13.4,"temp_max":13.4,"pressure":1009,"sea_level":1009,"grnd_level":980,"humidity":89,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":1.23,"deg":348,"gust":1.03},"visibility":10000,"pop":1,"rain":{"3h":0.17},"sys":{"pod":"d"},"dt_txt":"2024-06-08 18:00:00"},{"dt":1717880400,"main":{"temp":18.83,"feels_like":18.49,"temp_min":18.83,"temp_max":18.83,"pressure":1008,"sea_level":1008,"grnd_level":980,"humidity":66,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":58},"wind":{"speed":3.35,"deg":315,"gust":5.49},"visibility":10000,"pop":0.29,"rain":{"3h":0.12},"sys":{"pod":"d"},"dt_txt":"2024-06-08 21:00:00"},{"dt":1717891200,"main":{"temp":17.25,"feels_like":17.09,"temp_min":17.25,"temp_max":17.25,"pressure":1008,"sea_level":1008,"grnd_level":980,"humidity":79,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":49},"wind":{"speed":3.46,"deg":286,"gust":6.75},"visibility":9647,"pop":0.65,"rain":{"3h":0.47},"sys":{"pod":"d"},"dt_txt":"2024-06-09 00:00:00"},{"dt":1717902000,"main":{"temp":13.41,"feels_like":13.18,"temp_min":13.41,"temp_max":13.41,"pressure":1009,"sea_level":1009,"grnd_level":981,"humidity":91,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":11},"wind":{"speed":3.46,"deg":289,"gust":8.92},"visibility":10000,"pop":0.52,"rain":{"3h":0.3},"sys":{"pod":"n"},"dt_txt":"2024-06-09 03:00:00"},{"dt":1717912800,"main":{"temp":11.77,"feels_like":11.38,"temp_min":11.77,"temp_max":11.77,"pressure":1010,"sea_level":1010,"grnd_level":982,"humidity":91,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":7},"wind":{"speed":2.63,"deg":321,"gust":4.2},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-06-09 06:00:00"},{"dt":1717923600,"main":{"temp":10.45,"feels_like":9.74,"temp_min":10.45,"temp_max":10.45,"pressure":1010,"sea_level":1010,"grnd_level":981,"humidity":84,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":19},"wind":{"speed":2.41,"deg":313,"gust":3.51},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-06-09 09:00:00"},{"dt":1717934400,"main":{"temp":12.3,"feels_like":11.7,"temp_min":12.3,"temp_max":12.3,"pressure":1011,"sea_level":1011,"grnd_level":983,"humidity":81,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":42},"wind":{"speed":2.28,"deg":280,"gust":4.19},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-06-09 12:00:00"},{"dt":1717945200,"main":{"temp":18.16,"feels_like":17.65,"temp_min":18.16,"temp_max":18.16,"pressure":1011,"sea_level":1011,"grnd_level":983,"humidity":62,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":73},"wind":{"speed":3.07,"deg":277,"gust":4.73},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-06-09 15:00:00"},{"dt":1717956000,"main":{"temp":20.9,"feels_like":20.51,"temp_min":20.9,"temp_max":20.9,"pressure":1011,"sea_level":1011,"grnd_level":982,"humidity":56,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":82},"wind":{"speed":5.05,"deg":294,"gust":6.03},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-06-09 18:00:00"},{"dt":1717966800,"main":{"temp":21.12,"feels_like":20.78,"temp_min":21.12,"temp_max":21.12,"pressure":1009,"sea_level":1009,"grnd_level":982,"humidity":57,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":28},"wind":{"speed":4.31,"deg":305,"gust":4.78},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-06-09 21:00:00"}],"city":{"id":5244080,"name":"Appleton","coord":{"lat":44.2619,"lon":-88.4154},"country":"US","population":72623,"timezone":-18000,"sunrise":1717495886,"sunset":1717551183}}

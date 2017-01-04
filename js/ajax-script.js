$(function() {


	var APPID = "f37b2ffefd3e2e8e1a7f4da76b350d1e";


			/*Функція прогоди на добу*/
		function forecast_1days(city){
		$.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=' + APPID, function(data) {
			$('#city').html(city);
			$('#div_1days>*').remove();
			for(var i=0; i<8; i++){
				$('#div_1days').append('<div id="'+i+'"><p><span id="date_1days' + i + '"></span></p><p><b><span id="time_1days' + i + '"></span></b></p><p><img id="cloudimg_1days' + i + '"></p><p>Тем-ра: <span id="temp_1days' + i + '"></span>&#8451;</p><p>Тиск: <span id="pressure_1days' + i + '"></span> hPa</p></div>')
				$('#cloudimg_1days'+ i).attr('src', 'http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png');
				var date = data.list[i].dt_txt
				$('#time_1days'+ i).html(date.substring(11, date.length - 3));
				$('#date_1days'+ i).html(date.substring(0, date.length - 9));
				var temp= data.list[i].main.temp - 273.15;
				$('#temp_1days'+ i).html(temp.toFixed(0) );
				$('#pressure_1days'+ i).html(data.list[i].main.pressure);
			}
		}, 'json').done(function() {
			console.log('Request completed successfully');
		}).fail(function() {
			console.log('Request is failure');
		});
		}
		/*Кінець функції*/

		/* --- Відображення погоди на в місті Калуш (по замовчуваню) --- */
		var cityname ="Калуш";
		forecast_1days(cityname);
		forecast_3days(cityname);
		forecast_7days(cityname)


		/* --- Відображення погоди на добу (після нажимання кнопки пошук)--- */
	$('#search_button').click(function() {
		var cityname = $('#search').val();
		forecast_1days(cityname);
		forecast_3days(cityname);
		forecast_7days(cityname)

	});

	/*відопроження погоди після нажимання клавіші ENTER*/
	$('#search').submit(function() {
		var cityname = $('#search').val();
		forecast_1days(cityname);
		forecast_3days(cityname);
		forecast_7days(cityname)

	});

			/*Функція прогоди на поточний час*/
	function current_weather(city){
			$.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APPID, function(data) {
				$('#city_'+city).html(data.name);
				$('#clouddescr_сurrent_'+city).html(data.weather[0].description);
				$('#cloudimg_сurrent_'+city).attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
				var temp = data.main.temp - 273.15;
				$('#temp_сurrent_'+city).html(temp.toFixed(0));
				$('#pressure_сurrent_'+city).html(data.main.pressure);
				$('#humidity_сurrent_'+city).html(data.main.humidity);
				$('#windspeed_сurrent_'+city).html(data.wind.speed);
			}, 'json')/*.done(function() {
				console.log('Request completed successfully');
			})*/.fail(function() {
				console.log('Request is failure');
			});
		}
		/*Кінець функції*/

		/*Погода в областних центрах*/
		current_weather('Kyiv');
		current_weather('Lviv');
		current_weather('Donetsk');
		current_weather('Zaporizhzhya');
		current_weather('Odessa');
		current_weather('Ternopil');
		current_weather('Rivne');
		current_weather('Kherson');
		current_weather('Lutsk');
		current_weather('Zhytomyr');

		/*Погода в світі*/
		current_weather('Dubai');
		current_weather('London');
		current_weather('Paris');
		current_weather('Moscow');
		current_weather('Mexico');
		current_weather('Pekin');
		current_weather('Sidney');
		current_weather('Warsaw');
		current_weather('Minsk');
			
	/*Прогноз погоди на 3 доби*/
function forecast_3days(city){
		$.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&APPID=' + APPID + '&cnt=5', function(data) {
		$('#div_3days>*').remove();
		for(var i=0; i<5; i++){
			$('#div_3days').append('<div id="'+i+'"><p><p><b><span id="date_3days' + i + '"></span></b></><p><img id="icon_3days' + i + '"></p><p>Ранок: <span id="temp_3days_morning' + i + '"></span>&#8451;</p><p>Обід: <span id="temp_3days_day' + i + '"></span>&#8451;</p><p>Вечір: <span id="temp_3days_eve' + i + '"></span>&#8451;</p><p>Ніч: <span id="temp_3days_night' + i + '"></span>&#8451;</p><p>Тиск: <span id="pressure_3days' + i + '"></span> hPa</p><p>Вологість: <span id="humidity_3days' + i +'"></span>%</p></div>')
			$('#date_3days' + i).html();
			var temp_morning= data.list[i].temp.morn - 273.15;
			$('#temp_3days_morning' + i).html(temp_morning.toFixed(0) );
			var temp_day= data.list[i].temp.day - 273.15;
			$('#temp_3days_day' + i).html(temp_day.toFixed(0) );
			var temp_eve= data.list[i].temp.eve - 273.15;
			$('#temp_3days_eve' + i).html(temp_eve.toFixed(0) );
			var temp_night= data.list[i].temp.night - 273.15;
			$('#temp_3days_night' + i).html(temp_night.toFixed(0) );
			$('#pressure_3days' + i).html(data.list[i].pressure);
			$('#humidity_3days' + i).html(data.list[i].humidity);
			$('#icon_3days' + i).attr('src', 'http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png');
				dt (data.list[i].dt)
				function dt (dt){
				var now = new Date (dt*1000);
				var dayNumber = now.getDay();
						/* Функція переведення дня тижня з числоваго до словесного вигляду */
						day_of_week (dayNumber)
						function day_of_week (dayNumber){
								if (dayNumber==0){
									$('#date_3days' + i).html('Неділя');
								}

								else if (dayNumber==1){
									$('#date_3days' + i).html('Понеділок');
								}

								else if (dayNumber==2){
									$('#date_3days' + i).html('Вівторок');
								}

								else if (dayNumber==3){
									$('#date_3days' + i).html('Середа');
								}

								else if (dayNumber==4){
									$('#date_3days' + i).html('Четвер');
								}

								else if (dayNumber==5){
									$('#date_3days' + i).html("П'ятниця");
								}

								else if (dayNumber==6){
									$('#date_3days' + i).html('Субота');
								}
						}
				}
		}
		}, 'json').done(function() {
			console.log('Request completed successfully');
		}).fail(function() {
			console.log('Request is failure');
		});
	}
/*Кінець функції*/
	
	/*Прогноз погоди на 1 тижні*/
	function forecast_7days(city){
		$.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&APPID=' + APPID + '&cnt=14', function(data) {
		$('#div_7days>*').remove();
		for(var i=0; i<14; i++){
			$('#div_7days').append('<div id="'+i+'"><p><b><span id="date_7days' + i + '"></span></b></><p><img id="icon_7days' + i + '"></p><p>t= <span id="temp_7days_day' + i + '"></span>&#8451;</p></div>');
			var temp_day= data.list[i].temp.day - 273.15;
			$('#temp_7days_day' + i).html(temp_day.toFixed(0) );
			$('#icon_7days' + i).attr('src', 'http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png');
				dt (data.list[i].dt)
					function dt (dt){
					var time = new Date (dt*1000);
					var day = time.getDate();
					var month = time.getMonth();
						if (month==0){
							month="Січень";
						}
						else if  (month==1){
							month="Лютий";
						}
						else if (month==2){
							month="Березень";
						}
						else if (month==3){
							month="Квітень";
						}
						else if (month==4){
							month="Травень";
						}
						else if (month==5){
							month="Червень";
						}
						else if (month==6){
							month="Липень";
						}
						else if (month==7){
							month="Серпень";
						}
						else if (month==8){
							month="Вересень";
						}
						else if (month==9){
							month="Жовтень";
						}
						else if (month==10){
							month="Листопад";
						}
						else if (month==11){
							month="Грудень";
						}
					var allDate = (day +"</br>"+ month);
					$('#date_7days' + i).html(allDate);
				}

		}
		}, 'json').done(function() {
			console.log('Request completed successfully');
		}).fail(function() {
			console.log('Request is failure');
		});
	}
/*Кінець функції*/






}); 
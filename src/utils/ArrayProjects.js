import React, {useState} from "react";
import {View} from 'react-native';

    export let array_Projects = [
    {"document":"Pasoporte COVID-19", "date":"03.11.2022", "owner":"usuari", "colection":"salut", "file_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "favorit":"true"},
    {"document":"Pasoporte COVID-19", "date":"21.01.2023", "owner":"Rosa", "colection":"salut", "file_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "favorit":"true"},
    {"document":"Tarjeta Sanitaria Europea", "date":"28.09.2027", "owner":"usuari", "colection":"salut", "file_url":require("../assets/taxi_cab_transportation_automobile_car_vehicle_icon_128574.png"), "favorit":"true"},
    {"document":"Vuelo Valecia-Londres", "date":"15.02.2022", "owner":"usuari", "colection":"transport", "file_url":require("../assets/-meal_89750.png"), "favorit":"false"},
    {"document":"Vuelo Valecia-Londres", "date":"15.02.2022", "owner":"Rosa", "colection":"transport", "file_url":require("../assets/-meal_89750.png"), "favorit":"false"},
    {"document":"Resultado PCR", "date":"08.02.2022", "owner":"usuari", "colection":"salut", "file_url":require("../assets/olimpycs_atletismo_icon-icons.com_68597.png"), "favorit":"true"},
    {"document":"Reserva Hotel Seasons", "15.02.2022":"Viajeros", "owner":"usuari", "colection":"allotjament", "file_url":require("../assets/travel-holiday-vacation-310_89073.png"), "favorit":"false"},
    {"document":"Tarjeta Sanitaria Europea", "date":"10.06.2025", "owner":"Rosa", "colection":"salut", "file_url":require("../assets/taxi_cab_transportation_automobile_car_vehicle_icon_128574.png"), "favorit":"true"},
    {"document":"Resultado PCR", "date":"06.02.2022", "owner":"Rosa", "colection":"salut", "file_url":require("../assets/olimpycs_atletismo_icon-icons.com_68597.png"), "favorit":"true"}];
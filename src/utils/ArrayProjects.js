import React, {useState} from "react";
import {View} from 'react-native';

    // export let array_Projects = [
    // {"document":"Pasoporte COVID-19", "date":"03.11.2022", "owner":"usuari", "colection":"salut", "file_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "favorit":"true"},
    // {"document":"Pasoporte COVID-19", "date":"21.01.2023", "owner":"Rosa", "colection":"salut", "file_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "favorit":"true"},
    // {"document":"Tarjeta Sanitaria Europea", "date":"28.09.2027", "owner":"usuari", "colection":"salut", "file_url":require("../assets/taxi_cab_transportation_automobile_car_vehicle_icon_128574.png"), "favorit":"true"},
    // {"document":"Vuelo Valecia-Londres", "date":"15.02.2022", "owner":"usuari", "colection":"transport", "file_url":require("../assets/-meal_89750.png"), "favorit":"true"},
    // {"document":"Vuelo Valecia-Londres", "date":"15.02.2022", "owner":"Rosa", "colection":"transport", "file_url":require("../assets/-meal_89750.png"), "favorit":"true"},
    // {"document":"Resultado PCR", "date":"08.02.2022", "owner":"usuari", "colection":"salut", "file_url":require("../assets/olimpycs_atletismo_icon-icons.com_68597.png"), "favorit":"true"},
    // {"document":"Reserva Hotel Seasons", "15.02.2022":"Viajeros", "owner":"usuari", "colection":"allotjament", "file_url":require("../assets/travel-holiday-vacation-310_89073.png"), "favorit":"false"},
    // {"document":"Tarjeta Sanitaria Europea", "date":"10.06.2025", "owner":"Rosa", "colection":"salut", "file_url":require("../assets/taxi_cab_transportation_automobile_car_vehicle_icon_128574.png"), "favorit":"true"},
    // {"document":"Resultado PCR", "date":"06.02.2022", "owner":"Rosa", "colection":"salut", "file_url":require("../assets/olimpycs_atletismo_icon-icons.com_68597.png"), "favorit":"true"}];


    export let array_Projects = [
        {
            "titular_perfil": "Ximo",
            "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"),
            "coleccio": "salut",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "Pasoporte COVID-19",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Enrique",
            "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"),
            "coleccio": "salut",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "Pasoporte COVID-19",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Josep",
            "imatge_url":require("../assets/taxi_cab_transportation_automobile_car_vehicle_icon_128574.png"),
            "coleccio": "salut",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "Tarjeta Sanitaria Europea",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Ximo",
            "imatge_url":require("../assets/-meal_89750.png"),
            "coleccio": "transport",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "Vuelo Valecia-Londres",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Enrique",
            "imatge_url":require("../assets/-meal_89750.png"),
            "coleccio": "transport",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "Vuelo Valecia-Londres",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Josep",
            "imatge_url":require("../assets/olimpycs_atletismo_icon-icons.com_68597.png"),
            "coleccio": "salut",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "Resultado PCR",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Ximo",
            "imatge_url":require("../assets/travel-holiday-vacation-310_89073.png"),
            "coleccio": "allotjament",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "Reserva Hotel Seasons",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Enrique",
            "imatge_url":require("../assets/taxi_cab_transportation_automobile_car_vehicle_icon_128574.png"),
            "coleccio": "salut",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "Tarjeta Sanitaria Europea",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Josep",
            "imatge_url":require("../assets/olimpycs_atletismo_icon-icons.com_68597.png"),
            "coleccio": "salut",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "Resultado PCR",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Ximo",
            "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"),
            "coleccio": "viatjes",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "testinsertdocumento2",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Enrique",
            "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"),
            "coleccio": "viatjes",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "testinsertdocumento2",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Josep",
            "imatge_url":require("../assets/taxi_cab_transportation_automobile_car_vehicle_icon_128574.png"),
            "coleccio": "viatjes",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "testinsertdocumento2",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Ximo",
            "imatge_url":require("../assets/-meal_89750.png"),
            "coleccio": "viatjes",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "testinsertdocumento2",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Enrique",
            "imatge_url":require("../assets/-meal_89750.png"),
            "coleccio": "viatjes",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "testinsertdocumento2",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Josep",
            "imatge_url":require("../assets/olimpycs_atletismo_icon-icons.com_68597.png"),
            "coleccio": "viatjes",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "testinsertdocumento2",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Ximo",
            "imatge_url":require("../assets/travel-holiday-vacation-310_89073.png"),
            "coleccio": "viatjes",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "testinsertdocumento2",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Enrique",
            "imatge_url":require("../assets/taxi_cab_transportation_automobile_car_vehicle_icon_128574.png"),
            "coleccio": "viatjes",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "testinsertdocumento2",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        },
        {
            "titular_perfil": "Josep",
            "imatge_url":require("../assets/olimpycs_atletismo_icon-icons.com_68597.png"),
            "coleccio": "viatjes",
            "_id": { "$oid": "6203ad358f4c332273fcf95b" },
            "nom_document": "testinsertdocumento2",
            "id_usuari": "620290dde4ec0ec87b3fd85b",
            "data_vigent": "2022-02-02T18:14:10.197Z"
        }
    ];
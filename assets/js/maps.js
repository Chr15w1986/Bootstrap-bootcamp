function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: 52.39693888264077,
            lng: -1.805126967320252
        }
    });

    const myMarks = [{
            "lat": 52.39693888264077,
            "lng": -1.805126967320252, "name": "Workplace"
        },
        {
            "lat": 52.614162,
            "lng": -1.619054, "name": "Home"
        },
        {
            "lat": 52.63835,
            "lng": -1.635173, "name": "Old house"
        },
        {
            "lat": 52.269423,
            "lng": -1.53561, "name": "College"
        }
    ];
    for (let i = 0; i < myMarks.length; i++) {

        const marker = new google.maps.Marker ({
            position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
            map: map,
            title: myMarks[i].name
        });

        marker.setMap(map);
    }
}